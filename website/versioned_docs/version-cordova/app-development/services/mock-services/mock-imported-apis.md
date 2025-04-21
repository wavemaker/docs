---
title: "MockingBird - Mock REST APIs"
id: "mock-imported-apis"
sidebar_label: "Mock REST API"
---
---

API MockingBird can mock REST APIs with live authentic responses for your application, allowing you to simultaneously design the frontend, while the backend team can develop the APIs. This helps you keep the development flow continuous when you need APIs with live data during the UI development or testing phase. Also, in cases when the API breaks often, such as in the time zones when backend developers may not be able to offer support. 

MockingBird provides a convenient way to switch between mocked API and the orginal API from the Studio. To get started with MockingBird, when the API contract is made, the developer can import the OpenAPI/Swagger spec to mock APIs.

## How it works

In WaveMaker Studio, you can mock API at the time of importing the REST API by simply enabling the API MockingBird flag. It simulates actual APIs where MockingBird can generate requests and get realistic responses that an actual API would return. 

API MockingBird is smart to understand the data types of each field in your API response and choose mock data intelligently. This recognizes 100s of data types starting from First Name, Last name, Address, zip code, and Credit Card number for mocking the API data.

## Create Mock Server for Imported API

1. A Swagger should be successfully imported into the **Importing APIs** section.
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