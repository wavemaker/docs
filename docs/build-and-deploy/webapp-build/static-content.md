# Building Static Content

WaveMaker app consists of frontend artifacts (HTML, CSS, JS, images, etc), and backend artifacts (Java Classes). It is recommended to host frontend artifacts in Static Content Server like Nginx, apache, etc, or Content Delivery Network (CDN), and backend artifacts can be hosted on any web server like Tomcat.

### Generating Deployable Artifacts

To generate frontend and backend artifacts from a WaveMaker application, follow these steps:

1. Ensure that the selected profile has the `build.ui.mode` set as `angular`.
2. Execute the following Maven command:

```shell
mvn clean install -P<profile-name>
```

**For example**

```shell
mvn clean install -Pdeployment
```

This command generates two deployable artifacts: `ui-artifacts.zip` and `project.war`, both located in the target folder.
Both the WAR file and ui-artifacts must be deployed for the application to function correctly. Simply deploying the frontend artifacts on a CDN is insufficient.

### Upload frontend artifacts to CDN

Unzip the file `ui-artifacts.zip` and upload it to CDN origin (S3 bucket in AWS Cloudfront case, storage container in AZURE CDN Profile case, or put it into Nginx or apache). For specific instructions on how to use different CDNs, see [WaveMaker apps integration with AWS CDN](/learn/app-development/deployment/app-integration-with-aws-cdn) to configure CDN in AWS, and for Azure, see [WaveMaker apps integration with AZURE CDN Profile](/learn/app-development/deployment/app-integration-with-azure-cdn).

### Configuring CDN URL

The CDN URL can be passed to the application by setting the property `app.cdnUrl` in one of the following ways:

1. Environment/System property. For specific instructions on how to set environment/system property, see [Using Environment Properties](/learn/app-development/deployment/configuration-management/#using-environment-properties).
2. Maven build parameter.

**For example**

```shell
mvn clean install -Pdeployment -Dapp.cdnUrl=https://mydomain.cloudfront.net/my_app>/1234/
```
3. Profile property.

The priority order for reading the CDN URL is also the same as above.