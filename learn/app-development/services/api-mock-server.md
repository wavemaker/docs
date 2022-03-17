---
title: "API Mock Server"
id: "api-mock-server"
sidebar_label: "Mocking APIs"
---
---

**API Mock Server** is WaveMaker's own framework for instantly simulating a backend API with close-to-accurate sample responses. A Swagger file is enough to set up a running API mock server and deliver a URL.

The URL can be imported into WaveMaker Studio as a backend service, allowing developers to produce a demo app faster by shifting the focus on the frontend development. 


## Why API Mock Server

Have you been in a situation where a single test scenario consumes more time to complete with flaky service, involving roughly around 12 API calls? If yes, WaveMaker's API Mock Server can help. 

**Faster Parallel Development with Agility:** When backend and frontend development moves in parallel, the frontend team needs a dummy response to work with. Also, completely relying on a hosted backend for development can be challenging when your dev environment is externally dependent.

**Better Testing Experience**: The quicker the feedback of testing, the faster the bugs are caught and fixed, stabilizing the testing experience where you depend on a backend that heavily relies on API calls.

**Increase Quality:** Getting consistent feedback while testing a frontend development is important for continuous integration, and our API Mock Server stands in facilitating it.

## Setting up a Mock Server

### Step 1: Access API Mock Server

**[API Mock Server](http://apimock.wavemakeronline.com)**   
URL: http://apimock.wavemakeronline.com

[![](/learn/assets/create-mock-api.png)](/learn/assets/create-mock-api.png)

### Step 2: Create Mock API

- Click **Create Mock API**.
- Upload or drag-and-drop a Swagger schema file and provide a service name.
- Choose a **Locale** for locale-specific mock data and click **Create**.

[![](/learn/assets/upload-swagger-json-for-mock-api.png)](/learn/assets/upload-swagger-json-for-mock-api.png)

- The API Mock Service starts running, and a Mock API URL is ready.
- Copy the **Mock API URL**.

[![](/learn/assets/running-mock-services.png)](/learn/assets/running-mock-services.png)

### Step 3: Import API in WaveMaker Studio

- Go to WaveMaker Studio, Click **APIs** and **Imported APIs**.

[![](/learn/assets/import-api-screen.png)](/learn/assets/import-api-screen.png)

- Paste the **Mock API URL** and click **Next**.

[![](/learn/assets/paste-mock-api-url.png)](/learn/assets/paste-mock-api-url.png)

- Click **Import**.

[![](/learn/assets/click-import-api.png)](/learn/assets/click-import-api.png)

- Access the mocked API in WaveMaker Studio.

[![](/learn/assets/successful-mocked-service.png)](/learn/assets/successful-mocked-service.png)

