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
Visit http://apimock.wavemakeronline.com


#### Step 2: Create Mock API
- Click Create Mock API
- Upload Swagger Schema File and Add service name
- Choose a Locale for locale-specific mock data

##### Mock URL is accessible as soon as APIMock Service starts running

#### Step 3: Import API in Wavemaker Studio
- Copy Mock URL
- In Wavemaker Studio, Click on APIs and Imported APIs.
- Paste the Mock API URL and Click next
- Click Import and It's Done!
- The mocked API is now accessible in Wavemaker Studio.

