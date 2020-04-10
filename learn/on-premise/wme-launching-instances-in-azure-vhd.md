---
title: "Launch Instances in AzureCloud using VHD"
id: ""
sidebar_label: "Launch Instances in AzureCloud using VHD"
---
---

## Launch an instances in AzureCloud using VHD 
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



 



