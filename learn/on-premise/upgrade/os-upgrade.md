---
title: "OS Upgrade"
id: ""
sidebar_label: "OS Upgrade"
---
---

## Prerequisites

## Passivate the running containers

- Before Upgrading operating system it is recommended to passivate the containers in external instances
- It can be done from launchpad, or you can execute the below command in platform instance

  ```bash
  python3 /usr/local/content/wme/wme-installer/<version>/resources/python/3/passivation_deletion.py -pr ${protocol} -d ${domain} -u ${adminUser} -p ${adminPasswd}
  ```

  - **protocol** represents what web protocol is used to connect to WaveMaker application (http/https)
  - **domain** represents the domain name in which WaveMaker application is running
  - **adminUser** and **adminPasswd** refer to the admin user and admin password in the WaveMaker domain

  - Refer below mentioned example command for passivation

  ```bash
  python3 /usr/local/content/wme/wme-installer/10.7.1/resources/python/3/passivation_deletion.py -pr http -d localhost -u test@wavemaker.com -p test-password -di False
  ```

## Stop the WME Setup

- We recommend you to stop the WME setup before proceeding for further steps
- You can stop the WME setup operation either at instance level or from config wizard portal

  - **Instance Level**

    - Use the following command to stop the WME setup in platform instance

    ```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --stop
    ```

  - **CW Portal**

    - Log in to CW portal, after login in home page you can see stop button as shown in the image below, hit stop button to stop the WME setup

    [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)

## Take Backup of the data before upgrade

- We advise you to take backup of the **/wm-data** volume before updating
- Please find below the processes that are used to perform the backup option in different service providers

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

- After backup is completed we request you to stop docker service in that instance, you can use the below command for that operation

```bash
service docker stop
```

## Upgrade the Operating System

### Ubuntu

- To upgrade the Ubuntu operating system to the next available release version please refer [Ubuntu OS Upgrade](https://ubuntu.com/server/docs/upgrade-introduction)

  ::: note

  For a user to upgrade from Ubuntu 16.04 to Ubuntu 20.04 version the above upgrade operations has to be done in two steps to reach the desired version
  
  :::

### RHEL

- To upgrade RHEL 7 operating system to RHEL 8 operating system please refer [RHEL OS Upgrade](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/upgrading_from_rhel_7_to_rhel_8/index)

::: note

You can perform this upgrade operation in external instances after completion of this process in platform instance

:::

## Reboot the system post upgrade

- Please reboot your system after upgrading OS in that instance

## Start WME Setup

- After the rebooting the platform instance, the config wizard will automatically start the WME setup, you can verify the startup process through CW portal and can use the setup post start up process
