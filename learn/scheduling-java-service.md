---
title: "Scheduling a Java Service"
id: ""
---

We will see how to schedule a Java Service to trigger at certain intervals. We will see:

- How to use a Java Service to schedule a service to trigger within WaveMaker Apps.
- The scheduler will be a spring scheduler which will schedule the java service created to trigger at certain intervals.

We will be using the following Java Service Method:

package com.testschedulterandemail.simplejavaservice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//import com.testschedulerandemail.simplejavaservice.model.\*;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/\*\*
 \* This is a singleton class with all of its public methods exposed to the client via controller.
 \* Their return values and parameters will be passed to the client or taken
 \* from the client respectively.
 \*/
@ExposeToClient
public class SimpleJavaService {
    private static final Logger logger=LoggerFactory.getLogger(SimpleJavaService.class);
    public String sampleJavaOperation() {
        String result = null;
        try {
            logger.warn("Starting sample operation");
            result = "HELLO SERVICE!";
            logger.warn("Returning {}", result);
            return result;
        } catch (Exception e) {
            logger.error("Sample java service operation has failed", e);
            throw e;
        }}}

We will be using the following XML code in <javaservice\_name>.spring.xml _.spring.xml_ file:

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<beans xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/task
http://www.springframework.org/schema/task/spring-task-4.0.xsd
http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-mvc.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/security
http://www.springframework.org/schema/security/spring-security.xsd"
       xmlns="http://www.springframework.org/schema/beans" 
       xmlns:task="http://www.springframework.org/schema/task" 
       xmlns:security="http://www.springframework.org/schema/security" 
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <bean class="com.testschedulerandemail.simplejavaservice.SimpleJavaService" scope="singleton" lazy-init="true" id="SimpleJavaService"/>
    <bean class="com.testschedulerandemail.simplejavaservice.controller.SimpleJavaController" id="SimpleJavaServiceController"/>
    <task:scheduled-tasks >
        <task:scheduled cron="\*/10 \* \* \* \* ?" method="sampleJavaOperation" ref="SimpleJavaService"/>
    </task:scheduled-tasks>
</beans>

In the above XML code replace the bean class with the appropriate package name of the Java service and controller files. You can locate these names from the left Files panel under Services option.

The task details include:

- _cron_ referring to the time interval string we used corresponds to: _\*/10 \* \* \* \* ?_.  The time interval specified is in the UNIX cron format ([refer here](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/scheduling/support/CronSequenceGenerator.html)). [![](./assets/cronformat.png?v=10)](./assets/cronformat.png)
- _method_ refers to the Java method to be invoked at the above-mentioned time intervals
- _id_ refers to the id given to the bean class for the Java controller

The following annotation needs to be added in _project-user-spring.xml_ file:

    <task:annotation-driven scheduler="taskScheduler" />
    <task:scheduler id="taskScheduler" pool-size="5" />

<iframe width="960" height="749" src="https://docs.google.com/presentation/d/e/2PACX-1vRyRnyxwtJeQye7djWn32axB7krcI7l8v52snl8k9whVxm4Zt4ILILc0mprQW0Mor-gFQU7n9iLV1e0/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

Java Service Use Cases

- [1\. How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)
- [2\. How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)
- [3\. How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)
- [4\. How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)
- [5\. How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)
