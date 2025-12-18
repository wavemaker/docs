# API Workspace

Centralized workspace for managing API integrations, creating services, and configuring API endpoints.

## Overview
The API Workspace provides a comprehensive environment for integrating external APIs, creating custom services, managing API configurations, and testing API endpoints. It simplifies the process of connecting your application to backend services and third-party APIs.

## API Workspace Interface

### Main Components

#### API Services
- List of integrated APIs
- Service configuration
- Endpoint management
- Request/Response mapping

#### API Designer
- Visual API configuration
- Request builder
- Response viewer
- Test console

#### Variables
- Service variables
- Request parameters
- Response data
- Error handling

#### Authentication
- Auth configuration
- Token management
- API keys
- OAuth setup

## Import APIs

### REST API Import

#### Import from URL
1. Click "Import API"
2. Select "REST API"
3. Enter service URL
4. Choose import method:
   - **Swagger/OpenAPI** - Import from specification
   - **WADL** - Import WADL definition
   - **URL** - Manual endpoint configuration

```javascript
// Example: Import from Swagger
Service URL: https://api.example.com/swagger.json
```

#### Manual API Configuration
```javascript
{
  "name": "UserService",
  "baseUrl": "https://api.example.com",
  "endpoints": [
    {
      "name": "getUsers",
      "method": "GET",
      "path": "/users",
      "parameters": []
    },
    {
      "name": "getUserById",
      "method": "GET",
      "path": "/users/{id}",
      "parameters": [
        {
          "name": "id",
          "type": "path",
          "required": true
        }
      ]
    },
    {
      "name": "createUser",
      "method": "POST",
      "path": "/users",
      "body": {
        "name": "string",
        "email": "string"
      }
    }
  ]
}
```

### SOAP API Import

#### Import from WSDL
1. Click "Import API"
2. Select "SOAP Service"
3. Enter WSDL URL
4. Select operations to import
5. Configure namespace mappings

```xml
<!-- Example WSDL URL -->
https://api.example.com/soap?wsdl
```

### GraphQL API Import

#### Import GraphQL Schema
1. Click "Import API"
2. Select "GraphQL"
3. Enter GraphQL endpoint
4. Introspect schema
5. Select queries/mutations

```graphql
# Example GraphQL endpoint
https://api.example.com/graphql
```

## API Configuration

### Service Settings

#### Base Configuration
```javascript
{
  "name": "ProductService",
  "type": "REST",
  "baseUrl": "https://api.example.com/v1",
  "timeout": 30000,
  "retryAttempts": 3,
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}
```

#### Request Configuration
```javascript
{
  "endpoint": "/products",
  "method": "GET",
  "parameters": {
    "query": {
      "page": 1,
      "limit": 10,
      "sort": "name"
    },
    "path": {},
    "headers": {
      "Authorization": "Bearer ${token}"
    }
  }
}
```

#### Response Mapping
```javascript
{
  "dataNode": "data",
  "totalRecords": "total",
  "errorNode": "error",
  "successCondition": "status === 200",
  "transformResponse": function(response) {
    return response.data.map(item => ({
      id: item.productId,
      name: item.productName,
      price: item.cost
    }));
  }
}
```

## Authentication

### API Key Authentication

#### Header-Based
```javascript
{
  "type": "API_KEY",
  "location": "header",
  "name": "X-API-Key",
  "value": "${Variables.apiKey}"
}
```

#### Query Parameter
```javascript
{
  "type": "API_KEY",
  "location": "query",
  "name": "api_key",
  "value": "${Variables.apiKey}"
}
```

### Basic Authentication
```javascript
{
  "type": "BASIC",
  "username": "${Variables.username}",
  "password": "${Variables.password}"
}
```

### Bearer Token
```javascript
{
  "type": "BEARER",
  "token": "${Variables.authToken}"
}
```

### OAuth 2.0

#### Authorization Code Flow
```javascript
{
  "type": "OAUTH2",
  "flow": "authorization_code",
  "authorizationUrl": "https://api.example.com/oauth/authorize",
  "tokenUrl": "https://api.example.com/oauth/token",
  "clientId": "${Variables.clientId}",
  "clientSecret": "${Variables.clientSecret}",
  "scope": "read write",
  "redirectUrl": "${App.baseUrl}/oauth/callback"
}
```

#### Client Credentials Flow
```javascript
{
  "type": "OAUTH2",
  "flow": "client_credentials",
  "tokenUrl": "https://api.example.com/oauth/token",
  "clientId": "${Variables.clientId}",
  "clientSecret": "${Variables.clientSecret}",
  "scope": "api"
}
```

## API Variables

### Service Variables

#### Creating Variables
```javascript
// Create service variable
var userServiceVar = {
  name: "getUsersVar",
  service: "UserService",
  operation: "getUsers",
  autoUpdate: true,
  parameters: {
    page: 1,
    limit: 10
  }
};
```

#### Variable Configuration
```javascript
{
  "name": "productListVar",
  "type": "service",
  "service": "ProductService",
  "operation": "getProducts",
  "inputFields": {
    "category": "electronics",
    "inStock": true
  },
  "dataBinding": {
    "widget": "productList",
    "property": "dataset"
  }
}
```

### Request Parameters

#### Path Parameters
```javascript
// GET /users/{id}
{
  "id": Variables.selectedUserId
}
```

#### Query Parameters
```javascript
// GET /products?category=books&sort=price
{
  "category": "books",
  "sort": "price",
  "page": Variables.currentPage,
  "limit": 20
}
```

#### Body Parameters
```javascript
// POST /users
{
  "name": Widgets.nameInput.datavalue,
  "email": Widgets.emailInput.datavalue,
  "role": Widgets.roleSelect.datavalue
}
```

#### Header Parameters
```javascript
{
  "Authorization": "Bearer " + Variables.authToken,
  "X-Custom-Header": "custom-value"
}
```

## API Testing

### Test Console

#### Request Builder
1. Select API service
2. Choose endpoint
3. Configure parameters
4. Set headers
5. Add body (if POST/PUT)
6. Click "Test"

#### Example Request
```http
GET /api/users?page=1&limit=10 HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json
```

#### Response Viewer
```json
{
  "status": 200,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ],
  "total": 50,
  "page": 1
}
```

### Mock Responses

#### Configure Mock Data
```javascript
{
  "endpoint": "/users",
  "method": "GET",
  "mockEnabled": true,
  "mockResponse": {
    "status": 200,
    "data": [
      {
        "id": 1,
        "name": "Mock User 1",
        "email": "mock1@example.com"
      },
      {
        "id": 2,
        "name": "Mock User 2",
        "email": "mock2@example.com"
      }
    ]
  }
}
```

## Error Handling

### Error Configuration

#### Global Error Handler
```javascript
App.onServiceError = function(error) {
  console.error('Service Error:', error);

  if (error.status === 401) {
    // Unauthorized - redirect to login
    App.navigate('login');
  } else if (error.status === 500) {
    // Server error
    App.showToast('Server error. Please try again.', 'error');
  } else {
    // Generic error
    App.showToast(error.message, 'error');
  }
};
```

#### Service-Specific Error Handler
```javascript
Variables.getUsersVar.onError = function(error) {
  if (error.status === 404) {
    Widgets.userList.show = false;
    Widgets.noDataMessage.show = true;
  } else {
    Widgets.errorMessage.caption = 'Error loading users: ' + error.message;
  }
};
```

### Retry Configuration
```javascript
{
  "service": "ProductService",
  "retryConfig": {
    "maxAttempts": 3,
    "retryDelay": 1000,
    "exponentialBackoff": true,
    "retryOn": [500, 502, 503, 504],
    "onRetry": function(attempt, error) {
      console.log('Retry attempt ' + attempt, error);
    }
  }
}
```

## Custom APIs

### Creating Custom Service

#### Define Service
```javascript
App.Services.CustomService = {
  name: "CustomService",
  baseUrl: "https://api.custom.com",

  getCustomData: function(params) {
    return $http.get(this.baseUrl + '/data', {
      params: params,
      headers: {
        'Authorization': 'Bearer ' + Variables.token
      }
    });
  },

  createCustomData: function(data) {
    return $http.post(this.baseUrl + '/data', data);
  },

  updateCustomData: function(id, data) {
    return $http.put(this.baseUrl + '/data/' + id, data);
  },

  deleteCustomData: function(id) {
    return $http.delete(this.baseUrl + '/data/' + id);
  }
};
```

#### Use Custom Service
```javascript
// Call custom service
App.Services.CustomService.getCustomData({ page: 1 })
  .then(function(response) {
    Variables.customData.dataSet = response.data;
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
```

## WebSocket Integration

### WebSocket Service

#### Configure WebSocket
```javascript
{
  "name": "RealtimeService",
  "type": "WEBSOCKET",
  "url": "wss://api.example.com/ws",
  "protocols": ["v1"],
  "reconnect": true,
  "reconnectInterval": 5000
}
```

#### WebSocket Events
```javascript
// On connection open
Variables.realtimeVar.onOpen = function() {
  console.log('WebSocket connected');
  this.send({ type: 'subscribe', channel: 'notifications' });
};

// On message received
Variables.realtimeVar.onMessage = function(message) {
  console.log('Received:', message);
  Variables.notifications.dataSet.push(message.data);
};

// On connection close
Variables.realtimeVar.onClose = function() {
  console.log('WebSocket disconnected');
};

// On error
Variables.realtimeVar.onError = function(error) {
  console.error('WebSocket error:', error);
};
```

## API Caching

### Cache Configuration
```javascript
{
  "service": "ProductService",
  "operation": "getProducts",
  "cache": {
    "enabled": true,
    "duration": 300000, // 5 minutes
    "key": "products_${category}",
    "strategy": "cache-first" // or "network-first"
  }
}
```

### Cache Operations
```javascript
// Clear specific cache
Variables.productListVar.clearCache();

// Clear all caches
App.Services.clearAllCaches();

// Force refresh (bypass cache)
Variables.productListVar.invoke({ forceRefresh: true });
```

## Request Interceptors

### Global Interceptor
```javascript
App.onBeforeServiceCall = function(requestConfig) {
  // Add auth token to all requests
  requestConfig.headers['Authorization'] = 'Bearer ' + Variables.authToken;

  // Add timestamp
  requestConfig.headers['X-Timestamp'] = new Date().toISOString();

  // Log request
  console.log('API Request:', requestConfig);

  return requestConfig;
};

App.onAfterServiceCall = function(response) {
  // Log response
  console.log('API Response:', response);

  return response;
};
```

## Best Practices

### API Design
1. **Use consistent naming** conventions
2. **Group related endpoints** in services
3. **Version your APIs** appropriately
4. **Document API usage**
5. **Handle errors gracefully**

### Performance
1. **Enable caching** for static data
2. **Use pagination** for large datasets
3. **Implement request debouncing**
4. **Optimize payload size**
5. **Use compression**

### Security
1. **Secure API keys** in variables
2. **Use HTTPS** for all APIs
3. **Validate inputs**
4. **Implement rate limiting**
5. **Handle auth token refresh**

### Error Handling
1. **Provide user-friendly messages**
2. **Log errors** for debugging
3. **Implement retry logic**
4. **Handle network failures**
5. **Validate responses**

## Troubleshooting

### Common Issues

**API Not Responding**
- Check service URL
- Verify network connectivity
- Check CORS configuration
- Review authentication
- Check timeout settings

**Authentication Failures**
- Verify credentials
- Check token expiration
- Review auth configuration
- Check API key validity

**Data Not Loading**
- Check response mapping
- Verify data node path
- Review variable binding
- Check for errors in console

**CORS Errors**
- Configure CORS on server
- Use proxy server
- Add appropriate headers
- Check browser console

## Related Documentation

- [Database Workspace](./database_workspace.md)
- [Security Workspace](./security_workspace.md)
- [Design Workspace](./design_canvas.md)
