---
title: "Configure Deployment Profile"
id: "deployment-profile"
sidebar_label: "Deployment Profile"
---
---

You can configure Database, REST Servers, and more. By default, two profiles are generated for every application.

1. **[Development](/learn/app-development/deployment/configuration-profiles#development-configuration-profile)**, which is used with the **Run** option,
2. **Deployment**, which is used with the **Deploy** option,
3. Or, Create a new **Custom** environment.

:::note
For more information about each profile, see [Configuration Profiles](/learn/app-development/deployment/configuration-profiles).
:::

To configure the deployment profile, go to **Setting**, click **Config Profiles**.

[![config settings](/learn/assets/config_settings.png)](/learn/assets/config_settings.png)

## Deployment Configuration Profile

The **Deployment Configuration Profiles,** used with the **Deploy** option, are editable. The values are set from the configuration of the underlying services at the time of import/creation. You can change them according to the Deployment Environment settings.

[![config deploy](/learn/assets/config_deploy.png)](/learn/assets/config_deploy.png)

## Database Settings

- **Records per request:** Max Results can be set for Database configuration. This option will restrict the number of rows returned by any Variable associated with the database. The REST API calls will impose this restriction.
- You can also specify the minimum and maximum **Pool size** to limit the number of connections to a database.

## REST

- **REST** service settings for Protocol, Host and Application path can be modified.

## SOAP

- **SOAP** service settings especially those related to the connection and request timeout can be modified.

## Web Socket

- **Web Socket** settings can also be modified.

## Security

Security settings allow enabling SSL encryption, XSS Protection, and X-Frame-Options.

### X-Frame-Options

X-Frame-Options is an HTTP response header, that indicates how the browser should handle rendering of embedded pages within frame or iframe or as objects.

With **X-Frame-Options**, you can do the following:

- **Disable** hence allowing all pages to be displayed in any frame, or
- **Enable** the option. Once enabled, the X-Frame options are available to be set as per application needs. 

By selecting **Enable**, you get the following three options:

- **Deny:** This option restricts the page from getting displayed in any frame, irrespective of the site accessing it.
- **Same Origin:** This option displays the page in a frame of the same origin as the page. This is the default behavior.
- **Allow From:** The page can only be displayed in a frame of a specified origin. With this option, the browser makes a decision on whether to display the response in the iframe based on the scheme, host and port values.  The “Allow From” header will automatically be converted to the Content Security Policy header, based on the target browser, thus ensuring cross-browser support. Multiple URLs can be set using comma-separated notation.

## Session Configuration

**Session Configuration** like Session Timeout and persistent login feature can be set.

## Token Based Authentication

Token-based Authentication is an authentication mechanism, that authenticates API request. The user is issued an API access token upon successful authentication, which will be used while invoking any API request. For more information on generating a Token [see here](/learn/app-development/app-security/token-based-authentication/). 

To modify token related details, click on Security tab. Under deployment check for Token-Based Authentication. Token Based Authentication consists of three options:

1. **Enable Tokens:** This option enables the token parameter and token validity options.
2. **Token Parameter:** The API's can be accessed once the token is issued. It is done by passing the token in the Request Header or Parameter.
3. **Token validity:** Default valid time for a token is 1800 sec (30 mins). However, you can customize the token valid time as required.

Click Apply to set the modified token details. **Note:** The user can modify only the token valid time and not the token parameter value.

- **CORS:** You can enable cross-origin resource sharing so that websites from different domains can access resources in a WaveMaker app. From here you can set:

    1. **Allow Credentials**: This option is to allow users to include credentials (including cookies and auth data) to be sent with the XHR requests.
    2. **Max Age**: This option is used to set the validity, in seconds, of the pre-flight request response.
    3. **Path**: Only the resources (in WaveMaker app) with the mentioned path can be exposed.
    4. **Origins**: WaveMaker app resources can be exposed only to these origins.

- **Security Provider Configuration**: Various details for service providers like LDAP, AD, SAML can be configured.

:::note
When changing the deployment profile in Studio for a deployed app, will not have any effect on the deployed version until you re-deploy the app to the Demo phase.
:::

## App Environment

**App Environment** settings can only be configured/updated, but not added or deleted. In other words, you are allowed to change the property values, but restricted to add or delete properties. [More on App Env property usage](/learn/how-tos/using-app-environment-properties/).

## OAuth 2.0

- **OAuth 2.0** provider settings can be modified by changing the Access Token URL, Authorization URL, Client Id and Client Secret.

## Build Options

Build options are a part of configure profile settings. You can choose from the following build options to deploy your app. There are two build options you can choose from.

WaveMaker Build (deprecated), Angular Build. For more information, see [Build Options](/learn/app-development/deployment/build-options).

## See Also

[Configuration Profiles](/learn/app-development/deployment/configuration-profiles)  
[One-Click Deployment](/learn/app-development/deployment/one-click-deployment)  
[Building a War file from a WaveMaker Project](/learn/app-development/deployment/building-with-maven)