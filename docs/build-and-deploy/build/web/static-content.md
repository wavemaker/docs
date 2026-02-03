---
last_update: { author: "Tejaswini K" }
---

# Building Static Content

## Overview

This document explains how you can generate static assets from a WaveMaker web application.

## Introduction

A WaveMaker application consists of two major parts:

- **Frontend (UI) artifacts**: HTML, CSS, JavaScript, images, and other static assets  
- **Backend artifacts**: Java classes which can be packaged as a WAR file

For better performance, it is **recommended to host frontend static assets on a Static Content Server or a CDN** (such as AWS CloudFront, Azure CDN, Nginx, or Apache), while the backend can be deployed on an application server like **Tomcat**.

### Generating Deployable Artifacts

To generate frontend and backend artifacts from a WaveMaker application, follow these steps:

1. Ensure that the selected profile has the `build.ui.mode` set as `angular`.
2. Execute the following Maven command:

```bash
mvn clean install -P<profile-name>
```

**For example**

```bash
mvn clean install -Pdeployment
```

This command generates two deployable artifacts: `ui-artifacts.zip` and `project.war`, both located in the target folder.
Both artifacts are required for the application to function correctly.
Deploying only the frontend assets to a CDN without deploying the WAR file will result in an incomplete application.

### Preparing Static Assets for CDN Deployment

1. Unzip the generated file:

```bash
unzip ui-artifacts.zip
```

2. Upload the extracted contents to one of the following:

   - AWS CloudFront (via an S3 bucket as the origin)
   - Azure CDN (via a Storage Account container)
   - Static servers such as Nginx or Apache

### Configuring CDN URL

After hosting the static assets, the WaveMaker application must know where to load the frontend assets from.
This is done using the property:

```bash
app.cdnUrl
```

The CDN URL usually points to the CDN endpoint followed by the application path.

**For example**

```bash
https://mydomain.cloudfront.net/my_app/1234/
```

WaveMaker supports multiple ways to configure the CDN URL.

1. **Environment / System Property (Highest Priority)**  
   Set `app.cdnUrl` as an environment or system property on the server.
   For details, see: Using Environment Properties [ link to be given]

2. **Maven Build Parameter**  
   Pass the CDN URL during the Maven build:

   ```bash
   mvn clean install -Pdeployment \
     -Dapp.cdnUrl=https://mydomain.cloudfront.net/my_app/1234/
   ```

3. **Profile Property**  
   Define the `app.cdnUrl` directly in the WaveMaker profile configuration.


<VideoCard
  videoUrl="https://next-academy.wavemaker.com/Watch?wm=49E878DE75"
  title="Build and Deploy Static Content"
  description="Watch for deeper understanding of Static Content in WaveMaker"
  thumbnailText="Build and Deploy Static Content"
/>



## Related Documentation

- [Deploy Static Content to AWS Cloudfront](../../deploy/deploy-static-content.md)
