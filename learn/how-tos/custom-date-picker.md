---
title: "Custom Date Picker in Mobile"
id: "custom-date-picker"
---
---

In this document, learn how to show the custom date picker instead of the native picker in a mobile project.

Custom date picker works similar to the one that renders in the web project. You can use the web version of the date picker for the mobile projects as well. To do this, set the **Show Custom Picker** property from the properties panel of the Date and Datetime widgets from a mobile project.

## Date Pickers in Web and Mobile

Typically for a web project, on clicking the date, a custom picker opens when it renders on a web browser, and it uses the native picker when it renders on a mobile browser, as shown below.

:::note
The following screenshots were taken from android version 7.0 and iPhone version 14. Therefore, the date pickers may vary slightly depending on the device version.
:::

### Date Picker in Web

[![web custom picker](/learn/assets/webpicker.png)](/learn/assets/webpicker.png)

### Date Picker in Android

[![mobile native picker](/learn/assets/androidpicker.png)](/learn/assets/androidpicker.png)

### Date Picker in iOS

[![mobile native picker](/learn/assets/iospicker.png)](/learn/assets/iospicker.png)

## How it Works

To display the custom date picker like the [web version](/learn/how-tos/custom-date-picker#date-picker-in-web) of it, enable the **Show Custom Picker** property from the properties panel.

[![showcustompicker_prop](/learn/assets/show-custom-picker-properties.png)](/learn/assets/show-custom-picker-properties.png)

When setting the **Show Custom Picker** property to true, the **Show DatePicker On** property and **Date Entry Mode** property will enable. For more information, see [datetime properties](/learn/app-development/widgets/form-widgets/date-time-datetime).

### Custom Picker for Web Apps with Mobile View

To show a custom picker instead of a native picker for a web app rendered in a mobile, set the `showcustompicker` property in the markup as shown below. This applies to Date, Time and Datetime widgets.

:::note
The markup extension is specifically for web apps to customize web projects to render mobile views with the custom date picker.
:::

```js
<wm-date name="date1" showcustompicker="true"></wm-date>
```

[![output](/learn/assets/code_showcustompicker.png)](/learn/assets/code_showcustompicker.png)









