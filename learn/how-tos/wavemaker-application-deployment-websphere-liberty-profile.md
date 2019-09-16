---
title: "WaveMaker Application Deployment to WebSphere (Liberty Profile)"
id: ""
sidebar_label: "WebSphere"
---
---

WaveMaker Apps can be exported as a WAR file. This generated file can be deployed to any standard Java Web Server running on JDK 1.8. This section walks through the steps to deploy WaveMaker app to IBM Websphere (Liberty Profile). You can know more about [Deployment to Web Server](/learn/app-development/deployment/deployment-web-server/) from here.

## Pre-requisites

1. WaveMaker application (war) file named **SampleApp.war**
2. You need to configure IBM Websphere (Liberty Profile).

## WebSphere Setup

1. Navigate to _WebSphere\_Home\_Directory\\bin_
2. Execute command: server.bat start

## Preparing WAR File

From WaveMaker Studio, for the app that you want to deploy to WebSphere, Export the app as WAR file using the appropriate configurations. [See here for more](/learn/app-development/deployment/deployment-web-server/#war-file-generation).

## Deploy to WebSphere (Liberty Profile)

- Copy prepared war file into _Websphere\_Home\_Directory\\usr\\servers\\defaultServer\\dropins\\war_
- Once success message is displayed in the terminal navigate to _http://localhost:8080/_ to view the deployed application.
