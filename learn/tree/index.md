---
title: "Tree"
date: "2016-06-28"
---

is a widget that helps display data in a structured format. It can be used to show a hierarchical structure in data.

You can set various properties

- **Icons** sets the expand-collapse icons on the tree,
- levels of the tree to be expanded by default,
- **Value** can be none, FirstNode or LastNode defines the node to be selected by default on the first run of the app. This field can be bound to a condition (eg, datavalue="role === 'admin'"). In such cases, the condition is evaluated for each node in the tree until the condition is satisfied and that node will be selected.
- Widget input needs three fields for **node** - for each node, to be displayed at each node, and in the case of sub-trees a node with the repeat of the tree structure.

name is a unique identifier for your widget.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

Icons

property sets expand-collapse icons on the tree. One can choose from:

- ,
- _\-minus_,
- _\-plus-minus_,
- ,
- ,
-  (default selection) or
- _\-collapse_

this property to a variable to populate the list of values to display.

by

(available only when the above Dataset Value is bound to a variable)

the order of the content.

Label

(available only when the above Dataset Value is bound to a variable)

of the object (bound to the value property above) for node label binding, default value is label

Icon

(available only when the above Dataset Value is bound to a variable)

of the object (bound to the value property above) for node icon binding, default value is icon

Children

(available only when the above Dataset Value is bound to a variable)

of the object (bound to the value property above) for node children binding, the default value is children. The property where the nested object is present

Id

(available only when the above Dataset Value is bound to a variable)

of the object (bound to the value property above) used to identify a node. The default value property can be set to a value of the node id for initial selection.

Action

(available only when the above Dataset Value is bound to a variable)

property sets the actions for the widget.

Id

(available only when the above Dataset Value is bound to a variable)

this property to expand the node when it is clicked options being Do Nothing or Expand Node.

**Value**

default value to be set at runtime. Can be:

- ,
- or SecondNode,
- for the Node Id property.

When \`datavalue\` is \`FirstNode\`, the First Node of the tree will be selected. When \`datavalue\` is \`LastNode\`, the Last Node of the tree will be selected. When \`datavalue\` is bound to a condition (eg, datavalue="role === 'admin'"), The condition is evaluated for each node of the tree until the condition is satisfied. The first node which satisfies the given condition will be selected.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Align

property specifies how the elements should be aligned horizontally.

**Events**

Select

event handler is called when the tab is selected.

The tree widget has a few methods exposed on widget scope which can be accessed via JavaScript.

a node

\[treeName\].selectById(dataValue);
//This method selects the node in the tree rendered. 
//This method accepts datavalue of the node to be selected. 
//Datavalue of the node is the \`Node Id\` field value 
//mapped in the property panel for the tree widget.

a node

\[treeName\].deselectById();
//This method clears the selectedNode. 
//Doesn’t require any parameters

# Cases

- [to build a tree from static variable](/learn/how-tos/tree-use-case-static-variable/)
- [to build tree from java service](/learn/how-tos/tree-use-case-java-service/)
- [to build a dynamic tree](/learn/how-tos/tree-use-case-dynamic-tree/)

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
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
    - [Methods](#methods)
    - [Use Cases](#use-cases)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
