---
title: "Using App Environment Properties"
id: ""
---

App environment properties are custom server side properties defined by the app developer to externalize certain properties into configuration profiles so that those property values can differ for a different environment.

In this post, we will see a simple usage example of the App Environment property.

App Environment properties need to be set for [Development Profile](http://[supsystic-show-popup id=109]). These are then applied to other profiles and the values can be changed for the specific environment.

**Development Profile**: Add an App Environment property for development profile (Settings -> Config Profile -> Development -> App Environment) 'welcome' with value as 'Welcome to WaveMaker'. [![](../assets/config_howto_appenv1.png)](../assets/config_howto_appenv1.png)

To change the property value in deployment profile, go to **Settings -> Config Profile -> Deployment -> App Environment** and modify the old value and click on Apply button. For instance continuing with the above example, you can change the property key 'welcome' value to 'Welcome to Cloud'. To save the changed value, click on Apply button. [![](../assets/config_howto_appenv2.png)](../assets/config_howto_appenv2.png)

**Usage**: There are three ways to use the app environment values:

1. set them as data type values for the Database entities ([for more](https://www.wavemaker.com/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)) [![](../assets/config_howto_appenv3a.png)](../assets/config_howto_appenv3a.png)
2. You can use it to set the parameter vlues for queries and procedures ([for more details](https://www.wavemaker.com/learn/app-development/services/database-services/working-with-queries/#query-creation-parameterised)) [![](../assets/config_howto_appenv3b.png)](../assets/config_howto_appenv3b.png)
3. You can use the app environment variable welcome in Java service by annotating the variable with `@Value(“${app.environment.welcome}”)`.Include the following import statement to the Java Service:
    
    import org.springframework.beans.factory.annotation.Value;
    
    Please note that the data type for properties can be one of the primitive types or String. Spring will take care of converting the value to the assigned data type. [![](../assets/config_howto_appenv3.png)](../assets/config_howto_appenv3.png)
    
    This property, when deployed with development profile, will have the value "Welcome to WaveMaker" while when deployed with deployment profile will have the value "Welcome to Cloud"
