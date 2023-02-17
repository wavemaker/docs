---
title: "Preparing Infrastructure on AWS"
id: "launching-instances-in-aws"
sidebar_label: "Prepare Infrastructure"
---
---

## Prerequisites

- AWS (Amazon Web Service) account with access to launch instances and to create security groups.
- For information on creating infrastructure in AWS, see [AWS documentation for creating EC2 Linux instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html).
- Users need IAM (Identity and Access Management) policies and user permissions to view and work to create and manage Amazon EC2 (Amazon Elastic Compute Cloud) instances and security groups in a specified VPC (Virtual Private Cloud) resource in the Amazon EC2 console.
- For IAM permissions and details, see [AWS IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html).

## Creating Security Groups

- For creating security group, you need VPC. If you don't have a VPC and want to create one, to learn more about it, see [AWS documentation for creating VPC](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html).
- For creating security groups, see [AWS documentation for creating security groups](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/gsg_create_vpc.html).
- For WME setup, it requires you to have three security groups in AWS EC2. Those are,
  - [WME-SG-Platform-Public](#creation-of-wme-sg-platform-public-security-group)  
  - [WME-SG-Platform-Internal](#creating-wme-sg-platform-internal-security-group)
  - [WME-SG-Workspace-Internal](#creating-wme-sg-workspace-internal-security-group)
- Open the Amazon VPC console [VPC console amazon](https://console.aws.amazon.com/vpc/.). Or, under Networking & Content Delivery, select Networking & Content Delivery, and choose VPC.
- In the navigation pane, choose **Security Groups**, and then select **Create Security Group**.

### Creation of WME-SG-Platform-Public Security Group

- Provide necessary details for creating the security group and select your desired VPC.

[![basic](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-public-basic.png)](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-public-basic.png)

- Select inbound rules and edit rules for developer network access. You can specify your developer network range in the source.

[![ports public access](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-public.png)](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-public.png)

### Creating WME-SG-Platform-Internal Security Group

- Provide essential details for creating the security group and select the previously selected VPC.

[![basic](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-internal-basic.png)](/learn/assets/wme-setup/wme-setup-in-aws/wme-sg-platform-internal-basic.png)

- Select inbound rules and edit rules to access from the StudioWorkspace Instance / AppDeployment Instance. At the source field, provide WME-SG-Workspace-Internal security group ID.

[![ports internal](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-internal.png)](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-platform-internal.png)
  
### Creating WME-SG-Workspace-Internal Security Group

- Provide essential details for creating the security group and select the previously selected VPC.

[![basic](/learn/assets/wme-setup/wme-setup-in-aws/wm-sg-workspace-internal-basic.png)](/learn/assets/wme-setup/wme-setup-in-aws/wm-sg-workspace-internal-basic.png)  

- Select inbound rules and edit rules to access from the Platform Instance. At the source field, provide WME-SG-Platform-Internal security group ID.

[![ports internal](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-workspace-internal.png)](/learn/assets/wme-setup/wme-setup-in-aws/inbound-rules-of-wme-workspace-internal.png)  

## Launch Platform Instance

- Open the Amazon EC2 console at <https://console.aws.amazon.com/ec2/.>
- Choose Launch Instance, choose an ubuntu 20.04 Amazon Machine Image (AMI), or if you have any ubuntu 20.04 AMI, select it.

[![ami](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)

- Choose 32 GiB memory instance types from desired family and type.

[![instance type](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)

- Choose Next:
    1. Configure Instance Details.
    2. For Network, choose the same VPC that you created for security groups.
    3. For Subnet, select the desired Subnet in any Availability Zone.

[![instance configurations](/learn/assets/wme-setup/wme-setup-in-aws/configuration-of-instance.jpg)](/learn/assets/wme-setup/wme-setup-in-aws/configuration-of-instance.jpg)

- Add storage 100 GiB for the root volume.
- 100 GiB for wm-runtime
- 150 GiB for wm-data.

[![storage](/learn/assets/wme-setup/wme-setup-in-aws/platform-instance-storage.png)](/learn/assets/wme-setup/wme-setup-in-aws/platform-instance-storage.png)  

- If you want to add any tags, add tags to the instance.

[![tags](/learn/assets/wme-setup/wme-setup-in-aws/addig-tags.png)](/learn/assets/wme-setup/wme-setup-in-aws/addig-tags.png)  

- To Configure Security Group:
    - Select an existing security group.
    - Select WME-SG-Platform-Internal.
    - After creating the instance, select instance.
    - At actions, the open networking section.
    - Choose change security groups.
    - Add security group WME-SG-Platform-Public.

[![security group](/learn/assets/wme-setup/wme-setup-in-aws/security-group-configurations.png)](/learn/assets/wme-setup/wme-setup-in-aws/security-group-configurations.png)

- Next, review your instance details and launch the instance.

## Launch Studio Workspace Instance / AppDeployment Instance

- Open the Amazon EC2 console at <https://console.aws.amazon.com/ec2/.>
- Choose Launch Instance, choose an ubuntu 16.04 Amazon Machine Image (AMI), or if you have any ubuntu 20.04 AMI, select it.

[![ami](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-ami.png)

- Choose 16 GiB memory instance types from desired family and type.

[![instance type](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)](/learn/assets/wme-setup/wme-setup-in-aws/selecting-instance-type.png)

- Choose Next:
    1. Configure Instance Details.
    2. For Network, choose the same VPC that you created for security groups.
    3. For Subnet, select the desired Subnet in any Availability Zone.

[![instance configuration](/learn/assets/wme-setup/wme-setup-in-aws/configuration-of-instance.jpg)](/learn/assets/wme-setup/wme-setup-in-aws/configuration-of-instance.jpg)

- Add storage 150 GiB for data.

[![storage](/learn/assets/wme-setup/wme-setup-in-aws/external-instance-storage.png)](/learn/assets/wme-setup/wme-setup-in-aws/external-instance-storage.png)  

- Next, if you want to add any tags, add tags to the instance.

[![tags](/learn/assets/wme-setup/wme-setup-in-aws/addig-tags.png)](/learn/assets/wme-setup/wme-setup-in-aws/addig-tags.png)  

- Next, Configure the Security Group. Select the existing security group, and select the WME-SG-Workspace-Internal security group.

[![security groups](/learn/assets/wme-setup/wme-setup-in-aws/security-group-configurations.png)](/learn/assets/wme-setup/wme-setup-in-aws/security-group-configurations.png)

- Next, review your instance details and launch the instance.

## Mounting storage volumes in EC2 Instances

### Mounting storage in Platform Instance

- Login into the EC2 instance. For logging into the EC2 instance, open the terminal, use the below example command.

```bash
ssh -i path/to/accesskey.pem ubuntu@ipaddress
```

:::note
Accesskey will generate during the creation of the instance. You have to select an existing .pem file or create a new .pem file for accessing the EC2 instance.
:::

- For mounting the storage, refer [mounting storage volumes in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html).

- Check your list of block devices available by using the following command.

```bash
lsblk
```

- New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems, use the following command.

```bash
Command : mkfs -t ext4 /dev/<block-device-name_1>
          mkfs -t ext4 /dev/<block-device-name_2>
Example :
          mkfs -t ext4 /dev/xvdb
          mkfs -t ext4 /dev/xvdc
```

- Use the `mkdir` command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files after you mount the volume. For WME-Setup, create two directories using the following commands.

```bash
mkdir /wm-data /wm-runtime
```

- Use the following command to mount the volume at the directory.

```bash
Command :  
          mount /dev/<block-device-name_1>    /wm-data
          mount /dev/<block-device-name_2>    /wm-runtime  
Example :
          mount /dev/xvdc    /wm-data
          mount /dev/xvdb    /wm-runtime  
```

[![mounting volumes](/learn/assets/wme-setup/wme-setup-in-aws/mounting-platform-instance-volumes.jpg)](/learn/assets/wme-setup/wme-setup-in-aws/mounting-platform-instance-volumes.jpg)

- To mount an attached EBS (Elastic Block Store) volume on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the following command.

```bash
blkid
```

- To entry the UUID of the disks in .fstab, use the following format.

``` bash
UUID=<block-device_1-UUID>    /wm-data     ext4   defaults ,nofail  0  2
UUID=<block-device_2-UUID>    /wm-runtime  ext4   defaults ,nofail  0  2
```

[![fstab](/learn/assets/wme-setup/wme-setup-in-aws/fstab-platform.png)](/learn/assets/wme-setup/wme-setup-in-aws/fstab-platform.png)

### Mounting storage StudioWorkspace Instance / AppDeployment Instance

:::note
Applies for StudioWorkspace Instance/AppDeployment Instance
:::

- Login into EC2 instance. For logging into EC2 instance, open the terminal, use the below example command.

```bash
ssh -i path/to/accesskey.pem ubuntu@ipaddress
```

:::note
Accesskey will generate during the creation of the instance. You have to select an existing pem file or create a new pem file for accessing the ec2 instance.
:::

- For mounting the storage, refer [mounting storage volumes in AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html).

- Check your list of block devices available by using the following command.

```bash
lsblk
```

- New volumes are raw block devices, and you must create a file system on them before you can mount and use them. For creating file systems, use following command.

```bash
Command : mkfs -t ext4 /dev/<block-device-name>
Example : mkfs -t ext4 /dev/xvdb
```

- Use the `mkdir` command to create a mount point directory for the volume. The mount point is where the volume is located in the file system tree and where you read and write files after you mount the volume. For WME-Setup, create two directories using the following commands.

```bash
mkdir /data
```

- Use the following command to mount the volume at the directory.

```bash
Command : mount /dev/<block-device-name>   /data
Example : mount /dev/xvdb   /data  
```

[![mounting volumes](/learn/assets/wme-setup/wme-setup-in-aws/mounting-external-instance-storage.jpg)](/learn/assets/wme-setup/wme-setup-in-aws/mounting-external-instance-storage.jpg)

- To mount an attached EBS volume on every system reboot, add an entry for the device to the /etc/fstab file.
- Take UUID of disks for identification by using the following command.

```bash
blkid
```

- To enter the UUID of the disks in .fstab, use the following format.

```bash
UUID=<your-block-device-UUID>    /data     ext4     defaults ,nofail  0  2
```

[![fstab](/learn/assets/wme-setup/wme-setup-in-aws/fstab-external.png)](/learn/assets/wme-setup/wme-setup-in-aws/fstab-external.png)

## What's next

- Install [prerequisites softwares](/learn/on-premise/aws/install-prerequisites) based on OS.
- Start WME Installation process.
