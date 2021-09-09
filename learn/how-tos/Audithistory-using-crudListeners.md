---
title: "Record transactional History of an Entity"
id: ""
---
---

## Introduction

In this document, we will learn how we can use [DB CRUD listeners](/learn/app-development/services/database-crud-event-listeners) to record the history(data change related details) of a specific entity/table in the logger table.
Here, in our example, we use three EventListeners such as [EntityPostCreateEvent](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/data/event/EntityPostCreateEvent.java), [EntityPostUpdateEvent](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/data/event/EntityPostUpdateEvent.java) and [EntityPostDeleteEvent](https://github.com/wavemaker/wavemaker-app-runtime-services/blob/master/wavemaker-app-runtime-core/src/main/java/com/wavemaker/runtime/data/event/EntityPostDeleteEvent.java).
## Steps

- Download the [EmployeeDB](/learn/assets/Audithistory-using-crudListeners/EmployeeDB_dump.sql) SQL file here and import this file in [DBTools](/learn/app-development/services/database-tools#db-scripts).

- Now, connect to this database in your Application. In this use case, We use the EMPLOYEE_DETAILS_LOG table to insert transactional details of the EMPLOYEE table.

- Create a java service in the project and add the below import statements.

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

- Add below three methods into your java service. In this method, we get the logged-in user details from the security service and employee details from the event and insert them into the EMPLOYEE_DETAILS_LOG table.

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

- Go to the pages and in any page, drag and drop a data table widget and bind it to the EMPLOYEE CRUD variable. 

- Also, drag and drop one more data table widget and bind it to the EMPLOYEE_DETAILS_LOG CRUD variable and invoke this variable in onsuccess event of the above created EMPLOYEE CRUD variable.

- In preview, perform some CRUD operations in the Employee table. You can observe that the transactional details are inserted into the EMPLOYEE_DETAILS_LOG table.

