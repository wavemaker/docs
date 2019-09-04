---
title: "Release Management"
id: ""
---

# Overview

**Release management** is a software engineering process intended to oversee the development, testing, deployment and support of software releases. Release Management aims to plan, schedule and control the movement of releases to test and live environments. Release Management also needs to ensure the delivery of new and enhanced app services required by the business, while protecting the integrity of existing services.

[![release_pipeline](./assets/release_pipeline.png)](./assets/release_pipeline.png)

A typical App life cycle involves various phases i.e. development, testing, and deployment before the App goes live. A **Deployment** or **Release Pipeline** involves setting up these phases to the respective teams in order to prepare the App for delivery. These multiple phases involve different roles within an App engineering team for successful App delivery:

1. _Dev_ - Used by the developers while building the app for testing the app.
2. _QA or Demo_ – Normally used for integration testing allowing collaborators to add their integration pieces or to do a demo of App to stakeholders or to get an approval of the App features. It can also be used for end-to-end testing of the app by the QA team, verifying feature completeness, run automated tests etc.
3. _Stage_ – Used for pre-live demos, approvals from business teams, performance & user acceptance testing (UAT).
4. _Live_ – The environment where the App is accessible to the end users.

Each App phase as depicted above requires its own infrastructure components to run the services, accessible to the different set of roles within the app development team. That is, each App phase requires different sets of configuration for databases, environment and varying sizing needs. These infrastructure needs are the responsibility of DevOps team and it is their responsibility to:

- set up an appropriate infrastructure for each phase,
- set roles and access to each phase,
- secure each phase,
- ensure the smooth transition of the project between phases with minimum app changes,
- control versioning during the transition.

# How WaveMaker Implements Release Management

WaveMaker **Release Pipeline **enables setting up the App deployment phases for easier delivery by leveraging Docker containerization. Setting up an App deployment phase requires:

- provisioning of infrastructure,
- installing the required software components,
- setting up the network,
- configuring the services, and
- scripts to automate the service startups and app deployment.

Release Pipeline combines the power of Docker-based WaveMaker Cloud to configure app deployment phases, cutting down on the work involved in DevOps and making the App Delivery rapid.

## Deployment Environment

All of the above-mentioned release management tasks are facilitated within WaveMaker through a **Deployment Environment**. A deployment environment is provisioned with all the required services, such as Web Services, database services, and the dependent services, for the application to be fully functional and available. Each deployment environment requires a bunch of containers to be provisioned and setup.

WaveMaker Platform offers a pre-defined set of App delivery phases which enables App progression through multiple phases. At each phase, App is accessible using a unique URL. Each App phase can be setup to use WaveMaker Cloud leveraging Docker containerization or for Stage and Live phases to run on a public cloud like AWS.

- _Demo (available as QA for WME users)_: This is the phase where the app gets deployed when you click Deploy from your Project Workspace. It uses the deployment configuration profile for the services set at the time of app development.
- _Stage (available only for WME users)_: This phase can be set up as per your app requirements. It needs to be configured from Apps Portal before the app can be deployed/pushed to this phase.
- _Live:_ This phase can be set up as per your app requirements and would ideally contain the live deployed app. It needs to be configured from Apps Portal before the app can be deployed/pushed.

With **one-click deployment**, **apps portal** and **versioning of deployed apps** the various aspects of Release Pipeline mentioned in the above sections are made simple and easy to implement.

**One-Click Deployment**

Using the Deploy option from Project Workspace, your app is deployed to WaveMaker Cloud (QA in WME). It takes care of the configuration for all required services needed for deployment to the Demo (QA) phase. [Know more](/learn/app-development/deployment/one-click-deployment/).

**Apps Portal**

Apps Portal provides a platform for the user to manage the deployed apps. By default two phases - Demo and Live are provided for any WaveMaker App. WME users can utilize an additional Stage phase. Each phase can have its own infrastructure and versioning. Before pushing deployed app to a phase, the phase configuration profiles can be set, else the profiles from the previous phase are retained. [Know more](/learn/app-development/deployment/manage-deployed-apps/).

**App Versioning**

Most app development is incremental in nature, i.e. different phases will be hosting the app in various levels of development. The developer will be working on the latest version, while Live version would be at least one step behind. In such cases versioning system comes in handy. In WaveMaker, the app in Demo phase will be the last version deployed from Studio. When pushing from Demo to other phases, you have the option to change the version for better tracking and control. [Know more](/learn/app-development/deployment/manage-deployed-apps/#push-to-live).

< One Click Deployment

Manage Deployed Apps >

9\. Deployment

- 9.1 One-Click Deployment
    - [i. Overview](/learn/app-development/deployment/one-click-deployment/)
    - [ii. Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- [9.2 Release Management](#)
    - [i. Overview](#)
    - [ii. Implementation](#working)
- 9.3 Manage Deployed Apps
    - [i. Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [ii. Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [iii. Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [iv. Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [v. App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [vi. AWS Deployment](/learn/app-development/deployment/deployment-to-aws/)
    - [vii. Azure Deployment](/learn/app-development/deployment/deployment-to-azure/)
    - [viii. Google Cloud Deployment](/learn/app-development/deployment/deployment-google-cloud/)
- 9.4 Deployment to Web Server
    - [i. Overview](/learn/app-development/deployment/deployment-web-server/#)
    - [ii. WAR file generation](/learn/app-development/deployment/deployment-web-server/#war-file-generation)
    - [iii. Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [iv. Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [v. Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [vi. Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [i. Overview](/learn/app-development/deployment/configuration-profiles/)
    - [i. Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [ii. Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [iii. Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
