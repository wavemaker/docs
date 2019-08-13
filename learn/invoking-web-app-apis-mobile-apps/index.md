---
title: "Invoking Web App APIs in Mobile Apps"
id: "invoking-web-app-apis-mobile-apps"
---

access the APIs of WaveMaker Web App (say Project1) into Hybrid Mobile App (say, Project2), you will need to import the services in the form of REST services.

The API’s in Project1 can be of two types:

- : In this case, you will need to either use HTTP Authentication while importing the service or you could use the authorization token as the Header.
- _authentication_: In this case, you can directly import the web API into the project2 as a REST API.

## unAuthenticated Services

1. the web app Project1: (As an example, we will look at accessing the sample database services i.e hrdb’s services)
    - the [Designer](http://[supsystic-show-popup id=110]) navigate to the **Service** to access the API's and from the Test tab copy the **URL**
2. the mobile app, Project2:
    
    - [Service Integration](http://[supsystic-show-popup id=115]), import Rest service
    - the above URL as Service URL.
    - on Test and Import the web service.
    
    : You will need to deploy your application(Project1) to access its services in Project2.

## Authenticated Services

the case of Authenticated Web App, you will need to use either HTTP Authentication while importing the service or pass the Authorization token in the Header.

We recommend you generate an authorization token at the initial load of the application (for instance, from the event of the landing page of the application or from the event of the , in the case security is enabled for Project2). You can then use the authorization token to access the other authenticated services of Project1.

import the Web API’s in Project2, you will need to use the Request URL for the API’s calls of Project1. You will be able to access the API's for the services in the Project1 through the [Designer](http://[supsystic-show-popup id=110])

will need to use HTTP Authentication initially while importing the token API to generate the access token. This access token will then be used to access the remaining authenticated services.

### 1: Obtain the Auth Token

1. the Web App, Project1:
    - the [Designer](http://[supsystic-show-popup id=110]), navigate to the **Service** to access the authenticated API's
    - the **Token API**, and copy the Description Request URL from the Test tab of the API.
2. Mobile App, Project2:
    - [Service Integration](http://[supsystic-show-popup id=115]), import REST Service
    - the above URL as Service URL.
    - HTTP Authentication to Basic and provide the test User Name and Password.
    - the connection.
    - the Response tab, locate and make a note of the _\_auth\_token_
    - the service.
3. for Auth Token
    - [variable dialog](http://[supsystic-show-popup id=105]) and click the New Variable button to create a Model Variable
    - _\_auth\_token_ from the previous step as the
4. the token is generated and stored, you can access the services of Project1 using that token.

### 2: Accessing Authenticated Services

1. the Project1: (As an example, we will look at accessing the sample database services i.e HRDB’s services.)
    - [Designer](http://[supsystic-show-popup id=110]) navigate to the **Service** to access the authenticated API's
    - the Test tab copy the Request URL
2. Mobile app, Project2:
    - [REST Service](http://[supsystic-show-popup id=115])
    - the above URL
    - the HEADERS tab provide the Name as "wm\_auth\_token" and Test Value as the token generated above.
    - on Test and Import the web service.

: You will need to deploy your application(Project1) to access its services in Project2.

4 Mobile Integrations

- [4.1 Amazon Cognito](/learn/hybrid-mobile/mobile-integrations/)
- [4.2 Amazon SNS](/learn/hybrid-mobile/mobile-integrations-amazon-sns/)
- [4.3 Amazon Mobile Analytics](/learn/hybrid-mobile/mobile-integrations-amazon-mobile-analytics/)
- [4.4 Push Notifications](/learn/hybrid-mobile/use-push-notification-wm-mobile-app/)
- [4.5 Invoking Web App APIs in Mobile Apps](#)
