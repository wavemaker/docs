---
title: "LinkedIn"
id: "linkedin"
---

## Introduction

OAuth 2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [click here](/learn/app-development/widgets/prefab/oauth-prefabs/).

## LinkedIn OAuth in WaveMaker

In order to use the **LinkedIn** OAuth prefab, please follow the below steps: **Disclaimer**: The screenshots from the LinkedIn website were current at the time of writing this document, the actual screens might differ.

1. Log on to [https://developer.linkedin.com/](https://developer.linkedin.com/) and enter your credentials. LinkedIn Developers page is displayed. [![](/learn/assets/ld_homepage.png)](/learn/assets/ld_homepage.png)
2. Go to My Apps and click **Create Application**. Create a New Application page is displayed. [![](/learn/assets/ld_createapp1.png)](/learn/assets/ld_createapp1.png)
3. Enter **Company Name, Name, Description, Application Logo URL, Application Use, Website URL, Business Email** and **Business Phone** in their respective fields. Check the **LinkedIn API Terms of Use** checkbox and click **Submit**. Authorize Redirect URLs page is displayed. [![](/learn/assets/ld_sampleurl.png)](/learn/assets/ld_sampleurl.png)
4. Enter a valid sample **Authorized Redirect URLs** below **OAuth 2.0** and click **Add.** Click **Update.** Your application is successfully created. [![](/learn/assets/ld_success1..png)](/learn/assets/ld_success1..png) Note: Make a note of the **Client ID** and **Client Secret**

# Usage Example

1. Open WaveMaker and create an application.
2. Check and confirm the settings and click **Save** on the Project Settings window.
3. Select a Template for Main page and click **OK.**
4. Drag and Drop the **LinkedIn Prefab** from the Prefabs Tab under OAuth.You can use the default login page created by WaveMaker.
5. You can set the **Login Mode** to be:
    
    - _auto_ will in the run mode after initialization of the Prefab the app would automatically be navigated to the OAuth Authorization page
    - _manual_ (default mode) will invoke the OAuth Authorization page on click of the login button
    
    [![](/learn/assets/linkedin_design1.png)](/learn/assets/linkedin_design1.png)
6. In the Properties Panel, below **SERVER PROPERTIES**, enter the **Appid, Page, Scope** and **Secret** in their respective fields. [![](/learn/assets/linkedin_props1.png)](/learn/assets/linkedin_props1.png)
7. Save and Run the application.
8. After you run the application, redirect URL is generated. You might have to click REMOVE TOOLBAR to get the URL. Copy the redirect uri till the _callback _part. For example, if your url looks like this: `https://www.linkedin.com/uas/oauth2/authorization?client_id=xxx&response_type=xxx&redirect_uri=https://www.wavemakeronline.com/run-xyz/projectname/prefabs/LinkedInOAuth/oAuthHandler/callback&state=xxx&scope=xxx` use only: `https://www.wavemakeronline.com/run-xyz/projectname/prefabs/LinkedInOAuth/oAuthHandler/callback`
9. Go to LinkedIn Developers – your project page and click on Settings on the left side. Add the generated redirect URL below **OAuth 2.0** and Click **Update.** [![](/learn/assets/ld_Settings.png)](/learn/assets/ld_Settings.png)
10. Go back to WaveMaker application and again Run the app. You will see the WaveMaker Login page if you have set the Login Mode to manual. Click the Login using Linkedin button. [![](/learn/assets/linkedin_run_manual.png)](/learn/assets/linkedin_run_manual.png)
11. You will be redirected to the LinkedIn Allow Access screen, this will be the screen you will first see if you have set Login Mode to auto. Enter your credentials to Login and click **Allow Access** You can now see the application with **Access Token** and **Callback URL**. [![](/learn/assets/ld_run_auto.png)](/learn/assets/ld_run_auto.png)
12. To use LinkedIn APIs, you need to [import the appropriate web service](/learn/services/web-services/web-services/). Go to [https://apigee.com/console/linkedin](https://apigee.com/console/linkedin), select the required API and get the Authorization key.
13. From WaveMaker app designer, import a web service with the proper credentials as obtained from the above step. [![ld_testurl](/learn/assets/ld_testurl.png)](/learn/assets/ld_testurl.png)


