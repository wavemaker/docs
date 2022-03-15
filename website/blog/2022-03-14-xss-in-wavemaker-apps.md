---
title: "XSS in WaveMaker Apps"
author: V N P Sairama Krishna Bonala
---
---

[Cross Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) is a type of security attack, which injects malicious scripts into web applications to execute, generally in the form of a browser side script to an end-user.

Typically, WaveMaker handles all XSS attacks using [Angular Sanitization](https://angular.io/api/platform-browser/DomSanitizer). Therefore, the apps are not vulnerable to XSS attacks by default. Sanitization escapes any untrusted values, turning them into a safe value to insert into the DOM. However, in some cases, you require to include executable code, and you need to prevent default sanitization with an additional security flag.

<!-- truncate -->

## Explaining a use case

:::note
From WaveMaker 10.13, data renders plain text to prevent XSS attacks in the Datatable widget.
:::

Considering a scenario of Datatable with employee details and their status, the **status** column uses Richtext format. Richtext is technically HTML content, which poses a potential threat of XSS attack. Therefore, the **status** column data is rendered as plain text containing HTML tags instead (see the image below).

[![](/learn/assets/xss_datatable1.png)](/learn/assets/xss_datatable1.png)

### Rendering Richtext

We do not rule out Richtext for this reason. Hence, we suggest a workaround to render **status** of Richtext format without containing inline HTML tags while ensuring safety. WaveMaker included sanitization of the Label widget, making it safe to render Richtext or HTML.

#### How-to Steps

1. Go to **Advanced Settings** of the Datatable -> **Columns** tab.
2. Check the **Status** column.
3. Go to **View mode** and select **Label** from the **Widget** dropdown. (see the image below)

[![](/learn/assets/xss_datatable3.png)](/learn/assets/xss_datatable3.png)

Therefore, the data is rendered as Richtext without displaying inline styles in the column (see the image below).

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)

> To disable sanitization, use **trustAs** formatter. 

## trustAs

trustAs disables built-in sanitization for the value passed with the given security context. 

:::caution
This action can be malicious and introduce security risks into your app. Use this flag with caution and understand the risks of XSS attacks.
:::

In the **Value Expression** field, add the ***trustAs*** formatter with ***html*** [security context](https://angular.io/guide/security#sanitization-and-security-contexts).

Add below content in **Value Expression** field.
```
<wm-label caption="bind:row.getProperty('status') | trustAs: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable4.png)](/learn/assets/xss_datatable4.png)

After adding **trustAs** formatter, inline styles are displayed, as default sanitization is disabled.

[![](/learn/assets/xss_datatable5.png)](/learn/assets/xss_datatable5.png)

:::warning
Make sure to use proper security context. Otherwise, the content will not appear properly.
:::

**trustAs** formatter with **HTML** context can be applied to 
- Caption of Label, Anchor, Button Message, Checkbox, File upload, Spinner 
- Title of Form-field
- Title and Sub Heading of Panel, Charts, Datatable, Form, Accordion-pane, List
- Content of HTML

Configure ***trustAs*** from binding dialog **Use Expression** tab

[![](/learn/assets/xss_datatable7.png)](/learn/assets/xss_datatable7.png)


> WaveMaker by default sanitizes the content and handles XSS attacks. 

Consider a scenario where an app developer wants to apply sanitization. Use **sanitize** formatter.

## Sanitize
The Sanitize flag examines the value passed with the given security context, helping prevent XSS attacks by sanitizing untrusted content.

In the **Value Expression** field, add the ***sanitize*** formatter with ***html*** security context.

Add below content in the **Value Expression** field.
```
<wm-label caption="bind:row.getProperty('status') | sanitize: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable6.png)](/learn/assets/xss_datatable6.png)

After adding the **sanitize** formatter, inline styles are not displayed.

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)

