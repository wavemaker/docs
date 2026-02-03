---
last_update: { author: "Tejaswini K" }
---

# Building WAR using Docker

## Overview

This section explains how to generate a **WAR file** for a WaveMaker application by using Docker as a **build environment**.  
Docker provides an isolated and consistent setup with all required build tools pre-installed, eliminating the need to install and manage dependencies on your local machine.

---

## What it does [and not]?
This process **does NOT create a Docker image for your application**.

- Docker is used **only as a build tool**
- The output of this process is a **standard WAR file**
- The generated WAR can be deployed to any supported Java application server (Tomcat, JBoss, WebSphere, etc.)

The `wavemakerapp/app-builder` image acts as a **temporary build container** that runs the build and exits after generating the WAR file.

---

## System Prerequisites

Before you begin, ensure the following requirements are met:

- **Docker Installed**  
  Install Docker for your operating system from the official website:  
  https://www.docker.com/get-started/

- **WaveMaker Application Project**  
Download the wavemaker project from the studio
---

## Steps to follow

To generate the WAR file locally, run the Docker commands shown below.  
This approach is useful to have a clean, containerized build environment without installing build tools locally.


Run the following command, replacing:
- `<your_project_location>` with the path to your WaveMaker project
- `<wavemaker_version>` with the required or latest WaveMaker version

```bash
docker run --rm -e profile=<profile_name> -v <your_project_location>:/usr/local/content/app wavemakerapp/app-builder:<wavemaker_version>
```

Example:
```bash
docker run -rm -e profile=deployment -v /home/user/MySampleApp:/usr/local/content/app wavemakerapp/app-builder
```

This command mounts your project directory to the container, builds the application, and generates the WAR file in the specified directory.


####  Faster Builds with Maven and npm Cache

For faster and more efficient builds, you can specify custom Maven and npm cache locations. This setup reduces the need to download dependencies each time by caching them locally.

Replace `<local_m2_cache_location>`, `<local_npm_cache_location>` and `<your_project_location>` with the appropriate paths on your system. 

```bash
docker run --rm -e profile=<profile_name> -e MAVEN_CONFIG=$HOME/.m2 \
   -v <local_m2_cache_location>:$HOME/.m2 \
   -v <local_npm_cache_location>:$HOME/.npm \
   -v <your_project_location>:/usr/local/content/app \
   wavemakerapp/app-builder:<wavemaker_version>
```

Example:
```bash
docker run --rm -e profile=deployment -e MAVEN_CONFIG=$HOME/.m2 \
   -v ~/.m2:$HOME/.m2 \
   -v ~/.npm:$HOME/.npm \
   -v /home/user/MySampleApp:/usr/local/content/app \
   wavemakerapp/app-builder
```

#### Mapping Host User in Docker

If you encounter file access or permission issues while working with files outside the container, you can run the container as the host user by using the `-u $(id -u):$(id -g)` option. This ensures that files created or modified by the container are owned by the host user.

Replace `<local_m2_cache_location>`, `<local_npm_cache_location>` and `<your_project_location>` with the appropriate paths on your system. For `<wavemaker_version>`, specify the WaveMaker release version, or set the tag to "latest" 

```bash
docker run --rm -u $(id -u):$(id -g) \
    -e profile=<profile_name> -e MAVEN_CONFIG=$HOME/.m2 \
    -v <local_m2_cache_location>:$HOME/.m2 \
    -v <local_npm_cache_location>:$HOME/.npm \
    -v <your_project_location>:/usr/local/content/app \
    wavemakerapp/app-builder:<wavemaker_version>
```

Example:
```bash
docker run --rm -u $(id -u):$(id -g) \
    -e profile=deployment -e MAVEN_CONFIG=$HOME/.m2 \
    -v ~/.m2:$HOME/.m2 \
    -v ~/.npm:$HOME/.npm \
    -v /home/user/MySampleApp:/usr/local/content/app \
    wavemakerapp/app-builder
```

#### Explanation of Options

- `-e profile=<profile_name>`: Sets the build profile.
- `-e MAVEN_CONFIG=$HOME/.m2`: Specifies the location for Maven configuration and cache files.
- `-v <local_m2_cache_location>:$HOME/.m2`: Maps your local Maven cache, speeding up dependency resolution.
- `-v <local_npm_cache_location>:$HOME/.npm`: Maps your local npm cache, improving build efficiency for projects using npm.
- `-v <your_project_location>:/usr/local/content/app`: Maps your project directory to the container’s working directory.
- `-u $(id -u):$(id -g)`: Ensures that the container runs with the host user's UID and GID, resolving file permission issues.


:::note
The wavemakerapp/app-builder Docker image is packed with required software packages and libraries to deploy WaveMaker Application in Docker containers.

- Using the app-builder Docker image, users can generate war files for WaveMaker applications.
- Find WaveMaker app-builder Docker image at [app-builder Docker Image in Docker Hub](https://hub.docker.com/r/wavemakerapp/app-builder).
:::


<VideoCard
  videoUrl="https://next-academy.wavemaker.com/Watch?wm=49BD97DDB1"
  title="Generate war using docke"
  description="Learn how to generate a deployable WAR file using Docker in WaveMaker.."
  thumbnailText="Generate war using docker"
/>


