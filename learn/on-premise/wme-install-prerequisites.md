---
title: "Install  Prerequisites"
id: ""
sidebar_label: "Install  Prerequisites"
---
---

### In Ubuntu
- We don't need to install any software. 
- WME Installer will automatically installs required softwares.

### In RHEL 
- Install wget 
  ```
   sudo yum install wget  -y
  ```
- Install container-selinux
  ```
   yum install http://ftp.riken.jp/Linux/cern/centos/7/extras/x86_64/Packages/container-selinux-2.10-2.el7.noarch.rpm -y
   ```
- Install docker 18.06.2-ce
  ```
   wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.06.2.ce-3.el7.x86_64.rpm
  ```
  ```
   yum install docker-ce-18.06.2.ce-3.el7.x86_64.rpm -y
   ```
  ```
   systemctl start docker
   ```
- Install python3
  ```
   yum install python3 -y
   ```






