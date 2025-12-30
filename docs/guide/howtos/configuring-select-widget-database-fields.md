---
title: "Configuring Select Widget from Database Fields"
id: "configuring-select-widget-database-fields"
last_update:
  author: "Author Name"
---

A Select widget can be used in various ways based on the source of data. Each type of data source needs a different approach. WaveMaker Select widget works in any one of the following ways:

- Using static list of values
- Using variable data
- Using display and data value fields from a Variable
- Using database fields

The options displayed in the Select drop-down can come from a database, too. For example, you want the user to select department id based on the department they belong to.

1. Drag and drop a Select and Label widget onto the canvas.
2. Bind the Select widget to a database. Here we are using the Department table from the hrdb, import the sample db that comes shipped with Studio and has been imported earlier and Create Database CRUD Variable Image: sel_db_var.png
3. Set the Datafield property to the deptid field and Display Field property to the name field of the Live Variable corresponding to Department dataset Image: sel_db_props.png
4. The selection made by the user is displayed in a Label widget, by binding the select datavalue to it. Image: sel_list_res.png
5. Preview the app and see the selected item from the Select widget displayed in the label.

Select Use Cases

- 1. How to use list of values for select widget configuration
- 2. How to use variable for select widget configuration
- 3. How to use display and data value fields for select widget configuration
- 4. How to use database fields for select widget configuration
- 5. How to configure cascading select
