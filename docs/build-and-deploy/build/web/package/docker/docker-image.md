---
last_update: { author: "Tejaswini K" }
---

# Build a Docker Image

## Overview
In this section , we will see how too create a docker image of a wavemaker web application.

## System prerequisites

- **Docker Installed**: Download and install Docker for your operating system from [Docker's official site](https://www.docker.com/get-started/). 
- **WaveMaker Application Project**: Download the wavemaker project from the studio


## Steps to Build a Docker Image

### Step 1: Prepare the Project

 Export the project to your local machine, or directly clone it from the repository. Ensure that the Dockerfile is placed in the root directory of the project.

### Step 2: Create the Dockerfile

 Create a Dockerfile using the following command. 
 (You can skip this step for WaveMaker application versions 11.10 or later, as the Dockerfile is provided by default.)

```bash
vi Dockerfile
```


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

### Step 3: Save the Dockerfile
Save the above created file
### Step 4:  Create Docker Image

Build a Docker image by using the below Docker command with different build profiles. You can choose to build with the following build profiles,`development` and `deployment`.

### Parameters
- **profile**: Specifies the build profile to be used.
- **wavemaker_version**: Specifies the WaveMaker application release version. This parameter is optional.If not provided, the latest available version is used by default. You may also set a specific version (for example, 11.14.2) if required.

```Docker
docker build --build-arg profile=<deployment-profile> --build-arg wavemaker_version=<wavemaker_version> -t <imagename:version> <project_location>
```

Example with Latest version:
```bash
docker build --build-arg profile=deployment -t wmimage:1.0 .
```

Example with specific version:
```bash
docker build --build-arg profile=deployment --build-arg wavemaker_version=11.9.1 -t wmimage:1.0 .
```

This will create docker image of your wavemaker application. You can use this and create a docker container. 
Refer  [Deploy a docker container](../../../../deploy/container-deployment.md)

:::note
The wavemakerapp/app-builder and wavemakerapp/app-runtime-tomcat Docker images are prepackaged with all the required software, dependencies, and libraries needed to build and deploy WaveMaker applications in Docker containers.
:::

<VideoCard
  videoUrl="https://next-academy.wavemaker.com/Watch?wm=49BD97DDB1"
  title="Dockerize the wavemaker app"
  description="Watch this video to understand how to Dockerize a WaveMaker application"
  thumbnailText="Dockerize the wavemaker app"
/>
