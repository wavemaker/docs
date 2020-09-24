---
title: "Architecture"
id: "connectors-architecture"
sidebar_label: "Architecture"
---
---

## Connector Component view

Basically connector project contains three Components.

1. **Connector API**: A connector interface and skeleton of connector APIs. 
2. **Connector Impl**: Actual implantation of connector interfaces. External Libraries and Configuration Profiles are part of this.
3. **Third Party Systems**: External services like Kafka, MongoDB, AWS, Azure services etc.

[![lftr_sel](/learn/assets/connector/ConnectorArchitecture.png)](/learn/assets/connector/ConnectorArchitecture.png)
<br>

## Connector view inside WaveMaker App
One or More Connectors can be used inside WaveMaker Application.
Connectors are orchestrate through Java Services.

[![lftr_sel](/learn/assets/connector/ConnectorInsideApp.png)](/learn/assets/connector/ConnectorInsideApp.png)



