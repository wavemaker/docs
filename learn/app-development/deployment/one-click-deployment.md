---
title: "One-Click Deployment"
id: "one-click-deployment"
sidebar_label: "One-click Deployment"
---
---

One-click Deployment deploys an app to the cloud setup with just a single click which deploys to the WaveMaker demo cloud. Before you deploy an app, you should ensure the build and the application security settings are properly configured by following the below two checks.

1. [Configure Deployment Profile](/learn/app-development/deployment/deployment-profile/)
2. [Push to VCS](#push-to-vcs)

## Configure Deployment Profile

Deployment configuration profile uses various service configurations like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Deployment Profile](/learn/app-development/deployment/deployment-profile/) under the **Project Settings** dialog. Check these settings before deploying an app.

## Push to VCS

Apps are deployed only under the version control system. If you have not pushed your apps changes to the VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

## Deploying an App

By clicking on the **Deploy** icon; it initiates the deployment process and starts [checking for errors](/learn/app-development/dev-integration/inspection-framework) in the application.

[![deploy icon](/learn/assets/deploy.png)](/learn/assets/deploy.png)

:::note
Ensure to push your latest changes to VCS before **One-click deployment**. Also, if you are deploying the app for the first time, check the configuration profile settings. For more information, see [Deployment Overview](/learn/app-development/deployment/configuration-profiles).
:::

## Deployment Flow

Once you initiate the deployment, the deployment runs in the background. You can choose to **close** the Deployment progress dialog and continue working with Studio.

### Deployment Status

You can see the status of the deployment through the `toaster UI`. If you work on the same project, after the deployment, you get notified by an email.

### Deployment Progress

The progress of the Deployment is indicated by the change of deployment icon on the header as shown below, and by clicking the icon, you can see an option to **Check Deployment Status** allowing you to open the dialog again.

![deployment-status](/learn/assets/Check-deployment-status-Click-e1554896395542.png)

### Deployment Failed

If the deployment fails, you can fix the code errors by using [Inspection Framework](/learn/app-development/dev-integration/inspection-framework) and [redeploy](#redeploy) the app.

![deploy failed](/learn/assets/deploy-failed.png)

### Deployment Success

After [successfully deployment](/learn/app-development/deployment/one-click-deployment#deployment-flow), you can access the app via the application demo URL. Deployed apps host on WaveMaker [Demo](/learn/app-development/deployment/release-management#demo) cloud. You can [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/#apps-portal), or **View the Deployed App**. To further configure release pipelnes, see [CI/CD Pipeline in WaveMaker](/learn/app-development/deployment/release-management).

![Deployment-flow-changes](/learn/assets/Deployment-flow-changes.png)

## Deployment to Cloud

After the deployment, you can perform the following three actions.

### Redeploy

You can redeploy the app if needed. Any redeployments will be directed to the [Demo (QA) phase](/learn/app-development/deployment/release-management/#demo).

### Launch Deployed App

Launches the app in a browser.

### Manage App

You can push the deployed app to live and other phases. This option opens the [Apps Portal](/learn/app-development/deployment/manage-deployed-apps#deployed-apps-management) page.

![cloud post deploy](/learn/assets/cloud_postdeploy.png)

## See Also

[One-click Deployment Flow](/learn/app-development/one-click-deployment-process)  
