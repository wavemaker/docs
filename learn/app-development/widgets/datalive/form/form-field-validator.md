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
       "type": VALIDATOR.REQUIRED,
       "validator": true,
       "errorMessage": "Error message to be displayed for Form Field."
   }]);
```

In the above example, VALIDATOR can be accessed from constants service as shown below.

```js
var VALIDATOR = App.getDependency(‘CONSTANTS’).VALIDATOR;
```

VALIDATOR contains the default validators i.e. required, maxchars, minvalue, maxvalue, regexp which can be accessed using VALIDATOR.REQUIRED, VALIDATOR.MAXCHARS, VALIDATOR.MINVALUE, VALIDATOR.MAXVALUE, VALIDATOR.REGEXP

### Custom Validators using functions

These validations can contain custom validations. Follow the steps below to add customizations to the form field.

```js
function lastNameVal(field, form) {
   if (field.value && field.value.length < 1) {
       return {
           "errorMessage ": "Enter your LastName"
       };
   }
}
Page.Widgets.formName.formfields.fieldName.setValidators([lastNameVal]);
```

In the above example, `firstNameVal` function accepts field and form as arguments. This function returns an error message if the condition is failed.

### Example using objects and custom validator functions

In the following example, form `EmployeeForm1` has multiple validations, including, email should validate regular expression `REGEXP` and should not be empty.

```js
Page.Widgets.EmployeeForm1.formfields.email.setValidators([emailRequired, {
   "type": VALIDATOR.REGEXP,
   "validator": /\w+@\w+\.\w{2,3}/,
   "errorMessage": "Not a Valid Email"
}]);

function emailRequired(field, form) {
   if (field.value && field.value.length < 1) {
       return {
           "errorMessage": "Email Cannot be empty."
       };
   }
}
```

