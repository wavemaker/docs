---
title: "How to add edit, new and delete functionality for dynamic data table"
id: "dynamic-data-table-edit"
---

To enable edit,delete and add functionality for a dynamic data table that is bound to a web service variable associated with a GET API, you can follow the below mentioned steps:

 When we establish a binding between a data table and a webservice variable that, in turn, is associated with a GET API, a limitation arises where direct editing, addition, or deletion of entries becomes unfeasible due to the read-only nature of the GET API. To handle such scenarios, we can implement a solution that involves the creation of separate variables. These dedicated variables will be responsible for invoking the necessary POST, PATCH, and DELETE calls, thereby enabling the functionality to modify and manipulate the data effectively. This approach allows us to seamlessly handle scenarios where the primary variable is confined to a GET API, ensuring comprehensive control over data interaction within the data table.

# Steps:
   
   For the below example we have used HRDB API's.

1. Import the HRDB employee GET API into the studio as a web service.

![getemployee_API.png](/learn/assets/getemployee_API.png)

# Create and call specific variables that trigger patch, post, and delete API calls from script tab in relevant data table events.

Event Handlers for Edit Actions: Implement event handlers for edit actions in the data table, such as clicking on an edit button or double-clicking on a row. In these event handlers, call the respective variables to trigger the patch request, allowing you to update the data.