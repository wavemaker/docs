---
last_update: { author: "Priyanka Bhadri" }
---

# Overview

WaveMaker allows developers to go beyond default CRUD operations by building **custom APIs using Java Services**. This approach is ideal for a **backend-for-frontend (BFF)** pattern, where multiple backend APIs, database services, or integrations need to be orchestrated and exposed as a **single API** tailored for frontend requirements. 

With Java Services, you can implement custom business logic, aggregate data from multiple sources, and return a unified response, reducing frontend complexity while still leveraging the power of Java, Spring, and Hibernate within WaveMaker’s low-code environment.

---



## Building a Custom API

This section explains how to build a custom API using Java Services in WaveMaker. By following these steps, you can implement backend-for-frontend (BFF) patterns, combine data from multiple sources, and expose a unified REST API tailored to your application’s requirements.


### Creating a Java Service

To begin building a custom API, start by creating a Java Service in WaveMaker Studio. Navigate to **Services → Java Services → New Service**, provide a meaningful service name. 

WaveMaker automatically generates the required service artifacts. This Java Service serves as the foundation for implementing your custom business logic and API orchestration.

### Implementing Business Methods

Once the service is created, you can add one or more methods to define your application logic. These methods can be used to perform validations or calculations, orchestrate multiple service or database calls, or integrate with external systems and SDKs.  

Java Service methods support a wide range of input parameters, including primitive types, POJO classes, collections of objects, HTTP servlet request and response objects (for handling headers or cookies), and pageable objects for managing pagination, sorting, and result size.  

Similarly, methods can return primitive values, Java objects, collections, or paginated responses. WaveMaker automatically takes care of converting Java objects to JSON and vice versa, simplifying API implementation.

### Injecting Dependencies

Java Services fully support Spring-based dependency injection, allowing you to autowire database services, DAOs, other Java services, connectors for third-party integrations, and utility components. 

This enables you to build modular, reusable, and maintainable service logic while seamlessly leveraging the broader WaveMaker application ecosystem.

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

Once a Java Service is saved, it becomes available as a **REST API** in the  **[API Explorer](../../../studio/workspaces/api-explorer.mdx)**

- For each method in the Java Service, an API endpoint is automatically generated.  
- The **type of API** (GET, POST, etc.) is auto-assigned based on the method name.  
- If a method accepts input parameters, it is automatically converted to a **POST** method. This can be modified later in the API Designer.  

Once the Java Service is saved, it becomes available in the **API Designer** under **Core APIs**.  
From here, you can test API endpoints with sample input or using external tools such as Postman or curl

---



### Consume the API
The exposed Java Service APIs can be consumed in multiple ways:

- Bind them to WaveMaker Variables for use in pages and components  
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
