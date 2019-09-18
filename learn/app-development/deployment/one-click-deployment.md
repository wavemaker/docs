---
title: "One-Click Deployment"
id: "one-click-deployment"
---
---

WaveMaker provides single-click app deployment to WaveMaker Demo cloud infrastructure. Using this option you can deploy your apps to cloud and make it public. This option is available only for Project Admins.

[![](/learn/assets/deploy.png)](/learn/assets/deploy.png)

Only apps under version control will be deployed. In case you have not pushed changes done to your app to VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

# Deployment to Cloud

Deployed apps will be hosted on WaveMaker Demo Cloud. The deployment configuration profile will be used for various service configurations within the app like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Configuration Profiles](http://[supsystic-show-popup id=109]) under Project Settings dialog, accessible from the Project Configurations.

Once the Deployment is complete, you can [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal) or view the deployed application.

Post-deployment you have three further options:

1. redeploy the app - any redeployments will be directed to the same [Demo (QA) phase](/learn/app-development/deployment/release-management/#working)
2. launch the deployed app
3. manage app - you can push the deployed app to live and other phases. This option will open [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app) page.

[![](/learn/assets/cloud_postdeploy.png)](/learn/assets/cloud_postdeploy.png)

