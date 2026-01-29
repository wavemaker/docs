---
title: "Deploy static content to Azure CDN Profile for WaveMaker Apps"
id: "app-integration-with-azure-cdn"
sidebar_label: "App Integration with Azure CDN"
last_update: { author: "WaveMaker" }
---
---

The frontend code of any WaveMaker application can be configured to deploy onto a CDN. This improves the end user experience of the WaveMaker application because of dramatic gains made in the page load times. In this document, you will learn how to setup the deployment of WaveMaker frontend artifacts to CDN. While the instructions here deal with AZURE, similar steps can be followed to deploy onto CDNs provided by any other cloud infrastructure providers.

- [Create Storage Account](#create-storage-account)
- [Create Storage Containers](#create-storage-containers)
- [Create Azure CDN profile](#create-azure-cdn-profile)
- [Build and Deploy static Content to Azure Storage Container](#build-and-deploy-static-content-to-azure-storage-container)

## Create Storage Account

- For a CDN profile users need to create a Storage account or can use an existing one for store static content.at create resource search for the storage account and provide project details and resource groups.

[![storage account basic](./assets/storageaccount-basic.png)](./assets/storageaccount-basic.png)

- At the networking section select connectivity method and .routing preference

[![storage account networking](./assets/storage-account-networking.png)](./assets/storage-account-networking.png)

- In the data protection method select data recovery and tracking methods.

[![storage account data protection](./assets/storage-account-dataprotection.png)](./assets/storage-account-dataprotection.png)

- In the advanced section select blob access and security options, next provide tags for the storage account and review the details and create a storage account.

[![storage account adavance details](./assets/storage-account-advance.png)](./assets/storage-account-advance.png)

## Create Storage Containers

- Navigate to the storage account in the Azure portal and at the left menu for the storage account, scroll to the Blob service section, then select Containers.
- Select the **+ Container** button and provide name and at the public access level select `Blob(anonymous read access for blobs only`.

- Enable CORS If the web application is loaded in one domain and the frontend code in the Azure storage container is loaded with a different CDN domain.In the Azure storage account select CORS under settings to enable.
  
  [![Blob CORS](./assets/azure-blob-cors.png)](./assets/azure-blob-cors.png)

## Create Azure CDN profile

- select Create a resource (on the upper left),Search for CDN and select CDN Profile, then select **+ Add** for create.
- Provide name,select subscription , resource and pricing tier and select create.

[![CDN profile creation](./assets/cdn-profile-creation.png)](./assets/cdn-profile-creation.png)

- On the CDN profile page, select **+ Endpoint** for create a CDN endpoint.
- Next provide name , select origin type as storage and select a previously created container for origin hostname. Provide origin host header and click Add .

[![CDN endpoint](./assets/cdn-endpoint-creation.png)](./assets/cdn-endpoint-creation.png)

- Note down the endpoint hostname to provide to maven command for integration
  - example endpoint hostname

    ```bash
        https://wavemaker-app-cdn-integration.azureedge.net
    ```

## Build and Deploy static Content to Azure Storage Container

- Check Build Process [Maven Build Process to Support CDN Deploy](../../build-and-deploy/build/web/package/war/build-war-from-projectzip.md)

```shell
mvn clean install -Pdeployment
```
- Ensure that the selected profile has the `build.ui.mode` set as `angular`.
- Upload unzipped ui-artifatcs.zip files to AZURE storage container

```shell
az storage blob upload-batch -s <my-static-content-folder>/ -d <storage_container_name>  --account-name <storage_account_name>
```
- For configuring the cdn url in the application, see [Configuring CDN URL](../../build-and-deploy/build/web/static-content.md)
