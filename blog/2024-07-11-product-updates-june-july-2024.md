---
title: "Product Updates: June, July 2024"
author: "Swetha Kundaram"
---
---

We are happy to announce new updates in WaveMaker that will enhance your development experience and application quality. This is a product update for the months of June and July 2024.

<!-- truncate -->

## Support for Java 17 and 21 Deployment

WaveMaker now supports deployment on web servers using Java 17 and Java 21 alongside Java 11. This update prepares for future Java versions and enhances compatibility with modern libraries.

[Read More](/learn/blog/2024/06/24/java-update-17-and-21/)


## Performance Improvements

- Dialogs now load their content only when you click them to open. This helps web pages with many complex dialogs load faster
- Bind Dialog and Tab Loading: Tabs in the bind dialog now load only when needed, improving navigation speed and overall performance
- Web pages with many dialogs, containing a lot of Widgets and Prefabs will now load and perform better with lazy loading; dialog content only loads when the dialog is clicked
- Prefabs load faster; reducing the number of calls needed to access properties and configuration files
- Optimized Angular builds to reduce the size of the generated application files (like `vendor.js` and `main.js`); the studio loads noticeably faster


## Accessibility Enhancement with Label Widgets

WaveMaker improves accessibility by using semantic tags like `<p>` and `<h1>–<h6>` instead of `<label>` tags outside of forms. This change ensures compliance with accessibility standards.

[Read More](/learn/blog/2024/05/27/label-accessibility/)


## Pull Request Flow for Custom VCS

Introducing a Pull Request (PR) flow for Version Control Systems like Bitbucket, GitHub, and GitLab, enhancing collaboration and code management for teams.

[Read More](/learn/app-development/deployment/pull-request-flow/)

## See Also

[v11.7.5](/learn/wavemaker-release-notes/v11-7-5) - Release date: 08 July 2024  
[v11.7.4](/learn/wavemaker-release-notes/v11-7-4/) - Release date: 01 July 2024  
[v11.7.3](/learn/wavemaker-release-notes/v11-7-3) - Release date: 17 June 2024  

