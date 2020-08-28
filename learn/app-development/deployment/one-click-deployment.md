---
title: "One-Click Deployment"
id: "one-click-deployment"
sidebar_label: "One-click Deployment"
---
---

One-click Deployment deploys an app to the cloud setup with just a single click. To deploy an app, you simply click the **Deploy** icon as shown in the image below.

:::note
Ensure to push your latest changes to VCS before **One-click deployment**. Also, if you are deploying the app for the first time, check the configuration profile settings. For more information, see [Deployment Overview](/learn/app-development/deployment/deployment-overview).
:::

[![deploy icon](/learn/assets/deploy.png)](/learn/assets/deploy.png)

Deployed apps host on WaveMaker [Demo](/learn/app-development/deployment/release-management#demo) cloud. To learn more, see [CI/CD Pipeline in WaveMaker](/learn/app-development/deployment/release-management).

## Deployment Flow

The Deployment runs in the background. You can choose to ‘close’ the Deployment progress dialog and continue working with Studio.

### Deployment Status

You can see the status of the deployment through the `toaster UI`. If you work on the same project, after the deployment, you get notified by an email.

### Deployment Progress

The progress of the Deployment is indicated by the change of deployment icon on the header as shown below, and by clicking the icon, you can see an option to **Check Deployment Status** allowing you to open the dialog again.

![deployment-status](/learn/assets/Check-deployment-status-Click-e1554896395542.png)

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

![cloud post deploy](/learn/assets/cloud_postdeploy.png)

## See Also

[One-click Deployment Flow](/learn/app-development/one-click-deployment-process)  
