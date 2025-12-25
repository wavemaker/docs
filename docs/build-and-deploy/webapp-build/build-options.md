---
title: Build Options
---

# 🛠 Build Options in WaveMaker

WaveMaker allows you to choose how your web application is built as part of the deployment configuration. Build options are defined per configuration profile (for example, Deployment) and determine how the application artifacts are produced.

---

## Available Build Options

WaveMaker currently supports two build options:

- **Angular Build**
- **WaveMaker Build (deprecated)**

---

## Angular Build

The Angular Build option is the modern build approach for WaveMaker applications that contain generated Angular code. This option was introduced in WaveMaker 10.0.

---

### 🔧 Modes

You can select one of the following modes under Angular Build:

#### Development

- Fast compile time  
- Minimal optimization  
- Runtime performance depends more on the browser  

#### Production

- Includes Angular optimizations such as:
  - Minification
  - Tree shaking
  - Dead code elimination
- Results in smaller and faster assets  

---

### 📝 Benefits

Angular Build:

- Uses an Angular CLI–compatible build process
- Produces smaller and optimized output
- Improves application and page load performance

This is the recommended build option for current WaveMaker-generated projects.

---

## WaveMaker Build (Deprecated)

The WaveMaker Build option refers to the older, classic build process that was used in earlier versions of WaveMaker (for example, before WaveMaker 10). It uses the traditional build mechanism inherited from the Maven lifecycle.

This build option is deprecated and may be removed in future releases. It is retained mainly for backward compatibility.

---

## Setting Build Options

Build options are available in the WaveMaker Studio under:

Settings → Profile Configuration → Build Options

![Build Options configuration in WaveMaker Studio](../assets/images/buildoptions.png)
