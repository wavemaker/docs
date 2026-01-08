---
title: WaveMaker Agent
last_update: { author: "Swetha Kundaram" }
---


## Overview

The **wm_agent** is the central coordinator of the AIRA system. It is responsible for controlling how work flows across agents by planning execution, delegating tasks, maintaining shared context, and tracking progress across a session.

The wm_agent does not execute tasks and does not modify project state. It never performs domain-specific work such as UI creation, API configuration, or code generation. Its responsibility is strictly limited to coordination.

This separation between coordination and execution ensures predictable behavior, clean responsibility boundaries, and safe multi-agent operation.


## Role in AIRA Architecture

The wm_agent sits at the top of the AIRA agent hierarchy.

All specialized agents operate under its direction. The wm_agent receives high-level user requests and translates them into a structured execution plan that can be carried out by domain-specific agents. It ensures that each task is assigned to the correct agent and executed in the appropriate order.

The wm_agent also preserves continuity across the session. It ensures that context, decisions, and execution state remain consistent from the beginning of a workflow to its completion.


## Core Responsibilities

### Workflow Orchestration

The wm_agent designs the overall execution flow for a request. It determines task order, evaluates dependencies between tasks, and decides whether tasks should run sequentially or in parallel. Its focus is on correctness and coordination rather than speed or implementation detail.

### Task Decomposition

When a request is large or ambiguous, the wm_agent breaks it down into clear, atomic tasks. Each task is scoped so that a single specialized agent can complete it without overlapping responsibilities or assumptions about other tasks.

### Agent Delegation

The wm_agent delegates tasks to specialized agents with explicitly scoped context. Each agent receives only the information required to perform its responsibility. The wm_agent does not embed logic, instructions, or execution behavior inside the delegation itself.

### Session Management

The wm_agent enforces strict session boundaries. Each session is bound to a single wm_agent instance, preventing cross-session leakage and unintended context sharing between workflows.

### Progress Tracking

The wm_agent tracks task status and dependencies throughout execution. As tasks complete or conditions change, it updates the execution plan to reflect the current state of the workflow.


## Execution Plan Management

The wm_agent creates and maintains a persistent execution plan stored as `plan.md`.

The execution plan defines task order, dependencies, and agent assignments. It also records task status and captures outputs that are required by downstream tasks. The plan acts as a single source of truth for the workflow.

The execution plan is a living document. It is updated dynamically as execution progresses or requirements change, ensuring traceability and auditability across the entire session.


## Context Handling and Data Flow

The wm_agent manages explicit context passing between tasks. This includes identifiers, names, and structured outputs produced by previously executed agents. No agent is expected to infer missing information or reconstruct context implicitly.

For image-related workflows, the wm_agent passes only raw image filenames. It does not interpret, analyze, or describe image content and always delegates image-related work to agents that are explicitly capable of handling images.



## Authority and Constraints

The wm_agent operates under strict boundaries that define what it is allowed to do and what it must never do.

The wm_agent is authorized to create and persist execution plans, invoke specialized agents with structured context, coordinate multi-agent workflows, update plans during execution, and maintain session integrity.

The wm_agent is not permitted to modify project files, source code, or configurations. It cannot execute domain-specific tasks, analyze or interpret images, or perform UI, API, or backend operations. These constraints exist to prevent role leakage and to keep the system stable and predictable.



## Execution Flow (High-Level)

At a high level, a typical workflow begins with a user request being received by the wm_agent. The wm_agent decomposes the request into tasks, creates an execution plan, and delegates those tasks to specialized agents. As agents complete their work, outputs are collected and the plan is updated until the workflow reaches completion.

Throughout this process, the wm_agent ensures that work is done correctly without performing the work itself.


## Design Invariants

The following conditions are always true for the wm_agent.

* The wm_agent coordinates execution but never performs execution.
* The wm_agent never mutates project state.
* Each session is bound to a single wm_agent instance.
* Ambiguity must be resolved before planning begins.
* Execution plans are updated as execution conditions change.

If any of these invariants are violated, the system is in an invalid state.
