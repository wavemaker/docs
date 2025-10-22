---
title: "Splash Screen"
id: "splash-screen"
sidebar_label: "Splash Screen"
---

import splashScreenDarkLightConfig from '/learn/assets/react-native/splashScreenDarkLightConfig.mp4';

A Splash Screen is the first screen your users see when they launch your app.  
It appears instantly after the app icon is tapped and remains visible until the app is fully loaded.

A well-designed splash screen not only masks loading time but also delivers a smooth, branded experience by displaying your app’s logo, colors, or animations right from the start.

The splash screen includes a centered icon with an optional background color, and an optional animation.

## Accessing Splash Screen Settings

1. In Studio, go to **Settings** → **Build Preferences**.  
2. In the **Build Preferences** page, select the **Splash Screen** tab.

![Splash Screen Config](/learn/assets/release-notes/splash-screen-config-11-11-7.png)

## How the Splash Screen Works

A splash screen consists of two parts:

### 1. First Part – Background & Icon
- **Background**: Set a background color.
- **Icon**: Displayed in the center, with customizable width.

### 2. Second Part – Lottie Animation *(Optional)*
- Upload a [Lottie JSON animation](https://lottiefiles.com/) to play after the first part is displayed.
- The animation continues until the app finishes loading.
- If no animation is added, the first part stays visible until the app loads.

## Dark and Light Mode Support
- All configurations (background, icon, animation) can now be defined separately for when the user's device is in Light or Dark mode.
- If no Dark mode configuration is provided, the Light mode splash screen is shown by default.

<video 
  src={splashScreenDarkLightConfig}
  autoPlay
  loop 
  controls 
  preload="metadata" 
  style={{ maxWidth: "100%", borderRadius: "12px" }}
/>

## Live Preview

Use the _preview feature_ to see your splash screen instantly:

- **Background** – Displays the background and icon.
- **Animation** – Plays the Lottie animation alone.
- **App Launch** – Simulates the complete flow: background → animation → mock home page.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/f1HCdvk5zz9ts4n1ASDQMQ"
    title="Splash Screen Config Preview"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>