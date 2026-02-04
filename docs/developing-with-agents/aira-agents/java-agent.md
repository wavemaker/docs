---
title: Java Agent
last_update: { author: "Swetha Kundaram" }
---

The **Java Agent** is an execution-focused agent that helps developers create and modify backend Java services in a WaveMaker project. Unlike advisory agents, the Java Agent actively works on your project by generating, updating, and organizing Java services based on your request.

Its scope is limited to backend development. It does not modify UI components or frontend logic. The Java Agent is intended for situations where the backend requirements are already clear and need to be implemented efficiently.


## What the Java Agent Is Used For

The Java Agent is designed to automate backend development tasks that would otherwise require manual coding. It works within the existing structure of a WaveMaker project and builds on top of current services instead of duplicating them.

Developers typically use the Java Agent to create new APIs, extend existing backend services, combine data from multiple sources, or add custom Java logic when configuration-based services are not sufficient. The agent focuses on implementation, not architectural decision-making.


## When to Use the Java Agent

Use the Java Agent when the backend design is already decided and you want the implementation done. It is especially useful when working with existing Java, REST, database, or Swagger services that need to be extended or composed into new APIs.

If you are still deciding how something should be designed, or whether an approach fits WaveMaker’s capabilities, it is better to use the Architect Agent first.


## How the Java Agent Works

When you submit a request, the Java Agent first scans the project to understand what services already exist. This includes REST services, database services, Swagger-based services, and other Java services. Based on this analysis, the agent determines whether existing functionality can be reused or extended.

If new functionality is required, the agent creates or updates Java services accordingly. Custom Java code is written only when necessary. After making changes, the agent compiles the project and resolves compilation errors before presenting the results.

The agent does not make any UI changes. All work is limited to the backend.


## Example Workflow

Consider the request: “Create an API that returns complete card details along with balances.”

In this case, the Java Agent searches the project and identifies separate services for card details and card balances. Instead of duplicating logic, it creates a new Java service that combines responses from both sources into a single API. Once the service is created, the project is compiled to ensure there are no build errors.


## Review and Verification

After the Java Agent completes its work, all changes are shown in a changeset for review. Newly created or updated services appear under the Java Services section, and a code preview is available.

The agent ensures that the project compiles successfully, but it does not test business logic or validate functional correctness. Developers are responsible for reviewing the generated code and verifying that the APIs behave as expected.


## What the Java Agent Does Not Do

To avoid confusion, the Java Agent does not:

* Modify UI components or frontend logic
* Make architectural decisions on your behalf
* Validate business rules or application behavior
* Deploy or run the application

## Summary

The Java Agent exists to implement backend Java functionality once requirements are clear. It automates service creation and modification, reduces repetitive coding, and works within the structure of your existing WaveMaker project.

If your question is “Can you build or update this backend service for me?”, the Java Agent is the right tool.

