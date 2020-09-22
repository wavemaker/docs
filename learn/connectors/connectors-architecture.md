---
title: "Architecture"
id: "connectors-architecture"
sidebar_label: "Architecture"
---
---

# Connector Architecture

This page depicts connector design time architecture and runtime flow

## Designtime Architecture

Following are the building blocks of connector and where exactly connectors placed in WaveMaker application.

[![lftr_sel](/learn/assets/connector/connector-designtime-architecture.png)](/learn/assets/connector/connector-designtime-architecture.png)

## Runtime Flow

Here is the runtime flow of connector.Basically application will loaded only with connector API module libraries and later on request of connector API; impl libaries are loaded to invoke connector API.On after connector api invocation, connector impl libraries are unloaded from the application class loader.

[![lftr_sel](/learn/assets/connector/connector-runtime-high-level-flow.png)](/learn/assets/connector/connector-runtime-high-level-flow.png)

## Connector Framework Lifecycle

Here is the detailed end-to-end  connector framework flow.

[![lftr_sel](/learn/assets/connector/connector-indetail-lifecycle.png)](/learn/assets/connector/connector-indetail-lifecycle.png)


