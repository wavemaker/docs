---
title: "Java Integration Services"
id: "java-integration-services"
---
---

If you want more control or you are more comfortable working with Java, you can invoke various services like DB, Feed, SOAP and Security services from Java using `@Autowired` the service files. 

The **autowiring feature of spring framework** enables you to inject the object dependency implicitly. It internally uses setter or constructor injection. The advantage of autowiring is, it requires the less code because we don't need to write the code to inject the dependency explicitly. 

:::note
REST Services cannot be invoked.
:::

## Accessing current logged in user details

To access the Logged in user details in an app that is secured, you need to import the security service. The **Security Service** import can be done using the following code snippet.

```
import com.wavemaker.runtime.security.SecurityService;

@Autowired
public SecurityService securityService;
    
public String getLoggedUser() {
    String loggedUser = securityService.getUserName ();
    return loggedUser ;
}
```
## Accessing external Java libraries

There are two ways in which this can be achieved:

1. Exporting the project to an IDE of your choice and changing the code as per your requirements and importing it to WaveMaker. This is possible since the code generated for WaveMaker projects is **Maven** complaint. [Export Project](/learn/app-development/dev-integration/import-export-update-apps/#export-project)
2. Importing the **jar** files as external resource and using them within your app. [Import Resource](/learn/app-development/services/3rd-party-libraries)

### Invoking Imported Web Services

Various [Web Service can be Integrated](/learn/app-development/services/web-services/web-services/) into WaveMaker apps. These services can be invoked from Java Services.

For **Soap Service** import following is the code snippet.

:::note
Calculator is WSDL service which was imported.
:::

```
import com.wavemaker..services.calculator.*;
import com.wavemaker..services.calculator.services.*;

@ExposeToClient
public class MyJavaService {

    @Autowired
    public CalculatorService calculatorService;

    public AddResponse wsdlfromjava(float x,float y){
        Add add = new Add();
        add.setX(x);
        add.setY(y);
        return calculatorService.add(add);
    }
}
```
For **Feed Service** import following is the code snippet
```
import com.wavemaker.runtime.feed.service.FeedService;
import com.wavemaker.runtime.feed.model.Feed;

@Autowired
FeedService feedService;
    
public Feed feedfromJavaService(String feedUrl) {
    Feed myFeed = feedService.getFeed(feedUrl);
    return myFeed;
}
```
For **Feed With Auth Service** import following is the code snippet
```
public Feed authFeedfromJavaService(String feedURL, String username, String password, int   connectionTimeout) {
    Feed authFeed = feedService.getFeedWithHttpConfig(feedUrl,username,password,connectionTimeout);
    return authFeed ;
}
```
