---
title: "Cards - Properties, Events & Methods"
id: "cards-properties-events-methods"
sidebar_label: "Properties, Events & Methods"
---
---
## Properties

:::important
Card Widget is contained within a List and as such, you can set the [List Properties](/learn/app-development/widgets/datalive/list/list-properties-events-methods/#properties) too.
:::

| **Event** | **Description** |
| --- | --- |
| Title | Set the title for the List. It is bindable. |
| Sub Heading | This bindable property defines the subheading or title for the list. |
| Name | The name is a unique identifier for the list. |
| **Picture** |
| Height | This property allows you to set the height of the picture, by default set to 200px |
| Source | This property specifies the source for the picture, it is bindable. |
| Title | This bindable property specifies the title on the picture |
| **Layout** |
| Width | The width of list can be specified in em, pt, px or % (i.e 50px, 75%). |
| Height | The height of list can be specified in em, pt, px or % (i.e 50px, 75%). |
| **Actions** |
| Menu Actions | This property sets the actions for the widget. To set the data and events see [menu widget](/learn/app-development/widgets/navigation/dropdown-menu/) |
| Action Label | Label for menu items. It can be bound to a variable or set to a field from the Dataset Value variable. |
| Action Icon | Label for menu items. It can be bound to a variable or set to a field from the Dataset Value variable. |
| Action Link | Link for the items. It can be bound to a variable or set to a field from the Dataset Value variable. **Note:** item link has priority over _onSelect_ actions i.e. when the link is selected the onSelect actions won't get executed. |
| Action Task | Task for menu items generated dynamically. This is the action that will be triggered when the user clicks on the Menu Item. |
| User Role | Role for menu items generated dynamically. You can assign a property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden. |
| Sub Actions | When a menu widget is required the sub-items can be mentioned in the children. It can be bound to a variable or set to a field from the Dataset Value variable. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| **Graphics** |
| Title Icon class | This bindable property defines the class of the icon that is applied to the button. |
| Icon Url | You can give Url of the image. |

## Events

| **Event** | **Description** |
| --- | --- |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on the list. |
| On double click | This event handler is called whenever the double click event is triggered on the list. |
| On mouse enter | This event handler is called whenever the mouse enters the list. |
| On mouse leave | This event handler is called whenever the mouse leaves the list. |
| **Touch Events** |
| On tap | This event handler is called whenever the tap event is triggered on the list. |
| On double tap | This event handler is called whenever the double tap event is triggered on the list. |
| **Keyboard Events** |
| Enter Key Press | When the user hits ENTER/Return while the focus is on the list, execute the specified event handler. |
| **Callback Events** |
| On before data render | This event handler is called when the data is set using the pagination. |
| On pagination change | This event handler is called when the page is changed through navigation controls. |
| On reorder | This event is triggered when the item in a list is reordered. For this, the Enable Reorder property has to be set. |
| On selection limit exceed | This event is triggered when selected items cross the value set for the Selection Limit property. |

## Methods

The card has few methods exposed on widget scope which can be accessed via JavaScript. For the following script samples, we are considering the hrdb Employee table. EmployeeList is bound to the Live Variable corresponding to the Employee table.

### `Clear list data`

```    
Page.Widgets.EmployeeList.clear(); 
//Clear the list items.
```

### `Select a list item`

```
Page.Widgets.EmployeeList.selectItem(0); 
//Selects first item , the parameter can be index or object.
```  

### `Deselect item`

```    
Page.Widgets.EmployeeList.deselectItem(0); 
//Deselects first item, the parameter can be index or object.
```

### `Change navigation`

```
Page.Widgets.EmployeeList.navigation = ‘Basic’; 
//Changes navigation type to Basic.
```

### `Interact with widgets of selected item`

```
Page.Widgets.EmployeeList.selectedItemWidgets[0].Name.caption = ‘Eric’; 
//Changes caption for Name widget of selected item to ‘Eric’.
```

### `Modify selected item`

```    
Page.Widgets.EmployeeList.selecteditem = 0; 
//selects first item in the list.
```    
### `Change the value of currentItem`

:::note
`currentItem` and `currentItemWidgets` can’t be accessed through the script. But those were given as parameters for events of widgets inside list widget template. `currentItem` is given as item in the arguments.
:::

```    
item.username = ‘Eric’; //Sets username field value to ‘Eric’;
```

### `Change the caption of username widget for currentItem`

:::note
`currentItem` and `currentItemWidgets` can’t be accessed through the script. But those were given as parameters for events of widgets inside list widget template. `currentItem` is given as item in the arguments.
:::

```    
currentItemWidgets.Name.caption = ‘Eric’; 
//Sets caption of Name widget to Eric.
```

### `Preserve the reordered list`
Enable reorder allows the user to change the order of the items in the List in runtime, but the order after reordering do not persist after refresh. `onReorder` callback event is triggered when the order of the items in the List is changed. In the script, `$data` parameter has the complete order after each reorder. This data can be used to make the reorder permanent.

```
Page.livelist1Reorder = function ($event, $data, $changedItem) { 
        //$data is the newly reordered array of items.
};
```    
