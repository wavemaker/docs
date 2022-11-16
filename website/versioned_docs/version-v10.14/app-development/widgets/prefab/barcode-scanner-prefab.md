---
title: "Barcode Scanner Prefab"
id: "barcode-scanner-prefab"
---
---

The Barcode Scanner prefab can be used to scan different type of barcodes from the WM App. It uses the [zxing-js](https://github.com/zxing-js/library) library internally for the purpose.

## How to use the prefab

1. Download the prefab zip from the [github](https://github.com/wavemaker/prefab-barcode/releases) repo and [import](/learn/app-development/custom-widgets/prefabs-overview#importing-prefabs) it in your WaveMaker project.
2. Drag and Drop the prefab on to the canvas on the desired page
3. The prefab has scan and cancel buttons that opens and closes the camer (for scanning). The caption & icon for these buttons can be configured from the properties pane
![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/barcode-scanner-properties.png)
4. The prefab also has onBeforeScan() and onSuccess() call backs. The scanned code can be fetched by either using the onSuccess() callback (as shown below) or by using the prefab property 'datavalue' as `Page.Widgets.<prefab_name>.datavalue`.
![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/barcode-scanner-events.png)
![/learn/assets/entity-extraction-from-document-picture1.png](/learn/assets/barcode-scanner-on-success.png)




