---
title: "OS Upgrade"
id: ""
sidebar_label: "OS Upgrade"
---
---

## Data Storage in WME

- In WaveMaker Enterprise setup we have one platform instance where all the setup related services and data is stored, we have StudioWorkspace instances where all the data specific to user in the setup is stored, and we have AppDeployment instances where the data of the applications developed in wavemaker is stored
- In Platform instance all the data is completely stored in **/wm-data** directory/volume
- Coming to StudioWorkspace and AppDeployment Instances we store the data in **/data** directory

## Data Backup

- WaveMaker Platform Stores its state into the disk. WaveMaker Platform administrators can take backups of those disk/directories and can restore them to any previous state.
- WaveMaker uses separate dedicated directory `/wm-data` in WaveMaker Platform Instance for storing data and `/data` in StudioWorkspace Instance / AppDeployment Instance.
- Create an AMI or use the latest AMI of WME Instance or VM for creating AMI for different cloud providers follow the below steps.
- We move all the data to Platform Instance(/wm-data dir or volume), so that backup will be easier. No need to take backups of any (volume/dir) in any of StudioWorkspace Instance / AppDeployment Instance.

### Passivate containers in StudioWorkspace/AppDeployment instances

- Inorder to upgrade your operating system it is recommended to passivate the containers in StudioWorkspace/AppDeployment instances
- It can be done in two different ways

#### Launchpad

- After logging into launchpad in WME setup go to Developer Workspace, and then go to container as shown in below image
- Select the containers that are running, hibernate those containers one after the other by hitting stop button as shown in the image below and wait till state is changed to stopped.
  
  [![instances_verification](/learn/assets/wme-setup/upgrade-wme-setup/instances_verification.png)](/learn/assets/wme-setup/upgrade-wme-setup/instances_verification.png)

- After logging into launchpad in WME setup go to Developer Workspace, and then go to capacity as shown in below image
  
  [![developer_workspace](/learn/assets/wme-setup/upgrade-wme-setup/developer_workspace.png)](/learn/assets/wme-setup/upgrade-wme-setup/developer_workspace.png)
  
  - Here select all the StudioWorkspace instances one by one and do the below operations

  - First hit the stop button present there, it will stop the instances from taking new user containers, wait till the state of instance is changed to **STOPPED**
  - Then you need to hit the passivate button, this will passivate all the stopped containers in the instance selected, wait till there are no stopped instances present in the instance
  - After this is done in all StudioWorkspace instances cross-check the running containers in containers tab, all the containers should be in passivated state
  
  - After making sure all containers are passivated come back to capacity and select one by one instances and hit delete icon as shown below, this will delete the instance from setup
  
  [![delete_instances](/learn/assets/wme-setup/upgrade-wme-setup/delete_instances.png)](/learn/assets/wme-setup/upgrade-wme-setup/delete_instances.png)

- After completed the above process in Developer Workspace, go to AppDeployments, and perform the same operation mentioned above in all AppDeployment Instances(Demo, Stage, Live)

#### Command Line

- You can execute the below command in platform instance, it will passivate all the container and will delete StudioWorkspace/AppDeployment instances in the setup

  ```bash
  python3 /usr/local/content/wme/wme-installer/<version>/resources/python/3/passivation_deletion.py -pr <protocol> -d <domain> -u <adminUser> -p <adminPasswd> -di True
  ```

  - **protocol** represents what web protocol is used to connect to WaveMaker application (http/https)
  - **domain** represents the domain name in which WaveMaker application is running
  - **adminUser** and **adminPasswd** refer to the admin credentials which are used to access launchpad.

  - Refer below mentioned example command for passivation

  ```bash
  python3 /usr/local/content/wme/wme-installer/10.7.1/resources/python/3/passivation_deletion.py -pr http -d wme-demo.wavemaker.com -u test@wavemaker.com -p test-password -di True
  ```

### Stop the WME Setup

- We recommend you to stop the WME setup before proceeding for further steps
- You can stop the WME setup operation either by executing commands at command line or from config wizard portal

  - **Command Line**

    - Use the following command to stop the WME setup in platform instance

    ```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --stop
    ```

  - **CW Portal**

    - Log in to CW portal, after login in home page you can see stop button as shown in the image below, hit stop button to stop the WME setup

    [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)

- Take a backup of `/wm-data` directory of Platform Instance by taking a snapshot of a volume.
- For the disaster and recovery process take a backup of `/data` directory of StudioWorkspace Instance / AppDeployment Instance by taking snapshots.

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

- For creating a snapshot of VM in Hyper-V please refer [snapshot creation in Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/checkpoints)

Follow below three steps in PlatformInstance, StudioWorkspaceInstances, AppDeploymentInstances.

## Stop Docker service in the system

- After backup is completed we request you to stop Docker service in the  WME Platform Instance and StudioWorkspace Instance / AppDeployment Instance.
- Connect to Instance via SSH then execute below command

```bash
service docker stop
```

## Upgrade the Operating System

### Without Internet Enabled for instances

#### WME Platform Instance

- Launch the instance or VM with the same IP address with the latest AMI Image. To create WME Platform Instance in the different cloud and on-premise environments please follow the below steps attach the /wm-data volume to Platform Instance and Mount the volume to the platform Instance using the following command.
- Make sure have to attach backup /wm-data volume to Platform Instance.

##### AWS

- To launch WME Platform instance in AWS cloud environment please refer [WME Platform instance Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
##### AZURE

- To launch WME Platform virtual machines in AZURE cloud environment please refer [WME Platform instance Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
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

#### WME StudioWorkspace Instance / AppDeployment Instance

- Launch the instance or VM with the same IP address with the latest AMI Image.To create WME StudioWorkspace Instance / AppDeployment Instance in the different cloud and on-premise environments please follow the below steps and attach the /data to StudioWorkspace Instance / AppDeployment Instance.

##### AWS

- To launch WME StudioWorkspace Instance / AppDeployment Instance in AWS cloud environment please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
##### AZURE

- To launch WME Studio Workspace/AppDeploy virtual machines in AZURE cloud environment please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
##### GCP

- To launch WME Studio Workspace/AppDeploy virtual machines in GCP cloud environment please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in GCP](/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp).
  
##### VMWARE ESXI

- To create WME Studio Workspace/AppDeploy virtual machines in VMware Esxi please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in VMware Esxi](/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware).

##### Hyper-V

- To create WME Studio Workspace/AppDeploy virtual machines in Hyper-V please refer [WME StudioWorkspace Instance / AppDeployment Instance Infrastructure in Hyper-V](/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv).

##### Backup data mount in StudioWorkspace Instance / AppDeployment Instance

- Mount the volume to the StudioWorkspace Instance / AppDeployment Instance using the following command.

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

#### Sync StudioWorkspace Instance / AppDeployment Instance

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy instances.

```bash
bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh --upgrade-instances
```

### With Internet Enabled for instances

#### Ubuntu

- To upgrade the Ubuntu operating system to the next available release version please refer [Ubuntu OS Upgrade](https://ubuntu.com/server/docs/upgrade-introduction)

  ::: note

  For a user to upgrade from Ubuntu 16.04 to Ubuntu 20.04 version the above upgrade operations has to be done in two steps to reach the desired version
  
  :::

#### RHEL

- To upgrade RHEL 7 operating system to RHEL 8 operating system please refer [RHEL OS Upgrade](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/upgrading_from_rhel_7_to_rhel_8/index)

#### Reboot the system post upgrade

- Reboot StudioWorkspace and AppDeployment instances
- Once it is done you have to reboot your platform instance after upgrading OS in that instance

## Start WME Setup

- After the rebooting the platform instance, the config wizard will automatically start the WME setup, you can verify the startup process through CW portal and can use the setup post start up process

## Add StudioWorkspace/AppDeployment instances from launchpad

- For adding Developer instance you can refer [WME Add Developer Capacity](/learn/on-premise/configure/add-dev-capacity)
- Similarly, for AppDeployment instances you can refer [WME Add Apps Capacity](/learn/on-premise/configure/add-apps-capacity)