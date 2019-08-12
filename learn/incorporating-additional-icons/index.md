---
title: "Incorporating Additional Icons"
date: "2017-04-24"
---

In WaveMaker many widgets like Panel, Button etc. have a way to display an icon. You can choose the icons from the list of wavicons or font-awesome icons. You can use glyph icons available[](http://getbootstrap.com/components/#glyphicons)

In case you want to add additional icons, following steps will help you achieve the same (here we are adding  foundation icons):

1. all the files in the library into the resources folder. [![](../assets/icon_add1.png)](../assets/icon_add1.png)
2. to the index.html and include the imported CSS file <link rel="stylesheet" href="resources/icons/foundation-icons.css" type="text/CSS" /> [![](../assets/icon_add2.png)](../assets/icon_add2.png) : you can also include the CDN URL directly without importing the files (step 1) as below: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" type="text/CSS" />
3. to the page and drag and drop the icon widget and set the add the class name for the icon class property. [![](../assets/icon_add3.png)](../assets/icon_add3.png)

[UI Cases](/learn/app-development/ui-design/use-cases-ui-design/)

- 1\. How to Navigate between Pages in
    - [Web Responsive Apps](/learn/responsive-web/web-ui-design/#page-navigation)
    - [Mobile Apps](/learn/hybrid-mobile/mobile-page-concepts/#page-navigation-actions)
- [2\. How to pass parameters to pages](/learn/how-tos/passing-parameters-pages/)
- [3\. How to pass parameters to partial pages](/learn/how-tos/passing-parameters-partial-page/)
- [4\. How to use static variable to pass data between pages](/learn/how-tos/use-static-variable-pass-data-pages/)
- [5\. How to set home page, language and date/time format](/learn/how-tos/setting-language-date-format/)
- [6\. How to change the default app favicon](/learn/how-tos/changing-default-favicon/)
- [7\. How to set the app logo](/learn/how-tos/changing-app-logo/)
- [8\. How to incorporate additional icons](/learn/how-tos/incorporating-additional-icons/)
- [9\. How to conditionally change the color of icons](/learn/how-tos/displaying-icon-color-based-upon-condition/)
- [10\. How to change the page title](/learn/how-tos/changing-page-title/)
- [11\. How to customise app styling](/learn/how-tos/customise-app-style/)
- [12\. How to change load icon](learn/how-tos/change-icon-global-spinner/)
- [13\. How to customise the app login page](/learn/how-tos/customise-login-page/)
