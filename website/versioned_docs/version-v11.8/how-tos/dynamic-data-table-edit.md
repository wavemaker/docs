---
title: "Adding CRUD functionalities to dynamic data table"
id: "dynamic-data-table-edit"
---

When we bind a data table to a web service variable associated with a GET API, editing, inserting, and deleting the entries become unfeasible due to the read-only nature of the GET API. This can be handled by creating dedicated variables.

## Variables to add CRUD functionalities

Dedicated variables need to be created that are responsible for invoking the necessary POST, PATCH, and DELETE calls, enabling the modification and manipulation of the data.

This approach helps to seamlessly handle scenarios where the primary variable is confined to a GET API, ensuring comprehensive control over the data interaction within the data table.

## CRUD Functionalities for GET API Variable

1. Import the HRDB employee GET API into the studio as a web service. To know more about web services and how to import different web services, see [Web Services](/learn/app-development/services/web-services).

![getemployeeapi.png](/learn/assets/getemployeeapi.png)

2. [Create a web service variable](/learn/app-development/variables/web-service/#service-variable-for-web-services) for the above imported GET API and bind it to a data table.

3. Go to the Advanced Settings of the data table.

![advancedsettings_img.png](/learn/assets/advancedsettings_img.png)

4. Navigate to the Actions tab and enable New, Edit, and Delete actions.

![advancedsetting_actions.png](/learn/assets/advancedsetting_actions.png)

### Inserting New Entries in Data Table

1. Import POST API as a [Web Services](/learn/app-development/services/web-services). 

![post_apidynamicdatatable.png](/learn/assets/post_apidynamicdatatable.png)

2. Create the respective [web service variable](/learn/app-development/variables/web-service/#service-variable-for-web-services).

![post_apivariablecreation.png](/learn/assets/post_apivariablecreation.png)

3. Go to the Events tab of the data table and set **On Before Record Insert** event to JavaScript.

![insertnewrecord_dynamic_table.png](/learn/assets/insertnewrecord_dynamic_table.png)

4. Add the below code. Here `svPostEmployee` is the web service variable that is bound to POST API, `wm_data_json` is the name of the body parameter, and `row` is the data that we are inserting into the data table.

```javascript
Page.employeeTable1Beforerowinsert = function($event, widget, row, options) {

 Page.Variables.svPostEmployee.setInput({
 "wm_data_json": row
 });

 Page.Variables.svPostEmployee.invoke();

};

```

### Editing Entries within Data Table

1. Import PATCH API as a [Web Services](/learn/app-development/services/web-services).

![patch_path_param_dymanictable.png](/learn/assets/patch_path_param_dymanictable.png)

2. Create a respective [web service variable](/learn/app-development/variables/web-service/#service-variable-for-web-services).

![patch_api_variable_creation.png](/learn/assets/patch_api_variable_creation.png)

3. Go to the Events tab of the data table and set **On Before Record Update** event to JavaScript.

![before_updatepatch.png](/learn/assets/before_updatepatch.png)

4. Add the below code. Here `svEditEmployee` is the web service variable that is bound to PATCH API, `RequestBody` is the name of the body parameter, and `row.empId` is the path parameter.

```javascript
Page.employeeTable1Beforerowupdate = function($event, widget, row, options) {
 Page.Variables.svEditEmployee.setInput({
 "empId": row.empId,
"RequestBody": row
})

Page.Variables.svEditEmployee.invoke();
};

```

### Deleting Entries from Data Table

1. Import DELETE API as a [Web Services](/learn/app-development/services/web-services).

![delete_apidynamictable.png](/learn/assets/delete_apidynamictable.png)

2. Create a respective [web service variable](/learn/app-development/variables/web-service/#service-variable-for-web-services).

![delete_apicreatevariable.png](/learn/assets/delete_apicreatevariable.png)

3. Go to the Events tab of the data table and set **On Before ROW Delete** event to JavaScript.

![before_rowdeletedynamic.png](/learn/assets/before_rowdeletedynamic.png)

4. Add the below code. Here `svDeleteEmployee` is the web service variable that is bound to DELETE API,  `RequestBody` is the name of the body parameter, and `row.empId` is the path parameter.

```javascript
Page.employeeTable1Beforerowdelete = function($event, widget, row, options) {

 Page.Variables.svDeleteEmployee.setInput({
 "empId": row.empId
 });

 Page.Variables.svDeleteEmployee.invoke();
};

```
