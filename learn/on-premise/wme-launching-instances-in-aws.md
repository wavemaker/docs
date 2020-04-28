---
title: "WME Launch Instances In AWS EC2"
id: ""
sidebar_label: "Launch Instances in AWS EC2"
---
---
### Launch instances in AWS EC2 
**Prerequisites**
- AWS account with an access for launch instances and for create a security groups
- Reference for creating infrastructure in AWS visit [AWS documentation for creating EC2 linux instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)
- Users need IAM policies and user permissions to view and work with create and manage EC2 instances and security groups in a specified VPC resource in the Amazon EC2 console.
- For IAM permissions and details visit [AWS IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html)

**Steps**

- **Creating Security Groups for WME Setup**
  - Creating security group user need vpc ,if don't have a vpc ,for creating vpc refer [AWS documentation for creating vpc](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html)
  - Creating the security groups refer [AWS documentation for creating security groups](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html)
  - For WME setup require 3 security groups in AWS,are
    - WME-SG-Platform-Public 
    - WME-SG-Platform-Internal
    - WME-SG-Workspace-Internal
  - Open the Amazon VPC console [vpc console amazon](https://console.aws.amazon.com/vpc/.) (or) under Networking & Content Delivery select Networking & Content Delivery select VPC
  - In the navigation pane, choose Security Groups,Choose Create Security Group.
  - **Creation of WME-SG-platform-public security group**
    - Provide basic details for creating the security group and select your Desired VPC
     <br/><br/>
     [![](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-public-basic.png)](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-public-basic.png)
    
    - Select inbound rules and Edit rules for public access
     <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-public.png)](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-public.png)
    
  - **Creating WME-SG-Platform-Internal security group**
    - Provide basic details for creating the security group and select VPC previously selected
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-internal-basic.png)](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-internal-basic.png) 
    
    - Select inbound rules and Edit rules for access from the external instance,at source field provide WME-SG-Workspace-Internal security group ID
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-internal.png)](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-internal.png) 
  
  - **Creating WME-SG-workspace-Internal security group**
    -  Provide basic details for creating the security group and select VPC previously selected
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/wm-sg-workspace-internal-basic.png)](/learn/assets/wme-setup/wme-setup-in-aws/wm-sg-workspace-internal-basic.png)  
    
    -  Select inbound rules and Edit rules for access  from the platform instance,at source field provide WME-SG-Platform-Internal security group ID
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-workspace-internal.png)](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-workspace-internal.png)  

-  **Creation of Platform Instance**
   -  Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.
   -  Choose Launch Instance,Choose an ubuntu 16.04 Amazon Machine Image (AMI) or you have any ubuntu 16.04 AMI select it
   <br/><br/>
   [![](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png) 

   -  Choose 16 GiB memory instance type from desired family and type
  <br/><br/>
  [![](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)  

   -  Choose Next: Configure Instance Details,For Network, choose the same VPC that you created security groups,For Subnet, choose a desired subnet in any Availability Zone.
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/configuration-of-instance.jpg)](/learn/assets/wme-setup/configuration-of-instance.jpg)  

   -  Add storage 50 GiB for root volume, 50 GiB for wm-runtime and 150 GiB for wm-data
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/platform-instance-storage.png)](/learn/assets/wme-setup/platform-instance-storage.png)  

   -  If you want to add any tags add tags to instance
    <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/addig-tags.png)](/learn/assets/wme-setup/addig-tags.png)  

   -  Configure Security Group select existing security group and select WME-SG-Platform-Internal and after creation of instance select instance and at actions open networking section choose change security groups add security group WME-SG-Platform-Public
   <br/><br/>
   [![](/learn/assets/wme-setup/wme-setup-in-aws/security-group-configurations.png)](/learn/assets/wme-setup/security-group-configurations.png)  

   -  Next review your instance details and launch the instance
  
-  **Creation of external instance**
   -  Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.
   -  Choose Launch Instance,Choose an ubuntu 16.04 Amazon Machine Image (AMI) or you have any ubuntu 16.04 AMI select it.
    <br/><br/>
   [![](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)   

   -  Choose 16 GiB memory instance type from desired family and type
     <br/><br/>
  [![](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png) 

   -  Choose Next: Configure Instance Details,For Network, choose the same VPC that you created security groups,For Subnet, choose a desired subnet in any Availability Zone.
     <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/configuration-of-instance.jpg)](/learn/assets/wme-setup/configuration-of-instance.jpg) 

   -  Add storage 150 GiB for data
   [![](/learn/assets/wme-setup/wme-setup-in-aws/external-instance-storage.png)](/learn/assets/wme-setup/external-instance-storage.png)  

   -  Next if you want to add any tags add tags to instance
     <br/><br/>
    [![](/learn/assets/wme-setup/wme-setup-in-aws/addig-tags.png)](/learn/assets/wme-setup/addig-tags.png)  
   -  Next Configure Security Group select existing security group and select WME-SG-Workspace-Internal security group
     <br/><br/>
   [![](/learn/assets/wme-setup/wme-setup-in-aws/security-group-configurations.png)](/learn/assets/wme-setup/security-group-configurations.png) 

   -  Next review your instance details and launch the instance 
- **Mounting storage volumes in aws instances**
  - **Mounting storage in platform instance**
      - Login into ec2 instance.for logging into ec2 instance open terminal use the below example command
         ```
          ssh -i path/to/accesskey.pem ubuntu@ipaddress
          ```
         -  Note: accesskey will generate during creation of instance ,at that time you have to select existing pem file or you can create new pem file for accessing the ec2 instance
      -  For mounting the storage refer [mounting storage volumes in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)
      -  Check your list of block devices available by using the following command
         ```
           lsblk
           ```
      -  New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command
         -  mkfs -t ext4 /dev/< block-device-name >
          ```
           Example: mkfs -t ext4 /dev/xvdb
           ```
      -  Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume.for wme-setup create two directories.create directories using the following commands
          ```
           mkdir /wm-data /wm-runtime
          ```
      -  Use the following command to mount the volume at the directory
          ```
           mount /dev/block-device-name    /directory  
          ```
          <br/><br/>
          [![](/learn/assets/wme-setup/wme-setup-in-aws/mounting-platform-instance-volumes.jpg)](/learn/assets/wme-setup/mounting-platform-instance-volumes.jpg)

      - To mount an attached EBS volume on every system reboot, add an entry for the device to the /etc/fstab file.
      - Take UUID of disks for identification by using the command
        ```
          blkid
        ```
      - Entry the UUID of the disks in fstab.use the following format
      ``` 
      UUID=your-block-device-UUID    /mount-directory     filesystem   defaults ,nofail  0  2
      ```
      [![](/learn/assets/wme-setup/wme-setup-in-aws/fstab-platform.png)](/learn/assets/wme-setup/fstab-platform.png)
  - **Mounting storage External instance**
    -  Login into ec2 instance.for logging into ec2 instance open terminal use the below example command
         ```
          ssh -i path/to/accesskey.pem ubuntu@ipaddress
          ```
         -  Note: accesskey will generate during creation of instance ,at that time you have to select existing pem file or you can create new pem file for accessing the ec2 instance
      -  For mounting the storage refer [mounting storage volumes in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)
      -  Check your list of block devices available by using the following command
          ```
           lsblk
          ```
      -  New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems use following command
         
          - mkfs -t ext4 /dev/< block-device-name >
           ```
           Example: mkfs -t ext4 /dev/xvdb
           ```
      -  Use the mkdir command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files to after you mount the volume.for wme-setup create two directories.create directories using the following commands
          ```
          mkdir /data
          ```
      -  Use the following command to mount the volume at the directory
           ```
           mount /dev/block-device-name   /directory  
           ```
           <br/><br/>
           [![](/learn/assets/wme-setup/wme-setup-in-aws/mounting-external-instance-storage.jpg)](/learn/assets/wme-setup/mounting-external-instance-storage.jpg)
      - To mount an attached EBS volume on every system reboot, add an entry for the device to the /etc/fstab file.
      - Take UUID of disks for identification by using the command
          ```
          blkid
          ```
      - Entry the UUID of the disks in fstab.use the following format
     ```
    UUID=your-block-device-UUID      mount-directory     filesystem     defaults ,nofail  0  2
     ```
     <br/><br/>
     [![](/learn/assets/wme-setup/wme-setup-in-aws/fstab-external.png)](/learn/assets/wme-setup/fstab-external.png)
      




 



