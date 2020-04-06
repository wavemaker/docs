---
title: "Copy to Clipboard"
id: ""
---
---
Learn how to implement the copy text to the clipboard in WaveMaker by following the steps below. You can use copying text to clipboard functionality for text, number, and textarea widgets.

:::note
Copying to clipboard applies to input widgets only. For example, text, textarea, and it does not apply to widgets like label.
:::

## Copy Text to Clipboard

The clipboard allows you to copy the text on single a button click or through an event handler. The following steps describe how to implement copy text to the clipboard feature on a button click.

[![form_filter_design](/learn/assets/Copy_ClipBoard.png)](/learn/assets/Copy_ClipBoard.png)

## Step-1: Drag and Drop Widget

Drag-and-drop a text or number or a textarea widget on a page and drag-and-drop a button and name it as `Copy Text`.

## Step-2: Adding Script to the On Click Event

Add the following Script to copy text to the clipboard when you click the button.

- Click the `Copy Text` button, go to **Events** -> **On Click** and select `JavaScript` from the dropdown.

### Text and Number widgets

For text and number widgets, use the following script for button on click event.

```js
Page.Widgets.<WidgetName>.$element.find('input').select();
document.execCommand("copy");
```

### Textarea widget

For textarea widget, use the following script for button on click event.

```js
Page.Widgets.<WidgetName>.$element.find('textarea').select();
document.execCommand("copy");
```


