---
title: "Recommended Node.js Versions: React Native Studio"
author: "Raaj Vamsy Rayavarapu"
---
---

When working with React Native Studio projects, it’s important to ensure that your Node.js version aligns with specific requirements for different stages of the development process. Here’s a breakdown of the required Node.js versions for **building the project** and **running a local preview**.

<!-- truncate -->

## Building the Project

**Node.js Version Requirement**  

- **Required Version**: Node.js **18.16.1** is mandatory for exporting a ZIP file or building the project using Maven.  
- **Why**: Ensures compatibility with the build pipeline and prevents errors during packaging.  
- **Potential Issues**: Using a different version may cause unexpected build failures or export issues.  

### ✅ Recommendation  

1. Before running the **Maven build** or **exporting the project**, confirm your Node.js version:  
  ```sh
  node -v
  ```  
2. If needed, update to **18.16.1** using **nvm**:  
  ```sh
  nvm install 18.16.1  
  nvm use 18.16.1  
  ``` 

## Running Local Preview

**Node.js Version Requirement for Local Development**  

- **Supported Range**: Node.js version must be **between 18.17.1 and 22.11.0**.  
- **Why**: Ensures compatibility with project dependencies and prevents installation errors.  
- **Potential Issues**: Using a version outside this range may cause dependency conflicts and runtime errors.  

### ✅ Recommendation

1. Before running **npm install** or previewing the project locally, check your Node.js version:  
  ```sh
  node -v
  ```  
2. If needed, update to a supported version using **nvm**:  
  ```sh
  nvm install 18.17.1  
  nvm use 18.17.1  
  ```  

:::note
Avoid using versions outside this range to prevent dependency conflicts and runtime errors.
:::

By following these guidelines, you’ll maintain a stable development environment and ensure smooth project builds and local previews for your React Native Studio project.