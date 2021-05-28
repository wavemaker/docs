---
title: "Using Dynamic Tabs and Accordions"
id: ""
sidebar_label: "Dynamic Tabs and Accordions"
---
---

## Dynamic Tabs

Tab is an essential navigation element of every web application. WaveMaker provides a really flexible and powerful Tab component. It is possible to create a fully dynamic tab component using a data source.

Now you can bind the dataset to the tabs widget. Based on the dataset, a number of Tab panes are generated.

### Tabs Usecase

Dynamically open new tab pages based on user interaction. When you click the **Add New Employee** or **edit** button beneath the existing records, the editing should occur in separate tab pages that get added dynamically.

[![tabs preview](/learn/assets/dynamicwidgets/tabspreview.gif)](/learn/assets/dynamicwidgets/tabspreview.gif)

#### 1. Import DB

- Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

#### 2. Create a Partial and Configure Live Form

- Create a [Partial](/learn/app-development/ui-design/page-concepts/partial-pages) page and name it **PartialNewEmp**.
- Drag and drop LiveForm and bind it to the **Employee** Entity present in the database. For more information, see [Configure LiveForm](/learn/app-development/widgets/datalive/live-form/live-form-basic-usage).

#### 3. Create a Model Variable

Create a Page and create a Model Variable with an Entity type with the below dataset.

[![](/learn/assets/dynamicwidgets/modelvar.png)](/learn/assets/dynamicwidgets/modelvar.png)

#### 4. Drag and Drop Tab Widget

- Drag and drop the Tab widget.
- In the **Properties** panel, change the **Type** property to **Dynamic**.
- Now, bind the **Dataset Value** property in the **Properties** panel to the Model Variable dataset (Variable created in Step3).

#### 5. Select and Bind

- Select **Tab Pane** and set the **Content** property to the created `modelVariable -> dataset -> tabcontent`.
- Bind **Title** to the `modelVariable -> dataset -> tabtitle`.

#### 6. Create Another Partial

- Create another Partial with the name **PartialEmp**.
- Drag and drop the DataTable.
- Configure the DataTable with the **Employee**. The Entity data source is present in the database.
- Add a button in the Partial.
- And, `onButton` click add another object to the Model Variable (created in Step3) to add the Tab Pane on button click.

For more information, see [AddItem in Model Variable](/learn/app-development/variables/model-variable#additemvalue-index).

```js
Partial.button1Click = function($event, widget) {
    Partial.App.activePage.Variables.TabsInfo.addItem({
        "tabtitle": "Add Employee",
        "tabcontent": "PartialNewEmp"
    }, 1);
};
```

:::note
Adding the above object at index 1 in the Model Variable.
:::

#### 7. Preview the App

- Click Preview.
- When you click the **Add New Employee** button beneath the existing records, a separate Tab Pane gets added dynamically to add an Employee record.

:::note
You can also remove the Tab Panes added by removing the item from the Model Variable. For more information, see [Remove Item in Model Variable](/learn/app-development/variables/model-variable#removeitemindex).
:::

## Dynamic Accordion

An Accordion is an interactive component consisting of panels with headers and content sections. You can click these panels to expand and collapse to show the description area.

It is possible to create a fully dynamic and flexible Accordion without much effort. Now, you can bind the dataset to the Accordion widget. Based on the dataset, a number of Accordion Panes will generate.

### Accordion Usecase

Display list of departments as Accordion Panes and their respective employee details as the Accordion Pane content.

[![preview](/learn/assets/dynamicwidgets/accordionpreview.gif)](/learn/assets/dynamicwidgets/accordionpreview.gif)

#### 1. Import a DB

- Navigate to the Databases section and import **Sample HR database**. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

#### 2. Create a Partial

- Create a [Partial](/learn/app-development/ui-design/page-concepts/partial-pages) page.
- Create a Variable for the **Employee** Entity present in the database. For more information, see [Creating Variable](/learn/app-development/variables/database-crud/).

#### 3. Add a Page Parameter

Add a page param to the Partial page. See the below image for reference.

[![partial page](/learn/assets/dynamicwidgets/partialpage.png)](/learn/assets/dynamicwidgets/partialpage.png)

#### 4. Accessing Variable

- Open the Variable created in Step2.
- Bind the `deptId` field in the Variable to the added Partial page param (the param added in Step3).

[![variable binding](/learn/assets/dynamicwidgets/variablebind.png)](/learn/assets/dynamicwidgets/variablebind.png)

#### 5. Create a Page and Variable

- Create a Page.
- Create Variable for the **Department** Entity present in the database. For more information, see [Creating Variable](/learn/app-development/variables/database-crud/).

#### 6. Drag and Drop Accordion Widget

- Drag and drop Accordion widget.
- In the **Properties** panel, change the **Type** property to **Dynamic**.
- Bind the **Dataset Value** property in the Properties panel to the Department Variable dataset (Variable created in Step2).

#### 7. Select and Bind

- Select Accordion Pane and set the **Content** property to the created Partial page (the Partial created in Step2).
- Bind the Partial param to the `deptId` of the Department Variable dataset.
- Also, bind the **Title** property of the Tab Pane to the name of the Department Variable dataset.

#### 8. Preview the App

- Click Preview.
- You can see that all the departments are displayed as Accordion Pane titles, and the respective Employee's as the Accordion Pane content.

