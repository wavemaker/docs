---
title: "Adding Parent and Child Records in a Single Transaction"
id: ""
---

This topic describes how to add a Parent and Child records in a single transaction, where a Parent is the master record, and the Child is the extension or the details of the master record. For example, assume that a Pizza is a Parent entity, the Types of Pizzas are the Child entity type.  When you enter the Parent record, you want to add the child records at the same time, too. To do this, follow the step by step instructions as below. Also, achieve this topic's agenda of:

- parent/child or master-details' records in a single action.
- database CURD and a Model variable.
- a form inside a form.

## Configuration

Navigate to the Databases section and create your own database. For more information, see [with Databases](/learn/app-development/services/database-services/working-with-databases/)

- \-1: In the database designer, add a one-to-many relation for the parent and child tables.
- \-2: Enable the **Option** for the one-to-many relation as shown in the image below. For more information, see [with Database Schema](/learn/app-development/services/database-services/working-database-schema/)

[![](https://www.wavemaker.com../assets/cascade-options-1.png)](https://www.wavemaker.com../assets/cascade-options-1.png)

## Design

- \-3: On a page, drag and drop a **Form** and bind it to the Parent entity. The Live Form is the Parent form.
- \-4: Drag and drop a **Dialog** on the Parent form. The Design Dialog is the base for the Child form.
- \-5: Drag and drop a widget on the Parent form (created in step-3) and name the button as "Add Child Items".
- \-6: Go to the tab of the **Child Items** button, and set the **Click** property to open to the **Design** (of step-4).

[![](https://www.wavemaker.com../assets/EventsDialog-e1559301180845.png)](https://www.wavemaker.com../assets/EventsDialog.png)

## Variable Settings

- \-7: Create a Model Variable of the type Child entity and set the flag to the  option.
- \-8: In the **Dialog**, drag and drop a widget and bind it to the Model Variable (from step-7).

: To add multiple Child objects in the Model Variable, push the data into the Model Variable. To achieve this, select the Child form (from the Design Dialog) and navigate to the Events tab and choose for the **Before Submit** event and add the below-specified code snippet:

 Page.dialog1\_childForm1Beforesubmit = function($event, widget, $data)
 { Page.Variables.child.addItem($data); 
   Page.Widgets.dialog1.close(); };

[![](https://www.wavemaker.com../assets/On-Before-Submit.png)](https://www.wavemaker.com../assets/On-Before-Submit.png)

## Event Properties

- \-9: For the Parent form (Live form), navigate to the Events tab and select as an operation for the event. Add the below-specified code-snippet in the function generated in the Script tab of the respective page:

 $scope.ParentLiveForm1Beforeservicecall = function($event, $operation, $data, options)
 { $data.childs = Page.Variables.child.dataSet; };

**[![](https://www.wavemaker.com../assets/On-Before-Service-Call.png)](https://www.wavemaker.com../assets/On-Before-Service-Call.png):** Ensure that the naming convention is the same as the related Child entity mentioned in its Parent entity. To verify the name, see .java file from the File Explorer.
