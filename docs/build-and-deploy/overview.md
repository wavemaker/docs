---
last_update: { author: "Tejaswini K" }
---

# Overview

Fundamental concepts for building and deploying wavemaker web applications.

## Introduction

This section explains how applications in **WaveMaker** are built, packaged, and deployed across different environments. WaveMaker provides flexible build and deployment options to support traditional enterprise setups, cloud-native architectures, and modern CI/CD workflows.

Depending on your application and infrastructure needs, you can choose from multiple build formats and deployment strategies.

---

## What does Build & Deploy mean in WaveMaker?

In WaveMaker, **Build** refers to the process of compiling and packaging your application (frontend and backend), while **Deploy** refers to running that packaged application in a target environment such as an web server, container platform, cloud infrastructure, or CDN.

A WaveMaker application typically consists of:

- **Frontend** – Angular-based UI
- **Backend** – Java-based services and APIs

These components can be built and deployed together or independently.

---

## Supported Build Types

WaveMaker supports multiple build approaches:

- **WAR Build**  
  Package the application as a WAR file for deployment on Java application servers.

- **Docker-based Build**  
  Build the application inside a Docker container and generate a runnable Docker image.

- **Static Content Build**  
  Build the frontend as static assets and deploy them to a CDN, while hosting the backend separately.

Each build type produces a different output and is suited for different deployment scenarios.

---

## Supported Deployment Options

WaveMaker applications can be deployed using:

- **One-click deployment** from the platform
- **Web servers** such as Apache Tomcat
- **Container-based environments** (Docker)
- **Custom CI/CD pipelines** (for example, Jenkins)
- **Kubernetes clusters**
- **Cloud and private infrastructure**(AWS,Azure)
- **CDN-based deployments** for static content

---
