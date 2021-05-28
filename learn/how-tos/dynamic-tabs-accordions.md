---
title: "Implement Dynamic Tabs or Accordions"
id: ""
---

## Dynamic Tabs
A Tab component is an essential part of every web application. WaveMaker provides a really flexible and powerful Tab component. It is possible to create a fully dynamic and flexible tab component without much effort using datasource. 

Now we have an ability to bind the dataset to the tabs widget. Based on the dataset the number of tabpanes will be generated.

### Implementation
#### Usecase

Dynamically open new tab pages based on the user interaction so whenever we click the “Add new Employee” or “edit” button beneath an existing record, we want the editing to take place in a separate tab pages that gets added dynamically.

#### How to Implement

1. Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

2. Create a partial page with name **PartialNewEmp**. Drag and drop LiveForm and bind it to the **Employee** Entity present in the database. For more information, see [Configure LiveForm](/learn/app-development/widgets/datalive/live-form/live-form-basic-usage).

3. Create a page and create model variable with Entity type with below dataset.

[![](/learn/assets/dynamicwidgets/modelvar.png)](/learn/assets/dynamicwidgets/modelvar.png)

4. Drag and drop tab widget. Under properties panel change **type** property to **dynamic**. Now bind the **dataset value** property under properties panel to the model variable dataset (Variable created in Step3).

5. Select tabpane and set the **content** property to the created modelVariable -> dataset -> tabcontent and also bind **title** to the modelVariable -> dataset -> tabtitle.

6. Create another partial with name **PartialEmp** and drag and drop datatable and configure datatable with the the **Employee** Entity datasource present in the database. Also add button in the partial and onButton click add another object to the model variable (created in Step3). This is needed to add the tabpane on button click.
For more information, see [AddItem in Model Variable](/learn/app-development/variables/model-variable#additemvalue-index)

```js
Partial.button1Click = function($event, widget) {
    Partial.App.activePage.Variables.TabsInfo.addItem({
        "tabtitle": "Add Employee",
        "tabcontent": "PartialNewEmp"
    }, 1);
};
```
:::note
Adding above object at index 1 in the model variable.
:::
7. Preview the app, Whenever we click the "Add new Employee" button beneath an existing records, a separate tabpane that gets added dynamically to add Employee record.

[![](/learn/assets/dynamicwidgets/tabspreview.gif)](/learn/assets/dynamicwidgets/tabspreview.gif)

:::note 

You can also remove the tabpanes added by removing the item from the Model Variable. See [RemoveItem in Model Variable](/learn/app-development/variables/model-variable#removeitemindex)

:::
## Dynamic Accordion

An Accordion is an interactive component consisting of panels with headers and content section. These panels can be clicked to expand collapse to show description area.

It is possible to create a fully dynamic and flexible accordion without much effort. Now we have an ability to bind the dataset to the accordion widget. Based on the dataset the number of accordionpanes will be generated.

### Implementation
#### Usecase

Display List of Departments as accordionpanes and their respective employee details as the accordionpane content.

#### How to Implement

1. Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

2. Create a partial page. Create a variable for the **Employee** Entity present in the database. For more information, see [Creating Variable](/learn/app-development/variables/database-crud/).

3. Add a page param to the partial page. See below image for reference.

[![](/learn/assets/dynamicwidgets/partialpage.png)](/learn/assets/dynamicwidgets/partialpage.png)

4. Open the variable created in Step2 and bind the deptId field in the variable to the added partial page param(param added in Step3).

[![](/learn/assets/dynamicwidgets/variablebind.png)](/learn/assets/dynamicwidgets/variablebind.png)

5. Create a page and create Variable for the **Department** Entity present in the database. For more information, see [Creating Variable](/learn/app-development/variables/database-crud/).

6. Drag and drop accordion widget. Under properties panel change **type** property to **dynamic**. Bind the **dataset value** property under properties panel to the department variable dataset(Variable created in Step2).

7. Now select accordionpane and set the **content** property to the created partial page(partial created in Step2) also bind the partial param to the deptId of the Department variable dataset. Also bind the **Title** property of the tabpane to the name of the Department Variable dataset.

8. Preview the app, We see the all the department are displayed as accordionpanes titles and the respective Employee's as accordion pane content.
 
 [![](/learn/assets/dynamicwidgets/accordionpreview.gif)](/learn/assets/dynamicwidgets/accordionpreview.gif)

