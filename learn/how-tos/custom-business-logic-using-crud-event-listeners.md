---
title: "Custom Business Logic using DB CRUD Event Listeners"
id: ""
---
---

### Overview

In this document,we learn how to use [DB CRUD listeners](/learn/app-development/services/database-crud-event-listeners) for applying custom business logic to DB table. The WaveMaker runtime framework publishes pre and post-events for each CRUD operation (Create, Read, Update and Delete) performed on the table. Here, in the following example, we use the pre-create event to determine the age of the employee using the birthdate provided. For this, we use the HRDB EMPLOYEE table('Age' column is newly added to the table) to demonstrate.

![/learn/assets/custom-logic-crudListeners/DBTable.png](/learn/assets/custom-logic-crudListeners/DBTable.png)

:::note
Configure an HRDB database in the project from WaveMaker sample databases. Update the Employee table by adding an additional column "Age" to it.
:::

### Goals

1. Calculate the age of the employee using birthdate.
2. Throw an error message if the age is less than eighteen years.

## Create a Java Service

Create a Java Service in the project and add the `preCreate` event listener for the employee entity, as shown below. 

- The `beforeEmployeeCreate` method gets invoked before a new employee record is created. 
- We can fetch the employee object inside the listener by using the expression  `entityPreCreateEvent.getEntity()`. 
- In the next lines of code, we are caclulating the age of the employee using the birthdate provided and inserting into table only if age is greater than eighteen years. If age is less than eighteen, we throw an error message saying `"Error! Age is less than 18 years!"`.

 ```java
package com.employeeproject.agecalculator;

import java.sql.Date;
import java.time.Period;
import java.time.LocalDate;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import org.springframework.context.event.EventListener;

import com.employeeproject.employeedb.Employee;

import com.wavemaker.commons.WMRuntimeException;
import com.wavemaker.runtime.data.event.EntityPreCreateEvent;
import com.wavemaker.commons.MessageResource;

@ExposeToClient
public class AgeCalculator {

    private static final Logger logger = LoggerFactory.getLogger(AgeCalculator.class);
   
   @EventListener
   public void beforeEmployeeCreate(EntityPreCreateEvent<Employee> entityPreCreateEvent){
       Employee employee = entityPreCreateEvent.getEntity();
       final Date sqlDate = employee.getBirthdate();
       logger.info("Inside [EntityPreCreateEvent], birthdate {}",sqlDate);
       Period period = Period.between(sqlDate.toLocalDate(), LocalDate.now());
       logger.info("Current Age : {}",period.getYears());
       if(period.getYears() <18){
          throw new WMRuntimeException(MessageResource.create("Error! Age is less than 18 years!"));
       }else{
          employee.setAge(period.getYears());
       }
   } 

}
 ```

## Create a Live Form

1. Drag and drop a Live Form widget.
2. Bind the Live Form to the Employee CRUD variable. 
3. Insert a new record by selecting  birthdate less than eighteen years and submit. 
    - On submitting the record, we see that an error is shown "`Error! Age is less than 18 years!`", see the image below. 

![/learn/assets/custom-logic-crudListeners/lessThanEighteen.png](/learn/assets/custom-logic-crudListeners/lessThanEighteenTwo.png)

### On successfully creating a employee record

![/learn/assets/custom-logic-crudListeners/recordAdded.png](/learn/assets/custom-logic-crudListeners/recordAddedNew.png)

![/learn/assets/custom-logic-crudListeners/age.png](/learn/assets/custom-logic-crudListeners/age.png)

## See Also

[Validations using CRUD listeners](/learn/how-tos/validations-using-crudListeners.md)