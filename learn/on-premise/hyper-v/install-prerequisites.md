---
title: "Install Prerequisites Softwares"
id: ""
sidebar_label: "Install Prerequisites Softwares"
---
---

## Ubuntu

### The ssh user has privileges(root/sudo) for install/upgrade utility softwares

#### Platform Instance

- If given ssh user has privileges(root/sudo) to install/upgrade.
- WME Installer will automatically install the required softwares.
- Same applies for StudioWorkspace Instance / AppDeployment Instance as well.
- Internet is not required for Installation in this case.

#### StudioWorkspace Instance / AppDeployment Instance

- No need to do any configurations.The Platform will do it automatically.

### The ssh user don't have privileges install/upgrade utility software

#### Platform Instance

- No need to do any configurations,WME Installer will automatically install required softwares.

#### StudioWorkspace Instance / AppDeployment Instance

The given ssh user don't have permission to install software Then install below as per operating system.

- Install  wget

```bash
sudo apt-get install wget  -y
```

- Install python3.

```bash
sudo apt-get install python3 -y
```

- Install Docker repository

```bash
    apt-get install apt-transport-https
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" > /etc/apt/sources.list.d/docker.list
    apt-get update  
    apt-get install iptables ca-certificates -y
```

- Install Docker Engine 18.06.2

```bash
    sudo apt-get install docker-ce=18.06.2~ce~3-0~ubuntu -y
```

- To upgrade and install the latest version of Docker
  - Run the following command to list available versions

  ```bash
    apt-cache madison docker-ce
    apt-cache madison docker-ce-cli
  ```

  - Run the following command to Install the specific version of Docker

  ```bash
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    example: sudo apt-get install docker-ce=5:19.03.13~3-0~ubuntu-xenial docker-ce-cli=5:19.03.13~3-0~ubuntu-xenial containerd.io
  ```

- If the user given to the Platform don't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.  
- Have to execute these commands from privileged user.
  - Add user to docker group.  
  - Make the user as owner for docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon reload, iptable.

    ```bash
        usermod -aG docker <user>
        mkdir -p /etc/systemd/system/docker.service.d/
        chown -R <user>:<user> /etc/systemd/system/docker.service.d
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
        ```

## RHEL

### The ssh user has privileges(root/sudo) or user doesn't have privileges for install/upgrade utility softwares

#### Platform Instance

- If given ssh user has privileges(root/sudo) or user doesn't have privileges to install/upgrade. WME Installer will automatically install the Docker software.
- Install below prerequisites in Platform

- update cache

```bash
   yum update -y
```

- Install  wget

```bash
  yum install wget  -y
```

- Install python3

```bash
  yum install python3 -y
```

#### StudioWorkspace Instance / AppDeployment Instance

Install below software on StudioWorkspace Instance / AppDeployment Instance for unprivileged ssh user's

:::note
Use the same version numbers as mentioned.
:::

- update cache

```bash
   yum update -y
```

- Install  wget

```bash
  yum install wget  -y
```

- Install container-selinux for RHEL 7 version only

```bash
  yum install http://ftp.riken.jp/Linux/cern/centos/7/extras/x86_64/Packages/container-selinux-2.10-2.el7.noarch.rpm -y
```

- Install docker 18.06.2-ce

```bash
  wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-18.06.2.ce-3.el7.x86_64.rpm
  yum install docker-ce-18.06.2.ce-3.el7.x86_64.rpm -y
```

```bash
  systemctl enable docker
  systemctl start docker
```

- Upgrade or install a latest version of Docker
  - Stop the current Docker

  ```bash
    service docker stop
  ```

  - List the current Docker package version
  
  ```bash
    yum list docker-ce
  ```

  - Remove the current Docker Engine

  ```bash
    rpm -e <installed-package>
    example: rpm -e docker-ce.x86_64
  ```
  
  - For Install Docker use the following commands
  
  ```bash
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.3.7-3.1.el8.x86_64.rpm
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/docker-ce-19.03.13-3.el8.x86_64.rpm
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/docker-ce-cli-19.03.13-3.el8.x86_64.rpm
    sudo yum install docker-ce-cli-19.03.13-3.el8.x86_64.rpm -y
    sudo yum install containerd.io-1.3.7-3.1.el8.x86_64.rpm -y
    sudo yum install docker-ce-19.03.13-3.el8.x86_64.rpm -y
  ```

  ```bash
  systemctl enable docker
  systemctl start docker
  docker --version
  ```

- Install python3

```bash
  yum install python3 -y
```

### Extra configurations on RHEL StudioWorkspace Instance / AppDeployment Instance if ssh user doesn't have privileges(non sudo users)

- If the user given to the Platform doesn't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Have to execute these commands as a privileged user.
  - Add user to the docker group.
  - Make a user the owner of the docker systemd process
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon reload, iptable.

    ```bash
        usermod -aG docker <user>
        chown -R <user>:<user> /usr/lib/systemd/system
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
    ```
