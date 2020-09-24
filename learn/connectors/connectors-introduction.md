---
title: "Connectors"
id: "connectors-introduction"
sidebar_label: "Introduction"
---
---
## Introduction

Connector is a reusable Java based backend extension for WaveMaker applications. Connectors are built as Java modules to connect with third party services. Each connector exposes a set of APIs as Java SDKs to be invoked from WaveMaker application.

For example, a connector can accept an excel file as an input parse the data and return the parsed response. (Or)<br>
A connector could connect to external service like Kafka, MongoDB, AWS, Azure Services etc and provide the respective integration capabilities.

### Highlights
- Each connector is built for a specific purpose and may integrate with one or more of the external services. 
- Each connector exposes set of APIs as Java SDKs
- Connectors are imported & used in the WaveMaker application.
- Connector is built once and reused in multiple WaveMaker applications.
- Each connector runs in its own isolated container thereby providing the ability to have it’s own version of the third party dependencies. 
- Multiple connectors can be orchestrated inside an WaveMaker application to implement the business logic.
