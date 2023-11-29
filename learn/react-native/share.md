---
title: "Share"
id: "share"
sidebar_label: "Share"
---
---
import shareNow from '/learn/assets/share-now.png';
Share is a feature that allows users to share content from your application to other apps or services on their device. 

## Implement Share in WaveMaker Application

In WaveMaker Application, we are using React Native Share API to share content of application.

<img src={shareNow} style={{width:"35%"}} />

The following is the code snippet for the above mockup:
```javascript

const ReactNative = require('react-native')
Page.onReady = function() {

};

Page.sharebtnTap = async function($event, widget) {
    try {
        const result = await ReactNative.Share.share({
            message: 'Check out this awesome app!',
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