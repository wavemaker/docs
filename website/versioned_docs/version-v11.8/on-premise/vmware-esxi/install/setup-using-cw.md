---
title: "Setup Using ConfigPortal"
id: "setup-using-cw"
sidebar_label: "Setup Using ConfigPortal"
---
---

### WME Setup on ConfigPortal

- Open WaveMaker ConfigPortal by <http://Platform-Instance-IP:8080>
- Setup password for the WaveMaker setup portal. 
   - This password is system level. 
   - All command line operations are authenticated by this Password. 
   - Subsequent operations like upgrades needs this password.
- Password must contain 8-20 characters, with at least one lower case alphabet, one upper case alphabet, one digit and a special character (underscore(_), at(@), dot(.))

    [![setting up username and password](/learn/assets/wme-setup/wme-portal-setup/setting-username-and-password.png)](/learn/assets/wme-setup/wme-portal-setup/setting-username-and-password.png)

- Select the services required for the setup. Here, 
   - The Developer Studio Platform is a default service and it is responsible for the functionality of running the WaveMaker studio. 
   - The Deployments service can be disable if the developer want to use their own CI/CD pipeline to build and deploy their application. 
   - The Source Code Repo service can be disable if the developer have their own Git server.
     -  By default WaveMaker uses Gitlab as a Source Code Repo. 
   - The Monitoring serivice is responsible for monitoing the platform and Deployed apps. 
     - This can be disable if dont want to monitor the logs and metrics.

    [![select-services](/learn/assets/wme-setup/wme-portal-setup/select-services.png)](/learn/assets/wme-setup/wme-portal-setup/select-services.png)

- Setup domain by giving enterprise name and click on next. 
    - Enterprise Name is your enterprise name. 
    - Domain names are used to access studio and deployed apps by your developers. 
    - The Domain Names should be mapped in your DNS or developer host file.

    [![domain-setup](/learn/assets/wme-setup/wme-portal-setup/domain-setup.png)](/learn/assets/wme-setup/wme-portal-setup/domain-setup.png)

- To access the Platform with the secure connection via https, 
    - It is required to upload the ssl certificates by uploading the bundle certificate and pemfile.

    [![ssl for platform](/learn/assets/wme-setup/wme-portal-setup/ssl-for-platform.png)](/learn/assets/wme-setup/wme-portal-setup/ssl-for-platform.png)

    
- To trust internal CA certified SSL certificates for establishing a secure connection,
    - It is required to upload the root and intermediate certificates. 
    - The root certificate is a certificate issued by the recognised organizations.

    [![import-CA-cert](/learn/assets/wme-setup/wme-portal-setup/import-CA-cert.png)](/learn/assets/wme-setup/wme-portal-setup/import-CA-cert.png)

- To build the application inside a platform with a custom configuration,
    - A Developer can upload their own configured NPM and MAVEN repository config files and this can be useful if the developers uses their own libraries which are hosted into their own secured repository.

    [![repository configuration](/learn/assets/wme-setup/wme-portal-setup/repositoy-configuration.png)](/learn/assets/wme-setup/wme-portal-setup/repositoy-configuration.png)

- Create an admin user for WaveMaker launchpad access by providing an email address and password. 
    - These credentials are used to access launchpad and do adminstration of WME setup like adding users, setting up vcs, adding capacity etc.
    - Password must be highly recommending to contain 8-20 characters, with at least one lower case alphabet, one upper case alphabet, one digit and a special character (underscore(_), at(@), dot(.))
  
    [![creating admin user](/learn/assets/wme-setup/wme-portal-setup/creating-admin-user.png)](/learn/assets/wme-setup/wme-portal-setup/creating-admin-user.png)

- Installation may take 45 mins to 60 mins. Please wait and watch on this page for the status until it reached 100%.
    - You can watch the logs by selecting on the **GROUP NAME** and then by selecting the service.
    - You can also see the logs by selecting on the logs icon and also can download the logs.
  
    [![installation process](/learn/assets/wme-setup/wme-portal-setup/installation.png)](/learn/assets/wme-setup/wme-portal-setup/installation.png)

- Click on launchpad for further operations.
- Map <PLATFORM_IP> with the Domain name given in ur DNS or put an host entry in ur machine.
