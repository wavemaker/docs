---
title: "WaveMaker Application deployment to JBoss"
id: ""
---

Apps can be exported as a WAR file. This generated file can be deployed to any standard Java Web Server running on JDK 1.8. This section walks through the steps to deploy WaveMaker app to **\- WildFly** You can know more about [to Web Server](/learn/app-development/deployment/deployment-web-server/) from here.

**Server setup**

- need to configure JBoss server. [here for details](http://wildfly.org/downloads/) : Deployment has been tested on JBoss WildFly versions 11.0.0.CR1 and 10.1.0.Final
- to JBoss server with valid username and password.

**JBoss Server**

- to “_\\jboss-\[version\]\\jboss-\[version\]\\bin_".
    - : Double click on file to start JBoss server
    - : Double click on file to start JBoss server
- Browser and navigate to _://localhost:9990_ as JBoss by default starts in 9990 port.

**Project sources zip/directory** Export Project as zip from WaveMaker.

## WAR File

From WaveMaker Studio, for the app that you want to deploy to JBoss, Export the app as WAR file using the appropriate configurations. [here for more](/learn/app-development/deployment/deployment-web-server/#war-file-generation)

## to JBOSS Server

(NOTE: The screenshots from JBoss website were current at the time of documentation. The actual images might differ)

**\-WildFly**

- prepared war file into JBoss home dir\\standalone\\deployments
- JBoss terminal and check app deployment logs for deployment status
- success message is displayed in the terminal navigate to http://localhost:8080/ to view the deployed application.

# Application that uses JNDI Datasource

## JNDI in JBOSS Server

**JNDI for Oracle database server**

- to folder "..\\Jboss Home Directory\\modules\\system\\layers\\base\\com". Create structure ..\\oracle\\oracle\\main.
- ojdbc6-11.2.0.jar in the main directory.
- following details to module.xml file (in main directory).
    
    <module xmlns="urn:jboss:module:1.1" name="com.oracle.oracle">
    	<properties>
    		<property name="jboss.api" value="unsupported"/>
    	</properties>
    	<resources>
    		<resource-root path="ojdbc6-11.2.0.jar"/>
    		<!-- Insert resources here -->
    	</resources>
    	<dependencies>
    		<module name="javax.api"/>
    		<module name="javax.transaction.api"/>
    		<module name="javax.servlet.api" optional="true"/>
    	</dependencies>
    </module>
    
- standalone.xml file in '..Jboss home directory\\standalone\\configuration'.
- following details in profile.
    
    <subsystem xmlns="urn:jboss:domain:datasources:1.2">
    	<datasources>
    		<datasource jndi-name="java:/jdbc/oracle" pool-name="poolname" enabled="true" use-java-context="true">
    			<connection-url>jdbc:oracle:thin:@//<host>:<port>/<SID></connection-url>
    			<driver>oracledriver</driver>
    			<security>
    				<user-name>username</user-name>
    				<password>password</password>
    			</security>
    		</datasource>
    		<drivers>
    			<driver name="oracledriver" module="com.oracle.oracle">
    				<xa-datasource-class>oracle.jdbc.driver.OracleDriver</xa-datasource-class>
    			</driver>
    		</drivers>
    	</datasources>
    </subsystem>
    

**JNDI name in the application using Config Profiles**

- on settings menu in project workspace and create a new profile.
- datasource as JNDI and provide jndi name in the respective text box.
- profile and close settings. [![](../assets/JBoss_JNDI1.png)](../assets/JBoss_JNDI1.png)
- war for the newly created profile. [![](../assets/JBoss_JNDI2.png)](../assets/JBoss_JNDI2.png)
- the war file

**to JBOSS Server** [here](#process)

- - know on which port the application is being running open \\jboss-home-directory\\standalone\\configuration\\standalone.xml
    - search <socket-binding name="http"
    - this port the application will be running.

[![](../assets/JBoss_troubleshoot.png)](../assets/JBoss_troubleshoot.png)

**to JBoss**

- [Prerequisites](#prerequisites)
- [Preparing WAR File](#prepare)
- [Deploy to JBoss Server](#process)
- [Deployment for JNDI Datasource](#JNDI)
- [Troubleshooting](#troubleshooting)
