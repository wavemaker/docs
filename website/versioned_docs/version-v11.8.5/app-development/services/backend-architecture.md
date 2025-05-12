---
title: "Backend Services Architecture"
id: "backend-architecture"
---
Get an overview of backend services in WaveMaker and see how it works. 

---

[![](/learn/assets/backend_model.png)](/learn/assets/backend_model.png)

## Micro-Services enabled Architecture

To support micro-services architecture, WaveMaker uses an API-driven app development approach wherein REST APIs are generated automatically for the application. Every backend service such as Database Entity, Queries or Custom Java code, that is integrated into an application generates REST APIs. Some of these APIs are available for further customization based on the app integration needs.

[![](/learn/assets/services_concept.png)](/learn/assets/services_concept.png) ORM Layer is auto-generated from DB schema using Hibernate & JPA. Services Layer is auto-generated using Spring. Custom queries, procedures, and Java Services can be used to extend the app functionality. For all these services, REST API is auto-generated using Spring-REST/Swagger. Variables interact with REST API layer to access the services.

## Accessing Data - Variables

A **Variable** is a non-visual component that is used to call web services, custom database queries and Java methods. Variables can be invoked by Service Calls and by handling the call events. Using variable events ensures:

- The service call has returned.
- Errors returned from the service calls are handled.
- The result set is available.

### Life-cycle of Variable

The graphic below represents the life-cycle of the variable.

[![](/learn/assets/sevice_var_lifecycle.png)](/learn/assets/sevice_var_lifecycle.png)

1. A user invokes the variable call through an action. For example, click a button.
2. An event is emitted and event controller watches over the event.
3. Event controller requests the variable information from the base service.
4. Event controller calls the update method on the “Variable” service.
5. The Service makes a call to the rest service along with the parameters passed.
6. The response is returned which is handled by the Service. It also invokes the events after getting the data.
7. The response data is updated in the variable
8. The widgets listening to the data change on the variable gets updated.

## Manipulating Data - Variable Events

### Life-cycle Events of Variable

Given the life cycle of a variable, next step would be to capture and control the flow to include validation, pre and post processing of data. 

A typical event flow when a variable is used to update data would be as follows:

[![](/learn/assets/LSV_eventcycle.png)](/learn/assets/LSV_eventcycle.png)

## REST APIs

As mentioned earlier, each of the services integrated into your app is converted to a RESTful service and are consumed through their respective REST APIs.These REST APIs are exposed via the [API Designer](/learn/assets/API_Access.png) and can be re-configured as per the application needs.

We have given an overview of how Backend services are handled in WaveMaker.

