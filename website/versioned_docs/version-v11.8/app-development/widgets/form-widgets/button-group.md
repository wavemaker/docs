---
title: "Button Group"
id: "button-group"
---
---

**Button Group** widget is a container that shows a set of buttons that can be managed and styled as a group.

The buttons inside the group can be:

- aligned horizontally or
- vertically.

## Using Button Group

Using Button Group, Buttons can exist together as a group. They are great when you need to display a group of actions in a bar. These build off the button styles and work perfectly with the grid. Button group can be used in cases where you have three different behavior upon a single entity. Example for video/audio we have a play, pause, stop operations. In such cases, the button group provides visual groupings of buttons.

[![](/learn/assets/buttongroup_graphic.jpg)](/learn/assets/buttongroup_graphic.jpg)

## Properties

Refer to  [Button widget document](/learn/app-development/widgets/form-widgets/button/) for individual Button features and properties.

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for the Button Group. Special characters and spaces are not allowed in widget name. |
| Add Button | You can choose to add more buttons to the given default three buttons using this control. |
| **Layout** |
| Width | The width of your widget can be specified in _em, pt, px or %_ (i.e 50px, 75%). |
| Vertical | This property determines if the tabs should be vertical. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| **Format** |
| Horizontal Align | This property specifies how the elements should be aligned horizontally. |

## See More

[Form Widgets](/learn/app-development/widgets/widget-library/#form)  
[Button](/learn/app-development/widgets/form-widgets/button/)