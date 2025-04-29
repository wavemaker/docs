---
title: "Segmented Control"
id: "segmented-control"
---

![](/learn/assets/phone.png)  **NOTE**: Segmented Control is available only for mobile apps.

**Segmented Control** is a group of buttons that toggle _Segmented Content_.

**Segmented Content** is a sub-widget of segment control that holds the content of each segment.  On left swipe of a segmented content, the segment content next to it will be shown. On right swipe of a segmented content, the segment content previous to it will be shown.

## Features

A Segmented Control has three segments by default. Additional segments can be added by clicking on ‘_Add Segmented Content_’ button in widgets property panel.

**NOTE:** To select a particular Segmented Control in design mode, click on any segment and press ‘ESC’ to select the segmented control.

Each segment content has the following configurable properties.

- ****Caption** - This property is for setting title for the segment,**
- **Load -** This property is to delay the content loading of invisible segments and thus reduce page load time. You can choose from three options:
    - the default or blank denotes ‘Load immediately’,  
    - after-select - segment content will be loaded on visible of the segment. 
    - after-delay - segment content will be loaded after a time delay.
- **Load Delay** - In the case when the ‘load’ is after-delay, then content will be loaded after the number of milliseconds as specified on this property.
- **Icon Class -** Icon to use for the segment.

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for the Segmented Control. Special characters and spaces are not allowed in widget name. |
| Add Segmented Content | This action allows one to add multiple contents to the Segment Control. |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.     NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |

**Segment Content** SubWidget of Segmented Control, to hold content.

| **Property** | **Description** |
| --- | --- |
| Caption | This bindable property defines the text that the end user sees. |
| Name | The name is a unique identifier for the segment content. Special characters and spaces are not allowed in widget name. |
| **Layout** |
| With | The width of the widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of the widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Load | This property defines the load behavior of the container can be:   - after-select - load the content after selection of the content or   - after-delay - load content after a time delay.  |
| Load Delay | Time in milliseconds, after which the container has to be loaded. This property is used only when the load mode is set to 'after-delay'. |
| **Graphics** |
| Icon Class | This bindable property defines the class of the icon that is applied to the button. |
| **Format** |
| Horizontal Align | This property specifies how the elements should be aligned horizontally - left, center or right. |

## Events

### On segmented control

- **On before segment change** -  The event Listener to call before changing to an another segment. Three parameters are passed:
    1. the scope of the widget,
    2. old selected segment index and
    3. newly selected index
- **On segment change** - The event Listener to call after changing to a segment. Three parameters are passed:
    1. the scope of the widget,
    2. old selected segment index and
    3. newly selected index

### On each segment

- **On ready** -  The event Listener to call when the content is loaded for the segment. Two parameters are passed:
    1. event object and
    2. the scope of the widget.

