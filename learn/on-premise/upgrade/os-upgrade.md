---
title: "OS Upgrade"
id: ""
sidebar_label: "OS Upgrade"
---
---

## Prerequisites

### Passivate the running containers

- Before Upgrading operating system it is recommended to passivate the containers in Developer/App Deployment instances
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

### Stop the WME Setup

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

### Data Backup

- WaveMaker Platform Stores its state into the disk. WaveMaker Platform administrators can take backups of those disk/directories and can restore them to any previous state.
- WaveMaker uses separate dedicated directory `/wm-data` in WaveMaker Platform Instance for storing data and `/data` in Studio Workspace/AppDeploy Instances.
- Create an AMI or use the latest AMI of WME Instance or VM for creating AMI for different cloud providers follow the below steps.
- We move all the data to Platform Instance(/wm-data dir or volume), so that backup will be easier. No need to take backups of any (volume/dir) in any of Developer/App Deployment instances.

#### AWS

- To create AMI of Instance in AWS cloud provider please refer [AMI creation in aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html).
- Stop WME EC2 instance and detach eth1 network interface [follow the steps given here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#detach_eni), make a note of interface ID or ENI ID
  
#### Azure

- For creating an Image of Instance in AZURE cloud provider please refer [Image creation in azure](https://docs.microsoft.com/en-us/azure/virtual-machines/image-version-vm-cli).
- Stop WME VM and detach network interface [follow the steps given here](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface-vm#remove-a-network-interface-from-a-vm), make a note of interface ID.

#### GCP

- For creating an Image of Instance in GCP cloud provider please refer [Image creation in GCP](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images).
- Stop WME VM aESXietach IP address [follow the steps given here](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address#deleting_a_static_internal_ip_address), make a note of interface ID.

#### VMWARE ESXi

- For creating a snapshot of VM in VMware please refer [snapshot creation in vmware](https://www.vmware.com/support/ws5/doc/ws_preserve_sshot_taking.html).
  
#### Hyper-V

- for creating a snapshot of VM in Hyper-V please refer [snapshot creation in Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/checkpoints)

## Upgrade the Operating System

### Without Internet Enabled for Instances

#### Platform Instance

- Launch the instance or VM with the same IP address with the latest AMI Image. To create WME Platform Instance in the different cloud and on-premise environments please follow the below steps attach the /wm-data volume to Platform Instance and Mount the volume to the platform Instance using the following command.

##### AWS

- To launch WME Platform instance in AWS cloud environment please refer [WME Platform instance Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
##### AZURE

- To launch WME Platform virtual machines in AZURE cloud environmet please refer [WME Platform instance Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
##### GCP

- To launch WME Platform virtual machines in GCP cloud environment please refer [WME Platform instance Infrastructure in GCP](/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp).
  
##### VMWARE ESXI

- To create WME Platform virtual machines in VMware Esxi please refer [WME Platform instance Infrastructure in VMware Esxi](/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware).

##### Hyper-V

- To create WME Platform virtual machines in Hyper-V please refer [WME Platform instance Infrastructure in Hyper-V](/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv).

##### Backup data mount in WME Platform Instance

```bash
mount /dev/</wm-data disk> /wm-data
example: mount /dev/xvdh /wm-data
```

- Update the fstab entry for volume on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the following command.

```bash
blkid
```

- To entry, the UUID of the disks in fstab, use the following format.

``` bash
UUID=</wm-data block-device-UUID>  /wm-data   ext4   defaults ,nofail  0  2
```

##### VMWARE ESXi and Hyper-V

- Copy tar which was archived in the previous steps
- Use the below steps for restore /wm-data using data.tar which was archived in previous steps in Platform Instance,

```bash
bash wme-installer.sh --data-untar
```  

[![data_untar](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)

#### Studio Workspace/AppDeploy Instances

- Launch the instance or VM with the same IP address with the latest AMI Image.To create WME Studio Workspace/AppDeploy Instances in the different cloud and on-premise environments please follow the below steps and attach the /data to Studio Workspace/AppDeploy Instances.

##### AWS

- To launch WME Studio Workspace/AppDeploy Instances in AWS cloud environment please refer [WME Studio Workspace/AppDeploy Instances Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
##### AZURE

- To launch WME Studio Workspace/AppDeploy virtual machines in AZURE cloud environmet please refer [WME Studio Workspace/AppDeploy Instances Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
##### GCP

- To launch WME Studio Workspace/AppDeploy virtual machines in GCP cloud environment please refer [WME Studio Workspace/AppDeploy Instances Infrastructure in GCP](/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp).
  
##### VMWARE ESXI

- To create WME Studio Workspace/AppDeploy virtual machines in VMware Esxi please refer [WME Studio Workspace/AppDeploy Instances Infrastructure in VMware Esxi](/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware).

##### Hyper-V

- To create WME Studio Workspace/AppDeploy virtual machines in Hyper-V please refer [WME Studio Workspace/AppDeploy Instances Infrastructure in Hyper-V](/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv).

##### Backup data mount in Studio Workspace/AppDeploy Instances

- Mount the volume to the Studio Workspace/AppDeploy Instances using the following command.

```bash
mount /dev/</data disk> /data
example: mount /dev/xvdh /data
```

- Update the fstab entry for volume on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the following command.

```bash
blkid
```

- To entry the UUID of the disks in fstab, use the following format.

``` bash
UUID=</data block-device-UUID>  /data   ext4   defaults ,nofail  0  2
```

#### Installing WME on New Instance

- For Download WaveMaker installation package please refer [WaveMaker package Installation](/learn/on-premise/aws/install/download-copy-installer).
- Extract Package please refer [WaveMaker package extraction](/learn/on-premise/aws/install/extract-package).
Initializing the setup please refer [WaveMaker Initialization](/learn/on-premise/aws/install/initilize-setup). Make sure to provide the same CIDR Range which is used in the previous setup.
- Setup using config wizard please refer [WaveMaker configwizard setup](/learn/on-premise/aws/install/setup-using-cw) and use same WaveMaker studio and built apps Domain names.

#### Sync Studio Workspace/AppDeploy Instances

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy Instances.

```bash
bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh --upgrade-instances
```

### With Internet Enabled for Instances

#### Ubuntu

- To upgrade the Ubuntu operating system to the next available release version please refer [Ubuntu OS Upgrade](https://ubuntu.com/server/docs/upgrade-introduction)

  ::: note

  For a user to upgrade from Ubuntu 16.04 to Ubuntu 20.04 version the above upgrade operations has to be done in two steps to reach the desired version
  
  :::

#### RHEL

- To upgrade RHEL 7 operating system to RHEL 8 operating system please refer [RHEL OS Upgrade](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/upgrading_from_rhel_7_to_rhel_8/index)

## Reboot the system post upgrade

- Please reboot your system after upgrading OS in that instance

## Start WME Setup

- After the rebooting the platform instance, the config wizard will automatically start the WME setup, you can verify the startup process through CW portal and can use the setup post start up process
