---
title: "How to use Conditional Class Property"
id: ""
---

**Class** property allows you to bind an expression which will be evaluated and appended as classes to a widget.

Conditional Class property can be set for the following Widgets:

- ,
- ,
- ,
- ,
- , and

You can access this property from the Styles tab of the Properties panel [![](../assets/cond_class.png)](../assets/cond_class.png) expression can be of three ways:

1. **/Widget**: it can be bound to any outbound property of the Variable/Widget or a simple JavaScript expression involving the Variable/Widget.
2. **of expressions** as `[Variables.variablename.dataSet.datavalue, 'bg-info']` In such cases all the classes that each array value evaluates to will be added to the widget.
3. as `{'label-success': Widgets.list.currentitem.progress === 100, 'label-warning': Widgets.list.currentitem.progress > 50, 'label-danger': Widgets.list.currentitem.progress < 25}` In this case all classes that evaluate to truth value will be added to widget.

**case**: To represent vacation item based on type of leave applied or based on status of application.

We will be using a project with the Sample hrdb imported :

1. n Drop widget and select  as Type from data service.
2. a widget inside List template
3. Tile widget **Class** property to expression:
    
    {'bg-success': Widgets.livelist2.currentItem.status === 'Approved', 
     'bg-info': Widgets.livelist2.currentItem.status === 'Pending',
     'bg-danger': Widgets.livelist2.currentItem.status === 'Rejected'}
    
    This expression checks the status if it is: Approved - ‘bg-success’ will be applied. Pending - ‘bg-info’ will be applied. Rejected - ‘bg-danger’ will be applied. : Instead of the predefined class (bg-success etc.) as shown in the above example, you can use your custom class names as defined either in the file or from the _tab_ of the page.
4. run time based on the leave status the background color of tile will change.
