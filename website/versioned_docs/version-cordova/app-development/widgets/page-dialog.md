---
title: "Page Dialog"
id: "page-dialog"
---
---

[![page_struct](/learn/assets/page_struct.jpg)](/learn/assets/page_struct.jpg)

## Overview

Dragging and dropping a dialog creates a **view** containing the dialog. The view can be selected from the **Page Structure** or from the **tabs** given at the bottom. The display of the dialog box at runtime is usually associated with the _onClick_ event of a **Button** widget. You can also trigger the dialog by calling methods from _JavaScript_.

## Page Dialog

Page Dialog is a popup window that displays page content and can be dismissed by the user. The **content** property of this widget can be set to the desired [partial page](/learn/app-development/ui-design/page-concepts/partial-pages/) content.

[![](/learn/assets/dialog_page.png)](/learn/assets/dialog_page.png)

## Script Access

**Dialog** widget in your project can be accessed by associating the open and _close_ properties of the dialog with an event of any other widget. The dialog can be accessed through scripting by adding _DialogService_ to the _page controller_ and adding the code for _open_ and _close_ as shown below, here we are displaying an alert dialog on click of a button: Click event of the button should trigger the following JavaScript code:

```js  
Page.button3Click = function($event, widget) {
     Page.Widgets.pagedialog1.open();
 }
```

For hiding dialog:

```js
/* function called on button1 click */
        Page.button1Click = function($event, widget) {
            Page.Widgets.pagedialog1.close();
        };
```

## Properties & Events
---

### Page Dialog Properties

| Property | Description |
| --- | --- |
| Title | Set the title of the widget. |
| Name | The name is a unique identifier for the widget. |
| Ok Text | This widget gives a pop-up window. It can be used to provide contextual information to the user. |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.   **NOTE**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** ||
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| Modal | This property, if set true, adds a backdrop for the dialog restricting the closure of the dialog when the user clicks outside of the dialog. The default value is false, which allows close of dialog on click outside. |
| **Content** |
| Content | Page's content to be included in the widget. |
| **Behavior** |
| Enable Default Close Action | This property allows the user to access close action from header through an "x" icon; and also enables close through ESC key. |
| Show actions | This property shows/hides actions section of the widget. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| Keyboard | This property if set true allows closing of dialog on ESC keypress. The default is true. |
| **Graphics** |
| Icon Class | This property defines the class of the icon that is applied to the button. |
| Icon Width | Optional property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Height | Optional property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Margin | Optional property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text. |

### Page Dialog Events

| Event | Description |
| --- | --- |
| On load | This event handler is called when the widget is loaded. |
| **Callback Events** |
| On ok | This event handler is called whenever an ok event is triggered. |
| On close | This event handler is called whenever a close event is triggered. |
| On open | This widget gives a pop-up window. It can be used to give a warning message to the user. For example, you are about to leave this page. |
