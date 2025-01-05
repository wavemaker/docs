---
title: "Overview of Integrating WaveMaker with External CI/CD Pipelines"
id: "overview-integrate-with-your-cicd-providers"
sidebar_label: "Overview"
---

WaveMaker applications are built on an open-standard Java-based platform, designed for flexibility and minimal prerequisites, making them easy to deploy across various environments. This document outlines the process for integrating external CI/CD pipelines, allowing developers to build, test, and deploy applications seamlessly. 

WaveMaker’s architecture ensures compatibility with popular CI/CD tools, enabling developers to maintain control over their existing workflows while leveraging WaveMaker’s scalability, cross-platform deployment capabilities, and open standards.


## Key Features  

- **Open-Standard Java-Based Applications**: Built on widely adopted Java standards for compatibility.  
- **Customizable VCS Integration**: Seamlessly integrates with various version control systems (e.g., Git, SVN), offering flexibility and enhanced collaboration.
- **Minimal Prerequisites**: Simple setup with standard Java tools.  
- **Scalable and Modular**: Supports growth while ensuring maintainability.  
- **Cross-Platform Deployment**: Deploy to various environments, including cloud and on-premises systems.  

## Benefits  

- **Complete Control**: Maintain your existing CI/CD pipelines and workflows while integrating seamlessly with WaveMaker.  
- **Scalable Workflows**: Tailor pipelines to meet the demands of your project, from small-scale deployments to enterprise-grade applications.  
- **Advanced Automation**: Leverage the advanced capabilities of external CI/CD tools for custom workflows, detailed reporting, and enhanced testing.  
- **Flexibility**: Deploy applications to a wide variety of environments, ensuring compatibility with your infrastructure strategy.  

## Basic CI/CD Flow  

1. **Custom VCS Integration**
   - Integrate your preferred version control system (e.g., Gitlab, Bitbucket) with WaveMaker to manage your application's source code effectively.
   - WaveMaker ensures that all code changes are automatically tracked and synchronized seamlessly.
2. **Clone and Build**  
   - Clone the repository containing the WaveMaker application source code into your CI/CD workspace or local environment.
   - Build the application using tools like Maven for Java, npm and Node.js for frontend dependencies, or Docker for containerization.
   - This step ensures the latest code is used to generate deployable artifacts (e.g., WAR files or Docker images).
3. **Static Asset Upload (Optional)**  
   - If your application includes static assets (e.g., images, JavaScript files), consider uploading them to a Content Delivery Network (CDN) for optimized delivery.
   - This step can improve the application's performance by reducing load times for end-users. 
4. **Deploy**  
   - Deploy the built artifacts (e.g., WAR files, Docker images) to your target environment, which could be on-premises servers, cloud platforms, or hybrid infrastructures.
   - Ensure that the deployment process aligns with your organization's infrastructure strategy and that all necessary configurations are in place for the application to function correctly.

This flow provides a high-level overview of integrating WaveMaker applications into external CI/CD pipelines. For detailed steps and additional configurations, refer to the next steps in documentation.  
