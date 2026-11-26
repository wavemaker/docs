---
title: "Message"
id: "message"
---

**Message** widget helps to display a custom message on the page. Based on the message type - _error_, _warning_, _success_, _info_, _loading_- the message look and feel changes. For instance, setting the message type to _error_ shows an error icon alongside the message text, which is displayed in red.

## Features

<iframe width="100%" height="350" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Messages">Messages</iframe>

## Properties

| **Property** | **Description** |
| --- | --- |
| Caption | The caption is the text that the end user sees on your label. |
| Name | The name is a unique identifier for Message widget.Special characters and spaces are not allowed in widget name. |
| Type | This property specifies the type of the variable:   - error,   - info,   - loading,   - success or   - warning   |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Hide Close | Hides the close option. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |

## Methods

Message widget has few methods exposed on widget scope which can be accessed via JavaScript. See below for usage example

- to display message:
    
    Page.Widgets.message1.showMessage(); //Displays message
    
- to hide message:
    
    Page.Widgets.message1.hideMessage(); //to hide message
    

## Events

| **Event** | Description |
| --- | --- |
| **Callback Events** |
| On close | This event handler is called **whenever** a close event is triggered. |

