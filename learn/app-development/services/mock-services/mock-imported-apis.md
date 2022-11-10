---
title: "Mocking Imported REST APIs"
id: ""
sidebar_label: "Mocking REST APIs"
---
---

## Mocking Imported REST APIs
Imagine you are developing a UI using WaveMaker on top of the API your backend team has delivered. All of a sudden you realize that the API is down. The backend team is not even in your timezone and this API server’s instability is impacting your productivity. What do you do?
With WaveMaker MockingBird API feature, you don’t have to rely on API being available for you to lodevelop the UI. Once the API contract is made and you have imported the OpenAPI/Swagger spec of it, all you have to do is ask WaveMaker to create a mock implementation of the API. WaveMaker’s Mock API is unlike any other Mock API implementation available currently. Our mock server is smart enough to understand the data types of each field in your API response and choose mock data intelligently. This recognizes 100s of data types starting from First Name, Last name, Address, ZipCode, Credit Card number for the mock data..

## Steps to Create Mock server for an imported API.

### Step 1: A swagger should be successfully imported into the  Importing APIs section
### Step 2: Mock Imported APIs
- After the Importing APIs go to APIs section and select imported APIs which is to be mocked
[![create mock api](/learn/assets/imported-apis.png)](/learn/assets/imported-apis.png)
- Navigate to the settings tab and click the 'Create Mock Server’ button to create a mock server for the first time.
[![create mock api](/learn/assets/apis-settings.png)](/learn/assets/apis-settings.png)
- Once mock server is created successfully, you will see mock tag attached to the imported API as shown below
[![create mock api](/learn/assets/moked-apis.png)](/learn/assets/moked-apis.png)
- Now all the variables associated with this imported API will be pointing to the mocked service. To point it to the original service toggle Use MockData button
[![create mock api](/learn/assets/enabled-moked-apis.png)](/learn/assets/enabled-moked-apis.png)
- After disabling mocking this is how Imported APIs look, it's a click away to mock the service back again.
[![create mock api](/learn/assets/diable-moked-apis.png)](/learn/assets/diable-moked-apis.png)




