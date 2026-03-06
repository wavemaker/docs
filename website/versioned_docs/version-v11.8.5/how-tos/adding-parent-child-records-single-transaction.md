---
title: "Submit Parent and Child Records in a Single Transaction"
id: "adding-parent-child-records-single-transaction"
---
---

This topic describes how to add Parent and Child records in a single transaction, where a Parent is the master record, and the Child is the extension or the details of the master record using repeatable Forms.

**Example:**
Assume that a Pizza is a Parent entity, the Types of Pizzas are the Child entity type.  When you enter the Parent record, you want to add the Child records at the same time, too. To do this, follow the step-by-step instructions as below. Also, achieve this topic's agenda of:

- Adding Parent/Child or master-detail's records in a single action.
- Using database CURD and a Model variable.
- Using a List inside a Form.

## Database Configuration

Navigate to the Databases section and create your own database. For more information, see [Working with Databases](/learn/app-development/services/database-services/working-with-databases/).

- Step-1: In the database designer, add a one-to-many relation for the Parent and Child tables.
- Step-2: Enable the **Cascade Option** for the one-to-many relation as shown in the image below. For more information, see [Working with Database Schema](/learn/app-development/services/database-services/working-database-schema/).

[![](/learn/assets/form/db-cascade.png)](/learn/assets/form/db-cascade.png)

## Page Design

### Configure Parent LiveForm

- Step-3: On a page, drag and drop a **Live Form** and bind it to the Parent entity (Employee Entity in the database). The Employee Live Form is the Parent Form.

### Model Variable Settings

- Step-4: Create a model variable with **Entry** type and set the flag to the **isList** option and also the metadata same as the Child entity(Address Entity present in the database) as shown in the image below.

[![](/learn/assets/form/model-variable.png)](/learn/assets/form/model-variable.png)

### Configure List inside Parent LiveForm

- Step-5: Drag and drop a **List Widget** inside the Parent Form (Employee LiveForm) and bind it to the model variable created in Step4.

### Configure Form inside List Widget

- Step-6: Drag and drop a **Form** widget inside the List template and bind it to the same model variable created in Step4 and configure the Form.

- Step-7: Now click the **Advanced Settings** option present under the Properties panel for the inner Form (Child Form/Address Form) from the dialog uncheck the actions(as we wanted to submit the Child objects during Parent record submission).

### Add Child Objects on Button Click

- Step-8: Drag and drop a **Button** widget on the Parent form (created in step-3) and change the button caption as "Add Child Items".

- Step-9: Go to the **Events** tab of the **Add Child Items** button, and set the **On Click** event as javascript, and write as script to add one more Child Form or AddressDetails Form as shown below.

```js
Page.button1Click = function($event, widget) {
    Page.Variables.StVarAddressDetail.dataSet.push({});
};
```

The above code adds one more Child object(address object) into the model variable (created in Step4).

### Rename List Widget

- Step-10: Now search for the `${ParentEntityName}.java` file under **FileExplorer** and check the Child entity reference name (variable name) and update the List widget name which dropped inside the Parent LiveForm with the Child reference variableName.

[![](/learn/assets/form/Employeepojo.png)](/learn/assets/form/Employeepojo.png)

:::note
Ensure that the List widget naming convention is same as the related Child entity mentioned in its Parent entity. To verify the name, see .java file of the Parent entity from the File Explorer.
:::

The page tree structure should be as below.
   - Parent LiveForm (bound to Employee Entity)
      - List Widget (bound to model variable)
         - Form Widget(bound to model Variable)
      - Button (to add Child objects)

### App in Preview

Preview the App. You will see Employee LiveForm fields along with the button as shown below.

[![preview](/learn/assets/form/Preview1.png)](/learn/assets/form/Preview1.png)

Click the Add Address Details button; the List items and the Form will be added here. If you want to add another address details, click the button to add the same List using Form. Likewise, you can add any number of address details (List with Forms).

The final object structure will be as shown in the image below along with the employee details, i.e., two address object details, including, one residential and permanent addresses.

[![object structure](/learn/assets/form/objectstructure.png)](/learn/assets/form/objectstructure.png)