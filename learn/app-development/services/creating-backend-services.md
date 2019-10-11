---
title: "Backend Services Overview"
id: "creating-backend-services"
---
Get an overview of backend services in WaveMaker and see how it works. 

---

Before getting started with backend services, let's go back to basics. Designing an app involves four steps.
- <span style="color: #D3D3D3;">Step-1: Drag-and-drop widgets and design the page.</span>
- **Step-2: Create a backend service.**
- <span style="color: #D3D3D3;">Step-3: Using variable, integrate the backend service with widget.</span>

# Backend
---
A service can be of any type. It can be a data service, web service, java service, security service, or using a third party API. Or, extending a feature with your own code. 

Thus, you can consider external data as a service. Based on the underlying data being served, services are categorized as _Web Services_, _Database_ and _Java Services_. Each of these services is converted to a RESTful service and is consumed through their respective REST APIs.

## Get started with each service type

|No.| To | See |
|---|---|---|
|1.|Get started with Database Services|[Database Services](/learn/app-development/services/database-services/database-services)|
|2.|Get started with Web Services|[Web Services](/learn/app-development/services/web-services/web-services)|
|3.|Get started with Java Services|[Java Services](app-development/services/java-services/java-service)|
|4.|Get started with Security Services|[Security Services](/learn/app-development/app-security/app-security)|

## Backend Service Architecture 

[![](/learn/assets/backend_model.png)](/learn/assets/backend_model.png)

## Micro-Services enabled Architecture

To support micro-services architecture, WaveMaker uses an API-driven app development approach wherein REST APIs are generated automatically for the application. Every backend service such as Database Entity, Queries or Custom Java code, that is integrated into an application generates REST APIs. Some of these APIs are available for further customization based on the app integration needs.

[![](https://pm.wavemaker.com../../assets/services_concept.png)](/learn/assets/services_concept.png) ORM Layer is auto-generated from DB schema using Hibernate & JPA. Services Layer is auto-generated using Spring. Custom queries, procedures, and Java Services can be used to extend the app functionality. For all these services, REST API is auto-generated using Spring-REST/Swagger. Variables interact with REST API layer to access the services.

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

As mentioned earlier, each of the services integrated into your app is converted to a RESTful service and are consumed through their respective REST APIs.These REST APIs are exposed via the [API Designer](http://[supsystic-show-popup id=110]) and can be re-configured as per the application needs.

We have given an overview of how Backend services are handled in WaveMaker.

