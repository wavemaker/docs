---
last_update: { author: "Priyanka Bhadri" }
---

# Connectors

A Connector in WaveMaker is a reusable Java-based backend extension that enables your application to integrate with third-party systems and services. It acts as a bridge between your WaveMaker app and external APIs, databases, cloud services, files, messaging systems, and more.  


---

## What a Connector Is

- A Connector is a Java module built to interact with external systems.  
 

- It exposes a set of Java APIs (SDK) that can be invoked from within a WaveMaker application.  
 

- Designed to be built once and reused across multiple WaveMaker projects.  


- **Isolated execution:** Each Connector runs independently, allowing it to maintain its own dependencies and versions.  


- Multiple Connectors can be used together in a single application to fulfill business needs.  


---

## Highlights

- Connectors are tailored to specific integration purposes (e.g., file handling, messaging, cloud services).  


- They expose Java SDK APIs that your app’s backend logic can call.  


- You can import a Connector into a WaveMaker application and then use it inside your Java Services, just like a Spring bean.  


- Connectors support usage across multiple instances with unique configuration profiles.  
 

---

## Examples of Available Connectors

WaveMaker provides a set of ready-to-use Connectors maintained by the community or the platform team. 

You can see the full list of supported Connectors and how to use them in the Marketplace [Connectors List](https://marketplace.wavemaker.com/artifacts?name=Connectors)

![alt text](assets/connector-import-dialog.png)


---

## Typical Usage Pattern

1. Import a Connector ZIP into your WaveMaker project.  
2. Externalizable properties become profiles you configure (e.g., credentials, endpoints).  
3. Use the Connector APIs by autowiring them in Java Services.  
4. Call these APIs from your business logic or expose them via REST endpoints.  

---

## Quick Definition

A Connector is a Java module that encapsulates integration logic for external systems and services, exposing reusable APIs that can be incorporated into WaveMaker applications to extend backend functionality.

=
