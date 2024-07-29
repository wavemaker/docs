---
title: "Single Page App" 
id: "single-page-app"
sidebar_label: "Enable SPA"
---
---

Single Page App (SPA), in a way, contributes to how the application UI renders. It provides a more seamless and responsive user experience by loading all necessary resources on a single page. Instead of loading pages from the server each time a user interacts with the app, this feature dynamically updates the content within the existing page.

## Impact of SPA Behaviour

After enabling the SPA behaviour, when you navigate across pages, it only affects the content part, and the rendering of static areas, such as the header, leftnav, and footer remains unchanged, which delivers smoother page transitions. 

:::note

With release 11.8.0, SPA behaviour will be enabled in the new applications by default. You need to enable it for the previously created applications.

:::

## How it works

Once the SPA behaviour is enabled,
- Page entirely loads when the layout is different which includes the static areas like, header, leftnav, footer and the partials used in the page.
- Only the page content loads when both the overall layout and the included partials remain the same.

## How it Helps User Experience

- It improves the user experience by providing faster load time and smoother transition from page to page.
- It reduces the server load as SPAs only need to load data as needed and make fewer requests to the server.

:::important
SPA will only function for deployed apps. There is no SPA for preview as of now.
:::

## Enabling SPA Behaviour

You can enable SPA behaviour by setting the SPA flag to **True** in the File Explorer. This flag is set to **False** by default.

1. Go to **File Explorer**. Go to Project path -> Profiles -> **Deployment Properties**. 

[![](/learn/assets/spa-enable-flag.png)](/learn/assets/spa-enable-flag.png)
 
2. Set the flag to `true` by adding the below code and click **Save**. 

```
app.build.ui.spa.enabled=true
```

[![](/learn/assets/spa-enable-true.png)](/learn/assets/spa-enable-true.png)

3. Next, go to Settings > **Profile Configuration**. Switch to **deployment** and navigate to **Build Options** to set the build mode to **Angular**.

:::note
It is recommended to set the build mode as **Angular**. This allows you to use the Angular package for deployment.
:::

[![](/learn/assets/spa-config-profile.png)](/learn/assets/spa-config-profile.png)
 
4. Now deploy the app and see how the app renders with SPA behavior enabled.


## Scenarios to Check

After enabling the SPA behaviour, it is recommended to check a few of the scenarios to confirm successful implementation.

- If the content in header, topnav, leftnav, and rightnav is rendered dynamically. For example, content is bound to an API variable.
- If the content is changed dynamically through `Partial.onReady` event for the partials and
show/hide attributes of the components in the above partials depend on javascript expressions.