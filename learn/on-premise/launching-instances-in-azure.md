---
title: "WaveMaker Enterprise Setup on Azure Cloud"
id: ""
sidebar_label: "Setup on Azure"
---
---

## Prerequisites

- User have to an access in azure to create VM and other resources for more details refer [Azure resource documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview).
- Assuming an Azure Virtual Network (VNet) is already created or existed. an Azure Virtual Network (VNet) is a representation of your own network in the cloud.for creation of virtual network visit [Azure virtual network creation](https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal).

## Creation of Network Security Groups

- For creating network security groups refer [creating NSG in Azure](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group).
- For WME setup in Azure require two security groups,are
  - [WME-SG-Platform-Public-and-Internal](#creating-network-security-group-for-platform-virtual-machine)
  - [WME-SG-Workspace-Internal](#creation-of-network-security-group-for-external-or-workspaceappdeployment-virtual-machine)

### Creating network security group for platform virtual machine

- Provide basic information name and region by selecting the resource group.

[![basic](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)

- Provide tags that are name-value pairs for the network security group for categorizing the resources.

[![tags](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)

- Select Create for creating network security group for a platform virtual machine with the provided information.

[![review](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)

- After creating the network security group under settings select inbound security rules, create a rule for public access and select protocol TCP and add a rule to network security group.

[![ports public access](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)

- If you want ssh access to only desired networks create another rule and provide your network ips for ssh access.

- Create another rule to open additional ports for access Platform Virtual Machine from the Workspace/Appdeployment or external virtual machine. Next,select a destination.

- If you select a destination as a virtual network the security rule is applied to virtual machines whatever in the virtual network of the platform virtual machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group, or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic).

- Next select protocol as TCP and select action allow. Provide priority is after the public access ports and select save and add the rule to the network security group.

[![ports internal](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)

### Creation of network security group for External or Workspace/AppDeployment virtual machine

- Provide basic information name and region by selecting the resource group.

[![basic](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)

- Provide tags that are name-value pairs for the network security group for categorizing the resources.

[![tags](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)

- Select Create for creating network security group for a platform virtual machine with the provided information.

[![review](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)

- Create a security rule to open additional ports for access from the platform instance. Select a destination.based on the destination it applies the rules to virtual machines.
- If you select a destination as a virtual network the security rule is applied to virtual machines whatever in the virtual network of the platform virtual machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group, or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic).

[![ports internal](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-internal-rule.png)

- If you want ssh access to only desired networks create another rule and provide your network ips for ssh access.

## Create a Virtual Machine for WME Platform

- Select ubuntu 16.04 image,4Vcpu, and 16 Gib memory for wme platform virtual machine select the same resource group and region of the virtual network and network security group.

[![region](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-basic.png)

- Select the authentication type password or ssh public key for launching a virtual machine.

[![ssh](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-ssh.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-ssh.png)

- At disk section create 2 disks one for wm-runtime and another for wm-data with 50 and 150 GB size.if you want any additional disk you can add.

[![disk](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-disk.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-disk.png)

- At the networking section provide created virtual network details at the virtual network and at the NIC network security group select advanced options provide network security group of the platform.

[![network](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-network.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-network.png)

- Configure monitoring and management options for virtual machine.

[![monitor](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-monitoring.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-monitoring.png)

- If required add additional configuration, agents or scripts for virtual machine.

[![advance](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-advanced.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-advanced.png)

- Provide tags that are name-value pairs for the virtual machine for categorizing the resources.

[![tags](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-tags.png)

- After reviewing the virtual machine select creation option for creating a virtual machine.

[![review](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-review-and-create.png)

## Create a Virtual Machine for External Virtual Machine

Applies for workspace Virtual Machine/AppDeployment Virtual Machine

- Select ubuntu 16.04 image,4Vcpu, and 16 Gib memory for wme platform virtual machine select the same resource group and region of the virtual network and network security group.

[![region](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-basic.png)

- Select the authentication type password or ssh public key for launching a virtual machine.

[![ssh](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-ssh.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-ssh.png)

- At disk section create a disk for external usage provide minimum 100GB size with premium SSD disk type.

[![disks](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-disks.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-disks.png)

- At the networking section provide created virtual network details at the virtual network and at NIC network security group select advanced options provide network security group of the external.

[![networks](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-network.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-network.png)

- Configure monitoring and management options for virtual machine.

[![monitor](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-monitoring.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-monitoring.png)

- If required add additional configuration, agents or scripts for virtual machine.

[![advanced](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-advanced.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-advanced.png)

- Provide tags that are name-value pairs for the virtual machine for categorizing the resources.

[![tags](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-tags.png)

- After reviewing the virtual machine select creation option for creating a virtual machine.

[![review](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-review-and-create.png)

## Mounting Disks in Virtual Machines

### Mounting Disk in Platform Virtual Machines

- For ssh into the platform virtual machine use the following command.
- If you using the ssh key method for login use the following command.

```bash
ssh -i /path/to/ssh-privatekey username@ipaddress
```

- If you using the ssh username and password for login use the following command.

```bash
ssh username@ipaddress
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

- Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume. for wme-setup create two directories. create directories using the following commands.

```bash
mkdir /wm-data /wm-runtime
```

- Use the following command to mount the volume at the directory.

```bash
Command :  
    mount /dev/<block-device-name_1>    /wm-data
    mount /dev/<block-device-name_2>    /wm-runtime  
Example :
    mount /dev/sdd    /wm-data
    mount /dev/sdc    /wm-runtime
```

[![volume mounting](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)

- To mount an attached Azure Disks on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the command.

```bash
blkid
```

- Entry the UUID of the disks in fstab.use the following format.

```bash
UUID=your-block-device-UUID      /wm-data        ext4     defaults ,nofail  0  2
UUID=<block-device_1-UUID>       /wm-runtime     ext4     defaults ,nofail  0  2
```

[![fstab](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)

### Mounting Disks in External virtual Machine

:::note
Applies for StudioWorkspace Instance/AppDeployment Instance
:::

- For ssh into the platform virtual machine use the following command.
- If you using the ssh key method for login use the following command.

```bash
ssh -i /path/to/ssh-privatekey username@ipaddress
```

- If you using the ssh username and password for login use the following command.

```bash
ssh username@ipaddress
```

- Check your list of block devices available by using the following command.

```bash
lsblk
```

- New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command.

```bash
Command: mkfs -t ext4 /dev/< block-device-name >
Example: mkfs -t ext4 /dev/sdc
```

- Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume. for wme-setup create two directories. create directories using the following commands.

```bash
mkdir /data
```

- Use the following command to mount the volume at the directory.

```bash
Command: mount /dev/block-device-name    /data
Example: mount /dev/sdc  /data  
```

[![volume mounting](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)

- To mount an attached Azure Disks on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the command.

```bash
blkid
```

- Entry the UUID of the disks in fstab. use the following format.

```bash
UUID=your-block-device-UUID      /data     ext4     defaults ,nofail  0  2
```

[![fstab](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)
