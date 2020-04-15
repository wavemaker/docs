---
title: "WME Launch Instances In AWS EC2"
id: ""
sidebar_label: "Launch Instances in AWS EC2"
---
---
### Launch instances in AWS EC2 
**Prerequisites**
- AWS account with an access for launch instances and for create a security groups
- Reference for creating infrastructure in AWS visit [AWS docmentation for creating EC2 linux instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)

**Steps**

- Creating a Security Group For Platform and External Instance
  - Create a security group for public access to the platform instance
    - Provide basic details for creating the security group
        <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/basic-details-of-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/basic-details-of-sg.png)

    - Create rules for public access by providing your network ip address for ssh
        <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/rules-for-public-access.png)](/learn/assets/wme-setup/wme-setup-in-aws/rules-for-public-access.png)

  - Create a security group for platform instance for access from the external instance
    - Provide basic details for creating the security group and add inbound rules for access from the external instance
        <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/platform-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/platform-sg.png)

  - Create a security group for external instance for access from the platform instance
    - Provide basic details for creating the security group and add inbound rules for access from the platform instance
  	    <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/external-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/external-sg.png)
        <br/><br/>

- Create a Platform Instance
  - Select ubuntu server 16.04 with 4vcpu and 16 GiB memory, configure the instance details and add storage 50 GiB for wm-runtime and 150 GiB for wm-data
  	    <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/add-storage.png)](/learn/assets/wme-setup/wme-setup-in-aws/add-storage.png)

  - Configure security groups and create the instance
  	    <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/configure-sg.png)](/learn/assets/wme-setup/wme-setup-in-aws/configure-sg.png)
        <br/><br/>

- Create a External Instance
  - Select ubuntu server 16.04 with 4vcpu and 16 GiB memory, configure the instance details and add storage 150 GiB for data and Configure the security group and create instance
  	    <br/><br/>
        [![](/learn/assets/wme-setup/wme-setup-in-aws/external-instance.png)](/learn/assets/wme-setup/wme-setup-in-aws/external-instance.png)
        <br/><br/>

- Mounting Storage Volumes in AWS Instances
  - Ssh into the  instance and check the available block devices by command lsblk. create a filesystem for disks for example by using the command mkfs -t ext4 /dev/xvdc and mount the disks for example by using the command mount /dev/xvdb /wm-runtime/.
       <br/><br/>
       [![](/learn/assets/wme-setup/wme-setup-in-aws/mounting-volumes.jpg)](/learn/assets/wme-setup/wme-setup-in-aws/mounting-volumes.jpg)

  - Check the mounted disks and do fstab.in fstab, we can provide information about the mount and automatically mounted files with during boot. take UUID of disks for identification by using the command blkid.entry the  UUID of the disks in fstab
  	   <br/><br/>
       [![](/learn/assets/wme-setup/wme-setup-in-aws/fstab.png )](/learn/assets/wme-setup/wme-setup-in-aws/fstab.png )




 



