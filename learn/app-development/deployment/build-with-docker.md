---
title: "Build with Docker"
id: ""
---
---

WaveMaker supports micro-service enabled architecture. This allows you to build and deploy applications using container-based technology. Docker is a platform as a service that uses virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.

For creating a Docker container, you create a Docker image by building a Dockerfile. For this, you require node and npm as prerequisites for building an application with maven and java.

## System prerequisites

|Description|Version|
|---|---|
|Java |1.8|
|Node|10.15|
|Maven| 3.6|
|npm|6.4|
|Ant|1.10|

## Build Docker Image (Create Docker File, Create Docker Image, Run Container)

Export the project to your local or you can directly clone from a repository. You should keep the Dockerfile in the root directory of the project.

### Creating a Dockerfile

To create a Dockerfile, use the following command.

```bash
vi Dockerfile
```

You can use the following Dockerfile for building Docker image and create Docker containers by using multi-stage Dockerfile. You can decrease the size of the Docker image and can create light-weight containers as well.

```Dockerfile
FROM maven:3.6.3-jdk-8 as maven-java-node
ENV MAVEN_CONFIG=~/.m2
RUN mkdir -p /usr/local/content/node
WORKDIR /usr/local/content/node
ADD https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.gz .
RUN tar -xzf node-v10.15.0-linux-x64.tar.gz \
    && ln -s /usr/local/content/node/node-v10.15.0-linux-x64/bin/node /usr/local/bin/node \
    && ln -s /usr/local/content/node/node-v10.15.0-linux-x64/bin/npm /usr/local/bin/npm \
    && chown -R root:root /usr/local/content/node \
    && rm -fR node-v10.15.0-linux-x64.tar.gz

FROM maven-java-node as webapp-artifact
RUN mkdir -p /usr/local/content/app
ADD ./ /usr/local/content/app
WORKDIR /usr/local/content/app
ARG build_profile_name
ENV profile=${build_profile_name}
RUN  mvn clean install -P${profile}

FROM tomcat:8.5.50
COPY --from=webapp-artifact /usr/local/content/app/target/*.war /usr/local/tomcat/webapps/
```

Save the above Docker file.

### Building Docker Image

Build a Docker image by using the below Docker command with different build profiles. You can choose to build with the following build profiles including `development` and `deployment`.

```Docker
docker image build --build-arg build_profile_name=<deployment-profile> -t <imagename:version> <project_location>
```

```bash
Example: docker image build --build-arg build_profile_name=deployment -t wmimage:1.0 .
```

For more information, see [Development Profile](/learn/app-development/deployment/configuration-profiles#development-configuration-profile) and [Deployment Profile](/learn/app-development/deployment/configuration-profiles#deployment-configuration-profile).

Check [Handling Build Failures](/learn/app-development/deployment/building-with-maven#handling-build-failures) if build failed.

### Creating Docker Container

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

If Docker Running on Host network, use Host IP address for acess Application on the web.Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance, please use the respective IP Address to access the Application in the web,You can access the application with `http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.

## Build War File Using Docker (Create Docker File, Create Docker Image, Build War, Run Container)

- Export the project to your local or you can directly clone from a repository. You should keep the Dockerfile in the root directory of the project and we will mount the application directory location to `/usr/local/content/app` during container creation for generating application war.

### Creating wm app builder Dockerfile

To create a wm app builder Dockerfile, use the following command.

```bash
vi Dockerfile.build
```

You can use the following Dockerfile for building Docker image and create Docker containers for creating project war file.

```Dockerfile
FROM maven:3.6.3-jdk-8 as maven-java-node
ENV MAVEN_CONFIG=~/.m2
# installing node 10.15 and npm 6.4.1 in docker container
RUN mkdir -p /usr/local/content/node
WORKDIR /usr/local/content/node
ADD https://nodejs.org/dist/v10.15.0/node-v10.15.0-linux-x64.tar.gz .
RUN tar -xzf node-v10.15.0-linux-x64.tar.gz \
    && ln -s /usr/local/content/node/node-v10.15.0-linux-x64/bin/node /usr/local/bin/node \
    && ln -s /usr/local/content/node/node-v10.15.0-linux-x64/bin/npm /usr/local/bin/npm \
    && chown -R root:root /usr/local/content/node \
    && rm -fR node-v10.15.0-linux-x64.tar.gz

# stage for build the code
FROM maven-java-node
RUN mkdir -p /usr/local/content/app \
    && chown -R root:root /usr/local/content/app
WORKDIR /usr/local/content/app
CMD  mvn clean install -P${profile} && mkdir -p dist && cp -fr target/*.war dist/
```

Save the above Dockerfile.build.

### Building Docker Image

Build the Docker image using the below command

```bash
docker image build -t <image-name>:1.0 -f Dockerfile.build <project_location>
```

```bash
example: docker image build -t wavemaker/wm-app-builder:1.0 -f Dockerfile.build .
```

### Creating Docker Container for generating war file

Create a Docker container for generate a war , please use the below command.

```bash
docker container run --rm -it --name <container-name> -v $HOME/.m2:$HOME/.m2 -v $HOME/.npm:$HOME/.npm -v <project-location>:/usr/local/content/app -e profile=<deployment-profile> -e MAVEN_CONFIG=$HOME/.m2 <image-name>
```

```bash
docker container run --rm -it --name wmapp -v $HOME/.m2:/root/.m2 -v $HOME/.npm:$HOME/.npm -v /home/user/MySampleApp:/usr/local/content/app -e profile=deployment -e MAVEN_CONFIG=$HOME/.m2 wavemaker/wm-app-builder:1.0
```

- After Completing the build it will create a project war file in `<project-location>/dist` folder, user can use the war file to deploy in Host tomcat or in Tomcat Docker container.
- For deploying project war using Tomcat Docker container , please use the below command.

```bash
docker container run -d --name <container-name> -v <project-location>/dist/:/usr/local/tomcat/webapps/ -p <host_port>:8080 tomcat:8.5
```

```bash
example: docker container run -d --name wm-app -v /home/user/MySampleApp/dist/:/usr/local/tomcat/webapps/ -p 80:8080 tomcat:8.5
```

### Access Application

If Docker Running on Host network, use Host IP address for acess Application on the web.Get an Instance IP Address using the following command to access the application on the web. Please run the below command in the web application hosting Instance.

```bash
ifconfig
```

- Above command will provide the network interfaces and their respective IP Address in Instance, please use the respective IP Address to access the Application in the web,You can access the application with `http://<HOST_IP:HOST_PORT>/<APPLICATION_CONTEXT>/`.
