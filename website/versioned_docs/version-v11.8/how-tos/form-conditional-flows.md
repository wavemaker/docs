---
title: "Smart Forms: Conditional Flows for form Widget"
id: "form-conditional-flows"
---

## What's a Smart Form?

Whenever using long forms, chances are higher that users drop off. Use conditional logic in long forms to keep engagement high and improve conversion rates.

In the most basic sense, smart forms are dynamic based on conditional logic. Instead of static inputs on a screen, smart forms can change based on how a user enters input to a question using conditional logic. Want to segment questions to different types of users? Perform calculations? Smart forms get the job done.

Smart forms function according to if/then or if/else conditions, for instance, if a user is paying for a subscription, then they will be asked about their usage; if a user is not paying for a subscription, then they will be asked if they want to sign up for one.

Conditional logic changes how your form behaves based on specific inputs. It allows you to dynamically customize the form experience based on your respondents’ answers.

Here are some use case scenarios:
- Showing additional questions when a user chooses a specific answer

- Skipping form steps in a multipage survey depending on user answers

- Not showing the submit button until the user makes a particular choice.

## Conditional Logic Options in WaveMaker

- Show/Hide Form Fields
- Calculate Values and set the value on other fields.
- Enable Required based on other field inputs.
- Enable ReadOnly based on condition.
- Show fields in disable state based on condition
- Apply display format(international phone numbers display formats)

### Show/Hide Form Fields

The Show/Hide field shows or hides a form field when a specified condition is met. 

#### Usecase
If a user answers "Did you use our product for building apps?" with "Yes," then the form will show "How would you rate it?". If a user answers "Did you use our product?" with "No" then the form will hide "How would you rate it?"

#### How to implement?
- Select the **rating form field** you want to hide based on the value given for the **question form field**.
- Click on bind icon for the **show** property of the rating field from the properties panel.
- Select the **Widgets** tab in binding dialog, select the question field datavalue as shown in the below image.

[![](/learn/assets/form/binddialog.png)](/learn/assets/form/binddialog.png)

- Now switch to **Use Expression** tab and add condition for "Yes" for the question field value as below.

```js
Widgets.surveyForm1.formWidgets.question.datavalue==="Yes".
```

So the above given will is the conditional expression. If the question field value is equal to Yes then rating field will be shown because the condition given above is bound to the **Show** property of the rating field.

**Other Ways to handle conditional logics**

- One can also use ternary operator to handle conditions. Under **UseExpression** tab in the bind dialog for the **Show** property one can bind as below.

```js
Widgets.surveyForm1.formWidgets.question.datavalue==="Yes"?true:false
```
Returning true when the value is "Yes" else returning false.

(or)

- You can also bind **Show** property to the function written in the script tab. Show or Hide by returning true or false in the function when condition is met.

Add below function in Script tab.

```js
Page.showPropertyFunc = function() {
    if (Page.Widgets.surveyForm1.formWidgets.question.datavalue === "Yes") {
        return true;
    } else {
        return false;
    }
};
```

Now Click on bind icon for the **Show** property and call the function **showPropertyFunc()** under **UseExpression** tab.

### Calculate Values and set the value on other fields

You can create conditional logic rules to perform calculations. 

#### Usecase
Let's say you want to add values from two different fields and have the solution appear in a text box labeled "Total." You can specify the fields to be added and when they should be added.
(or)
Calculate BMI based on Height and Weight of the person.

#### How to implement?

- Select the field you want to show the calculated value(example: Total or BMI field).
- From the properties panel click on bind icon for the **Default Value** property.
- Now under **Use Expression** tab, select the Number1 field value and also add the conditional operator (+) and then Number2 field value as shown in below image.

Below image shows the calculation of BMI of the person based on height and weight.

[![](/learn/assets/form/conditionalbinding.png)](/learn/assets/form/conditionalbinding.png)

### Enable Required option

This option allows you to set a form field as REQUIRED or NOT REQUIRED depending on the user's input.

#### Usecase

When you have a form for patient's to fill in the details for hospital management, you may ask if the patient is allergic to? If Yes then you may ask allergic type which may be a REQUIRED field based on allergic value.

#### How to Implement?

- Select the AllergicType form field. Click on bind icon for the **Required** property under properties panel.
- Now under **Use Expression** tab, bind the expression as below.

```js
Widgets.PatientForm.formWidgets.allergic.datavalue==="Yes"
```

or 

```js
Widgets.PatientForm.formWidgets.allergic.datavalue==="Yes"?true:false
```

### Enable Readonly

We use READONLY for form fields to prevent user from type/select the form control but we get value from the input. A read-only field can’t be modified, but you can tab into it, highlight it, and copy its contents.

#### Usecase
You can apply read only for the HealthCard Number for the patient which is entered during Patient details registration.

#### How to implement?
- Select the field that you want to enable ReadOnly. Now under properties panel you can enable READONLY property to true. Also you can apply READONLY using conditional logic through bind icon.

### Show fields in disable state

When any form field element is disabled that means it can’t be selected, clicked on, typed into nor does accept focus anymore. Also, by default, browsers display such form controls grayed out.

#### Usecase
Apply DISABLE for the form field for the form fields such as CreditCard Numbers(even masked). Preventing the user from copying or selected.

#### How to implement?
- Select the field that you want to enable DISABLE option. Under properties panel you can enable the DISABLE property for the form field. Also you can apply DISABLE property using conditional logic through bind icon.

### Apply display format

Apply display formats for the form fields directly from the properties panel or also apply different formats depending on the value of the other field.

#### Usecase
Apply the display format for the phone number based on country selected form field.

#### How to implement?

- Select the phoneNumber field that you want to apply display based on Country. 
- Click on bind icon and add the logic as below. If the country is US then apply one set of display formats else other display format while entering phone number.

```js
Widgets.UserForm.formWidgets.country.datavalue==="US"?'(999) 999-9999':'9999 999999'
```