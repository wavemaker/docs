---
title: "Manage Deployed Apps"
id: ""
---
---

WaveMaker **Apps Portal** is a place for you as the project owner to manage the deployed apps. The one-click deployment from Studio hosts the app on WaveMaker Demo Cloud using the [Deployment Profile](/learn/app-development/deployment/configuration-profiles/). Apps Portal will enable the project owner to configure phases and push the apps from one phase to the next. From this portal you can:

1. Configure the deployment environment for each phase - Demo,Stage (WME) and Live. The configurations involves setting the various services like Database, Web Services, Security, REST Services
2. Push the app from one phase to another without the need to modify the app. Push will deploy the app into the new deployment environment. A separate URL is generated for each phase. You can version the apps for easy tracking.

## Apps Portal

You can access the Apps Portal in two ways:

1. By selecting **Manage Deployed Apps** button from the Project Dashboard,
2. By using the **Manage App** option under Deploy from the Project Workspace Main Menu - this will open the app for management.

### Manage Deployed Apps

[![](/learn/assets/ap_opt1.png)](/learn/assets/ap_opt1.png)

By selecting **Manage Deployed Apps** button from the Project Dashboard, you will see a list of deployed apps.

[![](/learn/assets/apps_portal.png)](/learn/assets/apps_portal.png)

- one the right side you can find
    - the total number of apps owned by you that can be deployed;
    - number of apps deployed in Demo and Live Phases;
    - recent deployment activity
- you will also find cards for the deployed apps,
    - the last deployment activity for that app,
    - if live, the version that is live and the date it was deployed to live
- you can select any app from the listing for management for more details.[know more](#manage-deployed-app).

### Manage App

By using the **Manage App** option under Deploy from the Project Workspace Main Menu - this will open the app for management. 

:::note
This option will be available only for deployed apps.
:::

[![](/learn/assets/ap_opt2.png)](/learn/assets/ap_opt2.png)

## Manage Deployed App

Selecting an app from the App Portal or Manage App from Project Workspace will give you the details about the app. You can view the deployed app details.

[![](/learn/assets/details-of-managed-apps.png)](/learn/assets/details-of-managed-apps.png)

user can perform operation on the databse using DB shell provided by wavemaker
[![](/learn/assets/DB-shell.png)](/learn/assets/DB-shell.png)

1. From the header you can
    - **open** the deployed app URL
    - **stop** the deployed app, this will disable the deploy URL
    - **restart services** like Tomcat etc..
2. view the **logs** with an option to view the entire log or download it.
3. connect to **DB shell** and export/import database.
4. view the app configuration **profile**, you will be able to view the configurations of all the services used within the app like the database, web services, security etc.
5. user can add **integration tests** for tesing application
6. configure **webhooks** for triggering jenkins jobs or others by configuring them
7. user also check **history** of deployments

## Configure Stage and Live Phases

Once the app is tested and ready to go live, you can push the app from Demo to Live. Before that, you need to set the configurations for the Live phase.

### For WME users

- WME users can use the same steps to configure both Stage and Live phases.
- WME users need to add instances for Stage and Live phases _before_ configuration if they want to select wavemaker cloud for stages configurations. ([see here for adding instances)](/learn/on-premise/configure/add-apps-capacity)

[![](/learn/assets/stage-and-live-configurations.png)](/learn/assets/stage-and-live-configurations.png) 

### Steps to Configure Stage and Live Phase

1. Click the Configure button for the Stage and Live phase and select the Cloud Provider - you can choose between WaveMaker Demo Cloud or external provider like AWS, Azure, Google or DigitalOcean.
2. Here we will show steps for configure  **External Cloud Providers**,
    
    - [click here for AWS configuration](/learn/app-development/deployment/deployment-to-aws/),
    - [click here for Azure configuration](/learn/app-development/deployment/deployment-to-azure/),
    - [click here for Google Cloud configuration](/learn/app-development/deployment/deployment-google-cloud/),
    - [click here for DigitalOcean configuration](/learn/app-development/deployment/deployment-to-digital-ocean/).
    
    [![](/learn/assets/deploy-to-stage-and-live.png)](/learn/assets/deploy-to-stage-and-live.png)
3. Selecting WaveMaker Demo Cloud will initiate Live Pipeline setup and will auto-configure the phase and you can push the app to the Live phase.

## Push to Stage and Live

Once the app is tested and phase has been configured, you can push the app from Demo to Stage and Stage to Live.
first configure the type of provider for deployment.and push the application from one stage to other stage for deployment

[![](/learn/assets/stage-configuration-for-deploy.png)](/learn/assets/stage-configuration-for-deploy.png)

### Steps to configure

1. When you Push from Demo to Stage and Stage to Live, a dialog for configuration profiles will be displayed. The configuration settings from the Deployment phase is selected which can be modified or retained as it is to create the Live Configuration Profile.  

[![](/learn/assets/configure-for-push-to-stage.png)](/learn/assets/configure-for-push-to-stage.png) 

:::tip
You can also mention the version number and release notes for tracking purposes.  
:::

[![](/learn/assets/release-version-at-stage.png)](/learn/assets/release-version-at-stage.png)  

2. Once the configuration is set, you can Push the app from Demo to Stage and Stage to Live.
3. Once deployed, you can view the current release along with release notes and the latest history. You can view all releases/history.

[![](/learn/assets/1.0-version-deployment.png)](/learn/assets/1.0-version-deployment.png) 

Hover over the Live card to visit the Details page or launch the app. Selecting the **Details** page allows you to:
- view the app details. Here, you can further:
  - **open** the deployed app URL
  - **stop** the deployed app, this will disable the deploy URL
  - **restart services** like Tomcat etc..
  - **delete** your apps association with the provider
  - **CPU** and **Memory Usage**of the app
  - **view a brief history** with the option to view complete history
  - view the app configuration profile, you will be able to view the configurations of all the services used    within the app like the database, web services, security etc.
- view the logs with an option to view the entire log or download it.
- view the provider details. For AWS/Azure/Google Cloud provider you can download the key pair .pem file. You can also edit the key pair by uploading a new .pem file.
- **Note:** this option is available for phases configured on AWS or Azure Cloud or Google Cloud.
- connect to DB shell and export/import database.
- view the deployment history

## App Versioning

Once you have deployed and pushed the app to Live Phase, for various reasons like enhancements or due to requirement changes, your app can undergo changes. You can deploy the app with a change in version number. **Note** this will overwrite the previous version in Stage and Live phase.
 [![](/learn/assets/release-version-2-at-stage.png)](/learn/assets/release-version-2-at-stage.png) 
 [![](/learn/assets/release-version-2-deployment.png)](/learn/assets/release-version-2-deployment.png)
