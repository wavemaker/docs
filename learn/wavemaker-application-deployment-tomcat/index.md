---
title: "WaveMaker Application deployment to Tomcat"
id: "wavemaker-application-deployment-tomcat"
---

Apps can be exported as a WAR file. This generated file can be deployed to any standard Java Web Server running on JDK 1.8. This section walks through the steps to deploy WaveMaker app to Tomcat. You can know more about [to Web Server](/learn/app-development/deployment/deployment-web-server/) from here.

## Versions

WaveMaker application can be deployed on any of the following versions of the Tomcat:

- 8.x
- 9.x

The minimum required JDK version is 1.8.

- has to be installed & running
- user credential that has the role of
    - “manager-gui” for Tomcat v8.x & v9.x
- [application war file to be deployed](/learn/app-development/deployment/deployment-web-server/#war-file-generation)

## Process

The deployment on Tomcat can be done either by copying the war file into web apps folder or by using Management portal.

### from Web apps Folder

The instructions are same for all versions of Tomcat.

1. the war file to _/webapps_ folder.
2. will automatically detect the newly copied war file and start deploying. You can check the status on the Tomcat console.
3. the deployment is successful you can access the application at ://localhost:8080/<ApplicationName>

### using Management portal

**for Tomcat 8.x/9.x**

1. a browser and navigate to ://localhost:8080 (if Tomcat is running on a different port, replace the 8080 with that port).
2. on **App** button displayed on the homepage and provide User Name and Password in the respective text boxes when prompted.
3. will be navigated to Tomcat Web Application Manager.
4. to **file to deploy** section and choose the war file that you want to deploy and click on Deploy button.
5. Application war has been deployed the application name will be listed in the applications list and it is in state by default
6. on the application name link to access the Deployed application.
