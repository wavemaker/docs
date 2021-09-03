---
title: "Performing dynamic validations using CRUD listeners "
id: ""
---
---
## Introduction

In this document we will learn how we can use [DB CRUD listeners](/learn/app-development/services/database-crud-event-listeners) to perform dynamic validations. The WaveMaker runtime framework publishes pre & post events for each CRUD operation (create, read, update and delete) performed on the table. Here, in our example, we will use the pre-create event to check if the username already exists in the table or not. We will also use hrdb USER table for this purpose. 

![/learn/assets/validations-crudlisteners/userSchema.png](/learn/assets/validations-crudlisteners/userSchema.png)

## Steps

- Configure HRDB database in the project
- Create a javaservice in the project and add the preCreate event listener for the User entity as shown below. The 'beforeUserCreate' method added will be invoked everytime before the new User is created in the table. We can get the user object inside the listener by using the expression  `entityPreCreateEvent.getEntity()` . In the next lines, we are then using `UserService` to check if the username is already present in the table or not. If it is present we are throwing an error message "Username Not Available".
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
    String input_username = entityPreCreateEvent.getEntity().getUsername();
    logger.info("Inside [EntityPreCreateEvent], username {}",input_username);
    String query="username='"+input_username+"'";
    if(userService.count(query) > 0) {
        throw new WMRuntimeException(MessageResource.create("Username Not Available"));
    } } 
    
    }
 ```
- Drag and drop a datatable widget and bind it to the User CRUD variable. We will now try to insert a new record with the already existing username 'admin', and after submitting the record we can see that the error 'Username not available' is thrown back. 
 
 ![/learn/assets/validations-crudlisteners/errorMsg.png](/learn/assets/validations-crudlisteners/errorMsg.png)
