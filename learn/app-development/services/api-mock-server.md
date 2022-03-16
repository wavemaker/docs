---
title: "API Mock Server"
id: "api-mock-server"
sidebar_label: "Mocking APIs"
---
---

**API Mock Server**  is WaveMaker’s own framework for instantly simulating a backend API with close to accurate sample responses. A swagger file is enough to set up a running API mock server and deliver a URL in seconds.

The URL can be imported in Wavemaker Studio as a backend. Wavemaker developers can now produce a demo app in minutes by just focusing on the UI Development. 


## Why API Mock Server

Have you been in a situation where a single test scenario consumes more time to complete with flaky service (which involves roughly around 12 API calls), If yes embrace Wavemaker’s API Mock Server. 

Faster Parallel Development. - If backend and UI development are happening in parallel, UI needs a dummy response to work with. Also completely relying on a hosted backend for development can be problematic since your dev environment is now externally dependent.

Quicker the feedback of testing, faster the bugs are caught and fixed. Stabilizes the testing experience where you are dependent on a backend which is too naive to rely on API calls.

Getting quick and consistent feedback while testing a front end development is important for continuous integration and our API Mock Server stands in facilitating this.

## Setting up a Mock Server
#### Step 1: Access API Mock Server
Access at http://apimock.wavemakeronline.com

[![](/learn/assets/create-mock-api.png)](/learn/assets/create-mock-api.png)

#### Step 2: Create Mock API
- Click Create Mock API
- Upload or Drag and Drop Swagger Schema file and Add service name
- Choose a Locale for locale-specific mock data and Click Create

[![](/learn/assets/upload-swagger-json-for-mock-api.png)](/learn/assets/upload-swagger-json-for-mock-api.png)

- The API Mock Service starts running within seconds and a Mock API URL is accessible

[![](/learn/assets/running-mock-service.png)](/learn/assets/running-mock-service.png)

#### Step 3: Import API in Wavemaker Studio
- Copy Mock API URL
- In Wavemaker Studio, Click on APIs and Imported APIs.

[![](/learn/assets/import-apis-screen.png)](/learn/assets/rimport-apis-screen.png)

- Paste the Mock API URL and Click next

[![](/learn/assets/paste-mock-api-url.png)](/learn/assets/paste-mock-api-url.png)

- Click Import and It's Done!

[![](/learn/assets/click-import-api.png)](/learn/assets/click-import-api.png)

- The mocked API is now accessible in Wavemaker Studio.

[![](/learn/assets/successful-mock-api-import.png)](/learn/assets/successful-mock-api-import.png)

