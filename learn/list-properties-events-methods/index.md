---
title: "List - Properties, Events & Methods"
id: ""
---

# Properties

**Event**

**Description**

Title

Set the title for the List. It is bindable.

Sub Heading

This bindable property defines the subheading or title for the list.

Name

The name is a unique identifier for the list.

**Accessibility**

Tab Index

The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

**Layout**

Width

The width of list can be specified in em, pt, px or % (i.e 50px, 75%).

Height

The height of list can be specified in em, pt, px or % (i.e 50px, 75%).

**Dataset**

Value

Set this bindable property to a variable to populate the list of values to display.

Group by

This property allows for grouping the list of rows in the variable bound to a dataset by selecting one of the field names from the drop-down list.

Order by

This allows for multiple selection for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc.

**Behavior**

Enable Reorder

This property will allow users to reorder the list items at runtime.

Show

Showing determines whether or not a component is visible. It is a bindable property.

Load on Demand (visible only when show property is bound to a variable)

When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Disable Selection

If this property is set to true (checked), selection of List item won't be allowed at run-time.

Selection Limit

This bindable property will allow users to select only a limited number of items.

Multiselect

On checking this property users can select multiple items.

Select first item

If this bindable property is checked, the first item of the livelist will be selected automatically when the livelist is displayed.

**Pagination**

Type

Select the pagination type for the list. This property determines how records are fetched. It can be: Basic, Pager, Classic, Infinite Scroll, Horizontal Slider or None

Show Total Records

This property controls whether the total record count is displayed in the pagination or not.

Align

This property specifies how the paginator should be aligned horizontally: Left, center or right.

**Graphics**

Loading Icon

This property can assign an icon that is shown while loading list items.

Title Icon Class

This property defines the class of the icon that is applied to the list.

**Format**

Horizontal align

This property specifies how the list should be aligned horizontally: left, center or right.

**Message**

No data message

This message will be displayed when there is no data to display. It is bindable.

Data loading message

This message will be displayed when waiting for data to load. It is bindable.

# Events

**Event**

**Description**

**Mouse Events**

On click

This event handler is called whenever the click event is triggered on the list.

On double click

This event handler is called whenever the double click event is triggered on the list.

On mouse enter

This event handler is called whenever the mouse enters the list.

On mouse leave

This event handler is called whenever the mouse leaves the list.

**Touch Events**

On tap

This event handler is called whenever the tap event is triggered on the list.

On double tap

This event handler is called whenever the double tap event is triggered on the list.

**Keyboard Events**

Enter Key Press

When the user hits ENTER/Return while the focus is on the list, execute the specified event handler.

**Callback Events**

On before data render

This event handler is called when the data is set using the pagination.

On pagination change

This event handler is called when the page is changed through navigation controls.

On reorder

This event is triggered when the item in a list is reordered. For this, the Enable Reorder property has to be set.

On selection limit exceed

This event is triggered when selected items cross the value set for the Selection Limit property.

# Methods

The list has few methods exposed on widget scope which can be accessed via JavaScript. For the following script samples, we are considering the hrdb Employee table. EmployeeList is bound to the Live Variable corresponding to the Employee table.

**Purpose**

**Usage**

Clear list data

Page.Widgets.EmployeeList.clear(); //Clear the list items.

To select a list item

Page.Widgets.EmployeeList.selectItem(0); 
//Selects first item , the parameter can be index or object.

To deselect item

Page.Widgets.EmployeeList.deselectItem(0); 
//Deselects first item, the parameter can be index or object.

To change navigation

Page.Widgets.EmployeeList.navigation = ‘Basic’; 
//Changes navigation type to Basic.

To access widgets within the List

Page.Widgets.EmployeeList.getWidgets(widgetName, index);
//returns the widget you are trying to access
//widgetName: name of the widget which we are trying to access \[Required\]
//index: zero based index of the list item. \[Optional\]

The widget returned can be manipulated as any other widget using $element property

 Page.Widgets.button1.$element.removeClass('btn-primary');
//to remove the button primary class

Note: Returns an array of widgets with the given name inside the list. When the index is provided, only the widget with the given name at the given index will be returned. When the index is not provided, all the widgets with the given name inside the livelist will be returned.

Modify selected item

Page.Widgets.EmployeeList.selecteditem = 0; 
//selects first item in the list.

To change value of currentItem

item.username = ‘Eric’; //Sets username field value to ‘Eric’;

Note: currentItem and currentItemWidgets can’t be accessed through script. But those were given as parameters for events of widgets inside list widget template. currentItem is given as item in the arguments.

To change caption of username widget for currentItem

currentItemWidgets.Name.caption = ‘Eric’; 
//Sets caption of Name widget to Eric.

Note: currentItem and currentItemWidgets can’t be accessed through the script. But those were given as parameters for events of widgets inside list widget template. currentItem is given as item in the arguments.

To preserve the reordered list

Page.livelist1Reorder = function ($event, $data) { 
      //$data is the newly reordered array of items.
};

Note: Enable reorder allows the user to change the order of the items in the List in runtime, but the order after reordering do not persist after refresh. _onReorder_ callback event is triggered when the order of the items in the List is changed. In the script, $data parameter has the complete order after each reorder. This data can be used to make the reorder permanent.

To interact with widgets of selected item

Page.Widgets.EmployeeList.selectedItemWidgets\[0\].Name.caption = ‘Eric’; 
//Changes caption for Name widget of selected item to ‘Eric’.

**getIndex**: To find the index of a list item

**Syntax**

Page.Widgets.MyList.getIndex(listItemObject: ListItem);

**Parameter: **listItemObject: list item object against which the index is required. **Return: **Index of the passed list item object. **Example: **

let i = Page.Widgets.list1.getIndex(Page.Widgets.list1.selecteditem);

**getItem**: To find the list item object for an index

**Syntax**

Page.Widgets.MyList.getItem(index: number);

**Parameter:** index: index (zero based) of the list item against which the corresponding list item object is required. **Return:** list item object. **Example: **

let item = Page.Widgets.list1.getItem(1); //returns list item against 2nd index (0 based)

**getWidget:**

Returns a list of all widgets against a passed widget name.

While designing a list in a WM app, when a widget (with name my\_widget) is dropped in the list template, multiple instances of the same widget are created for each list item. In order to access all the instances of a widget, the getWidgets method can be used. **Syntax**

Page.Widgets.Mylist.getWidgets(name: string, \[index: number\])

**Parameter:** Name (string): name of the widget in the list template. Index (number)  \[optional\]: Index of the list item for which the widget instance is required. **Return:** Returns a list of all widget instances with the passed name. If index is passed, the list contains only one widget instance against the passed index. **Example:**

let widgetsList = Page.Widgets.MyList.getWidgets(“my\_text\_widget”);
// If there are 10 list items, the method call will return an array of 10 
instances of widget “my\_text\_widget” for each list item.
let widget = Page.Widgets.MyList.getWidgets(“my\_text\_widget”, 4);
// returns an array with one widget instance for 5th list item (zero based index)

< Behavior Settings

Use Cases >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
    - [i. Data Source](/learn/app-development/widgets/datalive/list/list-data-source/)
    - [ii. Templates](/learn/app-development/widgets/datalive/list/list-templates/)
        - [○ Action List](/learn/app-development/widgets/datalive/list/list-templates/#action-list)
        - [○ Contact List](/learn/app-development/widgets/datalive/list/list-templates/#contact-list)
        - [○ Email List](/learn/app-development/widgets/datalive/list/list-templates/#email-list)
        - [○ Media List](/learn/app-development/widgets/datalive/list/list-templates/#media-list)
    - [iii. List Configuration](/learn/app-development/widgets/datalive/list/configuration/)
        - [○ Items per row](/learn/app-development/widgets/datalive/list/configuration/#items-per-row)
        - [○ Grouping & Ordering](/learn/app-development/widgets/datalive/list/configuration/#grouping-ordering)
        - [○ Pagination](/learn/app-development/widgets/datalive/list/configuration/#pagin)
        - [○ Message](/learn/app-development/widgets/datalive/list/configuration/#message)
    - [iv. List Behavior Settings](/learn/app-development/widgets/datalive/list/behavior-settings/)
        - [○ Selection Limit](/learn/app-development/widgets/datalive/list/behavior-settings/#selection-limit)
        - [○ Multiselect](/learn/app-development/widgets/datalive/list/behavior-settings/#multiselect)
        - [○ Item Reordering](/learn/app-development/widgets/datalive/list/behavior-settings/#item-reordering)
    - [v. Properties, Events & Methods](/learn/app-development/widgets/datalive/list/list-properties-events-methods/)
        - [○ Properties](#properties)
        - [○ Events](#events)
        - [○ Methods](#methods)
    - [vi. Use Case](/learn/app-development/widgets/datalive/list/list-use-cases)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
