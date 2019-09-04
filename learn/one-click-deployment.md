---
title: "One-Click Deployment"
id: ""
---

WaveMaker provides single-click app deployment to WaveMaker Demo cloud infrastructure. Using this option you can deploy your apps to cloud and make it public. This option is available only for Project Admins.

[![](./assets/deploy.png)](./assets/deploy.png)

Only apps under version control will be deployed. In case you have not pushed changes done to your app to VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

# Deployment to Cloud

Deployed apps will be hosted on WaveMaker Demo Cloud. The deployment configuration profile will be used for various service configurations within the app like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Configuration Profiles](http://[supsystic-show-popup id=109]) under Project Settings dialog, accessible from the Project Configurations.

Once the Deployment is complete, you can [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal) or view the deployed application.

Post-deployment you have three further options:

1. redeploy the app - any redeployments will be directed to the same [Demo (QA) phase](/learn/app-development/deployment/release-management/#working)
2. launch the deployed app
3. manage app - you can push the deployed app to live and other phases. This option will open [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app) page.

[![](./assets/cloud_postdeploy.png)](./assets/cloud_postdeploy.png)

Release Management >

9\. Deployment

- [9.1 One-Click Deployment](#)
    - [i. Overview](#)
    - [ii. Deployment to Cloud](#cloud-deployment)
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
- 9.4 Deployment to Web Server
    - [i. Overview](/learn/app-development/deployment/deployment-web-server/#)
    - [ii. WAR file generation](/learn/app-development/deployment/deployment-web-server/#war-file-generation)
    - [iii. Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [iv. Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [v. Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [vi. Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [i. Overview](/learn/app-development/deployment/configuration-profiles/)
    - [i. Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [ii. Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [iii. Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
