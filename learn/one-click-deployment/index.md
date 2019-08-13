---
title: "One-Click Deployment"
id: "one-click-deployment"
---

provides single-click app deployment to WaveMaker Demo cloud infrastructure. Using this option you can deploy your apps to cloud and make it public. This option is available only for Project Admins.

[![](../assets/deploy.png)](../assets/deploy.png)

apps under version control will be deployed. In case you have not pushed changes done to your app to VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

# to Cloud

apps will be hosted on WaveMaker Demo Cloud. The deployment configuration profile will be used for various service configurations within the app like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Profiles](http://[supsystic-show-popup id=109]) under Project Settings dialog, accessible from the Project Configurations.

the Deployment is complete, you can  [Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal) or view the deployed application.

\-deployment you have three further options:

1. the app - any redeployments will be directed to the same [(QA) phase](/learn/app-development/deployment/release-management/#working)
2. the deployed app
3. app - you can push the deployed app to live and other phases. This option will open [Portal](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app) page.

[![](../assets/cloud_postdeploy.png)](../assets/cloud_postdeploy.png)

Management >

9\. Deployment

- [9.1 One-Click Deployment](#)
    - [Overview](#)
    - [Deployment to Cloud](#cloud-deployment)
- 9.2 Release Management
    - [Overview](/learn/app-development/deployment/release-management/)
    - [Implementation](/learn/app-development/deployment/release-management/#working)
- 9.3 Manage Deployed Apps
    - [Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [AWS Deployment](/learn/app-development/deployment/deployment-to-aws/)
    - [Azure Deployment](/learn/app-development/deployment/deployment-to-azure/)
    - [Google Cloud Deployment](/learn/app-development/deployment/deployment-google-cloud/)
- 9.4 Deployment to Web Server
    - [Overview](/learn/app-development/deployment/deployment-web-server/#)
    - [WAR file generation](/learn/app-development/deployment/deployment-web-server/#war-file-generation)
    - [Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [Overview](/learn/app-development/deployment/configuration-profiles/)
    - [Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
