---
title: "One-Click Deployment"
id: "one-click-deployment"
sidebar_label: "Overview"
---
---

WaveMaker provides single-click app deployment to WaveMaker Demo cloud infrastructure. Using this option you can deploy your apps to cloud and make it public. This option is available only for Project Admins.

## Checks before deployment

Deployed apps will be hosted on WaveMaker [Demo](/learn/app-development/deployment/release-management#demo) cloud. For more information, see [CI/CD Pipeline in WaveMaker](/learn/app-development/deployment/release-management).

### Configuration profile settings

Deployment configuration profile uses various service configurations like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/) under the **Project Settings** dialog. Check these settings before deploying an app.

[![](/learn/assets/deploy.png)](/learn/assets/deploy.png)

### Push to VCS

Only apps under version control will be deployed. In case you have not pushed changes done to your app to VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

## Deployment Flow

The Deployment is runs in the background. You can choose to ‘close’ the Deployment progress dialog and continue with operations if needed.

### Deployment Status

The user keeps informed about the status of the deployment through the `toaster UI`. If the user works on the same project, after the deployment, they get notified by an email.

### Deployment Progress

The progress of the Deployment is indicated by the change of deployment icon on the header as shown below, and by clicking the icon, you can see an option to **Check Deployment Status** allowing you to open the dialog again.

[![](/learn/assets/Check-deployment-status-Click-e1554896395542.png)](/learn/assets/Check-deployment-status-Click-e1554896395542.png)

### Deployment Failed

If the deployment fails, you can fix the code errors by using [Inspection Framework](/learn/app-development/dev-integration/inspection-framework) and [redeploy](#redeploy) the app.

![deploy failed](/learn/assets/deploy-failed.png)

### Deployment Success

Once the Deployment is complete, you can [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal), or **View the Deployed App**.

![Deployment-flow-changes](/learn/assets/Deployment-flow-changes.png)

## Deployment to Cloud

After the deployment, you can perform the following three actions.

### Redeploy

You can redeploy the app if needed. Any redeployments will be directed to the [Demo (QA) phase](/learn/app-development/deployment/release-management/#demo).

### Launch Deployed App

Launches the app in a browser.

### Manage App

You can push the deployed app to live and other phases. This option opens the [Apps Portal](/learn/app-development/deployment/manage-deployed-apps#deployed-apps-management) page.

[![](/learn/assets/cloud_postdeploy.png)](/learn/assets/cloud_postdeploy.png)

