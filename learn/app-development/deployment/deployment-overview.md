---
title: "Deployment Overview"
id: ""
sidebar_label: "Overview"
---
---

WaveMaker provides a simple and easy-to-setup deployment process. As part of the process, One-click Deployment deploys an app to the WaveMaker Demo Cloud infrastructure with just a single click. 

![one-click deployment](/learn/assets/one-click-deployment.png)

This makes the deployed app public after a successful deployment. You can control these settings in the Config Profile to set who can access it.

:::important
One-click deployment is available for Project Admins only.
:::

With One-click Deployment, you can test or demo your application in the early stages of the development. Also in cases when you do not have to deploy the application to a private cloud provider or an on-premise environment to test application for small changes.

Further, you can automate the CI-CD pipelines to configure a private cloud. For example, AWS, Azure, GCP, Digital Ocean, or an on-premise environment like VMware or Hyper-V. For more information, see [WaveMaker Release Management](/learn/app-development/deployment/release-management).

![deploy to cloud](/learn/assets/deploy-to-cloud.png)

WaveMaker follows different app stages and the CI-CD pipeline process for WaveMaker Enterprise (WME) which consists of three stages with a click of a button; similarly, WaveMaker Online (WMO) consists of two stages. To learn more about how to configure these pipelines, see [Configure Pipeline for WME
](/learn/app-development/deployment/configure-pipelines) and [Configure Pipeline for WMO](/learn/app-development/deployment/default-pipelines).

## Deploying an App

Once you have developed an app, you can deploy your app by clicking on the **Deploy** icon. For more information about the deployment process, see [One-click Deployment](/learn/app-development/deployment/one-click-deployment).

![deploy icon](/learn/assets/deploy-app.png)

## Checks before deployment

Before deploying an app, you should check for the following steps to ensure the process-time and security settings are taken care of.

1. [Push to VCS](#push-to-vcs)
2. [Configure Profile Settings](/learn/app-development/deployment/configuration-profiles/)

:::note
Ensure to push your latest changes to VCS before **One-click deployment**. Also, if you are deploying the app for the first time, check the configuration profile settings.
:::

### Push to VCS

Apps are deployed only under the version control system. If you have not pushed your apps changes to the VCS, you will be prompted to do so. You cannot proceed with deployment until you commit your changes.

### Configuration profile settings

Deployment configuration profile uses various service configurations like the database, REST, SOAP, Web Socket, and Security. These settings can be modified from [Configuration Profiles](/learn/app-development/deployment/configuration-profiles/) under the **Project Settings** dialog. Check these settings before deploying an app.


