---
title: "One-Click Deployment"
id: "one-click-deployment"
---
---

WaveMaker provides single-click app deployment to WaveMaker Demo cloud infrastructure. Using this option you can deploy your apps to cloud and make it public. This option is available only for Project Admins.

[![one click deployment to demo](/learn/assets/one-click-demo-deplyment.png)](/learn/assets/one-click-demo-deplyment.png)

Only apps under version control will be deployed. In case you have not pushed changes done to your app to VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

## Deployment Flow

The Deployment operation in the earlier version of WaveMaker was blocking users to further work on WM until the process completes. Thus, the users were not able to perform any operations at this stage. From WM 10.0, the flow does not block you to make an action. You can choose to ‘close’ the Deployment progress dialog and continue with operations if needed.

[![](/learn/assets/app-deployment-process.png)](/learn/assets/app-deployment-process.png)

The user keeps informed about the status of the deployment through the 'toaster UI'. If the user works on the same project, after the deployment, they get notified by an email.

## Deployment to Cloud

Deployed apps will be hosted on WaveMaker Demo Cloud. The deployment configuration profile will be used for various service configurations within the app like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/) under Project Settings dialog, accessible from the Project Configurations.

Once the Deployment is complete, you can [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal) or view the deployed application.

Post-deployment you have three further options:

1. redeploy the app - any redeployments will be directed to the same [Demo (QA) phase](/learn/app-development/deployment/release-management/#working)
2. launch the deployed app
3. manage app - you can push the deployed app to live and other phases. This option will open [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app) page.

[![](/learn/assets/manage-apps-for-other-deployments.png)](/learn/assets/manage-apps-for-other-deployments.png)

