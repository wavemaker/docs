---
title: "Enterprise Marketplace"
id: "enterprise-marketplace"
---
---

## Enterprise Marketplace

**Enterprise Marketplace** is a platform to publish artifacts that can be used across multiple teams. Any team who has been given access by the super admin can use the option to publish the artifacts to **Enterprise Marketplace**. Team admin can publish any version of artifact to Marketplace via **Teamportal** and can view the list of prefabs to be published to **Enterprise Marketplace** in **Manage Prefabs** page.

:::note
To know more about publishing **Artifacts**, see [Artifacts Repository](/learn/teams/import-vcs-project)
:::

## Publishing Information

Publishing artifacts allow multiple teams access the artifacts published in **Marketplace**. Publisher information includes the publishing team name. Every artifact is associated with publisher information.
You can see the importance of publisher information below:

**Use Case**:

Team ABC has published an artifact and team XYZ has published an artifact with the same name as team ABC. In this case, if any team imports the artifact published by team ABC, they get respective artifacts updates even if there are updates in the artifact with same name made by team XYZ. You can use the artifact and its updates published by team XYZ by switching the publisher information.

:::note
You can only publish an artifact using semantic versioning to mention the version of the artifact.
:::

## Semantic Versioning

**Semantic versioning** is the standard three digit versioning system to publish an artifact that includes, **Major.Minor.Patch** of the respective artifact. Every project branch can have its own sequence of versioning in ascending order. Versions within the project are unique across branches and are validated by WaveMaker.

**Example**:

In a timeline of 3 months following versions can be published

- Master  - 1.0.0 , 2.0.0, 3.0.0
- hotfix - 1.0.1, 1.0.2, 1.0.3, 2.0.1, 2.0.2
- Feature_11 - 1.1.0, 2.1.0, 3.1.0
