---
title: "Integrate Database Service in JavaServices"
id: "java-integration-database-service"
sidebar_label: "DB Service Integration"
---
---

WaveMaker generates REST API when a database is imported. However the lower level database access can be used inside a Java class to execute custom business logic. In case if you want more control on database service methods or if you would like to extend or use the database service API's or methods based on business logic then you can `@Autowire` the Service class of that particular database entity. 

The **autowiring feature of spring framework** enables you to inject the object dependency implicitly. The advantage of autowiring is, it requires the less code because we don't need to write the code to inject the dependency explicitly. 

## Accessing Database services using Java Service

To access a database table from a [Database Integrated](/learn/app-development/services/database-services/working-with-databases/) into your app, In 
the JavaService Navigate to the Dependencies panel on the right side expand the service you would like to use click on any of its methods and select 
add particular service to this Java Service as shown below.

[![](/learn/assets/database-service-import.png)](/learn/assets/database-service-import.png)

### Where to find DB Services

You can find a list of methods for User table on expanding  `UserService` like `create`, `delete`, `find`, `update`, query service, procedure service, and 
more.

### Accessing DB Services

For working with the **Database table operations** such as insert, get, update in Java Service, from the dependencies dialogue select the service method and
click on add particular service to this Java Service, so that the required import and autowired will be added we can make use of the autowired variable and 
call any of its methods 

[![](/learn/assets/database-service-add.png)](/learn/assets/database-service-add.png)

Here we are trying to access the User table from the sample `hrdb`
### Accessing different DB Services with the same name

If there are two or more beans for same class type, you need to use `@Qualifier` annotation along with `@Autowired` annotation and pass the bean name in annotation parameter. 

For example, you have more than one implementation of `UserService`, then use qualifier to inject the specific implementation of User service.

```Java
import org.springframework.beans.factory.annotation.Autowired;

import com.<project_name>.hrdb.service.UserService;
import com.<project_name>.hrdb.User;

@ExposeToClient
public class MyJavaService {

    @Autowired
    @Qualifier("hrdb.userService");
    public UserService userService;
    
    public User getmyUser(int userid) {
        User user = userService.findById(userid);
        return user;
    }
}
```
## Database Transactions from Java Service

### Transactions for related entities

Transactions can be used in cases where you have multiple independent statements which need to be linked together. A transaction can end in two ways: with a commit or with a rollback. When a transaction commits, the data modifications made by its statements are saved. If a statement within a transaction fails, the transaction rolls back, undoing the effects of all statements in the transaction.

Let us see a simple example of interacting with the hrdb database in Java service using Transactions.

- Define an API that creates employee and retrieves the same from the database.
- Create employee and retrieving employee are two independent calls to the database. When we enclose it with the transaction it will ensure that either both actions occur or neither action occurs.
- In the below transaction code, if _createEmployee_ is successful but retrieve employee fails, then created employee will be reverted from the database.

```Java
package com.wavemaker.hrdbexample;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.wavemaker.runtime.data.exception.EntityNotFoundException;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;

import com.hrdb.Department;
import com.hrdb.Employee;
import com.hrdb.service.EmployeeService;

import java.util.Date;

@ExposeToClient
public class HrdbManager {

    private static final Logger logger = LoggerFactory.getLogger(HrdbManager.class);

    @Autowired
    private EmployeeService employeeService;

    /**
     * Objective of the api is to create employee and retrieve same from database.
     * 
     * As create employee and retrieving employee are two independent calls to database.If we enclose it with transaction which will ensure that either both actions occur or neither action occurs.
     * 
     * Example : If createEmployee is successful but retrieve employee fails, then created employee will be reverted from database.
     * 
     **/
    @Transactional(rollbackFor = EntityNotFoundException.class, value = "hrdbTransactionManager")
    public Employee createEmployee()
    {
        //creating employee object
        Employee employee = new Employee();
        employee.setFirstname("John");
        employee.setLastname("Smith");
        employee.setStreet("45 Houston Street");
        employee.setCity("New York");
        employee.setState("NY");
        employee.setZip("10106");
        employee.setBirthdate(new Date(1471355649751L));
        employee.setPicurl("http://dev.wavemaker.com/examples/salesrep/john-kim.png");
        employee.setJobtitle("Development Manager");
        employee.setUsername("john");
        employee.setPassword("john");
        employee.setTenantid(1);

        //every employee should be part of some department
        Department department = new Department();
        department.setDeptid(1);
        department.setName("Engineering");
        department.setBudget(1936760);
        department.setQ1(445455);
        department.setQ2(522925);
        department.setQ3(426087);
        department.setQ4(542293);
        department.setDeptcode("Eng");
        department.setLocation("New York");
        department.setTenantid(1);

        //setting department to employee
        employee.setDepartment(department);

        //persisting employee
        Employee persistedEmployee = employeeService.create(employee);

        //retrieve persisted employee object
        return employeeService.getById(persistedEmployee.getEid());

    }
}
```

To see the rollback in action replace the last line with:

```Java
//retrieve non existing object
return employeeService.getById(71236);
```

### Accessing Query services using Java Service

**Named Queries** or queries that are written, tested and saved in query editor of Database Designer. [Query Editor](/learn/app-development/services/database-services/working-with-queries). 

For each and every named query, there will be a rest service generated from query execution controller and exposed under APIDesigner panel. Here we are seeing two queries - EmpCountByState and  which were created from the query editor. 

[![](/learn/assets/autowired_queries.png)](/learn/assets/autowired_queries.png)
