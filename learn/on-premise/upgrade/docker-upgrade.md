---
title: "Docker Upgrade"
id: ""
sidebar_label: "Docker Upgrade"
---
---

## Docker Upgrade

- Manual Docker upgrade is required only when you miss or skip the WaveMaker patch upgrade.
- WaveMaker patch automatically upgrades the Docker if ssh-user has root/sudo privileges.
- So follow the steps below when you added StudioWorkspaceInstance/AppDeploymentInstance with non-root/sudo user only.

### Docker Upgrade in Ubuntu

- To upgrade and install the latest version of Docker, run the following command to list all the available versions:

  ```bash
    apt-cache madison docker-ce
    apt-cache madison docker-ce-cli
  ```

- Run the following command to install a specific version of Docker.

  ```bash
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    example: sudo apt-get install docker-ce=5:19.03.13~3-0~ubuntu-xenial docker-ce-cli=5:19.03.13~3-0~ubuntu-xenial containerd.io
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
      echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/sbin/iptables" > /etc/sudoers.d/<sudoers-file-name>
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

- For installing Docker, use the following commands.

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

:::note
- You can choose to install Docker in any other way as per your company policy.
- Above commands depicts one of them.
- Make sure to do the activities below after the Docker installation.
:::

- If the given platform user doesn't have privileged access, then provide below permissions for the given user on StudioWorkspace Instance / AppDeployment Instance.
- The user should be able to execute the following commands as a privileged user:
  - Add user to the Docker group.  
  - Make the user an owner of the Docker system process.
  - Data directory should be owned by the user.
  - Permission to manage Docker, service, systemctl daemon-reload, iptable.

  ```bash
      usermod -aG docker <user>
      chown -R <user>:<user> /usr/lib/systemd/system
      chown -R <user>:<user> /data
      echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
  ```

### Sync Studio Workspace/AppDeploy Instances

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy Instances.
  
```bash
    cd <INSTALLER_LOCATION>
    bash wme-installer.sh --upgrade-instances
```

- Go to Launchpad and see Instance status. You can start working on Studio once the Instance status has started.