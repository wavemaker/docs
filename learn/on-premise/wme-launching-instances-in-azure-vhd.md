---
title: "Launch Instances in AzureCloud using VHD"
id: ""
sidebar_label: "Launch Instances in AzureCloud using VHD"
---
---

### Launch an instances in AzureCloud using VHD 
**Prerequisites**
  - User have to an access in azure to create VM and other resources for more details refer [Azure resource docmentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview)
  - Assuming an Azure Virtual Network (VNet) is already created or existed. an Azure Virtual Network (VNet) is a representation of your own network in the cloud.for creation of virtual network visit [Azure virtual network creation](https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal)
  - Create fixed vhd with ubuntu 16.04 os
  - Install azcopy (for copying the files from local to azure storage account container).for install azcopy to respective devices refer [download azcopy from azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)
  - Install azcli (for login into the az account).for install azcli visit [install azcli from azure](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
  - Assuming storage account container is already created.if not created for creating the container visit [creating a container in azre](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal)

**Steps**  
**Creation of the Network Security Groups for Platform Virtual Machine and External or Workspace/AppDeployment Virtual Machine**
  - creating network security group for platform virtual machine .To Access Platfrom Virtual Machine from Studio workspace/AppDeployment Virtual Machine
    - Provide basic information name and region by selecting the resource group
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)

    - Provide tags that are name-value pairs for the network security group for categorizing the resources
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)

    - Select Create for creating network security group for a platform virtual machine with the provided information
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)

    - After creating the network security group under settings select inbound security rules, create a rule for public access and select protocol TCP and add a rule to network security group
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)

    - If you want ssh access to only disired networks create another rule and provide your network ips for ssh access.

    - Create another rule to open additional ports for access Platform Virtual Machine from the Workspce/Appdeployment or external virtual machine. Next,select a destination. 
     
    - If you select a destination as a virtual network the security rule is applied to virtual machines whatever in the virtual network of the platform virtual machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group ,or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic)
    
    - Next select protocol as TCP and select action allow. Provide priority is after the public access ports and select save and add the rule to the network security group.
      <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)

    

  - Creation of network security group for External or Workspace/AppDeployment virtual machine.To access External or Workspace/AppDeployment virtual machine from Platform Virtual Machine.
    - Provide basic information name and region by selecting the resource group
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)

    - Provide tags that are name-value pairs for the network security group for categorizing the resources
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)

    - Select Create for creating network security group for a platform virtual machine with the provided information
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)

    - Create a security rule to open additional ports for access from the platform instance. Select a destination.based on the destination it applies the rules to virtual machines.
    - If you select a destination as a virtual network the security rule is applied to virtual machines whatever in the virtual network of the platform virtual machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group ,or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic)
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-internal-rule.png)
    - If you want ssh access to only disired networks create another rule and provide your network ips for ssh access.
    <br/><br/>

**copying vhd file to azure** 
  - Generate sas in storage account
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/generate-sas.jpg)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/generate-sas.jpg)
    
  - Copy the vhd file from local to respective created storage account container. use the following example for copying the vhd to container. 
  - azcopy copy "local\path\filename.vhd" "container url and sas" --blob-type PageBlob
  - Example
  ```
   azcopy copy "C:\filename.vhd" "https://account.blob.core.windows.net/mycontainer1< generated sas >" --blob-type PageBlob
   ```
  - Vhd file WME-installer-10.3.1.ee.vhd uploaded to respected storage account container
	  <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vhd-upload.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vhd-upload.png)
    <br/><br/>

**Creating The Disk Using VHD File**
  - specifying the project details for disk creation
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-project-details.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-project-details.png)
      
  - Create a disk by providing basic details and select source type as storage blob and select size of the os disk
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-creation.jpg)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-creation.jpg)
      <br/><br/>

**VM Creation by Using The Disk**
  - Provide basic information in the creation process
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-basic.png)

  - add storage 50 GiB for wm-runtime and 150 GiB for wm-data and if required add 50 GiB for /usr/local/content
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-disks.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-disks.png)

  - select create VM option at the left top. create VM providing required details disks and networking
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-networking.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-networking.png)
      <br/><br/>

**Mounting Disk in Platform Virtual Machines**
  - For ssh into the platform virtual machine use the following command.
     - If you using the ssh key method for login use thefollowing command
     ```
     ssh -i /path/to/ssh-privatekey username@ipaddress
     ```
     - If you using the ssh username and password for login use the folowing command.
     ```
     ssh username@ipaddress
     ```
  -  Check your list of block devices available by using the following command
         ```
           lsblk
           ```
  -  New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command
     -  mkfs -t ext4 /dev/< block-device-name >
      ```
       Example: mkfs -t ext4 /dev/sdc
       ```
  -  Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume.for wme-setup create two directories.create directories using the following commands
      ```
       mkdir /wm-data /wm-runtime
      ```
  -  use the following command to mount the volume at the directory
      ```
       mount /dev/block-device-name    /directory  
      ```
      [![](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)

  - To mount an attached EBS volume on every system reboot, add an entry for the device to the /etc/fstab file.
      - take UUID of disks for identification by using the command
          ```
          blkid
          ```
      - entry the UUID of the disks in fstab.use the following format
     ```
    UUID=your-block-device-UUID      mount-directory     filesystem     defaults ,nofail  0  2
     ```
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)

**Mounting Disks in External or Workspace/AppDeployment virtual Machines**
- For ssh into the platform virtual machine use the following command.
   - If you using the ssh key method for login use thefollowing command
   ```
   ssh -i /path/to/ssh-privatekey username@ipaddress
   ```
   - If you using the ssh username and password for login use the folowing command.
   ```
   ssh username@ipaddress
   ```
-  Check your list of block devices available by using the following command
       ```
         lsblk
         ```
-  New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command
   -  mkfs -t ext4 /dev/< block-device-name >
    ```
     Example: mkfs -t ext4 /dev/sdc
     ```
-  Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume.for wme-setup create two directories.create directories using the following commands
    ```
     mkdir /data
    ```
-  use the following command to mount the volume at the directory
    ```
     mount /dev/block-device-name    /directory  
    ```
    [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)

- To mount an attached EBS volume on every system reboot, add an entry for the device to the /etc/fstab file.
    - take UUID of disks for identification by using the command
        ```
        blkid
        ```
    - entry the UUID of the disks in fstab.use the following format
   ```
    UUID=your-block-device-UUID      mount-directory     filesystem     defaults ,nofail  0  2
   ```
    [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)


 



