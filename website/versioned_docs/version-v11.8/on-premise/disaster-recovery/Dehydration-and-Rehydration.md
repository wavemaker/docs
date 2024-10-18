---
title: "Dehydration and Rehydration"
id: "dehydration-and-rehydration"
sidebar_label: "Dehydration and Rehydration"
---
---

This process is used to rotate instances periodically or for disaster recovery when WME data(`/wm-data and /wm-runtime in directory/volumes Platform Instance`) is available but machines are corrupted and make sure have to use the same WME version for the recovery process.

## Data Storage in WME

- WaveMaker Platform Stores its state into the disk. WaveMaker Platform administrators can take backups of those disk/directories and can restore them to any previous state.
- WaveMaker uses separate dedicated directories `/wm-data` and `/wm-runtime` in WaveMaker Platform Instance for storing data.

### What Data needs to be Backup in WME Instances

- The `/wm-data` directory and `/wm-runtime` directory in Platform Instance.
- The `/data` directory in all the StudioWorkspace/AppDeployment Instances are not required to be backup because, we passivating all the Insatnce containers.
- Take backup/snapshots above volume/directories periodically.

## How to move all the data to a single location

- We can move all the data to Platform Instance(/wm-data dir or volume) so that backup will be easier. In that case, no need to take backups of any (volume/dir) in any of StudioWorkspace Instance / AppDeployment Instance.
- Before applying the backup process do **Hibernation** and **passivation** for user and application containers, this can be done from the launchpad.

### Passivate Containers in StudioWorkspace/AppDeployment Instances

- To upgrade your operating system it is highly recommended to passivate all the containers in StudioWorkspace/AppDeployment Instances
- It can be done in following way.

#### Launchpad

- After logging into launchpad in WME setup go to Developer/Deployment Workspace, and then go to the container as shown in the below image
- Select the containers that are running, hibernate those containers one after the other by hitting the **stop** button as shown in the image below, and wait till the state is changed to stop.

  [![stop_conainers](/learn/assets/wme-setup/upgrade-wme-setup/hibernate.png)](/learn/assets/wme-setup/upgrade-wme-setup/hibernate.png)


- After logging into launchpad in WME setup go to Developer Workspace, and then go to capacity as shown in the below image

  [![instance_passivate](/learn/assets/wme-setup/upgrade-wme-setup/instance-passivate.png)](/learn/assets/wme-setup/upgrade-wme-setup/instance-passivate.png)   
  
  - Here select all the StudioWorkspace instances one by one and do the below operations

    - First hit the stop button present there, it will stop the instances from taking new user containers, wait till the state of Instance is changed to **STOPPED**
    - Then you need to hit the passivate button, this will passivate all the stopped containers in the instance selected, wait till there are no stopped instances present in the instance
    - After this is done in all StudioWorkspace instances cross-check the running containers in the containers tab, all the containers should be in the passivated state

- After completed the above process in Developer Workspace, go to AppDeployments, and perform the same operation mentioned above in all AppDeployment Instances(Demo, Stage, Live)



### Stop the WME Setup

- We recommend you to stop the WME setup before proceeding for further steps
- You can stop the WME setup operation from the config wizard portal


  - **CW Portal**

    - Log in to the CW portal, after login in home page you can see the stop button as shown in the image below, hit the stop button to stop the WME setup

    [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop.png)

## How to take a backup of the data

- Take a backup of the `/wm-data` and `/wm-runtime` directories of Platform Instance by taking a snapshot of a volume.
- For the disaster and recovery process take a backup of the `/data` directory of StudioWorkspace Instance / AppDeployment Instance by taking snapshots.

### AWS

- For taking a snapshot of volume in AWS cloud provider please refer [volume snapshot in aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html).
- Stop WME EC2 instance and detach eth1 network interface [follow the steps given here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#detach_eni), make a note of interface ID or ENI ID
  
### Azure

- For taking a snapshot of volume in AZURE cloud provider please refer [volume snapshot in azure](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/snapshot-copy-managed-disk).
- Stop WME VM and detach network interface [follow the steps given here](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface-vm#remove-a-network-interface-from-a-vm), make a note of interface ID.

### GCP

- For taking a snapshot of volume in GCP cloud provider please refer [volume snapshot in GCP](https://cloud.google.com/compute/docs/disks/create-snapshots).
- Stop WME VM aESXietach IP address [follow the steps given here](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address#deleting_a_static_internal_ip_address), make a note of interface ID.

### VMWARE ESXi and Hyper-V

- Use the below steps for taking /wm-data backup in Platform Instance, it will create data.tar in /wm-data location.
  
```bash
bash wme-installer.sh --data-archive
```

- Copy the generated data.tar to secure location on new WME Platform Instance or to any cloud storage services.

## Data restore

### Platform Instance

- Launch the instance or VM with the same IP address with the latest AMI Image. To create WME Platform Instance in the different cloud and on-premise environments please follow the below steps attach the /wm-data and /wm-runtime volumes to Platform Instance and Mount the volume to the platform Instance using the following command.
- Make sure have to attach backup /wm-data and /wm-runtime volumes to Platform Instance.

#### AWS

- To launch WME Platform instance in AWS cloud environment please refer [WME Platform instance Infrastructure in AWS](/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws).
  
#### AZURE

- To launch WME Platform virtual machines in AZURE cloud environment please refer [WME Platform instance Infrastructure in AZURE](/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure).
  
#### GCP

- To launch WME Platform virtual machines in GCP cloud environment please refer [WME Platform instance Infrastructure in GCP](/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp).
  
#### VMWARE ESXI

- To create WME Platform virtual machines in VMware Esxi please refer [WME Platform instance Infrastructure in VMware Esxi](/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware).

#### Hyper-V

- To create WME Platform virtual machines in Hyper-V please refer [WME Platform instance Infrastructure in Hyper-V](/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv).

#### Volumes Based Disks Restoring(AWS, GCP, Azure)

```bash
mount /dev/</wm-data disk> /wm-data
example: mount /dev/xvdh /wm-data
```

- Update the fstab entry for volume on every system reboot, add an entry for the device to the /etc/fstab file.
- Take the UUID of disks for identification by using the following command.

```bash
blkid
```

- To entry, the UUID of the disks in fstab, use the following format.

``` bash
UUID=</wm-data block-device-UUID>  /wm-data   ext4   defaults ,nofail  0  2
```

#### Directory based Disks Restoring(VMWARE ESXi and Hyper-V)

- Copy tar which was archived in the previous steps
- Use the below steps for restore /wm-data using data.tar which was archived in previous steps in Platform Instance,

```bash
bash wme-installer.sh --data-untar
```  

[![data_untar](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)

### StudioWorkspace Instance / AppDeployment Instance

- Launch StudioWorkspace Instance/AppDeployment Instance in different Infra providers from Link [WaveMaker Launch Instances](/learn/on-premise/prerequisites).


## Download and Extract Migrations

- To download migration tar which will be shared by the WaveMaker team, please run the following command

```bash
    wget <WME-Migration-Link>
```

- Extract wme_migrations to /usr/local/content/wme/wme-installer/< version>/resources folder, for extract the content run the following command

```bash
    sudo tar xvf <WME-Migration-Filename> -C /usr/local/content/wme/wme-installer/<version>/resources/
```    

- To Rotate the Instances, it is required some Rotation related files and to download these which will be shared by the WaveMaker team, please run the following command

```bash
    wget <WME-Rotate-Scripts-link>
```

- Extract the wme_rotations to /usr/local/content/wme/wme-installer/< version >/resources folder, for extract the content run the following command

```bash
    sudo tar -xvf  <WME-Rotate-sCripts-Filename> -C /usr/local/content/wme/wme-installer/<version>/resources/
```

## Installing WME on New Instance

- For Download WaveMaker installation package please refer [WaveMaker package Installation](/learn/on-premise/aws/install/download-copy-installer).
- Extract Package please refer [WaveMaker package extraction](/learn/on-premise/aws/install/extract-package).
Initializing the setup please refer [WaveMaker Initialization](/learn/on-premise/aws/install/initilize-setup). Make sure to provide the same CIDR Range which is used in the previous setup.

:::note
After Completing the ***WaveMaker Initialization*** process, please go with the ***migrations*** step which is given below before proceeding with the ***Configwizard***
:::


### Run the required migrations

- As we we migrating from WME 10.13.x to WME 11.x, we have to run few migrations on gitlab and postgres
- Execute Below command to copy wme rotation script to installer location

```bash 
    cp /usr/local/content/wme/wme-installer/<version>/resources/wme-rotate.sh /usr/local/content/wme/wme-installer/<version>/ 
```

- Execute Below command to run Gitlab and Postgres Migration

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-rotate.sh –migrate
```

### Run Sync Operation

- After completing the above steps, run the **Sync** from the configwizard portal by following steps
  - Login to the config portal using the same password that was used in earlier setup 
  - After login in home page you can see settings icon on the top right as marked below, it takes you to the CW settings place

  [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop-settings.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop-settings.png)    
    
  - Go to the Danger Zone and hit the **Sync** button and perform the next configuration steps
  
  [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-sync.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-sync.png)


### Replace StudioWorkspace/AppDeployment Instances

- Once the configwizard reaches to 100%, you can go to Launchpad and Developer Workspace [WaveMaker add developer workspace](/learn/on-premise/configure/add-dev-capacity#add-capacity-to-developer-workspace) and  Deployment Workspace [WaveMaker add deployement workspace](/learn/on-premise/configure/add-apps-capacity#add-capacity-to-app-deployment), remove the previously added instances and add the newly provisioned Developer and Deployment workspace Instances respectively  


### Update VCS IP’s in Passivation Disk and Database

- Run below scripts in the WME platform Instance to change the IP in Database and the Backserver disk

  - Change IP in Database entries 

    ```bash 
    sudo bash executesql.sh update_vcs_ips_in_db.sql  <old_vcs_ip>  <new_vcs_ip>
    ```

  - Change IP in backupserver disk

    ```bash 
    sudo bash update_vcs_ips_in_backupserver.sh <old_vcs_ip>  <new_vcs_ip>
    ```
