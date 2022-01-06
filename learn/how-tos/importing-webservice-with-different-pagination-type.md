---
title: "Importing webservice with a different pagination format"
id: ""
---
---

In this document we will learn how we can import a webservice that has pagination different from the one supported in WM. 

## Introduction

If a webservice has request/response parameters as below, then the widgets (like datatable, list etc.,) will be able to detect pagination and the server side pagination will work out of the box for the widgets. The below response is a spring's [Page](https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Page.html) object. But, if the request/response parameters differs from the below, then the server side pagination will not work. We will have to invoke the API inside a javaservice and explicitly return a Page object from the javaservice.

**Request**:

`GET /api?page=2&size=20`

**Response**:

```
{
    "content" : [
        // list of the resources
    ],
    "empty" : false,
    "first" : false,
    "last"  : true,
    "number": 1,
    "numberOfElements" : 10,
    "size"  : 20,
    "sort" : [],
    "totalElements" : 30,
    "totalPages" : 2    
}
```

The above response here is spring's [

## Steps to Create the JavaService

In this example, we will assume an API accepting limit (instead of size) and page parameters, ex: `GET /employee?page=1&limit=2`, and the response in below format. 
```
{ 
	"records" : [
        {
            "empId" : 1,
            "firstname" : "Eric",
        },
    ],
	"totalRecords": 5,
    "pageSize" : 2,
    "page" : 1
}
``` 

1.  [Create a javaservice](learn/app-development/services/java-services/java-service#creating-a-java-service) and specify a name to the service (let's say employeeService)
2. Create the required model classes involved in request/response of the web service. In this example, we will create a class for Employee and for the actual webservice response. Place the files in the package "com.\<projectname\>.\<servicename\>.model".
 ```java
import java.util.List;
public class ApiResponse {

    private List<Employee> records;
    private int totalRecords;
    private int pageSize;
    private int page;

    /* Getters and Setters here*/

}
 ```
 ```java
 public class Employee {

    private int empId;
    private String firstname;

    /* Getters and Setters */

 }
 ```
3. Create a method in the javaservice with a pageable argument (pageable represents the page,size and sort query parameters). Invoke the webservice using RestTemplate, and pass the acutal pagination parameters accepted by the API. The response is then wrapped in a Page object and returned from the method. 
 ```
import com.project.<employeeService>.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;


 @ExposeToClient
 public class MyJavaService {

     RestTemplate restTemplate = new RestTemplate();

     public Page<Employee> getEmployee(Pageable pageable){
        final String URL = "<request-endpoint>";

        Map<String,String> parameters = new HashMap<>();
        parameters.put("limit", String.valueOf(pageable.getPageSize()));
        parameters.put("page", String.valueOf(pageable.getPageNumber()));

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(URL, ApiResponse.class,parameters);
        ApiResponse apiResponse = response.getBody();
        Page<Employee> page = new PageImpl<>(apiResponse.getRecords(),pageable, ApiResponse.getTotalRecords());
        return  page;
    }
 }
 
 ```

4. In the studio, you can now create the variable for the javaservice and bind it to the data widgets.









