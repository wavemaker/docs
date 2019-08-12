---
title: "Release Management"
date: "2016-11-10"
---

**management** is a software engineering process intended to oversee the development, testing, deployment and support of software releases. Release Management aims to plan, schedule and control the movement of releases to test and live environments. Release Management also needs to ensure the delivery of new and enhanced app services required by the business, while protecting the integrity of existing services.

[![release_pipeline](../assets/release_pipeline.png)](../assets/release_pipeline.png)

typical App life cycle involves various phases i.e. development, testing, and deployment before the App goes live. A   **Release Pipeline** involves setting up these phases to the respective teams in order to prepare the App for delivery. These multiple phases involve different roles within an App engineering team for successful App delivery:

1.  - Used by the developers while building the app for testing the app.
2. _or Demo_ – Normally used for integration testing allowing collaborators to add their integration pieces or to do a demo of App to stakeholders or to get an approval of the App features. It can also be used for end-to-end testing of the app by the QA team, verifying feature completeness, run automated tests etc.
3. – Used for pre-live demos, approvals from business teams, performance & user acceptance testing (UAT).
4. – The environment where the App is accessible to the end users.

App phase as depicted above requires its own infrastructure components to run the services, accessible to the different set of roles within the app development team. That is, each App phase requires different sets of configuration for databases, environment and varying sizing needs. These infrastructure needs are the responsibility of DevOps team and it is their responsibility to:

- up an appropriate infrastructure for each phase,
- roles and access to each phase,
- each phase,
- the smooth transition of the project between phases with minimum app changes,
- versioning during the transition.

# WaveMaker Implements Release Management

**Pipeline ** setting up the App deployment phases for easier delivery by leveraging Docker containerization. Setting up an App deployment phase requires:

- of infrastructure,
- the required software components,
- up the network,
- the services, and
- to automate the service startups and app deployment.

Pipeline combines the power of Docker-based WaveMaker Cloud to configure app deployment phases, cutting down on the work involved in DevOps and making the App Delivery rapid.

## Environment

of the above-mentioned release management tasks are facilitated within WaveMaker through a **Environment** A deployment environment is provisioned with all the required services, such as Web Services, database services, and the dependent services, for the application to be fully functional and available. Each deployment environment requires a bunch of containers to be provisioned and setup.

Platform offers a pre-defined set of App delivery phases which enables App progression through multiple phases. At each phase, App is accessible using a unique URL. Each App phase can be setup to use WaveMaker Cloud leveraging Docker containerization or for Stage and Live phases to run on a public cloud like AWS.

- _(available as QA for WME users)_: This is the phase where the app gets deployed when you click Deploy from your Project Workspace. It uses the deployment configuration profile for the services set at the time of app development.
- _(available only for WME users)_: This phase can be set up as per your app requirements. It needs to be configured from Apps Portal before the app can be deployed/pushed to this phase.
- _:_ This phase can be set up as per your app requirements and would ideally contain the live deployed app. It needs to be configured from Apps Portal before the app can be deployed/pushed.

**\-click deployment**, **portal** and **of deployed apps** the various aspects of Release Pipeline mentioned in the above sections are made simple and easy to implement.

**\-Click Deployment**

the Deploy option from Project Workspace, your app is deployed to WaveMaker Cloud (QA in WME). It takes care of the configuration for all required services needed for deployment to the Demo (QA) phase. [more](/learn/app-development/deployment/one-click-deployment/)

**Portal**

Portal provides a platform for the user to manage the deployed apps. By default two phases - Demo and Live are provided for any WaveMaker App. WME users can utilize an additional Stage phase. Each phase can have its own infrastructure and versioning. Before pushing deployed app to a phase, the phase configuration profiles can be set, else the profiles from the previous phase are retained. [more](/learn/app-development/deployment/manage-deployed-apps/)

**Versioning**

app development is incremental in nature, i.e. different phases will be hosting the app in various levels of development. The developer will be working on the latest version, while Live version would be at least one step behind. In such cases versioning system comes in handy. In WaveMaker, the app in Demo phase will be the last version deployed from Studio. When pushing from Demo to other phases, you have the option to change the version for better tracking and control. [more](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)

< One Click Deployment

Deployed Apps >

9\. Deployment

- 9.1 One-Click Deployment
    - [Overview](/learn/app-development/deployment/one-click-deployment/)
    - [Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- [9.2 Release Management](#)
    - [Overview](#)
    - [Implementation](#working)
- 9.3 Manage Deployed Apps
    - [Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [AWS Deployment](/learn/app-development/deployment/deployment-to-aws/)
    - [Azure Deployment](/learn/app-development/deployment/deployment-to-azure/)
    - [Google Cloud Deployment](/learn/app-development/deployment/deployment-google-cloud/)
- 9.4 Deployment to Web Server
    - [Overview](/learn/app-development/deployment/deployment-web-server/#)
    - [WAR file generation](/learn/app-development/deployment/deployment-web-server/#war-file-generation)
    - [Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/)
    - [Deployment to WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/)
    - [Deployment to JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/)
    - [Deployment to WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/)
- 9.5 Configuration Profiles
    - [Overview](/learn/app-development/deployment/configuration-profiles/)
    - [Development Profiles](/learn/app-development/deployment/configuration-profiles/#dev-profile)
    - [Deployment Profiles](/learn/app-development/deployment/configuration-profiles/#deploy-profile)
    - [Custom Profiles](/learn/app-development/deployment/configuration-profiles/#custom-profile)
