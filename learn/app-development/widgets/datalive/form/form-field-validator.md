---
title: "Validator Function"
id: ""
sidebar_label: "Field Validations"
---
---

Apply validations to a single field and multiple fields using the specified methods. These methods on the form field can be used to set sync validations on a field. These validations can include default validators like required, min value, max value, or add more customizations to the basic validations.

There are three ways to apply Validations on a form field based on your requirements; they are:

- `setValidators`
- `observeOn`
- `setAsyncValidators`

## setValidators

For setting default validations for Form fields, you can use the `setValidator()` method. This method accepts an array of:

- Objects for default validators
- Functions for custom validation

### Object Validators

These validations also include default validators like required, min value, max value, and more. To apply **required** validation, follow the steps below: 

```js
Page.Widgets.formName.formfields.fieldName.setValidators([{
       type: VALIDATOR.REQUIRED,
       validator: true,
       errorMessage: "Error message to be displayed for Form Field."
   }]);
```

In the above example, VALIDATOR can be accessed from constants service as shown below.

```js
var VALIDATOR = App.getDependency(‘CONSTANTS’).VALIDATOR;
```

VALIDATOR contains the default validators which can be accessed using the following validator types.

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

### Custom Validators using functions

These validations can contain custom validations. Follow the steps below to add customizations to the form field.

```js
Page.Widgets.formName.formfields.fieldName.setValidators([lastNameVal]);
```

```js
function lastNameVal(field, form) {
   if (field.value && field.value.length < 2) {
       return {
           "errorMessage ": "Enter your full last name."
       };
   }
}
```

In the above example, `firstNameVal` function accepts field and form as arguments. This function returns an error message if the condition fails.

### Example using objects and custom validator functions

In the following example, form `EmployeeForm1` has multiple validations, including, email should validate regular expression `REGEXP` and should not be empty.

```js
Page.Widgets.EmployeeForm1.formfields.email.setValidators([emailRequired, {
   type: VALIDATOR.REGEXP,
   validator: /\w+@\w+\.\w{2,3}/,
   errorMessage: "Not a Valid Email"
}]);
```

```js
function emailRequired(field, form) {
   if (field.value && field.value.length < 1) {
       return {
           errorMessage: "Email cannot be empty."
       };
   }
}
```

:::note
In order to watch on some values for validator, use functions, instead of widget data values.

```js
Page.Widgets.EmployeeForm1.formfields.currentDate.setValidators([{
    type: VALIDATOR.MINDATE,
    validator:function(){
        return Page.Widgets.date1.datavalue;
    },
    errorMessage: "Enter correct current date value."
}])
```
:::

## ObserveOn

This validation type observes changes in two or more fields. This method accepts an array of field names. Registering observeOn on a field triggers the field validations whenever there are changes in the observing field values. For example, it notifies whenever there are changes in any of the fields specified in the array.

### Example for ObserveOn

In the following example, we are matching password and confirm password. Confirm password field depends on password field value.

In the following lines of code, we are defining function `confirmPasswordEval`.

```js
Page.Widgets.staticVariable2Form1.formfields.confirmpassword.setValidators([confirmPasswordEval]);
   Page.Widgets.staticVariable2Form1.formfields.confirmpassword.observeOn(['password']);
```

In the following lines of code, it displays an error message if the password and confirm password does not match the values.

```js
function confirmPasswordEval(field, form) {
   if (field.value && form.formfields.password.value != field.value) {
       return {
           errorMessage: "Password & ConfirmPassword are not same"
       };
   }
}
```

## setAsyncValidators

This method on the formfield can be used to set async validations on the field. This method accepts array of promises or function returning a promise.

### Example for setAsyncValidators

Email validation checks the database. For example, entered email should not be present in the list of emails that are stored in the database already.

```js
Page.Widgets.employeeInfoForm3.formfields.email.setAsyncValidators([emailAsync]);
```
```js
function emailAsync(field, form) {
   if (field.value) {
       return new Promise(function(resolve, reject) {
           var emailExists = Page.Variables.EmailData.dataSet.filter(function(data) {
               if (data.dataValue === field.value) {
                   return true;
               }
           });
           if (emailExists.length != 0) {
               reject({
                   errorMessage: "Email already exists in database"
               });
           }
           resolve();
       });
   }
}
```

:::note
By default validations trigger on form render. For example, if you have an async validation on a field and field value is null, then the form validation triggers and shows spinner until the async validation is completed. If you do not want to trigger the async validation when value is null then just have some default validators on the field like minLength on the field to be one/two characters or set field as required which prevents the async validation on form render.
:::
