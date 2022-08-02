---
title: "Login Dialog"
id: "login-dialog"
---
---

[![login_struct](/learn/assets/login_struct.jpg)](/learn/assets/login_struct.jpg)

## Overview

Dragging and dropping a dialog creates a **view** containing the dialog. The view can be selected from the **Page Structure** or from the **tabs** given at the bottom. The display of the dialog box at runtime is usually associated with the _onClick_ event of a **Button** widget. You can also trigger the dialog by calling methods from _JavaScript_.

## Login Dialog

Login Dialog is a popup window that displays Login page content and can be dismissed by the user. Especially used to refresh the membership or for additional confirmation. The events that can be set include _onSuccess_, _onError_ and _onClose_.

[![dialog_login](/learn/assets/dialog_login.png)](/learn/assets/dialog_login.png)

## Script Access

**Dialog** widget in your project can be accessed by associating the open and _close_ properties of the dialog with an event of any other widget. The dialog can be accessed through scripting by adding _DialogService_ to the _page controller_ and adding the code for _open_ and _close_ as shown below, here we are displaying an alert dialog on click of a button: Click event of the button should trigger the following JavaScript code:

```js  
Page.button3Click = function($event, widget) {
     Page.Widgets.logindialog1.open();
 }
```

For hiding dialog:

```js
/* function called on button1 click */
        Page.button1Click = function($event, widget) {
            Page.Widgets.logindialog1.close();
        };
```

## Properties & Events
---

### Login Dialog Properties

| Property | Description |
| --- | --- |
| Title | Set the title of the widget. |
| Name | The name is a unique identifier for the widget. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Modal | This property, if set true, adds a backdrop for the dialog restricting the closure of the dialog when the user clicks outside of the dialog. The default value is false, which allows close of dialog on click outside. |
| **Behavior** |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| Keyboard | This property if set true allows closing of dialog on ESC keypress. The default is true. |
| **Graphics** |
| Icon Class | This property defines the class of the icon that is applied to the button. |
| Icon Width | Optional property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Height | Optional property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Margin | Optional property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text. |

### Login Dialog Events

| Event | Description |
| --- | --- |
| **Callback Events** |
| On submit | This event handler is called whenever a submit event is triggered. |
| On close | This event handler is called whenever a close event is triggered. |
| On open | This widget gives a pop-up window. It can be used to give a warning message to the user. For example, you are about to leave this page. |
| On success | This event handler is called whenever a success event is triggered. |
| On error | This event handler is called whenever an error event is triggered. |


