---
title: "Box"
id: "box"
---

## Introduction

OAuth 2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [click here](/learn/app-development/widgets/prefab/oauth-prefabs/).

## Box OAuth in WaveMaker

Box uses OAuth 2.0 to authenticate connections that use the Box APIs. Box has secured authentication for Box APIs, to allow only the registered users to interact with Box content. For more information on Box OAuth, [click here.](https://docs.box.com)

**Disclaimer**: The screenshots from the Box website were current at the time of writing this document, the actual screens might differ. To use the **Box**OAuth prefab, please follow the below steps:

1. Drag and drop the Box OAuth Prefab on the canvas of the desired page of the application. [![](/learn/assets/box_prefab.png)](/learn/assets/box_prefab.png)
2. Drag and drop a Label in the canvas. Click on Bind property to bind label with the `callbackurl` property of the Box OAuth prefab. [![](/learn/assets/box_bind.png)](/learn/assets/box_bind.png)
3. Save and Run the project. Select the Callback URL from the label. [![](/learn/assets/Box_callback_URL.png)](/learn/assets/Box_callback_URL.png)
4. To create a Box account, [click here](https://app.box.com/signup). Login to the Box account with the credentials.
5. To open the Box API platform, [click here.](https://app.box.com/developers/console) The Box API gives access to secured content management system within your own app.
6. Click on Create New App button to build an Application, as shown in the below figure. [![](/learn/assets/box_new_app.jpg)](/learn/assets/box_new_app.jpg)
7. Select Authentication Method as Standard OAuth 2.0(User Authentication) to authenticate the Box APIs. [![](/learn/assets/box_auth.png)](/learn/assets/box_auth.png)
8. Click on Configuration Tab to acquire the Client ID and Client Secret from the created App.
9. Paste the selected callback URL in the redirect URI section of the App in Box, as highlighted in the below figure. [![](/learn/assets/box_uri.png)](/learn/assets/box_uri.png)
10. In the WaveMaker studio, click on Properties. Enter the necessary server properties such as Appid, Secret, and Page for the BOX prefab widget. [![](/learn/assets/box_prop.png)](/learn/assets/box_prop.png)
11. Run the project and log in using Box.
12. For more information on Authentication with OAuth, [click here](https://docs.box.com/docs/oauth-20).
