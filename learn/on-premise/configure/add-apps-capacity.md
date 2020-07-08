---
title: "WME Add Apps Capacity"
id: ""
sidebar_label: "Add Apps Capacity"
---
---

Every Deployed application allocated with a container. The infrastructure adding here will be used for this purpose.

To add instances to Platform, you need to provide ssh credentials.
Ssh credentials of the Instance either should have root privliges or provide required permissions as below.

### Extra configurations on StudioWorkspace Instance / AppDeployment Instance

#### The ssh user has privileges(root/sudo)

- No need to do any configurations. Platform will do it automatically.

#### The ssh user don't have privileges(non sudo users)

- If the user given to the Platform don't have privileged access, then provide below permission for the user given on StudioWorkspace Instance / AppDeployment Instance.
- Have to execute these commands from privileged user.
  - Add user to docker group.
  - Make the user as owner for docker systemd process.
  - data directory should be owned by the user.
  - Give permission to manage docker.service, systemctl daemon reload, iptable.

    ```bash
        usermod -aG <user> docker
        chown -R <user>:<user> /usr/lib/systemd/system (for RHEL)
         chown -R <user>:<user> /etc/systemd/system/docker.service.d   (for ubuntu)
        chown -R <user>:<user> /data
        echo "%${user} ALL=NOPASSWD: /bin/systemctl restart docker.service,/bin/systemctl daemon-reload,/usr/sbin/iptables" >> /etc/sudoers.d/<sudoers-file-name>
        ```

## Add Capacity to App Deployment

- Select App Deployments section and at deployment capacity select add capacity for adding an Instance to deployment capacity.if Instance not created [launch instance with required prerequisites](/learn/on-premise/prerequisites)
- Provide Instance details and authentication details to connect to the Instance,if you want you can test the connection and details of instance by selecting the test option.

[![deployment capacity](/learn/assets/wme-setup/configuring-wme/app-deployment-capacity.jpg)](/learn/assets/wme-setup/configuring-wme/app-deployment-capacity.jpg)

- Wait for a few moments for configure and get started.
