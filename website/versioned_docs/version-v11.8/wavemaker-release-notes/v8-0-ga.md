---
title: "WaveMaker 8.0.GA - Release date: 9 November 2015"
id: "v8-0-ga"
sidebar_label: "Release v8.0.GA"
---
*Here is a summary of key features, known issues and bug fixes offered in 8.0.GA Release.*

## Highlights
---

### LiveForm Widget

**LiveForm** widget now allows layout widgets like **Tab**, **Accordion** etc. These layout widgets can hold any other widget which can be bound to the form dataset fields.

This feature can be used when the form contains too many elements which can be organised under various heads thus having a clutter-free form. This feature can also be when the view of the form needs to be changed based upon the logged in user with the help of the security service.

### Support for Composite Keys

From this release all **Live Variables** support CRUD operations with Entities having **composite keys**.

**Database designer** also supports composite keys to be created from the designer and manage relationships involving composite keys.

### Grid Layout Widget

**Grid Layout** widget has an additional property that allows you to specify the number of columns your app needs. This will rearrange the layoutgrid accordingly.

### Date and Datetime Widget

**Date and Datetime widgets** can now be set to _exclude specific days of the week and dates_ which prevent the user from selecting the specified days/dates through the date picker_._

_Min and Max Value_ for a **Date, Time and Datetime widgets** can be set to a value from widget or variables through binding.

### Chart Widget

**Chart Widget** has now a _selected item_ property exposed. This property enables you to capture the details of the datapoint that is selected by the user on the chart. This value can be bound to appropriate widget or used in a JavaScript function.

**Column & Bar charts** now support the starting values to be the minimum value from the dataset they are bound to, instead of starting from zero.

Chart Widget of type Column and Bar have the option of setting the _X- and Y-Domain._ This is particularly useful when the data depicted in these charts has very minute changes. By default the X- and Y-axis values start from zer. You can choose to start the scale from the _min_ data value, this would help rendering of the chart more meaningful.

### Layout Widgets

_Add Pane_ functionality for **Accordion, Tab, Carousel and left navigation panel**  can now be accessed from the Properties panel instead of the canvas.

### Enhancements

1.  **Text** and **Textarea** widgets have an added _keypress event_ that can be captured and handled.
2.  **Date, Time and DataTime widgets** now have the capability to deal with unix _timestamp(epoch) value_ which can be used in intermediate calculations and validations.
3.  **File Upload** has an additional property _**mode**_ which can be set to _update or select._ This feature can be used to either upload the file immediately upon selection or defer the upload to later through the invocation of the _selectFiles_ outbound property of the File Upload widget. Default value is upload.
4.  **Events for Variables** now support _multiple events_ to be configured.
5.  **Popover Widget** has an additional _badge property_, whose content can be set or bound.
6.  **Panel Header** cannot be removed. For a panel with no header use the _Tile widget._

## Known Issues
--- 
*   There is a known issue involving LiveForm, BLOB data and **IE9**. Due to HTML file limitations in IE9, the blob data is not supported in LiveForm.