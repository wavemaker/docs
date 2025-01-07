---
title: "Building Project with Docker"
id: "build-war-with-docker"
---
---

This guide walks you through building a WAR file for your WaveMaker application using Docker. This approach provides a containerized and isolated environment, making it easier to manage dependencies and ensure consistent builds.


## System prerequisites

Before proceeding, ensure the following prerequisites are met:

- **Docker Installed**: Download and install Docker for your operating system from [Docker's official site](https://www.docker.com/get-started/). 
- **WaveMaker Application Project**: Ensure you have a WaveMaker project ready for build.

---

## Build War File Using Docker

To generate the WAR file locally using Docker, follow the steps below. This approach is helpful if you want a containerized, isolated environment for the build process.

#### Basic Command

Run the following Docker command, replacing `<your_project_location>` with the path to your local project folder and `<wavemaker_version>` with version of WaveMaker Application :

```bash
docker run --rm -e profile=<profile_name> -v <your_project_location>:/usr/local/content/app wavemakerapp/app-builder:<wavemaker_version>
```

Example:
```bash
docker run -rm -e profile=deployment -v /home/user/MySampleApp:/usr/local/content/app wavemakerapp/app-builder
```

This command mounts your project directory to the container, builds the application, and generates the WAR file in the specified directory.

#### Optimized Command with Maven and npm Cache

For faster and more efficient builds, you can specify custom Maven and npm cache locations. This setup reduces the need to download dependencies each time by caching them locally.

Replace `<local_m2_cache_location>`, `<local_npm_cache_location>` and `<your_project_location>` with the appropriate paths on your system. For `<wavemaker_version>`, specify the WaveMaker release version, or set the tag to "latest" (or leave it out) to push the latest version automatically.

```bash
docker run --rm -e profile=<profile_name> -e MAVEN_CONFIG=$HOME/.m2 \
   -v <local_m2_cache_location>:$HOME/.m2 \
   -v <local_npm_cache_location>:$HOME/.npm \
   -v <your_project_location>:/usr/local/content/app \
   wavemaker/app-builder:<wavemaker_version>
```

Example:
```bash
docker run --rm -e profile=deployment -e MAVEN_CONFIG=$HOME/.m2 \
   -v ~/.m2:$HOME/.m2 \
   -v ~/.npm:$HOME/.npm \
   -v /home/user/MySampleApp:/usr/local/content/app \
   wavemaker/app-builder
```

#### Explanation of Options

- `-e profile=<profile_name>`: Sets the build profile.
- `-e MAVEN_CONFIG=$HOME/.m2`: Specifies the location for Maven configuration and cache files.
- `-v <local_m2_cache_location>:$HOME/.m2`: Maps your local Maven cache, speeding up dependency resolution.
- `-v <local_npm_cache_location>:$HOME/.npm`: Maps your local npm cache, improving build efficiency for projects using npm.
- `-v <your_project_location>:/usr/local/content/app`: Maps your project directory to the container’s working directory.

**Note**: Make sure that the specified directories exist and have the correct permissions for Docker to access them.

:::note
The wavemakerapp/app-builder Docker image is packed with required software packages and libraries to deploy WaveMaker Application in Docker containers.

- Using the app-builder Docker image, users can generate war files for WaveMaker applications.
- Find WaveMaker app-builder Docker image at [app-builder Docker Image in Docker Hub](https://hub.docker.com/r/wavemakerapp/app-builder).
:::
