---
title: "Adding CRUD functionalities to dynamic data table"
id: "dynamic-data-table-edit"
---

When we establish a binding between a data table and a web service variable associated with a GET API, direct editing, insertion, and deletion of entries becomes unfeasible due to the read-only nature of the GET API. This can be handled by creating dedicated variables.

## Variables to add CRUD functionalities

Dedicated variables needs to be created that are responsible for invoking the necessary POST, PATCH, and DELETE calls, enabling the modification and manipulation of the data.

This approach helps to seamlessly handle scenarios where the primary variable is confined to a GET API, ensuring comprehensive control over the data interaction within the data table.

## Implementing CRUD Functionalities for Variable Bound to GET API

1. Import the HRDB employee GET API into the studio as a [web service](/learn/app-development/services/web-services).

![getemployee_api.png](/learn/assets/getemployee_api.png)

2. [Create a webservice variable](/learn/app-development/services/web-services/rest-services) for the above imported GET API and bind it to a data table.

3. Go to the Advanced Settings of the data table.

![advancedsettings.png](/learn/assets/advancedsettings.png)

4. Navigate to Actions tab and enable new, edit, delete actions.

![advanced_setting_actions.png](/learn/assets/advanced_setting_actions.png)


### Inserting New Entries in Data Table

1. Import POST API as a webservice. 

![post_api_dynamicdatatable.png](/learn/assets/post_api_dynamicdatatable.png)

2. Create respective [webservice variable](/learn/app-development/services/web-services/rest-services).

![post_api_variablecreation.png](/learn/assets/post_api_variablecreation.png)

3. Go to the Events tab of the data table and set **On Before Record Insert** event to JavaScript.

![insertnewrecord_dynamictable.png](/learn/assets/insertnewrecord_dynamictable.png)

4. Add the below code. Here `svPostEmployee` is the webservice variable that is bound to POST API and `wm_data_json` is the name of the body parameter and `row` is the data that we are inserting into the data table.

```javascript
Page.employeeTable1Beforerowinsert = function($event, widget, row, options) {

 Page.Variables.svPostEmployee.setInput({
 "wm_data_json": row
 });

 Page.Variables.svPostEmployee.invoke();

};

```


### To edit/modify entries within the data table:

1. Import PATCH API as a webservice.

![patch_pathparam_dymanictable.png](/learn/assets/patch_pathparam_dymanictable.png)

2. Create a respective [webservice variable](/learn/app-development/services/web-services/rest-services).

![patch_apivariable_creation.png](/learn/assets/patch_apivariable_creation.png)

3. Go to the Events tab of the data table and set **On Before Record Update** event to JavaScript.

![before_update_patch.png](/learn/assets/before_update_patch.png)

4. Add the below code. Here `svEditEmployee` is the webservice variable that is bound to PATCH API and `RequestBody` is the name of the body parameter and `row.empId` is the path parameter.

```javascript
Page.employeeTable1Beforerowupdate = function($event, widget, row, options) {
 Page.Variables.svEditEmployee.setInput({
 "empId": row.empId,
"RequestBody": row
})

Page.Variables.svEditEmployee.invoke();
};

```

### To delete entries from the data table:

1. Import DELETE API as a webservice.

![delete_api_dynamictable.png](/learn/assets/delete_api_dynamictable.png)

2. Create a respective [webservice variable](/learn/app-development/services/web-services/rest-services).

![delete_api_createvariable.png](/learn/assets/delete_api_createvariable.png)

3. Go to the Events tab of the data table and set **On Before ROW Delete** event to JavaScript.

![before_row_deletedynamic.png](/learn/assets/before_row_deletedynamic.png)

4. Add the below code. Here `svDeleteEmployee` is the webservice variable that is bound to DELETE API and `RequestBody` is the name of the body parameter and `row.empId` is the path parameter.

```javascript
Page.employeeTable1Beforerowdelete = function($event, widget, row, options) {

 Page.Variables.svDeleteEmployee.setInput({
 "empId": row.empId
 });

 Page.Variables.svDeleteEmployee.invoke();
};

```
