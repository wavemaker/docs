---
title: "Deployment Overview"
id: ""
sidebar_label: "Overview"
---
---

WaveMaker provides a quick and easy-to-deploy solution. With One-click Deployment, you can deploy an app to the WaveMaker Demo Cloud infrastructure with just a single click.

![one-click deployment](/learn/assets/one-click-deployment.png)

## One-click Deployment

Before you deploy an app, ensure the build and the application security settings are properly configured.

1. [Configure Profile Settings](/learn/app-development/deployment/configuration-profiles/)
2. [Push to VCS](/learn/app-development/deployment/one-click-deployment#push-to-vcs)

To deploy an app, click the **Deploy** icon; it will start the One-click deployment process. The deployments initiates to [check for errors](/learn/app-development/dev-integration/inspection-framework) in the application; After [successfully deploying](/learn/app-development/deployment/one-click-deployment#deployment-flow) with the single click, the app can be accessed via a "demo" URL.


![deploy icon](/learn/assets/deploy-app.png)

:::important
One-click deployment is available for Project Admins only.
:::

With One-click Deployment, you can test or demo your application in the early stages of the development when the application is not ready to deploy to a private cloud, or an on-premise environment.

For more information, see [step-by-step instructions for One-click Deployment](/learn/app-development/deployment/one-click-deployment).

## CI CD Pipelines

You can automate the CI-CD pipelines to configure a private cloud. For example, AWS, Azure, GCP, Digital Ocean, or an on-premise environment like VMware or Hyper-V. To learn more about configuring your application to a CI-CD pipeline, see [WaveMaker Release Management](/learn/app-development/deployment/release-management).

![deploy to cloud](/learn/assets/deploy-to-cloud.png)

There are different stages for the CI-CD pipeline process depending on the [WaveMaker Studio Editions](/learn/documentation-reference#wavemaker-studio-editions). 

### WaveMaker Enterprise

WaveMaker Enterprise (WME) consists of the following three stages.

1. QA 
2. Stage
3. Live

To learn more about how to configure these pipelines, see [Configure Pipeline for WME
](/learn/app-development/deployment/configure-pipelines).

### WaveMaker Online

WaveMaker Online (WMO) consists of the following two stages. 

1. QA
2. Live

To learn more about how to configure these pipelines, see [Configure Pipeline for WMO](/learn/app-development/deployment/default-pipelines).

