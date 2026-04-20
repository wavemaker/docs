---
title: "How to Create Partials in a Prefab"
id: "create-prefab-with-partials"
sidebar_label: "Creating Partials in a Prefab"
---
---
In this document, the following two use cases explain how to use [Partials in a Prefab](/learn/app-development/custom-widgets/prefab-with-partials).

1. [Partials in Web and Mobile](#partials-in-web-and-mobile)
2. [Using Partial for Data Table with Row Expansion](#data-table-with-row-expansion)

## Partials in Web and Mobile

To build a Prefab for the web and mobile, you develop different partials for different viewports, which helps segregate the code.

**For Web**: Display employees list in a *Data Table* when used in laptops, tablets, or large screens in the landscape mode.  

**For Mobile**: Display the same employee list in a *List* widget for mobile phones and tablets in portrait mode. 

#### Create a Prefab and connect to a DataSource

1. Go to Prefabs tab and click **Create** from the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough]).
2. Enter the name and description for the Prefab.
3. Import [HRDB Swagger](/learn/how-tos/consuming-existing-wm-api-into-another-wm-project) from a Project for using the Employees API.

### Partial of Web

Creating a Web Partial.

1. Click **+** from the **Pages** tab and create a Partial called `webPartial`.

![WebPartial](/learn/assets/webPartial.png)  

2. Create a [Variable](/learn/app-development/variables/crud-variable) inside `webPartial` for the Employee Entity.

![WebVariable](/learn/assets/webVariable.png)  

3. Drag and drop the Data Table widget inside the partial and bind it to the created Employee Variable.  

![WebPartialDataTable](/learn/assets/webPartialDataTable.png)

4. Go to the Main page and drag and drop a **Container** widget.

5. Choose content as **webPartial**.

![WebPartialContainer](/learn/assets/webPartialContainer.png)

6. Go to the Device tab and choose a **Show in device** property as **Laptop\Tablet Landscape** and **Large Screen**.

![WebPartialDeviceConfiguration](/learn/assets/webPartialDeviceConfig.png)

7. Preview the App. The Laptop view shows us the Data Table, which is inside `webPartial`.

![WebView](/learn/assets/webPartialPreview.png)

### Partial for Mobile

Creating the Mobile Partial.

1. Click **+** from the **Pages** tab and create a Partial called `mobilePartial`.

![MobilePartial](/learn/assets/mobilePartial.png)

2. Create a [Variable](/learn/app-development/variables/crud-variable) inside `mobilePartial` for the Employee Entity.

![MobileVariable](/learn/assets/mobileVariable.png)
  
3. Drag and Drop a List widget inside this partial and bind it to the created Employee Variable.

![MobilePartialList](/learn/assets/mobilePartialList.png)

4. Go to the Main Page and drag and drop a **Container** widget.

5. Choose the content as **mobilePartial**.

![MobilePartialContainer](/learn/assets/mobilePartialContainer.png)
     
6. Go to the Device tab and choose **Show in device** as Mobile and Tablet Portrait.

![MobilePartialDeviceConfiguration](/learn/assets/mobilePartialDeviceConfig.png)
    
7. Preview the App. The Mobile view shows us the List which is inside `mobilePartial`.
   
![MobileView](/learn/assets/mobilePartialPreview.png)

## Data Table with Row Expansion

Build a Prefab that shows Departments from a Data Table. On expanding each Department, see a list of Employees belonging to that particular Department.

1. Click **Create** from the _Prefab_ tab of the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough]).
2. Enter a name and description for the Prefab.
3. Import [HRDB Swagger](/learn/how-tos/consuming-existing-wm-api-into-another-wm-project) from a Project which uses HRDB to use the Employees API.
4. Creating a Partial for Row Expansion.
    - Click the **+** icon from the **Pages** tab and create a Partial called EmployeePartial.
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

6. Preview the App. You'll see the Data Table showing the list of Departments. On expanding the Department, we can see the Employees belonging to that Department in a list.

![PrefabDataTableWithRowExpansion](/learn/assets/prefabDataTableWithRowExpansion.png)

## See Also

[What are Prefabs](/learn/app-development/custom-widgets/prefabs-overview)  
[How to Create Prefabs](/learn/app-development/custom-widgets/creating-prefabs)  
[Prefab with Partials](/learn/app-development/custom-widgets/prefab-with-partials)  