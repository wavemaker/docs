---
title: "Configuring Select Widget from a Variable"
id: "configuring-select-widget-variable"
last_update: { author: "WaveMaker" }
---
A Select widget can be used in various ways based on the source of data. Each type of data source needs a different approach. WaveMaker Select widget works in any one of the following ways:

- [Using static list of values](./configuring-select-widget-static-list-values.md)
- Using variable data
- [Using display and data value fields from a Variable](./configuring-select-widget-display-data-fields.md)
- [Using database fields](./configuring-select-widget-database-fields.md)

Instead of having a [comma-separated list](./configuring-select-widget-static-list-values.md), one can use a Variable to hold the list and then bind it to the Select widget. This will enable us to reuse the list at multiple places if needed.

1. Drag and drop a Select and Label widget onto the canvas.
2. [Create a Model Variable](./how-tos/assets/img/var_sel.png), choose the Is List and add the list values: [![](./assets/img/sel_listvar.png)](./assets/img/sel_listvar.png)
3. Bind the Select Widget to the Model Variable dataset
4. Set the Data field value to the dataValue of the model variable. This is the value that is selected by the user.
5. The Display field is what the user sees in the list. In this case it is same as the Data field. We will see the case when both are different in the next use case. [![](./assets/img/sel_listvar_props.png)](./assets/img/sel_listvar_props.png)
6. The selection made by the user is displayed in a Label widget, by binding the select datavalue to it. [![](./assets/img/sel_list_res.png)](./assets/img/sel_list_res.png)
7. Preview the app and see the selected item from the Select widget displayed in the label.

<!-- <!-- [Select Use Cases](/learn/app-development/widgets/form-widgets/select-use-cases/) --> -->

- [1. How to use list of values for select widget configuration](./configuring-select-widget-static-list-values.md)
- [2. How to use variable for select widget configuration](#)
- [3. How to use display and data value fields for select widget configuration](./configuring-select-widget-display-data-fields.md)
- [4. How to use database fields for select widget configuration](./configuring-select-widget-database-fields.md)
- [5. How to configure cascading select](./configuring-cascading-select.md)
