---
title: "Entity Extraction Prefab - Automatically extract data from structured documents such as Invoices, Receipts"
id: ""
---
---

There are many situations where data has to be extracted from a scanned recipt or a PDF document or an screenshot taken from a mobile phone. Automatically extracting information from such documents will enable in building delighful user experiences. This prefab will help implement such extraction of data any structured document. Given the document as input, the prefab uploads to it to [AWS Textract](https://docs.aws.amazon.com/textract/latest/dg/what-is.html) to extract data from it. The extracted data is available as key-value pair and developer can pick the data they are interested in. 

** Prerequisites of using the prefab are:

1. Create AWS account and IAM user with policy `AmazonTextractFullAccess`.

2. Generate and set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and the `AWS_REGION` at prefab’s App Environment. (In your app’s `Settings > Config profile > EntityEXtraction (prefab) > App Environment`)

![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/entity-extraction-from-document-picture1.png)

3. Bind the “URL” and “Entities” (properties of prefab) on your page. URL is the path to the file (uploaded to the project) to be processed and Entities are labels from the document which are required to be extract their values.

![/learn/assets/entity-extraction-from-document-picture2.png](/learn/assets/entity-extraction-from-document-picture2.png)
![/learn/assets/entity-extraction-from-document-picture3.png](/learn/assets/entity-extraction-from-document-picture3.png)

4. That’s it. Now you can bind prefab’s output(JSON object - key-value pair) back to different widgets (text, list, table, or form). The below example shows how to bind each individual entity-value to a text-widget.

![/learn/assets/entity-extraction-from-document-picture4.png](/learn/assets/entity-extraction-from-document-picture4.png)

5. Once click on the prefab it can fill values automatically in text widgets as below.

![/learn/assets/entity-extraction-from-document-picture5.png](/learn/assets/entity-extraction-from-document-picture5.png)
