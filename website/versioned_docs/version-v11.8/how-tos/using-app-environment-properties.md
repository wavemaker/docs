---
title: "Using App Environment Properties"
id: "using-app-environment-properties"
---
---
App environment properties are custom server side properties defined by the app developer to externalize certain properties into configuration profiles so that those property values can differ for a different environment.

In this post, we will see a simple usage example of the App Environment property.

App Environment properties need to be set for Development Profile. These are then applied to other profiles and the values can be changed for the specific environment.

### Development Profile
To add an App Environment property for development profile, 
1. Go to: **Settings** -> **Config Profile** -> **Development** -> **App Environment**
2. Specify ‘welcome’ with value as ‘Welcome to WaveMaker’.  

[![](/learn/assets/config_howto_appenv1.png)](/learn/assets/config_howto_appenv1.png)

To change the property value in deployment profile
1. Go to **Settings -> Config Profile -> Deployment -> App Environment** 
2. Modify the old value and click on Apply button. For example, you can change the property key ‘welcome’ value to ‘Welcome to Cloud’. To save the changed value, click **Apply**.  

[![](/learn/assets/config_howto_appenv2.png)](/learn/assets/config_howto_appenv2.png)

## How to use
There are three ways to use the app environment values:

1.  set them as data type values for the Database entities ([for more](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration))  

[![](/learn/assets/config_howto_appenv3a.png)](/learn/assets/config_howto_appenv3a.png)

2.  You can use it to set the parameter values for queries and procedures ([for more details](/learn/app-development/services/database-services/working-with-queries/#query-creation-parameterised))  

[![](/learn/assets/config_howto_appenv3b.png)](/learn/assets/config_howto_appenv3b.png)
3.  You can use the app environment variable welcome in Java service by annotating the variable with `@Value(“${app.environment.welcome}”)`.Include the following import statement to the Java Service:  

```Java    
import org.springframework.beans.factory.annotation.Value;
```
      
Please note that the data type for properties can be one of the primitive types or String. Spring will take care of converting the value to the assigned data type.  

[![](/learn/assets/config_howto_appenv3.png)](/learn/assets/config_howto_appenv3.png)

This property, when deployed with development profile, will have the value “Welcome to WaveMaker” while when deployed with deployment profile will have the value “Welcome to Cloud”