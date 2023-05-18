---
title: "Install Prerequisites Softwares"
id: "install-prerequisites"
sidebar_label: "Install Prerequisites Softwares"
---
---

:::note
 Before Proceeding with installing the softwares, Check the [Requirements here](/learn/on-premise/prerequisites).
:::

:::note
 The following docker installation steps are for reference only, you can use your own approach.
:::  

## Ubuntu

### The ssh user has privileges(root/sudo) user doesn't have privileges for install/upgrade utility softwares

#### Platform Instance

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
  ```

  - To add docker repository for ubuntu bionic(18.04.5)

  ```bash
    echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" > /etc/apt/sources.list.d/docker.list
  ```

  - To add docker repository for ubuntu focal(20.04.2.0)

  ```bash
    echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" > /etc/apt/sources.list.d/docker.list
  ```

  ```bash
  apt-get update  
  apt-get install iptables ca-certificates -y
  ```

- To upgrade or Install the latest version of Docker
  - Run the following command to list available versions

  ```bash
    apt-get update
    apt-cache madison docker-ce
    apt-cache madison docker-ce-cli
  ```

  - Run the following command to Install the specific version of Docker

  ```bash
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    example: sudo apt-get install docker-ce=5:23.0.1-1~ubuntu.20.04~focal docker-ce-cli=5:23.0.1-1~ubuntu.20.04~focal containerd.io -y
  ```

#### Install Docker using WaveMaker Script

- For the Ubuntu users, to install Docker to the latest version, the user need to use their own approach or WaveMaker provides a script to install.

  - Run the following command to install the Docker.

```bash 
   sudo bash wme-utility.sh --docker-upgrade 
  ```  

#### StudioWorkspace Instance / AppDeployment Instance

- No need to do any configurations. The Platform will do it automatically.

### The ssh user does not have privileges install/upgrade utility software

#### Platform Instance

```bash
  usermod -aG docker <user>
  chown -R <user>:<user> /wm-data  
```

#### StudioWorkspace Instance / AppDeployment Instance

The given ssh user does not have permission to install software Then install below as per the operating system.

- If the user given to the Platform doesn't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Create a user group if not present in StudioWorkspace Instance / AppDeployment Instance .
  
  ```bash
    sudo groupadd <user>
  ```

- Have to execute these commands from privileged users.
  - Add user to the docker group.  
  - Make the user as an owner for the docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon-reload, iptable.

    ```bash
        usermod -aG docker <user>
        mkdir -p /etc/systemd/system/docker.service.d/
        chown -R <user>:<user> /etc/systemd/system/docker.service.d
        chown -R <user>:<user> /data
        echo "%<user> ALL=NOPASSWD: /bin/systemctl restart docker,/bin/systemctl daemon-reload,/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
        ```
## RHEL

### The ssh user has privileges (root/sudo) or user doesn't have privileges for install/upgrade utility softwares

#### Platform Instance and StudioWorkspace Instance / AppDeployment Instance

- If given ssh user has privileges (root/sudo) or the user doesn't have privileges to install/upgrade. WME Installer will automatically install the Docker software.
- Install below prerequisites in Platform

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
  yum install http://mirror.centos.org/centos/7/extras/x86_64/Packages/container-selinux-2.107-1.el7_6.noarch.rpm -y
```

- Install the latest version of Docker
  
  - Install prerequissites to install Docker in RHEL7
  
   ```bash
      yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
      wget http://mirror.centos.org/centos/7/extras/x86_64/Packages/slirp4netns-0.4.3-4.el7_8.x86_64.rpm
      wget http://mirror.centos.org/centos/7/extras/x86_64/Packages/fuse3-devel-3.6.1-4.el7.x86_64.rpm
      wget http://mirror.centos.org/centos/7/extras/x86_64/Packages/fuse3-libs-3.6.1-4.el7.x86_64.rpm
      wget http://mirror.centos.org/centos/7/extras/x86_64/Packages/fuse-overlayfs-0.7.2-6.el7_8.x86_64.rpm
      sudo yum install slirp4netns-0.4.3-4.el7_8.x86_64.rpm -y
      sudo yum install fuse3-devel-3.6.1-4.el7.x86_64.rpm -y
      sudo yum install fuse3-libs-3.6.1-4.el7.x86_64.rpm -y
      sudo yum install fuse-overlayfs-0.7.2-6.el7_8.x86_64.rpm -y
   ```

  - To Install Docker in RHEL 7 use the following commands
  
  ```bash
    wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-cli-23.0.1-1.el7.x86_64.rpm
    wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.6.18-3.1.el7.x86_64.rpm
    wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-23.0.1-1.el7.x86_64.rpm
    sudo yum install docker-ce-cli-23.0.1-1.el7.x86_64.rpm -y
    sudo yum install containerd.io-1.6.18-3.1.el7.x86_64.rpm -y
    sudo yum install docker-ce-23.0.1-1.el7.x86_64.rpm -y
  ```   

  - To Install Docker in RHEL 8 use the following commands
  
  ```bash
    yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/docker-ce-cli-23.0.1-1.el8.x86_64.rpm
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.6.18-3.1.el8.x86_64.rpm
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/docker-ce-23.0.1-1.el8.x86_64.rpm
    sudo yum install docker-ce-cli-23.0.1-1.el8.x86_64.rpm -y
    sudo yum install containerd.io-1.6.18-3.1.el8.x86_64.rpm -y
    sudo yum install docker-ce-23.0.1-1.el8.x86_64.rpm -y
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


### Extra configuration on RHEL Platform Instance if ssh user doesn't have privileges(non sudo users)

- If the user doesn't have privileged access, then provide the below permissions to the user.

```bash
  chown -R <user>:<user> /wm-data
  usermod -aG docker <user>
```

### Extra configurations on RHEL StudioWorkspace Instance / AppDeployment Instance if ssh user doesn't have privileges(non sudo users)

- If the user given to the Platform doesn't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Create a user group if not present in StudioWorkspace Instance / AppDeployment Instance .
  
  ```bash
    sudo groupadd <user>
  ```

- Have to execute these commands as a privileged user.
  - Add user to the docker group.
  - Make a user the owner of the docker systemd process
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon-reload, iptable.

    ```bash
        usermod -aG docker <user>
        chown -R <user>:<user> /usr/lib/systemd/system
        chown -R <user>:<user> /data
        echo "%<user> ALL=NOPASSWD: /bin/systemctl restart docker,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
    ```

#### Make sure to Run below command after installation of docker completes to have WaveMaker docker configuration to your installed docker

- For Ubuntu

  ```bash 
      bash docker_configure.sh
  ```

- For RHEL

  ```bash
      bash docker_setup_rhel.sh
  ```