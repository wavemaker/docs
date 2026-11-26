---
title: "How to notify users about the availability of a new update"
id: "mobile-notify-new-version-update"
sidebar_label: "Notify users about new update"
---
---

Every application you build requires time-to-time changes, new features, and improvements you would release.

## Use Case

For mobile applications, when you release a new update to the PlayStore, or the AppStore, there should be a way to notify the user about the new update.

However, this feature is not available out-of-the-box yet.

## Solution

You can still achieve this by comparing the current version of the app in your mobile with the latest version available in the PlayStore or the AppStore, and notify the app users about the latest version details. 

For this, get the latest app version from PlayStore/AppStore, and get the app version that is installed in the device by using the `getAppInfo` device variable, and compare them and invoke a notification accordingly.

### How to Notify the user about the New Update

1. Use a database entity to store the details of the application's latest version.

![MobApp-Version-Upgrade-Entity](/learn/assets/mobile-notify-new-version-entity.png)

2. Before publishing the latest version of the application to PlayStore/AppStore, Update the record in the entity of the database.

![MobApp-Version-Upgrade-Query](/learn/assets/mobile-notify-new-version-saved-query.png)

3. Drag-and-drop a dialog in the **Common** partial page with the details you want to notify the app users whenever a new version is available.

![MobApp-Version-Upgrade-DesignDialog](/learn/assets/mobile-notify-new-version-notification-design-dialog.png)

4. To fetch the app version from the current application, you can use the `GetAppInfo` device variable.

![Mobile-Version-Upgrade-DeviceVarAppInfo](/learn/assets/mobile-notify-new-version-device-variable-appinfo.png)

5. To fetch the latest version details stored in the database entity, create an application-level Database CRUD variable of the entity.

![MobApp-Version-Upgrade-DbCrudVar](/learn/assets/mobile-notify-new-version-database-crud-variable.png)

6. Add compare logic in the `app.js` file by adding an `app-variables-data-loaded` event.

```js
 App.subscribe("app-variables-data-loaded", function() {
    if (window['cordova'] && isLatest()) {
        App.Widgets.UpgradeNotifyDialog.open();
    }
});
```

:::note
This event will be triggered when all the variables in the application are ready to use.
:::

The `isLatest()` function determines whether the current app is the latest one and notify the app users accordingly.

```js
  function isLatest() {

   var latestAndroidVersion =    App.Variables.LatestAppVersionsData.dataSet[0].androidVersion;
    var latestIOSVersion = App.Variables.LatestAppVersionsData.dataSet[0].iosVersion;
    if (App.Variables.deviceInfo.dataSet.os === 'Android') {
        return compare(latestAndroidVersion,App.Variables.appInfo.dataSet.appversion)> 0;
    } else if (App.Variables.deviceInfo.dataSet.os === 'iOS') {
        return compare(latestIOSVersion, App.Variables.appInfo.dataSet.appversion) > 0;
    }
}
```

Following is a sample logic to compare both the versions.

```js
//compare both versions
function compare(ver1, ver2) {
    ver1 = ver1.split('.');
    ver2 = ver2.split('.');
    var m = Math.max(ver1.length, ver2.length);
    addPadding(ver1, m);
    addPadding(ver2, m);
    var x, y;
    for (var i = 0; i < m; i++) {
        x = parseInt(ver1[i]);
        y = parseInt(ver2[i]);
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        }
    }
    return 0;
}

function addPadding(ver, lengthToPad) {
    for (var i = ver.length; i <= lengthToPad; i++) {
        ver.push('0');
    }
    return ver;
}
```

7. On launching the application when the latest version is available, notification dialog opens with the information you provide. Depending on the underlying OS, show a corresponding link to download the latest version from the PlayStore or AppStore.

![MobApp-Version-Upgrade-Preview](/learn/assets/mobile-notify-new-version-notification-preview.png)
