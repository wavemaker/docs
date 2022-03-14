---
title: "XSS in WaveMaker Apps"
author: V N P Sairama Krishna Bonala
--- 
---

## Cross Site Scripting (XSS)
[XSS](https://owasp.org/www-community/attacks/xss/) is a type of security attack in which malicious scripts are injected into web applications to execute, generally in the form of a browser side script to an end-user.

WaveMaker app handles all XSS attacks by using [angular sanitization](https://angular.io/api/platform-browser/DomSanitizer). By default app is not vulnerable to XSS attacks.

<!-- truncate -->

:::note
Sanitization is escaping untrusted values, turning them into a safe value to insert into the DOM. Sometimes apps need to include executable code, so app developers need to prevent default sanitization.
:::

Consider a scenario where Datatable has employee details and status. 

[![](/learn/assets/xss_datatable1.png)](/learn/assets/xss_datatable1.png)

> To prevent XSS attacks in the Datatable widget, data is rendered as plain text from 10.13.0 version. 

In the above example, **status** column data is rendered as text which has HTML tags. To display it as rich text (HTML content), change the **View mode** widget of the **status** column to Label in Datatable **Advanced Settings**.

After opening *Advanced Settings*, choose the *status* column. In the **Basic** tab, **View Mode** section, find the **Widget** and choose the ***label*** widget from the drop down then save.

[![](/learn/assets/xss_datatable3.png)](/learn/assets/xss_datatable3.png)

Now data is rendered as HTML but inline styles are not applied as internal sanitization is applied on Label widget. 

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)

> To disable sanitization, use **trustAs** formatter. 

## trustAs
Disables built-in sanitization for the value passed with the given security context. 

:::caution
This action can be malicious and introduce security risks into your app. Use this with caution and understand the risks of XSS attacks.
:::

In the **Value Expression** field, add the ***trustAs*** formatter with ***html*** [security context](https://angular.io/guide/security#sanitization-and-security-contexts).

Add below content in **Value Expression** field
```
<wm-label caption="bind:row.getProperty('status') | trustAs: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable4.png)](/learn/assets/xss_datatable4.png)

After adding **trustAs** formatter, inline styles are displayed, as default sanitization is disabled.

[![](/learn/assets/xss_datatable5.png)](/learn/assets/xss_datatable5.png)

:::warning
Make sure to use proper security context. Otherwise, content will not appear properly.
:::


**trustAs** formatter with **html** context can be applied to 
- Caption of Label, Anchor, Button Message, Checkbox, File upload, Spinner  
- Title of Form-field
- Title and Sub Heading of Panel, Charts, Datatable, Form, Accordion-pane, List
- Content of HTML

Configure ***trustAs*** from binding dialog **Use Expression** tab

[![](/learn/assets/xss_datatable7.png)](/learn/assets/xss_datatable7.png)



> WaveMaker by default sanitizes the content and handles xss attacks. 

Consider a scenario where app developer wants to apply sanitization, use **sanitize** formatter

## sanitize
Sanitizes the value passed with the given security context. This helps in preventing XSS attacks by sanitizing untrusted content.

In the **Value Expression** field, add the ***sanitize*** formatter with ***html*** security context.

Add below content in **Value Expression** field
```
<wm-label caption="bind:row.getProperty('status') | sanitize: 'html'"></wm-label>
```

[![](/learn/assets/xss_datatable6.png)](/learn/assets/xss_datatable6.png)

After adding **sanitize** formatter, inline styles are not displayed.

[![](/learn/assets/xss_datatable2.png)](/learn/assets/xss_datatable2.png)
