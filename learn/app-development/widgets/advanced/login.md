---
title: "Login"
id: "login"
---

**Login** can be used to display a pre-built Login section with a sign in button, username, and password fields. It also provides the option to remember the password.

# Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier Login Form. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| **Message** |
| Message on error | This message will be displayed, if there is an error during the login operation. |

# Events

| Event | Description |
| --- | --- |
| **Callback Events** |
| On submit | This event handler is called whenever a submit event is triggered. |
| On before render | This event handler is called before rendering the form fields. |
| On success | This event handler is called whenever a success event is triggered. |
| On error | This event handler is called whenever an error event is triggered. |


