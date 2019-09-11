---
title: "Deployment to Web Server"
id: ""
---

Applications built with WaveMaker can be deployed to a number of environments. In this document, we walk through the process of WaveMaker app deployment to Web Server.

1. You will need a valid Web Server installation. The following is a list of Web Servers where the WaveMaker apps can be deployed. **Note: This list is for reference purpose. Apart from these, you can use any standard Java Web Server running on JDK 1.8 and Servlet Framework version 3.1.**
    
    | **Web Server** | **Version** | **Instructions** |
    | --- | --- | --- |
    | [![](/learn/assets/tomcat.jpg)](/learn/assets/tomcat.jpg) | 8.x | [deployment instructions](/learn/how-tos/wavemaker-application-deployment-tomcat/) |
    | 9.x |
    | [![](/learn/assets/websphere.png)](/learn/assets/websphere.png) | 17.0.0.2 Liberty | [deployment instructions](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/) |
    | [![](/learn/assets/jboss.png)](/learn/assets/jboss.png) | WildFly 10.0 | [deployment instructions](/learn/how-tos/wavemaker-application-deployment-jboss/) |
    | WildFly 11.0 |
    | [![](/learn/assets/weblogic.png)](/learn/assets/weblogic.png) WebLogic | 12c (12.2.1) | [deployment instructions](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/) |
    
2. You need to set up the **configuration profile** - you can choose to use the [default profile](/learn/app-development/deployment/configuration-profiles/) configured by WaveMaker based upon the services incorporated within the app or build a [custom profile](/learn/app-development/deployment/configuration-profiles/#custom-profile) as per your needs
3. You need to generate a **WAR file** of the WaveMaker app you want to deploy. WAR file can be generated either by
    - using **Export** -> **Project as WAR** option, or
    - use **Export** -> **Project as ZIP** and use this file to generate WAR file through [Maven Build](https://maven.apache.org/) **Note**: For deployment to WebSphere (for apps with JNDI profile) and to WebLogic there is a pre-processing needed before generating the war file, check the corresponding deployment instructions before proceeding. [![](/learn/assets/deploy_web.png)](/learn/assets/deploy_web.png)
4. Once a WAR file is generated, deploy the same to [Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/), [JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/), [WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/), or [WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/) following the instructions that are given.
    
    Alternatively, the WAR file may also be deployed to public or private cloud servers. To deploy an application to one of the supported clouds you will need to:
    
    - Acquire an account (public cloud) or install the software (private cloud)
    - Create a cloud instance - a virtual machine with a standard operating system
    - Install a Java web server - for example, Tomcat
    - Deploy the WaveMaker WAR to the Java web server
    
    **Note**: Instead of above steps you can instantly deploy to Amazon Web Service or to WaveMaker Demo Cloud with just a single click. [Learn about one-click deployment](/learn/app-development/deployment/one-click-deployment/).
    

< Manage Deployed Apps

Deployment to Tomcat >

Deployment to WebSphere >

Deployment to JBoss >

Deployment to WebLogic >

Configuration Profile >

9\. Deployment

- 9.1 One-Click Deployment
    - [i. Overview](/learn/app-development/deployment/one-click-deployment/)
    - [ii. Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- 9.2 Release Management
    - [i. Overview](/learn/app-development/deployment/release-management/)
    - [ii. Implementation](/learn/app-development/deployment/release-management/#working)
- 9.3 Manage Deployed Apps
    - [i. Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [ii. Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [iii. Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [iv. Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [v. App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [vi. AWS Deployment](/learn/app-development/deployment/deployment-to-aws/)
    - [vii. Azure Deployment](/learn/app-development/deployment/deployment-to-azure/)
    - [viii. Google Cloud Deployment](/learn/app-development/deployment/deployment-google-cloud/)
- [9.4 Deployment to Web Server](#)
    - [i. Overview](#)
    - [ii. WAR file generation](#war-file-generation)
    - [iii. Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [iv. Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [v. Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [vi. Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [i. Overview](/learn/app-development/deployment/configuration-profiles/)
    - [i. Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [ii. Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [iii. Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
