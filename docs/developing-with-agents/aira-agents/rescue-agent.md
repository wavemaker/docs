---
title: Rescue Agent
last_update: { author: "Swetha Kundaram" }
---


## Overview

The **wm_rescue_agent** is responsible for incident handling within the AIRA system. Its role is to analyze logs, diagnose failures, and coordinate remediation when something goes wrong in an application or environment.

This agent does not apply fixes directly by default. It exists to restore clarity during failure, identify root causes, and guide safe recovery through controlled delegation and coordination.

The Rescue Agent prioritizes stability, traceability, and reversibility over speed.


## Role in AIRA Architecture

The Rescue Agent operates as a specialized coordination agent under the orchestration of the **wm_agent**.

It is invoked when failures, errors, or unexpected behavior are detected and require investigation. While execution agents build and modify the system, the Rescue Agent steps in only when normal workflows break down.

When issues cannot be resolved safely at the execution level, the Rescue Agent escalates analysis to the Architect Agent for deeper architectural review.



## Core Responsibilities

### Log Retrieval and Analysis

The Rescue Agent retrieves and analyzes server and application logs to understand failure conditions. It correlates log entries across components and timeframes to identify patterns, anomalies, and triggering events.

Log analysis is observational and non-invasive. No system state is modified during diagnosis.

### Incident Diagnosis and Root Cause Identification

Based on available evidence, the agent identifies the most likely root cause of an issue. It distinguishes symptoms from underlying causes and avoids speculative conclusions when data is incomplete.

Diagnosis results are structured and explicit to support informed decision-making.

### Issue Assessment and Reporting

The Rescue Agent produces a clear issue report that includes a summary of the problem, the identified root cause, and an assessment of severity and impact.

This report serves as the foundation for deciding whether and how remediation should proceed.

### Remediation Coordination

When remediation is required, the Rescue Agent coordinates fixes by delegating tasks to appropriate specialist agents. Delegation occurs only after user consent is obtained and remediation scope is clearly defined.

The agent does not execute fixes itself. It ensures that remediation actions are targeted and minimal.



## Execution Scope

The Rescue Agent operates strictly within the incident response and coordination layer.

It is authorized to retrieve and analyze logs, correlate events, generate diagnostic reports, and coordinate remediation workflows. Its scope does not include modifying application code, configuration, or infrastructure directly.

All corrective actions are performed by specialized agents under explicit coordination.



## Context Handling and Data Flow

The Rescue Agent receives incident context from the wm_agent, system signals, or user reports. This context may include error messages, timestamps, affected components, or environment details.

It produces structured outputs such as issue summaries, root cause explanations, severity assessments, and recommended remediation steps. These outputs are passed back to the wm_agent and relevant agents for controlled execution.

If information is insufficient to reach a safe conclusion, the agent requests additional context rather than guessing.



## Authority and Constraints

The Rescue Agent operates under strict incident-handling constraints.

It must obtain explicit user consent before initiating remediation or delegating corrective actions. It prefers minimally invasive fixes that reduce risk and avoid cascading changes.

For every remediation path, the agent provides rollback guidance so changes can be safely reverted if necessary. When issues cannot be resolved confidently, the agent escalates analysis to the Architect Agent instead of forcing a fix.

These constraints ensure that recovery efforts do not introduce new failures.



## Execution Flow (High-Level)

At a high level, the Rescue Agent is invoked when an issue is detected. It analyzes logs, correlates events, identifies root cause, and produces an issue report. If remediation is approved, it coordinates fixes through specialized agents and tracks resolution.

If remediation is unsafe or unclear, escalation occurs instead of execution.



## Design Invariants

The following conditions are always true for the Rescue Agent.

* Diagnosis precedes remediation.
* User consent is required before corrective action.
* Fixes are minimal and targeted.
* Rollback guidance is always provided.
* Unresolved issues are escalated, not forced.

Violation of these invariants results in unsafe incident handling.





