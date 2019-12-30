---
title: "WME Setup Guide – Launch & Initialize - old"
id: "wme-setup-guide-launch-initialize-old"
---

This document talks about **Launching and Initializing WME** using the WaveMaker Setup Portal. It is recommended that you ensure that you meet the necessary [pre-requisites](/learn/installation/wavemaker-enterprise-setup-guide/) before proceeding with the installation.

## Launching WME

You can launch WaveMaker Enterprise using ESXi, VirtualBox, VMware Workstation Pro or AWS EC2 instance.

**NOTE**: You can use the same steps for launching additional VM using the WME External Instance Image if needed.

**      Click on the appropriate section to proceed.**Using ESXi

1. Open **VMware vSphere Client** application and login using ESXi Server/vCenter Server **IP address** and user credentials.
2. On the top left corner of the **VMware vSphere Client** window, click **File** and select **Deploy OVF Template**. [![](/learn/assets/WME_launch_esxi1.png)](/learn/assets/WME_launch_esxi1.png)
3. **Browse** the location of the .ova file (for example, WME – x.x.ova) from your local machine and click **Next**. (Use the external instance image .ova file name if launching additional VM).
4. Click **Next** again on the **Deploy OVF Template – OVF Template Details** window. [![](/learn/assets/WME_launch_esxi2.png)](/learn/assets/WME_launch_esxi2.png)
5. Enter the **Name** of VM and select the **Inventory Location** and click **Next**.
6. Select the appropriate **Host** from the given list, where the VM Image has to be imported and click **Next**.
7. Select an appropriate destination **Storage** for the virtual machine files and click **Next**.
8. Select the appropriate disk option and click **Next**.
9. Review the details and click **Finish**.

Using Oracle VirtualBox

1. Open **Oracle VM VirtualBox Manager** Application, on the top left corner of the Oracle VM VirtualBox Manager screen, click **File** and select **Import Appliance** (or use shortcut **Ctrl + I**) from the dropdown options. [![](/learn/assets/WME_launch_oracle1.png)](/learn/assets/WME_launch_oracle1.png)
2. **Browse** the location of the .ova file (for example, WME – x.x.ova) from your local machine and click **Next**.  (Use the external instance image .ova file name if launching additional VM).
3. On the Application Settings window, after setting the configuration details, check the box adjacent to **Reinitialize the MAC address of all network cards** and click **Import**. [![](/learn/assets/WME_launch_oracle2.png)](/learn/assets/WME_launch_oracle2.png)
4. You will have to wait for a while, till the import gets completed.
5. Open **VirtualBox** and click **WME- version x.x** → **Setting** → **Network**. Make sure the fields **Attached to** and **Name** options are set to **Bridged Adapter** and **eth0**, respectively. [![](/learn/assets/WME_launch_oracle3.png)](/learn/assets/WME_launch_oracle3.png)

Using VMware Workstation Pro

1. Open **VMware Workstation Pro**, click on **Open Virtual Machine** and select the WME Platform VM image from your local machine.  (Use the external instance image if launching additional VM). [![](/learn/assets/WME_launch_vmware1.png)](/learn/assets/WME_launch_vmware1.png)
2. Click **Import** on the Import Virtual Machine window.
3. After you import the WME VM image, double-click on **Memory** and on the right side of the **Virtual Machine Settings** screen, enter the memory as per the required setup type (8000 MB for Trial; 16000 MB for Production use) [![](/learn/assets/WME_launch_vmware2.png)](/learn/assets/WME_launch_vmware2.png)
4. Double click on Processors, on the right side, change the **Number of processors** to **1** and **Number of cores per processor** to **2** and click **OK**. [![](/learn/assets/WME_launch_vmware3.png)](/learn/assets/WME_launch_vmware3.png)

Using AWS EC2 Instance To launch an AWS EC2 Instance from the WaveMaker AMI, refer to the [AWS documentation](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html) While launching you need to set the following parameters:

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

## Initializing WME

You need to initialize WME after launching it.

**      Click on the appropriate section to proceed.**

WME on a VM

After importing the VM image through vSphere Client (ESXi) or Oracle VirtualBox or VMware Workstation Pro successfully, you need to launch WaveMaker.

To launch WaveMaker, you need to follow the below steps:

1. Open the console: From vSphere Client (ESXi)
    
    - Open vSphere VM Client, left-click on the image in the left panel, below the **IP address**.
    - Select **Open Console** from the pop-up dialog.
    - Click on **Power On** (green play icon) on the top menu to start the pre-configuration setup.
    
    From Oracle VirtualBox
    
    - After importing the image successfully, to open the console, click **Start** on the top menu bar.
    
    From VMware Workstation Pro
    - Click **Power on the Virtual Machine** link, as shown in the screenshot below. [![](/learn/assets/WME_init1.png)](/learn/assets/WME_init1.png)
2. After you open the console, you are prompted with WME pre-setup configuration process. Click **Y** (which means “yes”) to continue with the VM Network configuration.
3. Enter the IP range in CIDR notation for internal use by the WME. This should not conflict with the local LAN IP range. Refer the [Prerequisites](/learn/installation/wavemaker-enterprise-setup-guide/#ip-addressing) for details. **CIDR**: IP address representation and its associated routing prefix
4. Enter the ethernet interface name in the VM as **eth0** or **eth1** (typically eth0 for VMware or Virtual Box based VMs)
5. Enter **Y** to configure static IP settings or **N** if you wish to proceed with DHCP configuration. **DHCP**: A network protocol that enables a server to automatically assign an IP address to a device for any given network. **Note**: DHCP configuration is not recommended. This option is suggested only for temporary evaluation setups. With DHCP configuration, any change in the network or a restart of the VM or host might change the VM IP and affect the operation of the WaveMaker VM.
6. Enter the static **IP address**, **subnet mask** and **gateway IP** for the WME VM (eth0).
7. Enter your network’s **DNS nameserver**(s). **Note**: If there are more than one DNS servers, separate it by a **space**
8. Enter your network **DNS search** name (if you do not have any, just leave it blank and press **Enter**) For example, refer to the screenshot below with sample entries for Steps 1 to 7 [![](/learn/assets/WME_init2.png)](/learn/assets/WME_init2.png) **Note**: The IPs shown in the screenshots below are sample IPs for illustration purposes only and not the appropriate IPs for your setup. Refer to your IT team to obtain the correct settings for your VM.

Once the WME pre-setup configuration is successfully completed, you will see a success message. You need to access the auto populated URL (http:<IP-of-WME-VM>:<port-number>) which needs to be opened in a browser. WME on an AWS EC2 Instance After launching the EC2 instance successfully, you need to login to the instance using the keypair you downloaded.

1. You can login to the EC2 Instance using the following command: ssh –i <KEYPAIR\_FILE\_LOCATION> –p <SSH\_PORT> ubuntu@<WM\_EC2\_IP> WM\_EC2\_IP should be the static IP that you assigned to the instance.
2. Switch to the root user using: `ubuntu/wavemaker:-$ sudo su –`
3. To start the WaveMaker Enterprise pre-setup configuration, enter the command: `# wavemaker-initialize`
4. This will begin [pre-warming your EBS volume](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-initialize.html) and the process may take about 30 minutes.
5. Once the EBS volumes are initialized (pre-warmed), you are prompted with WME pre-setup configuration process. Click Y (which means “yes”) to continue with the Network configuration.
6. Enter an IP range in CIDR notation. This IP range should not be in use anywhere on your VPC network and should not conflict with your LAN IP range. If you are unsure of the range to use, check with IT before accepting defaults. **CIDR**: IP address representation and its associated routing prefix
7. Enter the network interface device name to configure (eth0/eth1). This should be the device to which a static IP was assigned during instance launch.
8. **IMPORTANT**: Ensure to select **DHCP** configuration by entering **N**. Your instance will automatically acquire the private static IP that was assigned during the Instance Launch phase. **DHCP**: A network protocol that enables a server to automatically assign an IP address to a device for any given network.

Once the WME pre-setup configuration is successfully completed, you will see a success message. You need to access the auto populated URL (http:<IP-of-WME-VM>:<port-number>) which needs to be opened in a browser. If the private IP of the instance is not accessible from your browser, you may need to use the public/elastic IP or DNS mapped name instead.

Step 3: Setting up WME

Contents

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching & Initializing WME](#)
    - [i. Launch using ESXI](#launch-esxi)
    - [ii. Launch using VirtualBox](#launch-vb)
    - [iii. Launch using VMWare](#launch-vmware)
    - [iv. Launch using AWS](#launch-aws)
    - [v. Initializing WME](#initialize-wme)
    - [v. Initializing WME on AWS](#initialize-wme-aws)
- [3\. Setting Up WME](/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
