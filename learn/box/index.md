---
title: "Box"
id: ""
---

2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [ here](/learn/app-development/widgets/prefab/oauth-prefabs/)

## OAuth in WaveMaker

Box uses OAuth 2.0 to authenticate connections that use the Box APIs. Box has secured authentication for Box APIs, to allow only the registered users to interact with Box content. For more information on Box OAuth, [here.](https://docs.box.com)

: The screenshots from the Box website were current at the time of writing this document, the actual screens might differ. To use the  prefab, please follow the below steps:

1. and drop the Box OAuth Prefab on the canvas of the desired page of the application. [![](../assets/box_prefab.png)](../assets/box_prefab.png)
2. and drop a Label in the canvas. Click on Bind property to bind label with the \`callbackurl\` property of the Box OAuth prefab. [![](../assets/box_bind.png)](../assets/box_bind.png)
3. and Run the project. Select the Callback URL from the label. [![](../assets/Box_callback_URL.png)](../assets/Box_callback_URL.png)
4. create a Box account, [here](https://app.box.com/signup) Login to the Box account with the credentials.
5. open the Box API platform, [here.](https://app.box.com/developers/console) The Box API gives access to secured content management system within your own app.
6. on Create New App button to build an Application, as shown in the below figure. [![](../assets/box_new_app.jpg)](../assets/box_new_app.jpg)
7. Authentication Method as Standard OAuth 2.0(User Authentication) to authenticate the Box APIs. [![](../assets/box_auth.png)](../assets/box_auth.png)
8. on Configuration Tab to acquire the Client ID and Client Secret from the created App.
9. the selected callback URL in the redirect URI section of the App in Box, as highlighted in the below figure. [![](../assets/box_uri.png)](../assets/box_uri.png)
10. the WaveMaker studio, click on Properties. Enter the necessary server properties such as Appid, Secret, and Page for the BOX prefab widget. [![](../assets/box_prop.png)](../assets/box_prop.png)
11. the project and log in using Box.
12. more information on Authentication with OAuth, [here](https://docs.box.com/docs/oauth-20)

[9\. Custom Widgets - Prefabs](/learn/app-development/widgets/widget-library/#prefabs)

- [9.1 Youtube](/learn/app-development/widgets/prefab/youtube/)
- [9.2 Googlemaps](/learn/app-development/widgets/prefab/googlemaps/)
- [9.3 QRCode](/learn/app-development/widgets/prefab/qrcode/)
- [9.4 OAuth Prefabs](/learn/app-development/widgets/prefab/oauth-prefabs/)
    - [9.4.1 Box](#)
    - [9.4.2 Facebook](/learn/app-development/widgets/prefab/oauth-prefabs/facebook/)
    - [9.4.3 Google](/learn/app-development/widgets/prefab/oauth-prefabs/google/)
    - [9.4.4 Instagram](learn/app-development/widgets/prefab/oauth-prefabs/instagram/)
    - [9.4.5 LinkedIn](/learn/app-development/widgets/prefab/oauth-prefabs/linkedin/)
