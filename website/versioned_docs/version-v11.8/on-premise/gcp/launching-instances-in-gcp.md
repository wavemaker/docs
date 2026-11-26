---
title: "WaveMaker Enterprise Setup on Google Cloud Platform"
id: "launching-instances-in-gcp"
sidebar_label: "Prepare Infrastructure"
---
---

## Prerequisite

- Having access in Google Cloud Platform (GCP) to create Instances and other resources. for more details visit [IAM and permissions in GCP](https://cloud.google.com/compute/docs/access/iam).
- Assuming VPC is already created. for creating VPC in GCP visit [VPC creation in GCP](https://cloud.google.com/vpc/docs/using-vpc).

## Firewall Rules for Platform and StudioWorkspace Instance / AppDeployment Instance

Applies for Workspace Instance/App Deployment Instance

- For creating firewall rules and more details visit [firewall rules in GCP](https://cloud.google.com/vpc/docs/using-firewalls)
- For WME setup in GCP require 3 firewall rules ,are
  - [wme-sg-platform-public](#create-firewall-rules-for-public-access-to-the-platform-instance)
  - [wme-sg-platform-internal](#create-a-firewall-rule-for-platform-instance)
  - [wme-sg-workspace-internal](#create-firewall-rule-for-studio-workspace-instanceapp-deployment-instance)

### Create firewall rules for developer network access to the Platform Instance

- Provide basic details name and network details for firewall.

[![network details](/learn/assets/wme-setup/wme-setup-in-gcp/platform-public-firewall-name-and-network.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-public-firewall-name-and-network.png)

- Select target type and source filter type.by using the target we can connect the firewall rule to Instance. example the which Instance have target tag the firewall is connect to that Instance and by using the source we can open ports to specific Instance. example the which Instance have a source tag the ports will be open to that Instance. we provide this tags at network section during the Instance creation.or else you can select your own Target and Source methods.

[![ports details](/learn/assets/wme-setup/wme-setup-in-gcp/platform-public-firewall-targets-and-ports.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-public-firewall-targets-and-ports.png)

### Create a firewall rule for Platform Instance

Applies for access from the StudioWorkspace Instance / AppDeployment Instance

- Provide basic details name and network details for firewall.

[![network details](/learn/assets/wme-setup/wme-setup-in-gcp/platform-internal-firewall-name-and-network.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-internal-firewall-name-and-network.png)

- Select target type and source filter type.by using the target we can connect the firewall rule to Instance.  example the which Instance have target tag the firewall is connect to that Instance and by using the source we can open ports to specific Instance. example the which Instance have a source tag the ports will be open to that Instance. we provide this tags at network section during the Instance creation.or else you can select your own Target and Source methods.

[![ports details](/learn/assets/wme-setup/wme-setup-in-gcp/platform-internal-firewall-target-and-ports.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-internal-firewall-target-and-ports.png)

### Create firewall rule for StudioWorkspace Instance / AppDeployment Instance

Applies for access from the Platform Instance

- Provide basic details name and network details for firewall

[![network details](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-firewall-name-and-network.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-firewall-name-and-network.png)

- Select target type and source filter type. by using the target we can connect the firewall rule to Instance. example the which Instance have target tag the firewall is connect to that Instance and by using the source we can open ports to specific Instance. example the which Instance have a source tag the ports will be open to that Instance.we provide this tags at network section during the Instance creation.or else you can select your own Target and Source methods.

[![port details](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-firewall-target-and-ports.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-firewall-target-and-ports.png)

## Creating a Platform Instance

- Select region,zone and provide name for Instance.select machine type with minimum 16 GB memory.

[![instance region](/learn/assets/wme-setup/wme-setup-in-gcp/platform-instance-region-and-zone.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-instance-region-and-zone.png)

- Select image or snapshot for creating boot disk.select operating system as ubuntu and version as ubuntu 16.04 LTS.

[![boot disk](/learn/assets/wme-setup/wme-setup-in-gcp/instance-boot-disk.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-boot-disk.png)

- Provide ssh key details in security for accessing the Instance.

[![ssh details](/learn/assets/wme-setup/wme-setup-in-gcp/instance-ssh-security.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-ssh-security.png)

- At disk section create disks for wm-data and wm-runtime with 150 and 50 GiB.

[![disk](/learn/assets/wme-setup/wme-setup-in-gcp/platform-instance-disk.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-instance-disk.png)

- At network section provide respected network tags of your firewall if you using source and target tags at firewall rules and create Instance.

[![network](/learn/assets/wme-setup/wme-setup-in-gcp/platform-instance-networking.jpg)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-instance-networking.jpg)

## Creating a StudioWorkspace Instance / AppDeployment Instance

Applies for Studio Instance/App Deployment Instance

- Select region,zone and provide name for Instance.select machine type.

[![region](/learn/assets/wme-setup/wme-setup-in-gcp/external-region-and-zone.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-region-and-zone.png)

- Select image or snapshot for creating boot disk.select operating system as ubuntu and version as ubuntu 16.04 LTS.

[![boot disk](/learn/assets/wme-setup/wme-setup-in-gcp/instance-boot-disk.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-boot-disk.png)

- Provide ssh key details in security for accessing the Instance.

[![ssh](/learn/assets/wme-setup/wme-setup-in-gcp/instance-ssh-security.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-ssh-security.png)

- At disk section create disk for StudioWorkspace Instance / AppDeployment Instance usage with minimum of 100 GiB.

[![disk](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-disk.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-disk.png)

- At network section provide respected network tags of your firewall if you using source and target tags at firewall rules and create Instance.

[![network](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-network.jpg)](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-network.jpg)

## Mounting Storage volumes in Instances

### Mounting Disks in Platform Instance

- For ssh into the Platform Instance use the following command.
- For login use the following command

```bash
ssh -i /path/to/ssh-privatekey username@ipaddress
```

- Check your list of block devices available by using the following command.

```bash
lsblk
```

- New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command.

```bash
Command : mkfs -t ext4 /dev/<block-device-name_1>
mkfs -t ext4 /dev/<block-device-name_2>
Example :
mkfs -t ext4 /dev/sdd
mkfs -t ext4 /dev/sdc
```

- Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume. for wme-setup create two directories.create directories using the following commands.

```bash
mkdir /wm-data /wm-runtime
```

- Use the following command to mount the volume at the directory.

```bash
Command :  
mount /dev/<block-device-name_1>    /wm-data
mount /dev/<block-device-name_2>    /wm-runtime  
Example :
mount /dev/sdc    /wm-data
mount /dev/sdd    /wm-runtime
```

[![volume mounting](/learn/assets/wme-setup/wme-setup-in-gcp/mounting-volumes-platform.png)](/learn/assets/wme-setup/wme-setup-in-gcp/mounting-volumes-platform.png)

- To mount an attached Disk on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the command.

```bash
blkid
```

- Entry the UUID of the disks in `fstab.use` the following format

```bash
UUID=<block-device_1-UUID>    /wm-data     ext4   defaults ,nofail  0  2
UUID=<block-device_2-UUID>    /wm-runtime  ext4   defaults ,nofail  0  2
```

[![fstab](/learn/assets/wme-setup/wme-setup-in-gcp/fstab-platform.png)](/learn/assets/wme-setup/wme-setup-in-gcp/fstab-platform.png)

### Mounting Disks in StudioWorkspace Instance / AppDeployment Instance

:::note
Applies for StudioWorkspace Instance/AppDeployment Instance
:::

- For ssh into the platform virtual machine use the following command.
- For login use the following command.

```bash
ssh -i /path/to/ssh-privatekey username@ipaddress
```

- Check your list of block devices available by using the following command.

```bash
lsblk
```

- New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command.

```bash
Command : mkfs -t ext4 /dev/<block-device-name>
Example : mkfs -t ext4 /dev/sdc  
```

- Use the `mkdir` command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files after you mount the volume. For WME-Setup, create two directories using the following commands.

```bash
mkdir /data
```

- Use the following command to mount the volume at the directory.

```bash
Command: mount /dev/block-device-name    /data
Example: mount /dev/sdc  /data
```

[![volume mounting](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-volume-mounting.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-volume-mounting.png)

- To mount an attached Disk on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the command.

```bash
blkid
```

- Entry the UUID of the disks in `fstab.use` the following format.

```bash
UUID=<your-block-device-UUID>    /data     ext4     defaults ,nofail  0  2
```

[![fstab](/learn/assets/wme-setup/wme-setup-in-gcp/fstab-platform.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-instance-fstab.png)

## What's next

- Install [prerequisites softwares](/learn/on-premise/gcp/install-prerequisites) based on OS.
- Start WME Installation process
