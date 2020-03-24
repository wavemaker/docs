---
title: "Copy to Clipboard feature in WaveMaker"
id: ""
---
In this section we will see how to implement the copy text to the clipboard feature in WaveMaker by following the below steps. We will be adding copy text to the clipboard functionality to the text,number and textarea widgets in below tutorial.

- **Copy Text to Clipboard**

The Clipboard allows you to copy the text on single a button click or through any event handlers as per your requirement. The below steps will guide you to implements copy text to the clipboard feature on a button click. 

[![form_filter_design](/learn/assets/Copy_ClipBoard.png)](/learn/assets/Copy_ClipBoard.png)

- **Step1**: 

Drag and Drop text/number/textarea widgets as per your requirement to the page.

- **Step2** : 

Add the following Script to copy the text to the clipboard.


1. For text and number widgets use the below script on a button On Click event.

```js
Page.Widgets.<WidgetName>.$element.find('input').select();
document.execCommand("copy");
```

2. For textarea widget use the below script on a button On Click event.

```js
Page.Widgets.<WidgetName>.$element.find('textarea').select();
document.execCommand("copy");
```
In this document, we have seen how to implement the copy teaxt to clipboard feature in WaveMaker.

