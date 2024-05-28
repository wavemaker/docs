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

**Default Behavior**: When you drag and drop a label widget, the markup will now include class="p" and type="p" appended to the "wm-label" element by default. This translates to a `<p>` tag in the preview, ensuring proper accessibility.

**Template Layouts**: Changing the template layout (e.g., H1, H2) will update both the class and type attributes accordingly. The preview will then reflect the corresponding heading tag (e.g., `<h1>`). Layouts like "Primary Text" and "Secondary Text" will continue to use the `<p>` tag.

**Implicit Conversion**: Labels within widgets like cards, accordions, and panels will be automatically converted to the appropriate semantic tag (`<p>` or `<h1>` to `<h6>`) based on their existing class values.

### Addressing Potential Issues

:::note
As default class "p" is getting added when we drag and drop a label widget on to canvas now it will be a block element. But for previous projects we don't have class "p" as default so it will be a inline-block element.
:::

## Differences Before and After change

This section showcases the visual differences between the previous and updated behavior.

### Label in Markup

- In the studio when we drag and drop a **Label** onto canvas and go to markup tab to see the differences as given below.

**Before**

```html
<wm-label padding=“unset” name=“label2”></wm-label>
```

**After**

```html
<wm-label padding=“unset” class="p" type="p" name=“label2”></wm-label>
```

- Click the label on canvas and then select the template layout option to "H1" then the class and type both gets updated to "h1".

**Before**

```html
<wm-label padding=“unset” name=“label2” class="h1"></wm-label>
```

**After**

```html
<wm-label padding=“unset” class="h1" type="h1" name=“label2”></wm-label>
```

### Label in Preview

- Click on preview and see the difference that `<label>` tag is getting replaced by `<p>` tag by default.

**Before**

```html
<label wmlabel widget-id="widget-id15" class="app-label" name="label2">Label</label>
```

**After**

```html
<p wmlabel type="p" class="app-label p" widget-id="widget-id15" name="label2">Label</p>
```

:::note
Since the `<p>` tag is now added by default in the preview, it displays as a block-level element. However, existing labels use the `<label>` tag, which displays inline-block. To prevent UI breakage, the following styles have been added:
:::

```css
p.app-label{
   display:inline-block 
}
p.p.app-label{
    display:block;
}
```

### Cards as Example

- Drag and drop the **Card** widget and click Preview.

**Before**

![Label Preview before](/learn/assets/cards_before.png)

**After**

![Label Preview after](/learn/assets/cards_after.png) 

Overall, these changes enhance the accessibility of WaveMaker applications by ensuring proper use of semantic tags for labels. This benefits users with disabilities by providing a more predictable and navigable interface.


