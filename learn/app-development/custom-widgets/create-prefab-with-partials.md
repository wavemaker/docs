---
title: "Creating Prefabs with Partials"
id: ""
sidebar_label: "Create Prefab with Partials"
---

[Prefabs](/learn/app-development/custom-widgets/prefabs-overview) are reusable application parts that can be easily integrated into your applications. To learn how Prefabs can be created in WaveMaker, see [Creating Prefabs](/learn/app-development/custom-widgets/creating-prefabs).

<!--truncate-->

## Need for Partials within Prefabs

Until now, we did not allow users to create [partials](/learn/app-development/ui-design/page-concepts/partial-pages) inside Prefabs. The only page you have access to is the Main Page where all code exists. Due to this, the following problems can be seen:
* Difficulty in maintainability and collaboration with others due to conflicts as and when the Prefab size keeps increasing.
* Same Prefab can be used in both Web and Mobile applications, so wouldn't it be better to have a clear segregation between both of them ?
* Use cases like [Data Table with Row Expansion](/learn/how-tos/how-to-configure-row-expansion-in-a-data-table) and [Page Dialogs](/learn/app-development/widgets/modal-dialogs/modal-windows-dialogs#page-dialog) are not possible in Prefabs.

## Creating Partials

As of Wavemaker 10.6.9, we have added support for Partials to be created inside Prefab projects. This allows Users to create even more powerful Prefabs. The following types of Partial Pages can be created.

![PartialTypes](/learn/assets/partialTypes.png)

As you can see, we only allow creation of Partials and Widget Templates. Partials can be created to be used with widgets such as Containers, Popovers, Page Dialogs etc. [Widget Templates](/learn/how-tos/custom-widget-template) can be created to be used with widgets such as Search, Radioset, Checkboxset widgets to customize the look and feel.

[Template bundles](/learn/app-development/ui-design/page-concepts/creating-template-bundles) containing Partials and Widget Templates can be imported into a Prefab Project. Since a Prefab can be used in both web and mobile applications, we can choose the Platform Type while using an imported template to create a Partial/Widget Template.

## Use Cases

The following Use Cases explain how having partials within Prefab makes life easier.

### Different Partials for Web and Mobile

Let us build a Prefab which shows the Employee List as a Data Table widget in Laptop/Tablet Landscape and Large Screens, and as a List widget in Mobiles and Tablet Portrait view. 

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough])
2. Enter a name and description for the Prefab
3. Import [HRDB Swagger](/learn/how-tos/consuming-existing-wm-api-into-another-wm-project) from a Project which uses HRDB so that we can use the Employees API.
4. Creating the Web Partial: 
   - Click on the **+** icon from **Pages** tab and create a Partial called webPartial.
   ![WebPartial](/learn/assets/webPartial.png)
     
   - Create a [Variable](/learn/app-development/variables/crud-variable) inside webPartial for Employee Entity.
     ![WebVariable](/learn/assets/webVariable.png)
     
   - Drag and Drop a Data Table widget inside this partial and bind it to the created Employee Variable.
     ![WebPartialDataTable](/learn/assets/webPartialDataTable.png)
     
5. Creating the Mobile Partial:
   - Click on the plus icon besides **Pages** and create a Partial called mobilePartial.
     ![MobilePartial](/learn/assets/mobilePartial.png)

   - Create a [Variable](/learn/app-development/variables/crud-variable) inside mobilePartial for Employee Entity.
     ![MobileVariable](/learn/assets/mobileVariable.png)
     
   - Drag and Drop a List widget inside this partial and bind it to the created Employee Variable.
     ![MobilePartialList](/learn/assets/mobilePartialList.png)
     
6. Go to Main Page and Drag and Drop a **Container** widget. 
   - Choose content as **webPartial**.
     ![WebPartialContainer](/learn/assets/webPartialContainer.png)
   
   - Go to Device tab and choose Show in device as Laptop\Tablet Landscape and Large Screen.
     ![WebPartialDeviceConfiguration](/learn/assets/webPartialDeviceConfig.png)
     
7. Drag and Drop another **Container** widget in Main Page.
   - Choose content as **mobilePartial**.
     ![MobilePartialContainer](/learn/assets/mobilePartialContainer.png)
     
   - Go to Device tab and choose Show in device as Mobile and Tablet Portrait.
     ![MobilePartialDeviceConfiguration](/learn/assets/mobilePartialDeviceConfig.png)
     
8. Preview the App. You will see that the Laptop view shows us the Data Table which is inside webPartial, and the Mobile view shows us the List which is inside mobilePartial.
   - Web View
   ![WebView](/learn/assets/webPartialPreview.png)
     
   - Mobile View
   ![MobileView](/learn/assets/mobilePartialPreview.png)
     
This is how you can have different partials for different viewports and keep your code segregated.

### Data Table with Row Expansion

Let us build a Prefab which shows Departments from HRDB in a Data Table. On expanding each Department, we see a list of Employees belonging to that particular Department.

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough])
2. Enter a name and description for the Prefab
3. Import [HRDB Swagger](/learn/how-tos/consuming-existing-wm-api-into-another-wm-project) from a Project which uses HRDB so that we can use the Employees API.
4. Creating a Partial for Row Expansion.
    - Click on the **+** icon from **Pages** tab and create a Partial called EmployeePartial.
    - Create a Page param **deptID** of type **integer** in the partial to bind the Department ID.
      ![PageParamPartial](/learn/assets/PageParam-Partial.png)
      
    - Create a [Variable](/learn/app-development/variables/crud-variable) inside EmployeePartial for **findAssociatedEmployees** method inside Department. Check Update data on input change, and uncheck Request data on page load.
    - Now, set **deptId** in the variable's Input Fields in Data tab to **deptID** from page params, as shown in the image below:
      ![PrefabPartialBindDialog](/learn/assets/prefabPartialBindDialog.png)

5. Configure row expansion property.
    - Go to Main Page.
    - Create a [Variable](/learn/app-development/variables/crud-variable) for Department Entity.
    - Drag and Drop a Data Table widget and bind it to the created Department Variable.
    - Go to Advanced Settings of the Data Table.
    - Navigate to the Row Detail tab.
    - Enable Row Expansion property.
    - Content → EmployeePartial.
    - Partial Params → deptID → click on the Bind Property icon.
    - Go to the Widgets tab → DepartmentTable → selecteditem → deptid → click Bind.

   ![TableRowExpansion](/learn/assets/Bind_tablerow_value_RowExp.png)

6. Preview the App. You'll see the Data Table showing the list of Departments. On expanding a Department, we can see the Employees belonging to that Department in a List.
![PrefabDataTableWithRowExpansion](/learn/assets/prefabDataTableWithRowExpansion.png)

## Accessing Prefab Properties inside Partials

Main Page already has access to the Prefab properties. Let us see how Partials can access these properties.

### Design Tab
The following Prefab has two properties, Prop1 and Prop2.

![PrefabPropertiesDialog](/learn/assets/prefabpropertiesdialog.png)

These properties are available to be used in the Partials created inside the Prefab, as shown below.

![PartialBindDialog](/learn/assets/prefabpropertiesinsidepartial.png)

### Script Tab
Prefab Properties, Events and Methods can be accessed inside the Partial script as shown below.
```js   

Partial.onReady = function () {
    // Prefab object is exposed to the Partial as Partial.Prefab
    console.log(Partial.Prefab);
    // this is how Prefab Properties can be accessed within Prefab Partials
    console.log(Partial.Prefab.prop1);
    // this is how Prefab methods can be accessed within Prefab Partials
    console.log(Partial.Prefab.myMethod());
};
```
