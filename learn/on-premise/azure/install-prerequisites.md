---
title: "Install Prerequisites Softwares"
id: ""
sidebar_label: "Install Prerequisites Softwares"
---
---

## Ubuntu

### The ssh user has privileges(root/sudo) for install/upgrade utility softwares

- If given ssh user has privileges(root/sudo) to install/upgrade.
- WME Installer will automatically installs required softwares.
- Same applies for StudioWorkspace Instance / AppDeployment Instance as well.
- Internet is not required for Installation in this case.

### The ssh user don't have privileges install/upgrade utility softwares

The given ssh user don't have permission to install softwares Then install below as per operating system.

- Install  wget

```bash
sudo apt-get install wget  -y
```

- Install python3.

```bash
sudo apt-get install python3 -y
```

- Install docker 18.06.2-ce

```bash
    apt-get install apt-transport-https
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" > /etc/apt/sources.list.d/docker.list
    apt-get update  
    apt-get install iptables ca-certificates
```

```bash
    apt-get install docker-ce=18.06.2~ce~3-0~ubuntu
```

### Extra configurations on Ubuntu StudioWorkspace Instance / AppDeployment Instance

#### The ssh user has privileges(root/sudo) on Ubuntu StudioWorkspace Instance / AppDeployment Instance

- No need to do any configurations. Platform will do it automatically.

#### The ssh user don't have privileges(non sudo users) Ubuntu StudioWorkspace Instance / AppDeployment Instance

- If the user given to the Platform don't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.  
- Have to execute these commands from privileged user.
  - Add user to docker group.  
  - Make the user as owner for docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon reload, iptable.

    ```bash
        usermod -aG <user> docker
        chown -R <user>:<user> /etc/systemd/system/docker.service.d
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
        ```

## RHEL

Install below softwares on Platform Instance and StudioWorkspace Instance / AppDeployment Instance

:::note
Use same version numbers as mentioned.
:::

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

### Extra configurations on RHEL StudioWorkspace Instance / AppDeployment Instance

#### The ssh user has privileges(root/sudo) on RHEL StudioWorkspace Instance / AppDeployment Instance

- No need to do any configurations. Platform will do it automatically.

#### The ssh user don't have privileges(non sudo users) on RHEL StudioWorkspace Instance / AppDeployment Instance

- If the user given to the Platform don't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Have to execute these commands from privileged user.
  - Add user to docker group.
  - Make the user as owner for docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon reload, iptable.

    ```bash
        usermod -aG <user> docker
        chown -R <user>:<user> /usr/lib/systemd/system
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
        ```
