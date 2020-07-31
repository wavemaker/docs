---
title: "Entity Extraction Prefab"
id: ""
---
---

Automatically extract data from structured documents such as Invoices, Receipts.

There are many situations where data has to be extracted from a scanned recipt or a PDF document or an screenshot taken from a mobile phone. Automatically extracting information from such documents will enable in building delighful user experiences. This prefab will help implement such extraction of data any structured document. Given the document as input, the prefab uploads to it to [AWS Textract](https://docs.aws.amazon.com/textract/latest/dg/what-is.html) to extract data from it. The extracted data is available as key-value pair and developer can pick the data they are interested in.

## How to use this prefab

1. Download the prefab [here](https://github.com/wavemaker/prefab-entity-extractor/releases/latest) and [import into your WaveMaker project](/learn/app-development/widgets/custom-widgets#importing-prefabs).

2. Create AWS account and IAM user with policy `AmazonTextractFullAccess`.

3. Generate and set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and the `AWS_REGION` at prefab’s App Environment. (In your app’s `Settings > Config profile > EntityEXtraction (prefab) > App Environment`)  
![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/entity-extraction-from-document-picture1.png)

4. Bind the “URL” and “Entities” (properties of prefab) on your page.

    1. URL is the path of the document(Prefab v1.1 supports `.png` and `.jpg` formats) to download and process. You can bind URL property with [FileUpload](/learn/app-development/widgets/form-widgets/file-upload) widget's java service variable as shown in the below screen.

    2. Entities are labels from the document whose values have to be extracted. For example, in a [W2 form](https://i0.wp.com/www.rgbrenner.com/wp-content/uploads/2015/02/W2.png) `Employee’s social security number` could be an entity.  
![/learn/assets/entity-extraction-from-document-picture2.png](/learn/assets/entity-extraction-from-document-picture2.png)

5. That’s it. Now you can bind prefab’s output(JSON object - key-value pair) back to different widgets (text, list, table, or form). The below example shows how to bind each individual entity-value to a `Text` widget.  
![/learn/assets/entity-extraction-from-document-picture3.png](/learn/assets/entity-extraction-from-document-picture3.png)

6. Finally, you can upload the document and then click on the prefab `extract_info`, It can fill values automatically in `Text` widgets as below.  
![/learn/assets/entity-extraction-from-document-picture4.png](/learn/assets/entity-extraction-from-document-picture4.png)

## Other Prefabs

1. [Use Box Viewer to view Office documents in browser](/learn/app-development/widgets/prefab/box-viewer-prefab)
