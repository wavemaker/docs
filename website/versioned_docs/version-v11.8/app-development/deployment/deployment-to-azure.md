---
title: "Configuring for Azure Deployment"
id: "deployment-to-azure"
sidebar_label: Azure
---
Learn how to deploy your app to Azure server.

---

WaveMaker allows you to deploy your app to your Azure cloud account for Live (and Stage for WME users) phase. [Know more about App Phases from here](/learn/app-development/deployment/release-management/).

To deploy your app to Azure account, you need to configure the Live (Stage) phase.

:::note
This document covers the Live Phase configuration for your AWS account and is a part of the [Manage Deployed Apps](/learn/app-development/deployment/manage-deployed-apps/)
:::

## Prerequisites

- You are expected to have an [Azure account](https://azure.microsoft.com/en-in/free/).
- You must set up an Active Directory application and assign the required permissions to it. The permissions include access to _Microsoft.compute_, _Microsoft.network_ and _Microsoft.storage_. [See here to create AD app](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal).
- Once the application is created, get the authentication details.

    1. Click on the Configure tab to configure your application's password.
    2. Copy the CLIENT ID.
    3. If the application will run under its own credentials, scroll down to the Keys section and select how long you would like your password to be valid.
    4. The saved key is displayed and you can copy it. You will not be able to retrieve the key later so you will want to copy it now.

:::important
WME users need to request the copying of the deployment vhd ([Virtual Hard Disk](https://docs.microsoft.com/en-us/azure/storage/storage-about-disks-and-vhds-linux)) to their Azure account.  

For this, you need to write to [support@wavemaker.com](mailto:support@wavemaker.com) with the storage account name and sas ([shared access signature](https://docs.microsoft.com/en-us/azure/storage/storage-dotnet-shared-access-signature-part-1)) token. To obtain Shared Access Signature, you need to:

1. [Create a Storage Account](https://docs.microsoft.com/en-us/azure/storage/storage-create-storage-account),
2. From the Storage Account access Blob and create a Container named **_vhds_**
3. Obtain the [shared access signature token](https://docs.microsoft.com/en-us/azure/storage/storage-dotnet-shared-access-signature-part-1).
:::

**Steps in Azure Configuration**:

- From Apps Portal, select the project.
- Click Configure on the Live Phase option.
- While configuring the Live phase choose to host your app on your Azure account.
- Enter your Azure account credentials to proceed with the configuration. You need to enter: 

    [![](/learn/assets/deploy_azure_account.png)](/learn/assets/deploy_azure_account.png)

    - Subscription ID ([see here for details](https://blogs.msdn.microsoft.com/mschray/2016/03/18/getting-your-azure-subscription-guid-new-portal/))
    - Tenant ID, Client ID, and Client Secret ([see here on how to obtain it](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal#get-tenant-id))
    - Resource Group Name ([see here for details](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal))
    - Azure region where the app needs to be deployed
    - A new storage account at Azure will be created with the name you provide. Make sure you enter a unique name.
    - If you already have a storage account ([see here on how to create the same](https://docs.microsoft.com/en-us/azure/storage/storage-create-storage-account)) you can give the details, test the connection before proceeding to the next step.
- Select the appropriate instance based on your app requirements. You can choose from the three options provided ([see here for size comparisons](https://docs.microsoft.com/en-in/azure/virtual-machines/windows/sizes-general#a-series)) and enter the [Username and Password](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/classic/tutorial#1-basics-blade) details. [See here](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/faq) for more information regarding setting up of Azure VM like username, password, etc.. 
[![](/learn/assets/deploy_azure_instance.png)](/learn/assets/deploy_azure_instance.png)

:::note
Please make sure your Azure subscription should allow launching an instance with Standard_A1, Standard_A2, and Standard_A3
:::
- Once the setup is done (this could take **upto 30 minutes** in case the storage account has to be created), you can push the app from Demo to Live ([Continue from here](/learn/app-development/deployment/manage-deployed-apps/#push-to-live)).
