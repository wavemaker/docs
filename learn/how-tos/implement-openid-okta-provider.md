---
title: "Configuring Open ID using Okta Provider"
id: "implement-openid-okta-provider"
sidebar_label: "Open ID Integration - Okta"
---

Okta's identity and access management system helps manage access control and user identity. Okta provides services to manage what resources each user can access and what functions each user can perform. In this document, we discuss the steps to configure Open ID using Okta.

## Okta as Open ID Provider

Below are steps to choose Okta as Open ID provider in WaveMaker.

1. Select **Custom** as Open ID provider from the drop-down menu and enter **Okta** as **Provider ID**.
[![](/learn/assets/wm_openid_ok1.png)](/learn/assets/wm_openid_ok1.png)

## Application in Okta Developer

Below are the steps to create an application in Okta Developer.

### Creating New Application

1. Go to [Okta Developer](https://developer.okta.com/login/) and set up user account. This is to create an OAuth application to fetch the **Client ID** and **Client Secret**.

2. Go to **Dashboard**.

[![](/learn/assets/wm_openid_ok2.png)](/learn/assets/wm_openid_ok2.png)

3. Go to **Applications** > **Applications**.

[![](/learn/assets/wm_openid_ok3.png)](/learn/assets/wm_openid_ok3.png)

4. Click **Create App Integration** to start creating an application.

[![](/learn/assets/wm_openid_ok4.png)](/learn/assets/wm_openid_ok4.png)

### Configuring Application

1. Select **Open ID Connect** option as Sign-in method.

[![](/learn/assets/wm_openid_ok6.png)](/learn/assets/wm_openid_ok6.png)

2. Select **Web Application** as Application type and click **Next**.

[![](/learn/assets/wm_openid_ok7.png)](/learn/assets/wm_openid_ok7.png)

3. Enter the **App Integration Name** and check **Client credentials** as **Grant type**.

[![](/learn/assets/wm_openid_ok8.png)](/learn/assets/wm_openid_ok8.png)

4. Click **Add URL** to add new redirect URLs.

:::note
- **Redirect URL:** Redirect endpoint is the URL to which the client receives the response
:::

[![](/learn/assets/wm_openid_ok9.png)](/learn/assets/wm_openid_ok9.png)

5. Enter **sign-in redirect URL** and **sign-out redirect URL**. 

:::note
- Sign-in redirect URL is available in WaveMaker authentication and authorization page.
- Add v1/logout to the end of sign-in redirect URL and enter it as sign-out redirect URL.
**Example:** 
Sign-in redirect URL: https://example.com/okta
Sign-out redirect URL: https://example.com/okta/v1/logout
::: 

[![](/learn/assets/wm_openid_ok10.png)](/learn/assets/wm_openid_ok10.png)

### Restricting Domain

1. Select the appropriate access restriction and click **Save**. This steps ensures domain restrictions to access the application.

[![](/learn/assets/wm_openid_ok12.png)](/learn/assets/wm_openid_ok12.png)

### Fetching Client Details

1. Click **Copy** to copy the Client ID to clipboard. Later, provide this information in WaveMaker security configurations. 

[![](/learn/assets/wm_openid_ok13.png)](/learn/assets/wm_openid_ok13.png)

2. Click **Copy** icon to copy the Client Secret to clipboard. Later, provide this information in WaveMaker security configurations. 

[![](/learn/assets/wm_openid_ok14.png)](/learn/assets/wm_openid_ok14.png)

### Enabling Scopes

1. Go to **Okta API Scopes** and click **Grant** to include it as scope.

[![](/learn/assets/wm_openid_ok15.png)](/learn/assets/wm_openid_ok15.png)

### Fetching Security Endpoints

1. Click **Security** from the menu.

[![](/learn/assets/wm_openid_ok16.png)](/learn/assets/wm_openid_ok16.png)

2. Go to **API** in the drop-down menu.

[![](/learn/assets/wm_openid_ok17.png)](/learn/assets/wm_openid_ok17.png)

3. Click **default**.

[![](/learn/assets/wm_openid_ok18.png)](/learn/assets/wm_openid_ok18.png)

4. Click **Metadata URL** that redirects to the page which contains authorization endpoint, token endpoint, JWKS endpoint and User info endpoint.

[![](/learn/assets/wm_openid_ok19.png)](/learn/assets/wm_openid_ok19.png)

Get the endpoints and client details to provide in the security configuration page in WaveMaker.


## Role Mapping using Okta Provider

Below are the steps to assign you the role in Okta Developer.

### Adding Role Attribute

1. Go to [Okta Developer](https://developer.okta.com/login/) and set up user account in the Developer console of Okta.
2. Go to **Applications** > **Applications**.
3. Check if we have the required web application else we create a new web application.

4. Go to **Directory** > **Profile Editor**.
5. Click on the **Profile** created by you.

[![](/learn/assets/wm_okta_role2.png)](/learn/assets/wm_okta_role2.png)

6. Click **Add Attribute** and fill in the required attribute details.

[![](/learn/assets/wm_okta_role3.png)](/learn/assets/wm_okta_role3.png)

7. Go to **People** > **Username**.

[![](/learn/assets/wm_okta_role4.png)](/learn/assets/wm_okta_role4.png)

8. Go to **Profile** and click on **Edit** to provide the value for the role attribute.

[![](/learn/assets/wm_okta_role5.png)](/learn/assets/wm_okta_role5.png)

### Creating Custom Server

Custom server is created as custom claim like role attribute is not allowed in the default server. The below steps are to configure the custom server.

1. Go to **Security** > **API** > **Add Authorization Server**.

[![](/learn/assets/wm_okta_role6.png)](/learn/assets/wm_okta_role6.png)

2. Provide the required server details and save the details.
3. Once the server is created, click on the server.

[![](/learn/assets/wm_okta_role7.png)](/learn/assets/wm_okta_role7.png)

4. Go to **Claims**, add a new claim.

[![](/learn/assets/wm_okta_role8.png)](/learn/assets/wm_okta_role8.png)

5. Go to **Access Policies**, add a new policy.

[![](/learn/assets/wm_okta_role9.png)](/learn/assets/wm_okta_role9.png)

6. Once the policy is added, we add a new rule.

[![](/learn/assets/wm_okta_role10.png)](/learn/assets/wm_okta_role10.png)

7. Lastly, we go to **Token Preview** and add the required details and. Click on **Preview Token** to verify whether the created role attribute is working correctly.

[![](/learn/assets/wm_okta_role11.png)](/learn/assets/wm_okta_role11.png)

