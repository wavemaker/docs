---
title: "Configuring Open ID using Auth0 Provider"
id: "implement-openid-auth0-provider"
sidebar_label: "Open ID Integration - Auth0"
---

Auth0 is an identity and access management platform used to implement Single Sign On. This helps you authenticate and authorize users who access the application. Below are the steps to configure Open ID using Auth0. 

## Auth0 as Open ID Provider

Below are steps to choose Auth0 as Open ID provider in WaveMaker.

1. Select **Custom** as Open ID provider from the drop-down menu and enter **Auth0** as **Provider ID**.
[![](/learn/assets/wm-auth0-config.png)](/learn/assets/wm-auth0-config.png)

## Application in Auth0

Below are the steps to create an application in Auth0 Developer.

### Creating New Application

1. Go to [Auth0](https://auth0.com/) and set up user account. This is to create an Auth0 application to fetch the **Client ID** and **Client Secret**.

2. Go to **Dashboard**.

[![](/learn/assets/auth0-dashboard.png)](/learn/assets/auth0-dashboard.png)

3. Go to **Applications** > **Applications**.

[![](/learn/assets/auth0-applications-applications.png)](/learn/assets/auth0-applications-applications.png)

4. Click **Create Application** to start creating an application. Enter the Application name and click **Regular Web Application** to create a web application.

[![](/learn/assets/create-applications-confirm.png)](/learn/assets/create-applications-confirm.png)

### Configuring Application

1. Once Web Application is created, select **Java** as technology used in your project.

[![](/learn/assets/auth0-application-technology.png)](/learn/assets/auth0-application-technology.png)

2. Go to **Settings** > **Advance Settings**.

[![](/learn/assets/auth0-application-advancesettings.png)](/learn/assets/auth0-application-advancesettings.png)

3. Enter the **Allowed Callback URLs** available as Redirect URL in WaveMaker.

:::note
- **Redirect URL:** Redirect endpoint is the URL to which the client receives the response
:::

[![](/learn/assets/auth0-redirectURL.png)](/learn/assets/auth0-redirectURL.png)

4. Click **Save Changes** to save the given details.

[![](/learn/assets/auth0-application-savechanges.png)](/learn/assets/auth0-application-savechanges.png)\

With above steps Auth0 application is configured.

### Restricting Domain

You can add specific domains that can restrict access to the application. For more information on how to restrict domain in Auth0, see [Custom Domain in Auth0](https://auth0.com/docs/customize/custom-domains).

### Configuring Client ID and Client Secret

Client ID and Client Secret are provided in the WaveMaker's security configuration page as it is required to confirm the application's identity to provider.

1. Go to **Applications** > **Applications**.

[![](/learn/assets/auth0-applications-applications.png)](/learn/assets/auth0-applications-applications.png)

2. Click on the application and go to **Settings**.

[![](/learn/assets/auth0-settings.png)](/learn/assets/auth0-settings.png)

3. Fetch the Client Id and Client Secret available in Basic Information section and enter it in WaveMaker's security configuration page.

[![](/learn/assets/auth0-client-details.png)](/learn/assets/auth0-client-details.png)

### Configuring Identity Provider Endpoints

Identity provider endpoints are provided in WaveMaker's security configuration page to establish communication between provider and application during user authentication.

1. Go to **Applications** > **Applications**.

[![](/learn/assets/auth0-applications-applications.png)](/learn/assets/auth0-applications-applications.png)

2. Click on the application and go to **Settings**.

[![](/learn/assets/auth0-settings.png)](/learn/assets/auth0-settings.png)

3. Go to **Advance Settings** > **Endpoints**.

4. Go to  **Endpoints** to fetch Authorization, Token, JWKS, User Info endpoints. available in Basic Information section and enter it in WaveMaker's security configuration page.

[![](/learn/assets/auth0-endpoints.png)](/learn/assets/auth0-endpoints.png)

## Adding User

1. Go to **User Management** > **Users**.

[![](/learn/assets/auth0-users.png)](/learn/assets/auth0-users.png)

2. Click **Create User**. Enter email address and password and save the details to create a new user.

[![](/learn/assets/auth0-create-user.png)](/learn/assets/auth0-create-user.png)

With above steps, new user is created.

## Adding Role Attribute as Custom Claim

To configure role mapping in WaveMaker, a custom claim for role is created in Auth0 which can be mapped in WaveMaker's security configuration page under Role Mapping section. For more information on how to create a custom attribute in Auth0, refer [Custom Claims in Auth0](https://auth0.com/docs/secure/tokens/json-web-tokens/create-custom-claims).
