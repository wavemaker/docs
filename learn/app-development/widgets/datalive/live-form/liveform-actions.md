---
title: "Live Form - Actions"
id: ""
---

### Configuring live form actions

You can define **action buttons** using the **Actions** tab. By default, six actions are provided categorized based upon the behavior of the Form. They are:

- In Edit mode - **cancel**, **save** and **reset** actions of which cancel and save in are pre-selected.
- In View mode - **delete**, **update** and **new** actions.

For each action button, you can specify the

- **Title**;
- **class**;
- display **icon**;
- **Action** to be performed on click: These actions can be form actions like cancel, save and view; or navigation events; or any API invocation. **Multiple events** can be handled for a single Action.
- **Type** of button -
    - _submit_ or
    - _reset_;
- **hidden** to hide the button from the form
- choose an icon to be displayed on the button.

The Form Events can be triggered from actions outside the Live Form, i.e. a button placed outside the Live Form template can trigger a form save the event. [![](/learn/assets/lf_events.png)](/learn/assets/lf_events.png)

New action functionality can be added by clicking on the **ADD** button, against the respective category. Once the action is specified a code snippet will be created in the JavaScript which can be used to code the desired action. The Action will be a JS function as shown below. Here we have written a function to display an alert dialog. The name of the function is the action field entry in the custom button created earlier.

Page.test = function(){ 
        alert("hello");
   };

[![](/learn/assets/LF_actions.png)](/learn/assets/LF_actions.png)
