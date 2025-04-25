---
title: "What's New in WaveMaker 11.11"
author: "Krishna Rao Chintu"
---
---

WaveMaker Studio 11.11 brings smarter tools, cleaner workflows, and a more intuitive experience. This release focuses on performance and a future-ready architecture.

You’ll see major improvements to the Studio Canvas, a fully revamped Changes View for cleaner migrations, and a shift to standalone components in Angular for more modern, maintainable apps. On top of that, this release includes optimization tools, UI flexibility, and critical bug fixes—making 11.11 one of our most packed and purposeful updates yet.

Let’s walk through what’s new in 11.11.

<!-- truncate -->

## Key Features & Enhancements

#### 1. Distinguishing User vs. Migration Changes in WaveMaker Studio

WaveMaker Studio now separates Migration Changes from User Changes in **View Changes**. This gives you crystal-clear visibility, making it easier to understand what the platform changed vs. what you’ve edited.

[Read more →](/learn/blog/2025/04/16/separation-of-userchanges-vs-migrationchanges)


#### 2. Studio Preview Opens in a New Tab

**A small change with a big impact:** Studio Preview now opens in a new browser tab instead of a pop-up. It’s easier to navigate, especially when working with multiple windows or tabs.

[More on this change →](/learn/blog/2025/04/16/preview-in-new-tab)

#### 3. Standalone Components in Angular Apps

We’ve transitioned from Angular’s module-based architecture to standalone components, reducing bundle size and improving performance. Your apps now load faster (up to 8.9% smaller bundle size), are more maintainable, and align with the latest Angular best practices.

[Why this matters →](/learn/blog/2025/04/16/migrating-to-standalone-components)

#### 4. Leaner Angular Apps with Cleaned-Up i18n Files

We’ve optimized Angular builds by cleaning out unused localization files. For example:
- Moment.js bundle reduced by up to 65.7%
- @angular/global localization reduced by 98%

Result? Smaller builds, faster loads.

[More details →](/learn/blog/2025/04/16/reduced-bundle-size-cleanup-i18n-files)

#### 6. A More Accurate Canvas: True WYSIWYG

What you see is now much closer to what your users see. We’ve enhanced the Studio Canvas rendering to be more faithful to the final application UI, reducing surprises in production.

[Why this helps →](/learn/blog/2025/04/16/canvas-visual-enhancement)

#### 7. Dynamic Browser Titles for Easier Navigation

Studio now updates your browser tab titles based on the current editor. Handy when working across multiple tabs.

[More context →](/learn/blog/2025/04/21/dynamic-browser-title)

#### 8. Dynamic Wizards: Smarter, More Flexible Forms

WaveMaker’s Wizard widget is now dynamic. You can:

- Create steps from datasets
- Show/hide steps conditionally
- Use programmatic navigation for full control

[Explore dynamic wizards →](/learn/blog/2025/04/21/dynamic-wizard)

#### 9. Async Validation in Wizards

Support for **`async/await`** in Next callback for Wizard navigation makes API-based validations easier and more reliable. A must-have for real-world apps.

[Learn more →](/learn/blog/2025/04/21/async-validation-in-wizard)

#### 10. Smaller WAR Files for Angular Projects

We’ve removed unnecessary files from WAR builds (like internal configs, dev assets, etc.), making deployment packages leaner and cleaner.

#### 12. Export WaveMaker Project as an Angular Source Zip

Available from v11.11, you can now export your Angular project as a ZIP directly from the export menu. It's perfect for preparing your project for deployment, and also useful for sharing or backup.

### Notable Bug Fixes in  Web

- Wizard Height Issue in Nested Wizards
- Data Field and Display Field of CheckboxSet are Auto Setting to Empty
- Allowed File Upload Extensions Property Updates is Reverted upon Publishing Prefab
- Add Button Action is Not Working for Tabs, Accordion, Wizard, Button group and Carousel

## ReactNative Mobile-Specific Enhancements

#### 1. Node.js v22.11.0 Everywhere

Clients can now use a single Node.js v22.11.0 for both our platform and CLI tools. 
No more switching versions between tools. 

#### 2. Migrating Picture Widget to Use Expo Image

With this release, we have migrated to use Expo image to leverage the advantages offered by Expo image, particularly its improved caching mechanisms and other performance benefits, such as Placeholder Support, Error Handling, Lazy Loading, Priority Loading, and Optimised Delivery.

#### 3. Chart Widget Enhancements

Added support for hiding x-axis labels (`showxaxislabels`) and customizing bar width (`barwidth`) in Bar and Column charts

#### 4. Implement Gradient Text Styling in Labels

Introducing a property to add gradient text styling in the Label widget. To implement this enhancement, use the below CSS property.

```css

.app-label-text {    
  color: linear-gradient(90deg, #f00, #00f);
}

```

### Notable Bug Fixes in React Native

- Improved page performance with skeleton loaders
- Fixed scrolling in modal dialogs on Android
- Image rendering issues fixed (no more **tap-to-load**)

## Technology Stack Upgrades

#### 1. Platform Stack Upgrades

We’ve upgraded the platform for better performance, security, and compatibility:

- Java: 21.0.3 → 21.0.6
- Tomcat: 10.1.31 → 10.1.39


Node Exporter, Cadvisor, Elastalert, Fluentd, Prometheus, Grafana, Kibana, etc. — all upgraded for better monitoring and stability.

#### 2. Application Stack Upgrades

- Spring Framework:  6.2.3 → 6.2.5  
- Spring Security:  6.4.3 → 6.4.4  
- Spring Data:  2024.1.3 → 2024.1.4  
- Spring Boot:  3.4.3 →3.4.4  


## Final Thoughts

WaveMaker Studio 11.11 delivers serious improvements across the board—developer experience, app performance, usability, and flexibility. With key architectural upgrades and user-driven enhancements, this release is designed to help you build faster, ship smarter, and maintain confidently.

Try the new features and let us know what you think.