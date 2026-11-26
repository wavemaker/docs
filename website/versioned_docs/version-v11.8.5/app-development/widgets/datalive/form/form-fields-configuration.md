---
title: "Form Fields Configuration"
id: "form-fields-configuration"
sidebar_label: "Fields Configuration"
---
---

## Configure form fields display options

You can set the display properties of the elements of the Form.

1. specify the **widget** to be used to represent each data field. Based on the data type of the field, the available widget options would vary.
2. create **custom columns** by clicking on the **'+'** icon. 

:::note
If a custom column is not selected on the left panel, it will be deleted when the Form Designer is saved.
:::

3. modify the behavior of **individual fields**, from the canvas, by selecting any field on the form and setting the properties:
    - The display **Title** for the field - can be bound to another variable,
    - **Input Type** to perform on screen validation of the user input, for example, setting the Input Text to email will ensure that the user enters the text in an email id format,
    - set the **Default Value** or bind it to a variable
    - choose when to **Update the data value** - on _blur_ or on _keypress_
    - set the **Update data value delay** in milliseconds
    - additional Validations like **Required**, pattern matching in the form of **Regular Expression** and **Maximum Characters** allowed
    - behavior like **Auto Focus**, **Read Only**, **Show** etc can be set.

[![](/learn/assets/Form_Fields.png)](/learn/assets/Form_Fields.png)

![image](/learn/assets/form_field_properties.png)
## Form Validations

There are various ways in which Form fields can be validated depending upon the underlying data type. You can see these options in the properties panel for the selected field on the canvas.

1. For each field, check **Required** check box to make it as mandatory field while submitting the form, this will issue an error in case the user hits save without making an entry
2. For **Text Type fields**, **Regular expression** field can be used to provide valid and desired formats.
3. For **Text Type fields**, you can restrict the **Maximum characters** to be entered
4. For **Number Type fields**, **Minimum and Maximum Values** permissible can be set
5. For **Date Type fields**, **Min Date, Max Date, Exclude Days and Dates** can be set. In this case, the date picker will not have the invalid dates available for selection.
6. For additional checks, you can use the **On Before Submit** event to perform any validation checks. For example, we want to make sure that the password entry is at least six characters in length. Select the **Events** panel and select Javascript for **On Before Submit** and enter the following code. This will ensure that before updating the data source, the JavaScript is executed.

```js
Page.form1Beforesubmit = function($data, $event) {
        function isValidData($data) {
            /*restrict password to be minimum of 6 characters*/
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
```    

[![](/learn/assets/LF_valid.png)](/learn/assets/LF_valid.png)

