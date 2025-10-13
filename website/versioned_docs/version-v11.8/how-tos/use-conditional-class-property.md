---
title: "How to use Conditional Class Property"
id: "use-conditional-class-property"
---
---
**Conditional Class** property allows you to bind an expression which will be evaluated and appended as classes to a widget.

Conditional Class property can be set for the following Widgets:

- Label
- Anchor
- Button
- Container
- Panel
- Tile

You can access this property from the Styles tab of the Properties panel.

[![](/learn/assets/cond_class.png)](/learn/assets/cond_class.png) 

The expression can be of three ways:

1. **Variable/Widget**: it can be bound to any outbound property of the Variable/Widget or a simple JavaScript expression involving the Variable/Widget.
2. **Array of expressions** as `[Variables.variablename.dataSet.datavalue, 'bg-info']`. In such cases all the classes that each array value evaluates to will be added to the widget.
3. **Object** as `{'label-success': Widgets.list.currentitem.progress === 100, 'label-warning': Widgets.list.currentitem.progress > 50, 'label-danger': Widgets.list.currentitem.progress < 25}`. In this case all classes that evaluate to truth value will be added to widget.

### Example

**Use case**: To represent vacation item based on type of leave applied or based on status of application.

We will be using a project with the Sample hrdb imported **Steps**:

1. Drag n Drop **List** widget and select **Vacation** as Type from **hrdb** data service.
2. Add a **Tile** widget inside List template
3. Bind Tile widget **Conditional Class** property to expression:

```css
{'bg-success': Widgets.livelist2.currentItem.status === 'Approved', 
    'bg-info': Widgets.livelist2.currentItem.status === 'Pending',
    'bg-danger': Widgets.livelist2.currentItem.status === 'Rejected'}
```

This expression checks the status if it is: Approved - ‘bg-success’ will be applied. Pending - ‘bg-info’ will be applied. Rejected - ‘bg-danger’ will be applied. **Note**: Instead of the predefined class (bg-success etc.) as shown in the above example, you can use your custom class names as defined either in the _app.css_ file or from the _Styles tab_ of the page.

4. At run time based on the leave status the background color of tile will change.
