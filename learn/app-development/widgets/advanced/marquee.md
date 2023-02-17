---
title: "Marquee"
id: "marquee"
---

**Marquee** widget is used to display the content in marquee styles, any widget can be dropped into it.

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for Marquee. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Scroll Delay | Sets the delay in the scroll of the Marquee. |
| Scroll Amount | Increasing scroll amount increases the speed of the scroll. |
| Direction | Changes the direction of the scroll, choose from _up, down, left or right_. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |


