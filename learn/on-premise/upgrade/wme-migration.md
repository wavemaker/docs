---
title: "WME migration"
id: ""
sidebar_label: "WME Migration"
---
---

To Upgrade the operating system os by migrating Data or for Disaster and recovery process users can follow below steps.

## Prerequisites

- WaveMaker uses separate dedicated directory `/wm-data` in WaveMaker Platform Instance for storing data and `/data` in Studio Workspace/AppDeploy Instances.
- For upgrading OS please Hibernate and passivate all containers form launchpad.
- Take a backup of `/wm-data` directory of Platform Instance by snapshot of volume.
- For disaster and recovery process take a backup of `/data` directory of Studio Workspace/AppDeploy Instances by taking snapshots.

### AWS

- Stop WME EC2 instance and detach eth1 network interface [follow the steps given here](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#detach_eni), make a note of interface ID or eni ID

### Azure

- Stop WME VM and detach network interface [follow the steps given here](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface-vm#remove-a-network-interface-from-a-vm), make a note of interface ID.

### GCP

- Stop WME VM and detach ip address [follow the steps given here](https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address#deleting_a_static_internal_ip_address), make a note of interface ID.

### ESXI

- Use below steps for take /wm-data backup in Platform Instance, it will create data.tar in /wm-data location
  
```bash
bash wme-installer.sh --data-archive
```

## Data restore

### Platform Instance

- Launch the instance or VM with same IP address and attach the /wm-data to Platform Instance.
- Mount the volume to the platform Instance using following command

```bash
mount /dev/</wm-data disk> /wm-data
example: mount /dev/xvdh /wm-data
```

- Update the fstab entry for volume on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the following command.

```bash
blkid
```

- To entry the UUID of the disks in fstab, use the following format.

``` bash
UUID=</wm-data block-device-UUID>  /wm-data   ext4   defaults ,nofail  0  2
```

#### ESXI

- Use below steps for restore /wm-data using data.tar in Platform Instance

```bash
bash wme-installer.sh --data-untar
```  

[![data_untar](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)](/learn/assets/wme-setup/upgrade-wme-setup/data-un-tar.png)

### Studio Workspace/AppDeploy Instances

- Launch the instance or VM  and attach the /data to Studio Workspace/AppDeploy Instances.
- Mount the volume to the Studio Workspace/AppDeploy Instances using following command

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
- Initialising the setup please refer [WaveMaker Initialisation](/learn/on-premise/aws/install/initilize-setup). Make sure provide the same CIDR Range which is used in previous setup.
- Setup using config wizard please refer [WaveMaker configwizard setup](/learn/on-premise/aws/install/setup-using-cw) and use same WaveMaker studio and builts apps Domain names.

## External instance sync for disaster recovery

- Execute the following command in Platform Instance to sync the StudioWorkspace/AppDeploy Instances.

```bash
bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh --upgrade-instances
```
