---
title: "WaveMaker Application Deployment to WebSphere (Liberty Profile)"
date: "2017-02-13"
---

Apps can be exported as a WAR file. This generated file can be deployed to any standard Java Web Server running on JDK 1.8. This section walks through the steps to deploy WaveMaker app to IBM Websphere (Liberty Profile). You can know more about [to Web Server](/learn/app-development/deployment/deployment-web-server/) from here.

## \-requisites

1. application (war) file named
2. need to configure IBM Websphere (Liberty Profile).

## Setup

1. to _\_Home\_Directory\\bin_
2. command: start

## WAR File

From WaveMaker Studio, for the app that you want to deploy to WebSphere, Export the app as WAR file using the appropriate configurations. [here for more](/learn/app-development/deployment/deployment-web-server/#war-file-generation)

## to WebSphere (Liberty Profile)

- prepared war file into _\_Home\_Directory\\usr\\servers\\defaultServer\\dropins\\war_
- success message is displayed in the terminal navigate to _://localhost:8080/_ to view the deployed application.
