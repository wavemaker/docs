---
title: "Launch Instances in Esxi using ISO"
id: ""
sidebar_label: "Launch Instances in Esxi using ISO"
---
---

### Launch instances in Esxi using ISO 
 **Prerequisite**
 - Ubuntu ISO file downloaded (Ex: link for download the Ubuntu 16.04.6 ISO image
  [ubuntu 16.04.6 iso image](http://releases.ubuntu.com/16.04/ubuntu-16.04.6-server-amd64.iso)
  )
 - VMware ESXi version 6.5 or higher
 - Permision for launching OVA.
 This guide has written based on Exsi version 6.5.
 
 **Steps**

- Upload ubuntu server iso image to the database store
- Select Create / Register VM 
- Select creation type as a new virtual machine
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-vm-creation-type.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-vm-creation-type.png)

- Select name and guest os, select os family as Linux and guest os version as ubuntu Linux 64bit
	<br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-name-and-guest-os.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-name-and-guest-os.png)

- Select a database in which to store configuration and data store
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-database.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-database.png)

- Customize virtual machine hardware, additional options and upload file from datastore.after creating the VM poweron the VM and proceed to next operation
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/customize-settings.png)](/learn/assets/wme-setup/vm-creation-by-using-iso-image/customize-settings.png)

- Select the language to perform the further operation
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-language-for-process.png)](/learn/assets/wme-setup/selecting-language-for-process.png)

- Select install ubuntu server to start installation process
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/ubuntu-server-installation.png)](/learn/assets/wme-setup/ubuntu-server-installation.png)

- Select the language for system
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-language-for-system.png)](/learn/assets/wme-setup/selecting-the-language-for-system.png)

- Select your location
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-location.png)](/learn/assets/wme-setup/selecting-location.png)

- Configure the keyboard by selecting a language
- Provide hostname for the system to configure the system
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-the-host-name.png)](/learn/assets/wme-setup/selecting-the-host-name.png)

- Setup users and password details for server, provide the username as ubuntu
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/username-and-password-setup.jpg)](/learn/assets/wme-setup/username-and-password-setup.jpg)

- Configure the clock
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/configuring-the-clock.png)](/learn/assets/wme-setup/configuring-the-clock.png)

- Select the disk partition method
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/disk-partition-method.png)](/learn/assets/wme-setup/disk-partition-method.png)

- Select the disk to partition
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-disk-to-partition.png)](/learn/assets/wme-setup/selecting-disk-to-partition.png)

- Choose the option to write changes to disk and configure
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-option-for-writting-changes-to-disk.png)](/learn/assets/wme-setup/selecting-option-for-writting-changes-to-disk.png)

- Select amount of volume to do the partition
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/selecting-volume-size-for-partition.png)](/learn/assets/wme-setup/selecting-volume-size-for-partition.png)

- If you have any proxy provide proxy details
	<br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/proxy-information.png)](/learn/assets/wme-setup/proxy-information.png)

- Select option to manage upgrades on your system
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/managing-upgrades.png)](/learn/assets/wme-setup/managing-upgrades.png)

- Choose option to install or not grub boot loader to the master boot record
    <br/><br/>
    [![](/learn/assets/wme-setup/vm-creation-by-using-iso-image/installing-grub-loader.png)](/learn/assets/wme-setup/installing-grub-loader.png)
    
- Wait for few moments to complete the installation process, then login into system by providing username and password
- For connecting from terminals please install openssh-server
  - sudo apt-get install openssh-server -y
  - sudo systemctl start ssh
- For checking the status of ssh 
  - sudo systemctl status ssh


