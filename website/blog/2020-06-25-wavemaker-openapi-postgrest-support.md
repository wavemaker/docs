---
title: "PostgREST OpenAPI support in WaveMaker"
author: Nikhilesh K V
---

WaveMaker has added support for integration with [OpenAPIs](https://www.wavemaker.com/learn/blog/2020/04/21/wavemaker-openapi-import) in 10.4.  However, the OpenAPI definition document for REST APIS generated using [PostgREST](http://postgrest.org/en/v7.0.0/) looks different than a document generated using Spring. Support for such documents has been added in 10.5.
<!-- truncate -->

![OpenApi](/learn/assets/postGRESTlogo.png)

## Introduction to PostgREST

PostgREST is a standalone web server that turns your PostgreSQL database directly into a RESTful API. The structural constraints and permissions in the database determine the API endpoints and operations.

## Structure of PostgREST generated OpenAPI Documents

Generally, the structure of an OpenAPI document generated out of a Spring/Node etc app looks like this.
```
   {
       "swagger":"2.0",
       "info":{
       },
       "host":"springboot.herokuapp.com",
       "basePath":"/",
       "tags":[
           {
               "name":"Employee",
               "description":"Rest Apis for Employee crud"
           }
       ],
       "schemes":[
       "https"
       ],
       "paths":{
           "/employees":{
               "post":{
                   "tags":["Employee"],
                   "summary":"Adding the Employee",
                   "operationId":"addEmployeeUsingPOST",
                   "consumes":["application/json"],
                   "produces":["*/*"],
                   "parameters":[
                       {
                           "in":"body",
                           "name":"employee",
                           "description":"employee",
                           "required":true,
                           "schema":{
                                "$ref":"#/definitions/Employee"
                           }
                       }
                   ],
                   "responses":{
                       "200":{
                           "description":"OK",
                           "schema":{
                                "$ref":"#/definitions/Employee"
                           }
                       }
                   },
                   "deprecated":false
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
The above document indicates that the POST API expects a body parameter of the type Employee, therefore expecting empId and empName.

Now let us see an OpenAPI document generated out of PostgREST.
```
{
    "swagger":"2.0",
    "info":{
    },
    "host":"0.0.0.0:3000",
    "basePath":"/",
    "schemes":["http"],
    "consumes":["application/json"],
    "produces":["application/json"],
    "paths":{
        "/todos":{
            "post":{
                "tags":["todos"],
                "parameters":[
                    {
                        "$ref":"#/parameters/body.todos"
                    },
                    {
                        "$ref":"#/parameters/select"
                    },
                    {
                        "$ref":"#/parameters/preferReturn"
                    }
                ],
                "responses":{
                    "201":{
                        "description":"Created"
                    }
                }
            }
        }
    },
    "definitions":{
        "todos": {
            "required": [
                "id",
                "done",
                "task"
            ],
            "properties": {
                "id": {
                    "format": "integer",
                    "type": "integer",
                    "description": "Note:\nThis is a Primary Key.<pk/>"
                },
                "task": {
                    "format": "text",
                    "type": "string"
                },
                "due": {
                    "format": "timestamp with time zone",
                    "type": "string"
                }
            },
            "type": "object"
        }
    },
    "parameters":{
        "preferReturn":{
            "name":"Prefer",
            "description":"Preference",
            "required":false,
            "in":"header",
            "type":"string"
        },
        "select":{
            "name":"select",
            "description":"Filtering Columns",
            "required":false,
            "in":"query",
            "type":"string"
        },
        "body.todos":{
            "name":"todos",
            "description":"todos",
            "required":false,
            "schema":{
                "$ref":"#/definitions/todos"
            },
            "in":"body"
        }
    }
}
``` 
The difference here is that the parameters for POST API are references to the **parameters** object which in turn refers to the **definitions** object(schema.$ref for body.todos). By parsing this, we identify that the API expects these parameters.
- Prefer in header
- select in query
- id,task,due in Request Body

## Conclusion

By analysing different kinds of OpenAPI documents, We are making our OpenAPI document parser as comprehensive as possible.
