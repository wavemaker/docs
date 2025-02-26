---
title: "PDF preview"
id: "pdf-preview-and-download"
sidebar_label: "PDF preview"
---
---

import PdfPreview from '/learn/assets/pdf-preview-and-download.png';
import PdfDownloadNotification from '/learn/assets/pdf_download_notification.png';
import CreatePrefab from '/learn/assets/create-pdf-preview-prefab.png'
import SelectWidget from '/learn/assets/select-custom-widget.png'
import CreateProperties from '/learn/assets/add-link-and-password-property.png' 
import AddPackages from '/learn/assets/add-pdf-dependecies.png'
import AddProperty from '/learn/assets/add-property-in-prefab.png' 
import BindProperties from '/learn/assets/bind-link-and-password-properties.png'
import DialogBox from '/learn/assets/password-dialog-box.png'
import Password from '/learn/assets/add-password-expression.png'
import ImplementPrefab from '/learn/assets/implement-prefab-to-project.png'
import PdfPreviewNative from '/learn/assets/PdfPreview_native_module.png'
import PdfPreviewWeb from '/learn/assets/PdfPreview_web_module.png'
import PdfPreviewPrefab from '/learn/assets/PdfPreview_prefab_script.png'

Viewing PDFs without having to close the mobile app offers the ability to keep their users in the app's context. It is possible to download the PDF files on the phone and have the user open them using a different app. This might not be the best user experience for an app. Not all users might know how to locate and open the PDF file in a different app.

In this document, we will see how to add PDF preview functionality to a WaveMaker app using the `react-native-pdf` and `react-native-blob-util` libraries.

## Adding PDF Preview in WaveMaker App

The `react-native-pdf` library is a React Native PDF viewer component with support for both iOS and Android. It uses the native libraries `PDFKit` on iOS and `PdfRenderer` on Android. The `react-native-blob-util` library is a React Native wrapper for the `blob-util` library.
We can leverage these libraries to add PDF preview functionality to a WaveMaker app. The best way to accomplish this is by creating Prefabs in WaveMaker which will handle the PDF functional component.

## Building Prefabs in WaveMaker for PDF Preview

The following steps will help you create your own Prefab for PDF Preview. To know how to add third-party libraries see, [Custom Widget](/learn/react-native/custom-widget#adding-third-party-native-libraries).

<img src={CreatePrefab} style={{width:"100%"}} /><br/><br/>

1. Go to Widget in the sidebar and search for the **Custom** widget. Drag and drop it on the Design screen.

<img src={SelectWidget} style={{width:"35%"}} /><br/><br/>

2. Add **link** and **Password** properties to the custom widget

:::note
We can render this Prefab with or without password-protected files.
:::

<img src={CreateProperties} style={{width:"35%"}} />

### Prefab Configuration

On creating a Prefab we can configure it by following the steps given below.

1. Click on **Setting** icon, then click on  **Prefab Configuration**. Now, select the Resources tab and in **Script** section add `react-native-pdf@6.6.2` and `react-native-blob-util@0.19.8` dependencies to the scripts and then click on Save.

<img src={AddPackages} style={{width:"100%"}} /><br/><br/>

2. Then, select the **Properties** tab. Add Link and Pdfpassword Property in the **UI Properties** section and click on Save.

<img src={AddProperty} style={{width:"100%"}} /><br/><br/>

3. Make sure to select the **Use Expression** tab, and add `pdfpassword` expression.

<img src={Password} style={{width:"100%"}} /><br/><br/>

4. Now, we can bind Prefab **link** and **Password** properties to the widget.

<img src={BindProperties} style={{width:"35%"}} />

Here's the final **Markup** for the Prefab.
```html
<wm-prefab-container name="prefab_container1">
    <wm-custom name="custom1" linkparam="bind:Variables.link.dataSet.dataValue" passwordparam="bind:Variables.pdfpassword.dataSet.dataValue"></wm-custom>
</wm-prefab-container>
```

### Prefab Implementation

After setting up the configurations it's time for us to implement functionality for the Prefab with code. This functionality will be imported later in our project.

1. To handle password flows, we need to create a Dialog box for password by using the Design Dialog widget.

<img src={DialogBox} style={{width:"100%"}} /><br/><br/>

2. Add a [custom file](/learn/react-native/custom-js-modules/#adding-custom-js-libraries), for the native implementation of PdfPreview, e.g, `PdfPreview.native.js`

:::note
We don't support PdfPreview Prefab on the web
:::

```javascript
// resources/files/PdfPreview.native.js
function PdfPreview(props) {
    const React = require('react');
    const Pdf = require('react-native-pdf');

    return React.createElement(Pdf.default, {
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
            console.log(error);
        },
        onLoadComplete: (numberOfPages, filepath) => {
            console.log(`number of pages: ${numberOfPages}`);
        },
    });
}

module.exports = {
    PdfPreview,
}
```

```javascript
// resources/files/PdfPreview.web.js
function PdfPreview(props) {
    const React = require("react");
    const RN = require('react-native');
    const {View, Text} = RN;

    return (
        <View>
            <Text>Pdf Preview is not supported on web</Text>
        </View>
    );
}

module.exports = {
    PdfPreview,
}
```

<img src={PdfPreviewNative} style={{width:"100%"}} />
<img src={PdfPreviewWeb} style={{width:"100%"}} /><br/><br/>

3. Import the PdfPreview module in Prefab's Main **Script** and pass appropriate props to show pdf on the native mobile platform.

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
    try {
        const React = require('react');
        const {
            PdfPreview
        } = require('../../../assets/resources/files/PdfPreview');

        if (!props.link) {
            return null;
        }

        return React.createElement(PdfPreview, {
            link: props.link,
            password: props.password ? props.password : '',
        })
    } catch (error) {
        console.log('Failed to render pdf', error);
    }
}
```

<img src={PdfPreviewPrefab} style={{width:"100%"}} />

## Implementing Prefab in Project

To implement Prefab in the project, expand the Prefab tab in the sidebar and select your custom Prefab. Drag and drop on the Design screen.

<img src={ImplementPrefab} style={{width:"100%"}} /><br/><br/>

Here's the **Markup** for the project.

```html
<wm-page name="mainpage">
    <wm-left-panel content="leftnav" name="left_panel1"></wm-left-panel>
    <wm-mobile-navbar name="mobile_navbar1" title="Pdf Preview" backbutton="false">
        <wm-anchor caption="" name="AddLink" iconclass="wi wi-gear"></wm-anchor>
    </wm-mobile-navbar>
    <wm-content name="content1">
        <wm-page-content columnwidth="12" name="page_content1">
            <wm-composite name="composite1" captionposition="floating">
                <wm-label class="col-xs-4 control-label" name="label1" caption="Enter PDF link"></wm-label>
                <wm-container class="col-xs-8" name="container1" width="100%">
                    <wm-text name="pdfUrl" datavalue="bind:Variables.link.dataSet.dataValue"></wm-text>
                </wm-container>
            </wm-composite>
            <wm-button class="btn-primary" caption="Download Pdf" type="button" name="button1" on-tap="button1Tap($event, widget)" margin="10px unset" fontsize="12"></wm-button>
            <wm-prefab prefabname="PdfViewer" name="PdfViewer2"></wm-prefab>
        </wm-page-content>
    </wm-content>
    <wm-mobile-tabbar name="mobile_tabbar1"></wm-mobile-tabbar>
</wm-page>
```

## Downloading PDFs in WaveMaker App

Downloading PDFs is a common requirement in mobile applications, and React Native makes it relatively straightforward to implement this functionality. 
Here, we'll walk you through how to download a PDF file in a WaveMaker app using `react-native-blob-util`.

<div style={{display:"flex", gap: 20}}>
<img src={PdfPreview} style={{width:"35%"}} />
<img src={PdfDownloadNotification} style={{width:"35%"}} />
</div><br/>

The following is the code snippet for the above mockup
:::note
We don't support downloading PDFs on the web
:::

```javascript
Page.onReady = function() {};

Page.button1Tap = function($event, widget) {
    try {
        const RNBlobUtil = require('react-native-blob-util').default;

        const dirs = RNBlobUtil.fs.dirs;
        const pdfUrl = Page.Widgets.pdfUrl.datavalue;
        const fileName = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1, pdfUrl.length);

        RNBlobUtil
            .config({
                fileCache: true,
                path: dirs.DownloadDir + '/' + fileName,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                }
            })
            .fetch('GET', pdfUrl, {})
            .then((res) => {
                console.log('The file saved to ', res.path())
            })
    } catch (error) {
        console.log('Error downloading pdf: ', error);
    }
};
```


