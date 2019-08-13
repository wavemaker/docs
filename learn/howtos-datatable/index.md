---
title: "How Tos: Data Table"
id: "howtos-datatable"
---

Customising Data Table using Advanced SettingsData Table widget allows you to customise the columns. The customisation options are available from the **Settings** property of a **Table**

Customisation of Data Table can be in terms of:

- to represent the edit and display options
- options for custom fields
- of the columns using Class and Conditional Class definitions

- **Column**

We will be using a Data Table bound to Employee Live Variable from the sample database that ships with WaveMaker. The Data Table displays the following fields: Firstname, Lastname, Zip, Birthdate, Picurl, Department Name, and Department Budget.

[![dt_as](../assets/dt_as-1024x640.png)](../assets/dt_as.png) Widgets for Edit and Display of ColumnsWidgets can be used for two purposes:

- **Options**: This option is available for _Editable Data Table_ This defines the _for data input_ by the user. The options include , , , , , , , , , and These behave the same way as for a Live Form.
- **Options**: View option defines the presentation of data to the user. The available options are: , , and

## widget options

- _Class_ - style class for the entire column
- _Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Source_ - by default it is populated with the column name, it can be replaced with any external source path.
- _Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

## widget options

- _Class_ - style class for the entire column
- _Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Title_ - title to be displayed on the button at run-time, set by default to the column name, can be edited as per the needs
- _Icon_ - icon name, including the class name for example: glyphicon glyphicon-home
- _Action_ - method, as defined in Script, to be invoked on the click event of the button. The method will be auto-generated upon the selection of JavaScript option with a parameter set to
- _Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

## widget options

- _Class_ - style class for the entire column
- _Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- \- code example given to disable the checkbox in the table
- _Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

## Example

We will customise the Data Table:

- field as a primary button
- field as danger button with a click event triggering the display of alert notification variable
- as an image widget

[![dt_widget_run](../assets/dt_widget_run-1024x640.png)](../assets/dt_widget_run.png) Click on the any Lastname button [![dt_widget_run2](../assets/dt_widget_run2-1024x640.png)](../assets/dt_widget_run2.png)

1. field as a primary button [![dt_button](../assets/dt_button.png)](../assets/dt_button.png)
2. field as danger button with a click event triggering the display of alert notification variable: Set the Widget to button, Widget class to btn-danger, Widget Action to New Notification Variable. Design the Notification Variable to display an alert box with the message 'Testing' [![dt_button_danger](../assets/dt_button_danger.png)](../assets/dt_button_danger.png)[![dt_button_alert](../assets/dt_button_alert.png)](../assets/dt_button_alert.png)
3. as an image widget, [![dt_widget_image](../assets/dt_widget_image.png)](../assets/dt_widget_image.png)

Column Formatting OptionsThe Format options available are: prefix, suffix, toCurrency, toDate and toNumber. Depending upon the option selected further choices open up:

## /Suffix Options:

- /Suffix value can be specified

## Options:

- by name can be selected from the drop-down list and the currency symbol will be inserted in the column
- Size can be set

## Options:

- Pattern can be selected from the drop-down list

## Options:

- Size can be set

Be aware that these format types selected are only for display purpose. During runtime, edit row will display the values as defined at the data source.

## Example

We will customise the Data Table:

1. 1. with a prefix of ‘US-‘
    2. formatted to toDate with Date Pattern as ‘yyyy, MMM dd’
    3. Name with a suffix of ‘Dept’
    4. Budget formatted as toCurrency with ‘USD’ symbol and Fraction Size ‘2’

[![dt_format_run](../assets/dt_format_run-1024x640.png)](../assets/dt_format_run.png)

- with a prefix of ‘US-‘, [![dt_format_pre](../assets/dt_format_pre.png)](../assets/dt_format_pre.png)
- formatted to toDate with Date Pattern as ‘yyyy, MMM dd’, [![dt_format_date](../assets/dt_format_date.png)](../assets/dt_format_date.png)
- Name with a suffix of ‘Dept’, [![dt_format_suff](../assets/dt_format_suff.png)](../assets/dt_format_suff.png)
- Budget formatted as toCurrency with ‘USD’ symbol and Fraction Size ‘2’ [![dt_format_curr](../assets/dt_format_curr.png)](../assets/dt_format_curr.png)

Column Styling OptionsStyling options include

- for the column which can be specified in terms of the **Unit** - or _%_
- **Alignment** of the column content
- color for the column can be set
- for styling the field, this needs to be under the Style tab of the Page
- **Class** for custom styling the column based on a condition

## Example

We will customise the Data Table:

- - Budget column to be displayed in pink color
    - column to be in blue when the value is 90028

[![dt_style_run](../assets/dt_style_run-1024x640.png)](../assets/dt_style_run.png)

The following style classes have been defined from the Style tab:

 {
    background-color: #F8E0E0;
}
.blue {
    background-color: #CEF6F5;
}
.green {
    background-color: #D8F6CE;
}

[![dt_style](../assets/dt_style.png)](../assets/dt_style.png)

From the Advanced Settings dialog:

1. Department Budget field and set the Class under Style tab to pink [![dt_style_class](../assets/dt_style_class.png)](../assets/dt_style_class.png)
2. _Column Classes_ - specify the style class name to be applied to select rows satisfying the given condition. For example, you want to display the cell for Zip value of 90028 in blue [![dt_style_cond](../assets/dt_style_cond.png)](../assets/dt_style_cond.png)

Table and Column ActionsActions Tab can be used to define the actions at grid and row level. By default the following actions are given:

- table-level action to insert rows into the database table
- and to modify and delete rows

You can add custom actions:

- **Table Actions** are button type widgets with click to be specified in the Script. The of these buttons can be specified to be in the or
- **Actions** come with an icon and Action to be performed on click specified in the Script. **Layout** can be defined in terms of , \- first or last column, column and can be specified.

## Example

We will add a Row Action to display an alert message on click. [![dt_actions_run2](../assets/dt_actions_run2-1024x640.png)](../assets/dt_actions_run2.png)

- Row Action and set the Action to trigger Javascript, click the message to open Script [![dt_actions](../assets/dt_actions.png)](../assets/dt_actions.png)
- Action will be a JS function as shown below. Here we have written a function to display an alert dialog. The name of the function is the action field entry in the custom button created earlier.
    
    $controller("grid1Controller", \["$scope",
        function($scope) {
            "use strict";
            $scope.ctrlScope = $scope;
            $scope.sample = function() {
                alert('Hello');
            }
        }
    \]);
    
    [![dt_actions_js](../assets/dt_actions_js-1024x640.png)](../assets/dt_actions_js.png)

Role-based Access to ColumnsIf you [has been enabled](/learn/app-security/#permissions) in your app, then you can define the app role which has access to a specific column.

[![dt_security](../assets/dt_security.png)](../assets/dt_security.png) the Data Table call back EventsData Grid has few methods exposed on widget scope which can be accessed via JavaScript. Data Table behavior can be customised with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

[![dt_events](../assets/dt_events.png)](../assets/dt_events.png)

 

and JavaScript Usage

show

event will be called when the Data Table is shown.

$scope.\[gridname\]Show = function() {
        //Display a message to the effect
        console.log("Data Table has been displayed");
    };

hide

event will be called when the Data Table is hidden.

$scope.\[gridname\]Hide = function() {
        //Display a message to the effect
        console.log("Data Table has been hidden");
    };

select

event will be called when a row from Data Table is selected

$scope.\[gridname\]Select = function($event, $data) {
        //$data: $data has the selected row data. $data has also the index of the row
        // Note: Row selection will happen on click of a cell. So, cell element is present in $event.
        //Printing the selected row data and its index

        console.log(“The row data with index:”, $data.index , $data); 
    };

deselect

event will be called when a row from Data Table is deselected

$scope.\[gridname\]Deselect = function($event, $data) {
        //$data has the deselected row data. $data has also the index of the row
        // Note: Row deselection will happen on click of a cell. So, cell element is present in $event.
        //Printing the deselected row data and its index
        console.log(“The row data with index:”, $data.index , $data); 
    };

data sort

event will be called when the Data Table header is clicked to sort by a particular column.

$scope.grid1Sort = function($event, $data) {
        //$data: $data has sorted data information returned from server

        // Note: Column selection will happen on click of the header. So, column element is present in $event.
        //Printing the sorted data
        console.log(“The sort column data:”, $data); 
    };

header click

event will be called when the Data Table header is clicked.

$scope.\[gridname\]Headerclick = function($event, $data) {
         //$data has the column definition data of the corresponding clicked header
        // Note: Column selection will happen on click of the header. So, column element is present in $event.

        //Printing the selected column field and the column definition
        console.log(“The column data with column field:”, $data.field , $data); 
    };

row click

event will be called when a row in Data Table is clicked. Note this event can happen when selecting or deselecting a row.

$scope.\[gridname\]Rowclick = function($event, $data) {
        //$data has the data of the row which is clicked and the index of the row
        // Note: Row selection will happen on click of a cell,. So, cell element is present in $event.

       //Printing the clicked row data and its index
        console.log(“The clicked row data with index:”, $data.index , $data); 
    };

row double click

event will be called when a row in Data Table is double clicked.

$scope.\[gridname\]Rowdblclick = function($event, $data) {
        //$data has the data of the row which is clicked and the index of the selected row
        // Note: Row selection will happen on click of a cell. So, cell element is present in $event.

       //Printing the clicked row data and its index
        console.log(“The clicked row data with index:”, $data.index , $data); 
    };

column select

event will be called when a column in Data Table is selected.

$scope.\[gridname\]Columnselect = function($event, $data) {
        //$data has the object containing data and colDef. 
        //data has the selected column data. colDef has the selected column definition

        //Printing the selected column data and field name

        console.log(“The column data with column field:”, $data.colDef.field , $data.data);
    };

column deselect

event will be called when a column in Data Table is deselected.

$scope.\[gridname\]Columndeselect = function($event, $data) {
        //$data: $data has the object containing data and colDef. data has the selected column data. colDef has the selected column definition

        //Printing the selected column data and field name
        console.log(“The column data with column field:”, $data.colDef.field , $data.data);
    };

record delete

event will be called when a record is deleted from the underlying data entity. Note this event will be triggered for Editable Data Table with delete action defined.

$scope.\[gridname\]Rowdeleted = function($event, $data) {
        //$data: $data has the data of the row deleted
        //Printing the deleted row data 
        console.log(“The deleted row data:”, $data);
    };

before record insert

event will be called before a new record is inserted in the underlying data entity. Note this event is triggered for Editable Data Table with insert action defined. Use Case: Populate the date modified or modified user to the current date or logged in user

$scope.\[gridname\]Beforerowinsert = function($event, $data) {
        //$data has the data of the new record to be inserted. This data can be modified and validated before sending the request

        //On before insert row, modify the data 
        $data.dateModified = Date.now(); //Set today's date as modified date field
    };

after record insert

event will be called after a new record is inserted in the underlying data entity. Note this event is triggered only for Editable Data Table with insert action defined.

$scope.\[gridname\]Rowinsert = function($event, $data) {
        //$data: $data has the data of the the new record inserted.

        //Printing the inserted row data 
        console.log(“The inserted row data:”, $data);
    };

before record update

event will be called before a record is updated to the underlying data entity.. Note this event is triggered only for Editable Data Tables with update action defined.

$scope.\[gridname\]Beforerowupdate = function($event, $data) {
        //$data has the data of the the record to be updated. This data can be modified and validated before sending the request

        //On before update row, modify the data 
        $data.dateModified = Date.now(); //Set today's date as modified date
    };

after record update

event will be called after a record is updated to the underlying data entity. Note this event is triggered only for editable Data Tables with update action defined.

$scope.\[gridname\]Rowupdate = function($event, $data) {
        //$data has the data of the the record updated.

        //Printing the deleted row data 
        console.log(“The deleted row data:”, $data);
    };

before data render

event will be called the before the data is rendered in the Data Grid. Note the data accessible is restricted to the current page of the Data Grid. Use Case: If you want to change the display value based upon the values of a column

$scope.\[gridname\]Setrecord = function($event, $data) {
        //$data: $data has the data returned from variable. This data can be modified before rendering the data table.

        //Modify the data in required format. This modified data will be rendered in data table
        $data.forEach(function(obj) {
            if (obj.age <= 5) { obj.age = 'younger'; } else if (obj.age > 5 && obj.age <= 10) {
                obj.age = 'young';
            } else {
                obj.age = 'older';
            }
        });
    };

data render

event will be called when the data is rendered in the Data Table. Note: This gives access to data displayed on the current page of the Data Table Use Case: You can use this event to add a class to a particular row.

$scope.\[gridname\]Datarender = function($isolateScope, $data) {
        //$isolateScope: $isolateScope of the data table
        //$data: $data has the data to be rendered in the current page of data table

        //$isolateScope.datagridElement has the data table jquery element
        $isolateScope.datagridElement.find('tr.app-datagrid-row').each(function(index) {
            //Loop through the rows. Add class admin for users having role as adminrole
            if ($data\[index\].role === 'adminrole') {
                $(this).addClass('admin');
            }
        });
    };

Using the Data Table MethodsData Grid has few methods exposed on widget scope which can be accessed via JavaScript. For the following script samples, we are considering the hrdb Department table. DepartmentGrid is bound to the Live Variable corresponding to the Department table.

- change display name of column:

$scope.Widgets.DepartmentGrid.columns.deptId.displayName = ‘Deptarment Id’; 
//Will change the display name of deptid column to ‘Department Id’.

- force re-render datatable:
    
    $scope.Widgets.DepartmentGrid.redraw(true); 
    //Will force re-render data table.
    
- change edit mode field value:
    
    $scope.Widgets.DepartmentGrid.formfields.name.value = 'Engineering 1'; 
    // Sets ‘Engineering 1’ to name edit field Note: This will work only on click of edit on a row.
    
- select a row:
    
    $scope.Widgets.DepartmentGrid.selectItem(1); 
    // The parameter can be index or object of row
    
- deselect a row: Note: deselect will work only for data table with multiselect enabled on it.

$scope.Widgets.DepartmentGrid.deselectItem(1);                                                    //It can be index or object of row (data bound to row), For grid actions user can send $row (which is row data) , that can be sent as an argument to this method.

- with selected item:
    
    $scope.Widgets.DepartmentGrid.selecteditem = 2; 
    //Selects the third row or item          
    $scope.Widgets.DepartmentGrid.selecteditem = \[2, 3\]; 
    //Selects the third and fourth row/item 
    $scope.Widgets.DepartmentGrid.selecteditem = \[\]; 
    //Deselects the existing rows or items
    
- filter mode:
    
    $scope.Widgets.DepartmentGrid.filtermode = ‘search’; 
    // To set filter mode as search                                                                                       $scope.Widgets.DepartmentGrid.filtermode = ‘multicolumn’; 
    //To set filter mode as multi column
