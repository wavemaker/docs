---
title: "Restricting Menu Items based on the User Role"
id: "restricting-menu-item-display-based-user-role"
sidebar_label: "Restricting Menu Items based on the User Role"
---
---

**Problem Statement**: How to restrict certain users from accessing pages, links based on their login credentials. Using the **User Role** property of a Menu or Nav widget, you can restrict user access to certain pages or links based on the User Role value.

## Restrict Users to access Admin Data

To restrict 'user' role to access 'admin' related links (pages), use the following JSON structure for the Model Variable bound to the [Menu widget](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/).

```json
[
    {
    "label": "Dashboard",
    "icon": "wi wi-home",
    "link": "#/Main",
    "role": "user"
    },
    {
    "label": "Dropdown",
    "role": "admin, user",
    "children": [
            {
            "label": "Add Users",
            "icon": "wi wi-book",
            "task": "Widgets.admin.show=true",
            "role": "admin"
            },
            {
            "label": "Team",
            "icon": "wi wi-question-sign",
            "link": "#/Main"
            }
        ]
    },
    {
    "label": "Others",
    "icon": "wi wi-shopping-cart",
    "link": "http://www.example.com"
    },
    {
    "label": "Pending Orders",
    "icon": "wi wi-tags",
    "link": "#/Orders",
    "role": "user"
    }
]
```

### Data displays with user permissions

1. `Add Users` menu item will not be visible to the **user** role. Therefore, general users cannot access this item, and only `admin` gets access to it.
2. `Pending orders` menu item will not be visible to **admin** and only **user** role has access to it.
3. If a parent node has **admin**, **user** access and few of its children have `admin` access, then if the logged-in user has only **user** access, those child nodes will be hidden as shown in the Dropdown item of the above example.
4. The task (in the above example showing the label widget) will be performed and the navigation will be done based on the specified link.

:::note
The user role values should be the same as that given while [enabling Security for the App](/learn/app-development/app-security/app-security).
:::

## See Also

[Dropdown Menu Basic Usage](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/)  
[How to localize menu items](/learn/how-tos/implementing-localization-dropdown-menu/)  
