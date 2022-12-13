---
title: "Configuring Open ID using Google provider"
id: "implement-openid-google-provider"
sidebar_label: "Open ID using Google provider"
---
In this document we discuss the steps to implement different open ID providers.

---

## Google as OpenID provider

1. Select the openID provider as Google from the drop-down menu of Provider ID.
2. Provide the required details in the Identity Provider Information section.
**Note**: Fields available in Identity provider section gets automatically occupied with the respective urls.
3. Set up user account in the google console.
4. Create a new project in google console.
[![](/learn/assets/wm_openid_gc1.png)](/learn/assets/wm_openid_gc1.png)

5. Enter the Project name, Organization name, and Location. Click on Create to launch a new project.
[![](/learn/assets/wm_openid_gc2.png)](/learn/assets/wm_openid_gc2.png)

6. Click on Create Credentials.
[![](/learn/assets/wm_openid_gc3.png)](/learn/assets/wm_openid_gc3.png)

7. Select OAuth client ID from the drop down menu of Create Credentials.
[![](/learn/assets/wm_openid_gc4.png)](/learn/assets/wm_openid_gc4.png)

8. Click on Configure Consent Screen.
[![](/learn/assets/wm_openid_gc5.png)](/learn/assets/wm_openid_gc5.png)

9. In OAuth Consent Screen, select the user type to restrict the user accounts to access the application.
[![](/learn/assets/wm_openid_gc6.png)](/learn/assets/wm_openid_gc6.png)

10. Click on Create to save the given information.
[![](/learn/assets/wm_openid_gc7.png)](/learn/assets/wm_openid_gc7.png)

11. Provide the application name, User support email, Application Logo, Authorized domains, and email address of the developer. Click on Save and Continue.
[![](/learn/assets/wm_openid_gc8.png)](/learn/assets/wm_openid_gc8.png)
[![](/learn/assets/wm_openid_gc9.png)](/learn/assets/wm_openid_gc9.png)

12. In Scopes, click on Add or Remove Scopes.
[![](/learn/assets/wm_openid_gc10.png)](/learn/assets/wm_openid_gc10.png)

13. Check the necessary attributes as scopes and click on Update.
[![](/learn/assets/wm_openid_gc11.png)](/learn/assets/wm_openid_gc11.png)
[![](/learn/assets/wm_openid_gc12.png)](/learn/assets/wm_openid_gc12.png)

14. Click on Save and Continue to save the provided scope information.
[![](/learn/assets/wm_openid_gc14.png)](/learn/assets/wm_openid_gc14.png)


14. In Summary, review the provided information and click on Back to Dashboard.
[![](/learn/assets/wm_openid_gc15.png)](/learn/assets/wm_openid_gc15.png)

15. In Credentials section, enter the authorized redirect urls and click on save.
[![](/learn/assets/wm_openid_gc16.png)](/learn/assets/wm_openid_gc16.png)
[![](/learn/assets/wm_openid_gc17.png)](/learn/assets/wm_openid_gc17.png)

16. Collect the Client Id and Client secret by clicking on the Download Json option.
[![](/learn/assets/wm_openid_gc18.png)](/learn/assets/wm_openid_gc18.png)

