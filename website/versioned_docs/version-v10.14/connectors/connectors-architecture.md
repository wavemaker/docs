---
title: "Architecture"
id: "connectors-architecture"
sidebar_label: "Architecture"
---
---

## Connector Component view

A Connector project contains three Components.

1. **Connector API**: A Connector interface and skeleton of Connector APIs.
2. **Connector Impl**: Actual implantation of Connector interfaces including some required external Libraries.
3. **Configuration Profiles**: Externalizable properties are profiled via WaveMaker Profiles.
4. **Third-Party Systems**: External services like Kafka, MongoDB, AWS, Azure services, and more.

[![lftr_sel](/learn/assets/connector/ConnectorArchitecture.png)](/learn/assets/connector/ConnectorArchitecture.png)

## Connector view inside a WaveMaker App

One or more Connectors can be used inside a WaveMaker Application.
Connectors are orchestrated through Java Services.

[![lftr_sel](/learn/assets/connector/ConnectorInsideApp.png)](/learn/assets/connector/ConnectorInsideApp.png)