---
title: "Google"
id: "google"
---

## Introduction

OAuth 2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [click here](/learn/app-development/widgets/prefab/oauth-prefabs/).

## Google OAuth in WaveMaker

In order to use the **Google** OAuth prefab, please follow the below steps:

Disclaimer: The screenshots from the Google website were current at the time of writing this document, the actual screens might differ.

1. Log on to [https://console.developers.google.com](https://console.developers.google.com) and enter your credentials. **Google Developers Console** window is displayed.
2. On the left of the Google Developers Console screen click **Create Project**. New Project window is displayed. Enter the Project name in its respective field. **Note**: Project ID is displayed by default. Check the Terms of Service checkbox and click Create. Your project is successfully created.
3. In the left panel of the project screen select **Credentials** from **APIs & auth** section.
4. Click **Create new Client ID.** Create Client ID window is displayed.
5. Select the Application type to be a **Web application** and click **Configure consent screen.** Consent screen page is displayed.
6. Enter **Email address** and **Product name** and click **Save**. Note: The remaining options are optional. Create ID screen with Authorized JavaScripts origins window is displayed.
7. Enter a valid sample Authorized JavaScript origins and Authorized redirect URIs and click Create Client ID. Your client ID is now created. **Note**: Make a note of the Client ID and Client secret

# Usage Example

Here we show a simple use case for login using Google credentials. [For validation using custom security to access Gmail API see here](/learn/how-tos/custom-security-using-google-oauth-prefab/).

- Create an application using WaveMaker. Drag and Drop the **Google OAuth PreFab** onto the canvas. You can use the default login page created by WaveMaker.
- You can set the **Login Mode** to be:
    
    - _auto_ will in the run mode after initialization of the Prefab the app would automatically be navigated to the OAuth Authorization page
    - _manual_ (default mode) will invoke the OAuth Authorization page on click of the login button
    
    [![](/learn/assets/Google_design1.png)](/learn/assets/Google_design1.png)
- From the Properties Panel, enter the Client ID and Client Secret in the **Server Properties**  panel in their respective fields. [![](/learn/assets/Google_props1.png)](/learn/assets/Google_props1.png)
- Save the application and Run the application. Note the **redirect URL**.
- After you run the application, redirect URL is generated. You might have to click REMOVE TOOLBAR to get the URL. Copy the redirect uri till the _callback_ part only. [![](/learn/assets/Google_run.png)](/learn/assets/Google_run.png)
- Go to **Google Developers Console** – your project page and click on Edit Settings. Enter this redirect Url in the Authorized redirect URIs field and click Update.
- Go back to WaveMaker application and again Run the app. You can now see the application. You will see the WaveMaker login screen if you have set the Login Mode as manual: [![](/learn/assets/Google_run_manual.png)](/learn/assets/Google_run_manual.png) Click the Login with Google button and you will be directed to the Google login page. This will be the first screen in case you have set the Login Mode to auto: [![](/learn/assets/Google_run_auto.png)](/learn/assets/Google_run_auto.png)
- Entering the Google credential will allow access to the WaveMaker App
- To use Google APIs, you need to [import the appropriate web service](/learn/services/web-services/web-services/). Go to https://developers.google.com/oauthplayground/, select the required API and get the Authorization key [![](/learn/assets/Google_API.png)](/learn/assets/Google_API.png)
- From app designer, import a web service with the proper credentials as obtained from the above step. [![](/learn/assets/Google_Service.png)](/learn/assets/Google_Service.png)

