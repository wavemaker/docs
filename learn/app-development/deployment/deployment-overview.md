---
title: "Deployment Overview"
id: ""
sidebar_label: "Overview"
---
---

WaveMaker provides a quick and easy-to-deploy solution. You can deploy an app to the WaveMaker Demo Cloud infrastructure with just a single click.

![one-click deployment](/learn/assets/one-click-deployment.png)

## One-click Deployment

![deploy icon](/learn/assets/deploy-app.png)

With One-click Deployment, you can test or demo your application in the early stages of the development when the application is not ready to deploy to a private cloud, or an on-premise environment.

:::important
One-click deployment is available for Project Admins only.
:::

For more information, see [step-by-step instructions for One-click Deployment](/learn/app-development/deployment/one-click-deployment).

## CI CD Pipelines

WaveMaker Release Pipeline enables setting up the App deployment phases for easier delivery by leveraging Docker containerization. Setting up an App deployment phases. There are different stages for the CI-CD pipeline process depending on the [WaveMaker Studio Editions](/learn/documentation-reference#wavemaker-studio-editions). 

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
2. Stage
3. Live

To learn more about how to configure these pipelines, see [Configure Pipeline for WMO](/learn/app-development/deployment/default-pipelines).


### Automatation

Automate the CI-CD pipelines to configure a private cloud. For example, AWS (Amazon Web Services), Azure, GCP (Google Cloud Provider), Digital Ocean, or an on-premise environment like VMware or Hyper-V. To learn more about configuring your application to a CI-CD pipeline, see [WaveMaker Release Management](/learn/app-development/deployment/release-management).

![deploy to cloud](/learn/assets/deploy-to-cloud.png)


