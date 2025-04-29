---
title: "Dynamic Menu based on the User Role"
id: "dynamic-menu-based-user-role"
sidebar_label: "Dynamic Menu based on User Role"
---
---

**Problem Statement**: To create a dynamic menu based on the roles of the logged in user. Dropdown Menu uses the property User Role to automatically build the Menu Items as per the logged-in User role when bound to a Database with the User-Role mapping established.

In this document, we will be walking through the steps to dynamically build the Dropdown Menu widget based upon the user role.

1. Please make sure that you configure the security in the application with the database. We are using a sample database with Actions, Roles, Users, and `RolesActionMapping` entities. 

[![](/learn/assets/rbac_menu_db.png)](/learn/assets/rbac_menu_db.png)

2. Create a page and drag and drop a Dropdown Menu widget.
3. [Create a DB CRUD variable](/learn/assets/var_sel.png) for the RolesActionMapping entity from the above Database and enable the _Request data on page load_ property.
4. Navigate to the Events tab for the variable and choose JavaScript as the operation for the onSuccess event as below: 

[![](/learn/assets/rbac_menu_varevent.png)](/learn/assets/rbac_menu_varevent.png)

5. Add the below code snippet in the onSuccess event definition generated in the Script tab of the respective page:

```js
Page.dynamicMenuonSuccess = function(variable, data) {
            _.map(data, function(value) {
        Page.Variables.dynamicTree.dataSet.push({
            roleId: value.roleId,
            actionName: value.actions.actionName,
            actionLink: value.actions.actionLink
        })
    })
};
```

:::note
In the above code snippet, _dynamicTree_ is the name of the model variable as created in the next step. The above code snippet is required as the data from the database is an array of objects whereas the Dropdown Menu widget expects a JSON structure with the following keys - label, icon, link, userrole, children as explained in [this document](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/). The above code snippet fetches the values from the database entity and sets them against the respective keys for the Dropdown Menu widget.
:::

6. Create a model variable named _dynamicTree_, Type Entry and Is List property checked. Use the following structure:

```js
[
    {
    "actionName": " ",
    "actionLink": " ",
    "roleId": " "
    }
]
```

7. On the page select the Dropdown Menu widget from the canvas. Bind the following properties for the widget:
    - DataSet → dynamicTree model variable as created in Step #6
    - Action Label → actionName key in the dynamicTree model variable dataSet
    - Action Link → actionLink key in the dynamicTree model variable dataSet
    - User Role → roleId key in the dynamicTree model variable dataSet
8. Run the application and check the dynamic Menu functionality.

## Dropdown Menu Use Cases

[Dropdown Menu Basic Usage](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/)  
[How to enable user role-based access to menu items](/learn/how-tos/restricting-menu-item-display-based-user-role/)  
[How to localize menu items](/learn/how-tos/implementing-localization-dropdown-menu/)  
