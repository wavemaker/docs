---
title: "How to add edit, new and delete functionality for dynamic data table"
id: "dynamic-data-table-edit"
---

To enable edit,delete and add functionality for a dynamic data table that is bound to a web service variable associated with a GET API, you can follow the below mentioned steps:

 When we establish a binding between a data table and a webservice variable that, in turn, is associated with a GET API, a limitation arises where direct editing, addition, or deletion of entries becomes unfeasible due to the read-only nature of the GET API. To handle such scenarios, we can implement a solution that involves the creation of separate variables. These dedicated variables will be responsible for invoking the necessary POST, PATCH, and DELETE calls, thereby enabling the functionality to modify and manipulate the data effectively. This approach allows us to seamlessly handle scenarios where the primary variable is confined to a GET API, ensuring comprehensive control over data interaction within the data table.

# Steps:
   
   For the below example we have used HRDB API's.

1. Import the HRDB employee GET API into the studio as a web service.

![getemployee_API.png](/learn/assets/getemployee_API.png)

2. Create a webservice variable for the above imported GET API and bind it to a data table.

3. Go to the advanced settings of the data table, navigate to Actions tab and enable new, edit, delete actions as shown in below screnshot.

![advanced_setting_actions.png](/learn/assets/advanced_setting_actions.png)


To add new entries to the data table follow the below steps:

1. Import POST API as a webservice as shown below and Create a respective webservice variable.

![post_API_dynamicdatatable.png](/learn/assets/post_API_dynamicdatatable.png)

![post_API_variablecreation.png](/learn/assets/post_API_variablecreation.png)

2. Go to the events tab of the data table and set "On Before Record Insert" to javaScript.

![insertnewrecord_dynamicTable.png](/learn/assets/insertnewrecord_dynamicTable.png)

3. Add the below specified code snippet. Here svPostEmployee is the webservice variable that is bound to POST API and "wm_data_json" is the name of the body parameter and row is the data that we are inserting into the data table.

```
Page.employeeTable1Beforerowinsert = function($event, widget, row, options) {

 Page.Variables.svPostEmployee.setInput({
 "wm_data_json": row
 });

 Page.Variables.svPostEmployee.invoke();

};

```


To edit entries in the data table follow the below steps:

1. Import PATCH API as a webservice as shown below and Create a respective webservice variable.

![patch_pathparam_dymanicTable.png](/learn/assets/patch_pathparam_dymanicTable.png)

![patch_APIvariable_creation.png](/learn/assets/patch_APIvariable_creation.png)

2. Go to the events tab of the data table and set "On Before Record Update" to javaScript.

![before_update_PATCH.png](/learn/assets/before_update_PATCH.png)

3. Add the below specified code snippet. Here svEditEmployee is the webservice variable that is bound to PATCH API and "RequestBody" is the name of the body parameter and row.empId is the path parameter.

```
Page.employeeTable1Beforerowupdate = function($event, widget, row, options) {
 Page.Variables.svEditEmployee.setInput({
 "empId": row.empId,
"RequestBody": row
})

Page.Variables.svEditEmployee.invoke();
};

```


To delete entries from the data table follow the below steps:

1. Import DELETE API as a webservice as shown below and Create a respective webservice variable.

![delete_API_dynamictable.png](/learn/assets/delete_API_dynamictable.png)

![delete_API_createVariable.png](/learn/assets/delete_API_createVariable.png)

2. Go to the events tab of the data table and set "On Before ROW Delete" to javaScript.

![before_row_deletedynamic.png](/learn/assets/before_row_deletedynamic.png)

3. Add the below specified code snippet. Here svDeleteEmployee is the webservice variable that is bound to DELETE API and "RequestBody" is the name of the body parameter and row.empId is the path parameter.

```
Page.employeeTable1Beforerowdelete = function($event, widget, row, options) {

 Page.Variables.svDeleteEmployee.setInput({
 "empId": row.empId
 });

 Page.Variables.svDeleteEmployee.invoke();
};

```
