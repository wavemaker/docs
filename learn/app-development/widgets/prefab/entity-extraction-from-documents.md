---
title: "Entity Extraction Prefab - Automatically extract data from structured documents such as Invoices, Receipts"
id: ""
---
---

There are many situations where data has to be extracted from a scanned recipt or a PDF document or an screenshot taken from a mobile phone. Automatically extracting information from such documents will enable in building delighful user experiences. This prefab will help implement such extraction of data any structured document. Given the document as input, the prefab uploads to it to [AWS Textract](https://docs.aws.amazon.com/textract/latest/dg/what-is.html) to extract data from it. The extracted data is available as key-value pair and developer can pick the data they are interested in.


## How to use this prefab:

1. Download the prefab [here](https://github.com/wavemaker/prefab-entity-extractor/releases/latest) and [import into your WaveMaker project](/learn/app-development/widgets/custom-widgets.md#importing-prefabs).

2. Create AWS account and IAM user with policy `AmazonTextractFullAccess`.

3. Generate and set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and the `AWS_REGION` at prefab’s App Environment. (In your app’s `Settings > Config profile > EntityEXtraction (prefab) > App Environment`)

![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/entity-extraction-from-document-picture1.png)

4. Bind the “URL” and “Entities” (properties of prefab) on your page. URL is the path of the document to download and process. Entities are labels from the document whose values have to be extracted. For example, in a [W2 form](https://upload.wikimedia.org/wikipedia/en/1/10/Form_W-2%2C_2016.pdf) `Employee’s social security number` could be an entity.

![/learn/assets/entity-extraction-from-document-picture2.png](/learn/assets/entity-extraction-from-document-picture2.png)
![/learn/assets/entity-extraction-from-document-picture3.png](/learn/assets/entity-extraction-from-document-picture3.png)

5. That’s it. Now you can bind prefab’s output(JSON object - key-value pair) back to different widgets (text, list, table, or form). The below example shows how to bind each individual entity-value to a text-widget.

![/learn/assets/entity-extraction-from-document-picture4.png](/learn/assets/entity-extraction-from-document-picture4.png)

6. Once click on the prefab it can fill values automatically in text widgets as below.

![/learn/assets/entity-extraction-from-document-picture5.png](/learn/assets/entity-extraction-from-document-picture5.png)

## Other Prefabs
1. [Use Box Viewer to view Office documents in browser] (/learn/app-development/widgets/custom-widgets/#importing-prefabs)
