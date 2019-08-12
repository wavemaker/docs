---
title: "Customise App Style"
date: "2017-01-09"
---

The theme applied to an app defines the styling attributes of various Page Components. You can

1. can select from a wide range of Themes provided by WaveMaker, [more](/learn/app-development/ui-design/themes/)
2. your own theme and apply them to the Project, [more](/learn/app-development/ui-design/themes/#create-theme)

You can also use the  file to set styling changes for a specific page component. **:** This is not a recommended course of action, use one of the above mentioned steps for theme change.

1. file from the additional developer tools [![](../assets/design_app_css.png)](../assets/design_app_css.png)
2. the css stylesheet. For example, to change background colors for header, footer, navbar, leftnav and rightnav use the following snippet:
    
    \-app .app-header {
        background-color: green;
    }
    .wm-app .app-footer {
        background-color: yellow;
    }
    .wm-app .navbar {
        background-color: red;
    }
    .wm-app .app-left-panel {
        background-color: gray;
    }
    .wm-app .app-right-panel {
        background-color: black;
    }
    
3. the app and see the changes [![](../assets/design_app.png)](../assets/design_app.png)

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
- [12\. How to customise the app login page](/learn/how-tos/customise-login-page/)
