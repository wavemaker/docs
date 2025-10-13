---
title: "Share"
id: "share"
sidebar_label: "Share"
---
---
import shareNow from '/learn/assets/share-now.png';

The share feature in mobile applications allows users to easily distribute content from the app to other platforms, 
enhancing the user experience by integrating with social behaviors. It also serves as organic marketing, broadening the 
app’s reach and providing valuable user engagement data, while establishing trust through social proof. This 
functionality can lead to increased app visibility and user retention. In this how-to guide, we will learn how to 
implement the share feature in a WaveMaker application. 

## Implement Share in WaveMaker Application

In WaveMaker Application, we can leverage React Native Share API to share content of application.

<img src={shareNow} style={{width:"35%"}} />

To achieve the above mockup, the following code snippet is used:

```javascript

const ReactNative = require('react-native')
Page.onReady = function() {

};

Page.sharebtnTap = async function($event, widget) {
    try {
        const result = await ReactNative.Share.share({
            message: 'Check out this awesome app!', //this message can be dynamic
            url: 'https://wavemaker.com',
            title: 'My WM App',
        });

        if (result.action === ReactNative.Share.sharedAction) {
            Page.Widgets.resMessage.caption = 'Content shared successfully'

        } else if (result.action === ReactNative.Share.dismissedAction) {
            Page.Widgets.resMessage.caption = 'Sharing dismissed';
        }
    } catch (e) {
        Page.Widgets.resMessage.caption = e.message
    }
};

```