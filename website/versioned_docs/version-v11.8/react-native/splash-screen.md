---
title: "Splash Screen"
id: "splash-screen"
sidebar_label: "Splash Screen"
---
---

A Splash Screen is a screen that displays an image or animation when the app is loading when you launch the app. You can add brand logo or a plain background. WaveMaker allows you to add lively animation that supports Lottie files, which is a JSON-based animation file format, allowing you to incorporate animation as a static asset.

Splash Screen provides you with two types of screens to configure:

1. Background
2. Logo

Learn how to configure these screens in the following sections.

## Accessing Splash Screen

1. Go to the **Export** option.
2. Choose **Project as ReactNative Zip**. This opens the **Build ReactNative Zip** dialog. 
3. Go to the **Splash Screen** tab, displays as below.

![SplashScreen](/learn/assets/splash-screen.png)

## Background 

:::note
This is the default Splash Screen applied to the application when no configuration is provided.
:::

In Background, there are following two options.

- **[Color](#color)**
- **[Image](#image)**


### Color 

With this option, you can use the color selector to select a color and use it as a Splash Screen image.

![SplashScreen-BgColor](/learn/assets/splash-screen-bgcolor.png)

:::note
If there is already a Splash Screen image selected, then the option will replace it with the selected color or vice versa between **Color** and **Image** properties.
:::

### Image

With this option, you can upload images only with the resolution of **1284x2778** for the Splash Screen.

![SplashScreen-Image](/learn/assets/splash-screen-image.png)

## Logo

Choosing this option allows you to use [Lottie Animations](https://lottiefiles.com/) as Splash Screen. You can only upload Lottie JSON files through this option.

![SplashScreen-Animation](/learn/assets/splash-screen-animation.gif)

:::important
When selecting **Logo**, you can configure the **Background Color** or **Image** too as a Splash image to load as the first frame. You can apply color to match with the Lottie animation you use. By applying the **Background** property, it helps apply smoother transition when the animation loads. 
:::
