---
title: Architect Agent
last_update: { author: "Author Name" }
---


## Overview

The **wm_architect** is a guidance-focused agent within the AIRA system. Its primary responsibility is to provide architectural clarity across domains by interpreting official documentation, understanding system structure, and advising on how things should be built.

The Architect Agent does not execute tasks and does not modify project state. It exists to prevent architectural mistakes before execution begins and to reduce ambiguity during complex or cross-domain workflows.

Its role is to think, explain, and guide—never to build.


## Role in AIRA Architecture

The Architect Agent operates as an advisory layer within AIRA.

It works alongside the **wm_agent**, supporting planning and decision-making by providing architectural insight, documentation-backed explanations, and system-level context. While the wm_agent coordinates execution, the Architect Agent ensures that the execution plan is architecturally sound and aligned with WaveMaker best practices.

The Architect Agent does not replace specialized agents. Instead, it informs when and how those agents should be used.


## Core Responsibilities

### Architectural Guidance

The Architect Agent provides guidance on how features, flows, and integrations should be designed within the WaveMaker ecosystem. It explains recommended patterns, constraints, and trade-offs based on official documentation and established platform behavior.

Its guidance is descriptive and prescriptive at a conceptual level, not instructional at an implementation level.

### Documentation Discovery and Interpretation

The Architect Agent performs semantic search across official WaveMaker documentation and internal knowledge sources. It interprets documentation in context and explains how it applies to the user’s current problem or system design.

This responsibility focuses on understanding and explanation rather than extraction or summarization alone.

### Cross-Domain Coordination

When a request spans multiple domains such as UI, APIs, security, or data, the Architect Agent helps clarify how those domains interact. It identifies boundaries, dependencies, and ordering concerns that should be considered before execution begins.

This prevents fragmented or conflicting implementations across agents.

### Task Delegation Support

The Architect Agent can recommend which specialized agents should be involved in a task and in what sequence. It does not invoke agents directly unless operating under the wm_agent’s orchestration.

Its role is to inform delegation decisions, not to control execution.


## Execution Scope

The Architect Agent operates strictly within a read-only and advisory scope.

It may inspect documentation, reason about architecture, and analyze workspace structure only when explicit user permission is provided. Its access is observational and contextual, never mutative.

The agent does not create artifacts, update configurations, or influence runtime behavior directly.


## Context Handling and Data Flow

The Architect Agent consumes high-level requests, architectural questions, and contextual signals provided by the wm_agent or the user. It may also receive references to documentation sources, repositories, or workspace components when permission is explicitly granted.

Its output consists of explanations, architectural recommendations, and clarified assumptions. These outputs are passed back to the wm_agent or the user as guidance, not as executable instructions.

The Architect Agent never assumes missing context. If required information is unavailable or access is unclear, it pauses and requests clarification.


## Authority and Constraints

The Architect Agent operates under intentionally strict boundaries.

It is authorized to perform semantic searches across official WaveMaker documentation, analyze workspace structure in read-only mode when permission is explicitly granted, integrate deeply with repository-level technical documentation, and provide architectural guidance that informs planning and delegation.

It is not permitted to modify code, configurations, or project files. It cannot perform domain-specific inspection that belongs to specialized agents, and it never assumes permission to view files or repositories without confirmation. The Architect Agent focuses exclusively on guidance and understanding, not execution.

These constraints ensure that architectural reasoning remains separate from implementation.


## Execution Flow (High-Level)

At a high level, the Architect Agent is engaged when architectural clarity is required. It receives a question or context, consults relevant documentation and system knowledge, and produces guidance that informs planning or execution decisions.

Once guidance is delivered, execution responsibility remains with the wm_agent and specialized agents.



## Design Invariants

The following conditions are always true for the Architect Agent.

* The Architect Agent provides guidance but never executes tasks.
* It operates in read-only mode and only with explicit permission.
* It defers all domain-specific inspection to specialized agents.
* It never assumes access to files, repositories, or configurations.
* Its outputs influence planning, not implementation.

Violation of these invariants represents a breakdown in agent responsibility boundaries.

