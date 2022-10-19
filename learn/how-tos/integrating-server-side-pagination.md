---
title: "Integrating Pagination for Imported APIs"
id: "integrating-server-side-pagination"
sidebar_label: "Pagination for Imported APIs"
---
---

Pagination is a process that separates data into sets. Server-side pagination controls how these sets are retrieved from the database. It is useful when your application does not want to display All records at once. Instead, request data with a specific order or filter criteria the API sets out—for example, an Instagram feed. You can configure it with a timestamp of when a post was published, retrieving a set of five recent posts when you keep scrolling.

In WaveMaker, you can do this by configuring the DSL (Domain Specific Language) method to the imported API, allowing you to seamlessly work with data widgets. 

- **Supported Widgets**: Data widgets, including, Data Table, List, Cards
- **Supported Services**: Web Services and Imported APIs

## Configuring Pagination Parameters

Configure pagination parameters for imported API using the setPagination method. The platform renders Widget's data, ensuring the UI paginates through data, and making the API calls with appropriate input parameters.

### Set Pagination

The **setPagination** method is exposed on all service variables to support server-side pagination. 

You can set the pagination on a variable:

1. **Page.onReady** at the Page level
2. **App.onAppVariablesReady** at app.js functions

## Types of Pagination

Types of server-side pagination supported:

- Offset
- Page 
- Cursor

## Offset

This method uses **offset** and **limit** query parameters, most suitable for using explicit, static data that you toggle through. 

### Code snippet

The following the code snippet describes how to configure the offset based pagination.

```js
{
   x-WM-PAGINATION_INFO: 
     type: ‘paginationType’
     input: {
        offset: ‘keyname.path’,
        size: ‘keyname.path’,
      },
      output: {
        size: ‘${position}.path’,
        totalElements: ‘${position}.path’,
        hasMoreItems: ‘${position}.path’,
      }
}
```

```js
Page.onReady = function() {
Page.Variables.serviceVariable2.setPagination({	
   type: ‘offset’,
   input: {
       offset: '$offset',
       size: '$limit'
   },
   output: {
       size: '$body."_meta"."$limit"',
       totalElements: '$body."_meta".itemCount',
       hasMoreItems: '$body."_meta".hasMoreItems'
   }
}
) 
}
```

### Offset Based Input Configuration

- **type**: Type of pagination should be provided (offset / page / cursor)
- **input**: Will contain information of the input parameters that needs to be sent in the API
- **input.size**: Number of records that needs to be fetched in the response of API. 
- **size-value**: Should provide the parameter’s name in the request which will have size information. If the value resides inside an object, developers should provide the parameter name followed by the path.
- **input.offset**: Number of records that needs to be skipped 
- **offset-value**: Should provide the parameter’s name in the request which will have offset information. If the value resides inside an object, developers should provide the parameter name followed by the path.

### Example

API: https://sampleapi.com?$offset=0&$limit=5

```
Sample Response:
{
	data: [...{}],
_meta: {
	$limit: 5,
	$offset: 5,
	itemCount: 30,
hasMoreItems: true 
}
}
```

### Configuration

x-WM-PAGINATION_INFO: 

## Page

The set is divided into pages.The API accepts a page parameter which is an integer that indicates the data in that particular page needs to be returned. In this pagination, you can jump to any page and fetch data in that particular page and also make parallel requests.

### Code snippet

The following the code snippet describes how to configure the page based pagination.

:::note
- **type**: Type of pagination should be provided (offset / page / cursor)
- **input**: Will contain information of the input parameters that needs to be sent in the API
:::

```js
{
   x-WM-PAGINATION_INFO: 
     type: ‘paginationType’
     input: {
        page: ‘keyname.path’,
        size: ‘keyname.path’,
      },
      output: {
         size: ‘${position}.path’,
         page: ‘${position}.path’,
        totalElements: ‘${position}.path’,
        hasMoreItems: ‘${position}.path’,
      }
}
```

### Page Based Input Configuration

input.size : Number of records that needs to be fetched in the response of API. 
size-value: Should provide the parameter’s name in the request which will have size information. If the value resides inside an object, developers should provide the parameter name followed by the path.

input.page: Page number from which data needs to be fetched.
page-value: Should provide the parameter’s name in the request which will have page information. If the value resides inside an object, developers should provide the parameter name followed by the path.


### Example

API: https://sampleapi.com?size=10&page=1

```js
Sample Response:
{
	data: [...{}],
totalPassengers: 73760,
totalPages: 7376
}
```

### Configuration 

```js
x-WM-PAGINATION_INFO: {
   type: ‘page’,
   input: {
       page: 'page',
       size: ‘size’
   },
   output: {
       totalElements: '$body.totalPassengers'           
  }
}
```

## Cursor Pagination

This pagination works by returning a pointer to a specific item in the dataset. On subsequent requests, the server returns results after the given pointer.

### Code snippet

The following the code snippet describes how to configure the cursor based pagination.

:::note
- **type**: Type of pagination should be provided (offset / page / cursor)
- **input**: Will contain information of the input parameters that needs to be sent in the API
:::

```js
{   
  x-WM-PAGINATION_INFO: 
    type: ‘paginationType’
    input: {
      page: ‘keyname.path’
    },
    output: {
      next: ‘${position}.path’,
      prev: ‘${position}.path’,
     }
}
```

### Example: Cursor

API: https://sampleapi.com/v2/users?page=1

```js
Sample Response: [.....{}]
Sample Response Headers:

x-links-current: https://gorest.co.in/public/v2/users?page=1
x-links-next: https://gorest.co.in/public/v2/users?page=2
x-links-previous: 
x-pagination-limit: 20
x-pagination-page: 1
x-pagination-pages: 138
x-pagination-total: 2751
```

### Configuration

```js
x-WM-PAGINATION_INFO: {
   type: ‘cursor’,
   input: {
       page: 'page'
   },
   output: {
       next: '$header.X-WM-X-Links-Next',
       prev: '$header.X-WM-X-Links-Previous'
   }
}
```

### Cursor Based Input Configuration

input.page: Page number from which data needs to be fetched.
page-value: Should provide the parameter’s name in the request which will have page information. If the value resides inside an object, developers should provide the parameter name followed by the path.


output: Will contain information of the input parameters that needs to be sent in next request

The key values inside the output object should be prefixed with either of the following values - $body, $header
$body - should be used, if the pagination information is present in the response body.
$header - should be used, if the pagination information is present in the response headers.


Output key values : Should provide the path of the key followed by the prefix($body/$header) in which value of the respective key will be present.


## Page and Offset Output Configuration

output.size: Will contain information about the size of records that should be fetched in the subsequent request. 

output.totalElements: Will contain information about the total dataset length. If the developer wants to provide a predefined length if the total dataset length is not known to display the pages , can configure a variable called $minValue as a value to the totalElements key and provide an integer as a value.


output.hasMoreItems: Will contain information where there are records that can be fetched in next request or not

Output.page: Will contain information about the next page number 

The above keys are optional, if not provided the values are calculated from the platform.


Cursor Based Output Configuration:

Output.next: Will contain information about the cursor value for the next page.

Output.prev: Will contain information about the cursor value for the previous page.

## JMES Library

While providing values for keys to the input and output parameters, developers should follow JMES guidelines.
JMESPath  allows you to declaratively specify how to extract elements from a JSON document. It is a query language for JSON. Developers should define paths using JMES as below. Using “jmespath” library to evaluate JMES expressions. For more information on JMES visit the following link:  https://jmespath.org/

### Example

**Response headers**:

```
{	   "status":{"message":[{"message_TYPE":"SU","messageDesc":"SUCCESS","messageCode":"0000"}]},
"X-WM-pagination":{"totalRecordCount":"75","nextStartIndex":"11","hasMoreRecords":"Y","numRecReturned":"2"}}
```

**hasMoreItems**: '$header."X-WM-pagination".hasMoreRecords == Y'


### Generic Example


Data:
```js
{
  "people": [
    {
      "age": 20,
      "other": "foo",
      "name": "Bob"
    },
    {
      "age": 25,
      "other": "bar",
      "name": "Fred"
    }
  ]
}
```

Expression: 

```people[?age > `20`].[name, age]```

Output:

```
[
     [
        "Fred",
         25
     ]
]
```
