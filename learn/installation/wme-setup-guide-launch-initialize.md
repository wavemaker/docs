---
title: "WME Setup Guide – Launching Instances"
id: ""
sidebar_label: "Launching Instances"
---
---

This document talks about launching instances in different virtualization providers. It is recommended that you ensure that you meet the necessary [pre-requisites](/learn/installation/wavemaker-enterprise-setup-guide/) before proceeding with the installation. Move to [next section](/learn/installation/wme-setup-guide-access-setting/) if you are already luanched instances using given [pre-requisites](/learn/installation/wavemaker-enterprise-setup-guide/).

## Launching Instances

You can launch Instances for WaveMaker Enterprise Setup using ESXi, VirtualBox, VMware Workstation Pro or AWS EC2 instance. You need base OVA or AMI as specified in the [pre-requisites](/learn/installation/wavemaker-enterprise-setup-guide/).

::: note
You can use the same steps for launching additional instances for User workspace and Deployed Apps using the same approach.
:::

**Click on the appropriate section to proceed.** Using ESXi

1. Open **VMware vSphere Client** application and login using ESXi Server/vCenter Server **IP address** and user credentials.
2. On the top left corner of the **VMware vSphere Client** window, click **File** and select **Deploy OVF Template**. [![](/learn/assets/WME_launch_esxi1.png)](/learn/assets/WME_launch_esxi1.png)
3. **Browse** the location of the .ova file (for example, WME – x.x.ova) from your local machine and click **Next**. (Use the external instance image .ova file name if launching additional VM).
4. Click **Next** again on the **Deploy OVF Template – OVF Template Details** window. [![](/learn/assets/WME_launch_esxi2.png)](/learn/assets/WME_launch_esxi2.png)
5. Enter the **Name** of VM and select the **Inventory Location** and click **Next**.
6. Select the appropriate **Host** from the given list, where the VM Image has to be imported and click **Next**.
7. Select an appropriate destination **Storage** for the virtual machine files and click **Next**.
8. Select the appropriate disk option and click **Next**.
9. Review the details and click **Finish**.

Using Oracle VirtualBox

1. Open **Oracle VM VirtualBox Manager** Application, on the top left corner of the Oracle VM VirtualBox Manager screen, click **File** and select **Import Appliance** (or use shortcut **Ctrl + I**) from the dropdown options. [![](/learn/assets/WME_launch_oracle1.png)](/learn/assets/WME_launch_oracle1.png)
2. **Browse** the location of the .ova file (for example, WME – x.x.ova) from your local machine and click **Next**.  (Use the external instance image .ova file name if launching additional VM).
3. On the Application Settings window, after setting the configuration details, check the box adjacent to **Reinitialize the MAC address of all network cards** and click **Import**. [![](/learn/assets/WME_launch_oracle2.png)](/learn/assets/WME_launch_oracle2.png)
4. You will have to wait for a while, till the import gets completed.
5. Open **VirtualBox** and click **WME- version x.x** → **Setting** → **Network**. Make sure the fields **Attached to** and **Name** options are set to **Bridged Adapter** and **eth0**, respectively. [![](/learn/assets/WME_launch_oracle3.png)](/learn/assets/WME_launch_oracle3.png)

Using VMware Workstation Pro

1. Open **VMware Workstation Pro**, click on **Open Virtual Machine** and select the WME Platform VM image from your local machine.  (Use the external instance image if launching additional VM). [![](/learn/assets/WME_launch_vmware1.png)](/learn/assets/WME_launch_vmware1.png)
2. Click **Import** on the Import Virtual Machine window.
3. After you import the WME VM image, double-click on **Memory** and on the right side of the **Virtual Machine Settings** screen, enter the memory as per the required setup type (8000 MB for Trial; 16000 MB for Production use) [![](/learn/assets/WME_launch_vmware2.png)](/learn/assets/WME_launch_vmware2.png)
4. Double click on Processors, on the right side, change the **Number of processors** to **1** and **Number of cores per processor** to **2** and click **OK**. [![](/learn/assets/WME_launch_vmware3.png)](/learn/assets/WME_launch_vmware3.png)

Using AWS EC2 Instance To launch an AWS EC2 Instance from the WaveMaker AMI, refer to the [AWS documentation](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html) While launching you need to set the following parameters:

1. Search for the WME AMI ID under Private Images
2. Select the Instance Type as m3.2xlarge
3. Change the Network and Subnet to your own VPC network where you wish to launch the EC2 instance
4. In the Network Interfaces section of the EC2 Launch Instance wizard, assign a static Primary IP to the eth0 device or via ENI ([Elastic Network Interface](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)) to eth1.
5. Make sure you enable Terminal Protection (recommended)
6. Tag your instance with appropriate Name-Value pairs to help you identify the instance in future (recommended)
7. Add a Security Group Name and configure the Security Group with the following rules:
    - Allow port 22 (SSH) from your network IP range
    - Allow ports 80 (HTTP), 8080 (HTTP) and 443 (HTTPS) from either your network IP range or from ‘Anywhere’ if you wish to allow public access.
8. Create a new Key Pair before launching the instance and download this key pair to your machine. Without this file, you won’t be able to login to your instance.

After launching the instance, check that the instance is in the ‘Running’ state and that 2/2 status checks have passed as shown in the screenshot below. [![](/learn/assets/WME_launch_aws.png)](/learn/assets/WME_launch_aws.png)
