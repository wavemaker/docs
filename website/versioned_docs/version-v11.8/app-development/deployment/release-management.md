---
title: "Release Management"
id: "release-management"
sidebar_label: "Overview"
---
---

**Release management** is a software engineering process for managing the application development, testing, deployment, and support of the application version release. Release Management helps you to plan, schedule, and control the movement of releases to test and live environments. It ensures the delivery of the new enhanced app services while also protecting the integrity of the existing services.

[![release_pipeline](/learn/assets/release_pipeline.png)](/learn/assets/release_pipeline.png)

A typical app life cycle involves various phases including development, testing, and deployment before the App is live. A **Deployment** or **Release Pipeline** requires setting up these phases to the respective teams to prepare the app for the delivery process.

The following phases involve different roles within an app engineering team for successful app delivery.

1. **Dev** - Used by the developers while building the app for testing.
2. **QA or Demo** – Normally used for integrating test cases allowing collaborators to add their integration pieces or to do a demo of an app to stakeholders or to get an approval of the application features. It can also be used for end-to-end testing of the app by the QA team, verifying feature completeness, run automated tests and more.
3. **Stage** – Used for pre-live demos, approvals from business teams, performance, and User Acceptance Testing (UAT).
4. **Live** – The environment where the App is accessible to the end-users.

Each App phase as depicted above requires its own infrastructure components to run the services accessible to the different roles within the app development team. That is, each App phase requires different configuration for databases, environment, varying sizing needs, and more. These infrastructure needs are the responsibility of the DevOps team; therefore, it is their responsibility to set the following requirements.

- Set up an appropriate infrastructure for each phase
- Set roles and have access to each phase
- Secure each phase
- Ensure the smooth transition of the project between phases with minimum app changes
- Control versioning during the transition

## See Also

[Pipeline and Phases](/learn/app-development/deployment/pipelines-phases)