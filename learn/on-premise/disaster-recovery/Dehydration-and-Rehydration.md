---
title: "Dehydration and Rehydration"
id: ""
sidebar_label: "Dehydration and Rehydration"
---
---

To Upgrade the operating system OS by migrating Data or for the Disaster and recovery process users can follow the below steps.

## Data Backup

- WaveMaker Platform Stores its state into the disk. WaveMaker Platform administrators can take backups of those disk/directories and can restore them to any previous state.
- WaveMaker uses separate dedicated directory `/wm-data` in WaveMaker Platform Instance for storing data and `/data` in Studio Workspace/AppDeploy Instances.
- Before applying the backup process do Hybernation and passivation for user and application containers using following command or do the process from launchpad.

```bash
python3 /usr/local/content/wme/wme-installer/<version>/resources/python/3/passivation_deletion.py -pr <protocol> -d <domain> -u <adminUser> -p <adminPasswd>
example: python3 /usr/local/content/wme/wme-installer/10.7.1/resources/python/3/passivation_deletion.py -pr http -d test-domain.wavemaker.com -u test@wavemaker.com -p test-password -di False
```

- Stop WME setup using the following command.

```bash
    bash /usr/local/content/wme/wme-installer/<version>/wme-installer.sh --stop
```

- Take a backup of `/wm-data` directory of Platform Instance by taking a snapshot of a volume.
- For the disaster and recovery process take a backup of `/data` directory of Studio Workspace/AppDeploy Instances by taking snapshots.

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

- Use the below steps for taking /wm-data backup in Platform Instance, it will create data.tar in /wm-data location.user can copy the data.tar any secure location for backup.
  
```bash
bash wme-installer.sh --data-archive
```

## Data restore

### Platform Instance

- Launch the instance or VM with the same IP address and attach the /wm-data volume to Platform Instance.
- Mount the volume to the platform Instance using the following command.

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

#### VMWARE ESXi and Hyper-V

- Use the below steps for restore /wm-data using data.tar in Platform Instance

```bash
bash wme-installer.sh --data-untar
```  

[![data_untar](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)

### Studio Workspace/AppDeploy Instances

- Launch the instance or VM and attach the /data to Studio Workspace/AppDeploy Instances.
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

## Installing WME on New Instance

- For Download WaveMaker installation package please refer [WaveMaker package Installation](/learn/on-premise/aws/install/download-copy-installer).
- Extract Package please refer [WaveMaker package extraction](/learn/on-premise/aws/install/extract-package).
Initializing the setup please refer [WaveMaker Initialization](/learn/on-premise/aws/install/initilize-setup). Make sure provide the same CIDR Range which is used in previous setup.
- Setup using config wizard please refer [WaveMaker configwizard setup](/learn/on-premise/aws/install/setup-using-cw) and use same WaveMaker studio and built apps Domain names.

## Sync Studio Workspace/AppDeploy Instances

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy Instances.

```bash
bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh --upgrade-instances
```
