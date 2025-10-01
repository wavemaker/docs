---
title: "Creating Responsive Layout"
id: "responsive-layout"
sidebar_label: "Responsive Layout"
---
---

Responsive design ensures your app looks and works great on any phone or tablet by adapting layouts and styles to different screen sizes and orientations.

Responsive design can be implemented using media queries, allowing you to define conditional styles for different device sizes directly in your app's style tab. This makes it easy to build mobile apps that are visually consistent and functional across devices. Media queries in WaveMaker React Native works very similarly to media queries present web CSS, making it easier to understand and implement.

### Syntax and Usage

Media queries start with `@media`, followed by conditions inside parentheses. You can use conditions like `min-width` or `max-width` to target specific screen sizes. Any styles defined inside a media query block will only be applied when the condition is met.

- **Basic Media Query Syntax**
  ```css
  @media (condition) {
    /* styles here */
  }
  ```

- **Using min-width**
  ```css
  @media (min-width: 600px) {
    .app-label-text {
      font-size: 20px;
    }
  }
  ```
  This increases the font size of `.app-label-text` when the screen is at least 600px wide.

- **Using max-width**
  ```css
  @media (max-width: 400px) {
    .app-button {
      background-color: orange;
    }
    .app-label-text {
      font-size: 14px;
    }
  }
  ```
  This changes the button color and label font size for screens up to 400px wide.

- **Combining Conditions with 'and'**
  ```css
  @media (min-width: 200px) and (max-width: 400px) {
    .app-button {
      background-color: red;
    }
    .app-label-text {
      font-size: 12px;
    }
  }
  ```
  This applies styles only when the screen width is between 200px and 400px.

### Merge Behavior
**1. Media query styles override base styles.**
For example:
```css
.app-button {
  background-color: blue;
}

@media (min-width: 600px) {
  .app-button {
    background-color: green;
  }
}
```
On screens 600px and wider, the button will be green instead of blue.

**2. Later rules override earlier ones if there's a conflict.**
For example:
```css
@media (min-width: 400px) {
  .app-button {
    background-color: orange;
  }
}

@media (min-width: 400px) {
  .app-button {
    background-color: purple;
  }
}
```
Here, `.app-button` will be purple for screens 400px and wider, because the second rule overrides the first.

**3. If multiple media conditions match, all matching styles are merged.**
For example:
```css
@media (min-width: 400px) {
  .app-label-text {
    font-size: 32px;
    color: blue;
  }
}

@media (min-width: 600px) {
  .app-label-text {
    color: purple;
  }
}
```
On a screen wider than 400px, `.app-label-text` will be 32px and blue. On screens 600px and above, both media queries match, so the font size remains 32px (from the first rule), but the color becomes purple (from the second rule, which overrides the earlier color property).


### Suggested Break Points

| Device Type | Screen Size Range |
|-------------|------------------|
| Phones      | 0 - 479px        |
| Phones (landscape), Small Tablets | 480px - 767px |
| Tablets     | 768px - 1023px   |
| Tablets (landscape) | 1024px+   |

Adjust layouts, font sizes, and touch targets based on these ranges for optimal usability.

### Best Practices
- Start with a mobile-first approach, define base styles for small screens, then add media queries for larger devices.
- Test on multiple devices and orientations.
- Keep media queries organized and avoid overly complex conditions.

### How to Test Responsiveness
- Use device simulators/emulators in your development environment.
- Test on real devices when possible.
- In web preview, resize browser windows to check layout changes.
