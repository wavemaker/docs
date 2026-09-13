---
title: "Live Form - Actions"
id: "liveform-actions"
sidebar_label: "Actions"
---
---

You can define **action buttons** using the **Actions** tab. By default, six actions are provided categorized based upon the behavior of the Form. They are:

### Edit mode
1. **Cancel**
2. **Save**
3. **Reset** 

:::note
Out of all the actions, the cancel and save actions are pre-selected.
:::

### View mode 
1. **Delete** 
2. **Update** 
3. **New**

## Configuring Live Form Actions
For each action button, you can specify the following:

- **Title**
- **Class**
- Display **icon**
- On-click **Action**   
    - These can be set for form actions, such as cancel, save and view.
    - For navigation events
    - API invocation. 

:::note
**Multiple events** can be handled for a single Action.
:::
- **Type** of button
    - _submit_
    - _reset_;
- **hidden** to hide the button from the form
- choose an icon to be displayed on the button.

### How to Trigger Form Actions
The Form Events can be triggered from actions outside the Live Form. For examples, a button placed outside the Live Form template can trigger a form save the event. 

[![](/learn/assets/lf_events.png)](/learn/assets/lf_events.png)

### Adding a New Action

New action functionality can be added by clicking on the **ADD** button, against the respective category. Once the action is specified a code snippet will be created in the JavaScript which can be used to code the desired action. The Action will be a JS function as shown below. Here we have written a function to display an alert dialog. The name of the function is the action field entry in the custom button created earlier.

```
Page.test = function(){ 
        alert("hello");
   };
```

[![](/learn/assets/LF_actions.png)](/learn/assets/LF_actions.png)
