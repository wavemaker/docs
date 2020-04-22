---
title: "OpenAPI support in WaveMaker"
author: Vibhu Singhal
---

The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service.
<!-- truncate -->

![OpenApi](/learn/img/OpenApi_Logo.png)

## Introduction 

OpenAPI is a broadly adopted industry standard for describing modern APIs. The official release of OpenApi Specification 3.0 was marked as a special one as it was the first release since it was donated to the OpenAPI initiative by SmartBear Software and was renamed from Swagger specification to OpenAPI specification.

First let’s be clear on how OpenAPI is different from Swagger. The easiest way to understand the difference is:

    OpenAPI = Specification
    Swagger = Tools to implement the specification


The development of the specification is fostered by the OpenAPI initiative, which involves organizations from different areas of the tech world including Microsoft, Google, IBM, Oracle, ebay, etc. More information about the OpenAPI initiative can be found [here](https://www.openapis.org/). Swagger has been the major contributor towards the community and provides multiple tools to build and test OpenAPI compliant APIs. More information on swagger can be found [here](https://swagger.io/).

  
## OpenAPI specification
The OpenAPI Specification (OAS) defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without requiring access to source code, additional documentation, or inspection of network traffic. When properly defined via OpenAPI, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. Similar to what interface descriptions have done for lower-level programming, the OpenAPI Specification removes guesswork in calling a service. 

A document (or set of documents) that defines or describes an API. An OpenAPI definition uses and conforms to the OpenAPI Specification. The specification can be found [here](http://spec.openapis.org/oas/v3.0.3).

:::note
As of release 10.4, WaveMaker supports OAS 2.0. Support for OSA 3.0 is being worked upon. Keep an eye on this space for more updates.
:::

  
## Advantage of working with OpenAPIs
Since an OpenAPI definition document follows a standard OpenAPI specification, the document can be used by documentation generation tools to display the API, code generation tools to generate servers and clients in various programming languages, testing tools, and many other use cases.

WaveMaker extends this advantage to integrate REST endpoints in a Web/Mobile application. Integrating a REST endpoint with any of the 100+ UI widgets offered by WaveMaker is simple and straightforward without writing a single line of code.

Since an OpenAPI document contains a number of APIs, WaveMaker identifies and groups a set of APIs under respective <b>“entities”</b>. For example, in an OpenAPI document, there can be multiple REST endpoints for an Employee entity. There could be respective endpoints to perform CRUD operations on this entity. While importing the OpenAPI document in WaveMaker, the platform performs a best guess algorithm to identify and map the endpoints against the respective CRUD operation. Once this is done, the app developer can make use of the Data widget combinations like Table/List with a Form and perform CRUD operations from the UI by simple drag and drop configuration without writing a single line of code.

This opens a wide range of possibilities for the platform to integrate with 3rd party REST APIs. To name a few:
- supporting various server side pagination/fragmentation/sorting techniques
- identifying relationships among various “entities”
- performing complex filter operations on an entity
- supporting various authentication/authorization mechanisms

We at WaveMaker are working to identify all such patterns and integrating it with the platform to provide a seamless experience. Keep an eye on this space for more updates.


## Importing OpenAPI document in WaveMaker
If you already have an API document that is in accordance with OpenAPI spec 2.0, it can be imported into your WaveMaker app project and integrated with the UI widgets. Refer the following document on how to do so:  
[Importing REST APIs via OpenAPI/Swagger](/learn/app-development/services/api-designer/import-rest-apis-swagger)

## Importing an existing WaveMaker app’s APIs into another app
The good news is all the APIs generated by a WaveMaker app follow OpenAPI 2.0 specification. Hence, <b>a WaveMaker app's APIs are readily available for integration into another app</b>. All you need to do is, take the OpenAPI/swagger json file from the existing app and import it into the other app where you want to consume the APIs. You don’t need to import each API individually anymore, which is a major time save.

Also, as mentioned above, the platform will identify “entities” from the OpenAPI document and group endpoints under these. So you can now perform the CRUD operations on a DB entity just the way you could do it through a DB CRUD (live) variable without creating individual Service Variables against each endpoint and writing custom logic to hook these operations. Here is a pictorial representation of the use case:  
![Open API Import Use Case](/learn/img/OpenAPI_Scenario.png)

## References
- OpenAPI initiative official space: [https://www.openapis.org](https://www.openapis.org/)
- Swagger official space: [https://swagger.io](https://swagger.io/)