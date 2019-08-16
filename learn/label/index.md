---
title: "Label"
id: ""
---

represents a caption in a user interface. The label displays text on the page. Common use cases include

- page header
- form field label
- paragraph of text
- link

[![](../assets/label_struct.jpg)](../assets/label_struct.jpg)

The following features for Label can be set in the property from the tab of the Panel.

###  Types

<iframe width="100%" height="400" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/LabelStyles">Types</iframe>

###  Styles

<iframe width="100%" height="700" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Labels"></iframe>

caption is the text that the end user sees on your label. It can be bound to a variable or another widget.

name is a unique identifier for label widget.

can enter any text for this property and it will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. It can be bound to a variable or another widget.

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

required editor in wm.LiveForm may refuse to save without a required field.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

align

property specifies how the elements should be aligned horizontally.

**Events**

click

event handler is called whenever the click event is triggered on a widget.

double click

event handler is called whenever the double click event is triggered on a widget.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

tap

event handler is called whenever the tap event is triggered on a widget.

double tap

event handler is called whenever the double tap event is triggered on a widget.

[4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)

- [4.1 Anchor](/learn/app-development/widgets/basic/anchor/)
- [4.2 Audio](/learn/app-development/widgets/media-widgets/)
- [4.3 HTML](/learn/app-development/widgets/basic/html/)
- [4.4 Icon](/learn/app-development/widgets/basic/icon/)
- [4.5 Iframe](/learn/app-development/widgets/basic/iframe/)
- [4.6 Label](/learn/app-development/widgets/basic/label/)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
- [4.7 Message](/learn/app-development/widgets/basic/message/)
- [4.8 Picture](/learn/app-development/widgets/media-widgets/)
- [4.9 Progress Bar](/learn/app-development/widgets/basic/progress-bar/)
- [4.10 Richtext Editor](/learn/app-development/widgets/basic/richtext-editor/)
- [4.11 Search](/learn/app-development/widgets/basic/search/)
- [4.12 Spinner](/learn/app-development/widgets/basic/spinner/)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
