---
title: "Reuse React Native Components Across Any App with WaveMaker"
id: "prefab-as-react-native-component"
sidebar_label: "Prefab as RN Component"
---
---

In today's fast-paced app development world, flexibility and reusability are game-changers. Instead of building an entire app from scratch, why not create small, reusable React Native components? With WaveMaker, you can build Prefabs—self-contained, customizable components—and integrate them into any application, even if it's not built with WaveMaker. This approach saves time, reduces redundancy, and keeps your codebase clean and modular.

## Why Use Reusable React Native Components?

Using reusable components makes development faster and more efficient. Whether you're working on multiple projects or maintaining a large-scale application, having a library of ready-to-use components ensures consistency and speeds up development. Plus, updating a component in one place means your changes can automatically reflect across all apps using it.

## How It Works

The process is straightforward and involves two main steps: setting up the Prefab in WaveMaker and integrating it into an external app.

### Building the Prefab in WaveMaker

1. **Create a Prefab**: Design a reusable React Native component with the necessary UI and logic.
2. **Configure Properties, Events, and Methods**: Define customizable properties, event handlers, and methods to make your component flexible.
3. **Export the Component**: Once it’s ready, export the Prefab as a ZIP package containing all required dependencies and configurations.

### Using the Prefab Outside WaveMaker

4. **Upload the Package**: Store the exported ZIP package in an npm registry, GitHub, or a local repository for easy sharing.
5. **Install the Prefab in an External App**: Use npm to add the Prefab as a dependency in your non-WaveMaker React Native app:
   ```bash
   npm install <prefab-name>
   ```
6. **Import and Use the Prefab**: Add the Prefab to your React Native or Expo application like any other React Native component.

