---
title: "Web Services"
id: "web-services"
sidebar_label: "Web Services Overview"
---
Introduction to web services in WaveMaker. Learn how to implement web services in this section. 

---

A Web service is a software system designed to support interoperable machine-to-machine interaction over a network. It has an interface described in a machine-processable format (specifically WSDL). Other systems interact with the Web service in a manner prescribed by its description using SOAP-messages, typically conveyed using HTTP with an XML serialization in conjunction with other Web-related standards. For more information, see [Web Services Glossary](https://www.w3.org/TR/2004/NOTE-ws-gloss-20040211/#webservice).

WaveMaker makes it easy to integrate external web services within your app. You need to import and configure a web service and invoke the same using a variable which can be bound to a widget for data rendering.

## Types of Web Services

You can use the following types of web services:
- [REST Services](/learn/app-development/services/web-services/rest-services)
- [SOAP Services](/learn/app-development/services/web-services/working-with-soap-services)
- [WebSocket Services](/learn/app-development/services/web-services/working-with-websockets)

[![](/learn/assets/web_types.png)](/learn/assets/web_types.png)

### REST Services
A REST (Representational State Transfer) web service is composed of resources accessed through unique URLs (requests) and returned as XML or JSON responses. An XML Schema typically defines the structure of those XML responses.
### SOAP Services
SOAP (Simple Object Access Protocol) is a standard XML protocol for exposing and calling web services. A SOAP service is described by a Web Services Definition Language (WSDL) document, often available through a URL from the service itself.
### WebSocket Services
WebSockets represent the next evolution of web communications a full-duplex, bidirectional communications channel that operate through a single socket over the Web. It provides a true standard that you can use to build scalable, real-time web applications. It provides full-duplex communication channels over a single TCP connection. Its only relationship to HTTP is that its handshake is interpreted by HTTP servers as an Upgrade Request.

## Invoke as Variable

After importing a web-service, a **Variable** should be created for each method of the service. It triggers the service in the RUN mode of the app and stores the data returned by the service in its _dataSet_ property (_variableName.dataSet_). You can use this _dataSet_ as any other variable. 

While binding a widget with a variable’s _dataSet_, it is assumed that the binding chain follows JSON structure and there is no array on any of the nodes. Any deviations to this structure should be addressed from the markup manually. In some cases, modification with _dataSet_ may be required, which needs to be done at the variable level. 

For more information about about working with variables, see [Variables](/learn/app-development/variables/variables). And, see [How to create Variables for Web Service](/learn/app-development/variables/web-service/).  

[![](/learn/assets/Var_create.png)](/learn/assets/Var_create.png)[![](/learn/assets/soap_var.png)](/learn/assets/soap_var.png)

WaveMaker supports various types of web services and these services can be invoked and results can be captured through Variables.

