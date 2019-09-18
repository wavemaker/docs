---
title: "Database Service APIs"
id: ""
---

REST APIs generated for CRUD, searching and listing operations for each [Database table integrated](http://[supsystic-show-popup id=106]) within the app can be viewed from API Designer. For easy usability, these APIs are categorized under various heads. They are grouped by the database, then entities, queries, and procedures.

Selecting an _endpoint_ will display the details of the APIs pertaining to that endpoint. These details include:

- type of the method:
    - _GET -_ methods which retrieve resources,
    - _POST -_ methods which create new resources,
    - _PUT -_ methods which update resources, or
    - _DELETE -_ methods which delete a resource
- the URL for that particular REST API service,
- a brief description and
- visibility:
    - _Public_ \- this is the default setting and would enable user access to the API at runtime;
    - _Unavailable -_ this setting can be used when you want to disable a particular API method. For example, you want to ensure that records from employee table are not deleted, then making the DELETE method Unavailable will ensure that it does not happen by mistake.

[![](/learn/assets/API_DB_access.png)](/learn/assets/API_DB_access.png)API method details can be viewed by selecting the method.

- **Define -** this tab gives the definition of the selected method:
    - The _Description_ field which can be customized.
    - The _Request Parameters_ including the name, type, the parameter type and the description of the parameter.
    - The _Response Format_ shows the fields returned along with the type and description.
- **Test -** this tab allows you to test an API. Giving a test value for the request parameter and clicking on the test button, displays the result in the Response window.

[![](/learn/assets/API_DB_test.png)](/learn/assets/API_DB_test.png)

