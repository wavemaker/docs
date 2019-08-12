---
title: "Message"
date: "2016-09-13"
---

 widget helps to display a custom message on the page. Based on the message type - , , , , \- the message look and feel changes. For instance, setting the message type to shows an error icon alongside the message text, which is displayed in red.

<iframe width="100%" height="350" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Messages"></iframe>

caption is the text that the end user sees on your label.

name is a unique identifier for Message widget.Special characters and spaces are not allowed in widget name.

property specifies the type of the variable:

- ,
- ,
- ,
- or

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Close

the close option.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

 widget has few methods exposed on widget scope which can be accessed via JavaScript. See below for usage example

- display message:
    
    1.showMessage(); //Displays message
    
- hide message:
    
    1.hideMessage(); //to hide message
    

**Events**

close

event handler is called a close event is triggered.

[4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)

- [4.1 Anchor](/learn/app-development/widgets/basic/anchor/)
- [4.2 Audio](/learn/app-development/widgets/media-widgets/)
- [4.3 HTML](/learn/app-development/widgets/basic/html/)
- [4.4 Icon](/learn/app-development/widgets/basic/icon/)
- [4.5 Iframe](/learn/app-development/widgets/basic/iframe/)
- [4.6 Label](/learn/app-development/widgets/basic/label/)
- [4.7 Message](/learn/app-development/widgets/basic/message/)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
- [4.8 Picture](/learn/app-development/widgets/media-widgets/)
- [4.9 Progress Bar](/learn/app-development/widgets/basic/progress-bar/)
- [4.10 Richtext Editor](/learn/app-development/widgets/basic/richtext-editor/)
- [4.11 Search](/learn/app-development/widgets/basic/search/)
- [4.12 Spinner](/learn/app-development/widgets/basic/spinner/)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
