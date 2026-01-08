---
title: How AIRA Works
last_update: { author: "Swetha Kundaram" }
---

### Architecture Diagram

```mermaid
flowchart TD

    User[User Request]

    User --> wm_agent["wm_agent (Coordinator)"]

    wm_agent --> wm_architect["wm_architect Architecture Decisions"]
    wm_agent --> wm_ui["wm_ui_expert_prism UI Construction"]
    wm_agent --> wm_js["wm_js_agent Client Logic"]
    wm_agent --> wm_theme["wm_theme_agent Theming"]
    wm_agent --> wm_java["wm_java_agent Backend Logic"]
    wm_agent --> wm_db["wm_database_agent Database & Queries"]
    wm_agent --> wm_api["wm_api_agent External APIs"]
    wm_agent --> wm_api_bind["wm_api_binding_agent UI ↔ API Binding"]
    wm_agent --> wm_security["wm_security_agent Security & Auth"]
    wm_agent --> wm_i18n["wm_i18n_agent Localization"]
    wm_agent --> wm_market["wm_marketplace_agent Marketplace Assets"]
    wm_agent --> wm_vcs["wm_vcs_agent Version Control"]
    wm_agent --> wm_rescue["wm_rescue_agent Incident Recovery"]

    %% Logical dependencies
    wm_ui --> wm_theme
    wm_ui --> wm_js
    wm_ui --> wm_api_bind

    wm_api_bind --> wm_api
    wm_api --> wm_java
    wm_java --> wm_db

    wm_security --> wm_api
    wm_security --> wm_ui

    wm_vcs --> wm_rescue
```

AIRA follows a controlled, step-by-step execution flow. Each step limits scope to prevent unintended changes.

### User Request

You give a natural-language instruction that describes what you want to build.

**Example**

```
Add a login page with email and password, connect it to an authentication API,
and restrict access to authenticated users.
```

### Intent Analysis

The WaveMaker Agent analyzes the request. It:

- Understands the required outcome  
- Identifies involved domains (UI, API, Security)  
- Breaks the request into smaller executable tasks  
- Checks that available agents can handle the request  

No code or configuration is created at this stage.

### Task Delegation

The system assigns each task to a specialized agent.

**Example**

```
- UI Expert Agent → Creates or updates the login page UI  
- API Agent → Imports or binds the authentication API  
- Security Agent → Applies authentication and access rules  
```

Each agent works only within its defined scope.

### Controlled Execution

Each agent:
- Modifies only authorized files and entities  
- Follows WaveMaker project rules and structure  
- Reports results back to the WaveMaker Agent  

This keeps changes predictable and safe.

### Assembly and Completion

The WaveMaker Agent:
- Collects outputs from all agents  
- Resolves dependencies between changes  
- Prepares a final set of changes for review  

Changes apply to the design workspace only after acceptance.

### Execution Outcome

You get a complete, working feature.  
Changes stay scoped, reviewable, and under developer control.

## Controlling AI Agents


### The plan is your control point

AIRA shows every step it plans to run before it does anything. This is the moment where you stay in charge. You can review the steps, make edits, or ask AIRA to adjust the plan. You do not need to read every line in detail, but you should scan for what pages it will modify, which files it will touch, any API or service updates, and new components it plans to add.

If something looks wrong, you can correct it in plain language. You can ask AIRA to remove a step, avoid a specific service, limit changes to the UI, or split the work into smaller parts. AIRA updates the plan and shows it again for review.

### Once you approve the plan, execution runs to completion

After you confirm the plan, you cannot stop, pause, or modify it. This is by design. Your real control happens before execution, when the full breakdown is visible and editable.

### If you did not read everything closely

Nothing breaks automatically, but you might approve changes you did not intend. To reduce that risk, you can ask AIRA to simplify the plan. You can request only UI-related steps, group similar actions, explain only risky changes, or highlight the files being modified. This lets you review faster without missing important details.

### If something still goes wrong

You always have a way out. You can undo changes using version control, reject all changes during the Apply step, or start a fresh chat with clearer instructions.
