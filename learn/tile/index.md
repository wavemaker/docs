---
title: "Tile"
date: "2016-08-05"
---

is a container for other widgets used to present a set of objects.  widget lets you to directly add an image, text box, video, or web code to user dashboard. _to the container_ but it comes with some default styling which makes it different from a container.  cannot create partials using tile.

Tiles can be used while creating Dashboard like UI where you need to show analytics data.

When to use Tile:

- other containers, its size is limited, and it is not recommended to place too many widgets and/or complex widgets.

![](https://www.wavemaker.com../assets/tile_design-1.png)

You can also use the Conditional Class property from the Style tab to set the class based upon a condition. See here for [to](/learn/how-tos/use-conditional-class-property/)

name is a unique identifier for tile.

width of your widget can be specified in px or % (i.e 50px, 75%).

width of your widget can be specified in px or % (i.e 50px, 75%).

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

Align

text alignment horizontally.

**Events**

click

event handler is called whenever the click event is triggered on a widget.

double click

event handler is called whenever the double click event is triggered on a widget.

mouse over

event fires when the mouse hovers over this widget.

mouse out

event fires when the mouse moves away from this widget.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

tap

event handler is called whenever the tap event is triggered on a widget.

double tap

event handler is called whenever the double tap event is triggered on a widget.

swipe up

event handler is called whenever a swipeup event is triggered.

swipe down

event handler is called whenever a swipe down event is triggered.

swipe left

event handler is called whenever a swipeleft event is triggered.

swipe right

event handler is called whenever a swiperight event is triggered.

pinch in

event handler is called whenever pinch event is triggered.

pinch out

event handler is called whenever pinch out event is triggered.

**Events**

enter key press

the user hits ENTER/Return while the focus is in this editor, execute the specified event handler.

[2\. Container Widgets](/learn/app-development/widgets/widget-library/#container)

- [2.1 Accordion](/learn/app-development/widgets/container/accordion/)
- [2.2 Container](/learn/app-development/widgets/container/container/)
- [2.3 Grid Layout](/learn/app-development/widgets/container/grid-layout/)
- [2.4 Panel](/learn/app-development/widgets/container/panel/)
- [2.5 Tabs](/learn/app-development/widgets/container/tabs/)
- [2.6 Tile](/learn/app-development/widgets/container/tile/)
    - [Properties](#properties)
    - [Events](#events)
- [2.7 Wizard](/learn/app-development/widgets/container/wizard/)
