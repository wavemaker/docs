---
title: "Dynamic Validations on Export API using CRUD Listeners"
id: "validationson-exportapi-using-crudListeners"
sidebar_label: "Validations using CRUD Listeners on Export API"
---
## Introduction

In this document, learn how we can implement dynamic validations on Export API.

The existing listeners are designed specifically for dynamic validations during CRUD operations. To perform dynamic validations on the Export API, we need to incorporate a new listener for export operations. To achieve this, include the following Java classes: EntityPreExportEvent.java and ExportMethodInvocationHandler.java. Place these classes in the 'src/main/java/com/wavemaker/runtime/data/aop' directory, ensuring you create the necessary package/folder structure under 'src/main/java'.

EntityPreExportEvent class:

```java
package com.wavemaker.runtime.data.aop;

import com.wavemaker.runtime.data.event.EntityCRUDEvent;
import com.wavemaker.runtime.data.export.DataExportOptions;

public class EntityPreExportEvent<E> extends EntityCRUDEvent<E> {
    private DataExportOptions dataExportOptions;
    public EntityPreExportEvent(String serviceId, Class<E> entityClass, DataExportOptions dataExportOptions) {
        super(serviceId, entityClass);
        this.dataExportOptions = dataExportOptions;
    }

    public DataExportOptions getDataExportOptions() {
        return dataExportOptions;
    }
}
```

ExportMethodInvocationHandler class:

```java
package com.wavemaker.runtime.data.aop;

import com.wavemaker.runtime.data.export.DataExportOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;

import java.lang.reflect.Method;
import java.util.Objects;

public class ExportMethodInvocationHandler implements CRUDMethodInvocationHandler {
    private static final Logger logger = LoggerFactory.getLogger(ExportMethodInvocationHandler.class);

    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;

    @Override
    public void preHandle(String serviceId, Class entityClass, Method method, Object[] args) {
        DataExportOptions dataExportOptions = (DataExportOptions) args[0];
        logger.info("publishing pre export event");
        applicationEventPublisher.publishEvent(new EntityPreExportEvent(serviceId, entityClass, dataExportOptions));
    }

    @Override
    public void postHandle(String serviceId, Class entityClass, Method method, Object retVal) {
    }

    @Override
    public boolean matches(Class entityClass, Method method) {
        boolean matches = "export".equals(method.getName()) && Objects.equals(method.getParameterTypes()[0].getName(), DataExportOptions.class.getName());
        logger.info("export matches: {}, method name: {}, param1: {}", matches, method.getName(), method.getParameterTypes()[0].getName());
        return matches;
    }
}

```

Create a bean in project-user-spring.xml file for ExportMethodInvocationHandler class.

``` bean
<bean name="ExportEventHandler" class="com.wavemaker.runtime.data.aop.ExportMethodInvocationHandler"/>

```

Now you can use the EntityPreExportEvent listener in your Java services as per your requirement. 

Follow the below example in which we are validating the user role and providing export access specifically to the admin role for exporting data table content.

1. Create a JavaService.

```java
package com.testcrud.agecalculator;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import java.sql.Date;
import java.time.Period;
import java.time.LocalDate;
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import org.springframework.context.event.EventListener;
import com.testcrud.hrdb.Employee;
import com.testcrud.hrdb.User;
import com.testcrud.hrdb.service.UserService;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.commons.WMRuntimeException;
import com.wavemaker.runtime.data.aop.EntityPreExportEvent;
import com.wavemaker.commons.MessageResource;
import com.wavemaker.commons.WMRuntimeException;
import com.wavemaker.commons.MessageResource;
import com.wavemaker.commons.WMRuntimeException;
import java.util.*;

@ExposeToClient
public class Exportapivalidations {
    @Autowired
    private UserService userService;
     @Autowired
    SecurityService securityService;


    private static final Logger logger = LoggerFactory.getLogger(AgeCalculator.class);
   
   @EventListener
   public void beforeEmployeeCreate(EntityPreExportEvent<User> entityPreExportEvent){
       
       logger.info("---------Pre Processing-----------");
        final List userRoles = (List) Arrays.asList(securityService.getUserRoles());
        if (!userRoles.contains("admin")) {
            logger.error("The logged in user does not have enough permissions");
            throw new WMRuntimeException(MessageResource.create("You do not have enough permissions"));
        } 
     
   }

}

 ```
