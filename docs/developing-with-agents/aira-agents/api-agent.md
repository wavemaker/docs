---
title: API Agent
last_update: { author: "Swetha Kundaram" }
---

The **API Agent** is designed to help developers import and use external APIs within a WaveMaker application. It simplifies the process of integrating web services without requiring direct UI binding or manual configuration.

The API Agent allows you to bring APIs into your application as reusable service variables that can be used across components. It supports both individual REST endpoints and full API collections defined through Swagger.

## What the API Agent Is Used For

The API Agent is used when you want to connect your application to external or cross-application services. Instead of manually configuring service integrations, you can import APIs and make them available throughout your project.

It enables web service integration independently of the UI layer. This means APIs can be imported, configured, and reused across different parts of the application without being tied to a specific page or component.

## Supported Import Types

The API Agent supports two main types of imports:

* Individual **REST API endpoints**
* Complete API collections defined through **Swagger files**

These APIs can be imported from external sources such as microservices from other applications, third-party API documentation, or Postman collections. Postman collections can be imported either via a URL or JSON file, typically after converting them to Swagger format.

WebSocket-based APIs are currently not supported.

## Common Use Cases

One common use case is cross-application API sharing. For example, a web service defined in one application can be imported into another application and used to display results such as cards or data lists.

The API Agent can also be used for development and testing scenarios through mock data generation. It can return sample data, allowing developers to build and test application logic without relying on live endpoints.

Another practical use case is Postman integration. Developers can convert Postman collections into Swagger format and import them as generic API services within the application.

## How the API Agent Helps

By using the API Agent, developers can integrate external services faster and with less configuration effort. It reduces the need for manual service setup and makes APIs reusable across the application.

Because APIs are imported as service variables, they can be consumed by different components without tight coupling to specific UI elements. This promotes cleaner separation between service integration and presentation logic.


## What the API Agent Does Not Do

To set clear expectations, the API Agent does not:

* Support WebSocket-based integrations
* Automatically design UI components around imported APIs
* Replace backend service development for complex business logic

Its role is focused on importing and enabling API consumption within the application.

---

For developer, the API Agent exists to answer one core question:

**“Can you help me import and use this API in my application?”**

If your goal is to integrate REST or Swagger-based services quickly and reuse them across your project, the API Agent is the right tool.


