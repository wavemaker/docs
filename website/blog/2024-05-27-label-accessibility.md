---
title: "Label widget Compliance for Acessibility"
author: Bhargavi Gunda
---
---

In accordance with web accessibility standards, the `<label>` tag is specifically intended for use within Forms. To ensure proper accessibility, WaveMaker is implementing changes to how label widgets are handled. Therefore, the `<label>` tag used out of the forms will replace with `<p>`, `<h1>` to `<h6>` tags based on the class or type attribute of that element.

<!-- truncate -->

### Current Behavior

Previously, when dragging and dropping a Label widget onto the canvas and previewing it, the element would utilize the `<label>` tag with a class defined in the element. Additionally, changing the template layout to headings (H1, H2, etc.) would only modify the class, leaving the tag itself as `<label>`. This approach conflicts with accessibility guidelines.

## Improved Accessibility

To address this issue, WaveMaker is replacing the `<label>` tag with more appropriate semantic tags like `<p>` (paragraph) or `<h1>` to `<h6>` (headings) based on the class or type attribute of the element.

## How it Works

Here's a breakdown of the changes:

Default Behavior: When you drag and drop a label widget, the markup will now include class="p" and type="p" appended to the "wm-label" element by default. This translates to a `<p>` tag in the preview, ensuring proper accessibility.
Template Layouts: Changing the template layout (e.g., H1, H2) will update both the class and type attributes accordingly. The preview will then reflect the corresponding heading tag (e.g., `<h1>`). Layouts like "Primary Text" and "Secondary Text" will continue to use the `<p>` tag.
Implicit Conversion: Labels within widgets like cards, accordions, and panels will be automatically converted to the appropriate semantic tag (`<p>` or `<h1> `to `<h6>`) based on their existing class values.




As of now in Wavemaker when we drag and drop a label widget on to canvas and preview it we can see that `<label>` tag with class defined in the element and as per the class css is applying. If when we change the template layout to H1, H2, etc.. only the class is changing and the tag is label itself. As per the accessibility standards it is not correct so to overcome this the label tag is replaced.

After the current change  when we drag and drop label by default class="p" type="p" appended to "wm-label" in markup and when we preview it the label tag is replaced with `<p>` tag and same with template layouts. For example if we change the template layout to "H1" then the type and class will change to "H1" and the preview with `<h1>` tag and for the other layouts like Primary Text, Secondary Text `<p>` tag will get applied.

All labels within widgets like cards, accordion, panel, etc.. will be implicitly converted to `<p>`, `<h1>` to `<h6>` tags based on their current class values.

:::note
As default class "p" is getting added when we drag and drop a label widget on to canvas now it will be a block element. But for previous projects we don't have class "p" as default so it will be a inline-block element.
:::

## Differences 

### Before and After change

#### Label in Markup

- In the studio when we drag and drop a **label** onto canvas and go to markup tab to see the differences as given below.

**Before**

![Label Markup before](/learn/assets/label_before_markup.png)

**After**

![Label Markup after](/learn/assets/label_after_markup.png)

- Click the label on canvas and then select the template layout option to "H1" then the class and type both gets updated to "h1".

**Before**

![Label Markup before](/learn/assets/label_option_before.png)

**After**

![Label Markup after](/learn/assets/label_option_after.png)


#### Label in Preview

- Click on preview and see the difference that `<label>` tag is getting replaced by `<p>` tag by default.

**Before**

![Label Preview before](/learn/assets/label_preview_before.png)

**After**

![Label Preview after](/learn/assets/label_preview_after.png) 

:::note
As `<p>` tag is getting added in preview by default it has display:block but in already used labels it has `<label>` tag with display:inline-block. So inorder to overcome the breaking of UI added the follwing styles

```
p.app-label{
   display:inline-block 
}
p.p.app-label{
    display:block;
}
```

:::

##### Cards 

- Drag and drop the **Card** widget and click on preview.

**Before**

![Label Preview before](/learn/assets/cards_before.png)

**After**

![Label Preview after](/learn/assets/cards_after.png) 


