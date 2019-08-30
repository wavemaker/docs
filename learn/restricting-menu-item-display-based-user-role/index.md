---
title: "Restricting menu item display based on user role"
id: ""
---

**Problem Statement**: How to restrict certain users from accessing pages/links based upon their login credentials.Using the User Role property of a Menu or Nav widget, you a can restrict user access to certain pages/links based upon the User Role value. For example, to restrict 'user' role to access 'admin' related links(pages), use the following JSON structure for the Model Variable bound to the [Menu widget](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/):

\[
{
"label": "Dashboard",
"icon": "wi wi-home",
"link": "#/Main",
"role": "user"
},
{
"label": "Dropdown",
"role": "admin, user",
"children": \[
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
\]
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
\]

From the above data:

1. 'Add Users' menu item will not be visible to _user_ and thus cannot access  page as only 'admin' access role is given on that item.
2. 'Pending orders' menu item will not be visible to _admin_ as only 'user' access role is allowed.
3. If a parent node has '_admin, user_' access and few of it children only have '_admin_' access then if logged in user has only '_user_' access then those child nodes will be hidden. Like the Dropdown item in the above example.
4. The task (in the above example showing the label widget) will be performed and then the navigation will be done based upon the given link.

**Note**: The user role values should be the same as that given while [enabling Security for the App](http://[supsystic-show-popup id=111]).

Dropdown Menu Use Cases

- [1\. Dropdown Menu Basic Usage](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/)
- [2\. How to enable role-based access to menu items](#)
- [3\. How to localize menu items](/learn/how-tos/implementing-localization-dropdown-menu/)
