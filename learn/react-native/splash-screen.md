---
title: "Splash Screen"
id: "splash-screen"
sidebar_label: "Splash Screen"
---
---

A splash screen is a graphical control element consisting of a window containing an image, a logo, an Animation and the current version of the software. It is the introduction page of the Application.

we can customize splash screen of the application from Build ReactNative Zip dialog (export -> project as ReactNative zip).

![SplashScreen](/learn/assets/splash-screen.png)

#### Image as a SplashScreen

With this option we can upload Images only with resoulution **1284x2778** for splash screen.

![SplashScreen-Image](/learn/assets/splash-screen-image.png)


#### Background Color as a SplashScreen

With this option we can use color selector, to select a color and use it as a Splash screen image.

![SplashScreen-BgColor](/learn/assets/splash-screen-bgcolor.png)

If there is already a Splash Image selected, then this option will replace it with the selected color and vice versa.

#### Animation as a SplashScreen

With this option we can use [Lottie animations](https://lottiefiles.com/) as a SplashScreen. we can only upload lottie json files through this option.

When selecting this option, we also need to use either color(same background color as animation) or an image(first frame of the animation).

**Note:** without using color or image app will show a blank screen initially then plays the animation.

![SplashScreen-Animation](/learn/assets/splash-screen-animation.gif)
