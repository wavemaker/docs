---
title: "Angular Upgrade Journey: Top 5 things to keep in mind"
author: Sairama Krishna Bonala
---

Taking up an Angular upgrade can be both exciting and challenging. As technology evolves, it's essential to keep up to date for better performance and security. This guide explains key considerations and best practices to make the Angular upgrade journey smoother and successful.

<!--truncate-->

## 1. Check Compatibility
- Check [Support timelines](https://angular.io/guide/releases#support-window) for the Active and LTS versions.
- Consider upgrading Angular in incremental versions especially if the project is moving from a significantly older version. 
- Angular provides comprehensive documentation on breaking changes between versions. Utilize tools like the [Angular Update Guide](https://update.angular.io/), which guides the necessary changes. Look specifically for any breaking changes or deprecated features.
- Consider creating a separate branch for the upgrade process to avoid disrupting the main development workflow until the upgrade is complete.

:::tip
Update Node version as mentioned in the [Angular version compatibility document](https://angular.io/guide/versions). 
:::

## 2. Use Angular CLI
- Angular CLI simplifies various tasks in the upgrade process, automates many tedious tasks, and ensures best practices are followed.
- Use the command `ng update` to automatically update the project's dependencies and modify configuration files to match the latest Angular version.
- Be vigilant in checking for any breaking changes and compilation issues that may arise during the upgrade process. Address these issues promptly to maintain the integrity of the application.

## 3. Update Dependencies
- In addition to upgrading Angular itself, don't forget to update other project dependencies.
- Check the release notes of Angular and other dependencies used in the project to identify compatibility issues or breaking changes.
- Incrementally update each dependency version and thoroughly test the application after each update to catch and resolve any issues early on.
- Check for the changes in Git/npm repositories that may impact the project and adjust accordingly to avoid unexpected issues.

:::info
Consider supporting dependencies when upgrading to Angular Ivy from View Engine. Projects on Angular 16 and later no longer support View Engine libraries.
:::

## 4. Refactor Code
- Take this opportunity to refactor the codebase. Eliminate deprecated APIs/methods and implement suggested changes to align with best practices.
- Try to adopt newer Angular features and refactor the code to improve maintainability. 
- Eliminate unnecessary dependencies and optimize code to ensure a lean and efficient application.
- Take advantage of [Angular's deprecation warnings](https://angular.io/guide/deprecations) to identify and address deprecated features, ensuring smoother upgrades in the future.
- Ensure the application's security by checking for new vulnerabilities during the upgrade process.
- After completing the upgrade process, measure the build time of the application to ensure that it hasn't significantly increased. Identify any factors contributing to longer build times and address them accordingly.

:::note
Check Node.js memory usage and set it with the `--max-old-space-size` flag if required. It ensures sufficient resources for the upgraded Angular application.
:::


## 5. Test Thoroughly
- After completing the upgrade and refactoring process, thorough testing is crucial to ensure the stability and functionality of the application.
- Update existing unit tests and end-to-end tests to reflect changes introduced by the upgrade.
- Perform comprehensive testing on all parts of the application, including critical areas and edge cases.
- Run automated tests, along with manual testing, to ensure a robust application.

:::caution Warning
Test the application in various browsers and devices to ensure [cross-browser compatibility](https://angular.io/guide/browser-support).
:::

The Angular upgrade journey may pose challenges, but by following these guidelines and best practices, one can confidently navigate the process and ensure the continued success of the Angular applications in the ever-evolving landscape of web development.
