---
last_update: { author: "Sagar Vemala" }
---

# Overview

APIs enable applications to communicate with external systems over a network using standard protocols such as HTTP or TCP. They expose well-defined interfaces that allow clients to request data or trigger operations in a consistent and predictable way. Most APIs exchange data in widely used formats like JSON or XML, making them easy to integrate across different platforms.

WaveMaker simplifies working with external APIs by allowing you to import them into your application and invoke them at runtime. The data returned from API calls can be easily consumed within the app and connected to UI components, enabling you to build dynamic, data-driven experiences with help of Varibles avoiding dealing with low-level networking concerns.


---

## Supported API Types

WaveMaker supports the following API types:

### REST APIs

REST (Representational State Transfer) APIs expose resources through unique URLs and standard HTTP methods such as GET, POST, PUT, and DELETE. Responses are typically returned in JSON or XML format.

WaveMaker supports importing REST APIs in two ways:
- **Endpoint-based import** by providing a REST endpoint URL
- **Contract-based import** using **OpenAPI (Swagger)** specifications

This allows you to quickly onboard both individual endpoints and fully documented APIs.

---

### WebSocket APIs

WebSocket APIs enable persistent, bidirectional communication over a single TCP connection, making them suitable for real-time data exchange.

Once imported, WebSocket APIs allow applications to send and receive messages continuously without repeated requests.

---

## Using APIs in WaveMaker

### REST APIs

- Import REST APIs using either a direct endpoint or an OpenAPI (Swagger) definition.  
- Configure HTTP methods, parameters, request bodies, and response formats during import.  
- Define query, path, header, and body parameters as required.  
- Set up authentication options such as None, Basic, or OAuth 2.0, and test APIs before importing.

Learn more: [REST APIs](./import-rest.md)

---

### WebSocket APIs

- Import the WebSocket endpoint (typically using a `wss://` URL).  
- Configure sample request and response payloads as needed.  
- Open and close connections, send messages, and handle incoming data in real time.

Learn more: [WebSocket APIs](websockets.md)

---

## Summary

WaveMaker offers built-in capabilities to connect applications with external systems through standard APIs. It supports both REST APIs, including OpenAPI (Swagger)–based imports, and WebSocket APIs for real-time communication. These integrations allow applications to retrieve, stream, and interact with external data efficiently, while keeping implementation complexity to a minimum.

