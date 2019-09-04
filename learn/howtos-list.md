---
title: "How Tos: List"
id: ""
---

Custom ListThere are various ways to customise your List. We will show an example here - of having a **Data Table within List**. Going with the example of sample database, we will see how to list the department details [![ll_run1](./assets/ll_run1-1024x293.png)](./assets/ll_run1.png) and on click of a department to display the employees of that department in a table format. [![ll_run2](./assets/ll_run2-1024x435.png)](./assets/ll_run2.png)

1. Drag and drop a List
2. Select **HrdbDepartment** as the _Variable data source_
3. Select any **template** of your choice, here we have selected _Email List_
4. Set the **Name** as _Deptcode_; **Time** as _Deptid_ and **Jobtitle** to _Name_
5. Set **Title** as _Department List_, **Items per row** to _3_ and delete unwanted fields in the list from the canvas.
6. Create the following **query** and save as **EmpbyDept**
    
    select FIRSTNAME, LASTNAME from EMPLOYEE where DEPTID = :id
    
    [![ll_query](./assets/ll_query-1024x392.png)](./assets/ll_query.png)
7. Drag and drop a **Data Table** into the List
8. Choose **HrdbExecuteEmpbyDept** (service variable corresponding to the query created earlier) from the Variable list [![ll_dt_data](./assets/ll_dt_data.png)](./assets/ll_dt_data.png)
9. You will be provided with **Readonly Data Table** template option, since the query was select query
10. Bind the **input data** for the HrdbExecuteEmpbyDept to the _deptid from the selectedItem of the List_ [![ll_query_bind](./assets/ll_query_bind.png)](./assets/ll_query_bind.png)
11. Bind the **Show** property of the data table to the following expression. This will ensure that the table is displayed only for the selected list item - take care that the livelist1 matches the list name from previous step
    
    item.deptid === Widgets.livelist1.selecteditem.deptid
    
    [![ll_dt_show](./assets/ll_dt_show-1024x613.png)](./assets/ll_dt_show.png)
12. In design mode, your page should look like this [![ll_design](./assets/ll_design-1024x640.png)](./assets/ll_design.png)
13. Run the app, click on a department and see the table with employee details displayed

Using List MethodsList has few methods exposed on widget scope which can be accessed via JavaScript. For the following script samples, we are considering the hrdb Employee table. EmployeeList is bound to the Live Variable corresponding to the Employee table.

- Clear list data:
    
    $scope.Widgets.EmployeeList.clear(); //Clear the list items.
    
- To select a list item:
    
    $scope.Widgets.EmployeeList.selectItem(0); 
    //Selects first item , the parameter can be index or object.
    
- To deselect item:
    
    $scope.Widgets.EmployeeList.deselectItem(0); 
    //Deselects first item, the parameter can be index or object.
    
- To change navigation:
    
    $scope.Widgets.EmployeeList.navigation = ‘Basic’; 
    //Changes navigation type to Basic.
    
- To interact with widgets of selected item:
    
    $scope.Widgets.EmployeeList.selectedItemWidgets\[0\].Name.caption = ‘Eric’; 
    //Changes caption for Name widget of selected item to ‘Eric’.
    
- Modify selected item:
    
    $scope.Widgets.EmployeeList.selecteditem = 0; 
    //selects first item in the list.
    
- To change value of currentItem: Note: currentItem and currentItemWidgets can’t be accessed through script. But those were given as parameters for events of widgets inside list widget template. currentItem is given as item in the arguments.
    
    item.username = ‘Eric’; //Sets username field value to ‘Eric’;
    
- To change caption of username widget for currentItem: Note: currentItem and currentItemWidgets can’t be accessed through script. But those were given as parameters for events of widgets inside list widget template. currentItem is given as item in the arguments.
    
    currentItemWidgets.Name.caption = ‘Eric’; 
    //Sets caption of Name widget to Eric.
    
- To preserve the reordered list: Enable reorder allows user to change the order of the items in the List in runtime, but the order after reordering do not persist after refresh. _onReorder_ callback event is triggered when the order of the items in the List is changed. In script, $data parameter has the complete order after each reorder. This data can be used to make the reorder permanent.
    
    $scope.livelist1Reorder = function ($event, $data) { 
          //$data is the newly reordered array of items.
    };
