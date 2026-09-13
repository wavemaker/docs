---
title: "REST Services using OAuth 2.0"
id: "oauth-2-0-rest-services"
---
---

**OAuth 2** is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, etc.. OAuth 2 focuses on client developer simplicity by providing secured delegated access for web and desktop applications. It works by delegating user authentication to the service that hosts the user account and authorizing third-party applications to access the user account.

## Device Flow

The device flow is illustrated in the below image. 

[![](/learn/assets/instagram-design-flow.png)](/learn/assets/instagram-design-flow.png) 

### Device Flow Steps Explained   

1. The client requests the authorization server to give the access. The request includes the client identifier in it.
2. The authorization server provides a verification code, an end- user code, and the end-user verification URI.
3. The client instructs the end-user to use its user-agent (elsewhere) and visit the provided end-user verification URI. The client provides the end-user with the end-user code that is necessary to enter, in order to gain access.
4. The authorization server authenticates the end-user (via the user-agent) and prompts the end-user to grant the client's access request. If the end-user accepts the client's request, then the end-user enters the end-user code provided by the client. The authorization server validates this end-user code.
5. While the end-user authorizes (or denies) the client's request (D), the client continuously polls the authorization server to verify if the end-user authorization step is successfully accomplished. The client's request includes the verification code and its client identifier.
6. Assuming that the end-user has granted access, the authorization server validates the verification code provided by the client and eventually responds with the access token.

### API Integration

Configuring an app to use these Web Services can be an uphill task. WaveMaker abstracts OAuth and offers API integration without the need for writing code. 

WaveMaker integrates the OAuth 2.0 configuration while [importing a REST Service](/learn/assets/Web_Service1.png) by:

- providing the  **URL** of  the  API to be invoked within the app,
- setting **HTTP Authentication** to OAuth 2.0,
- providing **OAuth Provider**, and
- completing the **Provider Configuration**.

## WaveMaker Implementation

You can [add a REST service](/learn/assets/Web_Service1.png) to your app from the Web Services Resource Explorer. In the Web Service dialog

1. Enter the URL that you want to invoke.
2. Select OAuth ProviderSet **HTTP Authentication** to OAuth 2.0 

[![](/learn/assets/rest_oauth.png)](/learn/assets/rest_oauth.png)

## OAuth Configuration

For OAuth configuration, you can do the following. 

WaveMaker provides support for most OAuth providers. [Select a provider](#supported-oauth-20-providers) from the list and add a provider.

### OAuth Provider Configuration

When you select an OAuth Provider, fill in the prompted details in the **OAuth Provider Configuration** dialog.

[![](/learn/assets/rest_oauth_config.png)](/learn/assets/rest_oauth_config.png)

- **Provider ID** is the OAuth 2.0 Service Provider, selected from the list or enter the name if you are adding your own.
- **Callback URL** is pre populated by WaveMaker and is not editable. You can copy this link and use it to as the callback URL in OAuth Provider app settings page.
- **Authorization URL** and **Access Token URL** of the OAuth service provider for obtaining the authorization and access to the service. These fields are auto-populated in case of the selected providers, else you need to enter them manually.
- Client Credentials issued once your app is registered with the Provider. It will be in the form of **Client ID** and **Client Secret**.
- **Send Access Token As** Header or Query. Usually, the OAuth providers need the access token to be sent as a part of Header, few might require it as a Query parameter. Check with your OAuth provider and select the appropriate option. It is set to Header by default.
- **Scope** defines what the access token can do and what resources it can access. For the listed Providers the popular Scopes are listed for you to select. Check with the selected OAuth 2 service provider to understand how to further configure this field.

### Testing Configuration

When you have configured the OAuth 2 Provider, **Test** the configuration to complete the Import process. While testing, you will be prompted to enter the login credentials. This is to obtain the Access Token details and to set the various configuration settings.

[![](/learn/assets/rest_oauth_test.png)](/learn/assets/rest_oauth_test.png)

- Set the Headers, Query Params and Path Parameters, as needed.
- You have the option to change the provider details and provider itself.
- From the [Project Settings](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) under [Profile Configuration](/learn/assets/configAccess.png) you can modify OAuth 2.0 configurations. These can be configured seperately for Deployment profile to be used while deploying the app. Remember to register the call back url provided therein with the oauth server.

[![](/learn/assets/rest_oauth_prof.png)](/learn/assets/rest_oauth_prof.png)

## Runtime Behavior

- Just like any REST Service, you need to create a variable to access the OAuth APIs. See, [Variable Creation](var_sel.png). 
- When the service is invoked through the variable, the user will be prompted to enter their credentials.

## Supported OAuth 2.0 Providers

WaveMaker provides few OAuth 2 service providers out of the box. When selected the provider details are pre-populated and need to be further configured. These providers include:

<table><tbody><tr><td><img class="no-shadow alignnone wp-image-20280 size-full" src="/learn/assets/amazon.png" alt="" width="24" height="24"/></td><td><a href="http://login.amazon.com/manageApps" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20281 size-full" src="/learn/assets/box.png" alt="" width="24" height="24"/></td><td><a href="https://developer.box.com/" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20282 size-full" src="/learn/assets/dropbox.png" alt="" width="24" height="24"/></td><td><a href="https://www.dropbox.com/developers" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20283 size-full" src="/learn/assets/facebook.png" alt="" width="24" height="24"/></td><td><a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20284 size-full" src="/learn/assets/github.png" alt="" width="24" height="24"/></td><td><a href="https://github.com/settings/developers" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20299 size-full" src="/learn/assets/Google.png" alt="" width="24" height="25"/></td><td><a href="https://console.developers.google.com" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20286 size-full" src="/learn/assets/instagram.png" alt="" width="24" height="24"/></td><td><a href="https://www.instagram.com/developer/" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20287 size-full" src="/learn/assets/linkedin.png" alt="" width="24" height="24"/></td><td><a href="https://www.linkedin.com/developer/apps/" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20288 size-full" src="/learn/assets/outlook.png" alt="" width="24" height="24"/></td><td><a href="https://apps.dev.microsoft.com" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr><tr><td><img class="no-shadow alignnone wp-image-20289 size-full" src="/learn/assets/salesforce.png" alt="" width="24" height="24"/></td><td><a href="https://login.salesforce.com/" target="_blank" rel="noopener noreferrer">Developer Link</a></td></tr></tbody></table>

