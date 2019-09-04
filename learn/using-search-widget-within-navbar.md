---
title: "Using Search Widget within the Navbar"
id: ""
---

We will see how to configure the Search widget within the Navbar. We will create a list using the Employee data from sample hrdb and provide search functionality on the Employee's first name. [![navbar_search_run2](./assets/navbar_search_run2.png)](./assets/navbar_search_run2.png)

1. Create a page with and ‘blank’ template and ‘One column layout with top navbar’.
2. Select mobile navbar and set the ‘Show Search button’ from the Properties Panel. [![](./assets/navbar_search_props.png)](./assets/navbar_search_props.png)
3. [Database Integration](http://[supsystic-show-popup id=106]) - add the sample HRDB into your project.
4. [Create a Database CRUD Variable](http://[supsystic-show-popup id=105]) with ‘hrdb’ Database, ‘Employee’ Table and ‘read’ Operation. (name it say, employeeList) [![](./assets/navbar_search_var.png)](./assets/navbar_search_var.png)
5. From the Data tab of the above Variable, bind the firstname Filter Field to query option under the mobile\_navbar Widget [![](./assets/navbar_search_vardata.png)](./assets/navbar_search_vardata.png) [![](./assets/navbar_search_varbind.png)](./assets/navbar_search_varbind.png)
6. Drag and drop a List Widget. Use Existing ‘employeeList’ variable as the source of data.
7. Pick a template, pagination type and configure the respective data fields and click on ‘Done’ button. We have used ‘Action List’ as the template and ‘Pager’ as the pagination.
8. Select Mobile navbar, and set ‘On search’ Event to invoke ‘employeeList’ Live Variable [![](./assets/navbar_search_event.png)](./assets/navbar_search_event.png)
9. ‘Preview’ the project and on the employee list page, click on search button. [![navbar_search_run1](./assets/navbar_search_run1.png)](./assets/navbar_search_run1.png)
10. Now, filter employee ‘Chris’ by typing ‘chris’ in search text box. That’s how search widget on mobile navbar can be used. [![navbar_search_run2](./assets/navbar_search_run2.png)](./assets/navbar_search_run2.png)

Mobile Widgets

- [1\. How to use search widget within leftnav](/learn/how-tos/using-search-widget-within-navbar/)
