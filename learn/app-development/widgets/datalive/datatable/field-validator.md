---
title: "Data Table - Field Validator Function"
id: ""
sidebar_label: "Field Validations"
---
---

When creating a data table, you can use Validator Functions to set rules to the table. Validation of table data is based on the validator type you specify for each column field. For each validator type, only a specific set of rules apply. During record submission, the user can modify any input fields that contain invalid data.

Using Validator Functions, you can apply validations to a single field or multiple fields using methods described in this document. These methods can be used to set sync validations on a field and can include default validators like required, min value, max value, or add more customizations to just basic validations.

There are three ways to apply Validations on a data table field; they are:

- `setValidators`
- `observeOn`
- `setAsyncValidators`

## setValidators

WaveMaker provides validators which can be referenced and used in the setValidator method for setting default validations for Data Table fields. This method accepts an array of:

- Objects for default validators
- Functions for custom validation

### Object Validators

These validations also include default validators like required, min value, max value, and more. To apply **required** validation, follow the steps below:

```js
Page.Widgets.tableName.columns.columnName.setValidators([{
       type: VALIDATOR.REQUIRED,
       validator: true,
       // Display error message for the column field
       errorMessage: "This field cannot be empty."
   }]);
```

In the above example, `VALIDATOR` can be accessed from constants service as shown below.

```js
var VALIDATOR = App.getDependency('CONSTANTS').VALIDATOR;
```

### Validator Types

`VALIDATOR` contains the default validators which can be accessed using the following validator types.

|Validator | Validator type |
|----|----|
|required | `VALIDATOR.REQUIRED` |
|maxchars | `VALIDATOR.MAXCHARS` |
|minvalue | `VALIDATOR.MINVALUE` |
|maxvalue | `VALIDATOR.MAXVALUE` |
|regexp | `VALIDATOR.REGEXP` |
|mindate | `VALIDATOR.MINDATE` |
|maxdate | `VALIDATOR.MAXDATE` |
|excludedates | `VALIDATOR.EXCLUDEDATES` |
|excludedays | `VALIDATOR.EXCLUDEDAYS` |
|mintime | `VALIDATOR.MINTIME` |
|maxtime | `VALIDATOR.MAXTIME` |

### Custom Validators using Functions

These validations can contain custom validations. Follow the steps below to add customizations to the table column field.

```js
Page.Widgets.tableName.columns.columnName.setValidators([lastNameVal]);
```

```js
function lastNameVal(field, table) {
   if (field.value && field.value.length < 2) {
       return {
           errorMessage: "Enter your full name."
       };
   }
}
```

In the above example, `firstNameVal` function accepts field and table as arguments. This function returns an error message if the condition fails.

### Example using Objects and Custom Validator Functions

In the following example, data table `EmployeeTable1` has multiple validations, including email, it should validate regular expression `REGEXP` and should not be empty.

```js
Page.Widgets.EmployeeTable1.columns.email.setValidators([emailRequired, {
   type: VALIDATOR.REGEXP,
   validator: /\w+@\w+\.\w{2,3}/,
   errorMessage: "Not a Valid Email"
}]);
```

```js
function emailRequired(field, table) {
   if (field.value && field.value.length < 1) {
       return {
           errorMessage: "Email cannot be empty."
       };
   }
}
```

:::tip
To watch for validator values, use functions, instead of widget data values.

In the following example, if validator depends on some other widget value, then return the datavalue using the function and not use widget datavalue directly.

#### Recommended

```js
validator:function(){
        return Page.Widgets.date1.datavalue;
    }
```

#### Not Recommended

```js
validator:Page.Widgets.date1.datavalue;
```
:::

## observeOn

This validation type observes changes in two or more fields. This method accepts an array of field names. Registering observeOn on a field triggers the field validations whenever there are changes in the observing field values. For example, it notifies whenever there are changes in any of the fields specified in the array.

### Example for ObserveOn

In the following example, we are matching password and confirm password. Confirm password field depends on password field value.

In the following lines of code, we are defining validator for `confirmpassword` field with `confirmPasswordEval` function which observes `password` column field.

```js
Page.Widgets.staticVariable2Table1.columns.confirmpassword.setValidators([confirmPasswordEval]);
   Page.Widgets.staticVariable2Table1.columns.confirmpassword.observeOn(['password']);
```

In the following lines of code, it displays an error message if the password and confirm password does not match the values.

```js
function confirmPasswordEval(field, table) {
   if (field.value && table.columns.password.value != field.value) {
       return {
           errorMessage: "Password & ConfirmPassword are not the same value"
       };
   }
}
```

## setAsyncValidators

This method on the table column can be used to set async validations on the column field. This method accepts an array of promises or function returning a promise.

### Example for setAsyncValidators

In the following lines of code, we are setting async validation for email column field by defining a function called `emailAsync`.

```js
Page.Widgets.employeeInfoTable3.columns.email.setAsyncValidators([emailAsync]);
```

In the following lines of code, the entered email should not be present in the list of emails that are stored in the database already.

```js
function emailAsync(field, table) {
   if (field.value) {
       return new Promise(function(resolve, reject) {
           var emailExists = Page.Variables.EmailData.dataSet.filter(function(data) {
               if (data.dataValue === field.value) {
                   return true;
               }
           });
           if (emailExists.length != 0) {
               reject({
                   errorMessage: "The email address is already registered."
               });
           }
           resolve();
       });
   }
}
```

## Customizing Error Messages

Customize table column field validation error messages using functions, or simply use a string value to display error messages for column field validation.

### Example for Customizing Error Messages

You can customize error messages to make it more specific to what the user enters. In the following example, the `field.value` is the user-entered value which displays in the error message along with the extended text as shown below.

```js
errorMessage: function(field, table) {
    return field.value + " is not a valid Email.";
    }
```

To use a static message, simply use a string value with your own error message.

```js
errorMessage: "The entered value is not a valid email address."
```
