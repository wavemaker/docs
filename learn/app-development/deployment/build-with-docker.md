---
title: "Build Docker Image"
id: "build-with-docker"
---
---

WaveMaker supports micro-service-enabled architecture. This allows you to build applications using container-based technology. Docker is a platform as a service that uses virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.

To create a Docker image, you start by building a Dockerfile.

## System prerequisites

Before proceeding, ensure the following prerequisites are met:

- **Docker Installed**: Download and install Docker for your operating system from [Docker's official site](https://www.docker.com/get-started/). 
- **WaveMaker Application Project**: Ensure you have a WaveMaker project ready for build.

## Build Docker Image

Export the project to your local, or you can directly clone from a repository. You should keep the Dockerfile in the root directory of the project.

### Creating a Dockerfile

To create a Dockerfile, use the following command. (You can skip this step for any WaveMaker application version 11.10 or later, as it is available by default.)

```bash
vi Dockerfile
```

You can use the following Dockerfile for building Docker images and create Docker containers by using multi-stage Dockerfile. You can decrease the size of the Docker image and can create lightweight containers as well.

```Dockerfile
# Define build arguments for WaveMaker version and profile
ARG wavemaker_version=latest

# Stage 1: Build the web application artifact
FROM wavemakerapp/app-builder:${wavemaker_version} as webapp-artifact
ADD ./ /usr/local/content/app
ARG profile
ENV profile=${profile}
ENV MAVEN_CONFIG=/root/.m2
RUN --mount=type=cache,target=/root/.m2 \
    --mount=type=cache,target=/root/.npm \
    bash /usr/local/bin/wavemaker-build.sh full

# Stage 2: Prepare the runtime environment for the application
FROM wavemakerapp/app-runtime-tomcat:${wavemaker_version}
COPY --from=webapp-artifact /usr/local/content/app/target/*.war /usr/local/tomcat/webapps/
```

Save the above Docker file.

### Create Docker Image

Build a Docker image by using the below Docker command with different build profiles. You can choose to build with the following build profiles, including `development` and `deployment`.

### Parameters
- **profile**: The build profile you want to use.
- **wavemaker_version**: Specify the WaveMaker release version for the application. This parameter is **optional** if omitted, it defaults to the latest version. You can set it to a specific version (e.g., `11.9.1`) if needed.

```Docker
docker build --build-arg profile=<deployment-profile> --build-arg wavemaker_version=<wavemaker_version> -t <imagename:version> <project_location>
```
To use the latest version, simply omit the `wavemaker_version` parameter:

Example with Latest version:
```bash
docker build --build-arg profile=deployment -t wmimage:1.0 .
```

Example with specific version:
```bash
docker build --build-arg profile=deployment --build-arg wavemaker_version=11.9.1 -t wmimage:1.0 .
```

For more information, see [Development Profile](/learn/app-development/deployment/configuration-profiles#development-configuration-profile) and [Deployment Profile](/learn/app-development/deployment/configuration-profiles#deployment-configuration-profile).

Check [Handling Build Failures](/learn/app-development/deployment/building-with-maven#handling-build-failures) if build failed.

:::note
The wavemakerapp/app-builder & wavemakerapp/app-runtime-tomcat Docker image is packed with required software packages and libraries to deploy WaveMaker Application in Docker containers.

- Using the app-builder Docker image, users can generate war files for WaveMaker applications.
- Find WaveMaker app-builder Docker image at [app-builder Docker Image in Docker Hub](https://hub.docker.com/r/wavemakerapp/app-builder).
:::
