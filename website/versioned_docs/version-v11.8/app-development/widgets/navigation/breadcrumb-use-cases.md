---
title: "Creating Breadcrumb"
id: "breadcrumb-use-cases"
sidebar_label: "Creating a Breadcrumb"
---
---

Learn how to use a **Breadcrumb** widget.

Breadcrumbs are a type of secondary navigation and they help users to recognize the hierarchy, and they are typically placed in a horizontal form under the header or navigation of the website. The starting point for the breadcrumb begins from the home page and it is considered as the first level.

## Creating Breadcrumb with three pages

**Scenario**: Consider an app with three pages - Main, First and Second Pages. Breadcrumb in the First Page will enable one to navigate to Main Page, while the one in Second Page will provide navigation to First and Main Page.

[![breadcrumb](/learn/assets/bc_run1.png)](/learn/assets/bc_run1.png)

[![breadcrumb](/learn/assets/bc_run2.png)](/learn/assets/bc_run2.png)

### Create App

Create an app with three pages - Main, Page1, and Page2. We have used Employee Profile and Admin Dashboard templates for Page1 and Page2 respectively.

### Create Variable

- Click the Variable option under Variables in Workspace Toolbar. Click **New Variable** and then click **Model**.  Choose the Application as Owner i.e. Application scoped. 

[![create varriable](/learn/assets/Var_create.png)](/learn/assets/Var_create.png)

- In the text editor of the Model Variable, enter the following code: This code sets values for the properties of _label, id, icon, and link_ to be displayed on the breadcrumb.
  - _label_ and _icon_ are the name and icon displayed on the Breadcrumb,
  - _a link_ is an action to be performed when the Breadcrumb item is clicked,
  - _id_ is the identifier for the current page i.e the page name. The Breadcrumb will search for the page name in this dataset and gets the first possible path for the page.
  - _children_ will be a repeat of the entire structure in case you want a sub-menu like structure

```json
[{
"label": "Main Page",
"icon": "glyphicon glyphicon-home",
"link": "#/Main",
"id": "Main",
"children": [
  {
    "label": "First Page",
    "icon": "wi wi-ellipsis-v",
    "link": "#/Page1",
    "id": "Page1",
    "children": [
      {
        "label": "Sub Page1",
        "id": "subPage11",
        "icon": "wi wi-euro-symbol"
      },
      {
        "label": "Sub Page2",
        "id": "subPage12",
        "icon": "wi wi-euro-symbol",
        "link": "#/subPage12"
      }
    ]
  }
  ]},
  {
    "label": "Page2",
    "id": "Page2",
    "icon": "wi wi-euro-symbol",
    "link": "#/Page2"
  }
]
```

[![breadcrumb variable](/learn/assets/bc_var.png)](/learn/assets/bc_var.png)
    
### Binding Variable with Breadcrumb Widget

- Drag and drop **Breadcrumb widget** onto the canvas of FirstPage
- Bind the **value (under dataset) property** to the Model **dataset** which we have created above and set the **Action** properties to the corresponding fields from the Model.

[![breadcrumb properties](/learn/assets/bc_props.png)](/learn/assets/bc_props.png)

### Steps for another Page

- Open the **Page2** and repeat the above steps.

## Run the app

- Run the app, see the breadcrumb displayed in the First and Second pages. Clicking on the links will navigate to the previous pages
- In the above Model, structure the provision to have Breadcrumb for sub-levels is also given, for example, Page1 has two sub-pages subPage11 and subPage12. This will help in setting the path for the sub-pages.

:::note
If the ID's are repeating then the first possible path will be shown in the breadcrumb.
:::

## See Also

[Creating a Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu-use-cases)  
[Creating Navigation](/learn/app-development/widgets/navigation/nav-basic-usage)  

