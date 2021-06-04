---
title: "Ubuntu OS Upgrade"
id: ""
sidebar_label: "Ubuntu Upgrade"
---
---

## Verifying OS version before Update

- Before Upgrading OS we can check the present OS version and release details by executing the following command 

```bash
cat /etc/os-release
```

[![get os version](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-initial.png)](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-initial.png) 

## APT commands for Upgrade existing system

- Use the following apt command or apt-get command to upgrade existing packages in the system 

```bash
apt update && sudo apt upgrade
```

[![Apt commands](/learn/assets/wme-setup/upgrade-wme-setup/apt-update-upgrade-commands.png)](/learn/assets/wme-setup/upgrade-wme-setup/apt-update-upgrade-commands.png)

## Reboot the system

- You have to reboot the system if kernel was updated, it can be done by executing the following command 

```bash
reboot
``` 

## Stop Docker service in the system

- After reboot is completed it is recommended to stop docker service before proceeding to updation, you can execute the below command to stop docker service

```bash
service docker stop
```

## Upgrade the Ubuntu Operating System

- Upgrade the Ubuntu operating system to the next available release version by executing the following command

```bash
do-release-upgrade
```

[![do upgrade](/learn/assets/wme-setup/upgrade-wme-setup/do-release-upgrade.png)](/learn/assets/wme-setup/upgrade-wme-setup/do-release-upgrade.png)

   - Open ssh port 1022 or use the prompted port, this will allow user to connect to the instance using ssh through this port in case of disaster

     [![SSH port](/learn/assets/wme-setup/upgrade-wme-setup/ssh-port-allocate.png)](/learn/assets/wme-setup/upgrade-wme-setup/ssh-port-allocate.png)

   - We have to follow on-screen instructions for upgrade, during this you might be asked to replace existing grub or ssh config file. Select **keep the local version currently installed** to avoid further complications

     [![Grub update](/learn/assets/wme-setup/upgrade-wme-setup/grub-update.png)](/learn/assets/wme-setup/upgrade-wme-setup/grub-update.png)

   - You will see this message **System upgrade is complete** and will ask to restart the system, proceed with restart

     [![Sucess Restart](/learn/assets/wme-setup/upgrade-wme-setup/success-restart.png)](/learn/assets/wme-setup/upgrade-wme-setup/success-restart.png)

- After Upgrade check the updated OS version and release details by entering the following command  

```bash
cat /etc/os-release
```
[![get os version final](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-final.png)](/learn/assets/wme-setup/upgrade-wme-setup/get-os-details-final.png) 

    
- Repeat the above process for upgrading to next available OS versions 

**Note: For a user to upgrade from Ubuntu 16.04 to Ubuntu 20.04 version the above operations has to be done in two steps to reach the desired version**
