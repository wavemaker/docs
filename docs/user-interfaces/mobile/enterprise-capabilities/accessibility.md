---
last_update: { author: "Priyanka Bhadri" }
---

# Accessibility


Accessibility plays a vital role in building high‑quality applications that can be used by everyone, including people with disabilities. WaveMaker adheres to international standards for web accessibility, such as the Web Content Accessibility Guidelines (WCAG) and WAI‑ARIA, to ensure UI components and applications are inclusive and assistive‑technology friendly.

To support accessibility, WaveMaker automatically assigns appropriate ARIA roles and attributes to its widgets, making it possible for screen readers and other assistive technologies to interpret UI elements and their purpose correctly. Developers can configure or refine text captions and accessibility hints to provide meaningful context for users relying on assistive tools.

WaveMaker’s accessibility enhancements aim to cover key WCAG “A” and “AA” success criteria, including meaningful semantics, relationships between UI elements, input identification, error prevention, and non‑text contrast.

---

## How Accessibility Works in WaveMaker

WaveMaker ensures that applications are accessible by embedding semantic information directly into UI components. Each widget automatically includes ARIA roles, labels, and attributes that convey meaning to assistive technologies such as screen readers. Developers can further enhance accessibility by configuring hints, labels, and focus behaviors, allowing users with different abilities to interact with applications effectively. This approach provides a consistent, standards-compliant experience across devices while reducing the manual effort required to implement accessibility.


### ARIA Roles and Attributes

WaveMaker uses ARIA roles and attributes to improve accessibility across its widget library. These attributes help screen readers understand the purpose, structure, and relationships of UI elements.

Developers can provide meaningful text for widgets using the **Hint** property, which is then exposed as an `aria‑label` in the HTML output, aiding assistive technologies.

---

## Steps to Ensure Accessibility in WaveMaker

 Ensure accessibility in WaveMaker by setting meaningful Hint values for widgets, which automatically populate the aria-label for screen readers. Review the Accessibility section for each widget to provide descriptive labels, tooltips, and alternative text.

<!-- ### Labels
1. For every widget you add via drag-and-drop, check the **Accessibility** section in the Properties panel.  
2. Copy or bind the captions of label widgets to the **Hint** property in the Accessibility section.  
3. By default, all labels and text fields have a **Hint** value of `"Label text"`, which can be edited as needed.  
4. The **Hint** property serves two purposes:
   - Appears as **tooltip text** on hover.
   - Automatically populates the **`aria-label`** attribute, which is used by assistive technologies (screen readers) to interpret the widget content. -->

  ### Example: Adding Accessibility to a Label Widget



1. **Select the Label Widget**  
   - Drag and drop a **Label** widget onto your page or form.

2. **Open the Accessibility Section**  
   - In the Properties panel, expand the **Accessibility** section.

3. **Set the Hint Property**  
   - Copy or bind the text of the label to the **Hint** property.  
   - Example: For a label displaying `"First Name"`, set the Hint as `"Enter your first name"`.  
   - By default, the Hint is `"Label text"`. Always update it with a meaningful description.

4. **Understand the Effect**  
   - The **Hint** serves two purposes:
     - Appears as **tooltip text** on hover for general users.  
     - Automatically sets the **`aria-label`** attribute for screen readers, making the label accessible to assistive technologies.

5. **Preview Accessibility**  
   - Use the browser preview to check that the `aria-label` is correctly applied.  
   - Screen readers will announce the label text based on the Hint property.

![Accessibility Steps ](../assets/accessibility.png)

   

---


## Predefined ARIA Attributes in WaveMaker

WaveMaker UI components include predefined ARIA attributes to support accessibility. These attributes provide screen readers and assistive technologies with semantic information about UI elements.

| Component | ARIA Labels | Role / Attributes |
|-----------|-------------|-----------------|
| App logo | `aria-label="Image"` | — |
| Header | `aria-label="Page header"` | `banner` |
| Page | `aria-label="Main page content"` | — |
| Mobile Navbar | `aria-label="Title"` | `link` |
| Mobile Tabbar | `aria-label="Home"` | `link` |
| Heading | `aria-label="Label text"` | `heading`, `aria-level="1"` |
| Login Input | `aria-label="Text field"` | — |
| Login Button | `aria-label="Login"` | — |
| Validation Errors | `aria-label="error message"`, `aria-hidden="true"`, `aria-live="polite"` | `alert` |
| Anchors | `aria-label="Link"` | — |
| Button | `aria-label="Button"` | — |
| Checkbox | `aria-label="Checkbox"`, `aria-checked="false"` | `checkbox` |
| Toggle Switch | `aria-label="Toggle"`, `aria-checked="false"` | — |
| Rating | `aria-label="1 out of 5 ratings"`, `aria-checked="true"`, `aria-multiselectable="true"` | `radio` |
| Currency | `aria-label="country currency"` | — |
| Datetime | `aria-label="Date and time field"` | — |
| Time Input | `aria-label="Time field"`, `aria-atomic="true"` | `timer` |
| Pagination | `aria-label="Page 1"` | — |
| Calendar View | `aria-label="Month view"` | — |
| Search Input | `aria-label="search field"` | — |
| Slider | `aria-label="slider"`, `aria-orientation="Vertical/horizontal"` | `slider` |
| Selectbox | `aria-label="Select options"`, `aria-expanded="false"`, `aria-hashpop="true"` | `listbox` |
| Selectbox Options | — | `option` |
| Accordion Tabs | `aria-expanded="true/false"` | `tab` |
| List | — | `list`, `listitem` |
| Datatable | — | `table` |
| Panel | `aria-label="panel"`, `aria-label="panel-header"`, `aria-label="panel-content"`, `aria-label="panel-footer"` | — |
| Charts | `aria-label="pie chart"` | — |
| Left Panel | `aria-label="Left navigation"` | `navigation` |
| Right Panel | `aria-label="Right navigation"` | `complementary` |
| Top Nav | `aria-label="Second level navigation"` | `navigation` |
| Footer | `aria-label="Page footer"` | `contentinfo` |
| Partials | — | `complementary` |
| Spinner | `aria-label="Loading..."`, `aria-live="assertive"`, `aria-busy="true"` | `alert` |
| Picture | `aria-label="Placeholder Image"` | — |
| Icon | `aria-label="user icon"` | — |
| Popover | `aria-label="user icon"` | `menubar` |
| Dialog | — | `aria-modal="true"`, `dialog` |
| Audio | — | — |

---


## Accessibility Best Practices

When designing accessible applications with WaveMaker:

- Ensure all widgets have meaningful labels and hints for assistive technology.
- Use proper heading structures to convey content hierarchy.
- Provide alternative text or descriptions for images and non‑text elements.
- Enable keyboard navigation using appropriate focus and tab order settings.
- Effective use of color contrast is also an important aspect of making your app accessible.

  - WCAG 2.0 level "AA" requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
  - WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders).
  - WCAG Level "AAA" requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text. 
For more information about the color contrast ratio before designing or developing any application, see [Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## Summary

WaveMaker ensures that applications are inclusive and accessible by adhering to WCAG and WAI‑ARIA standards. Built-in ARIA roles, attributes, and widget hints allow screen readers and assistive technologies to interpret the UI correctly. By following accessibility best practices—meaningful labels, keyboard navigation, proper headings, alternative text, and sufficient contrast—developers can create applications that are usable by all users across devices and platforms.