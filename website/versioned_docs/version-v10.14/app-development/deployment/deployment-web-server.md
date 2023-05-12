---
title: "Deployment to Application Server"
id: "deployment-web-server"
sidebar_label: "Application Server Overview"
---
Overview document for deploying your app to a web server. 

---

Applications built with WaveMaker can be deployed to a number of environments. In this document, we walk through the process of WaveMaker app deployment to Web Server.

## Web Server Installation 
You will need a valid Web Server installation. The following is a list of Web Servers where the WaveMaker apps can be deployed. 

:::note
This list is for reference purpose. Apart from these, you can use any standard Java Web Server running on JDK 1.8 and Servlet Framework version 3.1.
:::
    
| **Web Server** | **Versions** | **Instructions** |
| --- | --- | --- |
|[![](/learn/assets/tomcat.jpg)](/learn/assets/tomcat.jpg)| 8.5.x, 9.x | [Deployment Instructions](/learn/how-tos/wavemaker-application-deployment-tomcat/) |
|[![](/learn/assets/websphere.png)](/learn/assets/websphere.png)| 9.0.5 Base, 17.0.0.2 Liberty| [Deployment Instructions](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/) |
|[![](/learn/assets/jboss.png)](/learn/assets/jboss.png) | WildFly 10.0, 11.0 | [Deployment Instructions](/learn/how-tos/wavemaker-application-deployment-jboss/) |
|[![](/learn/assets/weblogic.png)](/learn/assets/weblogic.png) WebLogic | 12c (12.2.1) | [Deployment Instructions](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/) |

## Profile Configuration

Set up the **configuration profile**. You can choose to use the [default profile](/learn/app-development/deployment/configuration-profiles/) configured by WaveMaker based upon the services incorporated within the app, or build a [custom profile](/learn/app-development/deployment/build-options). 

## Generate a WAR file

You need to generate a **WAR file** of the WaveMaker app you want to deploy. WAR file can be generated either by
- Using **Export** -> select **Project as WAR** option, or
- Use **Export** -> select **Project as ZIP** and use this file to generate WAR file through [Maven Build](https://maven.apache.org/).

:::note
Before generating the WAR file for deployment to WebSphere (for apps with JNDI profile) and WebLogic, follow the pre-processing instructions before proceeding. 
:::

[![](/learn/assets/deploy_web.png)](/learn/assets/deploy_web.png)

Once a WAR file is generated, deploy it to [Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat/), [JBoss](/learn/how-tos/wavemaker-application-deployment-jboss/), [WebLogic](/learn/how-tos/wavemaker-application-deployment-weblogic-application-server/), or [WebSphere](/learn/how-tos/wavemaker-application-deployment-websphere-liberty-profile/). 

## Deploy to Private or Cloud Server

Alternatively, the WAR file may also be deployed to public or private cloud servers. To deploy an application to one of the supported clouds you will need to:
    
- Acquire an account (public cloud) or install the software (private cloud)
- Create a cloud instance - a virtual machine with a standard operating system
- Install a Java web server - for example, Tomcat
- Deploy the WaveMaker WAR to the Java web server
    
:::note
Instead of above steps you can instantly deploy to Amazon Web Service or to WaveMaker Demo Cloud with just a single click. [Learn about one-click deployment](/learn/app-development/deployment/one-click-deployment/).
:::
    

