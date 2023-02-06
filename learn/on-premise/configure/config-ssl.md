---
title: "WaveMaker Enterprise Configure SSL for Platform"
id: "config-ssl"
sidebar_label: "Configure SSL"
---
---

Follow below steps to Configure SSL for Platform to access Studio with https.

To start this process you need 3 files.

- crt file
- private key file
- bundle file

If you have .pem file, you can extract these files from pem file.

### Upload files during the setup process

- While configuring the setup during the ConfigWizard process you can directly upload the bundle certificate and pemfile from this setp number 3.

[![ssl for platform](/learn/assets/wme-setup/wme-portal-setup/ssl-for-platform.png)](/learn/assets/wme-setup/wme-portal-setup/ssl-for-platform.png)


### Upload files from the configwizard

- Alternatively, ConfigWizard allows you to upload the required certifiacates if you have missed to upload during setup process. 

- Login into the CW portal, after login in home page you can see settings icon on the top right as marked below.
    
    [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop-settings.png)](/learn/assets/wme-setup/upgrade-wme-setup/cw-stop-settings.png) 

- Navigate to **Update SSL Certificates** and Upload your certs.

    [![cw_stop](/learn/assets/wme-setup/upgrade-wme-setup/Update-SSL-Cert.png)](/learn/assets/wme-setup/upgrade-wme-setup/Update-SSL-Cert.png)


### Access Studio using https

- ```https://<DOMAIN_NAME>/```
