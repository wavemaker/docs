---
title: "IFrame Dialog"
id: "iframe-dialog"
---
---

[![iframe_struct](/learn/assets/iframe_struct.jpg)](/learn/assets/iframe_struct.jpg)

## Overview
Dragging and dropping a dialog creates a **view** containing the dialog. The view can be selected from the **Page Structure** or from the **tabs** given at the bottom. The display of the dialog box at runtime is usually associated with the _onClick_ event of a **Button** widget. You can also trigger the dialog by calling methods from _JavaScript_.

## Iframe Dialog

An Iframe Dialog is a popup window that displays content from an external source (URL) in a dialog. It has an **URL** property, where you mention the external source for the content.

**Note:** Since WaveMaker is secured, only secure URLs can be displayed in the Iframe.

[![](/learn/assets/dialog_iframe.png)](/learn/assets/dialog_iframe.png)

## Script Access

**Dialog** widget in your project can be accessed by associating the open and _close_ properties of the dialog with an event of any other widget. The dialog can be accessed through scripting by adding _DialogService_ to the _page controller_ and adding the code for _open_ and _close_ as shown below, here we are displaying an alert dialog on click of a button: Click event of the button should trigger the following JavaScript code:

```   
Page.button3Click = function($event, widget) {
     Page.Widgets.iframedialog1.open();
 }
```

For hiding dialog:

```js
/* function called on button1 click */
        Page.button1Click = function($event, widget) {
            Page.Widgets.iframedialog1.close();
        };
```

## Properties & Events
---
### Iframe Dialog Properties

Check this if you want the provided URL to be encoded at the run time.

| Property | Description |
| --- | --- |
| Title | Set the title of iframe dialog. |
| Name | The name is a unique identifier for iframe dialog. |
| Ok Text | This widget gives a pop-up window. It can be used to provide contextual information from an HTML source to the user. For example, here is a sample from the source. |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.   **NOTE**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** ||
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| Show Header | Show/hide header of the iframe dialog. |
| Modal | This property, if set true, adds a backdrop for the dialog restricting the closure of the dialog when the user clicks outside of the dialog. The default value is false, which allows close of dialog on click outside. |
| **Content** |
| Url | Any URL entered for this property will be shown in the dialog content. |
| **Behavior** |
| Enable Default Close Action | This property allows the user to access close action from header through an "x" icon; and also enables close through ESC key. |
| Show actions | This property shows/hides actions section of the iframe dialog. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| Encode URL | Check this if you want the provided URL to be encoded at the run time. Enabling this property will encode the special characters in the URL and enable rendering of the page which otherwise might fail. By default, it is set to false. |
| Keyboard | This property if set true allows closing of dialog on ESC keypress. The default is true. |
| **Graphics** |
| Icon Class | This property defines the class of the icon that is applied to the button. |
| Icon Width | Optional property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Height | Optional property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Margin | Optional property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text. |

### Iframe Dialog

| Event | Description |
| --- | --- |
| **Callback Events** ||
| On ok | This event handler is called whenever an ok event is triggered. |
| On close | This event handler is called whenever a close event is triggered. |
| On open | This widget gives a pop-up window. It can be used to give a warning message to the user. For example, you are about to leave this page. |

