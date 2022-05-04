---
title: "Pipelines and Phases"
id: ""
sidebar_label: "Pipelines and Phases"
---
---

WaveMaker **Release Pipeline** enables setting up the App deployment phases for easier delivery by leveraging Docker containerization. Setting up an App deployment phase requires the following.

- Provisioning of the infrastructure
- Installing the required software components
- Setting up the network
- Configuring the services
- Scripts to automate the service startups and app deployment

Release Pipeline combines the power of Docker-based WaveMaker Cloud to configure app deployment phases cutting down on the work involved in DevOps and making the App Delivery rapid.

## Deployment Environment

All of the above-mentioned release management tasks are facilitated within WaveMaker through a **Deployment Environment**. A deployment environment is provisioned with all the required services, such as Web Services, database services, and the dependent services, for the application to be fully functional and available. Each deployment environment requires a bunch of containers to be provisioned and setup.

WaveMaker Platform offers a pre-defined set of App delivery phases which enables App progression through multiple phases. At each phase, App is accessible using a unique URL. Each App phase can be setup to use WaveMaker Cloud leveraging Docker containerization or for Stage and Live phases to run on a public cloud like AWS.

:::note
For WME, [Configure Pipeline](learn/on-premise/configure/config-pipeline) before doing deploying an app. For WMO, use [WaveMaker Inbuilt Pipeline](/learn/app-development/deployment/default-pipelines) configuration with default phases including **Demo** and **Live**.
:::

### SSL Enabled Demo Cloud

Demo and QA deployments in WaveMaker use secure protocol HTTPS, which is SSL enabled, and therefore, the app is accessible with a URL pattern as follows. 

**SILO workspace (WMO Personal workspace)**

URL: `http://cloud.wavemakeronline.com/pk8888888n45/TestApp`  

:::note
In the URL, `pk8888888n45` is a Project key.
:::

**Teams and Enterprise (WMO/WME)**

URL: `http://cloud.wavemakeronline.com/wmshowcase/TestApp`  

:::note
`wmshowcase` is the WaveMaker Online team's name and WaveMaker Enterprise's name in the URL.
:::

## WaveMaker Online (WMO)

### Demo

This is the phase where the app gets deployed when you click **Deploy** from your Project Workspace. It uses the deployment configuration profile for the services set at the time of app development.

### Live

This phase can be set up as per your app requirements and would ideally contain the live deployed app. It needs to be configured from **Apps Portal** before the app can be deployed or pushed.

## WaveMaker Enterprise (WME)

### QA

This is the phase where the app gets deployed when you click **Deploy** from your Project Workspace. It uses the deployment configuration profile for the services set at the time of app development.

### Stage

This phase can be set up as per your app requirements. It needs to be configured from Apps Portal before the app can be deployed/pushed to this phase.

### Live

This phase can be set up as per your app requirements and would ideally contain the live deployed app. It needs to be configured from **Apps Portal** before the app can be deployed or pushed.

:::tip
With **one-click deployment**, **apps portal** and **versioning of deployed apps** the various aspects of the release pipeline specified in the above sections are made simple and easy to implement.
:::

## One-Click Deployment

Using the Deploy option from Project Workspace, your app is deployed to WaveMaker Cloud. It takes care of the configuration for all the required services needed for deploying to the Demo or the QA phase. For more information, see [One-click Deployment](/learn/app-development/deployment/one-click-deployment/).

## Apps Portal

Apps Portal provides a platform to manage the deployed apps. By default, there are two phases - Demo and Live. These are provided for any WaveMaker app. WME users can utilize an additional Stage phase. Each phase can have its own infrastructure and versioning configuration. Before pushing the deployed app to the next phase, the phase configuration profiles can be set, or else the profiles from the previous phase are retained. For more information, see [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal).

## App Versioning

Most app development is incremental which means different phases will be hosting the app in various levels of the development. The developer will be working on the latest version, while the **Live** version would be at least one step behind. In such cases, the versioning system comes in handy. 

In WaveMaker, the app in the **Demo** phase will be the last version deployed from the Studio. When pushing from **Demo** to other phases, you have the option to change the version for better tracking and control of the system. 

For more information, see [App Versioning](/learn/app-development/deployment/manage-deployed-apps/#app-versioning).
