# Mockingbird - Creating Mock APIs

Mockingbird is a powerful tool for creating mock APIs quickly and easily. It allows you to simulate API responses during development and testing without relying on actual backend services.

## Overview

Mock APIs are essential for:
- Frontend development without backend dependencies
- Testing and quality assurance
- Prototyping and demos
- Simulating error scenarios
- Performance testing
- Integration testing

## Getting Started with Mockingbird

### Installation
```bash
npm install @platform/mockingbird
```

### Basic Mock API
```javascript
import { createMockServer } from '@platform/mockingbird';

const mockServer = createMockServer({
  port: 3001,
  routes: [
    {
      path: '/api/users',
      method: 'GET',
      response: {
        status: 200,
        body: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        ]
      }
    }
  ]
});

mockServer.start();
```

## Creating Mock Endpoints

### Static Responses
```javascript
mockServer.addRoute({
  path: '/api/products/:id',
  method: 'GET',
  response: {
    status: 200,
    body: {
      id: 1,
      name: 'Product Name',
      price: 99.99,
      inStock: true
    }
  }
});
```

### Dynamic Responses
```javascript
mockServer.addRoute({
  path: '/api/users/:id',
  method: 'GET',
  handler: (req, res) => {
    const userId = req.params.id;
    res.status(200).json({
      id: userId,
      name: `User ${userId}`,
      email: `user${userId}@example.com`,
      timestamp: new Date().toISOString()
    });
  }
});
```

### Parameterized Responses
```javascript
mockServer.addRoute({
  path: '/api/search',
  method: 'GET',
  handler: (req, res) => {
    const { query, page = 1, limit = 10 } = req.query;

    res.status(200).json({
      query: query,
      page: parseInt(page),
      limit: parseInt(limit),
      results: generateSearchResults(query, page, limit),
      total: 100
    });
  }
});
```

## Response Variations

### Success Responses
```javascript
mockServer.addRoute({
  path: '/api/orders',
  method: 'POST',
  response: {
    status: 201,
    headers: {
      'Location': '/api/orders/123'
    },
    body: {
      id: 123,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
  }
});
```

### Error Responses
```javascript
mockServer.addRoute({
  path: '/api/users/:id',
  method: 'DELETE',
  handler: (req, res) => {
    const userId = req.params.id;

    if (userId === '1') {
      res.status(403).json({
        error: 'Forbidden',
        message: 'Cannot delete admin user'
      });
    } else {
      res.status(204).send();
    }
  }
});
```

### Conditional Responses
```javascript
mockServer.addRoute({
  path: '/api/login',
  method: 'POST',
  handler: (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password123') {
      res.status(200).json({
        token: 'mock-jwt-token',
        user: { id: 1, username: 'admin', role: 'admin' }
      });
    } else {
      res.status(401).json({
        error: 'Invalid credentials'
      });
    }
  }
});
```

## Advanced Features

### Delayed Responses
Simulate network latency:

```javascript
mockServer.addRoute({
  path: '/api/slow-endpoint',
  method: 'GET',
  delay: 3000, // 3 second delay
  response: {
    status: 200,
    body: { message: 'This response was delayed' }
  }
});
```

### Random Delays
```javascript
mockServer.addRoute({
  path: '/api/variable-delay',
  method: 'GET',
  delay: () => Math.random() * 2000 + 500, // 500-2500ms
  response: {
    status: 200,
    body: { data: 'Variable delay response' }
  }
});
```

### Response Sequences
Return different responses on subsequent calls:

```javascript
let callCount = 0;

mockServer.addRoute({
  path: '/api/poll',
  method: 'GET',
  handler: (req, res) => {
    callCount++;

    if (callCount < 3) {
      res.status(202).json({ status: 'processing' });
    } else {
      res.status(200).json({ status: 'complete', result: 'data' });
    }
  }
});
```

### Stateful Mocks
Maintain state across requests:

```javascript
const dataStore = new Map();

mockServer.addRoute({
  path: '/api/items',
  method: 'POST',
  handler: (req, res) => {
    const item = req.body;
    const id = Date.now();
    dataStore.set(id, { ...item, id });

    res.status(201).json(dataStore.get(id));
  }
});

mockServer.addRoute({
  path: '/api/items/:id',
  method: 'GET',
  handler: (req, res) => {
    const item = dataStore.get(parseInt(req.params.id));

    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  }
});
```

## Data Generation

### Using Faker
```javascript
import { faker } from '@faker-js/faker';

mockServer.addRoute({
  path: '/api/users',
  method: 'GET',
  handler: (req, res) => {
    const users = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      company: faker.company.name(),
      phone: faker.phone.number()
    }));

    res.status(200).json(users);
  }
});
```

### Template-based Data
```javascript
const userTemplate = {
  id: () => faker.string.uuid(),
  name: () => faker.person.fullName(),
  email: () => faker.internet.email(),
  role: () => faker.helpers.arrayElement(['user', 'admin', 'moderator']),
  active: () => faker.datatype.boolean(),
  createdAt: () => faker.date.past().toISOString()
};

function generateFromTemplate(template, count = 1) {
  return Array.from({ length: count }, () => {
    const obj = {};
    for (const [key, generator] of Object.entries(template)) {
      obj[key] = typeof generator === 'function' ? generator() : generator;
    }
    return obj;
  });
}

mockServer.addRoute({
  path: '/api/users',
  method: 'GET',
  handler: (req, res) => {
    const users = generateFromTemplate(userTemplate, 20);
    res.status(200).json(users);
  }
});
```

## Error Simulation

### Random Errors
```javascript
mockServer.addRoute({
  path: '/api/unreliable',
  method: 'GET',
  handler: (req, res) => {
    if (Math.random() < 0.3) {
      // 30% chance of error
      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Something went wrong'
      });
    } else {
      res.status(200).json({ data: 'Success' });
    }
  }
});
```

### Specific Error Scenarios
```javascript
mockServer.addRoute({
  path: '/api/validate',
  method: 'POST',
  handler: (req, res) => {
    const errors = [];

    if (!req.body.email) {
      errors.push({ field: 'email', message: 'Email is required' });
    }
    if (!req.body.password || req.body.password.length < 8) {
      errors.push({ field: 'password', message: 'Password must be at least 8 characters' });
    }

    if (errors.length > 0) {
      res.status(422).json({ errors });
    } else {
      res.status(200).json({ message: 'Valid' });
    }
  }
});
```

## Configuration from Files

### JSON Configuration
```javascript
// mocks/users.json
{
  "path": "/api/users",
  "method": "GET",
  "response": {
    "status": 200,
    "body": [
      { "id": 1, "name": "John Doe" },
      { "id": 2, "name": "Jane Smith" }
    ]
  }
}

// Load configuration
import mockConfig from './mocks/users.json';
mockServer.addRoute(mockConfig);
```

### Directory-based Mocks
```javascript
import { loadMocksFromDirectory } from '@platform/mockingbird';

mockServer.loadMocks('./mocks/**/*.json');
```

## Middleware Support

### Request Logging
```javascript
mockServer.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});
```

### Authentication Mock
```javascript
mockServer.use((req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token !== 'Bearer mock-token') {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  next();
});
```

### CORS Headers
```javascript
mockServer.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
});
```

## Testing with Mocks

### Integration Tests
```javascript
import { createMockServer } from '@platform/mockingbird';

describe('User Service', () => {
  let mockServer;

  beforeAll(async () => {
    mockServer = createMockServer({ port: 3001 });
    mockServer.addRoute({
      path: '/api/users/:id',
      method: 'GET',
      response: {
        status: 200,
        body: { id: 1, name: 'Test User' }
      }
    });
    await mockServer.start();
  });

  afterAll(async () => {
    await mockServer.stop();
  });

  test('fetches user by id', async () => {
    const user = await userService.getUser(1);
    expect(user.name).toBe('Test User');
  });
});
```

## Best Practices

- Keep mock responses realistic and representative
- Use faker for generating varied test data
- Simulate different response times and errors
- Maintain mock configurations in version control
- Document mock API endpoints
- Use stateful mocks for complex scenarios
- Test both success and error paths
- Keep mocks in sync with actual API specs
- Use environment variables for mock server configuration
- Clean up mock servers after tests

## CLI Usage

```bash
# Start mock server from configuration
mockingbird start --config ./mocks/config.json --port 3001

# Generate mock data
mockingbird generate --template user --count 100 --output users.json

# Validate mock configuration
mockingbird validate ./mocks/**/*.json
```

## Configuration Example

```javascript
// mockingbird.config.js
export default {
  port: 3001,
  delay: 500,
  middleware: [
    'cors',
    'logger',
    'auth'
  ],
  routes: [
    {
      path: '/api/users',
      method: 'GET',
      response: './mocks/users.json'
    },
    {
      path: '/api/products',
      method: 'GET',
      handler: './handlers/products.js'
    }
  ]
};
```

Mockingbird provides a flexible and powerful way to create mock APIs for development and testing, helping you build faster and test more thoroughly.
