---
title: "WME Setup Guide – Setting up"
id: ""
sidebar_label: "Setting up WME"
---
---

This section talks about initializing and setting up the WME. This step comes after you have [Launching Instances](/learn/installation/wme-setup-guide-launch-initialize/).

## Download and Copy the WME Setup files

1. Download the WME installer file and its checksum (sha1sum) file from the email.
2. The next few steps are dependent upon your host machine operating system _Case 1: Linux as host machine_
    
    - Using the below SCP command, copy the downloaded files from your host machine to the WME instance. When prompted, enter the password (as shared by the WaveMaker team). SCP command for WME Installer file: `# scp -P 22 [WME Installer filename] ubuntu@[IPADDRESS]:~/ ` SCP command for WME VM Patch checksum (sha1sum) file: `# scp -P 22 [WME Installer sha1sum] ubuntu@[IPADDRESS]:~/ ` SCP command for WME running on AWS instance: `# scp -i [pem file along with path] [source file path] ubuntu@[path to remote destination]:~/` Use the same _ppk_ file that you generated while installing the WME VM
    - The above command will copy the files to /home/ubuntu directory inside the WME instance.
    
    _Case 2: Windows as host machine_
    - Download and install WinSCP installer in your Windows host machine.
    - Launch WinSCP after installation.
    - Enter Hostname, Username and Password and click Login. [![](/learn/assets/WME_patch1.png)](/learn/assets/WME_patch1.png) **In case of AWS installation**, you need the use the _ppk_ file instead of the password [![](/learn/assets/WME_patch1_1.png)](/learn/assets/WME_patch1_1.png)
    - Click 'Yes' when the Unknown server warning is displayed. [![](/learn/assets/WME_patch2.png)](/learn/assets/WME_patch2.png)
    - Enter the password when prompted (communicated to you by the WaveMaker team). [![](/learn/assets/WME_patch3.png)](/learn/assets/WME_patch3.png)
    - Now you are connected to the Machine from your Windows host machine.
    - Only for VM users: Drag and drop the WME Installer file and WME Installe checksum file from the Windows machine to theMachine /home/ubuntu location. [![](/learn/assets/WME_patch4.png)](/learn/assets/WME_patch4.png)
    - Click 'Ok' on the upload dialog. [![](/learn/assets/WME_patch5.png)](/learn/assets/WME_patch5.png)
    - Now patch and checksum/private key files will start copying to the WME machine. Wait until the patch and checksum/private key files are copied to the machine.

## Accessing WME Installer file & verifying

The instructions in this section vary depending upon the host machine operating system. Follow the appropriate set. _Case 1: Linux Host Machine_

1. Open the terminal
2. Access the WME machine using the SSH (secure shell) command. `# ssh ubuntu@[IPADDRESS]:~/` For AWS Installation: `ssh -i [ssh-private-key] ubuntu@[IPADDRESS]`
3. Switch to root access `ubuntu@wavemaker:~$ sudo su -`

_Case 2: Windows Host Machine_

1. Download and install [PuTTY installer](https://winscp.net/download/putty-0.67-installer.exe) in your Windows host machine
2. Launch PuTTY after installation
3. Enter the machine IP address in the Host Name field and select SSH option. Click 'Open' button [![](/learn/assets/WME_patch6.png)](/learn/assets/WME_patch6.png)
4. In case of **AWS installation**, under **SSH** -> **Auth** option add the _Private key file_ [![](/learn/assets/WME_patch6_1.png)](/learn/assets/WME_patch6_1.png)
5. Click 'Yes' on the PuTTY security Alert dialog [![](/learn/assets/WME_patch7.png)](/learn/assets/WME_patch7.png)
6. Enter the Username and password when prompted (as provided by the WaveMaker team) [![](/learn/assets/WME_patch8.png)](/learn/assets/WME_patch8.png)
7. Switch to root access `ubuntu@wavemaker:~$ sudo su -`

You need to verify the WME setupfiles using checksum command before installing it, [see here for details](/learn/installation/wavemaker-enterprise-setup-guide/#verifying-checksum-vm).

## Initializing WME

After verifying the checksum:

1. Go to root user . Setup process needs root permissions.
    - sudo su -
2. Format and Mount Disks in case of  setup on AWS/Azure/GCP etc cloud prioviders. Execute below commands.
    - List disks and format them.
        
        - _lsblk_
        
        - _mkfs.ext4 <disk1>_ _mkfs.ext4 <disk2>_
    - Create directories and mount disks
        - _mkdir -p /wm-data_ _mkdir -p /wm-runtime_ _mount <disk1> /wm-data_ _mount <disk2> /wm-runtime_
        - Add below entries in /etc/fstab file (Note: Make sure not to have duplicate entries with same device names). To prserver these setting after reboot.
            - <disk1> /wm-data ext4 defaults,nofail 0 2 <disk2> /wm-runtime ext4 defaults,nofail 0 2
3. Extract the setup file (Debian package) using the following command.
    - _dpkg -i \[WME-Installer-filename\]_
4. After the package gets extracted successfully,  You will be seeing a message with a command to start the WaveMaker installation. Run the command.
    - _bash /usr/local/content/wme/wme-installer/\[installer-version\]/wme-installer.sh_
5. After running the above command, it prompts you with WME pre-setup configuration process.
6. Enter the ethernet interface name in the VM as **eth0** or **eth1** or **ens5 **(typically eth0 for VMware or Virtual Box based VMs, **ens5 for **AWS EC2 )
7. You will be seeing IP address assigned to given interface. Press Y to processed if it matches with machine private IP.
8. Enter the IP range in CIDR notation for internal use by the WME. This should not conflict with the local LAN IP range. Refer the [Prerequisites](/learn/installation/wavemaker-enterprise-setup-guide/#ip-addressing) for details. **CIDR**: IP address representation and its associated routing prefix.

Once the WME pre-setup configuration is successfully completed, you will see a success message. You need to access the auto populated URL (http:<IP-of-WME-VM>:<port-number>) which needs to be opened in a browser.

## Accessing WaveMaker Enterprise

You can access WaveMaker by one of the following ways:

- Configure the DNS Names in your enterprise routers with help of the IT or,
- Map the IP address and DNS names in the hosts file on the system accessing WaveMaker.

Example of the Host Entries:

<ip address>  wavemaker.\[mycompany\].com 
  qa.wmcloud.\[mycompany\].com
  stage.wmcloud.\[mycompany\].com
  live.wmcloud.\[mycompany\].com

**Note**:

- In the above Host Entries, **mycompany** is used as an example. You may have to replace **mycompany** with your appropriate domain name.
- The IP address in the above Host Entry example is the same IP address that is displayed after successfully completing the WME Network Configuration.

For _Windows_ machine, make the host entries in `C:WindowsSystem32driversetchosts` file as shown in the above example. For _Linux_ machines make the host entries in `/etc/hosts` file as shown in the above example. You may require to get IT assistance for this.

## Setting up WaveMaker Enterprise

To start the WME Setup, access the above-mentioned URL and follow the steps in the WaveMaker Enterprise Setup wizard:

1. **Admin Setup**:
    1. Enter _setup-admin_ as **username** and set a password of your choice.
    2. You will then be redirected to WME login page where you can log in as setup-admin using the password you set.
2. You will be prompted to select the setup type to be Trial or Production based on your requirement and license. [![](/learn/assets/WME_setup0.png)](/learn/assets/WME_setup0.png)
3. **Domain Setup**: Enter your Enterprise Name. Once you enter the Enterprise Name, domain names for WaveMaker Studio and WaveMaker Built Apps are auto-generated. You may replace these as per your requirement. **Note**: Based on the selection of the setup, the list of required DNS Entries is displayed. [![](/learn/assets/WME_setup1.png)](/learn/assets/WME_setup1.png)
4. **Authentication Setup**: Use the form to create an Admin user, entering the email id, password, first and last name and click Next [![](/learn/assets/WME_setup2.png)](/learn/assets/WME_setup2.png)
5. **Capacity Info**: The capacity allocation is non-editable and fixed based on the type of setup selected. Click Proceed with Installation [![](/learn/assets/WME_setup3.png)](/learn/assets/WME_setup3.png)
6. **Installation**: The installation process initiates and it takes a while to start, configure and run the services. [![](/learn/assets/WME_setup4.png)](/learn/assets/WME_setup4.png)

Once the installation process is completed successfully, click on Apply License to continue further. Make sure the License File is already downloaded to your local machine. **Note**: License File can ALSO be uploaded from the [License section of Launchpad](/learn/installation/wme-setup-guide-configuration/#uploading-license). [![](/learn/assets/WME_setup5.png)](/learn/assets/WME_setup5.png) **Note**: While launching WaveMaker, if installing services fails refer to [Troubleshooting section](/learn/installation/wme-setup-guide-maintenance/#troubleshooting).

## Uploading License

1. Upload the License File from your local machine and click on **Get License Details**. You can review your License details and continue further. [![](/learn/assets/WME_license3.png)](/learn/assets/WME_license3.png)
2. Click **Apply License**. On the bottom right corner, you will get a success message once the license is uploaded successfully. **NOTE**: To avail the full benefits of the License in terms of Developers and Nodes (Apps), instances need to be added appropriately. See [Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/) for more details.
3. Click on **Go To Launchpad**. [![](/learn/assets/WME_license2.png)](/learn/assets/WME_license2.png)

::: note
Make sure you have the host entry made as mentioned above.
:::
