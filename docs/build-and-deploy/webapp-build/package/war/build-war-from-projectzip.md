---
title: "Building Project with Maven"
---

# Building Project with Maven

This section explains how to generate a **WAR (Web Application Archive)** for a WaveMaker project using **Maven**. The generated WAR file can be deployed on a local machine or on a web server such as **Apache Tomcat**.

---

## Overview

A Maven-based build allows you to generate a WAR file outside the WaveMaker Studio. This approach is commonly used in automated build pipelines or environments where builds are triggered from the command line.

---

## Download Project ZIP from Studio

To build the project using Maven, first download the project source from WaveMaker Studio.

1. Export the project as a ZIP file from the Studio.

   ![Export project as ZIP](./image-2.png)

2. Extract the downloaded ZIP file.

3. Note the extracted project location path.

4. Open a command line terminal and navigate to the project location:


   ```shell
   cd <location>
![locate project](./image-3.png)

## Choose Profile and Build War file

- Use the below command to do a maven build with the profile.

```shell
mvn clean install -P<ProfileName>
```

**For example**

```shell
mvn clean install -Pdeployment
```

- This command will generate a `project war`  file in the target directory. The `project war`  file has both frontend artifacts (HTML, CSS, JS, images, etc), and backend artifacts (Java Classes).
- This war file can be deployed into any webserver like Tomcat. For more information, see [App Deployment to Tomcat](/learn/how-tos/wavemaker-application-deployment-tomcat).

