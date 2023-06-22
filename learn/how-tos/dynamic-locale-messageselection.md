---
title: "Passing i18n messages dynamically"
id: "dynamic-locale-messageselection"
---
In this document we will be walking through the steps to pass i18n Loacalization messages dynamically.

- You have to create a service or an API that returns the dynamic i18n messages, then you can write a custom locale filter which will set the dynamic messages.
- The filter which intercepts the requests to localization files and calls the external rest service and the response from the external service will be sent to the caller.
- You can write your customization in the filter as per your requirement. Make sure that the external service should pass the messages in the same JSON format as our default Json file like en.json.

To pass an i18n Localization messages dynamically in the App follow the steps mentioned below:

Step 1:
Import a mock api in app evnironment whose response is same as the message in the same JSON format as our default Json file like language json(ex:en.json).

![selectLocale-Image3](/learn/assets/selectLocale-Image3.png)

Step2:
Create a custom java file in src/main/java directory and add the below java code.
``` java
//FilePathProject:Externalizelocalesrc/main/java/com/wm/customlocalefilter/CustomLocaleFilter.java

import java.io.IOException;
import java.io.Printwriter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.servlet.*;
import com.wavemaker.runtime.rest.model.HttpResponseDetails;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import org.springframework.web.context.support.WebApplicationContextUtils;

public class CustomLocaleFilter implements Filter{

    private static final Logger logger=LoggerFactory.getLogger(CustomLocaleFilter.class);

    public String url;
    public void init(FilterConfig config) throws ServletException {
        //Accessing Lacale Message Service URL from App Environment Variables
        url=WebApplicationContextUtils.getRequiredWebApplicationContext(config.getServletContext()).getEnvironment().getProperty("app.environment.localeUrl");
            logger.info("url………….... + url);
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
        //Getting the Locale File Name
        String requestURI = httpRequest.getRequestURI();
        String localeName= requestURI.subString(requestURI.lastIndexOf("/") + 1);
        logger.info("localeName.....…... localeName);

        //Invoking the Locale Service URL Using Spring Rest Template
        RestTemplate restTemplate= new RestTemplate();
        String localeUrl=url+"?"+localeName;
        logger.info("localeUrl........" + localeUrl);

        // Fetch JSON response as String wrapped in ResponseEntity
        ResponseEntity<String> localeMessageResponse = restTemplate.getForEntity(localeUrl, String.class);
        String localeMessages = localeMessageResponse.getBody();

        //Setting the Locale Messages
        PrintWriter out=response.getWriter();
        out.print(localeMessages);
    }
  public void destroy() {}
}
```
Step3:
Create a custom xml file in src/main/webapp/WEB-INF directory as shown in the below and add below xml code.
```
<!--File Path: Project: Externalizelocale > src/main/webapp/WEB-INF/user-web.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<!--
This is an appropriate place for user modifications to the web.xml.
Entries from this file will be combined with the default WaveMaker web.xml;
the order is not guaranteed.
Content changes must go between the two tags below.
-->
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                         http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" version="3.1">
        <display-name>Externalizelocale</display-name>

        </welcome-file-list>
            <welcome-file>index.html</welcome-file>
        </welcome-file-list>
    
<filter>
    <filter-name>localeFilter</filter-name>
    <filter-class>com.wm.customlocalefilter.CustomLocaleFilter</filter-class>
</filter>

<filter-mapping>
    <filter-name>localeFilter</filter-name>
    <url-pattern>/resources/i18n/*</url-pattern>
</filter-mapping>


</web-app>
```
Step 4:
Preview the App.