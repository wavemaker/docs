---
title: "Launch Instances in AzureCloud using VHD"
id: ""
sidebar_label: "Launch Instances in AzureCloud using VHD"
---
---

## Prerequisites

- User have to an access in azure to create VM and other resources for more details refer [Azure resource documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview).
- Assuming an Azure Virtual Network (VNet) is already created or existed. an Azure Virtual Network (VNet) is a representation of your own network in the cloud.for creation of virtual network visit [Azure virtual network creation](https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal).
- Create fixed vhd with ubuntu 16.04 os.
- Install azcopy (for copying the files from local to azure storage account container).for install azcopy to respective devices refer [download azcopy from azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10).
- Install azcli (for login into the az account).for install azcli visit [install azcli from azure](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest).
- Assuming storage account container is already created.if not created for creating the container visit [creating a container in azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal).

## Creation of Network Security Groups

- For creating network security groups refer [creating NSG in Azure](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group).
- For WME setup in Azure require two security groups,are
  - WME-SG-Platform-Public-and-Internal
  - WME-SG-Workspace-Internal
   
### Creating Network Security Group for Platform Virtual Machine

- Provide basic information name and region by selecting the resource group.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)

- Provide tags that are name-value pairs for the network security group for categorizing the resources.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)

- Select Create for creating network security group for a platform Virtual Machine with the provided information.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)

- After creating the network security group under settings select inbound security rules, create a rule for public access and select protocol TCP and add a rule to network security group.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)

- If you want ssh access to only desired networks create another rule and provide your network ips for ssh access.

- Create another rule to open additional ports for access Platform Virtual Machine from the Workspace/AppDeployment or External Virtual Machine. Next, select a destination. 

- If you select a destination as a virtual network the security rule is applied to Virtual Machines whatever in the virtual network of the platform Virtual Machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group, or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic).

- Next select protocol as TCP and select action allow. Provide priority is after the public access ports and select save and add the rule to the network security group.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)



### Creation of Network Security Group for External Virtual Machine

Applies for Workspace Virtual Machine / AppDeployment Virtual Machine

- Provide basic information name and region by selecting the resource group.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)

- Provide tags that are name-value pairs for the network security group for categorizing the resources.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)

- Select Create for creating network security group for a platform Virtual Machine with the provided information.

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)

- Create a security rule to open additional ports for access from the Platform Instance. Select a destination.based on the destination it applies the rules to Virtual Machines.
- If you select a destination as a virtual network the security rule is applied to Virtual Machines whatever in the virtual network of the platform Virtual Machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group, or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic).

[![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-internal-rule.png)
- If you want ssh access to only desired networks create another rule and provide your network ips for ssh access.


## Copying VHD File to Azure

- Generate sas in storage account.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/generate-sas.jpg)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/generate-sas.jpg)

- Copy the vhd file from local to respective created storage account container. use the following example for copying the vhd to container. 
- azcopy copy "local\path\filename.vhd" "container url and sas" --blob-type PageBlob
- Example:
```
azcopy copy "C:\filename.vhd" "https://account.blob.core.windows.net/mycontainer1< generated sas >" --blob-type PageBlob
```
- Vhd file WME-vhd-file.vhd uploaded to respected storage account container.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vhd-upload.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vhd-upload.png)


## Creating The Disk Using VHD File

- specifying the project details for disk creation.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-project-details.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-project-details.png)

- Create a disk by providing basic details and select source type as storage blob and select size of the os disk.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-creation.jpg)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-creation.jpg)


## VM Creation by Using The Disk

- Provide basic information in the creation process.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-basic.png)

- add storage 50 GiB for wm-runtime and 150 GiB for wm-data and if required add 50 GiB for /usr/local/content.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-disks.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-disks.png)

- select create VM option at the left top. create VM providing required details disks and networking.

[![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-networking.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-networking.png)


## Mounting Disks in Virtual Machines

### Mounting Disk in Platform Virtual Machines

- For ssh into the platform Virtual Machine use the following command.
- If you using the ssh key method for login use the following command.

```
ssh -i /path/to/ssh-privatekey username@ipaddress
```

- If you using the ssh username and password for login use the following command.

```
ssh username@ipaddress
```

-  Check your list of block devices available by using the following command.

```
lsblk
```

-  New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command.

```
Command : mkfs -t ext4 /dev/<block-device-name_1>
      mkfs -t ext4 /dev/<block-device-name_2>
Example : 
    mkfs -t ext4 /dev/sdd
    mkfs -t ext4 /dev/sdc
```

-  Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume. for wme-setup create two directories. create directories using the following commands.

```
mkdir /wm-data /wm-runtime
```

-  Use the following command to mount the volume at the directory.

```
Command :  
mount /dev/<block-device-name_1>    /wm-data
mount /dev/<block-device-name_2>    /wm-runtime  
Example : 
mount /dev/sdd    /wm-data
mount /dev/sdc    /wm-runtime  
```

[![](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)

- To mount an attached Azure Disks on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the command.

```
blkid
```

- Entry the UUID of the disks in fstab.use the following format.

```
UUID=your-block-device-UUID      /wm-data        ext4     defaults ,nofail  0  2
UUID=<block-device_1-UUID>       /wm-runtime     ext4     defaults ,nofail  0  2
```

[![](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)

- #### Mounting Disks in External virtual Machine(Workspace Virtual Machine / AppDeployment Virtual Machine)
- For ssh into the platform Virtual Machine use the following command.
- If you using the ssh key method for login use the following command.

```
ssh -i /path/to/ssh-privatekey username@ipaddress
```

- If you using the ssh username and password for login use the following command.

```
ssh username@ipaddress
```

-  Check your list of block devices available by using the following command.

```
lsblk
```
-  New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command.

```
Command: mkfs -t ext4 /dev/< block-device-name >
Example: mkfs -t ext4 /dev/sdc
```

-  Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume. for wme-setup create two directories. create directories using the following commands.

```
mkdir /data
```

-  Use the following command to mount the volume at the directory.

```
Command: mount /dev/block-device-name    /data
Example: mount /dev/sdc  /data 
```

[![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)

- To mount an attached Azure Disks on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the command.

```
blkid
```

- Entry the UUID of the disks in fstab.use the following format.

```
UUID=your-block-device-UUID      /data     ext4     defaults ,nofail  0  2
```

[![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)
