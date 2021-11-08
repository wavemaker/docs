---
title: "Implementing Row-Level Security for displaying the table content using CRUD listeners"
id: ""
sidebar_label: "Row-Level Security using DB Event Listeners"
---
---

### Overview

In this document,we learn how to use [DB CRUD Listeners](/learn/app-development/services/database-crud-event-listeners) for applying  Row-Level Security checks to DB table. Row-Level Security as the name suggests is a security mechanism that restricts the records from a table based on the authorization context of the current user that is logged in. This means the records from the tables are displayed based on who the user is and to which records do the user has access to. This is usually done to allow specific users to have access to their data only without permission to view other users’ data.

  (i)Row-Level Security Illustration.

 ![Row-Level Security Illustration](/learn/assets/row-level-security-Illustration.png)


The WaveMaker runtime framework publishes pre and post fetch list events for fetching before and after the list of records from the database table. Here, in the following example, we use the pre-fetch-list event to fetch the vacation records based on their user roles when an admin is logged-in to the application then he can view and filter the all the employee vacation details are fetched but if an user is logged-in then he can view only his own vacation details. For this, we use the HRDB Vacation table to demonstrate.

![DB table](/learn/assets/db-vacation-table.png)

:::note
Configure an HRDB database in the project from WaveMaker sample databases.
:::

### Goals

- Apply the Row-Level security mechanism that restricts the records from a table based on the authorization context of the current user logged in role. 

## Create a Java Service

Create a Java Service in the project and add the `PreFetchListEvent` event listener for the employee entity, as shown below. 

- The `beforeVacationFetch` method gets invoked before fetching the list of records from the vacation table . 
- We can fetch the logged-in user details from the security service, 
- We can fetch query string used for filtering the entities using the PreFetchEvent getFetchQuery() method.
 `entityPreFetchEvent.getFetchQuery()`. 
- We can set the query string for filtering the entities with authorization checks.
 `entityPreCreateEvent.setQuery()`. 
- In the next lines of code, we are performing the logged-in user role checks and setting the query to filtering the entities based on the user roles.

```java
package com.employeeproject.prefetchvacation;

import java.util.*;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import org.springframework.context.event.EventListener;
import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.security.SecurityService;

import com.<project_name>.hrdb.Vacation;

import com.wavemaker.commons.WMRuntimeException;
import com.wavemaker.runtime.data.event.EntityPreFetchListEvent;
import com.wavemaker.commons.MessageResource;
import com.wavemaker.commons.MessageResource;

@ExposeToClient
    public class PreFetchVacationService {

        private static final Logger logger = LoggerFactory.getLogger(PreFetchVacationService.class);
        @Autowired
        private SecurityService securityService;

        @EventListener
        public void beforeVacationFetch(EntityPreFetchListEvent<Vacation> entityPreFetchEvent) {
            logger.info("Inside generic pre fetch event listener for {}", entityPreFetchEvent.getEntityClass(), entityPreFetchEvent);

            final List userRoles = (List) Arrays.asList(securityService.getUserRoles());
            FetchQuery fetchquery = entityPreFetchEvent.getFetchQuery();

            if (userRoles.contains("user") && fetchquery.getQuery() == null) {

                fetchquery.setQuery("employee.empId" + "=" + securityService.getUserId());

            } else if (!userRoles.contains("admin") && fetchquery.getQuery() != null) {
                fetchquery.setQuery(fetchquery.getQuery() + " AND " + "employee.empId" + "=" + securityService.getUserId());
            } else {
                logger.info("Query search Success");
            }

        }
    }
```

## Create a Live Form

1. Drag and drop a Live Filter widget.
2. Bind the Live Form to the Vacation CRUD variable. 
3. Drag and drop a datatable and bind live filter widget result. 
For more information, see [Working with Live Filter](/learn/how-tos/live-filter-applying).

## Preview the Application

To test the application,logged-in as Admin role the vacation datatable will fetch the all the user vacations and now logged-in a user role observe vacation datatable will fecth only the logged-user records.

1. The user can be able to filter the his own records.

![user records](/learn/assets/crud-listeners-user-fetch-records.png)

2. The admin can be able to view/manage the all the employees vacation records.


![admin records](/learn/assets/crud-listeners-admin-fetch-records.png)



Simliary we can enable row-level security that restrict before create and update and delete operations on the table using PreCreate,PreUpdate,PreDelete Event listeners.

## See Also

[How to set validations using CRUD Listeners](/learn/how-tos/validations-using-crudListeners/)

[How to audit History using CRUD Listeners](/learn/how-tos/audit-history-using-crud-listeners/)

[How to write custom business logic using CRUD Listeners](/learn/how-tos/custom-business-logic-using-crud-event-listeners/)
 