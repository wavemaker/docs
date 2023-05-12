---
title: "XSS Prevention"
id: "xss-prevention"
sidebar_label: "XSS Prevention"
---
---

[Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) is a type of security attack, which injects malicious scripts into web applications to execute, generally in the form of a browser side script to an end-user.

Typically, WaveMaker handles all XSS attacks using [Angular Sanitization](https://angular.io/api/platform-browser/DomSanitizer). Therefore, the apps are not vulnerable to XSS attacks by default. Sanitization handles untrusted values turning them into a safe value to insert into the generated code. However, in some cases, developers may want to include executable code, such as HTML (Hypertext Markup Language) content, giving developers the flexibility to bypass the code.

In this document, you will learn how to configure UI (User Interface) to render data in HTML, or plain text while understanding the risk of XSS. 

- Rendering HTML in Datatable
- Using Formatters, such as trustAs in widgets

## Sanitization in Datatable widget

:::note
From [WaveMaker 10.13.0](/learn/wavemaker-release-notes/v10-13-0), Datatable columns render plain text to prevent XSS attacks. Before this change, the content was rendering HTML format.
:::

In the following example, Datatable contains employee details and their current status. The **status** column uses HTML with inline styles, posing a potential XSS attack threat. 

WaveMaker sanitizes the Datatable widget, and when HTML is found in any column, it renders plain text as a result (see the image below).

[![](/learn/assets/xss_datatable1.png)](/learn/assets/xss_datatable1.png)

### Rendering HTML in Datatable

To render HTML content in Datatable, we recommend configuring the **status** column to view as Label, making it safe to render HTML in Datatable.

### How-to Steps

1. Go to **Advanced Settings** of the Datatable -> **Columns** tab.
2. Select the **Status** column.
3. Go to **View Mode** and select **Label** from the **Widget** dropdown. (see the image below)

[![](/learn/assets/xss_datatable3.png)](/learn/assets/xss_datatable3.png)

The **status** column renders HTML without displaying inline styles to the column data; this is because WaveMaker applies sanitization to the Label widget. 

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)

## Using Formatters

The default behavior of WaveMaker UI widgets is to sanitize the content rendered inside them, preventing any possibility of an XSS vulnerability in the app. However, if the developer wants to bypass sanitization in the widgets, the Formatters `trustAs` can be used at the time of binding data to the widgets.

### trustAs

**trustAs** flag disables built-in sanitization for the values that pass through the widget, given the [security context](https://angular.io/guide/security#sanitization-and-security-contexts). 

You can access **trustAs** Formatters from:

1. Use Expression dialog
2. Value Expression dialog

#### Use Expression

Configure the **trustAs** flag from the **Use Expression** tab of the Variable binding dialog. 

[![](/learn/assets/xss_datatable7.png)](/learn/assets/xss_datatable7.png)

#### Value Expression

Configure the **trustAs** flag from the **Value Expression** dailog of the Datatable's **Advanced Settings**. 

### Supported Widgets

**trustAs** formatter with `html` context can be applied to the following widget properties.

| Widget Properties | Widgets | 
|---|---|
|**Caption** of | Label   Anchor   Button Message   Checkbox   File upload   Spinner |
| **Title** of | Form-field |
|**Title** and **Sub Heading** of | Panel   Charts   Datatable   Form   Accordion-pane   List |
| **Content** of | HTML |

:::caution
This action can be malicious and introduce security risks to your app. Use this flag with caution and understand the risks of XSS attacks. [Read more.](https://angular.io/guide/security#sanitization-and-security-contexts)
:::

### How-to Steps

In the following example, we are looking at the same example used for Datatable to render HTML, which is [employee's current **status**](#sanitization-in-data-table-widget). 

1. Go to **Advanced Settings** of the Datatable -> **Columns** tab.
2. Select the **Status** column.
3. Go to the **Basic** tab and navigate to the **Value Expression** field. 
4. Add the **trustAs** formatter with `html` context to bypass sanitization.

Following example shows the **Value Expression** field configuring `trustAs` formatter for the **status** column.

```html
<wm-label caption="bind:row.getProperty('status') | 
trustAs: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable4.png)](/learn/assets/xss_datatable4.png)

When you add the **trustAs** formatter, it renders HTML with the inline styles while disabling the sanitization for the **status** column (see the image below).

[![](/learn/assets/xss_datatable5.png)](/learn/assets/xss_datatable5.png)

:::warning
When using this flag, ensure you thoroughly follow [security context](https://angular.io/guide/security#sanitization-and-security-contexts). Else, the content may not render appropriately. Plus, it can put your app at risk of XSS vulnerability.
:::