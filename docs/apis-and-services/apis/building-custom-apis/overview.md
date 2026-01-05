---
last_update: { author: "Priyanka Bhadri" }
---

# Building Custom APIs Using Java Services

WaveMaker allows developers to extend their applications beyond the default CRUD operations by building **custom APIs** using Java Services. This approach leverages the full flexibility of Java, Spring, and Hibernate while maintaining the low-code productivity of WaveMaker.  

---

## What is a Java Service?

A **Java Service** in WaveMaker is a Java class that exposes business logic or integration functionality as a reusable service. These services can:  

- Encapsulate custom business logic.  
- Interact with databases, external APIs, or third-party services.  
- Be invoked from WaveMaker pages, widgets, or other backend services.  
- Be exposed as REST endpoints for external applications.

Java Services provide full control over the backend while remaining fully compatible with WaveMaker's generated code.

---



##  Steps to Build a Custom API

###  Create a Java Service
In WaveMaker Studio, navigate to **Services → Java Services → New Service**.  
Provide a meaningful service name and define the appropriate Java package structure.  
WaveMaker generates the initial service artifacts, including the Java class, Spring configuration, and API metadata.

This service acts as the foundation for implementing custom business logic.

---

###  Implement Business Methods
Add one or more methods to the Java service to implement your application logic.  
These methods can:

- Perform calculations or validations  
- Orchestrate multiple service or database calls  
- Integrate with external systems or SDKs  

Input parameters can be of the type:

- primitive objects,
- POJO classes,
- a collection of POJO classes and primitives,page
- Http servlet response/request which can be passed as URL-based header params or in the form of cookies
- a pageable object with values pertaining to the page to be retrieved, the size of each page and sort field name

Supported return types include:
- Primitive types  
- Java objects (POJOs)  
- Collections  
- Paginated responses  

WaveMaker automatically handles request and response conversion between Java objects and JSON.

---

###  Inject Dependencies
Java Services support Spring-based dependency injection. You can autowire:

- Database services and DAOs  
- Other Java services  
- Connectors (for third-party integrations)  
- Utility or helper components  

This allows you to build modular, reusable, and maintainable service logic while leveraging the existing application ecosystem.

---

<!-- ### 4. Expose the Service as a REST API
By default, public methods can be exposed as REST endpoints.  
Use the `@ExposeToClient` annotation to explicitly make a method available to the client.

WaveMaker automatically:
- Generates REST endpoints for each exposed method  
- Determines the HTTP method (GET/POST) based on method signature  
- Serializes input parameters and response objects to JSON  

You can further customize the API definition using the **API Designer**, including modifying HTTP methods or request/response formats. -->

## Exposing Java Services as REST APIs

Once a Java Service is saved, it becomes available as a **REST API** in the  **[API workspace](../../../studio/workspaces/api-workspace.md)**

- For each method in the Java Service, an API endpoint is automatically generated.  
- The **type of API** (GET, POST, etc.) is auto-assigned based on the method name.  
- If a method accepts input parameters, it is automatically converted to a **POST** method. This can be modified later in the API Designer.  

---

###  Test the Service
Once the Java Service is saved, it becomes available in the **API Designer** under **Core APIs**.  
From here, you can:

- Test API endpoints with sample input  
- Validate request and response payloads  
- Verify error handling and edge cases  

You can also test the APIs using external tools such as Postman or curl.

---

### Consume the API
The exposed Java Service APIs can be consumed in multiple ways:

- Bind them to WaveMaker Variables for use in pages and widgets  
- Invoke them from client-side scripts  
- Call them from external applications as standard REST endpoints  

Any changes made to the service definition are automatically reflected across the generated artifacts, ensuring consistency between backend logic and API contracts.

---

## Summary

- **Custom Logic:** Implement business rules, calculations, validations, or workflow automation.  
- **Integration:** Connect with external REST APIs, messaging systems, or cloud services.  
- **Reusability:** Java Services can be reused across multiple pages and projects.  
- **REST Exposure:** Easily expose methods as REST APIs with input/output mapping.  
- **Dependency Injection:** Use Spring components, autowired services, and other Java frameworks.  



<!-- ### Testing Java Services

You can test your Java Services directly from the API Designer:  

- Any changes made to the API definition will propagate to all generated files.  
- The testing feature allows you to validate the service without needing to invoke it from the frontend application.  
- This ensures that the API behaves as expected before integrating it into your WaveMaker pages or external applications. -->
