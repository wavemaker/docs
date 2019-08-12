---
title: "Popover"
date: "2016-06-28"
---

**Widget** can be used to display a list of items on click event. An example of this would be the Notifications displayed on the Facebook page.

are an interactive way to provide a secondary form of navigation in many different locations outside the dedicated areas. This UI pattern has the advantage of providing a lightweight and straightforward way of viewing additional information or taking a particular action, but they do so without pulling the user out of their current activity.

“pop-up” when the user performs a certain action or gets to a specific place in the app, showing the relevant information/controls associated with that particular action/place in the UI. The original content or place in the app is still visible in the background, but the popover gives you the option of tweaking certain things or learning about what comes next. The popover gets the user’s attention and provides important notifications where needed. At the same time, however, users can easily dismiss the popover and return back to whatever they were originally doing by simply tapping or swiping the screen.

caption is the text that the end user sees on Popover.

Title is the text that the end user sees on Popover.

name is a unique identifier for Popover.

Value

to be displayed in the badge span for Popover

text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

Index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Key

shortcut key property specifies a shortcut key to activate/focus an element. The way of accessing the shortcut key is varying in different browsers

- Explorer - \[Alt\] + shortcutkey,
- \- \[Alt\] + shortcutkey (Windows/Linux) \[Control\] \[Alt\] + shortcutkey (MAC),
- \- \[Alt\] \[Shift\] + shortcutkey (Windows/Linux) \[Control\] \[Alt\] + shortcutkey (MAC),
- \- \[Alt\] + shortcutkey (Windows) \[Control\] \[Alt\] + shortcutkey (MAC)

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

Width

property defines the width of the popover.

Height

property defines the height of the popover.

Source

be inline or partial.

case the source is selected as

- enter the HTML code for the same.
- source, choose from the available list of partial pages.

Param

case the above set Partial page requires parameters.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Placement

property defines the placement of the popover. Choose from

- ,
- ,
- or

Arrow

property defines the arrow for the popover.

property defines which action should trigger the Popover to open or close. You can choose from the following options:

- \- Popover opens on click and closes on click anywhere on the document.
- \- Popover opens on hover and closes on hover out.
- _and Hover_ (Default)- Popover opens and closes on both click or hover.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

Class

property defines the class of the icon that is applied to the button.

Url

optional property allows you to add an icon to the left side of your button. You can give URL of the image.

Width

property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent.

Height

property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent.

Margin

property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text.

position

property; Property to set the position of the icon in the widget. Can be set to left, top or right.

Align

property specifies how the elements should be aligned horizontally.

[6\. Navigation Widgets](/learn/app-development/widgets/widget-library/#nav-widgets)

- [6.1 Breadcrumb](/learn/app-development/widgets/navigation/breadcrumb/)
- [6.2 Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu/)
- [6.3 Nav](/learn/app-development/widgets/navigation/nav/)
- [6.4 Nav Bar](/learn/app-development/widgets/navigation/nav-bar/)
- [6.5 Popover](/learn/app-development/widgets/navigation/popover/)
    - [Properties](#properties)
    - [Use Cases](/learn/app-development/widgets/navigation/popover-basic-usage/)
