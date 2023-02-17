---
title: "Single Page App" 
id: "single-page-app"
sidebar_label: "Enable SPA"
---
---

Single Page App (SPA), in a way, contributes to how the application UI renders. It behaves close to Single Page App functionality. When you navigate across pages, it only affects the content part, and the rendering of static areas, such as the header, leftnav, footer, etc., remains unchanged, which delivers smoother page transitions and a better user experience. 

:::note
SPA is released in [v11.2](/learn/wavemaker-release-notes/v11-2-0) as beta; therefore, it is not enabled by default.
:::

## How it Helps User Experience

- It improves the performance and page load experience of apps. 
- Navigating between pages with the same layout does not require a page refresh.

:::important
SPA will only function for deployed apps. There is no SPA for preview as of now.
:::

## Enabling SPA Behavior

To enable the feature, you must configure the SPA flag to **True** from File Explorer. The default is set to **False**.

1. Go to File Explorer. Go to Project path -> Profiles -> Deployment Properties. 

[![](/learn/assets/spa-enable-flag.png)](/learn/assets/spa-enable-flag.png)
 
2. Set the flag to `true` and **Save**. 

```
app.build.ui.spa.enabled=true
```
 
3. In **Profiles Configuration**, go to the below settings for the deployment.

[![](/learn/assets/spa-config-profile.png)](/learn/assets/spa-config-profile.png)
 
4. Now deploy the app and see how the app renders with SPA behavior enabled.