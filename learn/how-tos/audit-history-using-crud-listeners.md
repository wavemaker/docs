---
title: "Record Transactional History of an Entity"
id: ""
sidebar_label: "Transactional History of Entity"
---
---

In this document, learn how you can use [Database CRUD Listeners](/learn/app-development/services/database-crud-event-listeners) to record the history, including the details related to data change of a specific entity/table in a logger table.

In the following example, we use three Event Listeners, including:

1. [EntityPostCreateEvent](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/data/event/EntityPostCreateEvent.java)
2. [EntityPostUpdateEvent](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/data/event/EntityPostUpdateEvent.java)
3. [EntityPostDeleteEvent](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/data/event/EntityPostDeleteEvent.java)

## Download and Import Database Files

1. Download the [EmployeeDB](/learn/assets/Audithistory-using-crudListeners/EmployeeDB_dump.sql) SQL file. 
2. Import this file in [DB Tools](/learn/app-development/services/database-tools#db-scripts).
3. Connect to the Database from your application. 

## Create a Java Service to Insert Transactional Details

In this use case, we use the `EMPLOYEE_DETAILS_LOG` table to insert transactional details of the `EMPLOYEE` table.

1. Create a Java service in the project.
2. Add the below import statements.

```java
import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.data.event.EntityPostCreateEvent;
import com.wavemaker.runtime.data.event.EntityPostUpdateEvent;
import com.wavemaker.runtime.data.event.EntityPostDeleteEvent;
import org.springframework.context.event.EventListener;
import com.<project_name>.employeedb.EmployeeDetailsLog;
import com.<project_name>.employeedb.service.EmployeeDetailsLogService;
import java.time.*;
import com.<project_name>.employeedb.Employee;
import com.wavemaker.runtime.data.exception.EntityNotFoundException;
```

### Add Methods to the Java Service

Add the following three methods into the Java service. 

1. In this method, get the logged-in user details from the security service,
2. Get employee details from the event, and
3. Insert employee details into the `EMPLOYEE_DETAILS_LOG` table, respectively.

```java
@EventListener
public void PostEntityCreate(EntityPostCreateEvent<Employee> entityPostCreateEvent) {
    String userName = securityService.getLoggedInUser().getUserName();
    LocalDateTime localDateTime = LocalDateTime.now();
    Integer entityId = entityPostCreateEvent.getEntity().getEmpId();
    EmployeeDetailsLog employeeDetailsLog = new EmployeeDetailsLog();
        employeeDetailsLog.setUserName(userName);
        employeeDetailsLog.setDatetime(localDateTime);
        employeeDetailsLog.setOperationType("Create");
        employeeDetailsLog.setEmpId(entityId);
    employeeDetailsLogService.create(employeeDetailsLog);
}


@EventListener
public void PostEntityUpdate(EntityPostUpdateEvent<Employee> entityPostUpdateEvent) {
    String userName = securityService.getLoggedInUser().getUserName();
    LocalDateTime localDateTime = LocalDateTime.now();
    Integer entityId = entityPostUpdateEvent.getEntity().getEmpId();
    EmployeeDetailsLog employeeDetailsLog = new EmployeeDetailsLog();
        employeeDetailsLog.setUserName(userName);
        employeeDetailsLog.setDatetime(localDateTime);
        employeeDetailsLog.setOperationType("Update");
        employeeDetailsLog.setEmpId(entityId);
    employeeDetailsLogService.create(employeeDetailsLog);
}

@EventListener
public void PostEntityDelete(EntityPostDeleteEvent<Employee> entityPostDeleteEvent) {
    String userName = securityService.getLoggedInUser().getUserName();
    LocalDateTime localDateTime = LocalDateTime.now();
    Integer entityId = entityPostDeleteEvent.getEntity().getEmpId();
    EmployeeDetailsLog employeeDetailsLog = new EmployeeDetailsLog();
        employeeDetailsLog = new EmployeeDetailsLog();
        employeeDetailsLog.setUserName(userName);
        employeeDetailsLog.setDatetime(localDateTime);
        employeeDetailsLog.setOperationType("Delete");
        employeeDetailsLog.setEmpId(entityId);
    employeeDetailsLogService.create(employeeDetailsLog);
}     
```

## Binding the Variable to a Data Table Widget

1. Go to a page, and drag-and-drop a Data Table widget.
2. Create and bind the Data Table to the `EMPLOYEE` CRUD variable when configuring the widget. 
3. Drag and drop another Data Table widget.
4. Create and bind the Data Table to the `EMPLOYEE_DETAILS_LOG` CRUD variable when configuring the widget.
5. Invoke the `EMPLOYEE_DETAILS_LOG` CRUD variable using the `onSuccess` event of the `EMPLOYEE` CRUD variable created in step-2.

## Preview the Application

In preview, perform some CRUD operations in the Employee table and notice the transactional details insert into the `EMPLOYEE_DETAILS_LOG` table.

