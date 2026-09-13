---
title: "How to Get Validation Messages from a Form"
id: "get-validation-messages-form"
---
---

In this article, you will learn how the ValidationMessages are exposed on a form.` ValidationMessages` are a list of objects which provides the validation details of the invalid field; this is an outbound property of the form.

## Form Expressions

Each object contains the following expressions:

1. A field represents the field name.
2. A Value represents the value of the field.
3. The `errorType` represents the list of errors. For example, if the field is breaking the validation rule applies like the required value, minimum value, or max values.
4. The message represents the validation message on the field.
5. The `getElement` method returns the elements specific to the field.
6. The `formName` returns the name of the form, to which this field belongs.
7. The `fullyQualifiedName` returns the full name of the form, which includes the name of the form and its the ancestor form names to which this field belongs.

The below screenshot shows the validation messages as outbound property to the form.

### Use Case

In the following use case, the employee form contains a few required fields. These required fields should be validated when the user submits incorrect information in the form. For example, a form field for an email address should contain a valid email address with an @ and suffix of .com, .co, etc. these options are listed in the dropdown in the properties options. Also, it is a required field, which means the field cannot be empty. Let's take the following use case to see how to configure validation messages for entering the employee details.

## Step by step process to create employees Form

- Step-1: Create a Model variable for Employees to use for the Employee Form.
- Step-2: On a page, drag and drop a **Form** Widget.
- Step-3: Bind the **Form** Widget to the Model Variable created in step-1.
- Step-4: When designing the Form, mark a few fields as required fields.
- Step-5: Create another Model variable to design the validation messages.
- Step-6: On the page created in step-2, drag and drop Button Widget.
- Step-7: On the button click, select JavaScript from the Events tab properties, and write the following lines of code. This will bind to the Model variable created for the validation messages.
    - Page.button1Click = function($event, widget) { Page.Variables.validationMessagesInfo.dataSet = Page.Widgets.employeeInfoForm1.validationMessages; };
- Step-8: Drag and drop a Card widget and select a business template.
- Step-9: Bind the Card widget to the Model variable to show the validation messages. By doing this, the incorrect information gets highlighted when you submit the wrong information.
- Step-10:

### Example

For example, we have a User Form which contains the Details Form. Details Form includes another form, i.e., Address Form. It is binding the validation Messages of UserForm to list and applying group based on the `formName` field. On submitting the form, Output will be the validationMessage response as shown below:

```js
[{
"Field":"state",
"errorType":["required"],
"message":"Enter the address",
"formName":"addressForm",
"fullyQualifiedFormName":"UserForm.DetailsForm.addressForm"
},
{
"Field":"city",
"errorType":["required"],
"Message":"",
“formName":"addressForm",
"fullyQualifiedFormName":"UserForm.DetailsForm.addressForm"
},
{
"Field":"name",
"errorType":["required"],
"message":"Enter the details",
"formName":"DetailsForm",
"fullyQualifiedFormName":"UserForm.DetailsForm"
},
{
"Field":"age",
"errorType":["required"],
"message":"Enter the details",
"formName":"DetailsForm",
"fullyQualifiedFormName":"UserForm.DetailsForm"
},
{
"Field":"name",
"errorType":["required"],
"message":"Enter user name",
"formName":"UserForm",
"fullyQualifiedFormName":"UserForm"
}]
```
