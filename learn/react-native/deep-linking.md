---
title: "Deep Linking"
id: "deep-linking"
sidebar_label: "Deep Linking"
---
---

import SchemeLinking from '/learn/assets/scheme-linking-application-id.png';
import PageParams from '/learn/assets/create-page-params.png';

## Deep Linking

**Deep Linking** in the context of mobile apps refers to using a uniform resource identifier (URI) that links to a 
specific location within a mobile app rather than simply launching the app. This can be used to link to specific 
content or pages within the app, improving user experience by taking users directly to the content they're interested in.
The following are some ways in which deep linking can be implemented in your WaveMaker app:

* Scheme Linking
* Asset Linking(Android)
* Universal Linking(iOS)


### Scheme Linking

**Scheme Linking** in mobile applications entails employing **custom URL schemes** to enable interaction among apps and 
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
com.wavemaker.deeplink://pages/testpage
```

Moreover, the **URL scheme** is not solely utilized for opening specific pages; it also enables the passing of parameters to those pages. Should you wish to pass parameters, such as `?name=tom`, to the `testpage`, it is imperative to first establish parameters for that page within the WaveMaker app.

<img src={PageParams} style={{width:"35%"}} />

```link
com.wavemaker.deeplink://pages/testpage?name=tom
```

### Asset Linking(Android)

**Asset Linking** is a feature that allows you to link your website to your app. It uses HTTP URLs to link to content within your app. 
When a user navigates to your website, the browser sends an HTTP request to your website's URL. 
If the website URL is associated with an app, the browser will open the app instead of the website.

To configure an WaveMaker application to open https link, you must have to add some fields to the `app.json`. Suppose your https url is `https://example.com/pages/testpage`. For that, you need to add `scheme`, `host`, and pathPrefix and your scheme will be `https`, and host name will be `example.com` and also you need to pass pathPrefix that will be `pages`.

Also, add set autoVerify to true in the corresponding intentFilter under app.json configuration.

Create `app.json` file and add the following fields to your `app.json` file and upload that `app.json` file to `src/main/webapp` in WaveMaker application.

**`app.json`**
```javascript
{
"expo": {
    "android": {
    "intentFilters": [
        {
        "action": "VIEW",
        "autoVerify": true,
        "data": [
            {
            "scheme": "https",
            "host": "example.com",
            "pathPrefix": "/pages"
            }
        ],
        "category": ["BROWSABLE", "DEFAULT"]
        }
    ]
    }
}
}
```

#### Configuring Android Asset Links

A Digital Asset Links JSON file must be published on your website to indicate the Android apps that are associated with the website and verify the app's URL intents.

To make Android open links directly in your application, the system checks if the host (the website or server) intends to allow this behavior. To confirm this, it queries the URL `https://[host]/.well-known/assetlinks`.

Now, create assetlinks.json for the website verification at `https://[host]/.well-known/assetlinks.json` and collect the following information:

* `package_name`: The Android application ID of your app (for example `com.wavemaker.deeplink`). This can be found in the `app.json` file under `expo.android.package`.
* `sha256_cert_fingerprints`: The SHA256 fingerprints of your app’s signing certificate. You can use the following command to generate the fingerprint via the Java keytool:

```command
keytool -list -v -keystore my-release-key.keystore
```
The SHA256 fingerprints will look like `14:6D:E9:83...`

**`assetlinks.json`**
```javasscript
[
    {
        "relation": [
            "delegate_permission/common.handle_all_urls"
        ],
        "target": {
            "namespace": "android_app",
            "package_name": "com.wavemaker.deeplink",
            "sha256_cert_fingerprints": [
                "{sha256_cert_fingerprints}"
            ]
        }
    }
]
```

### Universal Linking(iOS)

Universal links are a deep linking method for iOS that uses standard HTTP or HTTPS links and associates them with an app.
When a universal link is opened, iOS checks whether the corresponding app is installed. If it is, the app is launched to the specified content; if not, the link opens in a web browser.

To implement universal links on iOS, a paid Apple Developer account is necessary because you must link your app with your fully qualified Apple Developer Team ID.

#### AASA configuration

On the web side, you need to host a JSON configuration file at the path `https://[host]/.well-known/apple-app-site-association` (with no file extension). This file includes information such as your Apple Developer Team ID, Bundle ID, and a list of paths that should be redirected to the corresponding native app.

Now, create `apple-app-site-association` for the website verification at `https://[host]/.well-known/apple-app-site-association` and collect the following information:

**`apple-app-site-association`**
```javascript
{
  "applinks": {
    "apps": [],
    "details": [
      {
        // Example: QQ57RJ5UTD.com.wavemaker.deeplink
        "appID": "{APPLE_TEAM_ID}.{BUNDLE_ID}",
        "paths": ["*"]
      }
    ]
  }
}
```

#### Native Apple configuration

After deploying your apple-app-site-association (AASA) file, you must also configure your app to use your associated domain:

Create `app.json` file and add the following fields to your `app.json` file and upload that `app.json` file to `src/main/webapp` in WaveMaker application.

For example, if an associated website is `https://example.com/pages/testpage`, the app links are:

**`app.json`**
```javascript
{
  "expo": {
    "ios": {
      "associatedDomains": ["applinks:example.com"]
    }
  }
}
```