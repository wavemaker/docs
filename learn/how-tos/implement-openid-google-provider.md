---
title: "Configuring Open ID using Google provider"
id: "implement-openid-google-provider"
sidebar_label: "Open ID using Google provider"
---
In this document we discuss the steps to implement Google as Open ID provider.

---

## Google as Open ID provider

1. Select the Open ID provider as **Google** from the drop-down menu.
[![](/learn/assets/wm_openid_8_f.png)](/learn/assets/wm_openid_8_f.png)

2. Provide the required details in the **Identity Provider Information** section.

:::note
Fields available in the **Identity Provider** section gets automatically occupied with the respective URLs.
::: 

3. Set up user account in the [Google Console](https://console.cloud.google.com). This is to create an OAuth application to fetch the Client ID and Client Secret.

:::note

- **Client ID:** Unique identity for the registered client
- **Client Secret:** Client specific information that is only known to application and the authorization server. This is application's password

::: 

4. Create a new project in **Google Console**.
[![](/learn/assets/wm_openid_gc1.png)](/learn/assets/wm_openid_gc1.png)

5. Enter the **Project** name, **Organization** name, and **Location**. Click **Create** to launch a new project.
[![](/learn/assets/wm_openid_gc2.png)](/learn/assets/wm_openid_gc2.png)

6. Click **Create Credentials**.
[![](/learn/assets/wm_openid_gc3.png)](/learn/assets/wm_openid_gc3.png)

7. Select **OAuth client ID** from the drop down menu.
[![](/learn/assets/wm_openid_gc4.png)](/learn/assets/wm_openid_gc4.png)

8. Click **Configure Consent** screen.
[![](/learn/assets/wm_openid_gc5.png)](/learn/assets/wm_openid_gc5.png)

9. In **OAuth consent screen**, select the user type to restrict the user accounts to access the application.
[![](/learn/assets/wm_openid_gc6.png)](/learn/assets/wm_openid_gc6.png)

10. Click **Create** to save the given information.
[![](/learn/assets/wm_openid_gc7.png)](/learn/assets/wm_openid_gc7.png)

11. Provide the **App name**, **User support email**, **Application Logo**, **Authorized domains**, and **Email address** of the developer. Click **Save and Continue**.
[![](/learn/assets/wm_openid_gc8.png)](/learn/assets/wm_openid_gc8.png)
[![](/learn/assets/wm_openid_gc9.png)](/learn/assets/wm_openid_gc9.png)

12. In Scopes, click **Add or Remove Scopes**.
[![](/learn/assets/wm_openid_gc10.png)](/learn/assets/wm_openid_gc10.png)

13. Check the necessary attributes as scopes and click **Update**.
[![](/learn/assets/wm_openid_gc11.png)](/learn/assets/wm_openid_gc11.png)
[![](/learn/assets/wm_openid_gc12.png)](/learn/assets/wm_openid_gc12.png)

14. Click **Save and Continue** to save the provided scope information.
[![](/learn/assets/wm_openid_gc14.png)](/learn/assets/wm_openid_gc14.png)


14. In **Summary**, review the provided information and click **Back to Dashboard**.
[![](/learn/assets/wm_openid_gc15.png)](/learn/assets/wm_openid_gc15.png)

15. In the **Credentials** section, enter the **Authorized redirect URIs** and click **Save**.
[![](/learn/assets/wm_openid_gc16.png)](/learn/assets/wm_openid_gc16.png)
[![](/learn/assets/wm_openid_gc17.png)](/learn/assets/wm_openid_gc17.png)

16. Collect the **Client Id** and **Client Secret** by clicking **Download Json**.
[![](/learn/assets/wm_openid_gc18.png)](/learn/assets/wm_openid_gc18.png)

17. Get the endpoints and client details to provide in the security configuration page in WaveMaker.


### Gsuite domain restrictions

**Gsuite domain**: Gsuite provides enterprise package which gives access to all the tools via respective organization email addresses. With this process, application restricts login using personal google accounts.  

While creating the [OAuth application in google console](#google-as-openid-provider), you enter the list of authorized domains that allows only the domain specific mail ids to access the application. You have to then select the domain type as **Internal**. It allows associated organization accounts for the authorized domains to display at the time of SSO. **External** type includes all the available google accounts and is not restricted to any domain.

### Steps to restrict Gsuite domain

1. Click **Add Domain** and enter the authorized domains. This step is to restrict the domains to access the application.
[![](/learn/assets/wm_openid_gc20.png)](/learn/assets/wm_openid_gc20.png)
2. Select the **Internal** option to allow the enterprise oriented google accounts of the authorized domains to be displayed during the time of SSO.
[![](/learn/assets/wm_openid_gc19.png)](/learn/assets/wm_openid_gc19.png)
2. Click **Create** to implement the end user type who can access the application.
[![](/learn/assets/wm_openid_gc7.png)](/learn/assets/wm_openid_gc7.png)

