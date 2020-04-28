---
title: "Launch Instances in Azure Cloud"
id: ""
sidebar_label: "Launch Instances in Azure Cloud"
---
---


### Launch instances in Azure Cloud
**Prerequisites**
- User have to an access in azure to create VM and other resources for more details refer [Azure resource documentation](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview)
- Assuming an Azure Virtual Network (VNet) is already created or existed. an Azure Virtual Network (VNet) is a representation of your own network in the cloud.for creation of virtual network visit [Azure virtual network creation](https://docs.microsoft.com/en-us/azure/virtual-network/quick-create-portal)

**Steps**
- For creating network security groups refer [creating NSG in Azure](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group)
- For WME setup in Azure require two security groups,are
  - WME-SG-Platform-Public-and-Internal
  - WME-SG-Workspace-Internal

**Creation of the Network Security Groups for Platform Virtual Machine and External or Workspace/AppDeployment Virtual Machine**
  - Creating network security group for platform virtual machine .To Access Platform Virtual Machine from Studio workspace/AppDeployment Virtual Machine. i.e WME-SG-Platform-Public-and-Internal
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

    - If you want ssh access to only desired networks create another rule and provide your network ips for ssh access.

    - Create another rule to open additional ports for access Platform Virtual Machine from the Workspace/Appdeployment or external virtual machine. Next,select a destination. 
     
    - If you select a destination as a virtual network the security rule is applied to virtual machines whatever in the virtual network of the platform virtual machine,or if you select destination as application security group, it applies to the only VMs which are connect to that application security group ,or else if you select destination as Ip Addresses the rules are apply to respected IP address resource. for more details visit [filter network traffic in azure](https://docs.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic)
    
    - Next select protocol as TCP and select action allow. Provide priority is after the public access ports and select save and add the rule to the network security group.
      <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-internal-rule.png)

    

  - Creation of network security group for External or Workspace/AppDeployment virtual machine.To access External or Workspace/AppDeployment virtual machine from Platform Virtual Machine. i.e WME-SG-Workspace-Internal
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

**Create a Virtual Machine for WME Platform**
  - Select ubuntu 16.04 image,4Vcpu, and 16 Gib memory for wme platform virtual machine select the same resource group and region of the virtual network and network security group
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-basic.png)

  - Select the authentication type password or ssh public key for launching a virtual machine.
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-ssh.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-ssh.png)

  - At disk section create 2 disks one for wm-runtime and another for wm-data with 50 and 150 GB size.if you want any additional disk you can add.
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-disk.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-disk.png)

  - At the networking section provide created virtual network details at the virtual network and at the NIC network security group select advanced options provide network security group of the platform. 
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-network.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-network.png)

  - Configure monitoring and management options for virtual machine
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-monitoring.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-monitoring.png)

  - If required add additional configuration, agents or scripts for virtual machine
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-advanced.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-advanced.png)

  - Provide tags that are name-value pairs for the virtual machine for categorizing the resources
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-tags.png)

  - After reviewing the virtual machine select creation option for creating a virtual machine 
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-review-and-create.png)
      <br/><br/>

**Create a Virtual Machine for External or workspace/AppDeployment**
  - Select ubuntu 16.04 image,4Vcpu, and 16 Gib memory for wme platform virtual machine select the same resource group and region of the virtual network and network security group
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-basic.png)

  - Select the authentication type password or ssh public key for launching a virtual machine.
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-ssh.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-ssh.png)

  - At disk section create a disk for external usage provide minimum 100GB size with premium SSD disk type
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-disks.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-disks.png)

  - At the networking section provide created virtual network details at the virtual network and at NIC network security group select advanced options provide network security group of the external.
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-network.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-network.png)

  - Configure monitoring and management options for virtual machine
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-monitoring.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-monitoring.png)

  - If required add additional configuration, agents or scripts for virtual machine
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-advanced.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-advanced.png)

  - Provide tags that are name-value pairs for the virtual machine for categorizing the resources
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-tags.png)

  - After reviewing the virtual machine select creation option for creating a virtual machine
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-review-and-create.png)
      <br/><br/>

**Mounting Disk in Platform Virtual Machines**
  - For ssh into the platform virtual machine use the following command.
     - If you using the ssh key method for login use the following command
     ```
     ssh -i /path/to/ssh-privatekey username@ipaddress
     ```
     - If you using the ssh username and password for login use the following command.
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
  -  Use the following command to mount the volume at the directory
      ```
       mount /dev/block-device-name    /directory  
      ```
      [![](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/platform-instance-mounting-volumes.png)

  - To mount an attached Azure Disks on every system reboot, add an entry for the device to the /etc/fstab file.
      - Take UUID of disks for identification by using the command
          ```
          blkid
          ```
      - Entry the UUID of the disks in fstab.use the following format
     ```
    UUID=your-block-device-UUID      mount-directory     filesystem     defaults ,nofail  0  2
     ```
  	  <br/><br/>
      [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)
**Mounting Disks in External or Workspace/AppDeployment virtual Machines**
- For ssh into the platform virtual machine use the following command.
   - If you using the ssh key method for login use the following command
   ```
   ssh -i /path/to/ssh-privatekey username@ipaddress
   ```
   - If you using the ssh username and password for login use the following command.
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
-  Use the following command to mount the volume at the directory
    ```
     mount /dev/block-device-name    /directory  
    ```
    [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-mounting-volumes.png)

- To mount an attached Azure Disks on every system reboot, add an entry for the device to the /etc/fstab file.
    - Take UUID of disks for identification by using the command
        ```
        blkid
        ```
    - Entry the UUID of the disks in fstab.use the following format
   ```
  UUID=your-block-device-UUID      mount-directory     filesystem     defaults ,nofail  0  2
   ```
	  <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-fstab.png)