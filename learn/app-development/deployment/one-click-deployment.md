---
title: "One-Click Deployment"
id: "one-click-deployment"
---
---

WaveMaker provides single-click app deployment to WaveMaker Demo cloud infrastructure. Using this option you can deploy your apps to cloud and make it public. This option is available only for Project Admins.

[![](/learn/assets/deploy.png)](/learn/assets/deploy.png)

Only apps under version control will be deployed. In case you have not pushed changes done to your app to VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

## Deployment Flow

The Deployment operation in the earlier version of WaveMaker was blocking users to further work on WM until the process completes. Thus, the users were not able to perform any operations at this stage. From WM 10.0, the flow does not block you to make an action. You can choose to ‘close’ the Deployment progress dialog and continue with operations if needed.

[![](/learn/assets/Deployment-flow-changes.png)](/learn/assets/Deployment-flow-changes.png)

The user keeps informed about the status of the deployment through the 'toaster UI'. If the user works on the same project, after the deployment, they get notified by an email.

The progress of the Deployment is indicated by the change of Deployment Icon on the header as shown below, and by clicking the icon, you can see an option to ‘Check Deployment Status’ by opening the dialog again.

[![](/learn/assets/Check-deployment-status-Click-e1554896395542.png)](/learn/assets/Check-deployment-status-Click-e1554896395542.png)

![deploy failed](/learn/assets/deploy-failed.png)

If the deployment fails, you can fix the code errors using [inspection framework](/learn/app-development/dev-integration/inspection-framework) and redeploy the app in the same way.


## Deployment to Cloud

Deployed apps will be hosted on WaveMaker Demo Cloud. The deployment configuration profile will be used for various service configurations within the app like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/) under Project Settings dialog, accessible from the Project Configurations.

Once the Deployment is complete, you can [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal) or view the deployed application.

Post-deployment you have three further options:

1. redeploy the app - any redeployments will be directed to the same [Demo (QA) phase](/learn/app-development/deployment/release-management/#working)
2. launch the deployed app
3. manage app - you can push the deployed app to live and other phases. This option will open [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app) page.

[![](/learn/assets/cloud_postdeploy.png)](/learn/assets/cloud_postdeploy.png)

