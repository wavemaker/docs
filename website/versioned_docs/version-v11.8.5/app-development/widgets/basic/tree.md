---
title: "Tree"
id: "tree"
---
---

**Tree** is a widget that helps display data in a structured format. It can be used to show a hierarchical structure in data.

## Features

You can set various properties

- **Tree Icons** sets the expand-collapse icons on the tree,
- **Levels** sets levels of the tree to be expanded by default,
- **Default Value** can be none, FirstNode or LastNode defines the node to be selected by default on the first run of the app. This field can be bound to a condition. For example, `datavalue="role === 'admin'"`. In such cases, the condition is evaluated for each node in the tree until the condition is satisfied and that node will be selected.
- Tree Widget input needs three fields for **each node** - **label** for each node, **icon** to be displayed at each node, and in the case of sub-trees a **children** node with the repeat of the tree structure.

## Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for your widget. |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| Tree Icons | This property sets expand-collapse icons on the tree. One can choose from:    - _folder_,   - _plus-minus_,   - _circle-plus-minus_,   - _chevron_,   - _menu_,   - _triangle_ (default selection) or   - _expand-collapse_.  |
| **Dataset** |
| Value | Set this property to a variable to populate the list of values to display. |
| Order by  | Set the order of the content.  (available only when the above Dataset Value is bound to a variable) |
| Node Label  | Property of the object (bound to the value property above) for node label binding, default value is label.   (available only when the above Dataset Value is bound to a variable)|
| Node Icon  | Property of the object (bound to the value property above) for node icon binding, default value is icon.  (available only when the above Dataset Value is bound to a variable) |
| Node Children  | Property of the object (bound to the value property above) for node children binding, the default value is children. The property where the nested object is present.   (available only when the above Dataset Value is bound to a variable) |
| Node Id  | Property of the object (bound to the value property above) used to identify a node. The default value property can be set to a value of the node id for initial selection.   (available only when the above Dataset Value is bound to a variable) |
| Node Action  | This property sets the actions for the widget.   (available only when the above Dataset Value is bound to a variable) |
| Node Id  | Set this property to expand the node when it is clicked options being Do Nothing or Expand Node.   (available only when the above Dataset Value is bound to a variable) |
| **Default Value** |
| Value | The default value to be set at runtime. Can be:    - none,   - FirstNode or SecondNode,   - value for the Node Id property.   When `datavalue` is `FirstNode`, the First Node of the tree will be selected. When `datavalue` is `LastNode`, the Last Node of the tree will be selected. When `datavalue` is bound to a condition (eg, datavalue="role === 'admin'"), The condition is evaluated for each node of the tree until the condition is satisfied. The first node which satisfies the given condition will be selected. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand   (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| **Format** |
| Horizontal Align | This property specifies how the elements should be aligned horizontally. |

## Events

| Event | Description |
| --- | --- |
| **Callback Events** |
| On Select | This event handler is called when the tab is selected. |

## Methods

The tree widget has a few methods exposed on widget scope which can be accessed via JavaScript.

| Purpose | Usage |
| --- | --- |
| Select a node | ```Page.Widgets.[treeName].selectById(dataValue);```   ```//This method selects the node in the tree rendered.```   ```//This method accepts datavalue of the node to be selected.```   ```//Datavalue of the node is the `Node Id` field value```   ```//mapped in the property panel for the tree widget. ``` |
| Deselect a node | ```Page.Widgets.[treeName].deselectById();```   ```//This method clears the selectedNode.```   ```//Doesn’t require any parameters``` |

## Use Cases

- [How to build a tree from static variable](/learn/how-tos/tree-use-case-static-variable/)
- [How to build tree from java service](/learn/how-tos/tree-use-case-java-service/)
- [How to build a dynamic tree](/learn/how-tos/tree-use-case-dynamic-tree/)
