---
title: "Using Dynamic Tabs and Accordions"
id: "dynamic-tabs-accordions"
sidebar_label: "Dynamic Tabs and Accordions"
---
---

## Dynamic Tabs

Tab is an essential navigation element of every web application. WaveMaker provides a really flexible and powerful Tab component. It is possible to create a fully dynamic tab component using a data source.

Now you can bind a dataset to the Tabs widget. Based on the dataset, a number of Tab panes are generated.

:::note
To provide static values for the **dataset value**, we recommend you use a static tab widget. For example, comma-separated values. For more information, see [Static Tabs](/learn/app-development/widgets/container/tabs).
:::

## Tabs Usecase

Dynamically open new tab pages based on user interaction. When you select a row in a Datatable, the details of the respective department employees are displayed in separate tab pages that get added dynamically.

[![tabs preview](/learn/assets/dynamicwidgets/tabspreview.gif)](/learn/assets/dynamicwidgets/tabspreview.gif)

### 1. Import DB

- Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

### 2. Create a Partial and Configure Card Widget

- Create a [Partial](/learn/app-development/ui-design/page-concepts/partial-pages) page and name it **PartialEmployee**.

- Drag and drop the **Card** widget. Bind it to the **Employee** Entity from the [imported database](/learn/how-tos/dynamic-tabs-accordions#1-import-db) and configure the **Card** widget. For more information, see [Configure Card](/learn/app-development/widgets/datalive/cards/card-basic-usage).

- Select Partial. Add a Partial param for the Partial page as **deptId** with an `integer` type.

[![partial page](/learn/assets/dynamicwidgets/partialpage.png)](/learn/assets/dynamicwidgets/partialpage.png)

- Go to the Variable dialog. For the **Employee** variable under **FilterCriteria**, bind the **deptId** to the `pageParams.deptId`.

[![partial bind](/learn/assets/partialbind.png)](/learn/assets/partialbind.png)

### 3. Create a Page and Model Variable

- Create a Page and create a Model Variable with an Entity type of the below specified dataset.

[![model variable](/learn/assets/dynamicwidgets/modelvar.png)](/learn/assets/dynamicwidgets/modelvar.png)

### 4. Configure Datatable

- Drag and drop Datatable and set the datasource as **Department** Entity from the [imported database](/learn/how-tos/dynamic-tabs-accordions#1-import-db). For more information, see [Configure Datatable](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage).

### 5. Configure Dynamic Tab

- In a same page, drag and drop the **Tabs** widget.

- Select the **Tabs** widget and navigate to the **Properties** panel.

- Change the **Type** property to the **Dynamic** type from the dropdown.

- From the **Dataset** section of the properties, bind the **Value** property to the Model Variable dataSet. The Variable created in [Step-3](/learn/how-tos/dynamic-tabs-accordions#3-create-a-page-and-model-variable).

- From the **Behavior** section of the properties, bind the **Default Pane Index** property to `Variables.DepartmentsInfo.dataSet.length` using the **Use Expression** tab.

[![model variable](/learn/assets/use-expression-length.png)](/learn/assets/use-expression-length.png)

- Select **Tab Pane** and bind the **Title** property to the [Model Variable](Variables.DepartmentsInfo.dataSet[$i].name) to `Variables.DepartmentsInfo.dataSet[$i].name`.

- Set the **Content** property of the Tab Pane to the Partial page [created in Step-2](/learn/how-tos/dynamic-tabs-accordions#2-create-a-partial-and-configure-card-widget) by binding the **deptId** to `Variables.DepartmentsInfo.dataSet[$i].deptId`.

### 6. Add Selected Department Info to the Model

- Select the Department Datatable on the page.

- Configure the **onRowSelect** Event as JavaScript, and add the below code.

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

### 7. Preview the App

- Click Preview.

- When you select the rows in the department table, a separate Tab Pane gets added dynamically to view Employee record.

:::note
You can also remove the Tab Panes added by removing the item from the Model Variable. For more information, see [Remove Item in Model Variable](/learn/app-development/variables/model-variable#removeitemindex).
:::

## Dynamic Accordion

In the same way, you can create a fully dynamic and flexible Accordion without much efforts. Simply bind a dataset to the Accordion widget. Based on the dataset, a number of Accordion Panes will generate.

An Accordion is an interactive component consisting of panels with headers and content sections. You can click these panels to expand and collapse to show the description area. 

:::note
The same usecase of the Dynamic Tabs can be implemented for the Dynamic Accordions as well.
:::

