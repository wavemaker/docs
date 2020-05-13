---
title: "Install  Prerequisites"
id: ""
sidebar_label: "Install  Prerequisites"
---
---

## WaveMaker Images (OVA/VHD/AMI)

If you have WaveMaker Images (OVA/VHD/AMI)

- No need to install any Prerequisites.
- OVA/VHD/AMI will come up with all Prerequisites.

## Operating System Pre-Installed

  - If given user has privileges(root/sudo) to install/upgrade.
  - WME Installer will automatically installs required softwares.
  - Same applies for External Instance as well.
  - Internet is not required for Installation in this case.

## Other OS
  
For other cases, install below as per operating system.

### Ubuntu 

- Install  wget

```
sudo apt-get install wget  -y
```

- Install python3.

```
sudo apt-get install python3 -y
```

### RHEL

- Install  wget

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
yum install docker-ce-18.06.2.ce-3.el7.x86_64.rpm -y
```

```  
systemctl start docker
```

- Install python3

```
yum install python3 -y
```