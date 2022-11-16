---
title: "Setup Using ConfigPortal"
id: "setup-using-cw"
sidebar_label: "Setup Using ConfigPortal"
---
---

### WME Setup on ConfigPortal

- Open WaveMaker ConfigPortal by <http://Platform-Instance-IP:8080>
- Setup password for the WaveMaker setup portal. This password is system level. All command line operations are authenticated by this Password. Subsequent operations like upgrades needs this password.
- Password must contain 8-20 characters, with at least one lower case alphabet, one upper case alphabet, one digit and a special character (underscore(_), at(@), dot(.))

    [![setting up username and password](/learn/assets/wme-setup/wme-portal-setup/setting-username-and-password.png)](/learn/assets/wme-setup/wme-portal-setup/setting-username-and-password.png)

- Select the type of setup to start the installation, select type production.

    [![selecting the type of setup](/learn/assets/wme-setup/wme-portal-setup/type-of-setup.png)](/learn/assets/wme-setup/wme-portal-setup/type-of-setup.png)

- Setup domain by giving enterprise name and click on next. Enterprise Name is your enterprise name. Domains names are used to access studio and deployed apps by your developers. The Domain Names should be mapped in your DNS or developer host file.

    [![domain-setup](/learn/assets/wme-setup/wme-portal-setup/domain-setup.png)](/learn/assets/wme-setup/wme-portal-setup/domain-setup.png)

- Create an admin user for WaveMaker launchpad access by providing an email address and password. These credentials are used to access launchpad and do adminstration of WME setup like adding users, setting up vcs, adding capacity etc.
- Password must contain 8-20 characters, with at least one lower case alphabet, one upper case alphabet, one digit and a special character (underscore(_), at(@), dot(.))
  
    [![creating-admin-user](/learn/assets/wme-setup/wme-portal-setup/creating-admin-user.jpg)](/learn/assets/wme-setup/wme-portal-setup/creating-admin-user.jpg)

- Installation may take 45 mins to 60 mins. Please wait and watch on this page for the status until it reached 100%.
  
    [![installation process](/learn/assets/wme-setup/wme-portal-setup/installation.png)](/learn/assets/wme-setup/wme-portal-setup/installation.png)

- Bottom click on Upload the license key to apply the license. Upload license key file shared by WaveMaker team.

    [![apply-license](/learn/assets/wme-setup/wme-portal-setup/apply-license.jpg)](/learn/assets/wme-setup/wme-portal-setup/apply-license.jpg)

- Click on launchpad for further operations.
- Map <PLATFORM_IP> with the Domain name given in ur DNS or put an host entry in ur machine.
