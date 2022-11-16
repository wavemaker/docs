---
title: "Docker Upgrade"
id: "docker-upgrade"
sidebar_label: "Docker Upgrade"
---
---

## Docker Upgrade

- Manual Docker upgrade is required only when you miss or skip the WaveMaker patch upgrade.
- WaveMaker patch automatically upgrades the Docker if ssh-user has root/sudo privileges in Ubuntu and RHEL OS WME Platform Instance and if ssh-user have root/sudo privileges in Ubuntu StudioWorkspaceInstance/AppDeploymentInstance.
- User needs to upgrade docker if ssh-user doesn't have root/sudo privileges in Ubuntu OS StudioWorkspaceInstance/AppDeploymentInstance and if ssh-user have or doesn't have root/sudo privileges in RHEL OS StudioWorkspaceInstance/AppDeploymentInstance.
- Make sure Hibernate and passivate user containers and application containers from launchpad. use the following command to Hibernate and passivate containers.

```bash
python3 /usr/local/content/wme/wme-installer/<version>/resources/python/3/passivation_deletion.py -pr <protocol> -d <domain> -u <adminUser> -p <adminPasswd>
example: python3 /usr/local/content/wme/wme-installer/10.13.0/resources/python/3/passivation_deletion.py -pr http -d localhost -u test@wavemaker.com -p test-password -di False
```

- So follow the steps below when you added StudioWorkspaceInstance/AppDeploymentInstance.

### Docker Upgrade in Ubuntu

- Stop the current Docker.

```bash
  service docker stop
```

- To upgrade and install the latest version of Docker, run the following command to list all the available versions:

  ```bash
    apt-cache madison docker-ce
    apt-cache madison docker-ce-cli
  ```

- Run the following command to install a specific version of Docker.

  ```bash
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    example: sudo apt-get install docker-ce=5:20.10.7~3-0~ubuntu-focal docker-ce-cli=5:20.10.7~3-0~ubuntu-focal containerd.io -y
  ```

- If the given platform user does not have privileged access, then provide the below permissions for the given user on StudioWorkspace Instance/AppDeployment Instance.  
- The user should be able to execute the following commands as a privileged user:
  - Add user to the Docker group.  
  - Make the user an owner of the Docker systemd process.
  - Data directory should be owned by the user.
  - Permission to manage Docker, service, systemctl daemon-reload, iptable.

  ```bash
      usermod -aG docker <user>
      mkdir -p /etc/systemd/system/docker.service.d/
      chown -R <user>:<user> /etc/systemd/system/docker.service.d
      chown -R <user>:<user> /data
      echo "%<user> ALL=NOPASSWD: /bin/systemctl restart docker,/bin/systemctl daemon-reload,/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
  ```

### Docker Upgrade in RHEL

Upgrade or Install the latest version of Docker.

- Stop the current Docker.

```bash
  service docker stop
```

- List the current Docker package version.

```bash
  yum list docker-ce
```

- Remove the current Docker Engine.

```bash
  rpm -e <installed-package>
  example: rpm -e docker-ce.x86_64
```

- Install container-selinux for RHEL 7 version only

```bash
  yum install http://mirror.centos.org/centos/7/extras/x86_64/Packages/container-selinux-2.107-1.el7_6.noarch.rpm -y
```

- Install the latest version of Docker
  - To Install Docker in RHEL 8 use the following commands
  
  ```bash
    yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/docker-ce-cli-20.10.7-3.el8.x86_64.rpm
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.4.6-3.1.el8.x86_64.rpm
    wget https://download.docker.com/linux/centos/8/x86_64/stable/Packages/docker-ce-20.10.7-3.el8.x86_64.rpm
    sudo yum install docker-ce-cli-20.10.7-3.el8.x86_64.rpm -y
    sudo yum install containerd.io-1.4.6-3.1.el8.x86_64.rpm -y
    sudo yum install docker-ce-20.10.7-3.el8.x86_64.rpm -y
  ```

  - Install prerequisites to install Docker in RHEL7
  
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
    wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-cli-20.10.7-3.el7.x86_64.rpm
    wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.4.6-3.1.el7.x86_64.rpm
    wget https://download.docker.com/linux/centos/7/x86_64/stable/Packages/docker-ce-20.10.7-3.el7.x86_64.rpm
    sudo yum install docker-ce-cli-20.10.7-3.el7.x86_64.rpm -y
    sudo yum install containerd.io-1.4.6-3.1.el7.x86_64.rpm -y
    sudo yum install docker-ce-20.10.7-3.el7.x86_64.rpm -y
  ```  

```bash
    systemctl enable docker
    systemctl start docker
    docker --version
```

:::note

- You can choose to install Docker in any other way as per your company policy.
- Above commands depict one of them.
- Make sure to do the activities below after the Docker installation.
:::

- If the given platform user doesn't have privileged access, then provide the below permissions for the given user on StudioWorkspace Instance / AppDeployment Instance.
- The user should be able to execute the following commands as a privileged user:
  - Add user to the Docker group.  
  - Make the user an owner of the Docker system process.
  - Data directory should be owned by the user.
  - Permission to manage Docker, service, systemctl daemon-reload, iptable.

  ```bash
      usermod -aG docker <user>
      chown -R <user>:<user> /usr/lib/systemd/system
      chown -R <user>:<user> /data
      echo "%<user> ALL=NOPASSWD: /bin/systemctl restart docker,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
  ```

### Sync Studio Workspace/AppDeploy Instances

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy Instances.
  
```bash
    cd <INSTALLER_LOCATION>
    bash wme-installer.sh --upgrade-instances
```

- Go to Launchpad and see Instance status. You can start working on Studio once the Instance status has started.
