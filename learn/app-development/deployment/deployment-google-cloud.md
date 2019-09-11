---
title: "Configuring for Google Cloud Deployment"
id: ""
---

WaveMaker allows you to deploy your app to your Google Cloud account for Live (and Stage for WME users) phase. [Know more about App Phases from here](/learn/app-development/deployment/release-management/).

To deploy your app to Google Cloud account, you need to configure the Live (Stage) phase.

**NOTE**: This document covers the Live Phase configuration for your AWS account and is a part of the [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)**Prerequisites**:

1. You are expected to have a [Google Cloud Account](https://console.cloud.google.com/).
2. You need to create a [Service Account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating_a_service_account) with the following settings:
    - Role set to Project Owner i.e. full access to all resources,
    - From the API Dashboard ensure that the following APIs are Enabled:
        
        - Google Compute Engine API and
        - Google Cloud Resource Manager API
        
        (**following shows the screen from the Google Developer Console dialog. This dialog might differ from the actual one**) [![](/learn/assets/google_account_enable.png)](/learn/assets/google_account_enable.png)
    - A downloaded file containing Private Key in JSON format (**following shows the setting from the Google Create Service Account dialog. This dialog might differ from the actual one**) [![](/learn/assets/google_account_settings.png)](/learn/assets/google_account_settings.png)

**Steps in Configuring Google Cloud**:

1. From [Apps Portal](http://[supsystic-show-popup id=122]), select the project.
2. Click Configure on the Live Phase option.
3. While configuring the Live phase choose to host your app on Google Cloud
4. Enter your Google Cloud account credentials to proceed with the configuration. [![](/learn/assets/deploy_google_account.png)](/learn/assets/deploy_google_account.png) You need to enter
    - **Google Project Id**: It is the project created by you on Google Cloud Platform. All resources are referenced with this project. ([see here for details](https://cloud.google.com/resource-manager/docs/creating-managing-projects))
    - **Service Account Id**: You will get this when creating a Service account. This account should have **Role** set to _Owner_ and **Key Type** as _JSON_ ([see here on how to obtain it](https://cloud.google.com/compute/docs/access/service-accounts))
    - The region/zone in which you wish to provision the instance.
    - Client Credentials: This is a private key in a JSON file to authenticate the service account. You need to copy the entire content of the JSON file including the braces - {}.([see here on how to obtain it](https://cloud.google.com/compute/docs/access/service-accounts))
5. Select the appropriate instance size based upon the resources and database utilized by your app ([see here for pricing details](https://cloud.google.com/compute/pricing))
6. and enter the key-value instance tags ([see here for best practices for instance tagging](https://cloud.google.com/compute/docs/storing-retrieving-metadata)) [![](/learn/assets/deploy_google_instance.png)](/learn/assets/deploy_google_instance.png)
7. Once the setup is done, you can push the app from Demo to Live. ([Continue from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live))

< Manage Deployed Apps

Configuration Profile >

9\. Deployment

- 9.1 One-Click Deployment
    - [i. Overview](/learn/app-development/deployment/one-click-deployment/)
    - [ii. Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- 9.2 Release Management
    - [i. Overview](/learn/app-development/deployment/release-management/)
    - [ii. Implementation](/learn/app-development/deployment/release-management/#working)
- [9.3 Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)
    - [i. Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [ii. Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [iii. Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [v. Configure Live Phase](/learn/app-development/deployment/manage-deployed-apps/#configure-live)
    - [v. Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [vi. App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [vii. AWS Configuration](/learn/app-development/deployment/deployment-to-aws/)
    - [viii. Azure Configuration](/learn/app-development/deployment/deployment-to-azure/)
    - [ix. Google Cloud Configuration](#)
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
