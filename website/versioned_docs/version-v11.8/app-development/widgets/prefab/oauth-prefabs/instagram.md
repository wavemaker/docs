---
title: "Instagram"
id: "instagram"
---
---

OAuth 2.0 is an authorization framework, which is updated after the original OAuth protocol created in 2006. OAuth 2.0 is a standard protocol, which provides delegated secured access for web, mobile, and desktop applications. To know more about the working of WaveMaker OAuth Prefabs [click here](/learn/app-development/widgets/prefab/oauth-prefabs/).

## Instagram OAuth in WaveMaker

In order to use the **Instagram** OAuth prefab, please follow the below steps:

Disclaimer: The screenshots from the Instagram website were current at the time of writing this document, the actual screens might differ.

1. Drag and drop the **Instagram OAuth Prefab** onto the canvas of the desired page in the application. 

[![](/learn/assets/Instagram_Prefab.png)](/learn/assets/Instagram_Prefab.png)

2. Drag and drop a **Label** onto the canvas. Click on bind icon against the label caption property to the `callbackurl` property of the Instagram OAuth Prefab. 

[![](/learn/assets/instagram_bind.png)](/learn/assets/instagram_bind.png)

3. Save and Run the project. Make a note of the Callback URL displayed on the Label. 

[![](/learn/assets/instagram_URI.png)](/learn/assets/instagram_URI.png)

4. Login to the [Instagram](http://www.instagram.com/).
5. To open the Instagram API platform [click here](https://www.instagram.com/developer/).
6. Click Register Your Application tab to create an app. 

[![](/learn/assets/instagram_register.png)](/learn/assets/instagram_register.png)

7. Click **Manage Clients** to acquire the _Client ID_ and _Client Secret_ for the created App Client. Paste the _callback URL_ from step 3 in the **redirect URI** section of the App in Instagram. 

[![](/learn/assets/instagram_ClientID.png)](/learn/assets/instagram_ClientID.png)

8. From WaveMaker, select Prefab Properties. Enter the necessary server properties such as Clientid, Client secret obtained from the previous step. 

[![](/learn/assets/instagram_ClientID-1.png)](/learn/assets/instagram_ClientID-1.png)

9. Run the project and you will be prompted to log in using Instagram.
10. Utilize the scope property of the Prefab, to achieve the advanced permissions. For more information on the scope property, [click here](https://www.instagram.com/developer/authorization/).

:::note
When an app is created with Instagram developer suite, its status will be in **Sandbox mode**. Sandbox mode is a **fully functional environment,** that allows testing **the API** before submitting the app for **review**. Each created app will have to be reviewed by the Instagram team before making it live. For more details, [click here](https://www.instagram.com/developer/sandbox/).
:::

After the OAuth authorization is completed, you can make API calls to the Instagram. This facilitates to fetch the information of the users and media from the Instagram. For more details on the API Endpoints, please [click here](https://www.instagram.com/developer/endpoints/).

