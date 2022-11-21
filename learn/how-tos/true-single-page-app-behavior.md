---
title: "True Single Page Behavior" 
id: ""
sidebar_label: "Enable True SPA Behavior"
---
---

TrueSPA in a way contributes to how the application UI renders. It behaves close to Single Page App functionality. When you navigate across pages, it only affects the content part, and the rendering of static areas, such as the header, leftnav, footer, etc., remains unchanged, which delivers smoother page transitions and a better user experience. 

:::note
TrueSPA is released in [v11.2](/learn/wavemaker-release-notes/v11-2-0) as beta; therefore, it is not enabled by default.
:::

## How it helps User Experience

- It improves the performance and page load experience of apps. 
- Navigating between pages with the same layout does not require a page refresh.

:::important
TrueSPA will only function for deployed apps. There is no SPA for preview as of now.
:::

## Enabling TrueSPA Behaviour

To enable the feature, you must configure the TrueSPA flag to **True** from File Explorer. The default is set to **False**.

1. Go to File Explorer. Go to Project path -> Profiles -> Deployment Properties. 

[![](/learn/assets/true-spa-enable-flag.png)](/learn/assets/true-spa-enable-flag.png)
 
2. Set the flag to `true` and **Save**. 

```
app.build.ui.spa.enabled=true
```
 
3. In **Profiles Configuration**, go to the below settings for the deployment.

[![](/learn/assets/true-spa-config-profile.png)](/learn/assets/true-spa-config-profile.png)
 
4. Now deploy the app and see how the app renders with the true SPA behavior enabled.