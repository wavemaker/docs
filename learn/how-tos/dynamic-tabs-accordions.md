---
title: "Using Dynamic Tabs and Accordions"
id: ""
sidebar_label: "Dynamic Tabs and Accordions"
---
---

## Dynamic Tabs

Tab is an essential navigation element of every web application. WaveMaker provides a really flexible and powerful Tab component. It is possible to create a fully dynamic tab component using a data source.

Now you can bind the dataset to the tabs widget. Based on the dataset, a number of Tab panes are generated.

:::note
If static values are to be given for the **dataset value**(ex: comma seperated values) it is better to use static tab widget. For more information, see [Static Tabs](/learn/app-development/widgets/container/tabs)
:::

### Tabs Usecase

Dynamically open new tab pages based on user interaction. When you select a row in the  datatable, the details of respective department employees are displayed in separate tab pages that get added dynamically.

[![tabs preview](/learn/assets/dynamicwidgets/tabspreview.gif)](/learn/assets/dynamicwidgets/tabspreview.gif)

#### 1. Import DB

- Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

#### 2. Create a Partial and Configure Card Widget

- Create a [Partial](/learn/app-development/ui-design/page-concepts/partial-pages) page and name it **PartialEmployee**.

- Drag and drop Card and bind it to the **Employee** Entity present in the database and configure Card Widget. For more information, see [Configure Card](/learn/app-development/widgets/datalive/cards/card-basic-usage).

- Add partial param for the partial page as deptId with integer type.
[![partial page](/learn/assets/dynamicwidgets/partialpage.png)](/learn/assets/dynamicwidgets/partialpage.png)

- From the variable dialog, for the **Employee** variable under FilterCriteria bind the deptId to the `pageParams.deptId`.

#### 3. Create a Page and Model Variable

- Create a Page and create a Model Variable with an Entity type with the below dataset.

[![model variable](/learn/assets/dynamicwidgets/modelvar.png)](/learn/assets/dynamicwidgets/modelvar.png)

#### 4. Configure Datatable

- Drag and drop datatable and set the datasource as **Department** Entity present in the database. For more information, see [Configure Datatable](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage)

#### 5. Configure Dynamic Tab

- Drag and drop the Tab widget. Under **Properties** panel, change the **Type** property to **Dynamic**.

- Now, bind the **Dataset Value** property in the **Properties** panel to the Model Variable dataSet (Variable created in Step3). Also bind the **Default pane index** proeprty to the `Variables.DepartmentsInfo.dataSet.length`.

- Select **Tab Pane** and bind the **Title** property to the model variable `Variables.DepartmentsInfo.dataSet[$i].name`

- Set the **content** property of the tabpane to the created partial page (created in Step2) and also bind the **deptId** to `Variables.DepartmentsInfo.dataSet[$i].deptId`

#### 6. Add selected department info to the model

- Select Department datatable present in the page and configure **onRowSelect** Event as JavaScript and add below code

```js
Page.DepartmentTable1Rowselect = function($event, widget, row) {
    var flag = false;
    Page.Variables.DepartmentsInfo.dataSet.find(function(item) {
        if (row.name == item.name) {
            flag = true;
        }
    });

    if (!flag) {
        Page.Variables.DepartmentsInfo.addItem({
            name: row.name,
            deptId: row.deptId
        });
    }
};
```

#### 7. Preview the App

- Click Preview.

- When you select the rows in the department table, a separate Tab Pane gets added dynamically to view Employee record.

:::note
You can also remove the Tab Panes added by removing the item from the Model Variable. For more information, see [Remove Item in Model Variable](/learn/app-development/variables/model-variable#removeitemindex).
:::

## Dynamic Accordion

An Accordion is an interactive component consisting of panels with headers and content sections. You can click these panels to expand and collapse to show the description area.

It is possible to create a fully dynamic and flexible Accordion without much effort. Now, you can bind the dataset to the Accordion widget. Based on the dataset, a number of Accordion Panes will generate.

:::note
The above usecase of dynamic tabs can be implemented for dynamic accordions as well.
:::

