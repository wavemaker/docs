---
title: "Fields Configuration"
id: ""
---

### Configure form fields display options

You can set the display properties of the elements of the Form.

1. specify the **widget** to be used to represent each data field. Based on the data type of the field, the available widget options would vary.
2. create **custom columns** by clicking on the **'+'** icon. **Note:** If a custom column is not selected on the left panel, it will be deleted when the Form Designer is saved.
3. modify the behavior of **individual fields**, from the canvas, by selecting any field on the form and setting the properties:
    - The display **Title** for the field - can be bound to another variable,
    - **Input Type** to perform on screen validation of the user input, for example, setting the Input Text to email will ensure that the user enters the text in an email id format,
    - set the **Default Value** or bind it to a variable
    - choose when to **Update the data value** - on _blur_ or on _keypress_
    - set the **Update data value delay** in milliseconds
    - additional Validations like **Required**, pattern matching in the form of **Regular Expression** and **Maximum Characters** allowed
    - behavior like **Auto Focus**, **Read Only**, **Show** etc can be set.

[![](/learn/assets/Form_Fields.png)](/learn/assets/Form_Fields.png)

### Form Validations

There are various ways in which Form fields can be validated depending upon the underlying data type. You can see these options in the properties panel for the selected field on the canvas.

1. For each field, check **Required** check box to make it as mandatory field while submitting the form, this will issue an error in case the user hits save without making an entry
2. For **Text Type fields**, **Regular expression** field can be used to provide valid and desired formats.
3. For **Text Type fields**, you can restrict the **Maximum characters** to be entered
4. For **Number Type fields**, **Minimum and Maximum Values** permissible can be set
5. For **Date Type fields**, **Min Date, Max Date, Exclude Days and Dates** can be set. In this case, the date picker will not have the invalid dates available for selection.
6. For additional checks, you can use the **On Before Submit** event to perform any validation checks. For example, we want to make sure that the password entry is at least six characters in length. Select the **Events** panel and select Javascript for **On Before Submit** and enter the following code. This will ensure that before updating the data source, the JavaScript is executed.
    
    Page.form1Beforesubmit = function($data, $event) {
            function isValidData($data) {
                /\*restrict password to be minimum of 6 characters\*/
                if ($data.password) {
                    if ($data.password.length < 6) {
                        return {
                            'error': "Password too small"
                        };
                    }
                } else {
                    return {
                        'error': "Password field required"
                    };
                }
            }
            return isValidData($data)
        };
    

[![](/learn/assets/LF_valid.png)](/learn/assets/LF_valid.png)

< Configurations

Events & Methods >

Contents

- [1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)
    - [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
    - [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
    - [1.3 Form](/learn/app-development/widgets/datalive/form/)
        - [i. Data Source](/learn/app-development/widgets/datalive/form/form-data-source/)
        - [ii. Layouts](/learn/app-development/widgets/datalive/form/form-layouts/)
        - [iii. Form Configuration](/learn/app-development/widgets/datalive/form/form-configurations/)
        - [iv. Fields Configuration](#)
        - [v. Events & Methods](/learn/app-development/widgets/datalive/form/form-events-methods/)
        - [vi. Usage Scenarios](/learn/app-development/widgets/datalive/form/form-usage-scenarios/)
    - [1.4 List](/learn/app-development/widgets/datalive/list/)
    - [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
    - [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
- [2\. Container Widgets](/learn/app-development/widgets/widget-library/#container)
- [3\. Form Widgets](/learn/app-development/widgets/widget-library/#form)
- [4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)
- [5\. Chart Widgets](/learn/app-development/widgets/widget-library/#chart)
- [6\. Navigation Widgets](/learn/app-development/widgets/widget-library/#navigation)
- [7\. Advanced Widgets](/learn/app-development/widgets/widget-library/#advanced)
- [8\. Modal Dialog Widgets](/learn/app-development/widgets/widget-library/#dialog)
- [9\. Custom Widgets - Prefabs](/learn/app-development/widgets/widget-library/#prefabs)
- [10\. Mobile & Device Widgets](/learn/app-development/widgets/widget-library/#mobile)
