---
title: "Using Cascading Select within Live Form"
id: "using-cascading-select-within-live-form"
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

[Live Form Use Cases](/learn/app-development/widgets/datalive/live-form/liveform-use-cases/)

- [1. Live Form Basic Usage](/learn/app-development/widgets/datalive/live-form/live-form-basic-usage/)
- [2. How to split live form](/learn/how-tos/live-form-tabbed-form/)
- [3. How to link live form to another widget](/learn/how-tos/live-form-linking-another-widget/)
- [4. How to configure related fields in a Live Form](/learn/how-tos/live-form-related-fields/)
- [5. How to use cascading select and automplete widgets for fields in a Live Form](/learn/how-tos/using-cascading-select-autocomplete-live-form-fields/)
- [6. How to configure cascading select for fields in a Live Form](/learn/how-tos/using-cascading-select-within-live-form/)
- [7. How to add master-detail records from the same Live Form](/learn/how-tos/adding-master-detail-records-transaction/)
- [8. How to use cascaded Live Filter to populate Live Form](/learn/how-tos/using-cascading-filter-populate-live-form/)
- [9. How to add master-detail records from Live Form using Wizard](/learn/how-tos/using-wizard-master-detail-live-form/)
- [10. How to progressively add fields to a record using Wizard](/learn/how-tos/using-wizard-progressive-data-entry-live-form/)
- [11. How to accumulate data over multiple steps in a Wizard and save at the last step](/learn/how-tos/using-wizard-cumulative-data-entry-live-form/)
