---
title: "Box Viewer Prefab"
id: "box-viewer-prefab"
---
---

The Box preview prefab enables preview of hundreds of different file formats including all Microsoft Office Documents images, videos, 3D models etc. It uses the [Box preview API](https://developer.box.com/docs/box-view) provided by a developer account of Box Platform.

[![](https://www.wavemaker.com./assets/Screenshot-2018-12-06-at-10.49.12-AM.png)](https://www.wavemaker.com./assets/Screenshot-2018-12-06-at-10.49.12-AM.png)Prerequisites of using the prefab are:

1. A Developer account in [box.com](https://developer.box.com/).
2. Create an app ([https://app.box.com/developers/console](https://app.box.com/developers/console)).

![](/learn/assets/Screenshot-2018-12-06-at-2.13.18-PM.png)

3. Generate a Public/Private key pair for the app. 

![](/learn/assets/Screenshot-2018-12-06-at-2.15.18-PM.png)

4. Download the App Settings as json.



![](/learn/assets/skitch.png)

5. Drag and drop the prefab into the page of your project. And set the App Environment. 

In your app’s `Settings > Config profile > Box prefab > App Environment`, add key-value pairs for the respective field from the downloaded App Settings json.

![](/learn/assets/Screenshot-2018-12-06-at-3.27.56-PM.png)

![](/learn/assets/Screenshot_2018-12-06_at_3_31_45_PM.png)

6. Bind the URL property of the prefab in your page with the path to the file (uploaded to the project) to be viewed.

![](/learn/assets/Screenshot-2018-12-06-at-3.26.34-PM.png)

That’s it, clicking on the prefab link at app runtime will launch the viewer.

![](/learn/assets/Screenshot-2018-12-06-at-3.41.38-PM.png)


