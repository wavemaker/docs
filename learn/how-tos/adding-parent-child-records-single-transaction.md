---
title: "Submit Parent and Child Records in a Single Transaction"
id: ""
---

This topic describes how to add a Parent and Child records in a single transaction, where a Parent is the master record, and the Child is the extension or the details of the master record using repeatable Forms. 

**Example:**
Assume that a Pizza is a Parent entity, the Types of Pizzas are the Child entity type.  When you enter the Parent record, you want to add the child records at the same time, too. To do this, follow the step by step instructions as below. Also, achieve this topic's agenda of:

- Adding parent/child or master-detail's records in a single action.
- Using database CURD and a Model variable.
- Using a list inside a form. 

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

### Configure List inside Parent LiveForm
- Step-5: Drag and drop a **List Widget** inside the Parent form(Employee LiveForm) and bind it to the model variable created in Step4.

### Configure Form inside List widget.
- Step-6: Drag and drop a **Form** widget inside the list template and bind it to the same model variable created in Step4 and configure the form. 

- Step-7: Now click on **AdvacedSettings** option present under properties panel for the inner form(Child form/Address form) from the dialog uncheck the actions(as we wanted to submit the child objects during parent record submission).

### Add child objects on button click
- Step-8: Drag and drop a **Button** widget on the Parent form (created in step-3) and change the button caption as "Add Child Items".

- Step-9: Go to the **Events** tab of the **Add Child Items** button, and set the **On Click** event as javascript and write script to add one more child form or AddressDetails form as shown below.

```js
Page.button1Click = function($event, widget) {
    Page.Variables.StVarAddressDetail.dataSet.push({});
};
```
The above code adds one more child object(address object) into the model variable(created in Step4).

### Rename List widget
- Step-10: Now search for the ${ParentEntityName}.java file under **FileExplorer** and check the child entity reference name(variable name) and update the list widget name which dropped inside the parent LiveForm with the child reference variableName.

[![](/learn/assets/form/Employeepojo.png)](/learn/assets/form/Employeepojo.png)

:::note
Ensure that the list widget naming convention is same as the related Child entity mentioned in its Parent entity. To verify the name, see .java file of the parent entity from the File Explorer.
:::

The page tree structure should be as below.
   - Parent LiveForm(bound to Employee Entity)
      - List Widget(bound to model variable)
         - Form Widget(bound to model Variable)
      - Button(to add child objects)

### App In Preview
Preview the App, You will see the Employee LiveForm fields along with Button as shown below.

[![](/learn/assets/form/Preview1.png)](/learn/assets/form/Preview1.png)

Now click on the button to add the Address Details. The list item along with the form will be added. If we want to add one more address details then again click on the button to add same list item with form. Like wise we can add any number of address details(list with forms).

[![](/learn/assets/form/parent-child.png)](/learn/assets/form/parent-child.png)

The final object structure will be as shown in below image(where along with employee details two address object details are sent one residential and permanent address details).

[![](/learn/assets/form/objectstructure.png)](/learn/assets/form/objectstructure.png)