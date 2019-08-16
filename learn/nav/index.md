---
title: "Nav"
id: ""
---

element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

**Nav** widget is used in the implementation of the default and when the [layout](/learn/app-development/ui-design/page-concepts/page-layouts/) is chosen to include the same. Within an app, it can be used in two ways:

1. the dataset for the nav elements using the  property and setting the  _Items_ by mapping the properties from the value dataset to the action properties such as label, icon, link, badge value, sub actions.
2. _Widgets_: Provides widget to be added to the nav panels such as Anchor, Menu, Popover, Button. Depending upon the widgets added to the nav various properties can be set:
    1. : can have to specify the destination link, where the linked document should be opened
    2. : can specify the , and \- combination. [here for more on menu usage](/learn/app-development/widgets/dropdown-menu/)
    3. : can set the _source_ and for further action. [here for Popover usage](/learn/app-development/widgets/navigation/popover/)
    4. : _click event_ can be set for page navigation

### Types & Layouts

From the Properties panel,  you can set the Nav Types and Layout 

<iframe width="100%" height="600" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Nav">Types</iframe>

Action IconClass for the icon. Choose from the options available based upon the structure of the Dataset Value.

name is a unique identifier for Nav widget.

the display style, choose between ,  _(default)_ or

Widget

action button allows you to add widgets within the Nav. The available options are Anchor, Menu, Popover, or Button.

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

property controls how contained widgets are displayed within this widget container. It can be stacked or justified

this property to a variable to populate the list of values to display. It can be bound to any Variable

by

allows for multiple selections for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc. The fields are auto-populated based upon the structure of Dataset Value

Label

for menu items. Choose from the options available based upon the structure of the Dataset Value.

Icon

for the icon for menu items. Example- 'fa fa-ban' or 'glyphicon glyphicon-cloud'

Link

for the anchor widget. Choose from the options available based upon the structure of the Dataset Value.

Task

for nav items. This is the action that will be triggered when the user clicks on the Nav Item. It can be a script like: 1.invoke() Execution order on click of Node:

1. provided will be executed first.
2. provided will be executed next.
3. provided _ link_ will be executed last.

Role

for menu items generated dynamically. You can assign a property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden.

Badge

value to be displayed. Choose from the options available based upon the structure of the Dataset Value.

Actions

a menu widget is required the sub items can be mentioned in the children. Choose from the options available based upon the structure of the Dataset Value.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Close

property defines the behavior of menu closing, it can be:

- \- close the menu when clicked outside of the menu,
- \- when a menu item is selected or on click outside menu, or
- \- do not close once opened.

Align

text alignment horizontally.

Each widget events are available for adding functionality to this layout. For more on Anchor widget see[](/learn/app-development/widgets/basic/anchor/ "Basic Widgets")

# Cases

- [Usage](/learn/app-development/widgets/navigation/nav-basic-usage/)
- [to build a multilevel navigation](/learn/app-development/widgets/navigation/nav-basic-usage/#multilevel)

[6\. Navigation Widgets](/learn/app-development/widgets/widget-library/#nav-widgets)

- [6.1 Breadcrumb](/learn/app-development/widgets/navigation/breadcrumb/)
- [6.2 Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu/)
- [6.3 Nav](/learn/app-development/widgets/navigation/nav/)
    - [Properties](#properties)
    - [Use Cases](#use-cases)
- [6.4 Nav Bar](/learn/app-development/widgets/navigation/nav-bar/)
- [6.5 Popover](/learn/app-development/widgets/navigation/popover/)
