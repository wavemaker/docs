---
last_update: { author: "Tejaswini K" }
---

# Deploy to Tomcat

## Overview

WaveMaker applications are packaged as a **WAR (Web Application Archive) file**, which can be deployed to any standard Java web server running on **JDK 17 or JDK 21**.

To learn how to generate a WAR file from a WaveMaker application- [Generate a WAR](../build/web/package/war/build-war-from-studio.md)


## Supported Versions

WaveMaker applications can be deployed on **Apache Tomcat 10.x**.

- It is recommended to use the **latest available version** within the 10.x series to avoid known security vulnerabilities.
- Supported JDK versions: **JDK 17** and **JDK 21**

---

## Prerequisites

Before deploying the application, ensure the following:

- Apache Tomcat is installed and running
- A Tomcat user is configured with the `manager-gui` role
- A WaveMaker application WAR file is generated  

### Typical Hardware Requirements

- **4 GB RAM**
- **2-core CPU**
- **50 GB disk space**

:::note
Actual hardware requirements depend on application complexity and expected user load.  
Proper capacity planning is recommended for production environments.
:::

---

## Deployment Process

A WaveMaker WAR file can be deployed to Tomcat using either of the following methods:

- Copying the WAR file to the `webapps` directory  
- Using the Tomcat Management Portal

---

## Deployment from Webapps Folder

This method is the same across all supported Tomcat versions.

1. Copy the WAR file into the `<TOMCAT_HOME>/webapps` directory.
2. Tomcat automatically detects the WAR file and starts deployment.
3. Monitor the deployment status from the Tomcat console or logs.
4. Once deployment completes, access the application at:  
   `http://localhost:8080/<ApplicationName>`

---

## Deployment Using Management Portal

**Applicable for Tomcat 10.x**

1. Open a browser and navigate to `http://localhost:8080`  
   (replace `8080` if Tomcat runs on a different port).
2. Click **Manager App** on the Tomcat home page.
3. Enter the Tomcat username and password when prompted.
4. In the **WAR file to deploy** section, select the application WAR file.
5. Click **Deploy**.
6. After deployment, the application appears in the applications list and is started by default.
7. Click the application name to launch it.

---

## Disable Compression in Tomcat

WaveMaker already generates **compressed static assets** during the build process.  
If Tomcat compression is enabled, the server attempts to compress these files again, which may cause runtime issues in the browser.

To avoid this, compression must be disabled in `server.xml`.

### Steps to Disable Compression

1. Open `<TOMCAT_HOME>/conf/server.xml`.
2. Locate the `Connector` element that contains compression-related attributes.
3. Remove the following attributes from the `Connector` tag:
   - `compression`
   - `compressionMinSize`
   - `compressableMimeType`
4. Save the file and restart the Tomcat server.

---
