---
title: "API Mock Server"
id: "api-mock-server"
sidebar_label: "Mocking APIs"
---
---

:::important
We have discontinued supporting the API mock server feature. Instead, we encourage you to take advantage of the newly introduced Mockingbird feature built into the platform.
:::

**API Mock Server** is a framework for simulating a backend API with sample responses. These sample responses are dummy data with close-to-accurate responses used for developing the UI. 

You need a Swagger file to set up a running API mock server, which delivers a URL for consuming the service.

## Mocked API as a Service

Accessing App: **[API Mock Server](http://apimock.wavemakeronline.com)**   

### How it works in WaveMaker Studio

Like any REST service, when you create a variable and bind it with widgets, the mocked API service produces dynamic data into widgets, giving the application a real feel with refreshed responses every time. 

## Why API Mock Server

The URL can be imported into WaveMaker Studio as a backend service, allowing developers to create an application faster by focusing on the frontend development. 

<!-- If you have been in a situation where a single test scenario consumes more time to complete, involving roughly around 12 API calls, if yes, WaveMaker's API Mock Server can help. -->

**Faster Parallel Development and Agility:** When backend and frontend development moves in parallel, the frontend team needs a dummy response to work with. Also, completely relying on a hosted backend for development can be challenging when your dev environment is externally dependent.

**Better Testing Experience**: The quicker the feedback of testing, the faster the bugs are caught and fixed, stabilizing the testing experience where you depend on a backend that heavily relies on API calls.

**Increase Quality:** Getting consistent feedback while testing a frontend development is important for continuous integration. 


## Setting up a Mock Server

### Step 1: Access API Mock Server

Accessing API Mock Server to host a mocked API.

- Go to the **Server**: https://apimock.wavemakeronline.com

[![create mock api](/learn/assets/create-mock-api.png)](/learn/assets/create-mock-api.png)

### Step 2: Create a Mock API

- Click **Create Mock API**.
- Upload or drag-and-drop a Swagger schema file. For example, *petstore.json*
- Provide a service **Name**. For example, *petstore*.
- Choose a **Locale** for locale-specific mock data and click **Create**.

[![swagger json](/learn/assets/upload-swagger-json-for-mock-api.png)](/learn/assets/upload-swagger-json-for-mock-api.png)

### Step 3: Copy the Mocked  API

- The API Mock Service starts running, and creates a **Mock API URL**.
- Copy the **Mock API URL**.

[![running mock](/learn/assets/running-mock-services.png)](/learn/assets/running-mock-services.png)

## Import Mocked API in WaveMaker Studio

- Go to WaveMaker Studio, Click **APIs** and **Imported APIs**.

[![import api](/learn/assets/import-api-screen.png)](/learn/assets/import-api-screen.png)

- Paste the **Mock API URL** and click **Next**.

[![paste mock api](/learn/assets/paste-mock-api-url.png)](/learn/assets/paste-mock-api-url.png)

- Click **Import**.

[![click import](/learn/assets/click-import-api.png)](/learn/assets/click-import-api.png)

- Access the mocked API in WaveMaker Studio.

[![mocked service](/learn/assets/successful-mocked-service.png)](/learn/assets/successful-mocked-service.png)   

