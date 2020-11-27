---
title: "Building Project with Maven"
id: ""
---
---
This guide helps to create a war file for deploying the project in your local machine or a web server like Apache Tomcat. It also provide required information to host Static Content and WebApplication seperately. 

## System prerequisites

|Description|Version|
|---|---|
|Java |1.8|
|Node|10.15.0|
|Maven| 3.3.9|
|Ant|1.10.7|
|Git| 2.26.2|

## Generating a War file

1. Export the project as zip.

[![](/learn/assets/ExportProjectasZip.png)](/learn/assets/ExportProjectasZip.png)

2. Extract the downloaded zip file.

3. Get the project location path.  

4. In the command line, go to the project path. See the image below.

```shell
cd <location>
```

[![](/learn/assets/LocateProjectIncmdline.png)](/learn/assets/LocateProjectIncmdline.png)

5. Run the following command where `<ProfileName>` should either be **default_profile/cusotom_profile**.
  
- Use below command for do the maven build with profile. This command will generate .war file in target directory. The .war file has both frontend artifacts(html,css,js,images etc) and backend artififacts(Java Classes).

```shell
mvn clean install -P<ProfileName>
```

:::note
WaveMaker project has two default profiles, which are **development** and **deployment**. Prefix the profile name with a **P**. If you do not prefix the profile name; the system selects a **development** profile by default. You can add Custom Profiles from the **Config Profiles** section in the **Project Settings** options. To locate the existing profiles' path, go to Step-7.
:::

- WaveMaker app is consiting of frontend artifacts(html,css,js,images etc) and backend artififacts(Java Classes). It is suggest to host frontend artifacts in Static Content Servler like nginx,apache etc or Content Delivery Networt(CDN) and backend artificats can be hosted on any webserver like Tomcat etc.
- To generate two differnet artifacts from WaveMaker application use below command. This command takes CDN_URL as input. Configure your CDN before executing this command. Please check our docs to configure CDN in AWS [WaveMaker apps integration with AWS CDN](/learn/app-development/deployment/wavemaker-apps-integration-with-aws-cdn) and Azure   [WaveMaker apps integration with AZURE CDN Profile](/learn/app-development/deployment/wavemaker-apps-integration-with-azure-cdn). 

```shell
mvn clen install -P<profile-name> -Dcdn-url=<CDN_URL>
```
```shell
mvn clean install -Pdeployment -Dcdn-url=https://mydomain.cloudfront.net/my_app>/1234/
```

6. In the project folder, a new folder called **target** generates automatically with the `project war` file ans `ui-artifacts.zip` file in it. The `ui-artifacts.zip` file have static files of the application, You can unzip the file `ui-artifacts.zip` and upload it to CDN origin (S3 bucket in AWS Cloudfront case, storage container in AZURE CDN Profile case, or put it into nginx or apache). Use the following commands for unzip and upload to CDN origins.

- For unzip the file to a specific folder
  
```shell
unzip ui-artifacts.zip -d <my-static-content-folder>
```

- For upload files to AWS S3 bucket

```shell
aws s3 sync <my-static-content-folder>/ S3_BUCKET
```

- For upload files to AZURE storage container

```shell
az storage blob upload-batch -s <my-static-content-folder>/ -d <storage_container_name>  --account-name <storage_account_name>
```

:::note
The Step-6 happens on successful build completion. On build failure due to the out-of-memory error, the profile property called **build.ui.node.args** should be adjusted; this configures the build. Increase the **max-old-space-size** memory value where the default value is 512 MB. The build should be triggered again after increasing the memory value. To do this, do the following steps.
:::

7. Go to the project folder -> profiles -> open the file _<profilename.properties>_. As shown in the image below:

[![](/learn/assets/profile-location.png)](/learn/assets/profile-location.png)

8. Adjust the value of **build.ui.node.args.** See the image below:

[![](/learn/assets/adjusting-space-on-failure.png)](/learn/assets/adjusting-space-on-failure.png)

9. Re-do the steps 5 and 6.

## See Also

[Build Options for Deployment](/learn/app-development/deployment/build-options)
