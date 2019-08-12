---
title: "Cards - Properties, Events & Methods"
date: "2016-11-08"
---

Card Widget is contained within a List and as such, you can set the [Properties](/learn/app-development/widgets/datalive/list/list-properties-events-methods/#properties) too.

the title for the List. It is bindable.

Heading

bindable property defines the subheading or title for the list.

name is a unique identifier for the list.

property allows you to set the height of the picture, by default set to 200px

property specifies the source for the picture, it is bindable.

bindable property specifies the title on the picture

width of list can be specified in em, pt, px or % (i.e 50px, 75%).

height of list can be specified in em, pt, px or % (i.e 50px, 75%).

Actions

property sets the actions for the widget. To set the data and events see [widget](/learn/app-development/widgets/navigation/dropdown-menu/)

Label

for menu items. It can be bound to a variable or set to a field from the Dataset Value variable.

Icon

for menu items. It can be bound to a variable or set to a field from the Dataset Value variable.

Link

for the items. It can be bound to a variable or set to a field from the Dataset Value variable. **:** item link has priority over actions i.e. when the link is selected the onSelect actions won't get executed.

Task

for menu items generated dynamically. This is the action that will be triggered when the user clicks on the Menu Item.

Role

for menu items generated dynamically. You can assign a property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden.

Actions

a menu widget is required the sub-items can be mentioned in the children. It can be bound to a variable or set to a field from the Dataset Value variable.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

Icon class

bindable property defines the class of the icon that is applied to the button.

Url

can give Url of the image.

**Events**

click

event handler is called whenever the click event is triggered on the list.

double click

event handler is called whenever the double click event is triggered on the list.

mouse enter

event handler is called whenever the mouse enters the list.

mouse leave

event handler is called whenever the mouse leaves the list.

**Events**

tap

event handler is called whenever the tap event is triggered on the list.

double tap

event handler is called whenever the double tap event is triggered on the list.

**Events**

Key Press

the user hits ENTER/Return while the focus is on the list, execute the specified event handler.

**Events**

before data render

event handler is called when the data is set using the pagination.

pagination change

event handler is called when the page is changed through navigation controls.

reorder

event is triggered when the item in a list is reordered. For this, the Enable Reorder property has to be set.

selection limit exceed

event is triggered when selected items cross the value set for the Selection Limit property.

The card has few methods exposed on widget scope which can be accessed via JavaScript. For the following script samples, we are considering the hrdb Employee table. EmployeeList is bound to the Live Variable corresponding to the Employee table.

- **list data**:
    
    (); //Clear the list items.
    
- **select a list item**:
    
    (0); 
    //Selects first item , the parameter can be index or object.
    
- **deselect item**:
    
    (0); 
    //Deselects first item, the parameter can be index or object.
    
- **change navigation**:
    
     = ‘Basic’; 
    //Changes navigation type to Basic.
    
- **interact with widgets of selected item**:
    
    \[0\].Name.caption = ‘Eric’; 
    //Changes caption for Name widget of selected item to ‘Eric’.
    
- **selected item**:
    
     = 0; 
    //selects first item in the list.
    
- **change the value of currentItem**: Note: currentItem and currentItemWidgets can’t be accessed through the script. But those were given as parameters for events of widgets inside list widget template. currentItem is given as item in the arguments.
    
     = ‘Eric’; //Sets username field value to ‘Eric’;
    
- **change the caption of username widget for currentItem**: Note: currentItem and currentItemWidgets can’t be accessed through the script. But those were given as parameters for events of widgets inside list widget template. currentItem is given as item in the arguments.
    
     = ‘Eric’; 
    //Sets caption of Name widget to Eric.
    
- **preserve the reordered list**: Enable reorder allows the user to change the order of the items in the List in runtime, but the order after reordering do not persist after refresh. callback event is triggered when the order of the items in the List is changed. In the script, $data parameter has the complete order after each reorder. This data can be used to make the reorder permanent.
    
    1Reorder = function ($event, $data, $changedItem) { 
          //$data is the newly reordered array of items.
    };
    

< Behavior Settings

Cases >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
    - [Data Source](/learn/app-development/widgets/datalive/cards/cards-data-source/)
    - [Templates](/learn/app-development/widgets/datalive/cards/cards-templates/)
        - [Profile Cards](/learn/app-development/widgets/datalive/cards/cards-templates/#profile)
        - [Feed Cards](/learn/app-development/widgets/datalive/cards/cards-templates/#feed)
        - [Product Cards](/learn/app-development/widgets/datalive/cards/cards-templates/#product)
    - [Card Configuration](/learn/app-development/widgets/datalive/cards/card-configuration/)
        - [Items per Row](/learn/app-development/widgets/datalive/cards/card-configuration/#items-per-row)
        - [Grouping & Ordering](/learn/app-development/widgets/datalive/cards/card-configuration/#grouping-ordering)
        - [Pagination](/learn/app-development/widgets/datalive/cards/card-configuration/#pagin)
        - [Message](/learn/app-development/widgets/datalive/cards/card-configuration/#message)
    - [Card Behavior Settings](/learn/app-development/widgets/datalive/cards/card-behavior-settings/)
        - [Selection Limit](/learn/app-development/widgets/datalive/cards/card-behavior-settings/#selection)
        - [Multiselect](/learn/app-development/widgets/datalive/cards/card-behavior-settings/#multiselect)
        - [Item Reorder](/learn/app-development/widgets/datalive/cards/card-behavior-settings/#item-reorder)
    - [Properties, Events & Methods](#)
        - [Properties](#properties)
        - [Events](#events)
        - [Methods](#methods)
    - [Use Cases](/learn/app-development/widgets/datalive/cards/card-use-cases/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
