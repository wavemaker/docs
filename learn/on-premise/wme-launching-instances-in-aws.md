---
title: "WME Launch Instances In AWS EC2"
id: ""
sidebar_label: "Launch Instances in AWS EC2"
---
---

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




 



