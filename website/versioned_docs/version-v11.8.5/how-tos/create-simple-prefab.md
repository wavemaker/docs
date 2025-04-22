---
title: "Create a Simple Prefab"
id: "create-simple-prefab"
---
---
This post walks you through the creation and usage of a simple Prefab. We will be creating a Prefab which _compares two text strings_ and returns the result. For string comparison, we will be writing a _simple Java_ code.

## Creating the Prefab

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough])
2. Enter a name and description for the Prefab
3. From [Project Configurations](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace), choose Config Prefab under Settings:
    - In the Properties tab, add two _inbound_ properties which will take in the two strings to compare [![](/learn/assets/demo_prefab_inbound-1.png)](/learn/assets/demo_prefab_inbound-1.png) and one _outbound_ property to return the result [![](/learn/assets/demo_prefab_outbound-1.png)](/learn/assets/demo_prefab_outbound-1.png)
    - In the Events tab, add an _event_ (Comparefail) which will be triggered when the comparison of strings fails. The event will be defined in the **JavaScript** of the Prefab, the application using this Prefab will be defining the action for this event. Note, by default two events are already given - Load and Destroy [![](/learn/assets/demo_prefab_event-1.png)](/learn/assets/demo_prefab_event-1.png)
    - You can set the display icon and mention the group for Prefab from the Packaging tab
4. [Add a Java Service](/learn/app-development/services/java-services/java-service/) for the string comparison logic. Use the same names that you gave in the Methods of Prefab Settings, in this case, **String_compare** for _Java Service_ and **confirm** for the _method_ Enter the following method to compare strings:
    
```js
public String confirm(String a, String b) {
    String result = null;
    if (a.equals(b))
    {
        result = "matched";
    }
    else
    { 
        result = "invalid";
    }
    return result;
}

}
```
    
The final Java service should look like this:

```java
/*Copyright (c) 2015-2016 wavemaker-com All Rights Reserved.


This software is the confidential and proprietary information of wavemaker-com You shall not disclose such Confidential Information and shall use it only in accordance with the terms of the source code license agreement you entered into with wavemaker-com*/.

package com.prefabdemo.string_compare;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;

import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;

//import com.prefabdemo.string_compare.model.*;

/**
    * This is a singleton class with all its public methods exposed as REST APIs via generated controller class.
    * To avoid exposing an API for a particular public method, annotate it with @HideFromClient.
    *
    * Method names will play a major role in defining the Http Method for the generated APIs. For example, a method name
    * that starts with delete/remove, will make the API exposed as Http Method "DELETE".
    *
    * Method Parameters of type primitives (including java.lang.String) will be exposed as Query Parameters &
    * Complex Types/Objects will become part of the Request body in the generated API.
    */
@ExposeToClient
public class String_compare {

    private static final Logger logger = LoggerFactory.getLogger(String_compare.class);

    @Autowired
    private SecurityService securityService;

    /**
        * This is sample java operation that accepts an input from the caller and responds with "Hello".
        *
        * SecurityService that is Autowired will provide access to the security context of the caller. It has methods like isAuthenticated(),
        * getUserName() and getUserId() etc which returns the information based on the caller context.
        *
        * Methods in this class can declare HttpServletRequest, HttpServletResponse as input parameters to access the
        * caller's request/response objects respectively. These parameters will be injected when request is made (during API invocation).
        */
    public String sampleJavaOperation(String name, HttpServletRequest request) {
        logger.debug("Starting sample operation with request url " + request.getRequestURL().toString());

        String result = null;
        if (securityService.isAuthenticated()) {
            result = "Hello " + name + ", You are logged in as "+  securityService.getLoggedInUser().getUserName();
        } else {
            result = "Hello " + name + ", You are not authenticated yet!";
        }
        logger.debug("Returning {}", result);
        return result;
    }

    public String confirm(String a, String b) {
        String result = null;
        if (a.equals(b))
        {
            result = "matched";
        }
        else
        { 
            result = "invalid";
        }
        return result;
    }

}
```

5. [Create a Variable](/learn/assets/var_sel.png) to invoke the Java Service (string_compare) and method (confirm) within that service.

[![](/learn/assets/demo_prefab_var.png)](/learn/assets/demo_prefab_var.png)

6. Pass the _inbound parameters_ of the Prefab to the Java Service, by binding them to the input fields accessible from the Data tab.

[![](/learn/assets/demo_prefab_var_data.png)](/learn/assets/demo_prefab_var_data.png) 

[![](/learn/assets/demo_prefab_var_databind.png)](/learn/assets/demo_prefab_var_databind.png)

7. We want the _event_ of the Prefab to be triggered when the _method_ returns an "invalid" message. This can be achieved by writing the appropriate **JavaScript** for the _onSuccess_ event of the method accessible from the Events tab of the Variable. 

[![](/learn/assets/demo_prefab_var_dataevent.png)](/learn/assets/demo_prefab_var_dataevent.png) 

You will find a message guiding you to the location of the JavaScript file. Click the link and use the following code in the JavaScript in the snippet.

```js
Prefab.compareStringonSuccess = function(variable, data) {
    if (data === "invalid") {
        if (Prefab.onComparefail) {
            Prefab.onComparefail();
        }
    }
};
```

8. The result from the Java method needs to be bound to the outbound property declared in the above steps. From the Prefab Settings, Properties tab bind the _result_ of the Java Service to the _outbound_ property of the Prefab. 

[![](/learn/assets/demo_prefab_outbound_afterbind-1.png)](/learn/assets/demo_prefab_outbound_afterbind-1.png)

9. Save and Preview the Prefab. Give the In-bound values:

[![](/learn/assets/Prefab_preview1.png)](/learn/assets/Prefab_preview1.png)

and see the result in the Out-bound properties tab:

[![](/learn/assets/Prefab_preview2.png)](/learn/assets/Prefab_preview2.png)

10. Publish the Prefab. 

[![](/learn/assets/demo_prefab_publish.png)](/learn/assets/demo_prefab_publish.png)

11. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/creating-prefabs/#publish-prefab).
12. The Prefab will be available for use across the Projects. You can see the entry in the Artifacts list from the Developer Utilities on the [Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) and in the Widget Toolbox of any Project within your workspace.

## Using the Prefab in Project

1. Let us now use the above-created Prefab in an application. _Create or Open an application_.
2. From the Artifact Listing, import the above published Prefab.
3. See the Prefab appear in the **Prefab** section of the Toolbox. The group name (Basic, in this example) and the icon are the values set from the Packaging tab of Prefab Settings. 

[![demo_prefab_toolbox](/learn/assets/demo_prefab_toolbox.png)](/learn/assets/demo_prefab_toolbox.png)

4. Drop two _texts_ strings for comparison input to Prefab, a _label_ to hold the result from the Prefab, a _button_ to trigger the Prefab and the _Prefab_ on the canvas. Your canvas should look like this (we have used a Grid Layout for widget placement) 

[![demo_prefab_design](/learn/assets/demo_prefab_design.png)](/learn/assets/demo_prefab_design.png)

5. Bind the _properties (inbound)_ of the Prefab to the two _text box_. 

[![](/learn/assets/demo_prefab_design_inbound.png)](/learn/assets/demo_prefab_design_inbound.png)

6. Bind the _label_ on the canvas to the _result (outbound)_ from Prefab. 

[![demo_prefab_design_result](/learn/assets/demo_prefab_design_result.png)](/learn/assets/demo_prefab_design_result.png)

7. Click event of the _button_ invokes the _Prefab method_. 

[![demo_prefab_design_event](/learn/assets/demo_prefab_design_event.png)](/learn/assets/demo_prefab_design_event.png)

8. Run the application:
    1. Enter the same string in both the text boxes and see the comparison result.
    2. Enter different string in the text boxes and see the comparison result.

## See Also

[Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)  
[Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)  
[Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)  
[Prefab Using JQuery Plugin - showcases using Events and Methods](/learn/how-tos/create-prefab-using-jquery-plugin/)  
