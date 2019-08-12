---
title: "Segmented Control"
date: "2016-09-26"
---

![](../assets/phone.png)  : Segmented Control is available only for mobile apps.

**Control** is a group of buttons that toggle _Content_

**Content** is a sub-widget of segment control that holds the content of each segment.  On left swipe of a segmented content, the segment content next to it will be shown. On right swipe of a segmented content, the segment content previous to it will be shown.

Segmented Control has three segments by default. Additional segments can be added by clicking on ‘ _Segmented Content_’ button in widgets property panel.

**:** select a particular Segmented Control in design mode, click on any segment and press ‘ESC’ to select the segmented control.

segment content has the following configurable properties.

- **\- This property is for setting title for the segment,**
- **\-** property is to delay the content loading of invisible segments and thus reduce page load time. You can choose from three options:
    - default or blank denotes ‘Load immediately’,  
    - \-select - segment content will be loaded on visible of the segment. 
    - \-delay - segment content will be loaded after a time delay.
- **Delay** \- In the case when the ‘load’ is after-delay, then content will be loaded after the number of milliseconds as specified on this property.
- **Class -** to use for the segment.

name is a unique identifier for the Segmented Control. Special characters and spaces are not allowed in widget name.

Segmented Content

action allows one to add multiple contents to the Segment Control.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

height of your widget can be specified in px or % (i.e 50px, 75%).

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

**Content** SubWidget of Segmented Control, to hold content.

bindable property defines the text that the end user sees.

name is a unique identifier for the segment content. Special characters and spaces are not allowed in widget name.

width of the widget can be specified in px or % (i.e 50px, 75%).

height of the widget can be specified in px or % (i.e 50px, 75%).

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

property defines the load behavior of the container can be:

- \-select - load the content after selection of the content or
- \-delay - load content after a time delay.

Delay

in milliseconds, after which the container has to be loaded. This property is used only when the load mode is set to 'after-delay'.

Class

bindable property defines the class of the icon that is applied to the button.

Align

property specifies how the elements should be aligned horizontally - left, center or right.

#### segmented control:

- **before segment change** -  The event Listener to call before changing to an another segment. Three parameters are passed:
    1. scope of the widget,
    2. selected segment index and
    3. selected index
- **segment change** - The event Listener to call after changing to a segment. Three parameters are passed:
    1. scope of the widget,
    2. selected segment index and
    3. selected index

#### each segment:

- **ready** -  The event Listener to call when the content is loaded for the segment. Two parameters are passed:
    1. object and
    2. scope of the widget.

[10\. Mobile & Device Widgets](/learn/app-development/widgets/widget-library/#mobile)

- [10.1 Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
- [10.2 Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
- [10.3 Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
- [10.4 Camera](/learn/app-development/widgets/mobile-widgets/camera/)
