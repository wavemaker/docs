---
title: "WaveMaker Enterprise Setup Guide"
id: ""
---

you will find instructions to setup WaveMaker Enterprise (WME) using the WME Installer and WME Setup Portal. This section talks about the pre-requisites, requirements and verification needed before proceeding with the WME Setup.

## \- an Overview

Before proceeding with the set up, let us take a look at what constitutes WaveMaker Enterprise (WME). WME platform is made up of the following three components:

1. Studio - a modern RAD platform for collaborative development of multi-device apps,
2. Cloud - a container based platform for app deployments within a private cloud, and
3. \- WaveMaker's administrative console where you can configure users, additional Studio/Cloud instances for scaling, configure external VCS, etc. Launchpad is automatically installed when you setup WaveMaker Enterprise .

WME utilizes Docker containers to segregate and isolate the platform components and the developer workspace as depicted below: [![](../assets/vm_arch.png)](../assets/vm_arch.png)

1. **Containers:** consisting of multiple internal services needed to run the WME platform like Studio, Cloud, VCS etc.. Each of these services runs in a separate Docker Container. Services talk to each other via REST service. Platform Containers make calls to the Docker Engine for operations like starting a new user container, stopping / starting a container etc..
2. **Containers**: Each user gets a container for developing apps. Containers are used to isolate each user’s workspace from other users.
3. ** Containers**: Each WaveMaker app that is deployed into the internal WaveMaker Cloud is allocated a separate container. Thus the deployed apps are also isolated from each other.

## to Setup WME

can setup WaveMaker Enterprise on any machine.

document uses words like , to refer a machine.

machine can be hosted on any cloud provider(like AWS EC2, GCP, Azure .etc) or enterprise cloud or baremetal. All machine allocated to WME  platform should not have any other running process.

following are prerequisites to setup WaveMaker Enterprise. The below-mentioned system requirements allow for limited app developments and deployments. You can increase this capacity by adding Developer Workspace and App Deployment instances thus scaling your WME.

###  Setup System Requirements

WaveMaker Enterprise can be installed on any machine with Operating system Ubuntu 16.04.6 LTS.  Before you start setting up the WaveMaker Enterpris, here is a list of a minimum and recommended System Requirements for the WME Platform Instance:

- 16GB

- 4-cores, single CPU system
- Virtualization Technology (VT-x) enabled
- (HT) disabled

**Disk**

-  250 GB to be allocated to Platform machine
- case of Cloud setups we recommend 3 disks
    - /                      50 GB
    - /wm-data        150 GB
    - /wm-runtime   50 GB
- 100 GB to be allocated for additional machines(Developer workspace/Deployed Apps)

- IP with valid DNS
- 80, 443, 8080
- to be opened on added instance for access from platform instance:
    - : 22 80 2375 2200-2299 8000-8099 9400-9499 9500-9599 9100-9199
    - : Enable CMP -IPv4
- ports to be opened on platform instance for access from added instances:
    - : 3000, 3030, 8000-8008, 8081, 8500, 5000, 5555, 5601, 9200, 9100, 9101, 9090, 9093, 9400-9499

**OS**

- 16.04.6 LTS
- 4.4 or 4.15
- 3.5 or higher

#### Requirements for Additional Instances

an instance to either User workspace or Deployed Apps aids in the scalability of the WME setup in terms of application development and deployment, respectively. Each addedUser workspace or Deployed Apps instances would allow for a specific number of app developments and app deployments. These numbers will vary based on the WME version, refer to the table below for the exact numbers.

Version

logins per 16GB WaveMaker Studio Instance

Deployments per 16GB WaveMaker Cloud Instance

10.0

14

22

9.4.0

14

22

The actual app development and deployment support are further determined by your license terms. This means that, even if your infrastructure has the capacity, the apps that can be developed and deployed is restricted by your license terms. Similarly, even though your license terms allow, the apps that can be developed and deployed are limited by the infrastructure capacity. different instances needs to be added to each stage in the release pipeline as explained in the Increasing Deployment Capacity section.

###  Installer File Requirements

The following files should be shared with you by the WaveMaker team:

-  installer deb file and its corresponding checksum (sha1sum) file, communicated to you by the WaveMaker team.
- base ova or WME base AMI if you want launch instances with WaveMaker base image formats.
- Key (.zip format) issued by WaveMaker, communicated to you by the WaveMaker team.
- need to download the above files before starting the installation.

### Checksum

need to verify the WME Installer/OVA/License file (.deb/.ova file communicated to you by the WaveMaker team) using checksum command before installing it.

To verify on Linux

- the following command, go to the directory where .ova file and checksum files are downloaded `# cd /home/ubuntu`
- verify the file integrity of the VM image, run the following checksum command: `# sha1sum -c [checksum-filename]`
- running the command, the result should be displayed as OK, which means the checksum is verified and the file is OK.

To verify on Windows

- , download the FCIV utility package (to download,  [instructions from here](https://support.microsoft.com/en-us/kb/841290#bookmark-4)) `# cd /home/ubuntu`
- download, from command prompt, run the following command: `-sha1 pathfilename.ext`
- Windows, after running the command, the result should be manually verified with the values present in their respective files (checksum file shared to you by email).

 (Applicable for both Windows and Linux): Do not proceed further to installation if checksum verification fails. Invalid checksum indicates a likely corrupted download. Try downloading the file again or contact  [Support](mailto: support@wavemaker.com)

## Addressing

You will be needing IP Addresses for the following.

- static IP for accessing the Platform machine from your network and
- IP range to be assigned to the Docker containers internally. [![](../assets/ip_add.png)](../assets/ip_add.png)
- **Access**:
    - Static IP: This is the IP assigned to machine during setup and should be accessible on your network, or
    - case of VM's, it will be the local IP address, which should be routable from in your LAN.
    - case of AWS instance: Private static IP for the instance within your VPC (assigned via eth0 or via ENI on eth1,ens5)
    - **Mapping**: Map a domain to the above IP for easy access:
        
        **URL**
        
        Studio
        
        `[mycompany].com`
        
        domain will be used to access WaveMaker Studio
        
        Deployed Apps
        
        `[mycompany].com` `[mycompany].com` `[mycompany].com`
        
        domains will be used to access WaveMaker Studio apps deployed onto WaveMaker Cloud
        
        Note: In the preceding table, `[mycompany]` is used as an example. You may have to replace `[mycompany]` with your appropriate domain name.
- **Container Access**: You will be needing to assign a /16 [ ](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) to Docker during setup. This IP range should not be in use anywhere on your network and can be completely different from your network’s range. These IPs are assigned internally by Docker to containers and these IPs won’t be exposed on your network. For example, if your network is using a _10.x.x.x_ range and the range _192.168.x.x_ is not used anywhere in your network, you may assign this _192.168.x.x_ range to Docker. See [](https://en.wikipedia.org/wiki/Private_network#Private_IPv4_address_spaces)for the possible LAN IP ranges.

2: Launch & Initialize WME

- [1\. Getting Started](#)
    - [WME - an Overview](#wme-overview)
    - [Prerequisites](#prerequisites-wme)
    - [IP Addressing](#ip-addressing)
- [2\. Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/)
- [3\. Setting Up WME](/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
