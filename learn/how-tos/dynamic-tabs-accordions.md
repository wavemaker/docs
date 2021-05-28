---
title: "Implementing Dynamic Tabs and Accordions"
id: ""
---
---

## Dynamic Tabs

Tab is an essential navigation element of every web application. WaveMaker provides a really flexible and powerful Tab component. It is possible to create a fully dynamic tab component using a data source.

Now you can bind the dataset to the tabs widget. Based on the dataset, a number of Tab panes are generated.

### Implementing a Usecase

Dynamically open new tab pages based on user interaction. Whenever you click the “Add New Employee” or “edit” button beneath an existing record, the editing should occur in separate tab pages that get added dynamically.

[![tabs preview](/learn/assets/dynamicwidgets/tabspreview.gif)](/learn/assets/dynamicwidgets/tabspreview.gif)

#### 1. Import DB

Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

#### 2. Create a Partial and Configure Live Form

1. Create a partial page with a name **PartialNewEmp**. 
2. Drag and drop LiveForm and bind it to the **Employee** Entity present in the database. For more information, see [Configure LiveForm](/learn/app-development/widgets/datalive/live-form/live-form-basic-usage).

#### 3. Create a Model Variable

Create a page and create a model variable with Entity type with the below dataset.

[![](/learn/assets/dynamicwidgets/modelvar.png)](/learn/assets/dynamicwidgets/modelvar.png)

#### 4. Drag and drop Tab Widget

1. Drag and drop the tab widget.
2. Under the Properties panel, change the **type** property to **dynamic**. 
3. Now, bind the **dataset value** property under the properties panel to the model variable dataset (Variable created in Step3).

#### 5. Select and Bind

1. Select **Tab Pane** and set the **content** property to the created `modelVariable -> dataset -> tabcontent`.
2. Bind **title** to the `modelVariable -> dataset -> tabtitle`.

#### 6. Create another Partial

1. Create another Partial with the name **PartialEmp**.
2. Drag and drop the DataTable
3. Configure the DataTable with the **Employee**. The Entity data source is present in the database. 
4. Ad a button in the partial
5. And, `onButton` click add another object to the model variable (created in Step3) to add the Tab Pane on button click.

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

#### 7. Preview the App

- Click Preview.
- When you click the **Add new Employee** button beneath an existing records, a separate Tab Pane gets added dynamically to add an Employee record.

:::note
You can also remove the Tab Panes added by removing the item from the Model Variable. For more information, see [Remove Item in Model Variable](/learn/app-development/variables/model-variable#removeitemindex).
:::

## Dynamic Accordion

An Accordion is an interactive component consisting of panels with headers and content sections. You can click these panels to expand and collapse to show the description area.

It is possible to create a fully dynamic and flexible Accordion without much effort. Now, you can bind the dataset to the Accordion widget. Based on the dataset, the number of Accordion Panes will generate.

### Implementating a Usecase

Display list of departments as Accordion Panes and their respective employee details as the Accordion Pane content.

[![](/learn/assets/dynamicwidgets/accordionpreview.gif)](/learn/assets/dynamicwidgets/accordionpreview.gif)

#### 1. Import a DB

Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

#### 2. Create a Partial

1. Create a partial page.
2. Create a variable for the **Employee** Entity present in the database. For more information, see [Creating Variable](/learn/app-development/variables/database-crud/).

#### 3. Add a Page Parameter

Add a page param to the partial page. See the below image for reference.

[![partial page](/learn/assets/dynamicwidgets/partialpage.png)](/learn/assets/dynamicwidgets/partialpage.png)

#### 4. Accessing Variable

1. Open the variable created in Step2.
2. Bind the deptId field in the variable to the added partial page param (the param added in Step3).

[![variable binding](/learn/assets/dynamicwidgets/variablebind.png)](/learn/assets/dynamicwidgets/variablebind.png)

#### 5. Create a page and Variable

1. Create a page
2. Create Variable for the **Department** Entity present in the database. For more information, see [Creating Variable](/learn/app-development/variables/database-crud/).

#### 6. Drag and drop accordion widget

1. Drag and drop accordion widget.
2. Under the properties panel, change the **type** property to **dynamic**. 
3. Bind the **dataset value** property under the properties panel to the department variable dataset (Variable created in Step2).

#### 7. Select and Bind

1. Select Accordion Pane and set the **content** property to the created partial page (the Partial created in Step2).
2. Bind the partial param to the `deptId` of the Department variable dataset.
3. Also, bind the **Title** property of the Tab Pane to the name of the Department Variable dataset.

#### 8. Preview the App

1. Click Preview.
2. You can see the all the departments are displayed as Accordion Pane titles, and the respective Employee's as the accordion pane content.

