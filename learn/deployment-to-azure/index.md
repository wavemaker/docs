---
title: "Configuring for Azure Deployment"
id: "deployment-to-azure"
---

WaveMaker allows you to deploy your app to your Azure cloud account for Live (and Stage for WME users) phase. [more about App Phases from here](/learn/app-development/deployment/release-management/)

To deploy your app to Azure account, you need to configure the Live (Stage) phase.

: This document covers the Live Phase configuration for your AWS account and is a part of the [Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/):

- are expected to have an [account](https://azure.microsoft.com/en-in/free/)
- must set up an Active Directory application and assign the required permissions to it. The permissions include access to , and [here to create AD app](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal)
- the application is created, get the authentication details.
    1. on the Configure tab to configure your application's password.
    2. the CLIENT ID.
    3. the application will run under its own credentials, scroll down to the Keys section and select how long you would like your password to be valid.
    4. saved key is displayed and you can copy it. You will not be able to retrieve the key later so you will want to copy it now.
- **: WME users** need to request the copying of the deployment vhd ( [Hard Disk](https://docs.microsoft.com/en-us/azure/storage/storage-about-disks-and-vhds-linux)) to their Azure account.  For this, you need to write to [@wavemaker.com](mailto:support@wavemaker.com) with the storage account name and sas ( [access signature](https://docs.microsoft.com/en-us/azure/storage/storage-dotnet-shared-access-signature-part-1)) token. To obtain Shared Access Signature, you need to:
    1. [a Storage Account](https://docs.microsoft.com/en-us/azure/storage/storage-create-storage-account),
    2. the Storage Account access Blob and create a Container named
    3. the [access signature token](https://docs.microsoft.com/en-us/azure/storage/storage-dotnet-shared-access-signature-part-1)

**in Azure Configuration**:

- [Portal](http://[supsystic-show-popup id=122]), select the project.
- Configure on the Live Phase option.
- configuring the Live phase choose to host your app on your Azure account.
- your Azure account credentials to proceed with the configuration. You need to enter: [![](../assets/deploy_azure_account.png)](../assets/deploy_azure_account.png)
    - ID ( [here for details](https://blogs.msdn.microsoft.com/mschray/2016/03/18/getting-your-azure-subscription-guid-new-portal/))
    - ID, Client ID, and Client Secret ( [here on how to obtain it](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal#get-tenant-id))
    - Group Name ( [here for details](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal))
    - region where the app needs to be deployed
    - new storage account at Azure will be created with the name you provide. Make sure you enter a unique name.
    - you already have a storage account ( [here on how to create the same](https://docs.microsoft.com/en-us/azure/storage/storage-create-storage-account)) you can give the details, test the connection before proceeding to the next step.
- the appropriate instance based on your app requirements. You can choose from the three options provided ( [here for size comparisons](https://docs.microsoft.com/en-in/azure/virtual-machines/windows/sizes-general#a-series)) and enter the [and Password](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/classic/tutorial#1-basics-blade) details. [here](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq) for more information regarding setting up of Azure VM like username, password, etc.. [![](../assets/deploy_azure_instance.png)](../assets/deploy_azure_instance.png)
- the setup is done (this could take **30 minutes** in case the storage account has to be created), you can push the app from Demo to Live ( [from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)).

< Manage Deployed Apps

Profile >

9\. Deployment

- 9.1 One-Click Deployment
    - [Overview](/learn/app-development/deployment/one-click-deployment/)
    - [Deployment to Cloud](/learn/app-development/deployment/one-click-deployment/#cloud-deployment)
- 9.2 Release Management
    - [Overview](/learn/app-development/deployment/release-management/)
    - [Implementation](/learn/app-development/deployment/release-management/#working)
- [9.3 Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)
    - [Overview](/learn/app-development/deployment/manage-deployed-apps/)
    - [Apps Portal](/learn/app-development/deployment/manage-deployed-apps/#apps-portal)
    - [Manage Deployed App](/learn/app-development/deployment/manage-deployed-apps/#manage-deployed-app)
    - [Configure Live Phase](/learn/app-development/deployment/manage-deployed-apps/#configure-live)
    - [Push to Live](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)
    - [App Versioning](/learn/app-development/deployment/manage-deployed-apps/#versioning)
    - [AWS Configuration](/learn/app-development/deployment/deployment-to-aws/)
    - [Azure Configuration](#)
    - [Google Cloud Configuration](/learn/app-development/deployment/deployment-google-cloud/)
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
