---
title: "How to Consume a WaveMaker API into another WaveMaker App using Open API/Swagger"
id: ""
sidebar_label: "Consuming an Existing WaveMaker API"
---
---

You can Import REST API endpoints via Open API/Swagger import feature.

In this document, see how you can use an API of an existing WaveMaker app into another WaveMaker app in just a few simple steps.

:::note
This document assumes that you have a sample hrdb imported in your project. For more infromation, see [Connect to a sample DB](/learn/app-development/services/database-services/working-with-databases/#connect-to-a-db).
:::

## Download Swagger from a WaveMaker Project

- Click **File Explorer**.
- Go to the following path `services/hrdb/designtime/hrdb_API.json`
- Download the file.

![download swagger](/learn/assets/download-swagger.png)

## Import Swagger into another Project

Import the swagger into another project. For more information on how to import, see [Importing REST APIs via Swagger](/learn/app-development/services/api-designer/import-rest-apis-swagger).

## Enter Host Name and Base Path

You'll need the host name and base path when you import an API via Swagger Import.

:::note
Ensure that the application is deployed before you could use the API. For more information on how to deploy an app, see [One-Click Deployment](/learn/app-development/deployment/one-click-deployment).
:::

![updating host and basepath](/learn/assets/update-host-basepath.png)

- Enter the **Host URL**. The host is the URL where the app is hosted. For example, `hostid.cloud.wavemakeronline.com/yourappname`.
- Enter the **Base Path**. For example, `/services` is the basepath for HRDB.
- Click **Save**.

The WaveMaker app's API is ready to consume in your project.

## See Also

[OpenAPI support in WaveMaker - Blog](/learn/blog/2020/04/21/wavemaker-openapi-import)  
[Importing REST APIs via Swagger](/learn/app-development/services/api-designer/import-rest-apis-swagger)  

