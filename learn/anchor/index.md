---
title: "Anchor"
id: "anchor"
---

 widget refers to the visible, clickable words used to link one web page to another.

inside another widget like nav, the anchor widget will come with some defaults like file icon and with default styling to have a border and background color.

following features are available for anchor widget:

- \- Sets the Name for the anchor widget.
- Value - Indicates the small meaning information.
- \- contains a text representing advisory information related to the element it belongs to.
- **Key**: The shortcut key property specifies a shortcut key to click the link. The way of accessing the shortcut key is varying in different browsers:
    
    Key Trigger
    
    Explorer
    
    \[Alt\] +shortcut key
    
    \[Alt\] + shortcut key (_/Linux_)
    
    \[Control\] \[Alt\] + shortcut key ()
    
    \[Alt\] \[Shift\] + shortcut key (_/Linux_)
    
    \[Control\] \[Alt\] + shortcut key ()
    
- \- Indicates the destination link.
- \- The target property specifies where to open the linked document:
    - _\_blank_: Opens the linked document in a new window or tab
    - _\_self_: Opens the linked document in the same frame as it was clicked (this is default)
    -  _\_parent_: Opens the linked document in the parent frame
    - _\_top_: Opens the linked document in the full body of the window
- \- Aligns the anchor widget with an icon properties

### Class

From the Style tab of Properties panel,  you can set the Anchor style. You can also use the Conditional Class property to set the class based upon a condition. See here for [to](/learn/how-tos/use-conditional-class-property/) 

<iframe width="100%" height="300" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Anchors">Classes</iframe>

caption is the text that the end user sees on your anchor. It can be bound to a variable or another widget.

name is a unique identifier for Anchor widget. Special characters and spaces are not allowed in widget name.

Value

to be displayed in the badge span for the anchor.

text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [here for details](#shortcut))

width of your widget can be specified in _, pt, px or %_ (i.e 50px, 75%).

height of your widget can be specified in _, pt, px or %_ (i.e 50px, 75%).

web URL you want to redirect to on clicking the anchor.

behavior on click of the link: \_blank: Opens the linked document in a new window or tab \_self: Opens the linked document in the same frame as it was clicked (this is default) \_parent: Opens the linked document in the parent frame \_top: Opens the linked document in the full body of the window.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

URL

this if you want the provided URL to be encoded at the run time. Enabling this property will encode the special characters in the URL and enable rendering of the page which otherwise might fail. By default, it is set to false.

Class

property defines the class of the icon that is applied to the anchor.

Url

optional property allows you to add an icon to the anchor, it can be an URL of the image

Width

property; but you will need this if you are using the anchor's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent.

Height

property; but you will need this if you are using the anchor's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent.

Margin

property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text.

Position

property; Property to set the position of icon in the widget - can be left, top or right

Align

property specifies how the elements should be aligned horizontally - left, center or right.

Focus

event handler is called each time your element is focused.

Blur

event handler is called each time your focus leaves your element.

**Events**

Click

event handler is called whenever the click event is triggered on a widget.

Double Click

event handler is called whenever the double click event is triggered on a widget.

Mouse Enter

event handler is called whenever the mouse enters the widget.

Mouse Leave

event handler is called whenever the mouse leaves the widget.

**Events**

Tap

event handler is called whenever the widget is tapped.

Double Tap

event handler is called whenever the widget is double tapped.

[4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)

- [4.1 Anchor](/learn/app-development/widgets/basic/anchor/)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
- [4.2 Audio](/learn/app-development/widgets/media-widgets/)
- [4.3 HTML](/learn/app-development/widgets/basic/html/)
- [4.4 Icon](/learn/app-development/widgets/basic/icon/)
- [4.5 Iframe](/learn/app-development/widgets/basic/iframe/)
- [4.6 Label](/learn/app-development/widgets/basic/label/)
- [4.7 Message](/learn/app-development/widgets/basic/message/)
- [4.8 Picture](/learn/app-development/widgets/media-widgets/)
- [4.9 Progress Bar](/learn/app-development/widgets/basic/progress-bar/)
- [4.10 Richtext Editor](/learn/app-development/widgets/basic/richtext-editor/)
- [4.11 Search](/learn/app-development/widgets/basic/search/)
- [4.12 Spinner](/learn/app-development/widgets/basic/spinner/)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
