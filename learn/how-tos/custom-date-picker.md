---
title: "Custom Date Picker in Mobile"
id: ""
---
---

In this document, learn how how to show the custom date picker instead of native picker in a mobile project. 

Custom date picker works similar to the one that renders in the web project. You can use the web version of the date picker for the mobile projects as well. To do this, set the **Show Custom Picker** property from the properties panel of the Date and Datetime widgets from a mobile project.

## Date Picker in Web

For a web project, a custom picker opens when it renders on a web browser, and it uses native picker when it renders on a mobile browser, as shown below.


[![web custom picker](/learn/assets/webpicker.png)](/learn/assets/webpicker.png)

## Date Picket in Android

[![mobile native picker](/learn/assets/androidpicker.png)](/learn/assets/androidpicker.png)

## Date Picket in iOS

[![mobile native picker](/learn/assets/iospicker.png)](/learn/assets/iospicker.png)

:::note
The above images were taken from android version 7.0 and iPhone version 14. Therefore, the date pickers may slightly vary depending on the device version. However, in mobile app, when you click date, the native picker will open.
:::

To display the custom date picker shown in web project above, enable the **Show Custom Picker** property from the properties panel.

[![showcustompicker_prop](/learn/assets/iospicker.png)](/learn/assets/iospicker.png)

When setting the **`showcustompicker`** property to true, the **Show DatePicker On** property and **Date Entry Mode** property will enable. For more information, see [datetime properties](/learn/app-development/widgets/form-widgets/date-time-datetime).

<!--- Picture output view of showing custom picker instead of native. --->

To show a custom picker instead of a native picker for a web app rendered in mobile view, set `showcustompicker` in the markup as shown below.

[![output](/learn/assets/code_showcustompicker.png)](/learn/assets/code_showcustompicker.png)







