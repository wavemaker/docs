---
title: "Instagram"
id: ""
---

2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [ here](/learn/app-development/widgets/prefab/oauth-prefabs/)

## OAuth in WaveMaker

order to use the  prefab, please follow the below steps:

Disclaimer: The screenshots from the Instagram website were current at the time of writing this document, the actual screens might differ.

1. and drop the **OAuth Prefab** onto the canvas of the desired page in the application. [![](../assets/Instagram_Prefab.png)](../assets/Instagram_Prefab.png)
2. and drop a  onto the canvas. Click on bind icon against the label caption property to the \`\` property of the Instagram OAuth Prefab. [![](../assets/instagram_bind.png)](../assets/instagram_bind.png)
3. and Run the project. Make a note of the Callback URL displayed on the Label. [![](../assets/instagram_URI.png)](../assets/instagram_URI.png)
4. to the [](http://www.instagram.com/)
5. open the Instagram API platform  [here](https://www.instagram.com/developer/)
6. Register Your Application tab to create an app. [![](../assets/instagram_register.png)](../assets/instagram_register.png)
7. **Clients** to acquire the _ID_ and _Secret_ for the created App Client. Paste the _URL_ from step 3 in the **URI** section of the App in Instagram. [![](../assets/instagram_ClientID.png)](../assets/instagram_ClientID.png)
8.  WaveMaker, select Prefab Properties. Enter the necessary server properties such as Clientid, Client secret obtained from the previous step. [![](../assets/instagram_ClientID-1.png)](../assets/instagram_ClientID-1.png)
9. the project and you will be prompted to log in using Instagram.
10. the scope property of the Prefab, to achieve the advanced permissions. For more information on the scope property, [here](https://www.instagram.com/developer/authorization/)

****:**** an app is created with Instagram developer suite, its status will be in  ****mode**** Sandbox mode is a  ****functional environment,**** that allows testing ****the API**** before submitting the app for  Each created app will have to be reviewed by the Instagram team before making it live. For more details, [here](https://www.instagram.com/developer/sandbox/)

the OAuth authorization is completed, you can make API calls to the Instagram. This facilitates to fetch the information of the users and media from the Instagram. For more details on the API Endpoints, please [ here](https://www.instagram.com/developer/endpoints/)

[9\. Custom Widgets - Prefabs](/learn/app-development/widgets/widget-library/#prefabs)

- [9.1 Youtube](/learn/app-development/widgets/prefab/youtube/)
- [9.2 Googlemaps](/learn/app-development/widgets/prefab/googlemaps/)
- [9.3 QRCode](/learn/app-development/widgets/prefab/qrcode/)
- [9.4 OAuth Prefabs](/learn/app-development/widgets/prefab/oauth-prefabs/)
    - [9.4.1 Box](/learn/app-development/widgets/prefab/oauth-prefabs/box/)
    - [9.4.2 Facebook](/learn/app-development/widgets/prefab/oauth-prefabs/facebook/)
    - [9.4.3 Google](/learn/app-development/widgets/prefab/oauth-prefabs/google/)
    - [9.4.4 Instagram](#)
    - [9.4.5 LinkedIn](/learn/app-development/widgets/prefab/oauth-prefabs/linkedin/)
