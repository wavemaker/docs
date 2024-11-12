---
title: "Build with Docker"
id: "build-with-docker"
---
---

WaveMaker supports micro-service-enabled architecture. This allows you to build and deploy applications using container-based technology. Docker is a platform as a service that uses virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.

For creating a Docker container, you create a Docker image by building a Dockerfile. For this, you require node and npm as prerequisites for building an application with maven and java.

## System prerequisites

- You can find the System prerequisites from [Angular Web and Mobile 11](/learn/wavemaker-release-notes/v11-1-2#angular-web-and-mobile-11)


## Build Docker Image

Export the project to your local, or you can directly clone from a repository. You should keep the Dockerfile in the root directory of the project.

### Creating a Dockerfile

To create a Dockerfile, use the following command.

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
- **wavemaker_version**: Specify the WaveMaker release version for the application. This parameter is **optional** if omitted, it defaults to the latest version. You can set it to a specific version (e.g., `10.8.0`) if needed.

```Docker
docker build --build-arg profile=<deployment-profile> --build-arg wavemaker_version=<wavemaker_version> -t <imagename:version> <project_location>
```

```bash
example: docker image build --build-arg build_profile_name=deployment -t wmimage:1.0 .
```

For more information, see [Development Profile](/learn/app-development/deployment/configuration-profiles#development-configuration-profile) and [Deployment Profile](/learn/app-development/deployment/configuration-profiles#deployment-configuration-profile).

Check [Handling Build Failures](/learn/app-development/deployment/building-with-maven#handling-build-failures) if build failed.

### Run Docker Container

For creating a Docker container, use the below Docker command.

:::note
You can provide any `host_port`. For example, `80`. The internal port of the container is fixed and not changeable.
:::

```Docker
docker container run --name <containername> -d -p <host_port>:8080 <imagename:version>
```

```bash
example: docker container run --name wmapp -d -p 80:8080 wmimage:1.0
```

### Access Application

If Docker is running on the Host network, use the Host IP address to access the application on the web. Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance. Please use the respective IP Address to access the application on the web. You can access the application with `http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.

## Build War File Using Docker

To generate the WAR file locally using Docker, follow the steps below. This approach is helpful if you want a containerized, isolated environment for the build process.

#### Basic Command

Run the following Docker command, replacing `<your_project_location>` with the path to your local project folder:

```bash
docker run --rm -e profile=<profile_name> -v <your_project_location>:/usr/local/content/app wavemakerapp/app-builder:<wavemaker_version>
```

```bash
example: docker container run -d --name wm-app -v /home/user/MySampleApp:/usr/local/content/app wavemakerapp/app-builder
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

```bash
example: docker run --rm -e profile=<profile_name> -e MAVEN_CONFIG=$HOME/.m2 \
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

### Run Container

- After Completing the build, it will create a project war file in the `<your_project_location>/dist` folder. Users can use the war file to deploy in the Host tomcat or Tomcat Docker container.
- For deploying project war using Tomcat Docker container, please use the below command.

```bash
docker container run -d --name <container_name> -v <your_project_location>/dist/:/usr/local/tomcat/webapps/ -p <host_port>:8080 wavemakerapp/app-runtime-tomcat:<wavemaker_version>
```

```bash
example: docker container run -d --name wm-app -v /home/user/MySampleApp/dist/:/usr/local/tomcat/webapps/ -p 80:8080 wavemakerapp/app-runtime-tomcat:<wavemaker_version>
```

### Access Application

If Docker is running on the Host network, use the Host IP address to access the application on the web. Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance. Please use the respective IP Address to access the application on the web. You can access the application with `http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.

:::note
The wavemakerapp/app-builder & wavemakerapp/app-runtime-tomcat Docker image is packed with required software packages and libraries to deploy WaveMaker Application in Docker containers.

- Using the app-builder Docker image, users can generate war files for WaveMaker applications.
- Using the app-runtime-tomcat Docker image, user can use to deploy their applications
- Find WaveMaker app-builder Docker image at [app-builder Docker Image in Docker Hub](https://hub.docker.com/r/wavemakerapp/app-builder).
- Find WaveMaker app-runtime Docker image at [app-runtime-tomcat Docker Image in Docker Hub](https://hub.docker.com/r/wavemakerapp/app-runtime-tomcat).
:::

## wm-rn-web-preview

This Docker image is configured to allow users to execute [`wm-reactnative-cli`](https://github.com/wavemaker/wm-reactnative-cli) commands and it is used to preview the react-native applications locally. To know more about creating, installing, and setting up wm-rn-web-preview docker image, see [Docker Image for local Web preview](/learn/react-native/web-preview-docker-image).

- Using the wm-rn-web-preview image, users can preview the react native WaveMaker applications in their local.
- Find WaveMaker wm-rn-web-preview Docker image at [wm-rn-web-preview Docker Image in Docker Hub](https://hub.docker.com/r/wavemakerapp/wm-rn-web-preview).
