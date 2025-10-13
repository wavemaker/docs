---
title: "Configuring Open ID using Google Provider"
id: "implement-openid-google-provider"
sidebar_label: "Open ID Integration - Google"
---

Google Identity Platform allows you to manage application access by providing authentication and authorization services. With this, you can add user identity, restrict application access, and protect user accounts. Below are the steps to configure Open ID using Google.

## Google as Open ID Provider

Below are steps to choose Google as Open ID provider in WaveMaker.

1. Select the Open ID provider as **Google** from the drop-down menu.
[![](/learn/assets/wm_openid_8_f.png)](/learn/assets/wm_openid_8_f.png)

2. Provide the required details in the **Identity Provider Information** section.

:::note
Fields available in the **Identity Provider** section gets automatically occupied with the respective URLs.
::: 

## Application in Google Console

Below are the steps to create an application in Google Console.

### Creating New Project in Google Console

1. Set up user account in the [Google Console](https://console.cloud.google.com). This is to create an OAuth application to fetch the Client ID and Client Secret.

:::note

- **Client ID:** Unique identity for the registered client
- **Client Secret:** Client specific information that is only known to application and the authorization server. This is application's password

::: 

2. Create a new project in **Google Console**.
[![](/learn/assets/wm_openid_gc1.png)](/learn/assets/wm_openid_gc1.png)

3. Enter the **Project** name, **Organization** name, and **Location**. Click **Create** to launch a new project.
[![](/learn/assets/wm_openid_gc2.png)](/learn/assets/wm_openid_gc2.png)

### Choosing Credentials

1. Click **Create Credentials** to select the type of credentials to access the application.
[![](/learn/assets/wm_openid_gc3.png)](/learn/assets/wm_openid_gc3.png)

2. Select **OAuth client ID** from the drop-down menu.
[![](/learn/assets/wm_openid_gc4.png)](/learn/assets/wm_openid_gc4.png)

3. Click **Configure Consent screen** to get directed to **OAuth consent screen** where we add user type, scope and developer details.
[![](/learn/assets/wm_openid_gc5.png)](/learn/assets/wm_openid_gc5.png)

### Configuring Application in Google Console

1. In **OAuth consent screen**, select the **User Type** to restrict the user accounts to access the application.
[![](/learn/assets/wm_openid_gc6.png)](/learn/assets/wm_openid_gc6.png)

2. Click **Create** to save the given information.
[![](/learn/assets/wm_openid_gc7.png)](/learn/assets/wm_openid_gc7.png)

3. Provide the **App name**, **User support email**, **Application Logo**, **Authorized domains**, and **Email address** of the developer. Click **Save and Continue**.
[![](/learn/assets/wm_openid_gc8.png)](/learn/assets/wm_openid_gc8.png)
[![](/learn/assets/wm_openid_gc9.png)](/learn/assets/wm_openid_gc9.png)

4. In Scopes, click **Add or Remove Scopes**.
[![](/learn/assets/wm_openid_gc10.png)](/learn/assets/wm_openid_gc10.png)

5. Check the necessary attributes as scopes and click **Update**.
[![](/learn/assets/wm_openid_gc11.png)](/learn/assets/wm_openid_gc11.png)
[![](/learn/assets/wm_openid_gc12.png)](/learn/assets/wm_openid_gc12.png)

6. Click **Save and Continue** to save the provided scope information.
[![](/learn/assets/wm_openid_gc14.png)](/learn/assets/wm_openid_gc14.png)

7. In **Summary**, review the provided information and click **Back to Dashboard**. You can review and edit the previously given information and return to the dashboard once reviewed.
[![](/learn/assets/wm_openid_gc15.png)](/learn/assets/wm_openid_gc15.png)

### Fetching Client Details in Google Console

1. In the **Credentials** section, enter the **Authorized redirect URIs** and click **Save**.
[![](/learn/assets/wm_openid_gc16.png)](/learn/assets/wm_openid_gc16.png)
[![](/learn/assets/wm_openid_gc17.png)](/learn/assets/wm_openid_gc17.png)

2. Collect the **Client ID** and **Client Secret** by clicking **Download Json**.
[![](/learn/assets/wm_openid_gc18.png)](/learn/assets/wm_openid_gc18.png)

Get the endpoints and client details to provide in the security configuration page in WaveMaker to integrate Service Provider and Identity Provider.


## Gsuite Domain Restrictions

**Gsuite domain**: Gsuite provides enterprise package which gives access to all the tools via respective organization email addresses. With this process, application restricts login using personal Google accounts.  

While creating the [OAuth application in Google Console](#google-as-openid-provider), you enter the list of authorized domains that allows only the domain specific mail ids to access the application. You have to then select the domain type as **Internal**. It allows associated organization accounts for the authorized domains to display at the time of SSO. **External** type includes all the available Google accounts and is not restricted to any domain.

### Restricting Gsuite Domain

1. Click **Add Domain** and enter the authorized domains. This step is to restrict the domains to access the application.
[![](/learn/assets/wm_openid_gc20.png)](/learn/assets/wm_openid_gc20.png)
2. Select the **Internal** option to allow the enterprise oriented Google accounts of the authorized domains to be displayed during the time of SSO.
[![](/learn/assets/wm_openid_gc19.png)](/learn/assets/wm_openid_gc19.png)
2. Click **Create**. This step successfully sets the end user type who can access the application.
[![](/learn/assets/wm_openid_gc7.png)](/learn/assets/wm_openid_gc7.png)
