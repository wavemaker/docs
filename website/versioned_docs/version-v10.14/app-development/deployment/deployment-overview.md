---
title: "Deployment Overview"
id: "deployment-overview"
sidebar_label: "Overview"
---
---

WaveMaker provides a quick and easy-to-deploy solution. You can deploy an app to the WaveMaker Demo Cloud infrastructure with just a single click.

![one-click deployment](/learn/assets/one-click-deployment.png)

## One-click Deployment

![deploy icon](/learn/assets/deploy-app.png)

With One-click Deployment, you can test or demo your application in the early stages of the development. Also, this is the first step to deploy an application to the cloud when your app is in the process of setting up a private cloud or an on-premise environment.

:::important
One-click deployment is available for Project Admins only.
:::

For more information, see [step-by-step instructions for One-click Deployment](/learn/app-development/deployment/one-click-deployment).

## CI-CD Pipelines

WaveMaker release pipeline enables you to setup application deployment phases for easy delivery of CI-CD process by leveraging Docker containerization. There are different stages for the release management process depending on the [WaveMaker Studio Editions](/learn/documentation-reference#wavemaker-studio-editions). 

### WaveMaker Enterprise

WaveMaker Enterprise (WME) consists of the following three stages.

1. QA
2. Stage
3. Live

To learn more about how to configure these pipelines, see [Configure Pipeline for WME
](/learn/app-development/deployment/configure-pipelines).

### WaveMaker Online

WaveMaker Online (WMO) consists of the following three stages.

1. Demo
2. Live

To learn more about how to configure these pipelines, see [Configure Pipeline for WMO](/learn/app-development/deployment/default-pipelines).

### Automatation

Automate the CI-CD pipelines to configure a private cloud provider, including AWS (Amazon Web Services), Azure, GCP (Google Cloud Provider), Digital Ocean, and on-premise environments like VMware or Hyper-V. To learn more about configuring your application to a CI-CD pipeline, see [WaveMaker Release Management](/learn/app-development/deployment/release-management).

![deploy to cloud](/learn/assets/deploy-to-cloud.png)
