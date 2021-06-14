---
title: "PostgREST OpenAPI support in WaveMaker"
author: Nikhilesh K V
---

WaveMaker has added support for importing API that are documented using [OpenAPIs, Swagger](/learn/blog/2020/04/21/wavemaker-openapi-import) specification in 10.4. However building a [robust](https://en.wikipedia.org/wiki/Robustness_principle) OpenAPI support is very important as different API while using OpenAPI/Swagger document their endpoints in subtly different ways. We tried importing OpenAPI documents from different API sources. One such example is when we tested an OpenAPI document generated through [PostgREST](http://postgrest.org/en/v7.0.0/). In this blog we'll discuss what changes we have made in 10.5 in order to support OpenAPI documents generated from such sources.
<!-- truncate -->

![OpenApi](/learn/assets/postGRESTlogo.png)

## Introduction to PostgREST

PostgREST is a standalone web server that turns your PostgreSQL database directly into a RESTful API. The structural constraints and permissions in the database determine the API endpoints and operations.

## Structure of PostgREST generated OpenAPI Documents

Generally, the structure of an OpenAPI document generated out of a Spring/Node etc app looks like this.
```
   {
       "paths":{
           "/employees":{
               "post":{
                   "parameters":[
                       {
                           "in":"body",
                           "name":"employee",
                           "description":"employee",
                           "required":true,
                           "schema":{
                                "$ref":"#/definitions/Employee"
                           }
                       },
                       {
                           "in":"header",
                           "name":"Prefer",
                           "description":"Preference",
                           "required":false,                           
                           "type":"string"
                       }
                   ]

               }
           }
       },
       "definitions":{
           "Employee":{
               "type":"object",
               "properties":{
                   "empId":{
                        "type":"string"
                   },
                   "empName":{
                        "type":"string"
                   }
               },
               "title":"Employee"
           }
       }
   }
```
The above document indicates that the POST API expects an **employee** parameter of the type **Employee** in body and a **Prefer** parameter in header, therefore expecting the below parameters:
- Prefer in header
- empId and empName in Request Body

Now let us see an OpenAPI document generated out of PostgREST.
```
{
    "paths":{
        "/employees":{
            "post":{
                "parameters":[
                    {
                        "$ref":"#/parameters/body.employee"
                    },
                    {
                        "$ref":"#/parameters/preferReturn"
                    }
                ]
            }
        }
    },
    "definitions":{
        "Employee": {
            "type": "object",
            "properties": {
                "empId":{
                    "type":"string"
                },
                "empName":{
                    "type":"string"
                }
            }            
        }
    },
    "parameters":{
        "preferReturn":{
            "in":"header",
            "name":"Prefer",
            "description":"Preference",
            "required":false,
            "type":"string"
        },
        "body.employee":{
            "in":"body",
            "name":"employee",
            "description":"employee",
            "required":true,
            "schema":{
                "$ref":"#/definitions/employee"
            }            
        }
    }
}
``` 

Not only does WaveMaker allow importing of the REST API, but by parsing the entity definitions we generate user interface that handles create, read, update, delete of the entities. WaveMaker form generates form fields corresponding to the entity definition in the OpenAPI documentation. 

If you have a look at the request parameters for the POST API, you can see that they are references to a different object in the document. So we will have to parse these parameters from the root level **parameters** object. On having a closer look at the **body.employee** parameter, we see that it is of the type **Employee**. We will have to parse its properties from the root level **definitions** object. By parsing these, we identify that the API expects the below parameters:
- Prefer in header
- empId and empName in Request Body

Since we did not have this kind of parsing logic in 10.4, we were unable to extract the form fields on dragging a Form widget for **Employee** Entity.

> This feature is part of WaveMaker 10.5 release. [Checkout more details on what is included in this release](learn/wavemaker-release-notes/v10-5-0).

## Conclusion

The OpenAPI support in WaveMaker has been around for few months now and with this release we are making this more robust. Our target is to be able to import API from varied sources so that our users can quickly build out web, mobile applications. We would love to hear from you, if you have tried this feature out. Write to us at info@wavemaker.com. 
