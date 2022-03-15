---
title: "XSS Prevention in WaveMaker Apps"
id: ""
sidebar_label: "XSS Prevention"
---
---

[Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) is a type of security attack, which injects malicious scripts into web applications to execute, generally in the form of a browser side script to an end-user.

Typically, WaveMaker handles all XSS attacks using [Angular Sanitization](https://angular.io/api/platform-browser/DomSanitizer). Therefore, the apps are not vulnerable to XSS attacks by default. Sanitization escapes any untrusted values, turning them to a safe value to insert into the DOM, generated app. However, in some cases, developers may want to include executable code, and you need to alert default sanitization with an additional security flag.

You can configure to render data in Richtext, HTML or plain text as per your requirements using the following options.

- Rendering Richtext/HTML in Data Table
- Using Formatters, such as trustAs and Sanitize in widgets

## How XSS works in Data Table

:::note
From [WaveMaker 10.13.0](/learn/wavemaker-release-notes/v10-13-0), data renders plain text to prevent XSS attacks in the Datatable widget. Before this change, the content was rendering as Richtext/HTML.
:::

Considering a scenario of Datatable with employee details and their status, the **status** column uses Richtext format. Richtext is technically HTML content, which poses a potential threat of XSS attack. Therefore, the **status** column data is rendered as plain text containing HTML tags instead (see the image below).

[![](/learn/assets/xss_datatable1.png)](/learn/assets/xss_datatable1.png)

### Rendering Richtext

We do not rule out Richtext for this reason. Hence, we suggest rendering **status** of Richtext format without containing inline HTML tags while ensuring safety. WaveMaker applies sanitization to the Label widget, making it safe to render Richtext or HTML.

### How-to Steps

1. Go to **Advanced Settings** of the Datatable -> **Columns** tab.
2. Select the **Status** column.
3. Go to **View Mode** and select **Label** from the **Widget** dropdown. (see the image below)

[![](/learn/assets/xss_datatable3.png)](/learn/assets/xss_datatable3.png)

Therefore, the data is rendered as Richtext without displaying inline styles in the column as default sanitization is applied to the Label widget (see the image below). 

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)

## Using Formatters

The defaulf of behavior of the platform is that all UI widgets sanitize the content rendered inside them, preventing any possibility of XSS vulnerability in the app. However, if developer wants to bypass sanitization in WaveMaker widgets, the new Formatters `trustAs` or `sanitize` can be used at the time of binding data to the widgets.

### Use Expression

Configure the **trustAs** and **sanitize** flag from the **Use Expression** tab of the Variable binding dialog. 

[![](/learn/assets/xss_datatable7.png)](/learn/assets/xss_datatable7.png)

### Value Expression

Configure the **trustAs** and **sanitize** flag from the **Value Expression** tab of **Advanced Settings** of Data Table. 

## trustAs

**trustAs** flag disables built-in sanitization for the values that pass through the widget, given the [security context](https://angular.io/guide/security#sanitization-and-security-contexts). 

**trustAs** formatter with `html` context can be applied to the following widget properties.

| Widget Properties | Widgets | 
|---|---|
|**Caption** of | Label <br> Anchor <br> Button Message <br> Checkbox <br> File upload <br> Spinner |
| **Title** of | Form-field |
|**Title** and **Sub Heading** of | Panel <br> Charts <br> Datatable <br> Form <br> Accordion-pane <br> List |
| **Content** of | HTML |

:::caution
This action can be malicious and introduce security risks into your app. Use this flag with caution and understand the risks of XSS attacks. [Read more.](https://angular.io/guide/security#sanitization-and-security-contexts)
:::

### How-to Steps

Considering the same example used to [render Richtext](#rendering-richtext) in Data Table. 

1. Select the **Status** column.
1. Go to the **Basic** tab and navigate to the **Value Expression** field. 
2. Add the **trustAs** formatter with `html` context to bypass sanitization.

Following is an example content used in the **Value Expression** field for the status column.

```html
<wm-label caption="bind:row.getProperty('status') | 
trustAs: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable4.png)](/learn/assets/xss_datatable4.png)

After adding the **trustAs** formatter, the inline styles render Richtext, while also disabling the default sanitization that platform performs (see the image below).

[![](/learn/assets/xss_datatable5.png)](/learn/assets/xss_datatable5.png)

:::warning
When using this flag, ensure to throughly follow [security context](https://angular.io/guide/security#sanitization-and-security-contexts). Else, the content may not render appropriately.
:::

## Sanitize

WaveMaker by default sanitizes the content and handles XSS attacks. Considering a scenario when an app developer wants to apply sanitization in cases when html context is used, use **sanitize** formatter.

The Sanitize flag examines the value passed with the given [security context](https://angular.io/guide/security#sanitization-and-security-contexts), helping to prevent XSS attacks by sanitizing untrusted content.

### How-to Steps

Considering the same example used to [render Richtext](#rendering-richtext) in Data Table. 

1. Select the **Status** column.
1. Go to the **Basic** tab and navigate to the **Value Expression** field. 
2. Add the **trustAs** formatter with `sanitize` context to sanitize content.

Following is an example content used in the **Value Expression** field for the status column.

```html
<wm-label caption="bind:row.getProperty('status') | 
sanitize: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable6.png)](/learn/assets/xss_datatable6.png)

After adding the **sanitize** formatter, inline styles are not applied; therefore, rendering plain text.

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)


