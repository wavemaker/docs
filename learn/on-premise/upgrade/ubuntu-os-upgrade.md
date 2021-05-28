---
title: "Ubuntu OS Upgrade"
id: ""
sidebar_label: "Ubuntu Upgrade"
---
---

## Verifying OS version before Update

- Before Upgrading OS we check the present OS version and release details by entering the following command 

```bash
   cat /etc/os-release
```

[![get os version](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-initial.png)](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-initial.png) 

## APT commands for Upgrade existing system

- Use the apt command or apt-get command to upgrade existing system 

```bash
   apt update && sudo apt upgrade
```

[![Apt commands](/learn/assets/wme-setup/upgrade-wme-setup/apt-update-upgrade-commands.png)](/learn/assets/wme-setup/upgrade-wme-setup/apt-update-upgrade-commands.png)

## Reboot the system

- You have to reboot the system if kernel was updated by using the following command 

```bash
   reboot
``` 

## Stop Docker service in the system

- After reboot is completed it is recommended to stop docker services before updating, you can use the below command to stop docker services

```bash
   service docker stop
```

## Upgrade the Ubuntu Operating System

- Upgrade the operating system to the next available release version by typing the following command

```bash
   do-release-upgrade
```

[![do upgrade](/learn/assets/wme-setup/upgrade-wme-setup/do-release-upgrade.png)](/learn/assets/wme-setup/upgrade-wme-setup/do-release-upgrade.png)

   - Open ssh port 1022 or use the prompted port, this is used to be able to ssh into instance in case of disaster

     [![SSH port](/learn/assets/wme-setup/upgrade-wme-setup/ssh-port-allocate.png)](/learn/assets/wme-setup/upgrade-wme-setup/ssh-port-allocate.png)

   - We have to follow on-screen instructions for upgrade, during this you might be asked to replace existing grub or ssh config file. Do select to keep existing version to avoid further complications

     [![Grub update](/learn/assets/wme-setup/upgrade-wme-setup/grub-update.png)](/learn/assets/wme-setup/upgrade-wme-setup/grub-update.png)

   - You will see this message System upgrade is complete and will ask to restart the system proceed with restart

     [![Sucess Restart](/learn/assets/wme-setup/upgrade-wme-setup/success-restart.png)](/learn/assets/wme-setup/upgrade-wme-setup/success-restart.png)

- After Upgrade check the updated OS version and release details by entering the following command  

```bash
   cat /etc/os-release
```
[![get os version final](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-final.png)](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-final.png) 

    
- Repeat the above process to further update the os versions 

**Note: For 16.04 ubuntu user to upgrade to 20.04 version the above operations is done two times to reach destination version**  
