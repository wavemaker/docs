---
title: "PDF preview"
id: "pdf-preview-and-download"
sidebar_label: "PDF preview"
---
---
import PdfPreview from '/learn/assets/pdf-preview-and-download.png';

Viewing PDFs in mobile apps offers users unparalleled convenience and flexibility. The portability of mobile devices 
allows for on-the-go access to important documents, while integrated features in apps enable annotation, editing, and 
optimized viewing tailored for smaller screens. Many of these apps also provide offline access, cloud storage 
integration, and security measures like encryption. Additionally, they enhance user experience with search 
functionalities, interactivity, and accessibility features. The ability to view PDFs on mobile devices not only caters 
to modern needs but also promotes environmental conservation by reducing the need for printed documents. In this blog 
we will see how to add PDF preview functionality to a WaveMaker app using the `react-native-pdf` and 
`react-native-blob-util` libraries.

## Adding PDF Preview in a WaveMaker App

The `react-native-pdf` library is a React Native PDF viewer component with support for both iOS and Android. 
It uses the native libraries `PDFKit` on iOS and `PdfRenderer` on Android. 
The `react-native-blob-util` library is a React Native wrapper for the `blob-util` library.
We can leverage these libraries to add PDF preview functionality to a WaveMaker app. The best way to accomplish this is 
through creating a prefab that will handle the PDF functional component.
Please refer to this [page](https://docs.wavemaker.com/learn/react-native/custom-widget) for more information on how to 
create a prefab in WaveMaker.


## Downloading PDFs in a WaveMaker App

Downloading PDFs is a common requirement in mobile applications, and React Native makes it relatively straightforward to implement this functionality. 
Here, we'll walk you through how to download a PDF file in a WaveMaker app using the `rn-fetch-blob`.

### Adding rn-fetch-blob Plugin to your WaveMaker App

- rn-fetch-blob

RNFetchBlob plugin can be installed in a few steps in a WaveMaker application. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install the plugin. 


<img src={PdfPreview} style={{width:"35%"}} />

The following is the code snippet for the above mockup

```javascript 
var RNFetchBlob = require('rn-fetch-blob').default;

  Page.onReady = function () {};

  Page.downloadpdfTap = function ($event, widget) {
    const value = Page.Widgets.pdfurl.datavalue; //input value

    let dirs = RNFetchBlob.fs.dirs;
    
    const filename = value.substring(value.lastIndexOf('/') + 1, value.length);

    RNFetchBlob.config({
      fileCache: true,
      path: dirs.DownloadDir + '/' + filename,
      addAndroidDownloads: {
        notification: true,
        title: filename,
        mediaScannable: true,
      },
    })
      .fetch('GET', value, {})
      .then(res => {
        console.log('The file saved to ', res.path());
      })
      .catch(error => {
        console.error('Error creating directory:', error);
      });
  };

```


