---
title: "Prefab as a Web Component"
id: "prefab-as-webcomponent"
sidebar_label: "Prefab as a Web Component"
---
---

Web Components are a modern web standard that enables the creation of reusable, encapsulated custom HTML elements. They are:

- **Framework-Agnostic**: Integrate seamlessly with Angular, React, Vue, or vanilla JavaScript.
- **Browser-Native**: Built on native browser technologies, requiring no additional dependencies.
- **Encapsulated**: Ensure isolated styles and functionality.
- **Reusable**: Shareable across multiple projects.

## WaveMaker Prefabs

Prefabs are reusable components designed to integrate seamlessly with web APIs and data in WaveMaker applications. Converting these Prefabs into Web Components extends their usability to any framework or standalone application.

## Architecture

This architecture allows for a hybrid approach, where a web application can leverage the capabilities of WaveMaker components while still maintaining independence and flexibility in its overall architecture.

![Prefab as Web Component Architecture](/learn/assets/prefab-as-webcomponent-architecture.png)

## Steps to Convert a Prefab into a Web Component

Converting a WaveMaker Prefab into a Web Component is a straightforward process consisting of three steps:

1. Trigger the Job
2. Download & Host the Zip
3. Integrate the Web Component

### Trigger the Job

In WaveMaker Studio, a new option allows you to export a Prefab as a Web Component. The steps are as follows:
1. Navigate to the Prefab you want to convert.
2. Select the option **Export as WebComponent**.
3. Choose the desired profile for the export.
4. Trigger the job by clicking the export **As WebComponent** button.

![Triggering the Job](/learn/assets/trigger-the-job.png)

5. A confirmation message appears, indicating that the process has started.

![Confirmation Message](/learn/assets/confirmation-message-triggering-job.png)

6. Monitor the progress of the Web Component job in the **Jobs** section.

![Web Component Zip in Jobs](/learn/assets/webcomponent-zip-in-jobs.png)

### Download & Host the Zip

Once the Web Component export job is complete, you can proceed with downloading and hosting the zip.

1. Download the generated ZIP file.
2. Host the ZIP file on a preferred server.
3. Ensure that the hosted files are accessible from the application where the Web Component will be used.

#### Web Component Package Structure

The generated ZIP typically contains:

- Compiled JavaScript bundles
- Bootstrap script
- Documentation files

![Webcomponent Package Structure](/learn/assets/webcomponent-package-structure.png)

### Integrate the Web Component in a Parent Application

To integrate the Web Component into a parent application like, React, Angular, or Vue, follow these steps:

#### Include the Custom HTML Tag

Insert the custom HTML tag for the Web Component into your application’s HTML using below code.

```
<wm-<prefabName>></wm-<prefabName>>
```

#### Include the JavaScript File

1. Add the following script tag to your application’s HTML to load the Web Component.

```
<script src="https://<hostname>/bootstrap-<prefabName>.js data-api-url=<url>></script>
```
2. Replace `<hostname>` with the URL of your hosted server.
3. Replace `<prefabName>` with the name of your Prefab.
4. The `data-api-url` attribute is optional and specifies the backend API endpoint for the Web Component.

#### Pass Inbound Values

If the Prefab requires inbound values, provide them as attributes on the custom HTML tag. For example,

```
<wm-<prefabName> attribute1="value1" attribute2="value2"></wm-<prefabName>>
```

![Web Component Integration](/learn/assets/webcomponent-integration.png)

## Testing and Deployment

Once the Web Component is integrated, the Web Component can be accessed from the parent application like React, Angular, or Vue.

Test its functionality within the parent application to ensure proper behavior. After successful testing, deploy the application to production.

## Security and Best Practices

- **Implement Proper CORS Configurations**: Ensure that resources accessed by the Web Component comply with Cross-Origin Resource Sharing (CORS) policies to prevent unauthorized access.
- **Use HTTPS for Script and API Endpoints**: All resources and endpoints should be served over HTTPS to guarantee secure communication.
- **Validate and Sanitize Input Attributes**: Input attributes provided to Web Components should be validated and sanitized to prevent injection attacks and ensure data integrity.

## Example - Using Prefab as a Web Component

In this example, a Prefab takes two integers as input that are inbound values and returns their sum.

### Trigger the Job

1. Create a sample prefab which takes two integers as input and returns their sum.

![Example Prefab Sum of Two Integers](/learn/assets/example-prefab-sum-of-two-integers.png)

2. Pass the input integers, var1 and var2, as inbound values.

![Passing Integers in Example](/learn/assets/passing-integers-in-example.png)

3. Export the prefab as **Web Component** by choosing your desired profile.

![Exporting Prefab as Web Component](/learn/assets/exporting-prefab-as-webcomponent.png)

4. You see a confirmation message indicating that the process has started.

![Confirmation Message in Example Prefab](/learn/assets/confirmation-message-in-example-prefab.png)

5. In the jobs section, once the process is downloaded the Web Component zip generated.

![Example Web Component Zip](/learn/assets/example-webcomponent-zip.png)

### Download and Host the Web Component

1. Upon Downloading the zip host it in your preferred server.
2. Ensure that the hosted files are accessible from the application where the Web Component will be used
3. For reference, on using the hosted web component refer to the docs file located in the zip.

![Web Component Location Example Prefab](/learn/assets/webcomponent-location-example-prefab.png)

### Integrating Web Component into Parent Application

1. You need to include the custom HTML tag as mentioned above in your parent application.

```
<wm-wctest></wm-wctest>
```

2. Along with the HTML tag, include the following javascript tag to load the Web Component.

```
<script src="https://localhost:9098/bootstrap-wctest.js ></script>
```

3. To pass the integers as input, pass them as attributes to the html tag.

![Web Component Integration in Example](/learn/assets/webcomponent-integration-in-example.png)

### Result

By following these steps the Web Component will be rendered.

![Result Preview](/learn/assets/result-preview.png)

Once it’s rendered, test its functionality within the parent application to ensure proper behavior. After successful testing, deploy the application to production.





