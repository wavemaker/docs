---
title: "Configuring Open ID using Okta provider"
id: "implement-openid-okta-provider"
sidebar_label: "Open ID using Okta provider"
---
In this document we discuss the steps to implement Okta as open ID provider.

---

## Okta as OpenID provider
1. Select the openID provider as **Custom** from the drop-down menu and enter the **Provider ID** name as **Okta**.
[![](/learn/assets/wm_openid_ok1.png)](/learn/assets/wm_openid_ok1.png)

2. Go to [Okta Preview](https://developer.okta.com/login/) and set up user account in the Developer console of Okta. This is to create an OAuth application to fetch the **Client ID** and **Client secret**.

3. Go to the dashboard available at the top left corner of the page.

[![](/learn/assets/wm_openid_ok2.png)](/learn/assets/wm_openid_ok2.png)

4. Click on **Applications** from the menu and again go to **Applications**.

[![](/learn/assets/wm_openid_ok3.png)](/learn/assets/wm_openid_ok3.png)

5. Click on **Create App Integration** option to start creating an application.

[![](/learn/assets/wm_openid_ok4.png)](/learn/assets/wm_openid_ok4.png)

6. Select **OpenID Connect** option as Sign-in method.

[![](/learn/assets/wm_openid_ok6.png)](/learn/assets/wm_openid_ok6.png)

7. Select **Web Application** as the Application type and click on **Next**.

[![](/learn/assets/wm_openid_ok7.png)](/learn/assets/wm_openid_ok7.png)

8. Enter the **App Integration Name** and check the **Client credentials** option as **Grant type**.

[![](/learn/assets/wm_openid_ok8.png)](/learn/assets/wm_openid_ok8.png)

9. Click on **Add Url** to add new redirect urls.

[![](/learn/assets/wm_openid_ok9.png)](/learn/assets/wm_openid_ok9.png)

10. Enter the **sign-in redirect url**.

:::note
Sign-in redirect url is available in WaveMaker authentication and authorization page.
::: 

[![](/learn/assets/wm_openid_ok10.png)](/learn/assets/wm_openid_ok10.png)

11. Enter **sign-out redirect url**.

:::note
Add v1/logout to the end of sign-in redirect url and enter it as sign-out redirect url.
::: 

[![](/learn/assets/wm_openid_ok11.png)](/learn/assets/wm_openid_ok11.png)

12. Select the appropriate access restriction and click on save.

[![](/learn/assets/wm_openid_ok12.png)](/learn/assets/wm_openid_ok12.png)

13. Click on **Copy** to copy the client Id to the clipboard.

[![](/learn/assets/wm_openid_ok13.png)](/learn/assets/wm_openid_ok13.png)

14. Click on **Copy** icon to copy the client secret to the clipboard.

[![](/learn/assets/wm_openid_ok14.png)](/learn/assets/wm_openid_ok14.png)

15. Go to **Okta API Scopes** and click on **Grant** to include it as scope.

[![](/learn/assets/wm_openid_ok15.png)](/learn/assets/wm_openid_ok15.png)

16. Click on **Security** from the menu.

[![](/learn/assets/wm_openid_ok16.png)](/learn/assets/wm_openid_ok16.png)

17. Go to **API** in the drop-down menu of **Security**.

[![](/learn/assets/wm_openid_ok17.png)](/learn/assets/wm_openid_ok17.png)

18. Click on **default**.

[![](/learn/assets/wm_openid_ok18.png)](/learn/assets/wm_openid_ok18.png)

19. Click on **Metadata url** that redirects to the page which contains authorization endpoint, token endpoint, JWKS endpoint and User info endpoint.

[![](/learn/assets/wm_openid_ok19.png)](/learn/assets/wm_openid_ok19.png)

20. Get the endpoints and client details to provide in the security configuration page in WaveMaker.


## Role Mapping using Okta provider:

1. Go to [Okta Preview](https://developer.okta.com/login/) and set up user account in the Developer console of Okta.
2. Go to **Applications** > **Applications**.
3. Check if we have the required web application else we create a new web application.

[![](/learn/assets/wm_okta_role1.png)](/learn/assets/wm_okta_role1.png)

4. Go to **Directory** > **Profile Editor**.
5. Click on the **Profile** created by you.

[![](/learn/assets/wm_okta_role2.png)](/learn/assets/wm_okta_role2.png)

6. Click on **Add Attribute** and fill in the required attribute details.

[![](/learn/assets/wm_okta_role3.png)](/learn/assets/wm_okta_role3.png)

7. Go to **People** > **Username**.

[![](/learn/assets/wm_okta_role4.png)](/learn/assets/wm_okta_role4.png)

8. Go to **Profile** and click on edit to provide the value for the role attribute.

[![](/learn/assets/wm_okta_role5.png)](/learn/assets/wm_okta_role5.png)

9. Go to **Security** > **API** > **Add Authorization Server**.

[![](/learn/assets/wm_okta_role6.png)](/learn/assets/wm_okta_role6.png)

10. Provide the required server details and save the details.
11. Once the server is created, click on the server.

[![](/learn/assets/wm_okta_role7.png)](/learn/assets/wm_okta_role7.png)

12. Go to **Claims**, add a new claim.

[![](/learn/assets/wm_okta_role8.png)](/learn/assets/wm_okta_role8.png)

13. Go to **Access Policies**, add a new policy.

[![](/learn/assets/wm_okta_role9.png)](/learn/assets/wm_okta_role9.png)

14. Once the policy is added, we add a new rule.

[![](/learn/assets/wm_okta_role10.png)](/learn/assets/wm_okta_role10.png)

15. Lastly, we go to **Token Preview** and add the required details and. Click on **Preview Token** to verify whether the created role attribute is working correctly.

[![](/learn/assets/wm_okta_role11.png)](/learn/assets/wm_okta_role11.png)

