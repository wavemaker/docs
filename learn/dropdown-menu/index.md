---
title: "Dropdown Menu"
date: "2016-06-28"
---

displays grouped navigation actions. The drop-down menu is typically used inside the navigation header to display a list of related links on a mouse hover or click on the trigger element.

Dropdown Menu can be used as:

1. **menus**, which initiate an action based on the option user selects. Each menu item consists of a discrete option or action that can affect the app, the view, or selected elements within a view.
2. **menus**, which take users to a new location. Note that menus should not be used as a primary method for navigation within an app.

**Dropdown Menu** widget allows one to display a label, an icon and a link to be opened on click event. The data source for the Menu can be a Model variable or from a database. The structure of the data source should contain fields which can be set:

- **label** - usually caption;
- **icon** - some graphic image;
- **link** - specifying the action to be performed and
- **action** for a nested menu structure.

The **Layout** - or and **Position** can be set as per the app requirements

[![](../assets/menu_run2.png)](../assets/menu_run2.png)

caption is the text that the end user sees on the Menu label.

name is a unique identifier for Menu.

text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. It can be bound to a variable.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [below for details](#shortcut))

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

Layout

layout arranges the menu items vertically. layout arranges the menu items horizontally.

Position

of the menu list items - inline, down-right, down-left, up-left, up-right.

this property to a variable to populate the list of values to display.

by

this property to order the Menu items.

Label

for menu items. It can be bound to a variable or set to a field from the Dataset Value variable.

Icon

for menu items. It can be bound to a variable or set to a field from the Dataset Value variable.

Link

for the items. It can be bound to a variable or set to a field from the Dataset Value variable. **:** item link has priority over actions i.e. when the link is selected the onSelect actions won't get executed.

Task

for menu items generated dynamically. This is the action that will be triggered when the user clicks on the Menu Item. It can be a script like: 1.show or 1.invoke() Execution order on click of Node:

1. provided will be executed first.
2. provided will be executed next.
3. provided _ link_ will be executed last.

Role

for menu items generated dynamically. You can assign the property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden.

Actions

a menu widget is required the sub-items can be mentioned in the children. It can be bound to a variable or set to a field from the Dataset Value variable.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Target

defines the app behavior on click of the Item Link. The options are:

- \_blank Opens the linked document in a new window or tab;
- \_self: Opens the linked document in the same frame as it was clicked (this is default);
- \_parent Opens the linked document in the parent frame;
- \_top: Opens the linked document in the full body of the window.

Close

property defines the behavior of menu closing, it can be:

- \- close the menu when clicked outside of the menu,
- \- when a menu item is selected or on click outside menu, or
- \- do not close once opened.

on to content

property controls the animation of the menu items. It can be set to _, fade, or scale_ Note: This feature works only in the run mode.

Class

bindable property defines the class of the icon that is applied to the button.

Align

property specifies how the elements should be aligned horizontally. It can be Left, Centered or Right

**key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

Trigger

Explorer

\[Alt\] + shortcut key

\[Alt\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcutkey ()

\[Alt\] \[Shift\] + shortcutkey (_/Linux_)

\[Control\] \[Alt\] + shortcutkey ()

**Events**

Select

event handler is called when the tab is selected.

[6\. Navigation Widgets](/learn/app-development/widgets/widget-library/#nav-widgets)

- [6.1 Breadcrumb](/learn/app-development/widgets/navigation/breadcrumb/)
- [6.2 Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu/)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/)
- [6.3 Nav](/learn/app-development/widgets/navigation/nav/)
- [6.4 Nav Bar](/learn/app-development/widgets/navigation/nav-bar/)
- [6.5 Popover](/learn/app-development/widgets/navigation/popover/)
