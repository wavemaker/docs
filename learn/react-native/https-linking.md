---
title: "Https Linking"
id: "https-linking"
sidebar_label: "Https Linking"
---
---

## Deep Linking

Deep linking is a technique that allows you to link to specific, often contextually relevant, content or pages within a mobile app, rather than just opening the app's home screen. It enables users to access a particular section or piece of content within the app directly, improving user experience and engagement.

In deep linking, handling URLs with a custom scheme is not sufficient. If you use an `https` link, it will attempt to open your app directly. If the app is not installed on your mobile device, it will open the link in a web browser.

### Deep links in WaveMaker app

To configure an WaveMaker application to open https link, you must have to add some fields to the `app.json`. Suppose your https url is `https://example.com/pages/testpage`. For that, you need to add `scheme`, `host`, and pathPrefix and your scheme will be `https`, and host name will be `example.com` and also you need to pass pathPrefix that will be `pages`. 

Also, add set autoVerify to true in the corresponding intentFilter under app.json configuration.

Create `app.json` file and add the following fields to your `app.json` file and upload that `aap.json` file to `src/main/webapp` in WaveMaker application.

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

### Configuring Android Asset Links

A Digital Asset Links JSON file must be published on your website to indicate the Android apps that are associated with the website and verify the app's URL intents. 

To make Android open links directly in your application, the system checks if the host (the website or server) intends to allow this behavior. To confirm this, it queries the URL `https://[host]/.well-known/assetlinks`.

Now, create assetlinks.json for the website verification at `https://[host]/.well-known/assetlinks.json` and collect the following information:

- `package_name`: The Android application ID of your app (for example `com.wavemaker.deeplink`). This can be found in the `app.json` file under `expo.android.package`.

- `sha256_cert_fingerprints`: The SHA256 fingerprints of your app’s signing certificate. You can use the following command to generate the fingerprint via the Java keytool:
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

