---
title: "Facebook"
id: "facebook"
---

## Introduction

OAuth 2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [click here](/learn/app-development/widgets/prefab/oauth-prefabs/).

## Facebook OAuth in WaveMaker

In order to use the **Facebook** OAuth prefab, please follow the below steps: Disclaimer: The screenshots from the FaceBook website were current at the time of writing this document, the actual screens might differ.

1. Log on to [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/) and enter your credentials. Facebook Developers page is displayed.
2. Click **Register Now.** Register as a Facebook Developer window is displayed.
3. Accept the **Facebook Platform Policy** and **Facebook Privacy Policy** click Next.
4. Select the **Country** from the dropdown list and enter your **Phone Number** to get the confirmation code. You may choose to get your confirmation code as a text or via phone call.
5. Enter the **Confirmation Code** and click **Register**. Successfully Registered as a Facebook developer window is displayed.
6. Click **Done**. On registering, Add a New App page is displayed.
7. Select **Website** as a platform to get started.
8. Enter a **Name** to your app and click **Create New Facebook App ID**. Create a New App ID window is displayed.
9. Select a category from **Choose a Category** drop-down list and click **Create App ID**. Tell us about your website window is displayed.
10. Enter a sample valid URL in the **Site URL** field and click **Next**. Your App Dashboard page is displayed. **Note:** Make a note of the **App ID** and **App Secret**. [![](/learn/assets/Facebook_reg9.png)](/learn/assets/Facebook_reg9.png)

# Usage Example

1. Open WaveMaker application where you want to use the Facebook OAuth Prefab.
2. Drag and Drop the Facebook Prefab from the Prefabs Tab under OAuth. You can use the default login page created by WaveMaker.
3. You can set the **Login Mode** to be:
    
    - _auto_ will in the run mode after initialization of the Prefab the app would automatically be navigated to the OAuth Authorization page
    - _manual_ (default mode) will invoke the OAuth Authorization page on click of the login button
    
    [![](/learn/assets/Facebook_app1.png)](/learn/assets/Facebook_app1.png)
4. In the Properties Panel, under **SERVER PROPERTIES**, enter the **Appid, Page, Scope** and **Secret** in their respective fields. [![](/learn/assets/Facebook_app2.png)](/learn/assets/Facebook_app2.png)
5. Save the application and Run the application. Note the generated redirect URL. You might have to click REMOVE TOOLBAR to get the URL. Copy the redirect uri till the _callback_ part only. [![](/learn/assets/Facebook_app_run1.png)](/learn/assets/Facebook_app_run1.png)
6. Go to Facebook Developers – your project page and click on Settings on the left side of the Dashboard page.
7. Enter this redirect URl in the Site URL field and click Save Changes. [![](/learn/assets/Facebook_reg10.png)](/learn/assets/Facebook_reg10.png)
8. Go back to WaveMaker application and again Run the app. You can now see the WaveMaker login page. [![](/learn/assets/Facebook_app_run2.png)](/learn/assets/Facebook_app_run2.png)
9. Click on the Login with Facebook button to be redirected to Facebook Authorisation page. This will the first page, in case you have set the Login Mode to auto
10. To use the Facebook API in your application, import the corresponding [REST Web Service](/learn/services/web-services/web-services/#rest) into WaveMaker by giving a valid URL with the access token. Test and Import.
11. You can see the variables imported from the service in the Left panel and these are available for binding and usage within your app. ![Facebook_serviceVar](/learn/assets/Facebook_serviceVar.png)

[9. Custom Widgets - Prefabs](/learn/app-development/widgets/widget-library/#prefabs)

- [9.1 Youtube](/learn/app-development/widgets/prefab/youtube/)
- [9.2 Googlemaps](/learn/app-development/widgets/prefab/googlemaps/)
- [9.3 QRCode](/learn/app-development/widgets/prefab/qrcode/)
- [9.4 OAuth Prefabs](/learn/app-development/widgets/prefab/oauth-prefabs/)
    - [9.4.1 Box](/learn/app-development/widgets/prefab/oauth-prefabs/box/)
    - [9.4.2 Facebook](#)
    - [9.4.3 Google](/learn/app-development/widgets/prefab/oauth-prefabs/google/)
    - [9.4.4 Instagram](/learn/app-development/widgets/prefab/oauth-prefabs/instagram/)
    - [9.4.5 LinkedIn](/learn/app-development/widgets/prefab/oauth-prefabs/linkedin/)
