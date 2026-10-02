---
title: Self-Hosted Bitwarden / Vaultwarden Password Manager
date: 2024-12-16 18:30:53
tags: [Home Lab, Cloud Server]
categories: [Software Engineering, Home Lab]
lang: zh-CN
---

### 前言

[Bitwarden](https://bitwarden.com/) 是一个开源的密码管理器，可以帮助你存储和保护你的密码。它有一个云服务，但是你也可以选择自己搭建一个私有的 Bitwarden 服务器（ 通过 [docker](https://www.docker.com/) 构建非常简单），这样你就可以完全控制你的数据。

本文介绍的是一个社区维护的 Bitwarden 服务器，叫做 [Vaultwarden](https://github.com/dani-garcia/vaultwarden)。Vaultwarden 兼容 Bitwarden 的客户端，支持 Bitwarden 的所有常用功能，并且官方需要订阅的高级功能都是免费的。

<!--more-->

注意，本文主要关注的是服务器的搭建，如果你想了解更多关于 Bitwarden 的功能，请查看 [Bitwarden 官方文档](https://bitwarden.com/help/) 。

### 安装

其实官方的指南写的很简单了，如果只是想看效果的话，只需要一行命令就可以了：

```bash
docker pull vaultwarden/server:latest
docker run --detach --name vaultwarden \
  --env DOMAIN="https://vw.domain.tld" \
  --volume /vw-data/:/data/ \
  --restart unless-stopped \
  --publish 80:80 \
  vaultwarden/server:latest
```

当然，我们想要更多的控制权，比如使用 [docker-compose](https://docs.docker.com/compose/) 来管理容器，或者使用 [traefik](https://doc.traefik.io/traefik/) 来做反向代理。

下面我给出我自己的配置文件，你可以根据自己的需求进行修改：

```yaml
services:
  vaultwarden:
    container_name: bitwarden
    image: vaultwarden/server:latest
    restart: always
    networks:
      - traefik-network

    volumes:
      - PH_DATABASE/bitwarden:/data

    environment:
      DOMAIN: "https://PH_HOSTNAME"
      SIGNUPS_ALLOWED: "false"
      PH_ADMIN_CONFIG
      # DISABLE_ADMIN_TOKEN: "true"
      PUSH_ENABLED: "true"
      PUSH_INSTALLATION_ID: "Your installation ID"
      PUSH_INSTALLATION_KEY: "Your installation key"

    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik-network"

      - "traefik.http.routers.bitwarden.priority=60350"
      - "traefik.http.routers.bitwarden.entryPoints=https"
      - "traefik.http.routers.bitwarden.tls.certresolver=cert"
      - "traefik.http.routers.bitwarden.rule=Host(`PH_HOSTNAME`)"
      - "traefik.http.routers.bitwarden.service=vaultwarden@docker"
      - "traefik.http.services.vaultwarden.loadbalancer.server.port=80"

      - "traefik.http.routers.bitwarden-admin.priority=60360"
      - "traefik.http.routers.bitwarden-admin.entryPoints=https"
      - "traefik.http.routers.bitwarden-admin.tls.certresolver=cert"
      - "traefik.http.routers.bitwarden-admin.rule=Host(`PH_HOSTNAME`) && PathPrefix(`/admin`)"
      - "traefik.http.routers.bitwarden-admin.middlewares=sso"
      - "traefik.http.routers.bitwarden-admin.service=vaultwarden@docker"

    logging:
      driver: "json-file"
      options:
        max-size: "100m"

networks:
  traefik-network:
    external: true
```

解释一下做了什么：

1. 我们使用了 traefik 来做反向代理，这样我们可以使用 https 来访问我们的 Bitwarden 服务器。
2. 我们需要改动的配置是 `PH_*` 开头的，这样我们可以在不同的环境中使用相同的配置文件。
3. 我们关闭了注册功能，只有管理员可以添加用户。当然你可以在配置阶段打开注册功能，然后在注册完成后关闭，不过我觉得通过管理员添加用户更加方便且安全。

对 Admin Page, 我额外做了一层 SSO 的验证，这样只有我才能访问。如果你对 SSO 很放心，可以打开 `DISABLE_ADMIN_TOKEN`，这样就不需要输入密码了。

当然，在设置完成后，你可以彻底关闭 Admin Page 的访问权限，我写了一个脚本自动切换这个功能。

```bash
RAND=$(openssl rand -base64 48)
ADMIN_PASS=$(echo "$RAND" | tr '/' '_')
if [ ! $ADMIN_ENABLED ]; then
  ADMIN_PASS=""
fi

replace='s/"admin_token": ".*",/"admin_token": "'
replace+="$ADMIN_PASS\",/"
sed -i "$replace" "PH_DATABASE/bitwarden/config.json"

ADMIN_CONFIG="# Admin Page Disabled"
if [ $ADMIN_ENABLED ]; then
    ADMIN_CONFIG="ADMIN_TOKEN: \"$ADMIN_PASS\""
fi
```

`ADMIN_ENABLED` 表示是否开启 Admin Page，`ADMIN_CONFIG` 用于替换配置文件中的 `PH_ADMIN_CONFIG`。

### 配置

其实安装完成后服务就可以正常运行了，你可以自己探索各项功能。一个有用的功能是邮箱服务，在 Admin Page 中，转到 `Settings`，在 `SMTP Email Settings` 中填写你的邮箱信息。这样你就可以接受注册、登陆等通知邮件了。

一个注册新用户的 tip：不需要打开注册功能，只需要在 Admin Page 中添加用户即可。在 Admin Page 中，转到 `Users`，在 `invite user` 中输入邮箱地址，然后点击 `Send Invite`。不一定需要真的发出邀请邮件，这个用户其实已经可以使用了。即使你关闭了注册功能，这个邮箱也可以在登录页面注册。

最后，因为官方服务会不断更新，所以你可能需要定期更新你的服务。我在使用一两年以后出现了手机客户端无法登录的问题，所以我们可以配置好自动更新服务：

```yml
services:

  # ...

  watchtower:
    container_name: watchtower
    image: containrrr/watchtower
    restart: always
    networks:
      - traefik-network
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: bitwarden  # 只更新 bitwarden 服务

    logging:
      driver: "json-file"
      options:
        max-size: "1m"

  # ...
```

这样你的服务就会在 Vaultwarden 发布新版本后自动更新了。
