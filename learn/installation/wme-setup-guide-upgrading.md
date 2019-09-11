---
title: "WME Setup Guide – Upgrading"
id: ""
---

This document provides the instructions to install the WME setup to upgrade the current WaveMaker Enterprise version or to apply a patch for enhancing or optimizing the performance of the installed WME.

The following table is the compatibility matrix for upgrading the WME:

**Note**: The following list provides the currently supported versions for WME patching. Kindly contact our WaveMaker support team if you did not find the right version.

| **WME Patch release** | **Supported WME versions** |
| --- | --- |
| v10.0.3 | v9.3.x or higher |
| v9.4.0 |  v9.2.0 or higher |
| v9.3.0.1 |  v9.0.x or higher |

## Patch Inventory

Following are the patch files you will need in order to install the patch on WME setup running on your host machine.

- WME patch file and its corresponding checksum (sha1sum) file.
- WME base ova or WME base AMI if you want to launch instances with WaveMaker base image formats.
- License Key (.zip format) issued by WaveMaker.

**Note**: Links for WME Patch and the corresponding checksum (sha1sum) files will be provided to you by the WaveMaker team through an email. You need to download the files before starting the installation.

## Prerequisites

Following are the prerequisites for applying the patch on WME:

- WaveMaker Enterprise specifications mentioned in the above sections.
- While applying the patches, the WME and services should be in the running state.
- Ensure that users are not accessing the platform when applying either of the patches.
- Before applying the patches, take a snapshot/backup of the virtual machine’s current state. [Click here for details](/learn/installation/wme-setup-guide-maintenance/#back-up).

## Download and Copy the WME patch

1. Download the WME patch file and WME patch checksum (sha1sum) file from the email.
2. The next few steps are dependent upon your host machine operating system _Case 1: Linux as host machine_
    
    - Using the below SCP command, copy the downloaded files from your host machine to the WME Platform  machine. When prompted, enter the password (as shared by the WaveMaker team). SCP command for WME  Patch file: `# scp -P 22 [WME patch filename] ubuntu@[IPADDRESS]:~/` SCP command for WME Patch checksum (sha1sum) file: `# scp -P 22 [WME patch sha1sum] ubuntu@[IPADDRESS]:~/` SCP command for WME running on AWS instance: `# scp -i [pem file along with path] [source file path] ubuntu@[path to remote destination]:~/` Use the same _ppk_ file that you generated while installing the WME Platform machine
    - The above command will copy the files to /home/ubuntu directory inside the WME Platform machine.
    
    _Case 2: Windows as host machine_
    - Download and install WinSCP installer in your Windows host machine.
    - Launch WinSCP after installation.
    - Enter Hostname, Username and Password and click Login. [![](/learn/assets/WME_patch1.png)](/learn/assets/WME_patch1.png) **In case of AWS installation**, you need the use the _ppk_ file instead of the password [![](/learn/assets/WME_patch1_1.png)](/learn/assets/WME_patch1_1.png)
    - Click 'Yes' when the Unknown server warning is displayed. [![](/learn/assets/WME_patch2.png)](/learn/assets/WME_patch2.png)
    - Enter the password when prompted (communicated to you by the WaveMaker team). [![](/learn/assets/WME_patch3.png)](/learn/assets/WME_patch3.png)
    - Now you are connected to the WME platform machine from your Windows host machine.
    - Drag and drop the WME patch file and WME patch checksum file from the Windows machine to the WME platform machine /home/ubuntu location. [![](/learn/assets/WME_patch4.png)](/learn/assets/WME_patch4.png)
    - Click 'Ok' on the upload dialog. [![](/learn/assets/WME_patch5.png)](/learn/assets/WME_patch5.png)
    - Now patch and checksum/private key files will start copying to the WME platform machine. Wait until the patch and checksum/private key files are copied to the WME platform machine.

## Accessing WME patch file & verifying

The instructions in this section vary depending upon the host machine operating system. Follow the appropriate set. _Case 1: Linux Host Machine_

1. Open the terminal
2. Access the WME Platform machine using the SSH (secure shell) command. `# ssh ubuntu@[IPADDRESS]:~/` For AWS Installation: `ssh -i [ssh-private-key] ubuntu@[IPADDRESS]`
3. Switch to root access `ubuntu@wavemaker:~$ sudo su -`

_Case 2: Windows Host Machine_

1. Download and install [PuTTY installer](https://winscp.net/download/putty-0.67-installer.exe) in your Windows host machine
2. Launch PuTTY after installation
3. Enter the Platform machine IP address in the Host Name field and select SSH option. Click 'Open' button [![](/learn/assets/WME_patch6.png)](/learn/assets/WME_patch6.png)
4. In case of **AWS installation**, under **SSH** -> **Auth** option add the _Private key file_ [![](/learn/assets/WME_patch6_1.png)](/learn/assets/WME_patch6_1.png)
5. Click 'Yes' on the PuTTY security Alert dialog [![](/learn/assets/WME_patch7.png)](/learn/assets/WME_patch7.png)
6. Enter the Username and password when prompted (as provided by the WaveMaker team) [![](/learn/assets/WME_patch8.png)](/learn/assets/WME_patch8.png)
7. Switch to root access `ubuntu@wavemaker:~$ sudo su -`

You need to verify the WME  patch files using checksum command before installing it, [see here for details](/learn/installation/wavemaker-enterprise-setup-guide/#verifying-checksum-vm).

## Install the patch inside WME Platform machine

The current version(10.0.3) of WME patch, requires Ubuntu 16.04.  So there are two different ways to upgrading your current setup to latest 10.0.3 WME version.

1. **Upgrade within the same instances.**
    - Recommended for setups with internet availability. Suits for samll scale setups(zero or one Developer workspace and App Deployments instance)
    - Upgrade will happen with in current machines. No new hardware required.
    - Go to platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _dpkg -i <patch-file-name.deb>_
    - You will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    -  After a while, you will be seeing a message to upgrade Operating System, if your current setup  was in 9.3.x or 9.4.x. Upgarde Operating system with below commands. These commands requires internet.  Once Operating system upgraded, reboot the platform mechine.
        - _apt-get update_ _apt-get upgrade_ _apt-get dist-upgrade_ _apt-get install update-manager-core_ _mount -o remount,exec /tmp_ _do-release-upgrade_
        - Upgrade Operating system in all added instances(Developer workspace and App Deployment)
    -  If rebooted , relogin to Platform machine, run the patch command again. This process will take 30-40 minis.
        - _bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    - After successful installation of patch go to launchpad. You will be seeing UPGRADE\_FAILED state for Developer worksapace and App Deployment Instances if those are not upgraded to Ubuntu 16.04. You can delete those instances and add new instance with Ubuntu 16.04.
2. **Upgrade with Rehydration for setups with out volume for /wm-data **
    - Recommended for setups without internet availability. Suits for large scale setups(more that one  Developer workspace and App Deployments instance). Best suits for setups on Enterprise Cloud(manged by VMware vSphere Client/Oracle VM VirtualBox Manager/VMware Workstation Pro.  which don't have volumes)
    - Rehydration means migrating WME setup to new machines.
    - Go to platform machine using above steps and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _dpkg -i <patch-file-name.deb>_
    - You will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    - The above command will stop the current setup and make it ready to migrate to new machines.
    - Create and Copy data tar to your machine(or any machine in your network).
        - Create data tar with below command.
            - _tar -cvfp wm-data.tar /wm-data_
                
        - Copy wm-data.tar to your local machine using appraoch mentioned [above](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#download-copy)
    - Launch another fresh machine as prescribed in the [pre-requisites](https://www.wavemaker.com/learn/installation/wavemaker-enterprise-setup-guide/#prerequisites-wme). You can lunch instances from WaveMaker base formats as mentioned in the  [Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/) section. Make sure the new machine has same IP as old machine.
    - Download and Copy WME patch file to Platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#download-copy)
    - Copy wm-data.tar from your local machine to platform machine. Go to platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract it to /wm-data.
        - mkdir -p  /wm-data
        - _tar -xvfp wm-data.tar /wm-data_
    - Go to platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _dpkg -i <patch-file-name.deb>_
    - You will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
3. **Upgrade with Rehydration for setups with /wm-data as volume**
    - Recommended for setups without internet availability. Suits for large scale setups(More than one Developer workspace and App Deployments instance). Best suits for setups on SAS clouds(like AWS, GCP, Azure which have volumes support)
    - Rehydration means migrating WME setup to new machines.
    - Go to platform machine using above steps and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _dpkg -i <patch-file-name.deb>_
    - You will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    - The above command will stop the current setup and make it ready to migrate to new machines.
    - Note down network settings.
        - Take cidr value from file /wm-runtime/conf/config-wizard/config/setup-env.json. This is required while setting up new version of WME.
            -  "cidr": "<cidr\_range>"
        - Inteface name(eth1/eth0 along with IP address).
    - Create snapshot of /wm-data volume
        - Un mount wm-data volume.
            - _umount /wm-data_
        - Create snapshot of /wm-data for backup, make sure to note _snapshot-Id_ in your Cloud Provider Console(AWS console /Azure Protal/GCP portal etc)
    - Launch another fresh machine as prescribed in the [pre-requisites](https://www.wavemaker.com/learn/installation/wavemaker-enterprise-setup-guide/#prerequisites-wme). You can lunch instnaces from WaveMaker base formats as mentioned in the  [Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/) section. Make sure the new machine has same IP as Old machine and with wm-data volume.
        -   Add Storage with three volumes. root volume (/), config volume(/wm-config), data volume(/wm-data) .
        - Provide snapshot\_id of old wm-data volume while adding storage.
    - Download and Copy WME patch file to Platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#download-copy).
    - Go to platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access)
        - List disks and format them.
            - lsblk
            - mkfs.ext4 <disk1>
            - mkfs.ext4 <disk2>
        - Create directories and mount disks
            - mkdir -p /wm-data mkdir -p /wm-runtime mount <disk1> /wm-data   (disk created from old snapshot\_id) mount <disk2> /wm-runtime
            - Add below entries in /etc/fstab file (Note: Make sure not to have duplicate entries with same device names). To prserver these setting after reboot.
                - <disk1> /wm-data ext4 defaults,nofail 0 2 <disk2> /wm-runtime ext4 defaults,nofail 0 2
    - Go to platform machine using [above steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _dpkg -i <patch-file-name.deb>_
    - You will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _bash /usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
        - Provide same IP and CIDR as old setup.

## Troubleshooting

In case you encounter any issues while applying patch, download and send the log file to support@wavemaker.com. Steps to download the log files

1. Access WaveMaker Enterprise Setup Portal at http://\[ip-of-platform machine\]:8080.
2. Login to Setup Portal with your admin credentials (provided at the time of admin user creation).
3. From the left panel, click Support Center and Download Logs.

[![](/learn/assets/WME_trouble.png)](/learn/assets/WME_trouble.png)

Contents

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/)
- 3. [Setting Up WME](https://www.wavemaker.com/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](#)
    - [i. Patch Inventory](#patch-inventory)
    - [ii. Prerequisites](#prerequisites)
    - [iii. Download & Copy](#download-copy)
    - [iv. Access & Verify](#patch-access)
    - [v. Install Patch](#patch-install)
    - [vi. Troubleshooting](#troubleshooting)
