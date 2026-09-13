---
title: "Creating a Dropdown Menu"
id: "dropdown-menu-use-cases"
sidebar_label: "Creating a Dropdown Menu"
---
---

This document talks of a simple Dropdown Menu usage. For usage example involving role-based menu access [see here](/learn/how-tos/restricting-menu-item-display-based-user-role/).

In this section, we will walk through the steps to create a multi-level menu, with icons and links to pages at various levels.

[![](/learn/assets/menu_run1.png)](/learn/assets/menu_run1.png) 

[![](/learn/assets/menu_run2.png)](/learn/assets/menu_run2.png) 

## Using a Model Variable

We will be using a Model Variable for this example.

1. Create or Open the app where you want to use the Dropdown Menu
2. Open the Variables dialog from the Variables menu and using New Variable create a Model variable ([Know more about variables)](/learn/app-development/variables/model-variable/).
3. Name the variable as _menudata_ and _s_elect _isList_ option_._ 

[![](/learn/assets/Dropdown_Var_create.png)](/learn/assets/Dropdown_Var_create.png)

4. Add the following in the _Text Editor._ It defines the structure for Menu identifying _Label_, _Icon_, _Link_, and _Children_. Icons can be [halflings from glyphicons](http://glyphicons.com/) or [font awesome](https://fortawesome.github.io/Font-Awesome/cheatsheet/) icons.

```json
    [
      {
        "label": "Main Page",
        "icon": "glyphicon glyphicon-home",
        "link": "#Main"
      },
      {
        "label": "Facebook",
        "icon": "glyphicon glyphicon-user",
        "link": "http://www.facebook.com"
      },
      {
        "label": "Search Engines",
        "icon": "glyphicon glyphicon-search",
        "children": [
          {
            "label": "Google",
            "icon": "glyphicon glyphicon-arrow-right",
            "link": "http://www.google.com"
          },
          {
            "label": "Yahoo",
            "icon": "glyphicon glyphicon-arrow-right",
            "link": "http://www.yahoo.com"
          }
        ]
      }
    ]
```

:::note
If you follow this structure, WaveMaker picks the label, icon, link and children tags automatically. If you are using different tag names, then you need to specify them in the Menu property as shown in step: 4
:::

[![](/learn/assets/fieldeditor.png)![](/learn/assets/fieldeditor.png)](/learn/assets/fieldeditor.png)

5. Bind the _Value_ property of the Menu widget to the model variable created in the previous step. 

[![](/learn/assets/menu_props.png)](/learn/assets/menu_props.png)

6. Set the _Action label_, _Action icon_, _Action link_, _Sub actions_ to the appropriate item names from the model variable. 

:::note
If you have used the same names then you may skip this step.
:::

7. Use the _Action link_ specified above to navigate to a page within the project, or an external URL. You can use the **On Select event** to invoke a dialog or call a variable. From the Events tab of Properties panel, set On Select event to JavaScript and use the following code. This code will check if the selected value of the Menu is My Account and open either a dialog or invoke a variable.

```js
if($item.label=="My Account"){
    DialogService.open("DialogName");
    }
else{
    Page.Variables.logoutAction.invoke();
  }
```

8. Run the application and see the menu in action.
