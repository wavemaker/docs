---
title: "Working with Temporals"
id: "working-with-temporals"
---

## Use Case

How to use DB2 Temporal in WaveMaker apps.

## Context

The temporal feature in the DB2 product enables you to accurately track information and data changes over time and provides an efficient and cost-effective way to address auditing and compliance requirements, without having to specifically code for the same (see here for [Temporal Support](/learn/app-development/services/database-services/temporal-support/)). You can use the Data and Live Widgets to manipulate values from the temporal tables.

We will be seeing the Temporal usage in the following scenarios:

- Insert/Update Time-based Data
- Viewing Historical Data
- Viewing Period Data

## Database setup

We are using the following DB2 Employees schema with System Time defined: [![](/learn/assets/dbtemp_ex1.png)](/learn/assets/dbtemp_ex1.png)

## Use Case

We will see the implementation of the following scenarios:

- The manager enters the employee details assigning them to departments ie insert/update data [![](/learn/assets/dbtemp_ex2.png)](/learn/assets/dbtemp_ex2.png)
- The manager wants to track the progression of a particular employee ie view historical data [![](/learn/assets/dbtemp_ex3.png)](/learn/assets/dbtemp_ex3.png)
- The manager wants to see the status of all Employees on a given date ie view period data. [![](/learn/assets/dbtemp_ex4.png)](/learn/assets/dbtemp_ex4.png)

## Implementation

### Capturing the Updates

1. Drag and drop a Data Table
2. Set the data source to the Employees table [![](/learn/assets/dbtemp_ex2a_dt.png)](/learn/assets/dbtemp_ex2a_dt.png)
3. Choose Inline Editable format with Basic pagination
4. We have selected Employee Id, Name and Department to be displayed
5. Preview the page, you will see the Employees table displayed wherein you can add NEW rows or edit existing rows. [![](/learn/assets/dbtemp_ex2a.png)](/learn/assets/dbtemp_ex2a.png)

**Note**: The timestamp fields will be set by the system.

### Viewing Historical Data

We will use a dialog to display the historical data for the selected Employee. This dialog will be triggered by a button in the Data Table.

- Create a new Database CRUD Variable for Employee History table.
- From the Data tab, using the bind icon set the employeeId to EmployeesTable1 (Data Table name, might differ for your example) -> selecteditem -> employeeid. This will ensure that the History data for the selected employee is fetched. [![](/learn/assets/dbtemp_ex3_var.png)](/learn/assets/dbtemp_ex3_var.png)
- Drag and Drop a Design Dialog. This will be opened in a View.
- Using the Use Expression, set the Title of the Dialog to 'Historical Data for: ' + Variables.SAMPLEEmployeesHistData.dataSet.data[$i].employeeName
- Drag and drop a List widget and bind it to the EmployeesHist variable created earlier. We have used the Action List, with Basic Pagination and mapped the JobTitle widget to department field.
- From the canvas
    
    - delete all the widgets except JobTitle
    - using Grid Layout and four Labels, design your Dialog as shown below
    - set two Label Captions to 'Original Value' and 'Modified Value on'
    - using the bind icon, set one Label Caption to fieldDefs[$index - 1].sysBegin | toDate: 'EEE, dd MMM yyyy'
    - using the bind icon, set one Label Caption to fieldDefs[$index - 1].department'
    - In the above code _fieldDefs[$index - 1]_ is used to fetch values from the record that was added _after_ the current record.
    
    [![](/learn/assets/dbtemp_ex3_dialog.png)](/learn/assets/dbtemp_ex3_dialog.png)
- Go to the parent Page (you can choose it from the Page Structure or from the widget breadcrumb at the bottom of the canvas) and using the Advanced Settings for the Data Table, add a Custom Column to open the Dialog created in the previous step [![](/learn/assets/dbtemp_ex3_dt.png)](/learn/assets/dbtemp_ex3_dt.png)
- Preview the page, click the View Details for any Employee and the dialog with Historical data will be displayed [![](/learn/assets/dbtemp_ex2.png)](/learn/assets/dbtemp_ex2.png)[![](/learn/assets/dbtemp_ex3.png)](/learn/assets/dbtemp_ex3.png)

### Viewing Period Data

1. Drag and drop a Date widget and set the Label caption as '_Employee Status As Of:_'
2. Create a Variable from Database API for Employees table API findEmployeesHistory
    
    - From the Data tab, using the bind icon next to systemClause Input Field from Use Expression bind it to 'as_of ' + Widgets.date1.timestamp. This will ensure that the rows from the Employees History table are filtered based on the date selected by the user.
    
    [![](/learn/assets/dbtemp_ex5.png)](/learn/assets/dbtemp_ex5.png)
3. Drag and drop a Data Table and set the data source to the variable created in the above step. We chose a Read-Only table to display Employee Id, Name and Department.
4. Preview the page, when you select a date from the Date widget, you will see the corresponding rows displayed in the Data Table. [![](/learn/assets/dbtemp_ex4.png)](/learn/assets/dbtemp_ex4.png)
