---
title: "Spinner"
id: ""
---

widget controls the user interaction while browser is performing some work in the background It gives a feedback if the page is processing or, frozen, or just not working. widget displays a loading icon with text.

can drop a spinner widget on the required page and set the spinner to false at  which is part of the Script of the current page by using the following code snippet: 1.show = false; If you would like to set the spinner till the variable loads, you can set the " _Variable_" property of the spinner to that particular variable. Then, the spinner would be shown until the variable gets loaded. You can track multiple variables by selecting the same.

caption is the text that the end user sees on your label.

name is a unique identifier for spinner widget.

property helps in specifying which type of icon is to be displayed for the spinner. The "Type" property has two options "icon" and "image". Based on the "Type" selected, the properties in the graphics section are changed. The animation property can be applied to both icons and images.

Variable

property allows you to bind to the service or live variable for which you want to show the loading dialog. You can select multiple variables to track.  If more than two variables are selected, then spinner would be shown till both variable call requests have been completed/resolved.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

property controls the animation of an element. The animation is based on the CSS classes.

Class

property defines the class of the icon that is applied to the spinner.

Size

property defines the size of the icon. Value has to be specified along with the units (em or px).

[4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)

- [4.1 Anchor](/learn/app-development/widgets/basic/anchor/)
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
    - [Properties](#properties)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
