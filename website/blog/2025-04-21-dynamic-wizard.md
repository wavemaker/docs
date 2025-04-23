---
title: "Dynamic Wizards in WaveMaker Studio"
author: "Sairama Krishna Bonala"
---
---

WaveMaker's Wizard Widget now offers dynamic features for building flexible, multi-step forms.

WaveMaker Dynamic Wizard Widget offers the following benefits.

- Auto-generate wizard steps from a dataset
- Load partial content into steps
- Build forms dynamically based on user context
- Set the default wizard step with index
- Step management (Add, remove, and goto step)

<!-- truncate -->

Let’s dive into these features one by one.

## 1. Dynamic Wizard with Dataset

The wizard can automatically generate steps based on a provided dataset or JSON object, allowing reuse across different scenarios with varying data.

## 2. Load Partial Content Inside Wizard Steps

Each wizard step can load partial content, such as HTML templates or UI elements, based on specific data.

## 3. Dynamic Wizard with Dynamic Form

A Dynamic Form allows you to generate forms based on a dataset. Each wizard step can contain dynamic form elements that are generated based on the data passed in.

This functionality is powerful in scenarios where the form fields, validation, and types might change depending on the user’s input or the context of the wizard.

## 4. Default Step Index

Set the wizard to open at a specific step using the defaultstepindex attribute, enhancing user navigation.

For example, when the Default Step Index is set to 2, it will open the 3rd step in the wizard

```xml
<wm-wizard type="dynamic" stepstyle="justified" class="number" 
name="wizard2" dataset="bind:Variables.dynamicData.dataSet" 
defaultstepindex="2">
...
</wm-wizard>

```

## 5. Add Step & Remove Step

Programmatically add or remove wizard steps based on conditions like user choices or form validations.

Sample Script to add and remove steps of the Wizard

```javascript
// Add Step
Page.button1Click = function ($event, widget) {
   Page.Widgets.wizard1.addStep(
        { 
            'name': 'wizardstep4', 
            'title': 'Personal Info', 
            'subtitle': 'All details are mandatory', 
            'content': 'personalPartial', 
            'enableskip': true 
        }
    );
};

// Remove Step by name
Page.button2Click = function ($event, widget) {
   Page.Widgets.wizard1.removeStep('wizardstep3');
};

// Remove Step by index
Page.button3Click = function ($event, widget) {
   Page.Widgets.wizard1.removeStep(2);
};

```

With these `addStep` and `removeStep` methods, you can easily add or remove steps dynamically, making the wizard highly customizable.

## 6. Go to Any Step - Navigate Like a Pro

Navigate directly to a specific step using the **`gotoStep`** method, by name or index, provided the step is already completed.

:::note
This feature works only if the step is already in the **done** state.
:::

Sample Script to use the gotoStep method

```javascript
// Go to step by Index
Page.button1Click = function ($event, widget) {
   Page.Widgets.wizard1.gotoStep(1);
};
// Go to step by Name
Page.button2Click = function ($event, widget) {
   Page.Widgets.wizard1.gotoStep('wizardstep3');
};
```

## 7. Track Current Step - Know Where You Are

Use the **`currentStepIndex`** method to determine the user's current position in the wizard, useful for progress tracking. This helps provide real-time feedback, track user progress, or display the current step in other parts of the UI.

Script to access Current Step Index

```javascript
let index = Page.Widgets.wizard1.currentStepIndex;
console.log("Step index", index);
```


## 8. First & Last Step - Know Your Position

Determine if the current step is the first or last using **`isFirstStep`** and **`isLastStep`** methods, aiding in UI adjustments. These are useful for disabling buttons or triggering special actions.

Script to access `isFirstStep` and `isLastStep`

```javascript
Page.Widgets.wizard1.isFirstStep; // returns true/false
Page.Widgets.wizard1.isLastStep; // returns true/false
```

## Conclusion

These features make WaveMaker's wizard an incredibly flexible and powerful tool for building user-friendly, multi-step forms and processes. Whether you need to load data dynamically, navigate steps programmatically, or manage the wizard flow based on user actions, these improvements offer a rich set of features that can be tailored to any business need. With these capabilities, you can build a more engaging and customizable user experience for any application.


