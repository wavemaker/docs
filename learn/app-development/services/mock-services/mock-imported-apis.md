---
title: "Mocking Imported REST APIs"
id: "mock-imported-apis"
sidebar_label: "Mocking REST API"
---
---

API Mockingbird can mock APIs to work concurrently on the front-end, while the back-end can develop APIs. It is a very functional and convenient way to get going with development flow when you need live data during the UI development or testing phase; in cases when the API is not ready, unavailable, or unreliable, especially when the API breaks in the time zone when the back-end developer may not be reachable. 

For this, when the API contract is made, it must import the OpenAPI/Swagger spec to create a mock API implementation.

## How it works

In WaveMaker Studio, mock API at the time of importing the REST API by enabling the API Mockingbird flag. It simulates actual APIs where you can generate requests and get realistic responses the actual API would return. 

API Mockingbird is smart to understand the data types of each field in your API response and choose mock data intelligently. This recognizes 100s of data types starting from First Name, Last name, Address, ZipCode, and Credit Card number for mocking the data.

## Create Mock Server for Imported API

1. A Swagger should be successfully imported into the Importing APIs section.
2. Mock Imported APIs.

### Enabling API Mocking

1. After importing the API, go to **APIs** resources and select **Imported APIs** to be mocked.

[![create mock api](/learn/assets/imported-apis.png)](/learn/assets/imported-apis.png)

3. Navigate to the **Settings** tab and click **Create Mock Server** to create a mock server for the first time.

[![create mock api](/learn/assets/apis-settings.png)](/learn/assets/apis-settings.png)

4. Once the mock server is created successfully, you will see a **Mock** tag attached to the imported API, as shown below.

[![create mock api](/learn/assets/moked-apis.png)](/learn/assets/moked-apis.png)

5. All the variables associated with this imported API will be pointing to the mocked service. 

### Disabling API Mocking

1. Select the mocked API, which displays a Mock tag. 
2. Navigate to the **Settings** tab, and toggle the **Mock APIs** button to disable.

[![create mock api](/learn/assets/enabled-moked-apis.png)](/learn/assets/enabled-moked-apis.png)

3. After disabling API mocking, the Imported APIs look as shown below. It is a click away to mock the service back again.

[![create mock api](/learn/assets/diable-moked-apis.png)](/learn/assets/diable-moked-apis.png)