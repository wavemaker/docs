---
title: "WME Setup Using DEB Installer with Private AMI"
date: "2019-05-13"
---

This document contains the prerequisites and the pre-setup instructions for WaveMaker Enterprise 10.0.2 installation on a VM using the DEB installer.

- the DEB installer from the S3 link provided by the WaveMaker team.
- the License Key (.zip format) issued by the WaveMaker team.
- a VM running Ubuntu 16.04 OS and kernel version 4.15.x.

The VM should have the following minimum configuration:

- 4

- 16GB

**volume**

- 100GB

### Addressing Requirements

- should assign one static IP for VM in order to access the VM from your network.
- IP range (/16 CIDR) for assigning to the Docker containers for internal use within WME VM. This IP range should not be in use in your network settings and it can be completely different from your network’s range.
- mappings for domain URLs that you provide during setup. These domains should resolve to the VM IP. For more detailed information on IP addressing, here

### the IPSet Package and Docker 17.09.0-ce

: All commands are intended to be executed as ‘root’ by a Cloud/Linux Administrator.

## the VM

Once the VM is launched, SSH into the VM using credentials and Install docker 17.09.0-ce

\# wget 
https://s3.amazonaws.com/downloads.wavemaker.com/wme/9.3.0.1/Docker/docker\_setup.sh 
# bash docker\_setup.sh # apt-get install linux-image-extra-<kernel verion>-generic

**:** If your network requires a proxy configuration, add the below lines to file /etc/apt/apt.conf. This allows apt to download packages via your proxy.

::http::Proxy "http://username:password@proxyhost:port/"; 
Acquire::https::Proxy 
"https://username:password@proxyhost:port/";

- the IPSet package via apt.

\# apt-get update
# apt-get install ipset

## WME via DEB Installer

- the DEB installer from the given S3 URL onto the launched VM.
- the DEB using dpkg command.

\# dpkg -i deb\_file

**:** (replace with the actual DEB file name)

- the DEB is extracted, it displays the main script to be executed which initializes the setup. Run the main script.

\# bash /usr/local/content/wme/wme-installer/<deb\_version>/wme-deb-installer.sh

**:** (replace <deb\_version> with the actual version available in the directory)

- prompted, enter the interface name (e.g. eth0) and an IP address (CIDR) range as described in the prerequisites above.
- successful initialization, the script will display a URL to perform the rest of the WME setup.
- the URL in your web browser and refer the instructions mentioned here to set up.

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching & Initializing WME](/learn/installation/wme-setup-guide-launch-initialize/)
- [3\. Setting Up WME](/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
