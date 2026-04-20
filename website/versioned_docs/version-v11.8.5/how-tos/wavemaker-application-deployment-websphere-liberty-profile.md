---
title: "App Deployment to WebSphere (Liberty Profile)"
id: "wavemaker-application-deployment-websphere-liberty-profile"
sidebar_label: "WebSphere"
---
---

WaveMaker Apps can be exported as a WAR file. This generated file can be deployed to any standard Java Web Server running on JDK 11. This section walks through the steps to deploy WaveMaker app to IBM Websphere (Liberty Profile). You can know more about [Deployment to Web Server](/learn/app-development/deployment/deployment-web-server/) from here.

## Pre-requisites

1. WaveMaker application (war) file named **SampleApp.war**
2. Websphere version should be **19.0.0.1** or more.
3. You need to configure IBM Websphere (Liberty Profile) and update server.xml with servlet-4.0 feature.

## WebSphere Setup

1. Navigate to _WebSphere_Home_Directory\bin_
2. Execute command: server.bat start

## Preparing WAR File

From WaveMaker Studio, for the app that you want to deploy to WebSphere, Export the app as WAR file using the appropriate configurations. For more information, see [Generate a WAR file](/learn/app-development/deployment/deployment-web-server/#generate-a-war-file).

## Deploy to WebSphere (Liberty Profile)

- Copy prepared war file into `Websphere_Home_Directory\usr\servers\defaultServer\dropins\war`
- Once success message is displayed in the terminal navigate to `http://localhost:8080/` to view the deployed application.
