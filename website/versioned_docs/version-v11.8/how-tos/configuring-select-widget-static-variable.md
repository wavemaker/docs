---
title: "Configuring Select Widget from a Static Variable"
id: "configuring-select-widget-static-variable"
---
---

Instead of having a [comma-separated list](/learn/how-tos/configuring-select-widget-static-list-values/), one can use a Static Variable to hold the list and then bind it to the Select widget. This will enable us to reuse the list at multiple places, if needed.

1. [Create a Static Variable](/learn/app-development/variables/variables), choose the Is List and add the list values: [![sel_listvar](/learn/assets/sel_listvar.png)](/learn/assets/sel_listvar.png)
2. Bind the Select Widget to the Static Variable dataset: [![sel_listvar_bind](/learn/assets/sel_listvar_bind.png)](/learn/assets/sel_listvar_bind.png)
3. Set the Datafield value to the datavalue of the static variable. This is the value that is selected by the user: [![sel_listvar_props](/learn/assets/sel_listvar_props.png)](/learn/assets/sel_listvar_props.png)
4. Running the app will result in the display of the Select widget [![sel_listvar_run1](/learn/assets/sel_listvar_run1.png)](/learn/assets/sel_listvar_run1.png) [![sel_listvar_run2](/learn/assets/sel_listvar_run2.png)](/learn/assets/sel_listvar_run2.png)


## See Also
[Select Use Cases](/learn/app-development/widgets/form-widgets/select-use-cases/)

