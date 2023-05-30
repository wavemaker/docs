---
title: "Third-party expo plugins"
id: "third-party-expo-plugins"
sidebar_label: "Third-party expo plugins"
---
---

import pluginExample from '/learn/assets/expo-plugins-example.png';

Add third-party plugins to your React Native projects. WaveMaker extended support for npm, git, and local, in addition to Expo plugins. You can import plugins from the **Export as ReactNative Zip** Dialog.  

## Expo

This option shows all the available Expo plugins. Once the plugin is selected, it will add the latest version of the plugin to the project.

![Expo-plugins](/learn/assets/expo-plugins.png)

## Npm

This option will allow users to add a specified version of the plugin from the [npm registry](https://www.npmjs.com/) and add it to the project.

![Expo-plugins-npm](/learn/assets/expo-plugins-npm.png)

## GitHub

This option allows you to upload custom expo plugins from the Git repo. For this, provide the plugin name and the Git repository details, such as `github:username/repository` and it will get added to the project.

### GitHub Example
 
Git Repo URL - https://github.com/sboyina/my-expo-battery

You'll need to pass the GitHub URL: `https://github.com/sboyina/my-expo-battery/tarball/main`

![Expo-plugins-git](/learn/assets/expo-plugins-git.png)


## Local

This option allows users to upload their own customized plugin using tarball file (.tgz file).

You can get the tarball (.tgz file) of expo-plugins by visiting https://registry.npmjs.org/expo-plugin-name/expo-plugin-version 

You can find the tarball under the dist key.

![Expo-plugins-local](/learn/assets/expo-plugins-local.png)

## Example

1. Please import the **expo-battery** plugin.

![Expo Battery Import](/learn/assets/expo-plugins-import-example.png)

2. In the Script Tab, add the following code.

### Markup

```
<wm-page name="mainpage">
    <wm-left-panel content="leftnav" name="left_panel1"></wm-left-panel>
    <wm-mobile-navbar name="mobile_navbar1" title="Title" backbutton="false">
        <wm-anchor caption="" name="AddLink" iconclass="wi wi-gear"></wm-anchor>
    </wm-mobile-navbar>
    <wm-content name="content1">
        <wm-page-content columnwidth="12" name="page_content1" backgroundcolor="#717171">
            <wm-layoutgrid name="layoutgrid1">
                <wm-gridrow name="gridrow2">
                    <wm-gridcolumn columnwidth="6" name="gridcolumn3" xscolumnwidth="12">
                        <wm-label padding="unset 4px" name="label2" class="h2" caption="This a DemoApp"></wm-label>
                    </wm-gridcolumn>
                </wm-gridrow>
                <wm-gridrow name="gridrow1">
                    <wm-gridcolumn columnwidth="6" name="gridcolumn1" xscolumnwidth="12">
                        <wm-label padding="unset 4px" name="label2_1" color="#000000" caption="Battery Level"></wm-label>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="6" name="gridcolumn2" xscolumnwidth="6">
                        <wm-label padding="unset 4px" name="label3" color="#000000" caption="0"></wm-label>
                    </wm-gridcolumn>
                </wm-gridrow>
            </wm-layoutgrid>
        </wm-page-content>
    </wm-content>
    <wm-mobile-tabbar name="mobile_tabbar1"></wm-mobile-tabbar>
</wm-page>
```

### Script

```js
const battery = require('expo-battery');

Page.onReady = function() {
    Page.batteryLevel();
};

Page.batteryLevel = async function() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    Page.Widgets.label3.caption = batteryLevel;
}
```

3. Preview will show the Battery Level using `getBatteryLevelAsync` API.


<img src={pluginExample} style={{width:150, height:300}} />

### Platform

Third-party plugins are supported only on specific platforms and these can be implemented by using `Platform.OS`. By importing `react-native` a condition to check the platform can be added. See the example below.

```js
const Battery = require('expo-battery');
const reactnative = require('react-native');
Page.onReady = function() {
    if (reactnative.Platform.OS == 'web')
        Page.batteryLevel();
};

Page.batteryLevel = async function() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    Page.Widgets.label3.caption = batteryLevel;
}
```
