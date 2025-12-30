---
title: "Configuring Select Widget using Display and Data Fields"
id: "configuring-select-widget-display-data-fields"
last_update:
  author: "Author Name"
---

A Select widget can be used in various ways based on the source of data. Each type of data source needs a different approach. WaveMaker Select widget works in any one of the following ways:

- Using static list of values
- Using variable data
- Using display and data value fields from a Variable
- Using database fields

Usually, when giving options to the user, one would want the option to make sense to the user while using a different value internally within the application. For example, the user may select Male/Female but the value stored could be M/F or 0/1. To cater to such needs, WaveMaker Studio offers an Entry type while creating a Model Variable. Using this option, the developer can specify different fields for the variable – one called dataValue and the other called name. For example, you want the user to select gender as Male or Female but want to use M or F internally.

1. Drag and drop a Select and Label widget onto the canvas.
2. [Create a variable](https://docs.wavemaker.com/learn/app-development/variables/), and choose the variable type as the **Model**.

!Model Variable

3. Select **Entry** as Type. Check the **Is List** property to confirm that the variable is storing the list and add the list values. You can use the text editor to enter the values in JSON format.

!select_widget_values

## Binding Select Widget with Variable

1. Bind the dataset of the **Model** variable to the **Select** widget.

!select_widget_values

2. Set the **Data field** property to the **dataValue** and **Display Field** to the **name** of the static variable.

!select_widget_ValueProperties

3. Drag and drop two **Label** widgets and bind them using the below **Use Expression** to show the Data value and display values.

    !select_widget_displayvalue

    !select_widget_datavalue

4. Preview the app and see the Display Value and Data Value of the selected item from the **Select** widget displayed on the screen with the use of the **Label** widget.

     !select_widget_ListResult


Select Use Cases

- 1. How to use list of values for select widget configuration
- 2. How to use variable for select widget configuration
- [3. How to use display and data value fields for select widget configuration](#)
- 4. How to use database fields for select widget configuration
- 5. How to configure cascading select
