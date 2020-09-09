---
title: "Configuration Profiles"
id: ""
---
---

**Configuration Profiles** allow you to run the same application under different environments with different settings, and this configuration information is stored in the form of profiles. 

If you need to configure a profile to provide lots of custom settings to suit third-party tools, services, network settings, or certificates, you can do it with the help of **Config Profiles**. This is in line with _[Maven Configuration Profiles](https://maven.apache.org/guides/mini/guide-building-for-different-environments.html)_. The profile can be accessed from the **Settings** option as shown in the image below.

[![config settings](/learn/assets/config_settings.png)](/learn/assets/config_settings.png)

You can configure Database, REST Servers, and more. By default, two profiles are generated for every application.

1. **Development**, which is used with the **Run** option,
2. **Deployment**, which is used with the **Deploy** option,
3. Or, Create a new **Custom** environment.

:::note
Before you select the environment, you should set the build option mode. For more information, see [Build Options in WaveMaker](/learn/app-development-deployment/build-options).
:::

## Development Configuration Profile

The **Development Configuration Profiles,** used with the **Run** option, are not editable. The values are set from the configuration of the underlying services at the time of import/creation. If you want to change these values, go the respective service configuration dialog and make the changes.

[![](/learn/assets/config_dev.png)](/learn/assets/config_dev.png)

- Under Security tab, Configuration SSL is disabled by default.
- There is no provision to configure X-Frame options. It is by default set to “Same Origin”.
- The App Environment properties can be added, deleted or modified. When you click on Save button, the properties get synchronized with all the profiles. For more information, see [Using App Environment Property](/learn/how-tos/using-app-environment-properties/).

## Deployment Configuration Profile

The **Deployment Configuration Profiles,** used with the **Deploy** option, are editable. The values are set from the configuration of the underlying services at the time of import/creation. You can change them according to the Deployment Environment settings.

[![](/learn/assets/config_deploy.png)](/learn/assets/config_deploy.png)

### Database Settings

- **Records per request:** Max Results can be set for Database configuration. This option will restrict the number of rows returned by any Variable associated with the database. The REST API calls will impose this restriction.
- You can also specify the minimum and maximum **Pool size** to limit the number of connections to a database.

### REST
- **REST** service settings for Protocol, Host and Application path can be modified.

### SOAP
- **SOAP** service settings especially those related to the connection and request timeout can be modified.

### Web Socket
- **Web Socket** settings can also be modified.

### Security
Security settings allow enabling SSL encryption, XSS Protection, and X-Frame-Options.
- **X-Frame-Options**: X-Frame-Options is an HTTP response header, that indicates how the browser should handle rendering of embedded pages within frame or iframe or as objects. 

With **X-Frame-Options**, you can do the following: 
- **Disable** hence allowing all pages to be displayed in any frame, or
- **Enable** the option. Once enabled, the X-Frame options are available to be set as per application needs. 
    
By selecting **Enable**, you get the following three options:
- **Deny:** This option restricts the page from getting displayed in any frame, irrespective of the site accessing it.
- **Same Origin:** This option displays the page in a frame of the same origin as the page. This is the default behavior.
- **Allow From:** The page can only be displayed in a frame of a specified origin. With this option, the browser makes a decision on whether to display the response in the iframe based on the scheme, host and port values.  The “Allow From” header will automatically be converted to the Content Security Policy header, based on the target browser, thus ensuring cross-browser support. Multiple URLs can be set using comma-separated notation.

### Session Configuration
**Session Configuration** like Session Timeout and persistent login feature can be set.

### Token Based Authentication
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
When changing the deployment profile in Studio for a deployed app, will not have any effect on the deployed version until you re-deploy the app to Demo phase.
:::

### App Environment
**App Environment** settings can only be configured/updated, but not added or deleted. In other words, you are allowed to change the property values, but restricted to add or delete properties. [More on App Env property usage](/learn/how-tos/using-app-environment-properties/).

### OAuth 2.0
- **OAuth 2.0** provider settings can be modified by changing the Access Token URL, Authorization URL, Client Id and Client Secret.

## Prefab Configuration Profile

If your app is using Prefab which has services imported, you can configure the same here. Same as with the app profiles, only Deployment Profile is configurable. Also, for Prefabs, you cannot change the Security settings.

[![](/learn/assets/config_prefab.png)](/learn/assets/config_prefab.png)

## Creating Configuration Profile

You can choose to **add different configuration profiles** as per the need of the application. These profiles can be deleted.

:::note
This custom profile can be used when exporting the project as a WAR file.
:::

[![](/learn/assets/config_custom.png)](/learn/assets/config_custom.png)

