---
title: "3rd Party REST Services"
id: ""
---

While REST stands for Representational State Transfer, which is an architectural style for networked hypermedia applications, it is primarily used to build Web services that are lightweight, maintainable, and scalable. A service based on REST is called a RESTful service. REST is not dependent on any protocol, but almost every RESTful service uses HTTP as its underlying protocol.

Here we will look at:

- various [configuration](#configure-API) options
- [testing](#test-API) the configuration before import
- [configuring service](#configure-REST-service)
- [invoking service](#REST-service-usage)

WaveMaker allows configuring the following fields while importing a REST Service:

- **Method**: can be GET, POST, PUT, HEAD, PATCH, or DELETE
- **Url**: the service URL hosting the REST service
- **Use Proxy:**
    1. For _Web Applications_, while importing the service, Use Proxy flag can be turned off if you do not want to hit the service through the proxy server. **Note**: while testing the REST API without proxy if a CORS related issue is observed, you will be notified of the same and you can proceed only by enabling proxy.
    2. For _Mobile Applications_, there is no option to configure proxy settings. By default, the request made to the target REST service will be a direct hit. However, while testing the service in the WaveMaker, a direct call is made. If a CORS failure is encountered, then the call is made through proxy behind the scenes and the service is imported with the proxy as true for WEB. In the mobile app, however, the call will be a direct one.
- **Authorization**
    - **HTTP Authentication** can be set to
        - None is the default setting
        - Basic can be used for basic authentication using a User Name and Password
        - OAuth 2.0 will allow you to integrate with an OAuth Provider. WaveMaker provides support for most OAuth providers. By selecting from the list, a semi-populated Configuration dialog is displayed. Complete the Configuration by giving the Client Id, Client Secret, etc. You can add a new provider too. [Know more](/learn/app-development/services/web-services/oauth-2-0-rest-services/).
- **REST Configuration:** Usually, the publisher of a REST service provides information on the input and output of the REST service. You can use that information to configure the REST service definition.
    1. The _query parameters_ will be set as per the requirement of the REST service within curly brackets eg ?_param = value_ and multiple query params separated by _&_, in the below example the origin and destination;
    2. The path param can be set by adding the parameter at the end of the URL within curly brackets ie _{path\_param}_, and
    3. The _header param_ can be set by adding the appropriate details like the parameter name and type. **Note**: These parameters can be seen as the _Input Fields_ in the _data_ section of the service variable when created and can be bound appropriately.
- **Response **format can be edited to suit your app needs.

Following are the steps to import and use a REST web service within a WaveMaker app.

## Test REST Service API

1. From **Resources** choose **Web Services** and click on **+**. [![](/learn/assets/Web_Service1.png)](/learn/assets/Web_Service1.png)
2. From the **Web Service** dialog, select **REST** icon.
3. **Test**:
    
    1. Enter the REST service URL,
    2. Configure to set the HTTP Authentication and click **Test** to verify the response, proceed with the default setting of NONE.
    3. Configure the Headers for the name and test value parameters for the same
    4. Configure the query, path and header parameters etc. if needed.
    5. Click **Import** to proceed. **Note**: IMPORT button will be activated only on the success of the TEST.
    
    [![](/learn/assets/rest_import.png)](/learn/assets/rest_import.png)

## Configure REST Service

1. The new service created can be accessed from the **Web Services** under _Rest Service_ section.
2. Click on the service name listed under the _Web Service_ section and the **Service Settings** are displayed.
3. You can make changes to the service settings. Once you make the changes, **Test** the changes before **saving** them. This is particularly helpful when the REST service has undergone any changes or when it needs additional input parameters. You can see the Response Format from the REST service in the JSON format as required by the platform. _Post ver 9.1 release_, you can make changes to the Authentication option, too. [![](/learn/assets/rest_settings.png?v=20)](/learn/assets/rest_settings.png?v=20)

### REST Services with Input Data

When importing REST Service which requires string or file as input, set the **Content Type** from Body tab to _multipart/form-data_ to see the options for the Request Body parameters. The type of these parameters can be set to:

- - File for file or blob type data (Provision is there to upload a test file).
    - Text for string type data.
    - Text (text/plain) and JSON (application/json) for invoking WaveMaker generated internal REST APIs.

[![](/learn/assets/rest_formdata.png?v=20)](/learn/assets/rest_formdata.png?v=20)

## REST Service Usage

To use the Service data within the app, you need to create a Variable. [Variable Access](http://[supsystic-show-popup id=105])We have seen how a 3rd Party REST service can be imported and used within a WaveMaker app.

