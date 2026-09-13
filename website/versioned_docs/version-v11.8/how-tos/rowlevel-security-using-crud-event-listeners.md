---
title: "Row-Level Security: Display Table Contents using CRUD Listeners"
id: "rowlevel-security-using-crud-event-listeners"
sidebar_label: "Row-Level Security using DB Event Listeners"
---
---

### Overview

In this document, learn how to use [DB CRUD Listeners](/learn/app-development/services/database-crud-event-listeners) for applying Row-Level Security checks to DB table. 

As the name suggests, Row-Level Security is a security mechanism that restricts the records from a table based on the authorization context of the current user that is logged in. Therefore, the records are displayed based on the user, allowing only those records that the user has access to. It is usually done to allow specific users to access only their data and restrict them from viewing other users’ data.

1. Row-Level Security Illustration.

![Row-Level Security Illustration](/learn/assets/row-level-security-Illustration.png)


The WaveMaker runtime framework publishes pre and post fetch list events for fetching before and after the list of records from the database table. In the following example, we use the pre-fetch-list event to fetch the vacation records based on their user roles. 

When an admin is logged in to the application, the admin can view and filter all the employee vacation details. 
When a user logs in, he can only view his own vacation details. 

For this, we use the HRDB Vacation table to demonstrate.

![DB table](/learn/assets/db-vacation-table.png)

:::note
Configure an HRDB database in the project from WaveMaker sample databases.
:::

### Goals

- Apply the Row-Level security mechanism that restricts the records from a table based on the authorization context of the current user, that is, logged-in user role. 

## Create a Java Service

Create a Java Service in the project and add the `PreFetchListEvent` event listener for the vacation entity, as shown below. 

- The `beforeVacationFetch` method gets invoked before fetching the list of records from the vacation table. 
- You can fetch the logged-in user details from the security service. 
- You can fetch query string used for filtering the entities using the PreFetchEvent getFetchQuery() method. For example, `entityPreFetchEvent.getFetchQuery()`. 
- You can set the query string for filtering the entities with authorization checks. For example, `entityPreCreateEvent.setQuery()`. 

In the following lines of code, we perform the logged-in user role checks and set the query to filter the entities based on the user roles.


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
3. Drag and drop a Data Table and bind live filter widget result. 
For more information, see [Working with Live Filter](/learn/how-tos/live-filter-applying).

## Preview the Application

1. Log in to an admin role. The vacation Data Table will fetch all the users' vacations. 

![admin records](/learn/assets/crud-listeners-admin-fetch-records.png)
    
*As shown in the image above, the admin can view and manage all the employees' vacation records.*

2. Log in as a user. You observe vacation Data Table will fetch only the logged-user records. 

![user records](/learn/assets/crud-listeners-user-fetch-records.png)

*As shown in the image above, the user can filter only his records.*

Similarly, you can enable row-level security that restricts before CRUD (create, update, and delete) operations on the table using PreCreate, PreUpdate, and PreDelete Event listeners.

## See Also

[How to set validations using CRUD Listeners](/learn/how-tos/validations-using-crudListeners/)  
[How to audit History using CRUD Listeners](/learn/how-tos/audit-history-using-crud-listeners/)  
[How to write custom business logic using CRUD Listeners](/learn/how-tos/custom-business-logic-using-crud-event-listeners/)  
 
