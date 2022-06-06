---
title: "React Native or Cordova to Develop a Mobile app in WaveMaker"
id: ""
sidebar_label: "React Native or Cordova"
---
---

WaveMaker supports [React Native](/learn/react-native/react-native) from [WaveMaker 11 Beta](/learn/wavemaker-release-notes/v11-0-1) onwards and [Cordova](/learn/hybrid-mobile/building-hybrid-mobile-apps) framework from quite some time. But the decision of which framework to use has several considerations, which are discussed in this document. The following details can help you choose whether to use Cordova or React Native to develop a new mobile application in WaveMaker Studio.

## Performance

React Native apps perform better compared to Cordova apps. We tested a few typical scenarios where the same app was developed in WaveMaker Studio using Cordova and React Native. We observed that the React Native app performed 40% better than the Cordova app in terms of app loading time. 


## Feature Parity

Comparatively, features supported in WaveMaker Studio for React Native apps are less than the full-fledged Cordova. But, React Native is relatively new in WaveMaker Studio and the features will be gradually added to React Native as we advance. For now, check the [available features](/learn/react-native/feature-support) and [supported widgets](/learn/react-native/supported-widgets) of React Native apps.

## Technology

In WaveMaker, the only difference between Cordova and React Native Apps development is the styling framework.

### Supported Technologies

|Cordova|React Native|
|----|----|
|UI runs on a WebView. | UI runs in a Javascript engine, such as JSC or Hermes.|
|HTML, JavaScript, and CSS to develop app UI. | You will use JavaScript to define and style the React Native UI. |

## CSS Support

:::note
React Native does not support CSS.
:::

CSS is very powerful and flexible. So, WaveMaker allows developers to define React Native styles like CSS, but with limitations. WaveMaker converts these CSS styles into JS styles. Therefore, a WaveMaker developer must learn this new way of styling the React Native app. Learn [how to style and theme](/learn/react-native/styles) React Native apps. It should not take more than an hour.

## Final thoughts

If performance is an important criterion for your app, then React Native should be your first choice over Cordova. However, identify the features required for your app and check if they are [supported in React Native Studio](/learn/react-native/supported-widgets). 