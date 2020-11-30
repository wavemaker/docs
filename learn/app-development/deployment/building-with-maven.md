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


## Go to Source Location
- WaveMaker Project sources can be featched in two ways.
    ### Clone VCS Repository
    - Clone Project into your pipeline or your local machine using git clone <repo_url>
    - You can clone only if you configured custom VCS or Push to your Own Repo(in both WaveMaker Enterprise Setups, WaveMaker Online Teams). Checkout [Configure Custom VCS](/learn/app-development/deployment/build-options).

    ### Download Zip from Studio

    - Export the project as zip.

    [![](/learn/assets/ExportProjectasZip.png)](/learn/assets/ExportProjectasZip.png)

    - Extract the downloaded zip file.

    - Get the project location path.  

    - In the command line, go to the project path. See the image below.

    ```shell
        cd <location>
    ```

    [![](/learn/assets/LocateProjectIncmdline.png)](/learn/assets/LocateProjectIncmdline.png)

## Chose Profile to Build
- WaveMaker project has two default profiles, which are **development** and **deployment**. Prefix the profile name with a **P**. If you do not prefix the profile name; the system selects a **development** profile by default. You can add Custom Profiles from the **Config Profiles** section in the **Project Settings** options. To locate the existing profiles' path, go to Step-7.
- Use `<ProfileName>` in the next sections from  **default_profile/cusotom_profile**.
  

## Build War file  
- Use below command to do the maven build with profile. See above to choose a Build profile. 

```shell
mvn clean install -P<ProfileName>
```
```shell
mvn clean install -Pdeployment
```
- This command will generate `project war`  file in target directory. The `project war`  file has both frontend artifacts(html,css,js,images etc) and backend artififacts(Java Classes). 
- This war file can be deployed into any webserver like Tomcat. Checkout [App Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat).

## Build War file and Static Content to Deploy both seperately

- WaveMaker app is consiting of frontend artifacts(html,css,js,images etc) and backend artififacts(Java Classes). It is suggest to host frontend artifacts in Static Content Servler like nginx,apache etc or Content Delivery Networt(CDN). And backend artificats can be hosted on any webserver like Tomcat etc.
- To generate two differnet artifacts from WaveMaker application use below command. This command takes CDN_URL as input. Configure your CDN before executing this command. Please check our docs to configure CDN in AWS ([WaveMaker apps integration with AWS CDN](/learn/app-development/deployment/wavemaker-apps-integration-with-aws-cdn)) and Azure ([WaveMaker apps integration with AZURE CDN Profile](/learn/app-development/deployment/wavemaker-apps-integration-with-azure-cdn)). 

```shell
mvn clen install -P<profile-name> -Dcdn-url=<CDN_URL>
```
```shell
mvn clean install -Pdeployment -Dcdn-url=https://mydomain.cloudfront.net/my_app>/1234/
```
- In the project folder, a new folder called **target** generates automatically with the `project war` file ans `ui-artifacts.zip` file in it. The `ui-artifacts.zip` file have static files of the application, 
- You can unzip the file `ui-artifacts.zip` and upload it to CDN origin (S3 bucket in AWS Cloudfront case, storage container in AZURE CDN Profile case),  OR put it into nginx or apache).  
- Please check our docs to configure and use CDN in AWS ([WaveMaker apps integration with AWS CDN](/learn/app-development/deployment/wavemaker-apps-integration-with-aws-cdn)) and Azure ([WaveMaker apps integration with AZURE CDN Profile](/learn/app-development/deployment/wavemaker-apps-integration-with-azure-cdn)).  

## Handling Build Failures
- WaveMaker build may fails due to
    - In sufficient memory to Node Process
    - Compaliation Issues 
- On build failure due to the out-of-memory error, the profile property called **build.ui.node.args** should be adjusted; this configures the build. Increase the **max-old-space-size** memory value where the default value is 1024 MB. The build should be triggered again after increasing the memory value. To do this, do the following steps.
- Go to the project folder -> profiles -> open the file _<profilename.properties>_. As shown in the image below:

[![](/learn/assets/profile-location.png)](/learn/assets/profile-location.png)

- Adjust the value of **build.ui.node.args.** See the image below:

[![](/learn/assets/adjusting-space-on-failure.png)](/learn/assets/adjusting-space-on-failure.png)

- Re-do build.

