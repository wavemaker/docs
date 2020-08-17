---
title: "How to notify users about the availability of a new update"
id: "mobile-notify-new-version-update"
sidebar_label: "Notify users about new update"
---
---

Every application we build requires time to time changes, new features and improvements to be released.

## Problem

In case of mobile applications whenever there is a new version available in Play store/App Store, there must be a way to notify the user.
Currently in WaveMaker, there is no such feature available and might be available in future releases.

## Solution

Still app developers can achieve this by comparing the current app version with the latest on play store or app store available to notify the app users with the latest version details.
We suggest app developers to get the application latest version of PlayStore/AppStore and get the version of the application installed in the device from the getAppInfo Device variable, compare them and invoke a notification accordingly.

**Here is the example on how to achieve the use case**

1. Use a database entity to store the details of the application latest version.

![MobApp-Version-Upgrade-Entity](/learn/assets/mobile-notify-new-version-entity.png)

2. Before publishing the latest version of application to AppStore/PlayStore, Update the record in the entity of the database.

![MobApp-Version-Upgrade-Query](/learn/assets/mobile-notify-new-version-saved-query.png)

3. Dnd a dialog in the ‘Common’ partial page with the details you want to notify the app users whenever a new version is available. 

![MobApp-Version-Upgrade-DesignDialog](/learn/assets/mobile-notify-new-version-notification-design-dialog.png)

4. To fetch the app version from the current application, we can use the ‘GetAppInfo’ device variable.

![Mobile-Version-Upgrade-DeviceVarAppInfo](/learn/assets/mobile-notify-new-version-device-variable-appinfo.png)

5. To fetch the latest version details stored in the database entity, create an application level Database CRUD variable of the entity.

![MobApp-Version-Upgrade-DbCrudVar](/learn/assets/mobile-notify-new-version-database-crud-variable.png)

6. Add compare logic in app.js file by adding a app-variables-data-loaded event.

```
 App.subscribe("app-variables-data-loaded", function() {
    if (window['cordova'] && isLatest()) {
        App.Widgets.UpgradeNotifyDialog.open();
    }
});
```

:::note
This event will be triggered when all the variables in the application are ready to use.
:::

The function isLatest() will determine whether the current app is latest and notify the app users accordingly.

```
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

Here is sample logic to compare both the versions

```
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
7. On launching the application when the latest version is available, notification dialog will be opened with the provided information. Depending on the
 underlying OS, show a corresponding link to download the latest version from PlayStore or App Store.

![MobApp-Version-Upgrade-Preview](/learn/assets/mobile-notify-new-version-notification-preview.png)
