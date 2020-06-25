---
title: "PostgREST OpenAPI support in WaveMaker"
author: Nikhilesh K V
---

WaveMaker has added support for integration with [OpenAPIs](https://www.wavemaker.com/learn/blog/2020/04/21/wavemaker-openapi-import) in 10.4.  As we are trying out more and more variations of OpenAPI documents from different sources of generation tools, our OpenAPI parser is evolving too. One such example is when we tested an OpenAPI document generated through [PostgREST](http://postgrest.org/en/v7.0.0/). In this blog we'll discuss what changes we have made in 10.5 in order to support OpenAPI documents generated from such sources.
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
The above document indicates that the POST API expects a body parameter of the type Employee, therefore expecting empId and empName.

Now let us see an OpenAPI document generated out of PostgREST.
```
{
    "paths":{
        "/todos":{
            "post":{
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
                ]
            }
        }
    },
    "definitions":{
        "todos": {
            "required": [
                "id",
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
