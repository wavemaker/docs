---
title: "OS Upgrade"
id: ""
sidebar_label: "OS Upgrade"
---
---

## Prerequisites

## Passivate the running containers

- Before Upgrading OS we have to passivate the existing containers, it can be done from launchpad, or you can execute the below command in platform setup

  ```bash
  python3 /usr/local/content/wme/wme-installer/<version>/resources/python/3/passivation_deletion.py -pr ${protocol} -d ${domain} -u ${adminUser} -p ${adminPasswd}
  ```

  - **protocol** represents what web protocol is used to connect to WaveMaker application (http/https)
  - **domain** represents the domain name in which WaveMaker application is running
  - **adminUser** and **adminPasswd** refer to the admin user and admin password in the WaveMaker domain
  - Below is the example command for passivation

  ```bash
  python3 /usr/local/content/wme/wme-installer/10.7.1/resources/python/3/passivation_deletion.py -pr http -d localhost -u test@wavemaker.com -p test-password -di False
  ```

## Stop the Setup using CW process

- You can do this operation in instance level or from config wizard portal

  - **Instance Level**
    - Use the following command to stop the WME setup in platform setup

    ```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --stop
    ```

  - **CW Portal**
    - Log in to CW portal, after login in home page you can see stop button as shown in the image below, hit stop button to stop the setup
    [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)

## Take Backup of the data before upgrade

- We advise you to take backup of the **/wm-data** volume before updating

### AWS

- For taking a snapshot of volume in AWS cloud provider please refer [volume snapshot in aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html).

### Azure

- For taking a snapshot of volume in AZURE cloud provider please refer [volume snapshot in azure](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/snapshot-copy-managed-disk).

### GCP

- For taking a snapshot of volume in GCP cloud provider please refer [volume snapshot in GCP](https://cloud.google.com/compute/docs/disks/create-snapshots).

### VMWARE ESXI and Hyper-V

- Use the below steps for take /wm-data backup in Platform Instance, it will create data.tar in /wm-data location

```bash
bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --data-archive
```

## Stop Docker service in the system

- After Backup is completed we request you to stop docker service, You can use the below command

```bash
service docker stop
```

## Upgrade the Operating System

### Ubuntu

- To upgrade the Ubuntu operating system to the next available release version please refer [Ubuntu OS Upgrade](https://ubuntu.com/server/docs/upgrade-introduction)

  ::: note

  For a user to upgrade from Ubuntu 16.04 to Ubuntu 20.04 version the above operations has to be done in two steps to reach the desired version
  
  :::

### RHEL

- To upgrade RHEL 7 operating system to RHEL 8 operating system please refer [RHEL OS Upgrade](https://ubuntu.com/server/docs/upgrade-introduction)

::: note

You can perform this upgrade operation in eternal instances after completion of this process in platform instance

:::

## Reboot the system post upgrade

- Please reboot your system after upgrading OS system

## Start WME Setup

- After the rebooting the WME setup will automatically start the WME setup, you can verify the startup process through CW portal, and you can use the setup post start up
