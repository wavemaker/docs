---
title: "CheckboxSet"
id: "checkboxset"
---
---
CheckboxSet allows you to group a set of checkboxes under a common heading. You need to bind to a dataset to display a checkbox for each value.

[![](/learn/assets/checkboxset_struct.jpg)](/learn/assets/checkboxset_struct.jpg)

Using the Group By property you can group the items together under a heading. The Show Count property will show the number of items within a group.

[![](/learn/assets/checkboxset_group.png)](/learn/assets/checkboxset_group.png)

## Change the layout of CheckboxSet - Vertical or Horizontal

You can easily change the layout of the options inside the CheckboxSet, so that they are aligned vertifically, horizontally or grouped by a specific number.
**Items per row** determine the number of items that can be shown in each row. This can be specified independently for different target devices, from the _device_ tab of the _Properties panel_.

[![checkboxset layout](/learn/assets/checkboxset_horizontal.png)](/learn/assets/checkboxset_horizontal.png)

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for the button. Special characters and spaces are not allowed in widget name. |
| **Accessibility** |
| Tab Index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in _`em, pt, px`_ or _`% (_i.e _50px, 75%)`._ |
| Height | The height of your widget can be specified in _`em, pt, px`_ or _`% (_i.e _50px, 75%)`._ |
| Layout | This property controls how contained widgets are displayed within this widget container. |
| **Dataset** |
| Value | Set this property to a variable to populate the list of values to display. |
| Use Keys | Use the keys of the live variable object as checkbox set options. |
| Data field | This property sets the dataValue to be returned by a select editor when the list is populated using the dataSet property. |
| Display Field | This property sets the displayValue to show in the select editor when the list is populated using the dataSet property. |
| Display Expression | This is an advanced property that gives more control over what is displayed in the drop-down select list. A Display Expression uses a Javascript expression to format exactly what is shown. |
| Group by | This property allows for grouping the items in the variable bound to the checkboxset dataset by selecting one of the field names from the drop-down list. |
| Group as | This property allows for groups to be displayed under categories. |
| Order by | This allows for multiple selections for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc. |
| **Default Value** |
| Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| **Behavior** |
| Read only | Selecting this checkbox property prevents the user from being able to change the data value of a widget. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Disabled | If the disabled property is true (checked) the widget becomes display-only and user input will not be accepted. It can also set programmatically by binding it to a boolean type variable. |
| Collapsible | Enable control for collapsing and expanding the group. |
| Show Count | To display the number of items within the group. |

## Events

| Event | Description |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |
| **Mouse Events** |
| On click | It is an HTML button. It is used to generate a click event. For example, save button. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On tap | This event handler is called whenever the widget is tapped. |
| **Callback Events** |
| On ready | This event handler is called when the container is loaded. |

## See Also

[Working with Selection Widgets](/learn/how-tos/selection-widgets-use-case/)  
[How to use CheckboxSet widget to filter a List](/learn/how-tos/checkboxset-filter-list-data/)  


