---
title: "Build with Docker"
id: ""
---
---

Wavemaker support micro service architecture so user can build and deploy application using container technology.for creating Docker container we create Docker image by building Dockerfile.wavemaker Applications require node and npm ad prerequisites for buildong application with mave and java.

Users can use below Dockerfile for build Docker image and create Docker containers.by using multi stage Dockerfile you can decrease the size of the Docker image and can create light weight containers.in first stage we are building applcation using the wavemaker application prerequisites node,npm ,mvn and java

- required versions for prerequisies
  - npm 6.4.1
  - node 10.12.0
  - mave 3.6.3
  - java 8

```Dockerfile

FROM maven:3.6.3-jdk-8 as maven-java-node
ENV MAVEN_CONFIG=~/.m2
RUN mkdir -p /usr/local/content/node
WORKDIR /usr/local/content/node
ADD https://nodejs.org/dist/v10.12.0/node-v10.12.0-linux-x64.tar.gz .
RUN tar -xzf node-v10.12.0-linux-x64.tar.gz \
    && ln -s /usr/local/content/node/node-v10.12.0-linux-x64/bin/node /usr/local/bin/node \
    && ln -s /usr/local/content/node/node-v10.12.0-linux-x64/bin/npm /usr/local/bin/npm \
    && chown -R root:root /usr/local/content/node \
    && rm -fR node-v10.12.0-linux-x64.tar.gz


FROM maven-java-node as webapp-artifact
RUN mkdir -p /usr/local/content/app
ADD ./ /usr/local/content/app
WORKDIR /usr/local/content/app
ARG build_profile_name
ENV profile=${build_profile_name}
#Take ENV to docker build. for Profile $profile
RUN  mvn clean install -P${profile}


FROM tomcat:8.5.50
COPY --from=webapp-artifact /usr/local/content/app/target/*.war /usr/local/tomcat/webapps/
RUN apt-get update && apt-get install vim -y


```

build Docker image using below Docker command with different build profiles.available build profiles are deployment and development

```Docker
docker image build --build-arg build_profile_name=deployment -t myapplication:1.0
```

for Dcoker container create use the below Docker command. user can provide host port any.

```Docker
docker container run --name my-container -d -p 80:8080 myapplication:1.0
```
