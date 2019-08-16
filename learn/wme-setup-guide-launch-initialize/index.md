---
title: "WME Setup Guide – Launching Instances"
id: ""
---

This document talks about launching instances in different virtualization providers. It is recommended that you ensure that you meet the necessary [\-requisites](/learn/installation/wavemaker-enterprise-setup-guide/) before proceeding with the installation. Move to [section](https://www.wavemaker.com/learn/installation/wme-setup-guide-access-setting/) if you are already luanched instances using given [\-requisites](/learn/installation/wavemaker-enterprise-setup-guide/)

##  Instances

You can launch Instances for WaveMaker Enterprise Setup using ESXi, VirtualBox, VMware Workstation Pro or AWS EC2 instance. You need base OVA or AMI as specified in the [\-requisites](/learn/installation/wavemaker-enterprise-setup-guide/)

: You can use the same steps for launching additional instances for User workspace and Deployed Apps using the same approach.

**      Click on the appropriate section to proceed.**Using ESXi

1. **vSphere Client** application and login using ESXi Server/vCenter Server **address** and user credentials.
2. the top left corner of the **vSphere Client** window, click and select **OVF Template** [![](../assets/WME_launch_esxi1.png)](../assets/WME_launch_esxi1.png)
3. the location of the .ova file (for example, WME – x.x.ova) from your local machine and click (Use the external instance image .ova file name if launching additional VM).
4. again on the **OVF Template – OVF Template Details** window. [![](../assets/WME_launch_esxi2.png)](../assets/WME_launch_esxi2.png)
5. the of VM and select the **Location** and click
6. the appropriate from the given list, where the VM Image has to be imported and click
7. an appropriate destination for the virtual machine files and click
8. the appropriate disk option and click
9. the details and click

Using Oracle VirtualBox

1. **VM VirtualBox Manager** Application, on the top left corner of the Oracle VM VirtualBox Manager screen, click and select **Appliance** (or use shortcut **\+ I**) from the dropdown options. [![](../assets/WME_launch_oracle1.png)](../assets/WME_launch_oracle1.png)
2. the location of the .ova file (for example, WME – x.x.ova) from your local machine and click   (Use the external instance image .ova file name if launching additional VM).
3. the Application Settings window, after setting the configuration details, check the box adjacent to **the MAC address of all network cards** and click [![](../assets/WME_launch_oracle2.png)](../assets/WME_launch_oracle2.png)
4. will have to wait for a while, till the import gets completed.
5. and click **\- version x.x** → → Make sure the fields **to** and options are set to **Adapter** and **0**, respectively. [![](../assets/WME_launch_oracle3.png)](../assets/WME_launch_oracle3.png)

Using VMware Workstation Pro

1. **Workstation Pro**, click on **Virtual Machine** and select the WME Platform VM image from your local machine.  (Use the external instance image if launching additional VM). [![](../assets/WME_launch_vmware1.png)](../assets/WME_launch_vmware1.png)
2. on the Import Virtual Machine window.
3. you import the WME VM image, double-click on and on the right side of the **Machine Settings** screen, enter the memory as per the required setup type (8000 MB for Trial; 16000 MB for Production use) [![](../assets/WME_launch_vmware2.png)](../assets/WME_launch_vmware2.png)
4. click on Processors, on the right side, change the **of processors** to **1** and **of cores per processor** to **2** and click [![](../assets/WME_launch_vmware3.png)](../assets/WME_launch_vmware3.png)

Using AWS EC2 Instance To launch an AWS EC2 Instance from the WaveMaker AMI, refer to the [documentation](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html) While launching you need to set the following parameters:

1. for the WME AMI ID under Private Images
2. the Instance Type as m3.2xlarge
3. the Network and Subnet to your own VPC network where you wish to launch the EC2 instance
4. the Network Interfaces section of the EC2 Launch Instance wizard, assign a static Primary IP to the eth0 device or via ENI ( [Network Interface](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)) to eth1.
5. sure you enable Terminal Protection (recommended)
6. your instance with appropriate Name-Value pairs to help you identify the instance in future (recommended)
7. a Security Group Name and configure the Security Group with the following rules:
    - port 22 (SSH) from your network IP range
    - ports 80 (HTTP), 8080 (HTTP) and 443 (HTTPS) from either your network IP range or from ‘Anywhere’ if you wish to allow public access.
8. a new Key Pair before launching the instance and download this key pair to your machine. Without this file, you won’t be able to login to your instance.

After launching the instance, check that the instance is in the ‘Running’ state and that 2/2 status checks have passed as shown in the screenshot below. [![](../assets/WME_launch_aws.png)](../assets/WME_launch_aws.png)

3: Setting up WME

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching Instances](#launch-instances)
    - [Launch using ESXI](#launch-esxi)
    - [Launch using VirtualBox](#launch-vb)
    - [Launch using VMWare](#launch-vmware)
    - [Launch using AWS](#launch-aws)
- [3\. Setting Up WME](/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
