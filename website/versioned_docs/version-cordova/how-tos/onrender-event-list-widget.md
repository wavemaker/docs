---
title: "OnRender Event for List widget"
id: "onrender-event-list-widget"
sidebar_label: "OnRender Event"
---
---

The **onRender** event gets triggered when the list widget has rendered. 

### Use case

A user wants to select a specific item on a page load by passing the index/model of the list item.

### Solution 
Add the onRender callback event and call the selectItem method (exposed on the list widget) by passing index/model of the item.

```
Page.EmployeeList1Render = function(widget, $data) {
    widget.selectItem(2); (OR)  widget.selectItem($data[2]);
};
```

## Event Execution Order

`onBeforedataRender` → `onRender` → `onSelect`

:::important
If you enable `selectfirstrecord` and write `widget.selectItem(5)` in the onRender event, then the first item gets selected. The `selectfirstrecord` takes preference because onRender event triggers before the select event. If you want to select a specific item then you should turn off the `selectfirstrecord`.
:::