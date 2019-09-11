---
title: "Using Filter Criteria for a Database CRUD Variable"
id: ""
---

**Scenario**: To filter the rows fetched from a database table using the Filter Criteria option of Database CRUD Variable (of 'read' type). **Features**

- Filter Fields functionality acts as a query builder.
- Preview of the where clause that will be built based on the specification.

**Prerequisites**:

1. A WaveMaker Web Application, with a database imported (we are using the sample HR Database).
2. A Database CRUD variable, here we are using the Employee table from the sample hrdb. **Note** this feature is available only for the Database CRUD variable of type '**read**'

**Steps**:

1. [Access the Variable](http://[supsystic-show-popup id=105]) and navigate to the **Filter Criteria** tab.
2. Here you can specify the conditions for applying the row filter on specified field values.
3. Each condition is called a Criteria and multiple conditions can be categorized into a Group.
4. Criteria/Groups can be joined by AND/OR expression.
5. Filter conditions can be selected from the given drop down. The conditions are pre-populated based upon the filter field data type.
6. Filter Criteria Preview gives you the filter expression based on the criteria and groups that you add.
7. You can delete any criteria or group.

[![](/learn/assets/crudvar_filterfields.png)](/learn/assets/crudvar_filterfields.png)

Variable Usage

- [1\. How-to use Filter in Live Variables](/learn/how-tos/using-filter-conditions-variable/)
- [2\. How to use Live Variable APIs](/learn/how-tos/using-live-variable-apis/)
- [3\. How to work with Notification Actions](/learn/how-tos/using-notification-actions/)
- [4\. How to work with Navigation Actions](/learn/how-tos/using-navigation-action/)
- [5\. How to work with Variables to access Queries and Procedures](/learn/how-tos/using-variables-queries-procedure/)
- [6\. How to work with Service Variables in a Form](/learn/how-tos/using-service-variable-form/)
- [7\. How to work use Filter Fields with Database CRUD Variables](#)
