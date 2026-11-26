---
title: "Navigation - Basic Usage"
id: "nav-basic-usage"
sidebar_label: "Creating navigation"
---
---

## Steps to Create Navigation

In this post, we will walk through the steps to create a simple navigation, with icons and links to pages.

[![](/learn/assets/nav_run.png)](/learn/assets/nav_run.png) 

We will be using a Model Variable for the purpose of this example:

1. Create or Open page where you want to use the Nav Widget.
2. Open the Variables dialog from the Variables menu and using New Variable create a Model variable ([Know more about variables)](/learn/app-development/variables/model-variable/). 

[![](/learn/assets/Nav_Var_create.png)](/learn/assets/Nav_Var_create.png)

3. Create a new Model Variable called as _navvar_ and select _isList_. 

[![](/learn/assets/nav_var.png)](/learn/assets/nav_var.png)

4. Add the following in the _Text Editor_, this defines the structure for Menu identifying _Label_, _Icon_, _Link_, _Badge Value_ and _sub-action_. Icons can be [halflings from glyphicons](http://glyphicons.com/) or [font awesome](https://fortawesome.github.io/Font-Awesome/cheatsheet/) icons.

```    
[
  {
    "label": "Home",
    "Icon": "glyphicon glyphicon-home",
    "Link": "#Main",
    "badge-value": "2",
    "sub-action": {
      "label": "Sub-action"
    }
  },
  {
    "label": "Projects",
    "Icon": "wi wi-folder-open",
    "Link": "#projects",
    "badge-value": "3"
  },
  {
    "label": "Services",
    "Icon": "wi wi-settings-applications",
    "Link": "#services",
    "badge-value": "1"
  }
]
```    

5. Bind the _Value_ property of the Menu widget to the variable created in the previous step.
6. Set the
    
  - _Action Label_ to label,
  - _Action Icon_ to Icon,
  - _Action Link_ to Link,
  - _Item Badge_ to badge-value,
  - _Sub Actions_ to sub-action.
  
  If you need you can modify the JSON structure given for the Model Variable and do the appropriate settings. 
  
  [![](/learn/assets/nav_props.png)](/learn/assets/nav_props.png)

7. Run the application and see the menu in action.

## Multilevel Nav

You can have multiple levels of nav-items. Follow the steps from the above example, replace the Variable JSON with the below code:

```
[
    {
    "label": "item1",
    "icon": "wi wi-euro-symbol",
    "children": [
    {
    "label": "sub-menu-item1",
    "icon": "wi wi-euro-symbol"
    },
    {
    "label": "sub-menu-item2",
    "icon": "wi wi-euro-symbol",
    "children": [
    {
    "label": "sub-menu-child-item1",
    "icon": "wi wi-euro-symbol",
    "children": [
    {
    "label": "sub-menu-child-item1-item1",
    "icon": "wi wi-euro-symbol",
    "path": "/item1/item2/item1/item1"
    },
    {
    "label": "sub-menu-child-item1-item2",
    "icon": "wi wi-euro-symbol",
    "path": "/item1/item2/item1/item2"
    }
    ]
    },
    {
    "label": "sub-menu-child-item2",
    "icon": "wi wi-euro-symbol"
    }
    ]
    }
    ]
    },
    {
    "label": "item2",
    "icon": "wi wi-euro-symbol"
    },
    {
    "label": "item3",
    "icon": "wi wi-euro-symbol"
    },
    {
    "label": "item4",
    "icon": "wi wi-euro-symbol"
    }
]
```

You will get the following nav.

[![](/learn/assets/nested_nav_items.png)](/learn/assets/nested_nav_items.png)

