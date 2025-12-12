# REST Services and Swagger

Learn how to import and work with REST services using OpenAPI/Swagger specifications.

## OpenAPI/Swagger Specifications

### What is OpenAPI?
OpenAPI (formerly Swagger) is a specification for defining RESTful APIs. It provides a standard way to describe:
- Available endpoints
- Request/response formats
- Authentication methods
- Parameter types and validation

### Specification Format
```yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        username:
          type: string
        email:
          type: string
```

## Importing OpenAPI Specifications

### Import from URL
```javascript
import { importOpenAPI } from '@platform/api-client';

const client = await importOpenAPI({
  url: 'https://api.example.com/openapi.json',
  name: 'ExternalService'
});
```

### Import from File
```javascript
const client = await importOpenAPI({
  file: './specs/external-api.yaml',
  name: 'ExternalService'
});
```

### Import Configuration
```javascript
const client = await importOpenAPI({
  url: 'https://api.example.com/openapi.json',
  name: 'ExternalService',
  options: {
    baseURL: 'https://api.example.com/v1',
    timeout: 30000,
    headers: {
      'X-API-Key': process.env.API_KEY
    }
  }
});
```

## Using Generated Clients

### Basic Usage
```javascript
// Get all users
const users = await client.users.getAll();

// Get specific user
const user = await client.users.getById({ id: 123 });

// Create new user
const newUser = await client.users.create({
  body: {
    username: 'john_doe',
    email: 'john@example.com'
  }
});

// Update user
await client.users.update({
  id: 123,
  body: {
    email: 'newemail@example.com'
  }
});

// Delete user
await client.users.delete({ id: 123 });
```

### Error Handling
```javascript
try {
  const user = await client.users.getById({ id: 123 });
} catch (error) {
  if (error.status === 404) {
    console.error('User not found');
  } else if (error.status === 401) {
    console.error('Unauthorized');
  } else {
    console.error('API error:', error.message);
  }
}
```

## REST Client Configuration

### Headers
```javascript
// Global headers
client.setHeaders({
  'Authorization': `Bearer ${token}`,
  'X-Custom-Header': 'value'
});

// Per-request headers
const users = await client.users.getAll({
  headers: {
    'X-Request-ID': requestId
  }
});
```

### Interceptors
```javascript
// Request interceptor
client.interceptors.request.use((config) => {
  console.log('Making request:', config.url);
  config.headers['X-Timestamp'] = Date.now();
  return config;
});

// Response interceptor
client.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status);
    return response;
  },
  (error) => {
    console.error('Request failed:', error.message);
    return Promise.reject(error);
  }
);
```

### Retry Logic
```javascript
const client = await importOpenAPI({
  url: 'https://api.example.com/openapi.json',
  options: {
    retry: {
      retries: 3,
      retryDelay: 1000,
      retryCondition: (error) => {
        return error.status >= 500;
      }
    }
  }
});
```

## Swagger UI Integration

### Viewing API Documentation
```javascript
import { serveSwaggerUI } from '@platform/swagger';

app.use('/api-docs', serveSwaggerUI({
  url: 'https://api.example.com/openapi.json'
}));
```

### Custom Swagger UI
```javascript
app.use('/api-docs', serveSwaggerUI({
  spec: openApiSpec,
  customCss: '.swagger-ui { font-family: Arial; }',
  customSiteTitle: 'My API Documentation'
}));
```

## Type Safety

### TypeScript Support
```typescript
import type { User, CreateUserRequest } from './generated/types';

const createUser = async (data: CreateUserRequest): Promise<User> => {
  return await client.users.create({ body: data });
};
```

### Schema Validation
```javascript
import { validateRequest } from '@platform/validation';

const userData = {
  username: 'john_doe',
  email: 'invalid-email'
};

const validation = validateRequest(client.schemas.User, userData);
if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
}
```

## Best Practices

- Keep OpenAPI specifications up to date
- Use type definitions for request/response objects
- Implement proper error handling
- Configure appropriate timeouts
- Use interceptors for cross-cutting concerns
- Cache generated clients when possible
- Version your API specifications
- Document custom configurations
- Test API integrations thoroughly
