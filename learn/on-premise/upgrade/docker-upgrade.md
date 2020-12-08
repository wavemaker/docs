---
title: "Docker Upgrade"
id: ""
sidebar_label: "Docker Upgrade"
---
---

## Docker Upgrade

Manul docker upgrade required only when WaveMaker patch skip the upgrade.WaveMaker patch will automatically upgrades the docker if ssh-user has root/sudo privileges.

### Docker upgrade in ubuntu

- To upgrade and install the latest version of Docker
  - Run the following command to list available versions

  ```bash
    apt-cache madison docker-ce
    apt-cache madison docker-ce-cli
  ```

  - Run the following command to install the specific version of Docker

  ```bash
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io
    example: sudo apt-get install docker-ce=5:19.03.13~3-0~ubuntu-xenial docker-ce-cli=5:19.03.13~3-0~ubuntu-xenial containerd.io
  ```

- If the user given to the Platform doesn't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.  
- Have to execute these commands from a privileged user.
  - Add user to the Docker group.  
  - Make the user as an owner to the Docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon-reload, iptable.

    ```bash
        usermod -aG docker <user>
        mkdir -p /etc/systemd/system/docker.service.d/
        chown -R <user>:<user> /etc/systemd/system/docker.service.d
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/sbin/iptables" > /etc/sudoers.d/<sudoers-file-name>
    ```

### Docker upgrade in RHEL

Upgrade or Install the latest version of Docker

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

- If the user given to the Platform doesn't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Have to execute these commands as a privileged user.
  - Add user to the docker group.
  - Make a user the owner of the docker systemd process
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon-reload, iptable.

    ```bash
        usermod -aG docker <user>
        chown -R <user>:<user> /usr/lib/systemd/system
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
    ```

### Upgrade Studio Workspace/AppDeploy Instances

- Execute the Following command for upgrade the Studio Workspace/AppDeploy Instances.

```bash
    bash wme-installer.sh --upgrade-instances
```
