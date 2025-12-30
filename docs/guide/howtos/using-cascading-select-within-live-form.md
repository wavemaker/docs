---
title: "Using Cascading Select within Live Form"
id: "using-cascading-select-within-live-form"
last_update:
  author: "Author Name"
---

We will see how to configure cascading selects for Live Form fields using the on Change Event. We are placing the Live Form within a list.

1. Use cascaded selects in Live form within a list.
2. Use an on Change event which will have oldval and newval and newval can be used to filter data in the other select widget.
3. Update of rows in Live form with form data mapped to current item of the list.

We will be using the following JavaScript function:

Page.liveform1_categorytestChange = function($event, widget, item, currentItemWidgets, newVal, oldVal) {
    Page.Variables.selectsubcategory.setInput('type', newVal.category);
    Page.Variables.selectsubcategory.update();
};

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vThYpK4cJfRIKcUk6TAh8lJGUC-QkBH5gAEBtWimJuT3qO5JKPCbR5QWRg7qDyfZqdshLQkupwo1Bz2/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

Live Form Use Cases

- 1. Live Form Basic Usage
- 2. How to split live form
- 3. How to link live form to another widget
- 4. How to configure related fields in a Live Form
- 5. How to use cascading select and automplete widgets for fields in a Live Form
- 6. How to configure cascading select for fields in a Live Form
- 7. How to add master-detail records from the same Live Form
- 8. How to use cascaded Live Filter to populate Live Form
- 9. How to add master-detail records from Live Form using Wizard
- 10. How to progressively add fields to a record using Wizard
- 11. How to accumulate data over multiple steps in a Wizard and save at the last step
