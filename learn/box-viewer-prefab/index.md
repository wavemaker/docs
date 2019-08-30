---
title: "Box Viewer Prefab"
id: ""
---

The Box preview prefab enables preview of hundreds of different file formats including all Microsoft Office Documents images, videos, 3D models etc. It uses the [Box preview API](https://developer.box.com/docs/box-view) provided by a developer account of Box Platform.

[![](https://www.wavemaker.com../assets/Screenshot-2018-12-06-at-10.49.12-AM.png)](https://www.wavemaker.com../assets/Screenshot-2018-12-06-at-10.49.12-AM.png)Prerequisites of using the prefab are :

1. A Developer account in [box.com](https://developer.box.com/)
2. Create an app([https://app.box.com/developers/console](https://app.box.com/developers/console))![](../assets/Screenshot-2018-12-06-at-2.13.18-PM.png)
3. Generate a Public/Private key pair for the app ![](../assets/Screenshot-2018-12-06-at-2.15.18-PM.png) 
4. Download the App Settings as json.![](../assets/Screenshot-2018-12-06-at-2.15.55-PM-1.png)![](../assets/skitch.png)

 

Now drag and drop the prefab into the page of your project. And set the App Environment. In your app’s Settings > Config profile > Box prefab > App Environment, add key-value pairs for the respective field from the downloaded App Settings json.

![](../assets/Screenshot-2018-12-06-at-3.27.56-PM.png)

![](../assets/Screenshot_2018-12-06_at_3_31_45_PM.png)

Now bind the URL property of the prefab in your page with the path to the file (uploaded to the project) to be viewed.

![](../assets/Screenshot-2018-12-06-at-3.26.34-PM.png)

That’s it, clicking on the prefab link at app runtime will launch the viewer.

![](../assets/Screenshot-2018-12-06-at-3.41.38-PM.png)

[9\. Custom Widgets - Prefabs](/learn/app-development/widgets/widget-library/#prefabs)

- [9.1 Youtube](/learn/app-development/widgets/prefab/youtube/)
- [9.2 Googlemaps](/learn/app-development/widgets/prefab/googlemaps/)
    - [i. Layouts](#layouts)
    - [ii. Features](#features)
    - [iii. Usage Scenario](#usage-scenario)
- [9.3 QRCode](/learn/app-development/widgets/prefab/qrcode/)
- [9.4 OAuth Prefabs](/learn/app-development/widgets/prefab/oauth-prefabs/)
    - [9.4.1 Box](/learn/app-development/widgets/prefab/oauth-prefabs/box/)
    - [9.4.2 Facebook](/learn/app-development/widgets/prefab/oauth-prefabs/facebook/)
    - [9.4.3 Google](/learn/app-development/widgets/prefab/oauth-prefabs/google/)
    - [9.4.4 Instagram](learn/app-development/widgets/prefab/oauth-prefabs/instagram/)
    - [9.4.5 LinkedIn](/learn/app-development/widgets/prefab/oauth-prefabs/linkedin/)
- [9.5 Box Viewer](/learn/app-development/widgets/prefab/box-viewer/)
