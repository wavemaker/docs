---
title: "Accessing REST APIs from Java Service"
id: "accessing-rest-apis-java-service"
---
---

Learn how to access REST APIs using Java Service. 

The steps include:

1. How to create a Java Service method to access a Rest Service.
2. How the Java Service can invoke the Rest Service to get the response.

## Files Imported to Java Service 

The following files were imported into the Java Service:
```
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import org.json.JSONObject;
```

## Java Service Method

We will be using the following Java Service Method:

```
public ArrayList<String> restService(String origin, String destination) {
    	ArrayList<String> directionList = new ArrayList<String>();
    	try {
    		URL url = new URL("http://maps.googleapis.com/maps/api/directions/xml?origin="+origin+"&destination="+destination+"&sensor=false");
    		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    		conn.setRequestMethod("GET");
    		if (conn.getResponseCode() != 200) {
    			throw new RuntimeException("Failed : HTTP error code : "+ conn.getResponseCode());
    		}
    		BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
    		String output;
    		while ((output = br.readLine()) != null) {while ((output = br.readLine()) != null) {
      			if(output.contains("<html_instructions>"))      
      			{
      				output = output.substring(output.indexOf(">")+1, output.indexOf("</html_instructions>"));
      				directionList.add(output);
      			}	  			
      		}} conn.disconnect();} 
         catch (MalformedURLException e) {
    	    e.printStackTrace();} 
         catch (IOException e) {
                 e.printStackTrace();}
         return directionList;
    }
```

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/1oqUO7dpA7w7uMv86PWriTCC6v8skIzpR/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## See Also

[How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)  
[How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)  
[How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)  
[How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)  
