---
title: "Radioset to Filter a List"
id: "radioset-filter-list"
---

WaveMaker offers three ways of allowing user to choose from given options:

- **Select** : Select widget lets the user to select values from an available list of options. The options are given in the form of a drop-down list from which the user can choose one option.
- **Radioset** : and Checkboxset are used when there are multiple values belonging to a single group to choose from. In case we have a yes/no or true/false scenario, we can use the Checkbox widgets.

Here we will see how to Filter a List using a Radioset Widget

Follow the below steps to Filter a List by taking the input from the Radioset:

## Add Page and Import DB

Add a [Page](/learn/app-development/ui-design/designing-app), import the [HRDB](/learn/app-development/services/database-services/working-with-databases#2-sample-db) database into the application.

## Create Variable for RadioSet

- Create a [Database CRUD](/learn/app-development/variables/database-crud) variable with the name **radioSetDataValue** for the entity department from HRDB.

![radio_setfilter_variable](/learn/assets/radio_setfilter_variable.png)

## Binding Radioset to Variable

- Drag and drop the RadioSet widget into the canvas.
- Bind the datavalue of Radioset widget to the Database CRUD variable **radioSetDataValue** which is created in above step.
- From Radioset properties panel set **Data field** value to `deptId` and also **Display field** value to `name` as shown below. In this case, **name** refers to department name, such as Engineering, Marketing, etc,. from the department table.

![radio_setfiltervariable_properties](/learn/assets/radio_setfiltervariable_properties.png)

## Creating Variable for List

- Create another Database CRUD variable with the name **HrdbEmployeeList** for the entity Employee from HRDB.

![hrdb_listvariable](/learn/assets/hrdb_listvariable.png)

## Filter Records from Radioset

- Now go to the Events tab of Radioset widget and set the **Change** event to `JavaScript` as shown below.

![radioset_button_onchnage_jsmethod](/learn/assets/radioset_button_onchnage_jsmethod.png)

- Add below JavaScript code to the  **radioset1Change** method.

```js
Page.radioset1Change = function($event, widget, newVal, oldVal) {
    var hrdbEmployeeVar = Page.Variables.HrdbEmployeeListVariable;
    var radioSetdataValue = Page.Widgets.radioset1.datavalue;

    hrdbEmployeeVar.listRecords({
        filterFields: {
            "deptId": {
                "value": radioSetdataValue,

                "matchMode": "EQUALS_TO"
            }
        }
    });
};

```

## Preview the page

- Preview the app.
- When you select the department name from the Radioset, employee records will display in the List below, which are filtered based on the condition set in the [radioset1Change method](#filter-records-from-radioset).

Sample output when department name selected as **Engineering**.

![radioset-output-image](/learn/assets/radioset-output-image.png)

Sample output when department name selected as **Marketing**.

![radioset-output-image2](/learn/assets/radioset-output-image2.png)