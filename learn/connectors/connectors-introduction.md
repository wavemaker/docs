---
title: "Connectors"
id: "connectors-introduction"
sidebar_label: "Introduction"
---
---
## Connector Introduction
Connector is a Java based backend extension for WaveMaker applications. Connectors are built as Java modules & exposes java based SDK to interact with the connector implementation.

Each connector is built for a specific purpose and can be integrated with one of the external services. Connectors are imported & used in the WaveMaker application. Each connector runs on its own container thereby providing the ability to have it’s own version of the third party dependencies.

Multiple connectors can be orchestrated inside an WaveMaker application to implement business logic.

## Highlights of a Connector
- onnector is a java based extension which can be integrated with external services and reused in many WaveMaker applications.
- Each connector can work as an SDK for an external system.
- Connectors can be imported once in a WaveMaker application and used many times in the applications by creating multiple instances.
- Connectors are executed in its own container in the WaveMaker application, as a result there are no dependency version conflict issues between connectors.

[![lftr_sel](/learn/assets/connector/connector-introduction.png)](/learn/assets/connector/connector-introduction.png)
