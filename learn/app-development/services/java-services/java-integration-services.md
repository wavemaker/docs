---
title: "Java Integration Services"
id: "java-integration-services"
---
---

If you want more control or you are more comfortable working with Java, you can invoke various services like DB, Feed, SOAP and Security services from Java using `@Autowired` in the `UserService.java` files. 

The **autowiring feature of spring framework** enables you to inject the object dependency implicitly. It internally uses setter or constructor injection. The advantage of autowiring is, it requires the less code because we don't need to write the code to inject the dependency explicitly. 

:::note
REST Services cannot be invoked.
:::

## Accessing current logged in user details

To access the Logged in user details in an app that is secured, you need to import the security service. The **Security Service** import can be done using the following code snippet.

```
import com.wavemaker.runtime.security.SecurityService;
@Autowired
public SecurityService securityService;
public String getLoggedUser() {
        String loggedUser =securityService.getUserName ();
return loggedUser ;
    }
```
## Accessing external Java libraries

There are two ways in which this can be achieved:

1. Exporting the project to an IDE of your choice and changing the code as per your requirements and importing it to WaveMaker. This is possible since the code generated for WaveMaker projects is **Maven** complaint. [Export Project](/learn/app-development/dev-integration/import-export-update-apps/#export-project)
2. Importing the **jar** files as external resource and using them within your app. [Import Resource](/learn/app-development/services/3rd-party-libraries)

## Accessing Database services using Java Service

To access a database table from a [Database Integrated](/learn/app-development/services/database-services/working-with-databases/) into your app, you need to access the **Java Service** file corresponding to the table from the Services tab in the left panel. For example, to access the User table from hrdb, you need to access the UserService.java file from the Services subfolder from the left Files panel.



### Where to find DB Services

You can find a list of methods for User table in `userservice.java` like `create`, `delete`, `find`, `update`, query service, procedure service, and more.

[![](/learn/assets/dbservices.png)](/learn/assets/dbservices.png)

### Accessing DB Services

For working with the **Database table operations** such as insert, get, update in Java Service, the following generic code can be used. 

Here we are trying to access the User table from the sample `hrdb`:

```
import org.springframework.beans.factory.annotation.Autowired;

import com.<project_name>.hrdb.service.UserService;
import com.<project_name>.hrdb.User;

@ExposeToClient
public class MyJavaService {
    @Autowired
    public UserService userService;
    public User getmyUser(int userid) {
        User user = userService.getdById(userid);
return user;
    }
```
### Accessing different DB Services with the same name

If there are two or more beans for same class type, you need to use `@Qualifier` annotation along with `@Autowired` annotation and pass the bean name in annotation parameter. 

For example, you have more than one implementation of User service, then use qualifier to inject the specific implementation of User service.

```
import org.springframework.beans.factory.annotation.Autowired;

import com.hrdb.service.UserService;
import com.hrdb.User;

@ExposeToClient
public class MyJavaService {
    @Autowired
    @Qualifier("hrdb.userService");
    public UserService userService;
    public User getmyUser(int userid) {
        User user = userService.findById(userid);
return user;
    }
```
## Database Transactions from Java Service

### Transactions for related entities

Transactions can be used in cases where you have multiple independent statements which need to be linked together. A transaction can end in two ways: with a commit or with a rollback. When a transaction commits, the data modifications made by its statements are saved. If a statement within a transaction fails, the transaction rolls back, undoing the effects of all statements in the transaction.

Let us see a simple example of interacting with the hrdb database in Java service using Transactions.

- Define an API that creates employee and retrieves the same from the database.
- Create employee and retrieving employee are two independent calls to the database. When we enclose it with the transaction it will ensure that either both actions occur or neither action occurs.
- In the below transaction code, if _createEmployee_ is successful but retrieve employee fails, then created employee will be reverted from the database.

```
/*/**
 * Copyright (c) 2015-2016 WaveMaker.com All Rights Reserved.
 * This software is the confidential and proprietary information of WaveMaker-com * You shall not disclose such Confidential Information and shall use it only in accordance
 * with the terms of the source code license agreement you entered into with WaveMaker.com */*/

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
     * eg : if createEmployee is successful but retrieve employee fails, then created employee will be reverted from database.
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
        return employeeService .getById(persistedEmployee.getEid());

    }
}
```

To see the rollback in action replace the last line with:

```
//retrieve non existing object
return employeeService.getById(71236);
```

### Accessing Query services using Java Service

**Named Queries** or queries that are written, tested and saved in query editor of Database Designer. [Query Editor](/learn/app-development/services/database-services/working-with-queries). 

For each and every named query, there will be a rest service generated in query execution controller and exposed. Here we are seeing two queries - Emp_Count and Total_by_City which were created from the query editor. 

[![](/learn/assets/autowired_queries.png)](/learn/assets/autowired_queries.png)

### Invoking Imported Web Services

Various [Web Service can be Integrated](/learn/app-development/services/web-services/web-services/) into WaveMaker apps. These services can be invoked from Java Services.

For **Soap Service** import following is the code snippet.

:::note
Calculator is WSDL service which was imported.
:::

```
import com.wavemaker..services.calculator.*;
import com.wavemaker..services.calculator.services.*;
@ExposeToClient
public class MyJavaService {
    @Autowired
    public CalculatorService calculatorService;
   public AddResponse wsdlfromjava(float x,float y){
        Add add = new Add();
        add.setX(x);
        add.setY(y);
        return calculatorService.add(add);
    }
```
For **Feed Service** import following is the code snippet
```
import com.wavemaker.runtime.feed.service.FeedService;
import com.wavemaker.runtime.feed.model.Feed;
@Autowired
    FeedService feedService;
    public Feed feedfromJavaService(String feedUrl) {
        Feed myFeed = feedService.getFeed(feedUrl);

return myFeed;
    }
```
For **Feed With Auth Service** import following is the code snippet
```
    public Feed authFeedfromJavaService(String feedURL, String username, String password, int connectionTimeout) {
        Feed authFeed = feedService.getFeedWithHttpConfig(feedUrl,username,password,connectionTimeout);

return authFeed ;
    }
```
