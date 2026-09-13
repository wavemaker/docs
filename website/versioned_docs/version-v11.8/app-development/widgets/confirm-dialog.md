---
title: "Confirm Dialog"
id: "confirm-dialog"
---
---

[![confirm_struct](/learn/assets/confirm_struct.jpg)](/learn/assets/confirm_struct.jpg)

## Overview 
Dragging and dropping a dialog creates a **view** containing the dialog. The view can be selected from the **Page Structure** or from the **tabs** given at the bottom. The display of the dialog box at runtime is usually associated with the _onClick_ event of a **Button** widget. You can also trigger the dialog by calling methods from _JavaScript_.

## Confirm Dialog
Confirm Dialog is used to get confirmation from the user. In addition to the properties mentioned for Alert Dialog, it has an additional **Cancel **button. The most common usage is to confirm a delete action.

[![](/learn/assets/dialog_confirm.png)](/learn/assets/dialog_confirm.png)


## Script Access

**Dialog** widget in your project can be accessed by associating the open and _close_ properties of the dialog with an event of any other widget. The dialog can be accessed through scripting by adding _DialogService_ to the _page controller_ and adding the code for _open_ and _close_ as shown below, here we are displaying an alert dialog on click of a button: Click event of the button should trigger the following JavaScript code:

```  
Page.button3Click = function($event, widget) {
     Page.Widgets.confirmdialog1.open();
 }
```

For hiding dialog:
```
/* function called on button1 click */
        Page.button1Click = function($event, widget) {
            Page.Widgets.confirmdialog1.close();
        };
```
## Properties & Events
---
### Confirm Dialog Properties

| Property | Description |
| --- | --- |
| Title | Set the title of the widget. |
| Name | The name is a unique identifier for the confirm dialog. |
| Message | Set the display message for the widget. |
| Ok Text | This Confirm Dialog prompts to get confirmation from the user. |
| Cancel Text | This widget gives a pop-up window. It can be used to get confirmation of an action from the user. For example, do you want to delete this item? |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.   **NOTE**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** ||
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| Modal | This property, if set true, adds a backdrop for the dialog restricting the closure of the dialog when the user clicks outside of the dialog. The default value is false, which allows close of dialog on click outside. |
| **Behavior** |
| Enable Default Close Action | This property allows the user to access close action from header through an "x" icon; and also enables close through ESC key. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| Keyboard | This property if set true allows closing of dialog on ESC keypress. The default is true. |
| **Graphics** |
| Icon Class | This property defines the class of the icon that is applied to the button. |
| Icon Width | Optional property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Height | Optional property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Margin | Optional property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text. |

### Confirm Dialog Events

| Event | Description |
| --- | --- |
|**Callback Events**||
| On ok | This event handler is called whenever an ok event is triggered. |
| On cancel | This event handler is called whenever a cancel event is triggered. |
| On close | This event handler is called whenever a close event is triggered. |
| On open | This widget gives a pop-up window. It can be used to give a warning message to the user. For example, you are about to leave this page. |

