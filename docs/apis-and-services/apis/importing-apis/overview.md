---
last_update: { author: "Author Name" }
---

# Overview

Web services enable communication between different software systems across a network using standardized protocols. WaveMaker makes it easy to bring external web services into your application and work with them through **Variables** that can be bound to UI widgets for rendering dynamic data. Web services typically use HTTP or TCP protocols and exchange data in JSON, XML, or other formats. 

---

## Introduction

A **web service** is a software component that allows machine-to-machine interaction over a network, based on a service contract described in a standard format. Clients interact with the service according to this contract, and responses are typically sent over HTTP with JSON or XML payloads. 

WaveMaker supports integration with multiple types of web services and allows you to invoke them using variables that store returned data in their `dataSet` property.

---

## Types of Web Services

WaveMaker supports three primary types of web services:

### REST Services

REST (Representational State Transfer) services expose resources via unique URLs and standard HTTP operations (GET, POST, PUT, DELETE, etc.). Responses are usually in JSON or XML format. REST services can be imported into your WaveMaker app and invoked through service variables. 



### WebSocket Services

WebSocket services provide a persistent, bidirectional communication channel over a single TCP connection, allowing real-time data streams between the client and server. Once a WebSocket service is imported, you can create a WebSocket variable to send and receive messages in real time. 

---




## Working with REST Services

- REST services can be imported by specifying the URL and defining HTTP method, parameters, and response format.  
- Query, path, header, and body parameters are configured during import and appear as input fields in the corresponding variable.  
- You can set up authentication (None, Basic, or OAuth 2.0) and test the service before importing it. 

Learn more: [Rest Services](../importing-apis/individual-rest-endpoints/import-rest.md)



---



## Working with WebSocket Services

- WebSocket services support full-duplex, real-time communication.  
- Import the WebSocket endpoint (typically with a `wss://` URL), configure sample request/response payloads, and create a WebSocket variable.  
- Incoming messages are stored in the variable and can be consumed by UI widgets in real time.  
- WebSocket variables offer methods for opening and closing connections, sending messages, and reacting to incoming data.

Learn more: [WebSocket Services](websockets.md)


---



## Summary

WaveMaker provides rich support for integrating different kinds of web services and consuming them using service variables:

- **REST Services** — Lightweight HTTP APIs with JSON/XML responses.  
- **WebSocket Services** — Persistent, full-duplex channels for real-time data.  
- Web service variables can be created to trigger these services at runtime and bind results to UI widgets. 

This approach enables you to rapidly connect your application to external systems and present live or remote data without writing boilerplate networking code.
