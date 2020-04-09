---
title: "Launch Instances"
id: ""
sidebar_label: "Launch Instances"
---
---

This section provides how-to 
- launch instances in various cloud providers.  
- add/format disks.
- configure security groups
- configure networking

## Launch instances in Esxi using OVA  
This guide has written based on Exsi version 6.5.
- Login into VMware ESXi Server using  Server IP address and user credentials. 
- Select Create/Register VM for creating the new virtual machine
- Select creation type as deploy a virtual machine by from an ovf or ova file
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/select-vm-creation-type.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/select-vm-creation-type.png)
- Select ovf or ova file for VM would like to deploy
    [![](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-ovf-template-for-deploy.png)](/learn/assets//wme-setup/vm-creation-by-using-ova/selecting-the-ovf-template-for-deploy.png)
- Select the database in which to store the configuration and disk files  
   [![](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-database-for-storage.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-database-for-storage.png)
- Select deployment options like networks mappings, disk provisioning, etc.
  [![](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-deployment-options-and-networking.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/selecting-the-database-for-storage.png)
- Review your selected configuration and settings, then click on the finish for creating the virtual machine. 
  [![](/learn/assets/wme-setup/vm-creation-by-using-ova/review-the-settings.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/review-the-settings.png)
- Wait for few moments for complete successfully the creation of virtual machine
   [![](/learn/assets/wme-setup/vm-creation-by-using-ova/created-vm-show-in-dashboard.png.png)](/learn/assets/wme-setup/vm-creation-by-using-ova/created-vm-show-in-dashboard.png)


## Launch instances in Esxi using ISO 
This guide has written based on Exsi version 6.5.
- click on the link for download the Ubuntu 16.04.6 ISO image
  [ubuntu 16.04.6 iso image](http://releases.ubuntu.com/16.04/ubuntu-16.04.6-server-amd64.iso)
- Upload ubuntu server iso image to the database store
- Select Create / Register VM 
- Select creation type as a new virtual machine
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-vm-creation-type.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-vm-creation-type.png)
- Select name and guest os, select os family as Linux and guest os version as ubuntu Linux 64bit
	[![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-name-and-guest-os.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-name-and-guest-os.png)
- Select a database in which to store configuration and data store
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-database.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-database.png)
- Customize virtual machine hardware, additional options and upload file from datastore.after creating the VM poweron the VM and proceed to next operation
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/customize-settings.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/customize-settings.png)
- Select the language to perform the further operation
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-language-for-process.png)](/learn/assets/wme-setup/selecting-language-for-process.png)
- Select install ubuntu server to start installation process
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/ubuntu-server-installation.png)](/learn/assets/wme-setup/ubuntu-server-installation.png)
- Select the language for system
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-language-for-system.png)](/learn/assets/wme-setup/selecting-the-language-for-system.png)
- Select your location
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-location.png)](/learn/assets/wme-setup/selecting-location.png)
- Configure the keyboard by selecting a language
- Provide hostname for the system to configure the system
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-host-name.png)](/learn/assets/wme-setup/selecting-the-host-name.png)
- Setup users and password details for server, provide the username as ubuntu
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/username-and-password-setup.png)](/learn/assets/wme-setup/username-and-password-setup.png)
- Configure the clock
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/configuring-the-clock.png)](/learn/assets/wme-setup/configuring-the-clock.png)
- Select the disk partition method
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/disk-partition-method.png)](/learn/assets/wme-setup/disk-partition-method.png)
- Select the disk to partition
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-disk-to-partition.png)](/learn/assets/wme-setup/selecting-disk-to-partition.png)
- Choose the option to write changes to disk and configure
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-option-for-writting-changes-to-disk.png)](/learn/assets/wme-setup/selecting-option-for-writting-changes-to-disk.png)
- Select amount of volume to do the partition
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-volume-size-for-partition.png)](/learn/assets/wme-setup/selecting-volume-size-for-partition.png)
- If you have any proxy provide proxy details
	[![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/proxy-information.png)](/learn/assets/wme-setup/proxy-information.png)
- Select option to manage upgrades on your system
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/managing-upgrades.png)](/learn/assets/wme-setup/managing-upgrades.png)
- Choose option to install or not grub boot loader to the master boot record
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/installing-grub-loader.png)](/learn/assets/wme-setup/installing-grub-loader.png)
- Wait for few moments to complete the installation process, then login into system by providing username and password
- For connecting from terminals please install openssh-server
  - sudo apt-get install openssh-server -y
  - sudo systemctl start ssh
- For checking the status of ssh 
  - sudo systemctl status ssh
  

## Launch instances in hyper-v using VHD
- Open  HYPER V, Right-click on your Hyper-V host, click on New, Select virtual machine for creating a platform virtual machine.
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/selecting-the-vm-creation-in-hyperv.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/selecting-the-vm-creation-in-hyperv.png)
- Click next on the wizard
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/click-on-wizard.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/click-on-wizard.png)
- Provide name for the virtual machine and click on next
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/providing-name.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/providing-name.png)
- Select the generation 1 option click on next
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/generation-type.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/generation-type.png)
- Enter the memory as 16000 MB. You can use the dynamic memory option as per the requirements and click next
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/assigning-memory.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/assigning-memory.png)
- Select the switch (Virtual Switch) for the connection and click next
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/configure-network.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/configure-network.png)
- Select Use an existing virtual hard disk option and browse to select the WME platform VM vhd from your local machine. 
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/virtual-harddisk-connnection.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/virtual-harddisk-connnection.png)
- Verify the summary page and click on finish
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/verify-the-summary.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/verify-the-summary.png)
- Start and connect to the VM.
  [![](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/start-and-connect-vm.png)](/learn/assets/wme-setup/vm-creation-in-hyperv-using-vhd/start-and-connect-vm.png)


## Launch instances in AWS EC2 
- CREATING A SECURITY GROUP FOR PLATFORM AND EXTERNAL INSTANCE
  - Create a security group for public access to the platform instance
    - Provide basic details for creating the security group
        [![](/learn/assets/wme-setup/wme-setup-in-aws/basic-details-of-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/basic-details-of-sg.png)
    - Create rules for public access by providing your network ip address for ssh
        [![](/learn/assets/wme-setup/wme-setup-in-aws/rules-for-public-access.png)](/learn/assets/wme-setup/wme-setup-in-aws/rules-for-public-access.png)
  - Create a security group for platform instance for access from the external instance
    - Provide basic details for creating the security group and add inbound rules for access from the external instance
        [![](/learn/assets/wme-setup/wme-setup-in-aws/platform-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/platform-sg.png)
  - Create a security group for external instance for access from the platform instance
    - Provide basic details for creating the security group and add inbound rules for access from the platform instance
  	    [![](/learn/assets/wme-setup/wme-setup-in-aws/external-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/external-sg.png)
- CREATE A PLATFORM INSTANCE
  - Select ubuntu server 16.04 with 4vcpu and 16 GiB memory, configure the instance details and add storage 50 GiB for wm-runtime and 150 GiB for wm-data
  	    [![](/learn/assets/wme-setup/wme-setup-in-aws/add-storage.png)](/learn/assets/wme-setup/wme-setup-in-aws/add-storage.png)
  - Configure security groups and create the instance
  	    [![](/learn/assets/wme-setup/wme-setup-in-aws/configure-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/configure-sg.png)
- CREATE EXTERNAL INSTANCE
  - Select ubuntu server 16.04 with 4vcpu and 16 GiB memory, configure the instance details and add storage 150 GiB for data and Configure the security group and create instance
  	    [![](/learn/assets/wme-setup/wme-setup-in-aws/external-instance.png)](/learn/assets/wme-setup/wme-setup-in-aws/external-instance.png)
- MOUNTING STORAGE VOLUMES IN AWS INSTANCES
  - Ssh into the  instance and check the available block devices by command lsblk. create a filesystem for disks for example by using the command mkfs -t ext4 /dev/xvdc and mount the disks for example by using the command mount /dev/xvdb /wm-runtime/.
       [![](/learn/assets/wme-setup/wme-setup-in-aws/mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-aws/mounting-volumes.png)
  - Check the mounted disks and do fstab.in fstab, we can provide information about the mount and automatically mounted files with during boot. take UUID of disks for identification by using the command blkid.entry the  UUID of the disks in fstab
  	   [![](/learn/assets/wme-setup/wme-setup-in-aws/fstab.png )](/learn/assets/wme-setup/wme-setup-in-aws/fstab.png )


## Launch instances in GCP  
- FIREWALL RULES FOR PLATFORM AND EXTERNAL INSTANCE
  - Create firewall rules for public access to the platform instance
    - Provide basic details , target , source details and TCP ports for creating public access firewall rule
  	   [![](/learn/assets/wme-setup/wme-setup-in-gcp/public-access-firewall.png)](/learn/assets/wme-setup/wme-setup-in-gcp/public-access-firewall.png)
  - Create a firewall rule for platform instance for access from the external instance
    - Provide basic details, target, source details and TCP ports for creating a public access firewall rule
  	   [![](/learn/assets/wme-setup/wme-setup-in-gcp/platform-firewall.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-firewall.png)
  - Create firewall rule for external instance for access from the platform instance 
    - Provide basic details, target, source details and TCP ports for creating a public access firewall rule
  	   [![](/learn/assets/wme-setup/wme-setup-in-gcp/external-firewall.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-firewall.png)
- CREATE A PLATFORM INSTANCE
  - Select region , zone , machine configurations select ubuntu 16.04 operating system.
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)
  - provide ssh key details in security for accessing the instance and create disks for wm-data and wm-runtime with 150 and 50 GiB
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/platform-disks.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-disks.png)
  - At network section provide respected network tags of your firewall rules and create instance.
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/platform-network-details.png)](/learn/assets/wme-setup/wme-setup-in-gcp/platform-network-details.png)
- CREATE EXTERNAL INSTANCE
  - Select region, zone, machine configurations select ubuntu 16.04 operating system.
      [![](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)](/learn/assets/wme-setup/wme-setup-in-gcp/instance-os.png)
  - provide ssh key details in security for accessing the instance and create disks for external instance
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/external-disk.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-disk.png)
  - At network section provide respected network tags of your firewall rules and create instance.
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/external-network-details.png)](/learn/assets/wme-setup/wme-setup-in-gcp/external-network-details.png)
- MOUNTING DISKS IN VIRTUAL MACHINES
  - Ssh into the platform virtual machine and check the available block devices by command lsblk. create a filesystem for disks for example by using the command mkfs -t ext4 /dev/sdc and mount the disks for example by using the command mount /dev/sdc /wm-runtime/ .
  	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/mounting-volumes.png)](/learn/assets/wme-setup/wme-setup-in-gcp/mounting-volumes.png)
  - Check the mounted disks and do fstab.in fstab, we can provide information about the mount and automatically mounted files with during boot. take UUID of disks for identification by using the command blkid.entry the  UUID of the disks in fstab
	  [![](/learn/assets/wme-setup/wme-setup-in-gcp/fstab.png)](/learn/assets/wme-setup/wme-setup-in-gcp/fstab.png)



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


## Launch an instances in Azure using VHD 
- prerequisites for this operation
  - Create fixed vhd with ubuntu 16.04 os
  - Install azcopy (for copying the files from local to azure storage account container)
  - Install azcli (for login into the az account)
  - Generate sas in storage account
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/generate-sas.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/generate-sas.png)
  - Copy the vhd file from local to respective storage account container
    - azcopy copy "local\path\filename.vhd" "container url and sas" --blob-type PageBlob
    - example
    - azcopy copy "C:\filename.vhd" "https://account.blob.core.windows.net/mycontainer1?sv=2018-03-28&ss=bjqt&srt=sco&sp=rwddgcup&se=2019-05-01T05:01:17Z&st=2019-04-30T21:01:17Z&spr=https&sig=MGCXiyEzbtttkr3ewJIh2AR8KrghSy1DGM9ovN734bQF4%3D" --blob-type PageBlob
    - Vhd file WME-installer-10.3.1.ee.vhd uploaded to respected storage account container
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vhd-upload.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vhd-upload.png)
- CREATING THE DISK USING THE VHD FILE
  - specifying the project details for disk creation
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-project-details.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-project-details.png)
  - Create a disk by providing basic details and select source type as storage blob and select size of the os disk
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-creation.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/disk-creation.png)
- VM CREATION BY USING THE DISK
  - Provide basic information in the creation process
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-basic.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-basic.png)
  - add storage 50 GiB for wm-runtime and 150 GiB for wm-data and if required add 50 GiB for /usr/local/content
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-disks.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-disks.png)
  - select create VM option at the left top. create VM providing required details disks and networking
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-networking.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-networking.png)
- MOUNTING AZURE DISKS IN VIRTUAL MACHINES
  - Ssh into the platform virtual machine and check the available block devices by command lsblk. create a filesystem for disks for example by using the command mkfs -t ext4 /dev/sdc and mount the disks for example by using the command mount /dev/sdc /wm-runtime/.   
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-mount-volumes.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-mount-volumes.png)
  - Check the mounted disks and do fstab.in fstab, we can provide information about the mount and automatically mounted files during boot. take UUID of disks for identification by using the command blkid.entry the  UUID of the disks in fstab
  	  [![](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-fstab.png)](/learn/assets/wme-setup/wme-setup-in-azure-using-vhd/vm-vhd-fstab.png)



 



