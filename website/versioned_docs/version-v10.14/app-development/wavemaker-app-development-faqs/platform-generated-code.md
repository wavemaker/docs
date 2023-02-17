---
title: "Is the platform generated code readable and maintainable?"
id: "platform-generated-code"
sidebar_label: "Maintaining Platform Generated Code"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.      

--- 

WaveMaker App is built by drag-n-drop of Widgets, a simple HTML markup is generated. Any changes to the look-n-feel can be done using the Style properties exposed for each Widget. Though not necessary or advisable, the page markup can be further tweaked to suite app requirements.

Similarly, when a Backend Service, like a database, is integrated into a WaveMaker App, ORM artifacts are auto-generated. The source code is generated following the design best practices, consisting of the DAO, Service Layer & REST APIs with each layer having a specific responsibility:

- Layer 1: REST Controller is responsible for transporting the data between client and server, authorization of APIs & marshaling and unmarshaling of the model to JSON etc.
- Layer 2: Service Layer is responsible for validating the inputs and transaction management
- Layer 3: DAO Layer is responsible for interacting with the underlying database

Following is the code snippet of the generated Entity DAO object, a JPA entity model using the standards based annotations, getter & setter methods.

Additional artifacts, such as API definitions in standard Swagger notation, configuration files as Spring XML files and properties files and Maven pom.xml that defines application dependencies are all auto-generated and available for maintenance outside the platform.   Can the apps built using WaveMaker be deployed on any App Server?

WaveMaker platform generates a standards based WAR file, which can be used to deploy App to any Java web server such as Tomcat, WebSphere, WebLogic, Pramati Server, JBoss etc.

By default, WaveMaker Apps can be deployed to WaveMaker Cloud platform. Optionally you can configure your app to be deployed to your AWS or Azure or Google Cloud accounts.

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  
[Deployment to Web Server](/learn/app-development/deployment/deployment-web-server/)  

  
