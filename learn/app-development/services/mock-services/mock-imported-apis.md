---
title: "Mocking Imported REST APIs"
id:"  "
sidebar_label: "Mocking REST APIs"
---
---

API Mockingbird can be a very practical feature when you need live data during the development and testing phase. It is useful in cases when the API is not ready, unavailable, or unreliable, especially when the API breaks in the time zone when developers may not be reachable. 

You can use mock APIs to work concurrently on the front-end and back-end to develop the application in the initial stages. When the API contract is made, all it needs is to import the OpenAPI/Swagger spec to create a mock API implementation in WaveMaker Studio.

## How it works

Mock the imported REST API within the Studio when importing them using a flag, enabling API Mockingbird. It simulates actual APIs where you can generate requests and get realistic responses the actual API would return. It is smart enough to understand the data types of each field in your API response and choose mock data intelligently. This recognizes 100s of data types starting from First Name, Last name, Address, ZipCode, and Credit Card number for the mock data.

## Create Mock Server for Imported API

1. A swagger should be successfully imported into the Importing APIs section.
2. Mock Imported APIs

- After the Importing APIs, go to the APIs section and select imported APIs which are to be mocked.

[![create mock api](/learn/assets/imported-apis.png)](/learn/assets/imported-apis.png)

- Navigate to the settings tab and click the 'Create Mock Server' button to create a mock server for the first time.

[![create mock api](/learn/assets/apis-settings.png)](/learn/assets/apis-settings.png)

- Once the mock server is created successfully, you will see the mock tag attached to the imported API, as shown below.

[![create mock api](/learn/assets/moked-apis.png)](/learn/assets/moked-apis.png)

- Now, all the variables associated with this imported API will be pointing to the mocked service. Point it to the original service toggle MockAPIs button.

[![create mock api](/learn/assets/enabled-moked-apis.png)](/learn/assets/enabled-moked-apis.png)

- After disabling mocking, this is how Imported APIs look. It's a click away to mock the service back again.

[![create mock api](/learn/assets/diable-moked-apis.png)](/learn/assets/diable-moked-apis.png)