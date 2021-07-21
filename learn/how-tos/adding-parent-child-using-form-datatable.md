---
title: "Submit Parent and Child Records in a Single Transaction using form and datatable"
id: ""
---

This topic describes how to add a Parent and Child records in a single transaction, where a Parent is the master record, and the Child is the extension or the details of the master record using form and datatable. 

**Example:**
Assume that a Pizza is a Parent entity, the Types of Pizzas are the Child entity type.  When you enter the Parent record, you want to add the child records at the same time, too. To do this, follow the step by step instructions as below. Also, achieve this topic's agenda of:

- Adding parent/child or master-detail's records in a single action.
- Using database CURD and a Model variable.
- Using a datatable inside a form. 

## Database Configuration

Navigate to the Databases section and create your own database. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

- Step-1: In the database designer, add a one-to-many relation for the parent and child tables.
- Step-2: Enable the **Cascade Option** for the one-to-many relation as shown in the image below. For more information, see [Working with Database Schema](/learn/app-development/services/database-services/working-database-schema/).

[![](/learn/assets/form/db-cascade.png)](/learn/assets/form/db-cascade.png)

## Page Design

### Configure Parent LiveForm
- Step-3: On a page, drag and drop a **Live Form** and bind it to the Parent entity(Employee Entity in the database). The Employee Live Form is the Parent form.

### Model Variable Settings
- Step-4: Create a model variable with **Entry** type and set the flag to the **isList** option and also the metadata same as the child entity(Address Entity present in the database) as shown in below image.

[![](/learn/assets/form/model-variable.png)](/learn/assets/form/model-variable.png)

### Configure Datatable inside Parent LiveForm
- Step-5: Drag and drop a **Datatable** widget inside the Parent LiveForm(Employee LiveForm) and bind it to the model variable created in Step4.

- Step-6: Now click on **AdvacedSettings** option present under properties panel for the datatable and from the dialog enable all the actions(to insert address details during parent record submission).

### Rename Datatable widget
- Step-7: Now search for the ${ParentEntityName}.java file under **FileExplorer** and check the child entity reference name(variable name) and update the datatable widget name which dropped inside the parent LiveForm with the child reference variableName.

[![](/learn/assets/form/Employeepojo.png)](/learn/assets/form/Employeepojo.png)

:::note
Ensure that the datatable widget naming convention is same as the related Child entity mentioned in its Parent entity. To verify the name, see .java file of the parent entity from the File Explorer.
:::

### App In Preview
Preview the App, You will see the Employee LiveForm fields along with datatable as shown below.

[![](/learn/assets/form/form-datatable.png)](/learn/assets/form/form-datatable.png)

Now click on the New button and add the Address Details. Like wise we can add any number of address details using datatable.
[![](/learn/assets/form/form-table-data.png)](/learn/assets/form/form-table-data.png)

The final object structure will be as shown in below image(where along with employee details two address object details are sent one residential and permanent address details).

[![](/learn/assets/form/form-table-object.png)](/learn/assets/form/form-table-object.png)