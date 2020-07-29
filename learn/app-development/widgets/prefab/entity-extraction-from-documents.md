---
title: "Entity Extraction Prefab"
id: ""
---
---

The Entity Extraction prefab enables extracting required entities with values from any structured document. It uses the [AWS Textract](https://docs.aws.amazon.com/textract/latest/dg/what-is.html).
Prerequisites of using the prefab are:

1. Create AWS account and IAM user with policy `AmazonTextractFullAccess`.

2. Generate and set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and the `AWS_REGION` at prefab’s App Environment in your app development. (In your app’s `Settings > Config profile > EntityEXtraction (prefab) > App Environment`)

![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/entity-extraction-from-document-picture1.png)

3. Bind the “URL” and “Entities” (properties of prefab) on your page.

![/learn/assets/entity-extraction-from-document-picture2.png](/learn/assets/entity-extraction-from-document-picture3.png)
![/learn/assets/entity-extraction-from-document-picture3.png](/learn/assets/entity-extraction-from-document-picture3.png)

4. That’s it. Now you can bind prefab’s output back to different widgets (text, list, table, or form). The below example shows how to bind each individual entity-value to a text-widget.

![/learn/assets/entity-extraction-from-document-picture4.png](/learn/assets/entity-extraction-from-document-picture4.png)
