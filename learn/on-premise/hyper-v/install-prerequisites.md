---
title: "Install Prerequisites Softwares"
id: ""
sidebar_label: "Install Prerequisites Softwares"
---
---

## The ssh user has privileges(root/sudo) for install/upgrade

- If given ssh user has privileges(root/sudo) to install/upgrade.
- WME Installer will automatically installs required softwares.
- Same applies for External Instance as well.
- Internet is not required for Installation in this case.

## If you using OVA file shipped by WaveMaker
- Skip this step in this case.

## The ssh user don't have privileges

- The given ssh user don't have permission to install softwares
- Then install below as per operating system.

### Ubuntu

- Install  wget

```bash
sudo apt-get install wget  -y
```

- Install python3.

```bash
sudo apt-get install python3 -y
```

### RHEL

- Install  wget

```bash
sudo yum install wget  -y
```

- Install container-selinux

```bash
yum install http://ftp.riken.jp/Linux/cern/centos/7/extras/x86_64/Packages/container-selinux-2.10-2.el7.noarch.rpm -y
```

- Install docker 18.06.2-ce

```bash
wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.06.2.ce-3.el7.x86_64.rpm
yum install docker-ce-18.06.2.ce-3.el7.x86_64.rpm -y
```

```bash
systemctl start docker
```

- Install python3

```bash
yum install python3 -y
```

### Extra configurations on External Instances
- If the user given to the Platform don't have privileged access, then provide below permission for the user given on External Instance. 
- Have to execute these commands from privileged user.
    - Add user to docker group. 
    - Give read, write, execution permission for docker service.
    - data directory should be owned by the user.
    - Give permission to manage docker.service, systemctl daemon reload, iptable.
        ```bash
            usermod -aG <user> docker
            chown -R <user> /etc/systemd/system/docker.service.d
            chown -R <user>:<user> /data
            echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
        ```
