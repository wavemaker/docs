---
title: Welcome to AIRA
last_update: { author: "Swetha Kundaram" }
---

WaveMaker 12 introduces AIRA, an agent-based development system that works alongside the traditional design-first workflow. 


### What Is AIRA

AIRA is an AI-powered workflow coordinator built into WaveMaker Studio.
It enables agent-based application development by breaking down a user’s request into smaller tasks and delegating them to specialized AI agents.

Rather than acting as a single, general-purpose AI, AIRA functions as a multi-agent orchestrator. Each agent is responsible for a specific domain—such as UI, APIs, backend logic, or security—and operates within clearly defined boundaries.

AIRA’s role is to coordinate work, not to replace the developer. It focuses on planning, delegation, and controlled execution so that complex, multi-step tasks can be completed faster and more reliably.

### What AIRA Is Good At

AIRA is designed to accelerate development when the desired outcome is clear.

It works especially well for tasks that span multiple areas of an application and would otherwise require repetitive setup or careful coordination.

AIRA is effective at:

- Creating application structure from intent rather than manual steps
- Generating UI pages and partials using WaveMaker’s declarative model
- Connecting UI to APIs, databases, or backend services
- Adding backend logic incrementally using platform conventions
- Configuring security, authentication, and access control
- Diagnosing issues and coordinating fixes across multiple layers

Working from screenshots, API specifications, or design references to generate implementations that align with WaveMaker capabilities

In these scenarios, AIRA reduces manual effort while preserving correctness and platform compliance.

### What AIRA Is Not

AIRA is powerful, but it is deliberately constrained. These constraints are intentional and critical to maintaining predictable behavior in enterprise applications.

AIRA is not a free-form AI assistant that invents unconstrained solutions or bypasses platform rules.

Specifically:

AIRA does not invent novel application architectures or arbitrary code.
It can suggest reasonable layout or styling options within WaveMaker’s system, but it does not design new frameworks or patterns.

AIRA does not refactor entire applications.
It works incrementally on well-defined tasks rather than performing full rewrites or sweeping changes.

AIRA does not guess unclear requirements.
If a request is ambiguous or missing critical information, AIRA pauses and asks for clarification before proceeding.

AIRA does not operate outside defined scopes.
Each agent is restricted to WaveMaker-supported technologies and tools. It will not introduce unsupported Java frameworks, custom React components, or external build systems.

These limitations ensure that changes made by AIRA remain safe, reviewable, and aligned with the platform.