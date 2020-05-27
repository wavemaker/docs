---
title: "SSO Azure Active Directory Open ID Integration"
id: "sso-openid-azure-active-directory"
sidebar_label: "OpenID Integration - Azure AD"
---
---

There are many ways to enable security for your app in WaveMaker. You can use Azure Active Directory (Azure AD) which is a Microsoft cloud-based identity and access management service. This document helps you to enable SSO services using Azure AD with Open ID integration. Follow the steps below to configure it.

## Registering your application in Azure AD

- Go to **App Registrations**.

![searching service azure](/learn/assets/search-app-registration-azure.png)

- Click **New registration**.  

![new registration](/learn/assets/new-registration-azure.png)

![register](/learn/assets/register-application-azure.png)

![redirect url](/learn/assets/redirect-url-azure.png)

### Registering the Application

- **Name**: Enter the application name.
- **Supported account types**: Select the type of account to give permissions on the application.
- **Redirect URL**: Provide a redirection URL (optional).

### Application Settings

- Go to **Enterprise applications**.

![enterprise apps](/learn/assets/search-enterprise-apps.png)

- Select the application which you created.

![select created app](/learn/assets/open-created-application-azure.png)

- Select the **Assign users and groups** option.

![Click assign users and groups](/learn/assets/assign-users-groups-azure.png)

- Click **Add User** to add the domain users to give permissions.


- On the Created App Overview page, find the Application (client) ID value of the application. Copy this value for later.
- Now select the Endpoints option in App overview page and copy the OpenID Connect metadata document url and paste the URL in a browser window which will show you the JSON with OpenId connection Url’s  details which will be used in configuring the details in Wavemaker-->Security-->Openid configurations.

- In the Azure Active Directory left menu select Certificates & secrets ---> Client secrets ---> Select New Client Secret ---> Select Duration example 1year --> Copy the generated Secret value.

Please refer following Screenshots for more details.

## Open ID Configuration Setup in WaveMaker

- Now go to Wavemaker project ---> Select Security window ---> Authentication --> Security Providers --> Select OpenID and provide the Identity Information as shown in above provided Endpoint document  OpenID Connect metadata document.

ProviderID: Select Custom and Enter the Provider Name ( Microsoft).

Authorization Url : Check for the authorization_endpoint url in metadata doc provide here.

Token Url: Check for the token_endpoint url in metadata doc provide here.

JWKS Url: Check for the jwks_uri in metadata doc provide here.

User Info Endpoint: Check for the userinfo_endpoint url in metadata doc provide here.


Logout Url: Check for the end_session_endpoint url in metadata doc provide here.


Client ID:  Paste the Client ID copied in step1.


Client Secret: Paste the Client Secret ID generated in step1.

Now copy the Redirect Url from Service Provider Information section and go to Azure AD app Overview section select the Redirect URIs and provide the redirect URI.

## Step 3: Test the Application

Go to Wavemaker Project--->Select Preview--->You observe microsoft SSO login page will be visible and try login one AD user details which will redirect you to the Wavemaker Application Screen.

## See Also

[Aunthentication in Wavemaker](/learn/app-development/app-security/authentication/#openid)  
[quickstart-v2-java-webapp](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-java-webapp)  
[protocols-openid-connect-code](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-openid-connect-code)  