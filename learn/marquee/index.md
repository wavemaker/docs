---
title: "Marquee"
id: "marquee"
---

 widget is used to display the content in marquee styles, any widget can be dropped into it.

name is a unique identifier for Marquee.

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

Delay

the delay in the scroll of the Marquee.

Amount

scroll amount increases the speed of the scroll.

the direction of the scroll, choose from _, down, left or right_

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

[7\. Advanced Widgets](/learn/app-development/widgets/widget-library/#advanced)

- [7.1 Carousel](/learn/app-development/widgets/advanced/carousel/)
- [7.2 Login Form](/learn/app-development/widgets/advanced/login-form/)
- [7.3 Marquee](/learn/app-development/widgets/advanced/marquee/)
    - [Properties](#properties)
