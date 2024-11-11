---
title: Home Lab (0) · Proxmox Virtual Environment
date: 2021-08-10 19:03:48
tags: [Home Lab, Virtual Machine]
categories: [Self Hosted, Home Lab]
---

# Download & Install

Download links: [PVE](https://www.proxmox.com/en/downloads/category/iso-images-pve), [Rufus](https://rufus.ie/downloads/).

# General Setups

## Port Forwarding

Access web interface on port 443.

```bash
iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8006
```

## Startup Scripts

There is no `rc.local` file in PVE, but you can use `crontab`.

Edit file `/etc/crontab`, add a line:

```bash
@reboot root iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8006
# * * * * * root /also/support/user/scripts.sh
```

<!-- more -->

## Remove Subscription Notice

Edit `/usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js` (line 513 at PVE v7.2).

```js
// change if (res === null || res === undefined || !res || res .data.status.toLowerCase() !== 'active') {
if (false && (res === null || res === undefined || !res || res .data.status.toLowerCase() !== 'active')) {
```

## Disable Enterprise Repository

In `/etc/apt/sources.list.d/pve-enterprise.list`, comment out

```bash
# deb https://enterprise.proxmox.com/debian/pve bullseye pve-enterprise
```

Add a no-subscription repository `Node - Updates - Repositories - Add`.

## Limit ZFS Memory Usage

ZFS uses 50% of the host memory for the Adaptive Replacement Cache by default. Allocating enough memory for the ARC is crucial for IO performance, so reduce it with caution.

As a general rule of thumb, allocate at least `2 GiB Base + 1 GiB/TiB-Storage`. To permanently change the ARC limits, add the following line to `/etc/modprobe.d/zfs.conf`

```bash
# limits the usage to 8 GiB (8*1024*1024*1024)
options zfs zfs_arc_max=8589934592
```

If your root file system is ZFS, you must update your initramfs every time this value changes:

```bash
update-initramfs -u
```

You **must reboot** to activate these changes.

# Managing VMs

## Uploading Disks

Upload the image file to `local` storage, and the target file should be at `/var/lib/vz/template/iso/[IMAGE].img`. Import the disk image using this command:

```bash
qm importdisk [VMID] /var/lib/vz/template/iso/[IMAGE].img local-lvm
```

## Managing Backups

All backups are stored at `/var/lib/vz/dump/` folder.

Custom storage folders are listed at `Datacenter - Storage - Path/Target`.
