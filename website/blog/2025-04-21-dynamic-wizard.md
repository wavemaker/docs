---
title: "Design Smarter, Flow Better with Dynamic Wizards"
author: "Sairama Krishna Bonala"
---
---

WaveMaker offers a powerful Wizard Widget that helps developers create multi-step forms efficiently. But what if we could make this wizard dynamic, automatically generating steps based on a dataset, and supporting dynamic forms?

<!-- truncate -->

Let’s dive into these features one by one.

## 1. Dynamic Wizard with Dataset - Auto-Build Your Steps!

A Dynamic Wizard takes full advantage of the dataset you provide. The number of wizard steps and the content inside each step can be automatically generated based on a dataset. This approach allows the reuse of the same wizard across different scenarios, where the number of steps or content varies depending on the data source.

You can bind the wizard steps to a dataset or JSON object, which will automatically generate each step based on the data provided.

## 2. Load Partial Content Inside Wizard Steps - One Step, Many Templates

Sometimes, you might want to load Partial content inside each wizard step, whether it’s HTML content, templates, or other UI elements. This is where Partial Page Content comes into play.

WaveMaker Wizard Widget supports Partials, allowing you to load dynamic content into each wizard step based on specific data.

## 3. Dynamic Wizard with Dynamic Form - Adapt as You Go!

A Dynamic Form allows you to generate forms based on a dataset. Each wizard step can contain dynamic form elements that are generated based on the data passed in.

This functionality is powerful in scenarios where the form fields, validation, and types might change depending on the user’s input or the context of the wizard. With the help of dynamic forms, you can provide a flexible and scalable solution.

## 4. Default Step Index - Start Where You Need

In some cases, you might want the wizard to open directly at a particular step rather than always starting at step one. The default step index feature allows you to set the starting point based on a given index (zero-based).

For example, when the Default Step Index is set to 2, it will open the 3rd step in the wizard

```xml
<wm-wizard type="dynamic" stepstyle="justified" class="number" 
name="wizard2" dataset="bind:Variables.dynamicData.dataSet" 
defaultstepindex="2">
...
</wm-wizard>

```

## 5. Add Step & Remove Step - Real-Time Flexibility

WaveMaker provides methods to add and remove wizard steps programmatically. This flexibility is great for scenarios where steps may be added or removed dynamically based on certain conditions like user choices or form validations.

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

With these addStep and removeStep methods, you can easily add or remove steps dynamically, making the wizard highly customizable.

## 6. Go to Any Step - Navigate Like a Pro

Sometimes, you might need to navigate the wizard directly to a specific step based on certain logic or conditions. With the gotoStep method, you can navigate directly to any wizard step by its name or index (zero-based).

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

WaveMaker Wizard also allows you to track the current step in the wizard at any given time. You can get the current step index using the currentStepIndex method, which helps provide real-time feedback, track user progress, or display the current step in other parts of the UI.

Script to access Current Step Index

```javascript
let index = Page.Widgets.wizard1.currentStepIndex;
console.log("Step index", index);
```


## 8. First & Last Step - Know Your Position

`isFirstStep` method checks whether the current step in the wizard is the first step or not.

`isLastStep` method checks whether the current step in the wizard is the first step or not.

These are useful for disabling buttons or triggering special actions.

Script to access `isFirstStep` and `isLastStep`

```javascript
Page.Widgets.wizard1.isFirstStep; // returns true/false
Page.Widgets.wizard1.isLastStep; // returns true/false
```

## Conclusion

These features make WaveMaker's wizard an incredibly flexible and powerful tool for building user-friendly, multi-step forms and processes. Whether you need to load data dynamically, navigate steps programmatically, or manage the wizard flow based on user actions, these improvements offer a rich set of features that can be tailored to any business need. With these capabilities, you can build a more engaging and customizable user experience for any application.


