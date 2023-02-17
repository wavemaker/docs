---
title: "Customise App Style"
id: "customise-app-style"
---
---
The theme applied to an app defines the styling attributes of various Page Components. You can

1. You can select from a wide range of Themes provided by WaveMaker. For more information, see [WM themes](/learn/app-development/ui-design/themes/).
2. Use your own theme and apply them to the Project. For more information, see [creating themes](/learn/app-development/ui-design/creating-themes).

## Steps to apply styles
You can also use the _app.css_ file to set styling changes for a specific page component. 

:::note
This is not a recommended course of action, use one of the above mentioned steps for theme change.
:::

1. Open `app.css` file from the additional developer tools.

[![](/learn/assets/design_app_css.png)](/learn/assets/design_app_css.png)

2. Enter the css stylesheet. For example, to change background colors for header, footer, navbar, leftnav and rightnav use the following snippet:

```css    
.wm-app .app-header {
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
```
    
3. Run the app and see the changes.

[![](/learn/assets/design_app.png)](/learn/assets/design_app.png)

## See Also

[How to set the app logo](/learn/how-tos/changing-app-logo/)  
[How to incorporate additional icons](/learn/how-tos/incorporating-additional-icons/)  
[How to conditionally change the color of icons](/learn/how-tos/displaying-icon-color-based-upon-condition/)  
[How to change the page title](/learn/how-tos/changing-page-title/)  
