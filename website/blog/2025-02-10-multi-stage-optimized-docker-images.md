---
title: "Crafting Optimized & Secure Docker Images using Multi stage builds"
author: "Vikas Sikakolli"
---
---

Docker is a powerful tool for creating, deploying, and running applications in containers. However, Docker's flexibility can lead to inefficient Dockerfiles if not handled carefully. A common mistake is writing Dockerfiles that generate large, bloated images with unnecessary layers. In this blog, we'll discuss how not to write Dockerfiles and introduce multi-stage builds as an effective way to reduce image size and improve performance.

<!-- truncate -->

## The Problem with Traditional Dockerfile Practices

One of the common pitfalls in Docker development is stacking too many layers in a single-stage Dockerfile. Every Dockerfile instruction (RUN, COPY, ADD, etc.) creates a new layer. If you are building software, installing dependencies, or doing any temporary tasks, these intermediate files can accumulate and bloat your Docker images.

## Example - A Traditional Dockerfile with Multiple Layers

![Docker Image Before Change](/learn/assets/docker-image-before.png)

In the above Dockerfile:
1. The **build dependencies** (like build-essential) are installed, and unnecessary files are left in the image, even though they are not required for running the application.
2. The **cleanup step** is done after the build, but it still contributes an extra layer.
3. **Every instruction** (install, build, clean) creates a layer, leading to a bigger image size.

**Issues**:

- Each step in the Dockerfile adds to the image size, even if it's only needed temporarily.
- This approach makes the final image unnecessarily large because the cleanup steps do not remove files from previous layers.

## What is a Multi-Stage Dockerfile?

Multi-stage Docker builds allow you to separate the build and runtime environments, reducing unnecessary layers in the final image. You can use a base image to compile or build software and then copy only the required files into a smaller runtime image.

Multi-stage builds allow you to:

- Build dependencies and temporary files in an intermediate image.
- Copy only the final output into the production image.
- Keep the final image slim and optimized by excluding unnecessary tools or files.

## How Multi-Stage Builds Solve This Problem

Let's rewrite the above example using a multi-stage Dockerfile approach.

**Optimized Dockerfile Using Multi-Stage Build**

![Docker Image After Change](/learn/assets/docker-image-after.png)

## Advantages of Multi-Stage Builds

**Smaller Image Size**:
- Only the files required for running the application are copied into the final image.
- The build tools and dependencies (e.g., build-essential) are left behind in the builder stage and never reach the final image.
- The final image contains fewer layers, as unnecessary steps like apt-get install and apt-get clean are omitted.
**Layer Optimization**:
- Each Dockerfile instruction creates a layer, but multi-stage builds ensure that only the layers containing the essential parts of your application make it to the final image.
- This makes the image lighter and faster to pull from Docker registries, saving disk space and speeding up deployment.
**Cleaner, More Secure Images**:
- By not including development tools or temporary build files, your final image is cleaner and smaller, reducing the potential attack surface.
- Only runtime essentials are included, leading to a leaner production image.
**Faster Deployment**:
- Smaller images are quicker to push and pull, reducing time for deployments.
- Multi-stage builds allow you to cache the builder stage, speeding up subsequent builds when source code changes but dependencies remain the same.

## A Step-by-Step Comparison of Image Sizes

Let's compare the image sizes between a multi-layer Dockerfile and a multi-stage Dockerfile.

1. **Traditional Multi-Layer Dockerfile**: The traditional approach installs dependencies, builds the application, and then removes the build tools. However, even with cleanup steps, the image retains unnecessary layers. This approach might result in an image that is 500 MB or more.
2. **Multi-Stage Dockerfile**: By isolating the build process and copying only the application binary to the final image, the image can be reduced to 100 MB or less, depending on the application. This results in faster deployment and reduced storage costs.

## Best Practices for Writing Efficient Dockerfiles

- **Minimize Layers**: Combine multiple RUN commands into a single instruction to reduce layers.
- **Leverage Multi-Stage Builds**: Separate build environments from runtime environments for optimized image sizes.
- **Avoid Installing Unnecessary Packages**: Only install what is needed for the final image, and keep build dependencies in the intermediate stages.
- **Use .dockerignore**: Ensure unnecessary files are excluded during the COPY step by defining them in a **.dockerignore** file.


## Conclusion

 Multi-stage Dockerfiles are a powerful way to reduce the size and complexity of Docker images. By isolating the build process and copying only the necessary artifacts to the final image, you can drastically reduce the number of layers and the image size, leading to faster builds, quicker deployments, and more efficient resource usage.

If you're still using a traditional Dockerfile with multiple layers, it's time to upgrade your strategy and adopt multi-stage builds for better performance and scalability. A little optimization in your Dockerfile can go a long way toward reducing overhead and improving your Docker workflow.


