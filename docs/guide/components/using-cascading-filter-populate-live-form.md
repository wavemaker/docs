---
title: "Using cascading Filter to populate Live Form"
id: "using-cascading-filter-populate-live-form"
last_update: { author: "WaveMaker" }
---
We will be use Live Filter result value to populate a Live Form.

1. Filter a field based on other fields using the filter on field property in Live Filter.
2. For filtering the unique value for fields such as name, phone number, email etc. by using cascaded filter and in turn change the fields data and save it.

We use the following query to obtain employee details based upon first and last name:

select * from employees where first_name like :fname and last_name like :lname

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTW25WmFg-BgHVFJ4-ho_972ImUe_ZXETzi1eM3x8QMh6OdOq6-kVulqGCfd50ex6kEz2AVNE_3oH0B/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

[Live Form Use Cases](../../user-interfaces/web/components/angular-components/datalive/live-form/liveform-use-cases.md)

- [1. Live Form Basic Usage](../../user-interfaces/web/components/angular-components/datalive/live-form/live-form-basic-usage.md)
- [2. How to split live form](./live-form-tabbed-form.md)
- [3. How to link live form to another widget](./live-form-linking-another-widget.md)
- [4. How to configure related fields in a Live Form](./live-form-related-fields.md)
- [5. How to use cascading select and automplete widgets for fields in a Live Form](./using-cascading-select-autocomplete-live-form-fields.md)
- [6. How to configure cascading select for fields in a Live Form](./using-cascading-select-within-live-form.md)
- [7. How to add master-detail records from the same Live Form](./adding-master-detail-records-transaction.md)
- [8. How to use cascaded Live Filter to populate Live Form](./using-cascading-filter-populate-live-form.md)
- [9. How to add master-detail records from Live Form using Wizard](./using-wizard-master-detail-live-form.md)
- <!-- <!-- [10. How to progressively add fields to a record using Wizard](/learn/how-tos/using-wizard-progressive-data-entry-live-form/) --> -->
- <!-- <!-- [11. How to accumulate data over multiple steps in a Wizard and save at the last step](/learn/how-tos/using-wizard-cumulative-data-entry-live-form/) --> -->
