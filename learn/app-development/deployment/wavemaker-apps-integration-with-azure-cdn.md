---
title: "WaveMaker Apps Integration with AZURE CDN Profile"
id: ""
---
---

Content delivery network (CDN) service that securely delivers data to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.

For Integrate WaveMaker apps with AZURE CDN Profile use the following steps

- [Create Storage Account](#create-storage-account)
- [Create Storage Containers](#create-storage-containers)
- [Create Azure CDN profile](#create-azure-cdn-profile)
- [Maven command for CDN integration](#maven-command-for-cdn-integration)

## Create Storage Account

- For a CDN profile users need to create a Storage account or can use an existing one for store static content.at create resource search for the storage account and provide project details and resource groups.

[![storage account basic](/learn/assets/wme-setup/storageaccount-basic.png)](/learn/assets/wme-setup/storageaccount-basic.png)

- At the networking section select connectivity method and .routing preference

[![storage account networking](/learn/assets/wme-setup/storage-account-networking.png)](/learn/assets/wme-setup/storage-account-networking.png)

- In the data protection method select data recovery and tracking methods.

[![storage account data protection](/learn/assets/wme-setup/storage-account-dataprotection.png)](/learn/assets/wme-setup/storage-account-dataprotection.png)

- In the advanced section select blob access and security options, next provide tags for the storage account and review the details and create a storage account.

[![storage account adavance details](/learn/assets/wme-setup/storage-account-advance.png)](/learn/assets/wme-setup/storage-account-advance.png)

## Create Storage Containers

- Navigate to storage account in the Azure portal and in the left menu for the storage account, scroll to the Blob service section, then select Containers.
- Select the **+ Container** button and provide name and at public access level select `Blob(anonymus read access for blobs only`.

## Create Azure CDN profile

- select Create a resource (on the upper left),Search for CDN and select CDN Profile, then select **+ Add** for create.
- Provide name,select subscription , resource and pricing tier and select create.

[![CDN profile creation](/learn/assets/wme-setup/cdn-profile-creation.png)](/learn/assets/wme-setup/cdn-profile-creation.png)

- On the CDN profile page, select **+ Endpoint** for create a CDN endpoint.
- Next provide name , select origin type as storage and select previously created container for origin hostname. Provide orgin host header and click Add .

[![CDN endpoint](/learn/assets/wme-setup/cdn-endpoint-creation.png)](/learn/assets/wme-setup/cdn-endpoint-creation.png)

- Notedown the endpoint hostname to provide to maven command for integration
  - example endpoint hostname

    ```bash
        https://wavemaker-app-cdn-integration.azureedge.net
    ```

## Maven command for CDN integration

- Please use the following maven command for integrate CDN with the WaveMaker app.For more information to build a wavemaker app with refer [wavemaker app build with maven](/learn/app-development/deployment/building-with-maven)

```shell
mvn clen install -P<profile-name> -Dcdn-url=<cdn_url or domain_name>
example command: mvn clean install -Pdeployment -Dcdn-url=https://mydomain.cloudfront.net
```
