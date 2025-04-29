---
title: "Invoking Web App APIs in Mobile Apps"
id: "invoking-web-app-apis-mobile-apps"
---
---

To access the APIs of WaveMaker Web App (say Project1) into Hybrid Mobile App (say, Project2), you will need to import the services in the form of REST services.

The API’s in Project1 can be of two types:

- _Authenticated_: In this case, you will need to either use HTTP Authentication while importing the service or you could use the authorization token as the Header.
- _No authentication_: In this case, you can directly import the web API into the project2 as a REST API.

## Accessing unAuthenticated Services

1. In the web app Project1: (As an example, we will look at accessing the sample database services i.e hrdb’s services)
    - From the [API Designer](/learn/assets/API_Access.png) navigate to the **Database Service** to access the API's and from the Test tab copy the **Request URL**
2. Open the mobile app, Project2:
    
    - Using [Web Service Integration](/learn/app-development/services/web-services/web-services/), import Rest service
    - Provide the above URL as Service URL.
    - Click on Test and Import the web service.
    
:::note
You will need to deploy your application(Project1) to access its services in Project2.
:::

## Accessing Authenticated Services

In the case of Authenticated Web App, you will need to use either HTTP Authentication while importing the service or pass the Authorization token in the Header.

We recommend you generate an authorization token at the initial load of the application (for instance, from the _onPageReady_ event of the landing page of the application or from the _onSuccess_ event of the _loginAction_, in the case security is enabled for Project2). You can then use the authorization token to access the other authenticated services of Project1.

To import the Web API’s in Project2, you will need to use the Request URL for the API’s calls of Project1. You will be able to access the API's for the services in the Project1 through the [API Designer](/learn/assets/API_Access.png).

You will need to use HTTP Authentication initially while importing the token API to generate the access token. This access token will then be used to access the remaining authenticated services.

### Step 1: Obtain the Auth Token

1. In the Web App, Project1:
    - From the [API Designer](/learn/assets/API_Access.png), navigate to the **Security Service** to access the authenticated API's
    - Locate the **Get Token API**, and copy the Description Request URL from the Test tab of the API.
2. Open Mobile App, Project2:
    - Using [Web Service Integration](/learn/app-development/services/web-services/web-services/), import REST Service
    - Provide the above URL as Service URL.
    - Set HTTP Authentication to Basic and provide the test User Name and Password.
    - Test the connection.
    - From the Response tab, locate and make a note of the _wm_auth_token_.
    - Import the service.
3. Variable for Auth Token
    - [Access variable dialog](/learn/assets/var_sel.png) and click the New Variable button to create a Model Variable
    - Enter _wm_auth_token_ from the previous step as the **dataValue**
4. After the token is generated and stored, you can access the services of Project1 using that token.

### Step 2: Accessing Authenticated Services

1. In the Project1: (As an example, we will look at accessing the sample database services i.e HRDB’s services.)
    - From [API Designer](/learn/assets/API_Access.png) navigate to the **Database Service** to access the authenticated API's
    - from the Test tab copy the Request URL
2. Open Mobile app, Project2:
    - [Import REST Service](/learn/app-development/services/web-services/web-services/)
    - Provide the above URL
    - In the HEADERS tab provide the Name as "wm_auth_token" and Test Value as the token generated above.
    - Click on Test and Import the web service.

:::note
You will need to deploy your application(Project1) to access its services in Project2.
:::

## See Also

[Amazon Cognito](/learn/hybrid-mobile/mobile-integrations-amazon-mobile-analytics/)  
[Amazon SNS](/learn/hybrid-mobile/mobile-integrations-amazon-sns/)  
[Amazon Mobile Analytics](/learn/hybrid-mobile/mobile-integrations-amazon-mobile-analytics/)  
[Push Notifications](/learn/hybrid-mobile/use-push-notification-wm-mobile-app/)  
