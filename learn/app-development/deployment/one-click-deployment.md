---
title: "One-Click Deployment"
id: "one-click-deployment"
sidebar_label: "Overview"
---
---

One-click Deployment deploys an app to the cloud setup with just a single click. It deploys an app to the WaveMaker Demo cloud infrastructure to make the app public. You can further configure a private cloud with CI-CD pipelines in the next steps.

With One-click Deployment, you can test or demo your application in the early stages of development, or also when you do not necessarily have to deploy the application to a private cloud provider or an on-premise environment for every small change.

:::note
One-click deployment is available for Project Admins only.
:::

WaveMaker apps follow a different deployment process for WaveMaker Enterprise (WME) and WaveMaker Online (WMO).

For more information about deploying to WaveMaker demo cloud using one-click deployment, see [WaveMaker Demo Cloud](/learn/app-development/deployment/release-management#demo).



## How it works

There are a few steps to follow before you get started with one-click deployment.


## Checks before deployment

Deployed apps host on WaveMaker [Demo](/learn/app-development/deployment/release-management#demo) cloud. For more information, see [CI/CD Pipeline in WaveMaker](/learn/app-development/deployment/release-management).

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

