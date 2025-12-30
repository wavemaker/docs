---
title: "How to Consume a WaveMaker API into another WaveMaker App using Open API/Swagger"
id: "consuming-existing-wm-api-into-another-wm-project"
sidebar_label: "Consuming an Existing WaveMaker API"
last_update:
  author: "Author Name"
---
---

You can Import REST API endpoints via Open API/Swagger import feature.

In this document, see how you can use an API of an existing WaveMaker app into another WaveMaker app in just a few simple steps.

:::note
This document assumes that you have a sample HRDB imported in your project. For more information, see Connect to a sample DB.
:::

## Download Swagger from a WaveMaker Project

- Click **File Explorer**.
- Go to the following path `services/hrdb/designtime/hrdb_API.json`
- Download the file.

!download swagger

## Import Swagger into another Project

Import the downloaded swagger into another WaveMakar project. For more information on how to import, see Importing REST APIs via Swagger.

## Enter Host Name and Base Path

You will need the host name and base path when you import an API via Swagger Import.

:::note
Ensure that the application is deployed before you could use the API. For more information on how to deploy an app, see One-Click Deployment.
:::

!updating host and basepath

- Enter the **Host Name**. The host is the URL where the app is hosted. For example, `hostid.cloud.wavemakeronline.com/yourappname`.
- Enter the **Base Path**. For example, `/services` is the basepath for HRDB.
- Click **Save**.

The WaveMaker app's API is ready to consume in your project.

## See Also

OpenAPI support in WaveMaker - Blog  
Importing REST APIs via Swagger  

