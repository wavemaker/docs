---
title: "WME Setup Guide – Upgrading"
id: "wme-setup-guide-upgrading"
---

document provides the instructions to install the WME setup to upgrade the current WaveMaker Enterprise version or to apply a patch for enhancing or optimizing the performance of the installed WME.

following table is the compatibility matrix for upgrading the WME:

: The following list provides the currently supported versions for WME patching. Kindly contact our WaveMaker support team if you did not find the right version.

**Patch release**

**WME versions**

10.0.3

9.3.x or higher

9.4.0

 v9.2.0 or higher

9.3.0.1

 v9.0.x or higher

## Inventory

are the patch files you will need in order to install the patch on WME setup running on your host machine.

- patch file and its corresponding checksum (sha1sum) file.
- base ova or WME base AMI if you want to launch instances with WaveMaker base image formats.
- Key (.zip format) issued by WaveMaker.

: Links for WME Patch and the corresponding checksum (sha1sum) files will be provided to you by the WaveMaker team through an email. You need to download the files before starting the installation.

Following are the prerequisites for applying the patch on WME:

- Enterprise specifications mentioned in the above sections.
- applying the patches, the WME and services should be in the running state.
- that users are not accessing the platform when applying either of the patches.
- applying the patches, take a snapshot/backup of the virtual machine’s current state. [here for details](/learn/installation/wme-setup-guide-maintenance/#back-up)

## and Copy the WME patch

1. the WME patch file and WME patch checksum (sha1sum) file from the email.
2. next few steps are dependent upon your host machine operating system _1: Linux as host machine_
    
    - the below SCP command, copy the downloaded files from your host machine to the WME Platform  machine. When prompted, enter the password (as shared by the WaveMaker team). command for WME  Patch file: `# scp -P 22 [WME patch filename] ubuntu@[IPADDRESS]:~/` command for WME Patch checksum (sha1sum) file: `# scp -P 22 [WME patch sha1sum] ubuntu@[IPADDRESS]:~/` command for WME running on AWS instance: `# scp -i [pem file along with path] [source file path] ubuntu@[path to remote destination]:~/` Use the same file that you generated while installing the WME Platform machine
    - above command will copy the files to /home/ubuntu directory inside the WME Platform machine.
    
    _2: Windows as host machine_
    - and install WinSCP installer in your Windows host machine.
    - WinSCP after installation.
    - Hostname, Username and Password and click Login. [![](../assets/WME_patch1.png)](../assets/WME_patch1.png) ** case of AWS installation**, you need the use the  file instead of the password [![](../assets/WME_patch1_1.png)](../assets/WME_patch1_1.png)
    - 'Yes' when the Unknown server warning is displayed. [![](../assets/WME_patch2.png)](../assets/WME_patch2.png)
    - the password when prompted (communicated to you by the WaveMaker team). [![](../assets/WME_patch3.png)](../assets/WME_patch3.png)
    - you are connected to the WME platform machine from your Windows host machine.
    - and drop the WME patch file and WME patch checksum file from the Windows machine to the WME platform machine /home/ubuntu location. [![](../assets/WME_patch4.png)](../assets/WME_patch4.png)
    - 'Ok' on the upload dialog. [![](../assets/WME_patch5.png)](../assets/WME_patch5.png)
    - patch and checksum/private key files will start copying to the WME platform machine. Wait until the patch and checksum/private key files are copied to the WME platform machine.

## WME patch file & verifying

The instructions in this section vary depending upon the host machine operating system. Follow the appropriate set. _1: Linux Host Machine_

1. the terminal
2. the WME Platform machine using the SSH (secure shell) command. `# ssh ubuntu@[IPADDRESS]:~/` For AWS Installation: `-i [ssh-private-key] ubuntu@[IPADDRESS]`
3. to root access `@wavemaker:~$ sudo su -`

_2: Windows Host Machine_

1. and install [installer](https://winscp.net/download/putty-0.67-installer.exe) in your Windows host machine
2. PuTTY after installation
3. the Platform machine IP address in the Host Name field and select SSH option. Click 'Open' button [![](../assets/WME_patch6.png)](../assets/WME_patch6.png)
4. case of **installation**, under \-> option add the _key file_ [![](../assets/WME_patch6_1.png)](../assets/WME_patch6_1.png)
5. 'Yes' on the PuTTY security Alert dialog [![](../assets/WME_patch7.png)](../assets/WME_patch7.png)
6. the Username and password when prompted (as provided by the WaveMaker team) [![](../assets/WME_patch8.png)](../assets/WME_patch8.png)
7. to root access `@wavemaker:~$ sudo su -`

You need to verify the WME  patch files using checksum command before installing it, [here for details](/learn/installation/wavemaker-enterprise-setup-guide/#verifying-checksum-vm)

## the patch inside WME Platform machine

The current version(10.0.3) of WME patch, requires Ubuntu 16.04.  So there are two different ways to upgrading your current setup to latest 10.0.3 WME version.

1. **within the same instances.**
    - for setups with internet availability. Suits for samll scale setups(zero or one Developer workspace and App Deployments instance)
    - will happen with in current machines. No new hardware required.
    - to platform machine using [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _\-i <patch-file-name.deb>_
    - will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _/usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    -  After a while, you will be seeing a message to upgrade Operating System, if your current setup  was in 9.3.x or 9.4.x. Upgarde Operating system with below commands. These commands requires internet.  Once Operating system upgraded, reboot the platform mechine.
        - _\-get update_ _\-get upgrade_ _\-get dist-upgrade_ _\-get install update-manager-core_ _\-o remount,exec /tmp_ _\-release-upgrade_
        - Operating system in all added instances(Developer workspace and App Deployment)
    -  If rebooted , relogin to Platform machine, run the patch command again. This process will take 30-40 minis.
        - _/usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    - successful installation of patch go to launchpad. You will be seeing UPGRADE\_FAILED state for Developer worksapace and App Deployment Instances if those are not upgraded to Ubuntu 16.04. You can delete those instances and add new instance with Ubuntu 16.04.
2. **with Rehydration for setups with out volume for /wm-data **
    - for setups without internet availability. Suits for large scale setups(more that one  Developer workspace and App Deployments instance). Best suits for setups on Enterprise Cloud(manged by VMware vSphere Client/Oracle VM VirtualBox Manager/VMware Workstation Pro.  which don't have volumes)
    - means migrating WME setup to new machines.
    - to platform machine using above steps and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _\-i <patch-file-name.deb>_
    - will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _/usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    - above command will stop the current setup and make it ready to migrate to new machines.
    - and Copy data tar to your machine(or any machine in your network).
        - data tar with below command.
            - _\-cvfp wm-data.tar /wm-data_
                
        - wm-data.tar to your local machine using appraoch mentioned[](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#download-copy)
    - another fresh machine as prescribed in the [\-requisites](https://www.wavemaker.com/learn/installation/wavemaker-enterprise-setup-guide/#prerequisites-wme) You can lunch instances from WaveMaker base formats as mentioned in the  [ Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/) section. Make sure the new machine has same IP as old machine.
    - and Copy WME patch file to Platform machine using  [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#download-copy)
    -  wm-data.tar from your local machine to platform machine. Go to platform machine using  [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract it to /wm-data.
        - \-p  /wm-data
        - _\-xvfp wm-data.tar /wm-data_
    - to platform machine using  [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _\-i <patch-file-name.deb>_
    - will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _/usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
3. **with Rehydration for setups with /wm-data as volume**
    - for setups without internet availability. Suits for large scale setups(More than one Developer workspace and App Deployments instance). Best suits for setups on SAS clouds(like AWS, GCP, Azure which have volumes support)
    - means migrating WME setup to new machines.
    - to platform machine using above steps and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _\-i <patch-file-name.deb>_
    - will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _/usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
    - above command will stop the current setup and make it ready to migrate to new machines.
    - down network settings.
        - cidr value from file /wm-runtime/conf/config-wizard/config/setup-env.json. This is required while setting up new version of WME.
            -  "cidr": "<cidr\_range>"
        - name(eth1/eth0 along with IP address).
    - snapshot of /wm-data volume
        - mount wm-data volume.
            - _/wm-data_
        - snapshot of /wm-data for backup, make sure to note _\-Id_ in your Cloud Provider Console(AWS console /Azure Protal/GCP portal etc)
    - another fresh machine as prescribed in the [\-requisites](https://www.wavemaker.com/learn/installation/wavemaker-enterprise-setup-guide/#prerequisites-wme) You can lunch instnaces from WaveMaker base formats as mentioned in the  [ Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/) section. Make sure the new machine has same IP as Old machine and with wm-data volume.
        -   Add Storage with three volumes. root volume (/), config volume(/wm-config), data volume(/wm-data) .
        - snapshot\_id of old wm-data volume while adding storage.
    - and Copy WME patch file to Platform machine using [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#download-copy)
    - to platform machine using  [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access)
        - disks and format them.
            
            - 4 <disk1>
            - 4 <disk2>
        - directories and mount disks
            - \-p /wm-data mkdir -p /wm-runtime mount <disk1> /wm-data   (disk created from old snapshot\_id) mount <disk2> /wm-runtime
            - below entries in /etc/fstab file (Note: Make sure not to have duplicate entries with same device names). To prserver these setting after reboot.
                - <disk1> /wm-data ext4 defaults,nofail 0 2 <disk2> /wm-runtime ext4 defaults,nofail 0 2
    - to platform machine using  [steps](https://www.wavemaker.com/learn/installation/wme-setup-guide-upgrading/#patch-access) and extract the patch (Debian package) using the following command. Generally it may takes 3 to 5 mins.
        - _\-i <patch-file-name.deb>_
    - will be seeing a message with a command to start the WaveMaker patch installation. Run the command. This process may take 30-40 mins.
        - _/usr/local/content/wme/wme-installer/<installler-version>/wme-installer.sh_
        - same IP and CIDR as old setup.

In case you encounter any issues while applying patch, download and send the log file to support@wavemaker.com. Steps to download the log files

1. WaveMaker Enterprise Setup Portal at http://\[ip-of-platform machine\]:8080.
2. to Setup Portal with your admin credentials (provided at the time of admin user creation).
3. the left panel, click Support Center and Download Logs.

[![](../assets/WME_trouble.png)](../assets/WME_trouble.png)

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching Instances](https://www.wavemaker.com/learn/installation/wme-setup-guide-launch-initialize/)
- 3.  [Up WME](https://www.wavemaker.com/learn/installation/wme-setup-guide-access-setting/)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](#)
    - [Patch Inventory](#patch-inventory)
    - [Prerequisites](#prerequisites)
    - [Download & Copy](#download-copy)
    - [Access & Verify](#patch-access)
    - [Install Patch](#patch-install)
    - [Troubleshooting](#troubleshooting)
