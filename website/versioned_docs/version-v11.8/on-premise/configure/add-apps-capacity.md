---
title: "WME Add Apps Capacity"
id: "add-apps-capacity"
sidebar_label: "Add Apps Capacity"
---
---

Every Deployed application allocated with a container. The infrastructure adding here will be used for this purpose.

To add instances to Platform, you need to provide ssh credentials.
Ssh credentials of the Instance either should have root privileges or provide required permissions as below.

### Extra configurations on StudioWorkspace Instance / AppDeployment Instance

#### The ssh user has privileges(root/sudo)

- No need to do any configurations. The platform will do it automatically.

#### The ssh user don't have privileges(non sudo users)

- If the user given to the Platform don't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Have to execute these commands from the privileged user.
  - Add user to docker group.
  - Make the user as owner for docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon reload, iptable.

    ```bash
        usermod -aG <user> docker
        chown -R <user>:<user> /usr/lib/systemd/system (for RHEL)
        chown -R <user>:<user> /etc/systemd/system/docker.service.d   (for ubuntu)
        chown -R <user>:<user> /data
        echo "%$<user> ALL=NOPASSWD: /bin/systemctl restart docker,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name> (for RHEL)
        echo "%<user> ALL=NOPASSWD: /bin/systemctl restart docker,/bin/systemctl daemon-reload,/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>  (for ubuntu)
        ```

## Add Capacity to App Deployment

- Select App Deployments section and at deployment capacity select add capacity for adding an Instance to deployment capacity.if Instance not created [launch instance with required prerequisites](/learn/on-premise/prerequisites)
- Provide Instance details and authentication details to connect to the Instance,if you want you can test the connection and details of the instance by selecting the test option.

[![deployment capacity](/learn/assets/wme-setup/configuring-wme/app-deployment-capacity.png)](/learn/assets/wme-setup/configuring-wme/app-deployment-capacity.png)

- During workspace instances configuration process WaveMaker running commands with sudo , if user using any another name or command for sudo, user need to add that as alias in ~/.bash_aliases file and also need to provide that alias name during studio workspace/app deploy capacity adding at launchpad.
- Example ~/.bash_aliases file
  
  ```bash
  shopt -s expand_aliases
  alias dzdo='sudo'
  ```

- Wait for a few moments to configure and get started. You can check the Health status by clicking on the check mark(shown in the below picture).

[![status check](/learn/assets/wme-setup/configuring-wme/status-check.png)](/learn/assets/wme-setup/configuring-wme/status-check.png)

- It will gives you the Health status.

[![app deployement health status check](/learn/assets/wme-setup/configuring-wme/app-deployement-health-status.png)](/learn/assets/wme-setup/configuring-wme/app-deployement-health-status.png)

- You can verify them by copying them to clipboard and pasting on a Notepad.




