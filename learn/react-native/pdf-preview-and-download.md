---
title: "PDF preview"
id: "pdf-preview-and-download"
sidebar_label: "PDF preview"
---
---
import PdfPreview from '/learn/assets/pdf-preview-and-download.png';
import CreatePrefab from '/learn/assets/create-pdf-preview-prefab.png'
import SelectWidget from '/learn/assets/select-custom-widget.png'
import CreateProperties from '/learn/assets/add-link-and-password-property.png' 
import AddPackages from '/learn/assets/add-pdf-dependecies.png'
import AddProperty from '/learn/assets/add-property-in-prefab.png' 
import BindProperties from '/learn/assets/bind-link-and-password-properties.png'
import DialogBox from '/learn/assets/password-dialog-box.png'
import Password from '/learn/assets/add-password-expression.png'
import ImplementPrefab from '/learn/assets/implement-prefab-to-project.png'

Viewing PDFs without leaving the mobile app offers ability for developers to keep their users in the app's context. It is possible to let PDF file download to the phone and have the user open it using a different app. That may not be best user experience for an app. Not all users may know how to locate and open the PDF file in a different app. 
In this how-to we will see how to add PDF preview functionality to a WaveMaker app using the `react-native-pdf` and 
`react-native-blob-util` libraries.

## Adding PDF Preview in a WaveMaker App

The `react-native-pdf` library is a React Native PDF viewer component with support for both iOS and Android. 
It uses the native libraries `PDFKit` on iOS and `PdfRenderer` on Android. 
The `react-native-blob-util` library is a React Native wrapper for the `blob-util` library.
We can leverage these libraries to add PDF preview functionality to a WaveMaker app. The best way to accomplish this is 
through creating a prefabs in WaveMaker which will handle the PDF functional component.

## Building Prefabs in WaveMaker for PDF Preview

The following steps will you can create your own Prefabs for PDF Preview.

<img src={CreatePrefab} style={{width:"35%"}} />

Select widget in sidebar and search for the custom widget and drag n drop to the design box

<img src={SelectWidget} style={{width:"35%"}} />

Add link and password properties to the custom widget

<img src={CreateProperties} style={{width:"35%"}} />

### Prefab Configuration

On creating prefab we configure it through simple steps. 

Click on **setting** then click on  **Config Prefab**. Now, select Resources tab and In **Script** section add `react-native-pdf` and 
`react-native-blob-util` dependencies to the scripts and then click on save.

<img src={AddPackages} style={{width:"35%"}} />

And then, select properties tab. Add Link Property in **UI Properties** section and click on save.

<img src={AddProperty} style={{width:"35%"}} />

Make sure to select **Use Expression** tab, and add `pdfpassword` expressoin.

<img src={Password} style={{width:"35%"}} />

Time to bind prefab link and password properties to the widget

<img src={BindProperties} style={{width:"35%"}} />

After setting up the configurations it's time for us to implement functionality for the prefab with code.

In order to handle password flows, we need to create dialog box for password by using design dialog widget.

<img src={DialogBox} style={{width:"35%"}} />

```javascript

Prefab.onReady = function() {
    Prefab.date = new Date();
    if (Prefab.Widgets.custom1) {
        Prefab.Widgets.custom1.renderview = renderPdf;
    }
};

Prefab.submitClick = function($event, widget) {
    Prefab.pdfpassword = Prefab.Widgets.passwordinput.datavalue;
};

function renderPdf(props) {
    const react = require('react');
    const Pdf = require('react-native-pdf');

    if (!props.link) {
        return null;
    }

    return react.createElement(Pdf.default, {
        trustAllCerts: false,
        source: {
            uri: props.link,
            caches: true,
        },
        style: {
            flex: 1,
            width: 380,
            height: 520,
        },
        password: props.password ? props.password : '',
        onError: (error) => {
            Prefab.Widgets.passworddialog.open();
            console.log(error);
        },
        onLoadComplete: (numberOfPages, filepath) => {
            Prefab.Widgets.passworddialog.close();
            console.log(`number of pages: ${numberOfPages}`);
        },
    });
}
```

This prefab we can render with or without password-protected files.

## Implement Prefab to the project

To implement Prefab to the project, expand Prefab tab in sidebar and select your custom prefab and drag n drop to the design box

<img src={ImplementPrefab} style={{width:"35%"}} />

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


