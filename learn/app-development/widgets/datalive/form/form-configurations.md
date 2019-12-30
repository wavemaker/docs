---
title: "Form Configurations"
id: "form-configurations"
sidebar_label: "Configuration"
---
---

The main features of a Form are as follows:

- **Title** and **Sub Heading** can be set for the Form
- **Default Form Data** can be set to value or bound to another widget like Data Table, List or Live Filter. These define the values to be displayed when the Form is first loaded
- **Dataset Value** defines the Web service API or database API on which the insert or update operations will be performed. This is set to the Variable selected in the data selection step while configuring the Form

[![](/learn/assets/Form_props1.png)](/learn/assets/Form_props1.png)  [![](/learn/assets/Form_props2.png)](/learn/assets/Form_props2.png)Other **Form Configurations** include:

- Set** Validation Type **at form level. It can be
    - _Default_: here the all failed validation messages will be shown under the corresponding field;
    - _HTML_: the HTML validations will be applied and displayed for the first failed field, the validation messages set at the field level will be displayed once the field loses focus;
    - _No Validations_: validations will not be performed in this case.
- Define the **Behavior** in terms of
    - **Method** to be invoked - _post_, _put_ or _delete_
    - **Action** to be performed in terms of Http request action path
    - **Encoding Type**
    - **Target**
    - Enable **Auto Complete** for the form fields
- **Caption** properties in terms of Alignment, Position, and Size
- Return **Message** configuration - whether inline or toaster, and content for call success and failure cases

[![](/learn/assets/form_config.png)](/learn/assets/form_config.png)**Form Field Configurations** include Display Properties:

- Widget Representation,
- Conditional Class Specifications

[![](/learn/assets/form_field_config.png)](/learn/assets/form_field_config.png)**Form Actions** include default actions of Save and Reset. You can add your own custom actions, if needed.[![](/learn/assets/form_action_config.png)](/learn/assets/form_action_config.png)

