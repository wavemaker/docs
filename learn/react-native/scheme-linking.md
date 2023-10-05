---
title: "Scheme Linking"
id: "scheme-linking"
sidebar_label: "Scheme Linking"
---
---

import SchemeLinking from '/learn/assets/scheme-linking-application-id.png';
import PageParams from '/learn/assets/create-page-params.png';

## Scheme linking

**Scheme linking** in mobile applications entails employing **custom URL schemes** to enable interaction among apps and 
direct users to distinct content or functionalities within an app. By defining a **unique URL scheme**, an app can be 
tailored to respond to particular URLs, facilitating its launch and the execution of specific actions when such URLs are accessed. 
This approach enables apps to communicate by exchanging data through these URLs and also allows external entities, 
like websites or emails, to directly link to content or functionalities within an app. It stands as a vital tool to 
enhance **user experience**, optimize navigation, and forge unified interactions among various software applications on a mobile device.

Scheme linking serves as an inherent feature within WaveMaker, where your Application ID functions as the URL scheme prefix. 
Suppose your `Application Id` is `com.wavemaker.schemelink`; in this case, the ***prefix*** transforms into "com.wavemaker.deeplink://". When attempting to open this link, the operating system discerns the scheme and associates it with a specific app.

<img src={SchemeLinking} style={{width:"35%"}} />

To navigate to a particular page in an app using **URL scheme linking**, the specific page name can be appended to the link. For instance, if the objective is to open a page named _testpage_ in an app, it is requisite to specify the page name `testpage` in the URL.

```link
com.wavemaker.deepling://pages/testpage
```

Moreover, the **URL scheme** is not solely utilized for opening specific pages; it also enables the passing of parameters to those pages. Should you wish to pass parameters, such as `?name=tom`, to the `testpage`, it is imperative to first establish parameters for that page within the WaveMaker app.

<img src={PageParams} style={{width:"35%"}} />

```link
com.wavemaker.deepling://pages/testpage?name=tom
```