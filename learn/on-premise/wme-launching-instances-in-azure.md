---
title: "Launch Instances in Azure Cloud"
id: ""
sidebar_label: "Launch Instances in Azure Cloud"
---
---


## Launch instances in Azure Cloud
- CREATION OF A VIRTUAL NETWORK
  - An Azure Virtual Network (VNet) is a representation of your own network in the cloud.
  - For creating a virtual network provide basic details name and region by selecting a resource group
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vn-basic-details.png)](/learn/assets/wme-setup/wme-setup-in-azure/vn-basic-details.png)
  - In next step provide IP address space and create subnet or select default subnet
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vn-ip-address.png)](/learn/assets/wme-setup/wme-setup-in-azure/vn-ip-address.png)
  - Select desired security features for DDoS protection and for firewall
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vn-security-details.png)](/learn/assets/wme-setup/wme-setup-in-azure/vn-security-details.png)
  - Provide tags that are name-value pairs for the virtual network for categorizing the resources
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vn-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vn-tags.png)
  - select Create for create a virtual network with provided information
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vn-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vn-review-and-create.png)
- CREATION OF THE NETWORK SECURITY GROUP FOR PLATFORM VIRTUAL MACHINE AND EXTERNAL VIRTUAL MACHINE
  - creating network security group for platform virtual machine
    - Provide basic information name and region by selecting the resource group
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-basic-details.png)
    - Provide tags that are name-value pairs for the network security group for categorizing the resources
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-tags.png)
    - select Create for creating network security group for a platform virtual machine with the provided information
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-review-and-create.png)
    - After creating the network security group under settings select inbound security rules, create a rule for ports 8080,80,443 and 22 for public access and select protocol TCP and add a rule to network security group
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform-for-public-access.png)
    - Create another rule to open additional ports for access from the added instance or from the external instance. Select a destination as a virtual network. If you select a destination as a virtual network the security rule is applied to virtual machines whatever in the virtual network of the platform virtual machine. select protocol as TCP and select action allow. Provide priority is after the public access ports and select save and add the rule to the network security group.
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-platform.png)
  - creation of network security group for external virtual machine
    - Provide basic information name and region by selecting the resource group
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-basic.png)
    - Provide tags that are name-value pairs for the network security group for categorizing the resources
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-tags.png)
    - select Create for creating network security group for a platform virtual machine with the provided information
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external-review-and-create.png)
    - Create a security rule to open additional ports for access from the platform instance. Select a destination as a virtual network.based on the destination it applies the rules to virtual machines which are at the virtual network of an external virtual machine.
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external.png)](/learn/assets/wme-setup/wme-setup-in-azure/nsg-external.png)
- CREATE A VIRTUAL MACHINE FOR WME PLATFORM
  - Select ubuntu 16.04 image,4Vcpu, and 16 Gib memory for wme platform virtual machine select the same resource group and region of the virtual network and network security group
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-basic.png)
  - Select the authentication type password or ssh public key for launching a virtual machine. select public inbound port 22
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-ssh.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-ssh.png)
  - At disk section create 2 disks one for wm-runtime and another for wm-data with 50 and 150 GB size 
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-disk.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-disk.png)
  - At the networking section provide created virtual network details at the virtual network and at the NIC network security group select advanced options provide network security group of the platform. 
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-network.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-network.png)
  - Configure monitoring and management options for virtual machine
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-monitoring.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-monitoring.png)
  - If required add additional configuration, agents or scripts for virtual machine
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-advanced.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-advanced.png)
  - Provide tags that are name-value pairs for the virtual machine for categorizing the resources
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-tags.png)
  - After reviewing the virtual machine select creation option for creating a virtual machine 
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-platform-review-and-create.png)
- CREATE A VIRTUAL MACHINE FOR EXTERNAL
  - Select ubuntu 16.04 image,4Vcpu, and 16 Gib memory for wme platform virtual machine select the same resource group and region of the virtual network and network security group
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-basic.png)
  - Select the authentication type password or ssh public key for launching a virtual machine. select public inbound port 22
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-ssh.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-ssh.png)
  - At disk section create a disk for external usage 100GB size with premium SSD disk type
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-disks.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-disks.png)
  - At the networking section provide created virtual network details at the virtual network and at NIC network security group select advanced options provide network security group of the external.
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-network.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-network.png)
  - Configure monitoring and management options for virtual machine
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-monitoring.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-monitoring.png)
  - If required add additional configuration, agents or scripts for virtual machine
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-advanced.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-advanced.png)
  - Provide tags that are name-value pairs for the virtual machine for categorizing the resources
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-tags.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-tags.png)
  - After reviewing the virtual machine select creation option for creating a virtual machine
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-review-and-create.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-external-review-and-create.png)
- MOUNTING DISKS IN VIRTUAL MACHINES
  - Ssh into the platform virtual machine and check the available block devices by command lsblk. create a filesystem for disks for example by using the command mkfs -t ext4 /dev/sdc and mount the disks for example by using the command mount /dev/sdc /wm-runtime/.
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-mounting-volumes.png)
  - Check the mounted disks and do fstab.in fstab, we can provide information about the mount and automatically mounted files during boot. take UUID of disks for identification by using the command blkid.entry the  UUID of the disks in fstab
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure/vm-fstab.png)
