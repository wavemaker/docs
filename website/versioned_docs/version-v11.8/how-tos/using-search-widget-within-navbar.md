---
title: "Using Search Widget within the Navbar"
id: "using-search-widget-within-navbar"
---
---

We will see how to configure the Search widget within the Navbar. We will create a list using the Employee data from sample hrdb and provide search functionality on the Employee's first name. 

[![navbar_search_run2](/learn/assets/navbar_search_run2.png)](/learn/assets/navbar_search_run2.png)

1. Create a page with and ‘blank’ template and ‘One column layout with top navbar’.
2. Select mobile navbar and set the ‘Show Search button’ from the Properties Panel. 

[![](/learn/assets/navbar_search_props.png)](/learn/assets/navbar_search_props.png)

3. [Database Integration](/learn/app-development/services/database-services/working-with-databases/) - add the sample HRDB into your project.
4. [Create a Database CRUD Variable](/learn/assets/var_sel.png) with `hrdb` `Database`, `Employee`, `Table` and `read` Operation. (name it say, `employeeList`) 

[![](/learn/assets/navbar_search_var.png)](/learn/assets/navbar_search_var.png)

5. From the Data tab of the above Variable, bind the `firstname` Filter Field to query option under the `mobile_navbar` Widget 

[![](/learn/assets/navbar_search_vardata.png)](/learn/assets/navbar_search_vardata.png) 

[![](/learn/assets/navbar_search_varbind.png)](/learn/assets/navbar_search_varbind.png)
6. Drag and drop a List Widget. Use Existing `employeeList` variable as the source of data.
7. Pick a template, pagination type and configure the respective data fields and click **Done**. We have used `Action List` as the template and `Pager` as the pagination.
8. Select Mobile navbar, and set ‘On search’ Event to invoke `employeeList` Live Variable 

[![](/learn/assets/navbar_search_event.png)](/learn/assets/navbar_search_event.png)

9. **Preview** the project and on the employee list page, click the search button. 

[![navbar_search_run1](/learn/assets/navbar_search_run1.png)](/learn/assets/navbar_search_run1.png)

10. Now, filter employee ‘Chris’ by typing ‘chris’ in search text box. That’s how search widget on mobile navbar can be used. 

[![navbar_search_run2](/learn/assets/navbar_search_run2.png)](/learn/assets/navbar_search_run2.png)

## See Also

[How to use search widget within leftnav](/learn/how-tos/using-search-widget-within-navbar/)
