---
title: "Login"
date: "2016-09-13"
---

be used to display a pre-built Login section with a sign in button, username, and password fields. It also provides the option to remember the password.

name is a unique identifier Login Form.

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

on error

message will be displayed, if there is an error during the login operation.

**Events**

submit

event handler is called whenever a submit event is triggered.

before render

event handler is called before rendering the form fields.

success

event handler is called whenever a success event is triggered.

error

event handler is called whenever an error event is triggered.

[7\. Advanced Widgets](/learn/app-development/widgets/widget-library/#advanced)

- [7.1 Carousel](/learn/app-development/widgets/advanced/carousel/)
- [7.2 Login](#)
    - [Properties](#properties)
    - [Events](#events)
- [7.3 Marquee](/learn/app-development/widgets/advanced/marquee/)
