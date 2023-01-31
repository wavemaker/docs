---
title: "Configuring Open ID using Okta provider"
id: "implement-openid-okta-provider"
sidebar_label: "Open ID using Okta provider"
---
In this document we discuss the steps to implement Okta as open ID provider.

---

## Okta as OpenID provider
1. Select the openID provider as Custom from the drop-down menu of Provider ID and enter the Provider ID name as Okta.
[![](/learn/assets/wm_openid_ok1.png)](/learn/assets/wm_openid_ok1.png)
2. Go to [Okta Preview](https://developer.okta.com/login/) and set up user account in the Developer console of Okta. This is to create an OAuth application to fetch the Client ID and Client secret.
3. Go to the dashboard available at the top left corner of the page.
[![](/learn/assets/wm_openid_ok2.png)](/learn/assets/wm_openid_ok2.png)
4. Click on Applications from the menu and again go to Applications.
[![](/learn/assets/wm_openid_ok3.png)](/learn/assets/wm_openid_ok3.png)
5. Click on Create App Integration option to start creating an application.
[![](/learn/assets/wm_openid_ok4.png)](/learn/assets/wm_openid_ok4.png)
6. Select OpenID Connect option as Sign-in method.
[![](/learn/assets/wm_openid_ok6.png)](/learn/assets/wm_openid_ok6.png)
7. Select Web Application as the Application type and click on Next.
[![](/learn/assets/wm_openid_ok7.png)](/learn/assets/wm_openid_ok7.png)
8. Enter the App Integration Name and check the Client credentials option as Grant type.
[![](/learn/assets/wm_openid_ok8.png)](/learn/assets/wm_openid_ok8.png)
9. Click on Add Url to add new redirect urls.
[![](/learn/assets/wm_openid_ok9.png)](/learn/assets/wm_openid_ok9.png)
10. Enter the sign-in redirect url.

:::note
Sign-in redirect url is available in WaveMaker authentication and authorization page.
::: 

[![](/learn/assets/wm_openid_ok10.png)](/learn/assets/wm_openid_ok10.png)

11. Enter sign-out redirect url.

:::note
Add v1/logout to the end of sign-in redirect url and enter it as Sign-out redirect url.
::: 

[![](/learn/assets/wm_openid_ok11.png)](/learn/assets/wm_openid_ok11.png)

12. Select the appropriate access restriction and click on save.
[![](/learn/assets/wm_openid_ok12.png)](/learn/assets/wm_openid_ok12.png)

13. Click on the Copy icon to copy the client Id to the clipboard.
[![](/learn/assets/wm_openid_ok13.png)](/learn/assets/wm_openid_ok13.png)

14. Click on the Copy icon to copy the client secret to the clipboard.
[![](/learn/assets/wm_openid_ok14.png)](/learn/assets/wm_openid_ok14.png)

15. Go to Okta API Scopes and click on Grant to include it as scope.
[![](/learn/assets/wm_openid_ok15.png)](/learn/assets/wm_openid_ok15.png)

16. Click on Security from the menu in dashboard.
[![](/learn/assets/wm_openid_ok16.png)](/learn/assets/wm_openid_ok16.png)

17. Go to API option in the drop-down menu of Security.
[![](/learn/assets/wm_openid_ok17.png)](/learn/assets/wm_openid_ok17.png)

18. Click on default.
[![](/learn/assets/wm_openid_ok18.png)](/learn/assets/wm_openid_ok18.png)

19. Click on Metadata url that redirects to the page which contains authorization endpoint, token endpoint, JWKS endpoint and User info endpoint.
[![](/learn/assets/wm_openid_ok19.png)](/learn/assets/wm_openid_ok19.png)

20. Get the endpoints and client details to provide in the security configuration page in WaveMaker.



