---
title: "Using 3rd party jar files"
id: ""
---

You can import external JAR files and use them in your apps, just like how you would use a Java Service written in your app. Following are the steps to incorporate an external jar file:

1. From _Developer Utilities_, access **File Explorer** [![](./assets/ext_import.png)](./assets/ext_import.png)
2. **Import Resource**, and select the **Lib** folder to place the jar file to be imported. As an example, we are using a [mail](./assets/mail.zip) file. [![](./assets/jar_folder.png)](./assets/jar_folder.png)
3. Add the **import** statements for the required classes in your Java Service file. In this example, we have used the _mail.jar_, the package details of which can be found at [https://javamail.java.net/nonav/docs/api/](https://javamail.java.net/nonav/docs/api/). To use this jar file to send emails we will be using the following code in the Java Service file after adding the import statements for the required class files:
    
    import java.util.Properties;
    import javax.mail.Message;
    import javax.mail.MessagingException;
    import javax.mail.Session;
    import javax.mail.Transport;
    import javax.mail.internet.InternetAddress;
    import javax.mail.internet.MimeMessage;
    
        public String sendEmail(String userName, String password, String toEmailAddress,  String emailSubject, String emailMessage) {
            try {
                // Use javamail api, set parameters from registration.properties file
                // set the session properties
                Properties props = System.getProperties();
                props.put("mail.smtp.starttls.enable", "true");
                props.put("mail.smtp.host", "smtp.gmail.com");
                props.put("mail.smtp.port", "587");
                props.put("mail.smtp.auth", "true");
                props.put("mail.smtp.starttls.required", "true");
                Session session = Session.getDefaultInstance(props, null);
    
                // Create email message
                MimeMessage message = new MimeMessage(session);
                message.setFrom(new InternetAddress(userName));
    
                //	message.addRecipient(Message.RecipientType.TO, new InternetAddress(toEmailAddress));
    
                String\[\] recipientList = toEmailAddress.split(",");
                InternetAddress\[\] recipientAddress = new InternetAddress\[recipientList.length\];
                int counter = 0;
                for (String recipient: recipientList) {
                    recipientAddress\[counter\] = new InternetAddress(recipient.trim());
                    counter++;
                }
                message.setRecipients(Message.RecipientType.TO, recipientAddress);
    
                message.setSubject(emailSubject);
                message.setContent(emailMessage, "text/html");
                // Send smtp message
                Transport tr = session.getTransport("smtp");
                tr.connect("smtp.gmail.com", 587, userName, password);
                message.saveChanges();
                tr.sendMessage(message, message.getAllRecipients());
                tr.close();
    
                return "Mail sent successfully.";
    
            } catch (MessagingException e) {
                return "Error in method sendEmailNotification: " + e;
            }
        }
    
    [![](./assets/jar_java.png)](./assets/jar_java.png)
4. To invoke the Java Service create a new Variable for Java Service: [![](./assets/jar_sv.png)](./assets/jar_sv.png)
5. The _input parameters_ can be accessed from the **Data** tab and can be bound or set to static values
6. The Java Service can be executed either
    - by setting the **Update data on input change** to true thus triggering whenever the input values change or
    - by triggering the Variable created for any event on a widget for example on Mouse Click event of a Button.
7. The result from the execution of this service can be bound to any widget.

< Backend Services Overview

< 3rd Party Libraries Overview

3rd Party JavaScript Files >

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
- 5.4 Java Services
    - [i. Overview](/learn/app-development/services/java-services/java-service/#overview)
    - [ii. Java Services Framework](/learn/app-development/services/java-services/java-service/#java-services-framework)
    - iii. Integration Services
        - [○ Current Loggedin User](/learn/app-development/services/java-services/java-integration-services/#loggedin-user)
        - [○ External Java Libraries](/learn/app-development/services/java-services/java-integration-services/#external-java-libraries)
        - [○ Database Entities](/learn/app-development/services/java-services/java-integration-services/#db-services)
        - [○ Named Queries](/learn/app-development/services/java-services/java-integration-services/#query-service)
        - [○ Imported Web Services](/learn/app-development/services/java-services/java-integration-services/#web-services)
    - [iv. Variables for Invocation](/learn/app-development/services/java-services/variables/)
    - [v. Generated REST APIs](/learn/app-development/services/java-services/generated-rest-apis-api-designer/)
- 5.5 API Designer
    - [i. Overview](/learn/app-development/services/api-designer/api/)
    - [ii. Database Services APIs](/learn/app-development/services/api-designer/database-service-apis/)
    - [iii. Web Services APIs](/learn/app-development/services/api-designer/web-service-apis/)
    - [iv. Java Services APIs](/learn/app-development/services/api-designer/java-service-apis/)
    - [v. Security Services APIs](/learn/app-development/services/api-designer/security-service-apis/)
- [5.6 3rd Party Libraries](/learn/app-development/services/3rd-party-libraries/)
    - [i. Overview](/learn/app-development/services/3rd-party-libraries/#)
    - [ii. Including resource files](/learn/app-development/services/3rd-party-libraries/#resource-files)
    - [iii. Using third-party JavaScript file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-javascript-files/)
    - [iv. Using third-party jar file](#)
