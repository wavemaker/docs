---
title: "Nav Overview"
id: "nav"
---
---

The **Nav** element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

**WaveMaker Nav** widget is used in the implementation of the default _leftnav_ and _rightnav_ when the [page layout](/learn/app-development/ui-design/page-concepts/page-layouts/) is chosen to include the same. Within an app, it can be used in two ways. 

## Binding Dataset

Bind dataset for the nav elements using the _Value_ property and setting the _Action Items_ by mapping the properties from the value dataset to the action properties such as label, icon, link, badge value, sub actions.

## Add Widgets
Provides widget to be added to the nav panels such as Anchor, Menu, Popover, Button. Depending upon the widgets added to the nav various properties can be set:

1. _Anchor_: can have _hyperlink_ to specify the destination link, _target_ where the linked document should be opened
2. _Menu_: can specify the _layout_, _position_ and _value_-_action_ combination. [Click here for more on menu usage](/learn/app-development/widgets/navigation/dropdown-menu/)
3. _Popover_: can set the _content source_ and _content_ for further action. [Click here for Popover usage](/learn/app-development/widgets/navigation/popover/).
4. _Button_: _on click event_ can be set for page navigation

## Nav Types & Layouts

From the Properties panel,  you can set the Nav Types and Layout 

<iframe width="100%" height="600" style={{backgroundColor:'snow'}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Nav">Nav Types</iframe>

## Properties

Action IconClass for the icon. Choose from the options available based upon the structure of the Dataset Value.

| **Property**                                                            | **Description**                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                                                                    | The name is a unique identifier for Nav widget.                                                                                                                                                                                                                                                                                                                                                                     |
| Type                                                                    | Defines the display style, choose between _navbar_, _pills (default)_ or _tabs_.                                                                                                                                                                                                                                                                                                                                    |
| Add Widget                                                              | This action button allows you to add widgets within the Nav. The available options are Anchor, Menu, Popover, or Button.                                                                                                                                                                                                                                                                                            |
| **Layout**                                                              |
| Width                                                                   | The width of your widget can be specified in px or % (i.e 50px, 75%).                                                                                                                                                                                                                                                                                                                                               |
| Height                                                                  | The height of your widget can be specified in px or % (i.e 50px, 75%).                                                                                                                                                                                                                                                                                                                                              |
| Layout                                                                  | This property controls how contained widgets are displayed within this widget container. It can be stacked or justified                                                                                                                                                                                                                                                                                             |
| **Dataset**                                                             |
| Value                                                                   | Set this property to a variable to populate the list of values to display. It can be bound to any Variable                                                                                                                                                                                                                                                                                                          |
| Order by                                                                | This allows for multiple selections for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc. The fields are auto-populated based upon the structure of Dataset Value                                                                                                                                                                                       |
| **Actions**                                                             |
| Action Label                                                            | Label for menu items. Choose from the options available based upon the structure of the Dataset Value.                                                                                                                                                                                                                                                                                                              |
| Action Icon                                                             | Class for the icon for menu items. Example- 'fa fa-ban' or 'glyphicon glyphicon-cloud'                                                                                                                                                                                                                                                                                                                              |
| Action Link                                                             | Link for the anchor widget. Choose from the options available based upon the structure of the Dataset Value.                                                                                                                                                                                                                                                                                                        |
| Action Task                                                             | Task for nav items. This is the action that will be triggered when the user clicks on the Nav Item. It can be a script like: Variables.v1.invoke() Execution order on click of Node:    1. If provided _onSelect_ will be executed first.   2. If provided _Action_ will be executed next.   3. If provided _Action link_ will be executed last.                                                                    |
| User Role                                                               | Role for menu items generated dynamically. You can assign a property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden.                                              |
| Item Badge                                                              | Badge value to be displayed. Choose from the options available based upon the structure of the Dataset Value.                                                                                                                                                                                                                                                                                                       |
| Sub Actions                                                             | When a menu widget is required the sub items can be mentioned in the children. Choose from the options available based upon the structure of the Dataset Value.                                                                                                                                                                                                                                                     |
| **Behavior**                                                            |
| Show                                                                    | Showing determines whether or not a component is visible. It is a bindable property.                                                                                                                                                                                                                                                                                                                                |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Auto Close                                                              | This property defines the behavior of menu closing, it can be:    - outsideClick - close the menu when clicked outside of the menu,   - always - when a menu item is selected or on click outside menu, or   - disabled - do not close once opened.                                                                                                                                                                 |
| **Format**                                                              |
| Horizontal Align                                                        | Set text alignment horizontally.                                                                                                                                                                                                                                                                                                                                                                                    |

## Event

Each _anchor_ widget events are available for adding functionality to this layout. For more on Anchor widget see [here](/learn/app-development/widgets/basic/anchor/ "Basic Widgets").

## Use Cases

[Using Navigation](/learn/app-development/widgets/navigation/nav-basic-usage/)  
[Working with Nav Bar](/learn/app-development/widgets/navigation/nav-bar)  
[Creating a Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu-use-cases)  
[Dynamic Menu based on the User Role](/learn/how-tos/dynamic-menu-based-user-role)  
