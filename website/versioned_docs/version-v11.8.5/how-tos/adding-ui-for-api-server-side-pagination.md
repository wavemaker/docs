---
title: "Adding UI Pagination for API Server-side Pagination"
id: "adding-ui-for-api-server-side-pagination"
sidebar_label: "UI for API Server-side Pagination"
---
---

Pagination is a way to represent data in sets of pages. Server-side pagination controls how these sets are retrieved from the API. It is useful when your application wants to display records with a specific order or filter criteria the API sets out. For example, an Instagram feed with a Cursor pagination; it retrieves a set of five latest posts based on a timestamp as you scroll.

In WaveMaker, add UI pagination for representing APIs supporting Server-side pagination using a bit of JavaScript API exposed on the widgets such as List, Table, and more.

## Types of Pagination

Types of Server-side pagination WaveMaker supports:

- Offset
- Page 
- Cursor

### Widgets and Services Support

- **Supported Widgets**: Data widgets, including Data Table, List, Cards
- **Supported Services**: Web Services and Imported APIs  

## Configuring Pagination Parameters

Configure pagination parameters for imported API using the setPagination method. It renders Widget's data, ensuring the UI is paging through data and making the API calls with appropriate input parameters.

### Set Pagination

The **setPagination** method is exposed on all service variables to support Server-side pagination. 

You can set the pagination on a variable:

1. **Page.onReady** at the Page level
2. **App.onAppVariablesReady** at app.js functions


## Offset

This method uses **offset** and **limit** query parameters, most suitable for using explicit or fixed data that you toggle through. 

### Configuring Offset

The following code snippet describes how to configure Offset pagination.

- Create a [Service Variable](/learn/app-development/variables/web-service#how-to-create-a-service-variable).
- Drag-n-drop a data widget, for example, Data table.
- Bind the Data Table to Service Variable.
- Go to the Script tab, and configure Offset pagination as described below. 

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

### Configuring Page

The following code snippet describes how to configure Cursor pagination.

- Create a [Service Variable](/learn/app-development/variables/web-service#how-to-create-a-service-variable).
- Drag-n-drop a data widget, for example, Data table.
- Bind the Data Table to Service Variable.
- Go to the Script tab, and configure Cursor pagination as described below. 

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

Cursor works by returning a pointer to a specific item in the set of data. On subsequent requests, the API returns results after the given pointer.

### Configuring Cursor

The following the code snippet describes how to configure the Cursor pagination.

- Create a [Service Variable](/learn/app-development/variables/web-service#how-to-create-a-service-variable).
- Drag-n-drop a data widget; for example, Data table.
- Bind the Data Table to Service Variable.
- Go to Script tab, configure Cursor pagination as described below. 

```js
{
   type: ‘cursor’,
   input: {
       page: 'page'
   },
   output: {
       next: '$header.x-links-next',
       prev: '$header.x-links-previous'
   }
}
```

### Example

API: https://sampleapi.com/v2/users?page=1

```js
Sample Response: [.....{}]
Sample Response Headers:

x-links-current: https://gorest.co.in/public/v2/users?page=2
x-links-next: https://gorest.co.in/public/v2/users?page=3
x-links-previous: https://gorest.co.in/public/v2/users?page=1
x-pagination-limit: 20
x-pagination-page: 1
x-pagination-pages: 138
x-pagination-total: 2751
```

## JMES Library

:::note
When providing values for keys to the input and output parameters, you must follow JMES guidelines.
:::

JMESPath allows you to specify how to extract elements from a JSON document declaratively. It is a query language for JSON. Define paths using JMES as below. Using the “jmespath” library to evaluate JMES expressions. For more information, see on [more about JMES](https://jmespath.org/)

### Example

Pagination controls can be sent both as the body of an HTTP Request or an HTTP Header. The following example shows how to send these in an HTTP header.

**Response headers**:

```
{ "status":{"message":[{"message_TYPE":"SU","messageDesc":"SUCCESS","messageCode":"0000"}]},
"X-WM-pagination":{"totalRecordCount":"75","nextStartIndex":"11","hasMoreRecords":"Y","numRecReturned":"2"}}
```

**hasMoreItems**: '$header."X-WM-pagination".hasMoreRecords == Y'
