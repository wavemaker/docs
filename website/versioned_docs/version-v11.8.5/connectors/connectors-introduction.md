---
title: "Connectors"
id: "connectors-introduction"
sidebar_label: "Introduction"
---
---

A Connector is a reusable Java-based backend extension for WaveMaker applications. Connectors are built as Java modules to connect with third-party services. Each Connector exposes a set of APIs as Java SDKs to be invoked from a WaveMaker application.

For example, a Connector can accept an Excel file as an input, parse the data, and return the parsed response. 
(Or)  
A Connector could connect to an external service like Kafka, MongoDB, AWS, Azure services, etc., and provide the respective integration capabilities.

## Highlights

- Each Connector is built for a specific purpose and may integrate with one or more of the external services.
- Each Connector exposes a set of APIs as Java SDKs.
- Connectors are imported and used in the WaveMaker application.
- Connector is built once and reused in multiple WaveMaker applications.
- Each Connector runs in its own isolated container thereby providing the ability to have its own version of the third-party dependencies.
- Multiple connectors can be orchestrated inside a WaveMaker application to implement the business logic.
