---
title: "Container"
date: "2016-08-05"
---

**widget** is an empty box for flow content, a collection of more semantically marked-up content that may need to be grouped together with the class, lang and title attributes. It represents its children. The users can either place the content or include the partial pages.

are semantically correct for laying out content. Its most common use will likely be for stylistic purposes — i.e., wrapping some semantically marked-up content in a CSS-styled container.

can also use the Conditional Class property from the Style tab to set the class based upon a condition. See here for [to](/learn/how-tos/use-conditional-class-property/)

name is a unique identifier for the container widget.

width of your widget can be specified in px or % (i.e 50px, 75%).

width of your widget can be specified in px or % (i.e 50px, 75%).

bindable property, defines the content to be displayed within the container:

- Content - HTML content,
- Content - in the form of Partial Pages, choose from the list provided

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

event handler is called whenever the swipeup event is triggered.

swipe down

event handler is called whenever swipe down event is triggered.

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
    - [Properties](#properties)
    - [Events](#events)
- [2.3 Grid Layout](/learn/app-development/widgets/container/grid-layout/)
- [2.4 Panel](/learn/app-development/widgets/container/panel/)
- [2.5 Tabs](/learn/app-development/widgets/container/tabs/)
- [2.6 Tile](/learn/app-development/widgets/container/tile/)
- [2.7 Wizard](/learn/app-development/widgets/container/wizard/)
