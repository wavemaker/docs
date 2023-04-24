---
title: "Enterprise Marketplace"
id: "enterprise-marketplace"
sidebar_label: "Enterprise Marketplace"
---
---


Enterprise marketplace allows artifacts to be published by teams to be used across multiple teams. WaveMaker already has the feature to publish artifacts within the team where the members of the team can share and use the published artifacts. Now, with this feature teams will be able to share any artifact over marketplace and improve collaboration, reusability, while using new or existing Prefabs.

:::note
Enterprise Marketplace is available only with WaveMaker Enterprise version of the product and not available on wavemakeronline.com
:::

![Enterprise Marketplace](/learn/assets/wm_enterprisemarketplace.png)

:::note
To know more about publishing **Artifacts**, see [Artifacts Repository](/learn/teams/import-vcs-project)
:::

## Publish Prefab to Marketplace

:::note
Only the team portal admin has the permission to publish any artifacts to "Enterprise marketplace".
:::

- Go to [Teams Portal](/learn/teams/overview) > [Manage Prefabs](/learn/teams/manage-prefabs).
- Go to the **Pending Approval** tab.
- Select the Prefab, which is ready for review. Admin can Approve or Reject the Prefab submission request. 
- Once approved, Prefab is listed in **Approved Prefabs** tab, which makes it available for team members to consume.
- Click **Publish to Marketplace**. A dailog opens to verify the details of the Prefab. Check the consent and click **Publish**.

![Enterprise Marketplace](/learn/assets/wm_publishtomarketplace.png)

- Once published, go to the **Marketplace Prefabs** tab. You can view the list of Prefabs available, which are ready to consume.

![Marketplace Prefabs](/learn/assets/wm_marketplaceprefabs.png)

### Publisher Information

The identity of the published Prefab information is shown where the Prefab is listed. This includes the team name, as shown in the image below.

![Publisher Information](/learn/assets/wm_artifactpublisherdetails.png)

:::note
Versioning of the Prefabs follow semantic versioning scheme.
:::

### Semantic Versioning

WaveMaker supports versioning system to name the releases. Semantic versioning is a globally accepted versioning scheme that is already followed by many software publishers. With WaveMaker 11.3, the support extends to follow semantic versioning for Artifacts, including Prefabs.

An example of semantic versioning is as shown below.

![Semantic Versioning](/learn/assets/wm_semanticversion.png)

**Example**:

In a timeline of three months, the following versions can be published:

- Major  - **1**.0.0 , **2**.0.0, **3**.0.0
- Minor - 1.**1**.0, 2.**1**.0, 3.**1**.0
- Patch - 1.0.**1**, 1.0.**2**, 1.0.**3**, 2.0.**1**, 2.0.**2**

![Semantic Versioning](/learn/assets/wm_artifactversion.png)

## Consume Prefab from Marketplace

Developers can consume Prefab from WaveMaker Studio.

- Go to a project.
- To consume a Prefab published to Marketplace, go to the Pages tab.
- Locate **Prefabs** and click the '+' icon. This opens a dialog, listing all the Prefabs that are ready to consume.
- Go to the **Marketplace** tab. Select the Prefab and click **Import**.

![Enterprise Marketplace](/learn/assets/wm_enterprisemarketplace.png)

- To locate the imported Prefab, expand the Prefabs section.

![Marketplace Prefab Imported](/learn/assets/marketplace-prefab-imported.png)

Drag and drop the Prefab onto the canvas to use.
