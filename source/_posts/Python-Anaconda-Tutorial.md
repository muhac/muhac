---
title: Python · Anaconda Tutorial
date: 2020-01-16 00:01:48
tags: [Python, Anaconda, Conda]
categories: [Software Engineering, Python]
lang: zh-CN
group: snippet
hidden: true
---

这里只列出了部分基础操作命令。

### 环境管理

1. **查看所有环境**
   ```bash
   conda env list
   ```
   或者使用命令
   ```bash
   conda info --envs
   ```

2. **创建环境**
   ```bash
   conda create --name your_env_name
   ```
   或者使用命令
   ```bash
   conda create -n your_env_name
   ```
   指定 Python 版本和安装包
   ```bash
   conda create -n your_env_name python=3.5 numpy pandas
   ```
   克隆一部分旧的环境
   ```bash
   conda create -n your_env_name --clone oldname
   ```

   <!-- more -->

3. **启用环境**
   ```bash
   conda activate your_env_name
   ```
   或者使用命令
   ```bash
   activate your_env_name
   ```

4. **停用环境**
   ```bash
   conda deactivate
   ```

5. **删除环境**
   ```bash
   conda remove -n your_env_name --all
   ```

6. **导出环境配置**
   ```bash
   conda env export > environment.yml
   ```
   跨平台导出环境可能会报错 `ResolvePackageNotFound` 可以尝试
   ```bash
   conda env export --no-builds > environment.yml
   ```

7. **根据配置文件生成环境**
   ```bash
   conda env create -f environment.yml
   ```

8. **根据配置文件升级环境**
   ```bash
   conda env update --name root --file environment.yml
   ```

### 包管理

1. **列举包**
   ```bash
   conda list
   ```
   指定某个包
   ```bash
   conda list -n packagename
   ```

2. **安装包**
   ```bash
   conda install packagename
   ```
   指定某个环境
   ```bash
   conda install -n envname
   ```

3. **更新包**
   ```bash
   conda update packagename
   ```
   指定某个环境
   ```bash
   conda update -n envname packagename
   ```

4. **删除包**
   ```bash
   conda remove packagename
   ```
   指定某个环境
   ```bash
   conda remove -n envname
   ```

5. **更新 conda、anaconda、python**
   ```bash
   conda update conda
   conda update anaconda
   conda update python
   ```
   指定 Python 版本
   ```bash
   conda install python=3.6
   ```
