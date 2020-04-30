---
title: "Forms Overview"
id: "form"
sidebar_label: "Forms Overview"
---
---

A form consists of a group of input fields that connects to a datasource such as a table or query. Using Form widget, you can enter, edit, or display data from the data source. For example, a simple contact form, registration form, login form, and more.

Based on your datasource, you can create forms to contain text fields, email, date, dropdown, checkboxes, and more. Plus, you can add validations to the form fields to capture quality and accurate information from the users.

Additionally, build complex forms that contain multiple data widgets inside a single form, and form inside another form called repeated sections.

[![](/learn/assets/Form_run.png)](/learn/assets/Form_run.png)

## Different Types of Forms

Use an appropriate type of form to work with different types of datasets. There are two types of forms in WaveMaker; they are **Form** and **Live Form**.

### Form

Use **Form** widget to work with a service or procedure based flow. For this, you can use a service variable or CRUD variable through API calls like, REST API, SOAP, and more. You can configure fields to use an appropriate **[Form Widget](/learn/app-development/widgets/widget-library#form-widgets)**. For example, text, number, dropdown, and more.

### Live Form

**Live Form** works similar to a **Form**. However, Live Form is specific to database CRUD operations when you import a database from an external resource.

:::note
Form and Live Form are two different widgets that work similarly. Live Form is used for DB Services with CRUD operations only. For more information, see [Live Forms](/learn/app-development/widgets/datalive/live-form).
:::

## How do Forms work

A form is designed to submit the user-provided data into the server and perform business operations on it. When the user submits the form data, the value expressions handles the data further. A form contains a group of input fields. Each field binds to the variable metadata that you can configure to the form-field settings.

### Handling Form Submission Data

Firstly, to build a form, you should have a dataset ready. You can use APIs for REST services, java service, database service, and more. There are multiple ways to build and manage datasource in WaveMaker. 

Create a form instantly even without having a dataset ready with a model variable. This helps you to plan and design your form structure.  For more information, see [Build a Form](/learn/app-development/widgets/datalive/form/form-usage-scenarios).

### Layout and styling options

![form layout selection](/learn/assets/form-layout-selection.png)

#### Dialog

You can display form as a dialog. This means the form displays a pop-up when an action occurs.  

#### Inline

Show the form inline as a page.

#### Align 

Set the alignment of the form. You can choose from left, center, right alignment.

#### Position

Set the position of the input field and label placement. Label: Field, Field: Label, Label: Field below. See the image above.

### Configure Form Fields

![Form field](/learn/assets/selectfield.gif)

- By default, an appropriate **Form Widget** is assigned to each field. However, you can select a suitable **Form Widget** for a field.
- Field input validation. For example, should the field be a required field, or should it contain a regex expression, or more custom [field validations](/learn/app-development/widgets/datalive/field-validator).
- Reset form field data. For example, to clear entered data, or to start over.
- Allow performing actions. For example, edit, save or submit data, and add a new record.
- Select form layout styles. For example, display form fields in a single column, two columns, or three columns.

