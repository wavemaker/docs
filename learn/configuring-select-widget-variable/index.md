---
title: "Configuring Select Widget from a Variable"
date: "2017-11-03"
---

A Select widget can be used in various ways based on the source of data. Each type of data source needs a different approach. WaveMaker Select widget works in any one of the following ways:

- [static list of values](/learn/how-tos/configuring-select-widget-static-list-values/)
- variable data
- [display and data value fields from a Variable](/learn/how-tos/configuring-select-widget-display-data-fields/)
- [database fields](/learn/how-tos/configuring-select-widget-database-fields/)

Instead of having a [\-separated list](/learn/how-tos/configuring-select-widget-static-list-values/), one can use a Variable to hold the list and then bind it to the Select widget. This will enable us to reuse the list at multiple places if needed.

1. and drop a Select and Label widget onto the canvas.
2. [a Model Variable](http://[supsystic-show-popup id=105]), choose the Is List and add the list values: [![](../assets/sel_listvar.png)](../assets/sel_listvar.png)
3. the Select Widget to the Model Variable dataset
4. the Data field value to the dataValue of the model variable. This is the value that is selected by the user.
5. Display field is what the user sees in the list. In this case it is same as the Data field. We will see the case when both are different in the next use case. [![](../assets/sel_listvar_props.png)](../assets/sel_listvar_props.png)
6. selection made by the user is displayed in a Label widget, by binding the select datavalue to it. [![](../assets/sel_list_res.png)](../assets/sel_list_res.png)
7. the app and see the selected item from the Select widget displayed in the label.

[Use Cases](/learn/app-development/widgets/form-widgets/select-use-cases/)

- [1\. How to use list of values for select widget configuration](/learn/how-tos/configuring-select-widget-static-list-values/)
- [2\. How to use variable for select widget configuration](#)
- [3\. How to use display and data value fields for select widget configuration](/learn/how-tos/configuring-select-widget-display-data-fields/)
- [4\. How to use database fields for select widget configuration](/learn/how-tos/configuring-select-widget-database-fields/)
- [5\. How to configure cascading select](/learn/how-tos/configuring-cascading-select/)
