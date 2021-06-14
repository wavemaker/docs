---
title: "Deployment Experience made better!"
author: Subodh Kumar
---

Deployment is a process which enables the developers to serve the apps to users. 
With the latest release, WaveMaker has made the discovery of deployment failures in the application fast & easy.

<!-- truncate -->


### Deployment

When user invokes Deploy operation, WaveMaker executes the maven command to build the project and generate artefacts for deployment. 
Build steps includes angular production build  to generate optimized & compressed javascript & other front end assets. 

WaveMaker's One-click deploy feature allows developers deploy their application to AWS, Azure, Google Cloud or Kubernetes cluster.

During the build process there can be failures if any of the markup, styles or scripts has issues. if the deployment of an application fails, it required some effort from the user to discover & resolve the issue in the last release as

* The developer is informed about the errors post the deployment failure which usually takes couple of minutes since the deployment is triggered.
* The user needs to analyse `build.log` file to find the exact error & its causes. The log file include framework specific messages which might be relatively hard for low code developers to comprehend & fix.
* The build step of deployment fails for the first error it encounters. So the failure log did not include the complete list of errors in the application. This might cost the user multiple deployment operations to discover all issues & their fixes.

Inorder to ensure a better deployment experience, WaveMaker leveraged its Observability platform to analyse the most common deployment issues in the past releases which are listed below, 

* Invalid Page references
* Invalid Partial references
* Deleted Partial references
* Delete Page elements such as styles, scripts
* Referring to Invalid fonts in the styles.

and developed pre-deployment validation for each. With these checks enabled prior to deployment, users can experience significantly reduced error discovery & fix timeline.

### Quick discovery of Errors

* The validations are run as pre-deployment step, the errors are found quickly in the order of seconds.

* New Deployment flow with the validation state. 

[![screenshot](/learn/assets/wm-blog-deploy-01-check.png)](/learn/assets/wm-blog-deploy-01-check.png)

* Error state where the user is presented with the link to check the errors which caused failure as shown below.

[![screenshot](/learn/assets/wm-blog-deploy-02-error.png)](/learn/assets/wm-blog-deploy-02-error.png)


### Complete list of Errors

* The validation works with the existing Inspection framework to present the errors with details. 
* The validation scans complete application code & lists all the possible issues in one interation.
* The results list the errors grouped by files which covers markups, script & styles. 

[![screenshot](/learn/assets/wm-blog-deploy-03-list.png)](/learn/assets/wm-blog-deploy-03-list.png)


### Clear description of Errors
* Each error includes details such as filename & exact line number which can cause deployment failure.
* It also includes the [documentation](/learn/app-development/dev-integration/inspection-framework#__docusaurus) link, to help the developer understand the issue better & help in looking for solutions.

[![screenshot](/learn/assets/wm-blog-deploy-04-detail.png)](/learn/assets/wm-blog-deploy-04-detail.png)

### Convenience

* The validations are added as a part of Inspection framework, the user need not trigger Deployment to find out the issues in the project. 
The user can also trigger Inspection check in the studio to find out application issues & fix them before making a deployment request.


* The Inspection framework in WaveMaker is a custom static code analyzer developed with popular open source frameworks
  * [**ESLint**](https://eslint.org/) 
  * [**Stylelint**](https://stylelint.io/)
* The Inspection framework analyse the markup, script & styles for any structure or usage which can cause deployment failure & logs it with additional metadata such as filename, line-column number, documentation links etc.
* The Inspection framework will be equipped with more validations with each release to help users develop & debug application easily ensuring a great developer & deployment experience.








