---
title: "Integrating Pagination for Imported APIs"
id: "integrating-server-side-pagination"
sidebar_label: "Pagination for Imported APIs"
---
---

Pagination is a process that separates data into sets. Server-side pagination controls how these sets are retrieved from the database. It is useful when your application does not want to display All records at once. Instead, request data with a specific order or filter criteria the API sets out, such as Offset, Page and Cursor types. For example, Instagram feed with a Cursor pagination; it retrieves a set of five latest posts based on a timestamp, as you scroll.

In WaveMaker, you can achieve Server-side pagination using the DSL (Domain Specific Language) method to the imported APIs, which works seamlessly with the data widgets. 

## Types of Pagination

Types of Server-side pagination WaveMaker supports:

- Offset
- Page 
- Cursor

### Widgets and Services Support

- **Supported Widgets**: Data widgets, including, Data Table, List, Cards
- **Supported Services**: Web Services and Imported APIs  

## Configuring Pagination Parameters

Configure pagination parameters for imported API using the setPagination method. It renders Widget's data, ensuring the UI is paging through data, and making the API calls with appropriate input parameters.

### Set Pagination

The **setPagination** method is exposed on all service variables to support server-side pagination. 

You can set the pagination on a variable:

1. **Page.onReady** at the Page level
2. **App.onAppVariablesReady** at app.js functions


## Offset

This method uses **offset** and **limit** query parameters, most suitable for using explicit or fixed data that you toggle through. 

### How to Configure

- Create a Service Variable.
- Drag-n-drop a data widget; for example, Data table.
- Bind the Data Table to Service Variable.
- Go to Script tab, configure Offset pagination as described below. 

The following the code snippet describes how to configure the offset based pagination.

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

:::note

#### Offset Input Configuration Explained

- **type**: Provide type of pagination, Offset, Page, Cursor.
- **input**: Contains input parameters to send in the API.
- **input.offset**: Number of records to skip.
- **offset-value**: Provide the parameter’s name containing offset information. If the value resides inside an object, provide the parameter name followed by the path.
- **input.size**: Number of records to fetch in the API response. 
- **size-value**: Provide the parameter’s name with size information. If the value resides inside an object, provide the parameter name followed by the path.

#### Offset Output Configuration

- **output.size**: Contains the size of records to fetch in the subsequent request. 
- **output.totalElements**: Contains the total dataset length. If you want to provide a predefined length when the total dataset length is not known to display the pages, you can configure a variable called $minValue as a value to the totalElements key and provide an integer value.
- **output.hasMoreItems**: Contains where the records are to fetch in next request or not.
- **Output.page**: Contains the next page number details.
:::

The above keys are optional, if not provided the values are calculated from the platform.

### Example

```html
API: https://sampleapi.com?$offset=0&$limit=5
```

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

## Page

Page divides set into pages. The API accepts a page parameter of an integer type, indicating specific data the page needs to return. In this pagination, you can jump to any page, retrieve data on that particular page, and make parallel requests.

### How to Configure

The following the code snippet describes how to configure the page based pagination.

```js
{
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

### Page Input Configuration

input.size : Number of records that needs to be fetched in the response of API. 
size-value: Should provide the parameter’s name in the request which will have size information. If the value resides inside an object, developers should provide the parameter name followed by the path.

input.page: Page number from which data needs to be fetched.
page-value: Should provide the parameter’s name in the request which will have page information. If the value resides inside an object, developers should provide the parameter name followed by the path.

### Page Output Configuration

output.size: Will contain information about the size of records that should be fetched in the subsequent request. 

output.totalElements: Will contain information about the total dataset length. If the developer wants to provide a predefined length if the total dataset length is not known to display the pages , can configure a variable called $minValue as a value to the totalElements key and provide an integer as a value.


output.hasMoreItems: Will contain information where there are records that can be fetched in next request or not

Output.page: Will contain information about the next page number 

The above keys are optional, if not provided the values are calculated from the platform.


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

## Cursor Pagination

This pagination works by returning a pointer to a specific item in the set of data. On subsequent requests, the database returns results after the given pointer.

### How to Configure

The following the code snippet describes how to configure the cursor based pagination.

```js
{
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

### Cursor Input Configuration

input.page: Page number from which data needs to be fetched.
page-value: Should provide the parameter’s name in the request which will have page information. If the value resides inside an object, developers should provide the parameter name followed by the path.


output: Will contain information of the input parameters that needs to be sent in next request

The key values inside the output object should be prefixed with either of the following values - $body, $header
$body - should be used, if the pagination information is present in the response body.
$header - should be used, if the pagination information is present in the response headers.

Output key values : Should provide the path of the key followed by the prefix($body/$header) in which value of the respective key will be present.

### Cursor Output Configuration:

Output.next: Will contain information about the cursor value for the next page.

Output.prev: Will contain information about the cursor value for the previous page.

### Example

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

