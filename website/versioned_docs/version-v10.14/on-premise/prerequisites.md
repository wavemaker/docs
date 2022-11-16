---
title: "WaveMaker Enterprise Prerequisites"
id: "prerequisites"
sidebar_label: "What you'll need"
---
---

You can setup WaveMaker Enterprise on any machine.

:::note
This document uses words like **VM**, **Instance** to refer a machine.
:::

## WME Setup System Requirements

WaveMaker Enterprise can be installed on any machine with the below requirements. Before you start setting up the WaveMaker Enterprise, here is a list of minimum and recommended system requirements for each type of Instance.

### WME Platform Instance
```
<table><tbody><tr><td><strong>Memory</strong></td><td><ul><li>Minimum 16GB</li></ul></td></tr><tr><td><strong>CPU</strong></td><td><ul><li>4-cores, single CPU system</li></ul></td></tr><tr><td><strong>Hard Disk</strong></td><td><ul><li>Minimum&nbsp;250 GB to be allocated</li><li>In case of volumes we recommend 3 disks<ul><li>/&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 GB</li><li>/wm-data&nbsp; &nbsp; &nbsp; &nbsp; 150 GB</li><li>/wm-runtime&nbsp; &nbsp;50 GB</li></ul></li></td></tr><tr><td><strong>Host OS</strong></td><td><ul><li>Ubuntu 18.04.5/20.04.2.0 LTS;  RHEL 7.x/8.x</li><li>Kernel 4.4 or latter</li><li>Architecture x86</li></ul></td></tr>
<tr><td><strong>Software</strong></td><td><ul><li>docker 20.10.7</li><li>python 3.5 or higher</li><li>wget</li><li>container-selinux-2.107-1.el7.noarch.rpm(Only for RHEL7)</li></ul></td></tr> <tr><td><strong>Network</strong></td><td><ul><li>Static IP with valid DNS</li><li>Ports 80, 443, 8080, 22(for ssh) to developer network range</li><li>Ports to be opened on Platform Instance for Access from StudioWorkspace Instance / AppDeployment Instance<ul><li>Ports : 5000, 8500, 22, 8081, 2200, 9200, 8000-8020</li></ul></li></td></tr></tbody></table>
```

### WME StudioWorkspace Instance and AppDeployment Instance
```
<table><tbody><tr><td><strong>Memory</strong></td><td><ul><li>Minimum 16GB</li></ul></td></tr><tr><td><strong>CPU</strong></td><td><ul><li>4-cores, single CPU system</li></ul></td></tr><tr><td><strong>Hard Disk</strong></td><td><ul><li>Minimum&nbsp;200 GB to be allocated</li><li>In case of volumes we recommend 3 disks<ul><li>/&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 GB</li><li>/data&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 150 GB</li></ul></li></td></tr><tr><td><strong>Host OS</strong></td><td><ul><li>Ubuntu 18.04.5/20.04.2.0 LTS; RHEL 7.x, 8.x</li><li>Kernel 4.4 or 4.15</li><li>Architecture x86</li></ul></td></tr>
<tr><td><strong>Software</strong></td><td><ul><li>docker 20.10.7</li><li>python 3.5 or higher</li><li>wget</li><li>container-selinux-2.107-1.el7.noarch.rpm(only for RHEL7)</li></ul></td></tr><tr><td><strong>Network</strong></td><td><ul><li>Static IP</li><li>Ports to be Opened on StudioWorkspace Instance / AppDeployment Instance for Access from Platform Instance <ul><li>Ports: 22, 2375, 80, 5000, 9101, 9102, 9100, 9404,2200-2299, 8001-8099, 3300-3399, 9500-9599</li></ul></td></tr></tbody></table>
```
### Network Communication

- Below diagram explain the network communication between the Platform Instance and StudioWorkspace Instance and AppDeployment Instance.

[![network-communication-between-instances](/learn/assets/wme-setup/network-communication-between-instances.jpg)](/learn/assets/wme-setup/network-communication-between-instances.jpg)

### Capacity Planning

Adding an instance to either User workspace or Deployed Apps aids in the scalability of the WME setup in terms of application development and deployment, respectively. Each added User workspace or Deployed Apps instances would allow for a specific number of app developments and app deployments. These numbers will vary based on the WME version, refer to the table below for the exact numbers.

| WME Version | Developer logins per 16GB WaveMaker Studio Instance | App Deployments per 16GB WaveMaker AppDeployment Instance |
| --- | --- | --- |
| v10.x | 12 | 20 |
| v9.4.0 | 14 | 22 |

The actual app development and deployment support are further determined by your license terms. This means that, even if your infrastructure has the capacity, the apps that can be developed and deployed is restricted by your license terms. Similarly, even though your license terms allow, the apps that can be developed and deployed are limited by the infrastructure capacity.

:::note
Different instances needs to be added to each stage in the release pipeline as explained in the Increasing Deployment Capacity section.
:::

## WME Setup Artifacts

WaveMaker will share the required artifacts (installer files/Images) to do the setup. There are two ways to do the setup.

1. **Operating System Pre-Installed**.  
    You can come up with machines with the Operating system pre-installed and install Prerequisite(optional).
    Then use our installer to setup WME.
2. **Use WaveMaker Machine Images(OVA/VHD/AMI)**.  
    Backed with Operating System, prerequisite, Installer.
    Launch machines from hypervisors or cloud consoles.

### Files

WaveMaker team will share the following files. You should download the below files before starting the installation.
Depending on your setup type, WaveMaker team will send one of the following.

- Operating System Pre-Installed.
  - Deb installer if you choose Ubuntu.
  - Tar ball if you choose RHEL.
- Use WaveMaker Images(OVA/VHD/AMI)
  - Platform Instance OVA for Esxi 6.5 or higher
  - StudioWorkspace Instance / AppDeployment Instance OVA for Esxi 6.5 or higher
- Checksum(sha1sum) file for each of the above files.
- License Key (.zip format) issued by WaveMaker, communicated to you by the WaveMaker team.

## IP Addressing and DNS Mapping

You will be needing IP Addresses for the following.

### IP Address

- One static IP for accessing the platform machine from your developer's network.
- Machine Static IP: This is the IP assigned to the machine during setup and should be accessible on your network, or
  - In the case of VM, it will be the local IP address, which should be rout table from in your LAN.
  - In case of AWS instance: Private static IP for the instance within your VPC (assigned via eth0 or via ENI on eth1,ens5)

### DNS Mapping

Map a domain to the above IP for easy access.

| **Domain**              | **Domain URL**                | **Description**              |
| ---                     | ---                           | ---                          |
| WaveMaker Studio        | `wavemaker.[mycompany].com`   | This domain will be used to access WaveMaker Studio   |
| WaveMaker Deployed Apps | `wm-apps.[mycompany].com`  `wm-stage.[mycompany].com`     `wm-live.[mycompany].com` | These domains will be used to access WaveMaker Studio apps deployed onto WaveMaker Cloud |

:::note
In the preceding table, `[mycompany]` is used as an example. You may have to replace `[mycompany]` with your appropriate domain name.
:::

### Docker Container Access

- An IP range to be assigned to the Docker containers internally. The Minimum [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) (Classless Inter-Domain Routing) range for Docker container network is 24.

You will be needing to assign a /24 CIDR to Docker during setup. This IP range should not be in use anywhere on your network and can be completely different from your network’s range. These IPs are assigned internally by Docker to containers and these IPs won’t be exposed on your network.

For example, if your network is using a 10.x.x.x_range and the range_192.168.x.x is not used anywhere in your network, you may assign this 192.168.x.x range to Docker. See [here](https://en.wikipedia.org/wiki/Private_network#Private_IPv4_address_spaces) for the possible LAN IP ranges.
