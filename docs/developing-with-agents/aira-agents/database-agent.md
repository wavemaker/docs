---
title: Database Agent
last_update: { author: "Author Name" }
---


## Overview

The **wm_database_agent** is responsible for database exploration and Query Service lifecycle management within the AIRA system. Its role is to safely inspect database structures, validate queries, and manage Query Services without altering underlying database schemas.

This agent does not perform schema changes or make assumptions about database intent. It exists to enable informed and validated data access while protecting the integrity of the database.



## Role in AIRA Architecture

The Database Agent operates as a specialized execution agent under the orchestration of the **wm_agent**.

It is invoked when workflows require understanding existing databases, inspecting tables or columns, or creating and managing Query Services. While the wm_agent coordinates execution and the Architect Agent provides design guidance, the Database Agent performs controlled, read-focused and query-level operations against the database layer.

This agent does not design schemas or perform migrations.



## Core Responsibilities

### Database and Model Inspection

The Database Agent lists available databases and retrieves associated data models. It inspects tables, views, and column definitions to provide accurate structural information that can be used by other agents.

All inspection is observational and does not modify database state.

### Query Service Lifecycle Management

The agent creates, reads, updates, and deletes Query Services as explicitly instructed. It builds and maintains `DesignTimeQuery` structures that represent validated and executable queries within WaveMaker.

Query Services are treated as managed artifacts with clear ownership and scope.

### Query Validation and Testing

Before a Query Service is finalized, the Database Agent validates SQL syntax, checks placeholder definitions, detects return columns, and performs test executions. This validation-first approach ensures that queries behave as expected before they are consumed by other layers.

No query is assumed to be correct without verification.


## Execution Scope

The Database Agent operates strictly within the database inspection and Query Service layer of a WaveMaker application.

It is authorized to list databases, inspect tables and columns, validate SQL, execute test queries, and manage Query Services. Its scope does not include modifying database schemas, altering tables, or performing data migrations.

All actions are bounded and reversible at the service level.



## Context Handling and Data Flow

The Database Agent receives explicit instructions from the wm_agent, including target databases, tables, or query requirements. It does not infer intent or guess schema meaning.

The agent produces structured outputs such as table metadata, column definitions, validated SQL structures, and Query Service definitions. These outputs are returned to the wm_agent to support downstream planning and execution.

If required confirmation or context is missing, the agent pauses and requests clarification before proceeding.


## Authority and Constraints

The Database Agent operates under strict safety constraints.

It requires explicit user confirmation before interacting with database services. It follows a validation-first workflow that includes placeholder checks, test execution, and return column detection before a query is accepted.

The agent cannot modify database schemas and cannot make assumptions about structure, relationships, or business intent. All conclusions are based solely on observable metadata and validated query behavior.

These constraints ensure that database integrity and correctness are preserved at all times.



## Execution Flow (High-Level)

At a high level, the Database Agent is invoked to inspect database structures or manage Query Services. It validates queries through testing, builds the corresponding design-time representations, and returns verified outputs to the wm_agent.

Execution responsibility remains with the coordinating agent once database artifacts are prepared.



## Design Invariants

The following conditions are always true for the Database Agent.

* Database schemas are never modified.
* All queries are validated before use.
* Query Services reflect verified SQL behavior.
* No assumptions are made about database intent or structure.
* All operations require explicit confirmation.

Violation of these invariants results in an unsafe database interaction.

