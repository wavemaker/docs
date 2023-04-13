---
title: "Enterprise Marketplace"
id: "enterprise-marketplace"
---
---

## Enterprise Marketplace

Enterprise Marketplace lets you use published artifacts across multiple teams to reduce efforts to create an available artifact and improve collaboration. You create artifacts and team admin publishes the required version of artifact to Marketplace via Teamportal. 

![Enterprise Marketplace](/learn/assets/wm_enterprisemarketplace.png)

You can view the list of prefabs to be published to Enterprise Marketplace in Manage Prefabs page.

![Enterprise Marketplace](/learn/assets/wm_marketplaceprefabs.png)

:::note
Any team that has been given access by the super admin can publish the artifacts to Enterprise Marketplace where super admin has complete access over platform.
:::

:::note
To know more about publishing **Artifacts**, see [Artifacts Repository](/learn/teams/import-vcs-project)
:::

## Publisher Information

Publishing artifacts allow multiple teams access the artifacts published in **Marketplace**. Publisher information includes the publishing team name. Every artifact is associated with publisher information.

![Publisher Information](/learn/assets/wm_artifactpublisherdetails.png)

:::note
You can only publish an artifact using semantic versioning to mention the version of the artifact.
:::

## Semantic Versioning

Semantic versioning is the standard three digit versioning system to publish an artifact that includes, Major.Minor.Patch details of respective artifact. Every project branch can have its own sequence of versioning in ascending order. Versions within the project are unique across branches and are validated by WaveMaker.

![Semantic Versioning](/learn/assets/wm_semanticversion.png)

**Example**:

In a timeline of 3 months following versions can be published

- Master  - 1.0.0 , 2.0.0, 3.0.0
- hotfix - 1.0.1, 1.0.2, 1.0.3, 2.0.1, 2.0.2
- Feature_11 - 1.1.0, 2.1.0, 3.1.0

![Semantic Versioning](/learn/assets/wm_artifactversion.png)

Publish Artifact

![Flow to publish Artifact](/learn/assets/wm_flowtopublishartifact.png)