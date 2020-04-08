---
title: "WaveMaker Enterprise Prerequisites"
id: ""
sidebar_label: "Prerequisites"
---
---

## Prerequisites to Setup WME

You can setup WaveMaker Enterprise on any machine.

This document uses words like _**VM**_, _**Instance**_ to refer a machine.

The machine can be hosted on any cloud provider(like AWS EC2, GCP, Azure .etc) or enterprise cloud or baremetal. All machine allocated to WME  platform should not have any other running process.

The following are prerequisites to setup WaveMaker Enterprise. The below-mentioned system requirements allow for limited app developments and deployments. You can increase this capacity by adding Developer Workspace and App Deployment instances thus scaling your WME.

### WME Setup System Requirements

WaveMaker Enterprise can be installed on any machine with below requirements. Before you start setting up the WaveMaker Enterpris, here is a list of a minimum and recommended System Requirements for the each type of Instance:

#### WME Platform Instance : 

<table><tbody><tr><td><strong>Memory</strong></td><td><ul><li>Minimum 16GB</li></ul></td></tr><tr><td><strong>CPU</strong></td><td><ul><li>4-cores, single CPU system</li><li>Intel Virtualization Technology (VT-x) enabled</li><li>Hyperthreading (HT) disabled</li></ul></td></tr><tr><td><strong>Hard Disk</strong></td><td><ul><li>Minimum&nbsp;250 GB to be allocated</li><li>In case of Cloud setups we recommend 3 disks<ul><li>/&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 GB</li><li>/wm-data&nbsp; &nbsp; &nbsp; &nbsp; 150 GB</li><li>/wm-runtime&nbsp; &nbsp;50 GB</li></ul></li></td></tr><tr><td><strong>Network</strong></td><td><ul><li>Static IP with valid DNS</li><li>Ports 80, 443, 8080 to developer network</li><li>Full trafic(tcp,udp) should be opened between all instances</td></tr><tr><td><strong>Host OS</strong></td><td><ul><li>Ubuntu 16.04.6 LTS; RHEL 7.x, 8.x; CentOS 8.x</li><li>Kernel 4.4 or 4.15</li></ul></td></tr>
<tr><td><strong>Software</strong></td><td><ul><li>docker 18.06.2-ce</li><li>Python 3.5 or higher</li><li>wget</li><li>container-selinux-2.9-4.el7.noarch.rpm</li></ul></td></tr></tbody></table>


#### WME External Instance : 

<table><tbody><tr><td><strong>Memory</strong></td><td><ul><li>Minimum 16GB</li></ul></td></tr><tr><td><strong>CPU</strong></td><td><ul><li>4-cores, single CPU system</li><li>Intel Virtualization Technology (VT-x) enabled</li><li>Hyperthreading (HT) disabled</li></ul></td></tr><tr><td><strong>Hard Disk</strong></td><td><ul><li>Minimum&nbsp;250 GB to be allocated</li><li>In case of Cloud setups we recommend 3 disks<ul><li>/&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 GB</li><li>/data&nbsp; &nbsp; &nbsp; &nbsp; 150 GB</li><li>/wm-runtime&nbsp; &nbsp;50 GB</li></ul></li></td></tr><tr><td><strong>Network</strong></td><td><ul><li>Static IP</li><li>Full trafic(tcp,udp) should be opened between two all instances</li></td></tr><tr><td><strong>Host OS</strong></td><td><ul><li>Ubuntu 16.04.6 LTS; RHEL 7.x, 8.x; CentOS 8.x</li><li>Kernel 4.4 or 4.15</li></ul></td></tr>
<tr><td><strong>Software</strong></td><td><ul><li>docker 18.06.2-ce</li><li>Python 3.5 or higher</li><li>wget</li><li>container-selinux-2.9-4.el7.noarch.rpm</li></ul></td></tr></tbody></table>

#### Capacity Planning

Adding an instance to either User workspace or Deployed Apps aids in the scalability of the WME setup in terms of application development and deployment, respectively. Each addedUser workspace or Deployed Apps instances would allow for a specific number of app developments and app deployments. These numbers will vary based on the WME version, refer to the table below for the exact numbers.

| WME Version | Developer logins per 16GB WaveMaker Studio Instance | App Deployments per 16GB WaveMaker Cloud Instance |
| --- | --- | --- |
| v10.0 | 14 | 22 |
| v9.4.0 | 14 | 22 |

The actual app development and deployment support are further determined by your license terms. This means that, even if your infrastructure has the capacity, the apps that can be developed and deployed is restricted by your license terms. Similarly, even though your license terms allow, the apps that can be developed and deployed are limited by the infrastructure capacity. **Note** different instances needs to be added to each stage in the release pipeline as explained in the Increasing Deployment Capacity section.

### WME Setup Aritifacts

- There are two ways to do the setup.     
    - you can come up with Operating system pre installed, then use our installer to setup WME.
    - User our OVA(backed with Operating System + Installer) to launch machines and do the WME setup.

The following files should be shared with you by the WaveMaker team:
You need to download the below files before starting the installation.
Depends on your setup type, WaveMaker teams sends on of the follwing.

- WME Installer(Operating System Pre-Installed).
    - Deb installer if you choosen Ubuntu.
    - Tar ball if you choosen RHEL/CentOS.
- WME Platform OVA for Esxi 6.5 or higher
    - Platform Instance OVA 
    - External Instance OVA
- Checksum(sha1sum) file for each of above files.
- License Key (.zip format) issued by WaveMaker, communicated to you by the WaveMaker team.

### Verifying Checksum

You need to verify the WME Installer/OVA/License file (.deb/.ova file communicated to you by the WaveMaker team) using checksum command before installing it.

To verify on Linux

- Using the following command, go to the directory where .ova file and checksum files are downloaded `# cd /home/ubuntu`
- To verify the file integrity of the VM image, run the following checksum command: `# sha1sum -c [checksum-filename]`
- After running the command, the result should be displayed as OK, which means the checksum is verified and the file is OK.

To verify on Windows

- First, download the FCIV utility package (to download, [follow instructions from here](https://support.microsoft.com/en-us/kb/841290#bookmark-4)) `# cd /home/ubuntu`
- After download, from command prompt, run the following command: `FCIV -sha1 pathfilename.ext`
- In Windows, after running the command, the result should be manually verified with the values present in their respective files (checksum file shared to you by email).

**Note** (Applicable for both Windows and Linux): Do not proceed further to installation if checksum verification fails. Invalid checksum indicates a likely corrupted download. Try downloading the file again or contact [WaveMaker Support](mailto: support@wavemaker.com).

## IP Addressing and DNS Mapping

You will be needing IP Addresses for the following.

- **IP Address**
    - one static IP for accessing the Platform machine from your network.
    - Machine Static IP: This is the IP assigned to machine during setup and should be accessible on your network, or
        - In case of VM's, it will be the local IP address, which should be routable from in your LAN.
        - In case of AWS instance: Private static IP for the instance within your VPC (assigned via eth0 or via ENI on eth1,ens5)
- **DNS Mapping**: Map a domain to the above IP for easy access:
    
        | **Domain**              | **Domain URL**                | **Description**              |
        | ---                     | ---                           | ---                          |
        | WaveMaker Studio        | `wavemaker.[mycompany].com`   | This domain will be used to access WaveMaker Studio   |
        | WaveMaker Deployed Apps | `wm-apps.[mycompany].com`  `wm-stage.[mycompany].com`     `wm-live.[mycompany].com` | These domains will be used to access WaveMaker Studio apps deployed onto WaveMaker Cloud |
        
        Note: In the preceding table, `[mycompany]` is used as an example. You may have to replace `[mycompany]` with your appropriate domain name.
- **Docker Container Access**: 
    - an IP range to be assigned to the Docker containers internally.
    You will be needing to assign a /16 [CIDR ](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) to Docker during setup. This IP range should not be in use anywhere on your network and can be completely different from your network’s range. These IPs are assigned internally by Docker to containers and these IPs won’t be exposed on your network. For example, if your network is using a _10.x.x.x_ range and the range _192.168.x.x_ is not used anywhere in your network, you may assign this _192.168.x.x_ range to Docker. See [here](https://en.wikipedia.org/wiki/Private_network#Private_IPv4_address_spaces) for the possible LAN IP ranges.



