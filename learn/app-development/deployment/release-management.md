---
title: "Release Management"
id: ""
---
---

**Release management** is a software engineering process for managing the application development, testing, deployment, and support of the application version release. Release Management helps you to plan, schedule, and control the movement of releases to test and live environments. It ensures the delivery of the new enhanced app services while also protecting the integrity of the existing services.

[![release_pipeline](/learn/assets/release_pipeline.png)](/learn/assets/release_pipeline.png)

A typical app life cycle involves various phases including development, testing, and deployment before the App is live. A **Deployment** or **Release Pipeline** requires setting up these phases to the respective teams to prepare the app for the delivery process.

The following phases involve different roles within an app engineering team for successful app delivery.

1. **Dev** - Used by the developers while building the app for testing.
2. **QA or Demo** – Normally used for integrating test cases allowing collaborators to add their integration pieces or to do a demo of an app to stakeholders or to get an approval of the application features. It can also be used for end-to-end testing of the app by the QA team, verifying feature completeness, run automated tests and more.
3. **Stage** – Used for pre-live demos, approvals from business teams, performance and User Acceptance Testing (UAT).
4. **Live** – The environment where the App is accessible to the end-users.

Each App phase as depicted above requires its own infrastructure components to run the services accessible to the different roles within the app development team. That is, each App phase requires different configuration for databases, environment, varying sizing needs, and more. These infrastructure needs are the responsibility of the DevOps team; therefore, it is their responsibility to set the following requirements.

- Set up an appropriate infrastructure for each phase
- Set roles and have access to each phase
- Secure each phase
- Ensure the smooth transition of the project between phases with minimum app changes
- Control versioning during the transition

## How WaveMaker Implements Release Management

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

### Demo

***Available as QA for WME users***

This is the phase where the app gets deployed when you click **Deploy** from your Project Workspace. It uses the deployment configuration profile for the services set at the time of app development.

### Stage

***Available only for WME users***

This phase can be set up as per your app requirements. It needs to be configured from Apps Portal before the app can be deployed/pushed to this phase.

### Live

This phase can be set up as per your app requirements and would ideally contain the live deployed app. It needs to be configured from **Apps Portal** before the app can be deployed or pushed.

With **one-click deployment**, **apps portal** and **versioning of deployed apps** the various aspects of release pipeline specified in the above sections are made simple and easy to implement.

## One-Click Deployment

Using the Deploy option from Project Workspace, your app is deployed to WaveMaker Cloud (QA in WME). It takes care of the configuration for all the required services needed for deploying to the Demo (QA) phase. For more infomation, see [One-click Deployment](/learn/app-development/deployment/one-click-deployment/).

## Apps Portal

Apps Portal provides a platform to manage the deployed apps. By default, there are two phases - Demo and Live. These are provided for any WaveMaker app. WME users can utilize an additional Stage phase. Each phase can have its own infrastructure and versioning configuration. Before pushing the deployed app to the next phase, the phase configuration profiles can be set, or else the profiles from the previous phase are retained. For more information, see [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal).

## App Versioning

Most app development is incremental in nature, i.e. different phases will be hosting the app in various levels of development. The developer will be working on the latest version, while the **Live** version would be at least one step behind. In such cases, versioning system comes in handy. In WaveMaker, the app in the Demo phase will be the last version deployed from the Studio. When pushing from Demo to other phases, you have the option to change the version for the better tracking and control of the system. For more information, see [App Versioning](/learn/app-development/deployment/manage-deployed-apps/#app-versioning).
