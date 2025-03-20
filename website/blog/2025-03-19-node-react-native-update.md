---
title: "Recommended Node.js Versions: React Native Studio"
author: "Raaj Vamsy Rayavarapu"
---
---

When working with React Native Studio projects, it’s important to ensure that your Node.js version aligns with specific requirements for different stages of the development process. Here’s a breakdown of the required Node.js versions for **building the project** and **running a local preview**.

<!-- truncate -->

### 1. Building the React Native Studio Project

When exporting a ZIP file or building the project using Maven commands, the required Node.js version is **18.16.1**. This version ensures compatibility with the build pipeline and avoids errors during the packaging process. Using a different version may lead to unexpected build failures or issues during export.

#### ✅ Recommendation:

Ensure your Node.js version is exactly **18.16.1** before running the Maven build command or exporting the project as a ZIP file.


### 2. Local Preview and Package Installation

When setting up a local development environment and running npm install, the Node.js version must fall within a specific range. The **minimum** required version is **18.17.1**, and the **maximum** supported version is **22.11.0**. Staying within this range ensures compatibility with the project's dependencies and prevents installation errors.

#### ✅ Recommendation:

Use Node.js version **between 18.17.1 and 22.11.0** during npm install and while previewing the project locally.  
Avoid using versions outside this range to prevent dependency conflicts and runtime errors.

By following these guidelines, you’ll maintain a stable development environment and ensure smooth project builds and local previews for your React Native Studio project.