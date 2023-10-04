---
title: "Scheme Linking"
id: "scheme-linking"
sidebar_label: "Scheme Linking"
---
---

import SchemeLinking from '/learn/assets/scheme-linking-application-id.png';
import PageParams from '/learn/assets/create-page-params.png';

## Scheme linking

Schema linking is an approach that guides a user to a specific in-app page and content in a mobile app by using a custom or universal uniform resource identifier (URI).

Every deep link begins with a URL scheme prefix, which indicates the protocol used for accessing the app. This custom URL scheme is specific to an individual app and functions as a means to identify and launch that app.

In WaveMaker,  Application ID used as URL scheme prefix. 

For example, consider the URL scheme `com.wavemaker.deeplink://`. If you click on a link that starts with `com.wavemaker.deeplink://`, the operating system will attempt to open the `deeplink` application because it recognizes the `deeplink` URL scheme as belonging to that specific app.

<img src={SchemeLinking} style={{width:"35%"}} />

If you want to open a specific page in an app using url scheme linking you can use that specific page name to the link. Suppose we want to open testpage in  my app for that I need to specify page name `testpage`.

```link
com.wavemaker.deepling://pages/testpage
```

Additionally, the URL scheme is not only used for open specific pages you can also pass the parameters to that page. If you want to pass parameters `?name=tom` to the `testpage`, first you need to create params to that page in wavemaker app.

<img src={PageParams} style={{width:"35%"}} />

```link
com.wavemaker.deepling://pages/testpage?name=tom
```