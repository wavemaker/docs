---
title: "App Deployment to Tomcat"
id: "wavemaker-application-deployment-tomcat"
sidebar_label: "Deploy to Tomcat"
---
Learn how to deploy a WaveMaker app to the Tomcat server.

---
WaveMaker Apps can be exported as a WAR file. This generated file can be deployed to any standard Java Web Server running on JDK 11. This section walks through the steps to deploy WaveMaker app to Tomcat. You can know more about [Deployment to Web Server](/learn/app-development/deployment/deployment-web-server/) from here. 

## Supported Versions

WaveMaker application can be deployed on any of the 9.x versions of Tomcat, though it is recommended to use the latest version of tomcat in the 9.x version as the older versions can have security vulnerabilities.

The minimum required JDK version is 11.

## Prerequisites

- Tomcat has to be installed & running
- Tomcat user credential that has the role of
    - `manager-gui`
- [WaveMaker application war file to be deployed](/learn/app-development/deployment/deployment-web-server/#generate-a-war-file).

### Typical Hardware Requirements

- *4 GB RAM, 2 core CPU, 50GB disk**

:::note
*Capacity planning with your application and its expected usage will yeild more accurate hardware requirements.
:::

## Deployment Process

The deployment on Tomcat can be done either by copying the war file into web apps folder or by using Management portal.

### Deployment from Web apps Folder

The instructions are same for all versions of Tomcat.

1. Copy the war file to `/webapps` folder.
2. Tomcat will automatically detect the newly copied war file and start deploying. You can check the status on the Tomcat console.
3. After the deployment is successful you can access the application at `http://localhost:8080/<ApplicationName>`.

### Deployment using Management Portal

**Deployment for Tomcat 9.x**

1. Open a browser and navigate to `http://localhost:8080` (if Tomcat is running on a different port, replace the 8080 with that port).
2. Click on **Manager App** button displayed on the homepage and provide User Name and Password in the respective text boxes when prompted.
3. You will be navigated to Tomcat Web Application Manager.
4. Navigate to **War file to deploy** section and choose the war file that you want to deploy and click on Deploy button.
5. Once Application war has been deployed the application name will be listed in the applications list and it is in **Start** state by default.
6. Click on the application name link to access the Deployed application.

### Configure Tomcat to Turn off Compression

During the build process WaveMaker already generates compressed artifacts for static content. Tomcat's compression should be turned off in the `server.xml`, otherwise the Tomcat server will compress the files again leading to errors when the deployed WaveMaker app is loaded in the browsers. 

Here is how compression is turned off in `server.xml`

1. Open `server.xml` for editing.
2. Locate the `Connector` tag that contains ```compression``` attribute.
3. Remove the attributes `compression`, `compressionMinSize`, `compressableMimeType` from the `Connector` tag.
4. Save the changes and restart the Tomcat server.
