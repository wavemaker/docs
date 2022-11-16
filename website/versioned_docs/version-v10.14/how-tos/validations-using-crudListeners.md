---
title: "Dynamic Validations using CRUD Listeners"
id: "validations-using-crudlisteners"
sidebar_label: "Validations using CRUD Listeners"
---
---

## Introduction

In this document, learn how we can use [DB CRUD listeners](/learn/app-development/services/database-crud-event-listeners) to perform dynamic validations. The WaveMaker runtime framework publishes pre and post-events for each CRUD operation (Create, Read, Update and Delete) performed on the table. Here, in the following example, we use the pre-create event to check if the username already exists in the table. For this, we use the HRDB USER table to demonstrate. 

![/learn/assets/validations-crudlisteners/userSchema.png](/learn/assets/validations-crudlisteners/userSchema.png)

:::note
Configure an HRDB database in the project from WaveMaker sample databases.
:::

## Create a Java Service

Create a Java Service in the project and add the `preCreate` event listener for the user entity, as shown below. 

- The `beforeUserCreate` method gets invoked before a new user is created. 
- We can get the user object inside the listener by using the expression  `entityPreCreateEvent.getEntity()`. 
- In the next lines of code, we are then using `UserService` to check if the username is present in the table or not. If the user is already present, we throw an error message saying `"Username Not Available"`.

```java
package com.sample.myjavaservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;

import com.sample.hrdb.User;
import com.sample.hrdb.service.UserService;
import com.wavemaker.commons.WMRuntimeException;
import com.wavemaker.runtime.data.event.EntityPreCreateEvent;
import com.wavemaker.commons.MessageResource;

@ExposeToClient
public class MyJavaService {

    private static final Logger logger = LoggerFactory.getLogger(MyJavaService.class);
    
    @Autowired
    private UserService userService;
    
    @EventListener
    public void beforeUserCreate(EntityPreCreateEvent<User> entityPreCreateEvent){
    String inputUsername = entityPreCreateEvent.getEntity().getUsername();
    logger.info("Inside [EntityPreCreateEvent], username {}",inputUsername);
    String query="username='"+inputUsername+"'";
    if(userService.count(query) > 0) {
        throw new WMRuntimeException(MessageResource.create("Username Not Available"));
    } } 
    
    }
```

## Create a Data Table

1. Drag and drop a Data Table widget.
2. Bind the Data Table to the User CRUD variable. 
3. Insert a new record with an existing username For example, `admin`, and submit. 
    - Once submitting the record, see that an error is shown "`Username not available`", see the image below. 
 
![/learn/assets/validations-crudlisteners/errorMsg.png](/learn/assets/validations-crudlisteners/errorMsg.png)

## See Also

[Database CRUD Operations Event Listeners](/learn/app-development/services/database-crud-event-listeners)  
[Record Transactional History of an Entity](/learn/how-tos/audit-history-using-crud-listeners)  
[Custom Business Logic using DB CRUD Event Listeners](/learn/how-tos/custom-business-logic-using-crud-event-listeners)  
