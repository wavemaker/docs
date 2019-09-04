---
title: "Configuring Select Widget from a Static Variable"
id: ""
---

Instead of having a [comma-separated list](/learn/how-tos/configuring-select-widget-static-list-values/), one can use a Static Variable to hold the list and then bind it to the Select widget. This will enable us to reuse the list at multiple places, if needed.

1. [Create a Static Variable](/learn/variables/#menu), choose the Is List and add the list values: [![sel_listvar](./assets/sel_listvar.png)](./assets/sel_listvar.png)
2. Bind the Select Widget to the Static Variable dataset: [![sel_listvar_bind](./assets/sel_listvar_bind.png)](./assets/sel_listvar_bind.png)
3. Set the Datafield value to the datavalue of the static variable. This is the value that is selected by the user: [![sel_listvar_props](./assets/sel_listvar_props.png)](./assets/sel_listvar_props.png)
4. Running the app will result in the display of the Select widget [![sel_listvar_run1](./assets/sel_listvar_run1.png)](./assets/sel_listvar_run1.png) [![sel_listvar_run2](./assets/sel_listvar_run2.png)](./assets/sel_listvar_run2.png)

[Select Use Cases](/learn/app-development/widgets/form-widgets/select-use-cases/)

- [1\. How to use list of values for select widget configuration](/learn/how-tos/configuring-select-widget-static-list-values/)
- [2\. How to use static variable for select widget configuration](/learn/how-tos/configuring-select-widget-static-variable/)
- [3\. How to use display and data value fields for select widget configuration](/learn/how-tos/configuring-select-widget-display-data-fields/)
- [4\. How to use database fields for select widget configuration](/learn/how-tos/configuring-select-widget-database-fields/)
- [5\. How to configure cascading select](/learn/how-tos/configuring-cascading-select/)
