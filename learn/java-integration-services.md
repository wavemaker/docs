---
title: "Java Integration Services"
id: ""
---

If you want more control or you are more comfortable working with Java, you can invoke various services like DB, Feed, SOAP and Security services from Java using _@Autowired in the UserService.java_ files. The **autowiring feature of spring framework** enables you to inject the object dependency implicitly. It internally uses setter or constructor injection. The advantage of autowiring is, it requires the less code because we don't need to write the code to inject the dependency explicitly. **Note:** REST Services cannot be invoked.

### Accessing current logged in user details

To access the Logged in user details in an app that is secured, you need to import the security service. The **Security Service** import can be done using the following code snippet

import com.wavemaker.runtime.security.SecurityService;
@Autowired
public SecurityService securityService;
public String getLoggedUser() {
        String loggedUser =securityService.getUserName ();
return loggedUser ;
    }

### Accessing external Java libraries

There are two ways in which this can be achieved:

1. Exporting the project to an IDE of your choice and changing the code as per your requirements and importing it to WaveMaker. This is possible since the code generated for WaveMaker projects is **Maven** complaint. [Export Project](http://[supsystic-show-popup id=116])
2. Importing the **jar** files as external resource and using them within your app. [Import Resource](http://[supsystic-show-popup id=112])

### Accessing Database services using Java Service

To access a database table from a [Database Integrated](http://[supsystic-show-popup id=106]) into your app, you need to access the **Java Service** file corresponding to the table from the Services tab in the left panel. For example, to access the User table from hrdb, you need to access the UserService.java file from the Services subfolder from the left Files panel.

We will see:

- [where to find the database services](#where),
- [how to access DB services from Java service](#access),
- [creating transactions](#trans1) when interacting with related entities of a database

### Where to find DB Services

You can find a list of methods for User table in _userservice.java_ like create, delete, find, update, query service, procedure service and so on.

[![](../assets/dbservices.png)](../assets/dbservices.png)

### Accessing DB Services

For working with the **Database table operations** such as insert, get, update in Java Service, the following generic code can be used. Here we are trying to access the User table from the sample hrdb:

import org.springframework.beans.factory.annotation.Autowired;

import com.<project\_name>.hrdb.service.UserService;
import com.<project\_name>.hrdb.User;

@ExposeToClient
public class MyJavaService {
    @Autowired
    public UserService userService;
    public User getmyUser(int userid) {
        User user = userService.getdById(userid);
return user;
    }

### Accessing different DB Services with the same name

If there are two or more beans for same class type, you need to use _@Qualifier_ annotation along with @Autowired annotation and pass the bean name in annotation parameter. For example, you have more than one implementation of User service, then use qualifier to inject the specific implementation of User service.

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

### Database Transactions from Java Service

#### Transactions for related entities

Transactions can be used in cases where you have multiple independent statements which need to be linked together. A transaction can end in two ways: with a commit or with a rollback. When a transaction commits, the data modifications made by its statements are saved. If a statement within a transaction fails, the transaction rolls back, undoing the effects of all statements in the transaction.

Let us see a simple example of interacting with the hrdb database in Java service using Transactions.

- Define an API that creates employee and retrieves the same from the database.
- Create employee and retrieving employee are two independent calls to the database. When we enclose it with the transaction it will ensure that either both actions occur or neither action occurs.
- In the below transaction code, if _createEmployee_ is successful but retrieve employee fails, then created employee will be reverted from the database.

/\*\\/\*\*
 \* Copyright (c) 2015-2016 WaveMaker.com All Rights Reserved.
 \* This software is the confidential and proprietary information of WaveMaker-com \* You shall not disclose such Confidential Information and shall use it only in accordance
 \* with the terms of the source code license agreement you entered into with WaveMaker.com \*\\/\*/

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

    /\*\*
     \* Objective of the api is to create employee and retrieve same from database.
     \* 
     \* As create employee and retrieving employee are two independent calls to database.If we enclose it with transaction which will ensure that either both actions occur or neither action occurs.
     \* 
     \* eg : if createEmployee is successful but retrieve employee fails, then created employee will be reverted from database.
     \* 
     \*\*/
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

To see the rollback in action replace the last line with:

        //retrieve non existing object
        return employeeService.getById(71236);

### Accessing Query services using Java Service

**Named Queries** or queries that are written, tested and saved in query editor of Database Designer. [Query Editor](http://[supsystic-show-popup id=117]). For each and every named query, there will be a rest service generated in query execution controller and exposed. Here we are seeing two queries - Emp\_Count and Total\_by\_City which were created from the query editor. [![](../assets/autowired_queries.png)](../assets/autowired_queries.png)

### Invoking Imported Web Services

Various [Web Service can be Integrated](http://[supsystic-show-popup id=115]) into WaveMaker apps. These services can be invoked from Java Services.

For **Soap Service** import following is the code snippet _Note_: Calculator is WSDL service which was imported.

import com.wavemaker..services.calculator.\*;
import com.wavemaker..services.calculator.services.\*;
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

For **Feed Service** import following is the code snippet

import com.wavemaker.runtime.feed.service.FeedService;
import com.wavemaker.runtime.feed.model.Feed;
@Autowired
    FeedService feedService;
    public Feed feedfromJavaService(String feedUrl) {
        Feed myFeed = feedService.getFeed(feedUrl);

return myFeed;
    }

For **Feed With Auth Service** import following is the code snippet

    public Feed authFeedfromJavaService(String feedURL, String username, String password, int connectionTimeout) {
        Feed authFeed = feedService.getFeedWithHttpConfig(feedUrl,username,password,connectionTimeout);

return authFeed ;
    }

< Backend Services Overview

< Java Services Overview

5\. Creating Backend Services

- 5.1 Overview
    - [i. Accessing Data](/learn/app-development/services/creating-backend-services/#accessing-data)
        - [○ Life-cycle of data](/learn/app-development/services/creating-backend-services/#life-cycle)
    - [ii. Manipulating Data](/learn/app-development/services/creating-backend-services/#manipulating-data)
        - [○ Life-cycle of Events](/learn/app-development/services/creating-backend-services/#life-cycle-events)
    - [iii. REST APIs](/learn/app-development/services/creating-backend-services/#rest-apis)
- 5.2 Web Services
    - [i. Overview](/learn/services/web-services/web-services/#overview)
    - [ii. Variables for Invocation](/learn/services/web-services/web-services/#service-variable)
    - iii. Working with SOAP Services
        - [○ Overview](/learn/app-development/services/web-services/web-services/working-with-soap-services/#SOAP-service-setup)
        - [○ SOAP Service Setup](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-setup)
        - [○ SOAP Service Settings](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-settings)
        - [○ Generated REST APIs](/learn/app-development/services/web-services/working-with-soap-services/#generated-rest-apis)
        - [○ SOAP Service Usage](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-usage)
    - iv. Working with REST Services
        - [○ Overview](/learn/app-development/services/web-services/rest-services/)
        - [○ Test REST Service](/learn/app-development/services/web-services/rest-services/#test-API)
        - [○ Configure REST Service](/learn/app-development/services/web-services/rest-services/#configure-REST-service)
        - [○ REST Service Usage](/learn/app-development/services/web-services/rest-services/#REST-service-usage)
    - v. Working with Web Sockets
        - [○ Overview](/learn/app-development/services/web-services/working-with-websockets/)
        - [○ Service Integration](/learn/app-development/services/web-services/working-with-websockets/#import)
        - [○ Service Consumption](/learn/app-development/services/web-services/working-with-websockets/#variable)
        - [○ Use Cases](/learn/app-development/services/web-services/working-with-websockets/#use-cases)
- 5.3 Database Services
    - [i. Overview](/learn/app-development/services/database-services/database-services/)
    - [ii. Supported Databases](/learn/app-development/services/database-services/database-services/#supported-databases)
    - iii. Working with Databases
        - [○ Overview](/learn/app-development/services/database-services/working-with-databases/)
        - [○ Adding Database](/learn/app-development/services/database-services/working-with-databases/#integrating-database)
        - [○ Database Actions](/learn/app-development/services/database-services/working-with-databases/#database-actions)
    - iv. Data Modelling
        - [○ Overview](/learn/app-development/services/database-services/data-modelling/)
        - [○ Configuration Settings](/learn/services/db-services/data-modelling/#configuration-settings)
        - [○ Database Designer](/learn/services/db-services/data-modelling/#database-designer)
            - [● Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/)
        - ○ Working with Database Schema
            - [● Overview](/learn/app-development/services/database-services/working-database-schema/)
            - [● Adding Tables and Columns](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns)
            - [● Working with Relationships](/learn/app-development/services/database-services/working-database-schema/#database-relationships)
            - [● Identity Generators for Primary Key Column](/learn/app-development/services/database-services/working-database-schema/#identity-generators)
            - [● Column Metadata Configuration](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)
            - [● Virtual Primary Keys and Relations](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys)
            - [● Temporal Support](/learn/app-development/services/database-services/temporal-support/)
    - v. Databases Access
        - [○ Overview](/learn/app-development/services/database-access/)
        - ○ Working with Queries
            - [● Overview](/learn/app-development/services/database-services/working-with-queries/)
            - [● Query Editor](/learn/app-development/services/database-services/working-with-queries/#query-editor)
            - [● Types of Queries](/learn/app-development/services/database-services/working-with-queries/#query-types)
            - [● Query Creation](/learn/app-development/services/database-services/working-with-queries/#query-creation)
            - [● Query Usage](/learn/app-development/services/database-services/working-with-queries/#query-usage)
            - [● Parameterised Query Creation](/learn/app-development/services/database-services/working-with-queries/#query-creation-parameterised)
            - [● Query Operation Type](/learn/app-development/services/database-services/working-with-queries/#query-op-types)
            - [● Query Architecture](/learn/app-development/services/database-services/working-with-queries/#query-architecture)
        - ○ Working with Stored Procedures
            - [● Overview](/learn/app-development/services/db-services/working-stored-procedures/)
            - [● Procedure Creation](/learn/app-development/services/db-services/working-stored-procedures/#procedure-creation)
            - [● Procedure Parameters](/learn/app-development/services/db-services/working-stored-procedures/#proc-params)
            - [● Procedure Invocation](/learn/app-development/services/db-services/working-stored-procedures/#procedure-invocation)
            - [● Procedure Architecture](/learn/app-development/services/db-services/working-stored-procedures/#procedure-architecture)
        - [○ Versioning of Queries and Procedures](/learn/app-development/services/database-services/versioning-queries-procedures/)
        - [○ Blob Support for Queries and Procedures](/learn/app-development/services/database-services/blob-support-queries-procedures/)
        - [○ Invoking Queries & Procedures from Java Service](/learn/app-development/services/database-services/invoking-queriesprocedures-java-services/)
        - [○ Database Views](/learn/app-development/services/db-services/database-views/)
        - ○ Database Tools
            - [● Overview](/learn/app-development/services/database-tools/)
            - [● DB Shell](/learn/app-development/services/database-tools/#db-shell)
            - [● DB Scripts](/learn/app-development/services/database-tools/#db-scripts)
                - [● Import DB](/learn/app-development/services/database-tools/#import-db)
                - [● Export DB](/learn/app-development/services/database-tools/#export-db)
    - vi. ORM Artifacts
        - [○ Layered Architecture](/learn/app-development/services/db-services/orm-artifacts/#layered-architecture)
        - [○ Generated Files](/learn/app-development/services/db-services/orm-artifacts/#generated-files)
        - [○ Generated APIs](/learn/app-development/services/db-services/orm-artifacts/#generated-apis)
            - [● CRUD APIs](/learn/app-development/services/db-services/orm-artifacts/#crud-apis)
            - [● Query APIs](/learn/app-development/services/db-services/orm-artifacts/#query-apis)
            - [● Custom Query Syntax](/learn/app-development/services/db-services/orm-artifacts/#custom-query-syntax)
- [5.4 Java Services](/learn/app-development/services/java-services/java-service/)
    - [i. Overview](/learn/app-development/services/java-services/java-service/#overview)
    - [ii. Java Services Framework](/learn/app-development/services/java-services/java-service/#java-services-framework)
    - [iii. Integration Services](#)
        - [○ Current Loggedin User](#loggedin-user)
        - [○ External Java Libraries](#external-java-libraries)
        - [○ Database Entities](#db-services)
        - [○ Named Queries](#query-service)
        - [○ Imported Web Services](#web-services)
    - [iv. Variables for Invocation](/learn/app-development/services/java-services/variables/)
    - [v. Generated REST APIs](/learn/app-development/services/java-services/generated-rest-apis-api-designer/)
- 5.5 API Designer
    - [i. Overview](/learn/app-development/services/api-designer/api/)
    - [ii. Database Services APIs](/learn/app-development/services/api-designer/database-service-apis/)
    - [iii. Web Services APIs](/learn/app-development/services/api-designer/web-service-apis/)
    - [iv. Java Services APIs](/learn/app-development/services/api-designer/java-service-apis/)
    - [v. Security Services APIs](/learn/app-development/services/api-designer/security-service-apis/)
- 5.6 3rd Party Libraries
    - [i. Overview](/learn/app-development/services/3rd-party-libraries/)
    - [ii. Including resource files](/learn/app-development/services/3rd-party-libraries/#resource-files)
    - [iii. Using third-party JavaScript file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-javascript-files/)
    - [iv. Using third-party jar file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-jar-files/)
