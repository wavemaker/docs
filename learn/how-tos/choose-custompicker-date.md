---
title: "In mobile project, how to show the custom datepicker instead of native picker"
id: ""
---
---

Few might have a requirement of showing custom datepicker like the one shown in web project, to show up even for the mobile app.
This is possible by setting **showcustompicker** property in the properties panel of the date/time related widgets.

For a web project, custompicker opens when rendered in web browser and nativepicker when rendered in mobile browser, as shown below


[![web custom picker](/learn/assets/webpicker.png)](/learn/assets/webpicker.png)


[![mobile native picker](/learn/assets/androidpicker.png)](/learn/assets/androidpicker.png)


[![mobile native picker](/learn/assets/iospicker.png)](/learn/assets/iospicker.png)

These images are taken on android version 7.0 and iPhone version 14. These pickers might vary depending on device version.
Whereas in mobile app, when date is clicked, nativepicker will be opened.

If we need to show a custompicker that is shown in web proj, then set the **showcustompicker** property in the properties panel.

[![showcustompicker_prop](/learn/assets/iospicker.png)](/learn/assets/iospicker.png)

On setting showcustompicker property to true, **Show DatePicker On** property and **Date Entry Mode** property will be enabled.
Refer [datetime properties](learn/app-development/widgets/form-widgets/date-time-datetime)

Picture output view of showing custom picker instead of native

For web app rendered in mobile view, if we want to show custompicker instead of nativepicker then set showcustompicker on the markup as shown below

[![output](/learn/assets/code_showcustompicker.png)](/learn/assets/code_showcustompicker.png)







