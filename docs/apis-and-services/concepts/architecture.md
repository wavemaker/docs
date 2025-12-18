# Architecture

Understanding architectural patterns for building scalable and maintainable APIs and services.

## Overview

Software architecture defines the structure, components, and relationships within a system. Choosing the right architecture is crucial for building APIs and services that are scalable, maintainable, and performant.

## Architectural Patterns

### Monolithic Architecture

A single, unified application where all components are interconnected and interdependent.

**Structure:**
```
┌─────────────────────────────────┐
│     Monolithic Application      │
├─────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐    │
│  │  UI      │  │ Business │    │
│  │  Layer   │  │  Logic   │    │
│  └──────────┘  └──────────┘    │
│  ┌──────────┐  ┌──────────┐    │
│  │  Data    │  │ External │    │
│  │  Access  │  │ Services │    │
│  └──────────┘  └──────────┘    │
└─────────────────────────────────┘
         ↓
    Single Database
```

**Advantages:**
- Simple to develop and deploy
- Easy to test
- Simple monitoring
- No network latency between components

**Disadvantages:**
- Difficult to scale specific components
- Tight coupling
- Large codebase becomes hard to maintain
- Technology stack is locked in
- Deployment of entire application for small changes

**When to Use:**
- Small teams
- Simple applications
- MVP or prototypes
- Limited scalability requirements

### Microservices Architecture

An architectural style where an application is composed of small, independent services.

**Structure:**
```
┌────────────┐
│ API Gateway│
└─────┬──────┘
      │
      ├──────────┬──────────┬──────────┐
      ↓          ↓          ↓          ↓
┌──────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│  User    │ │ Order  │ │Payment │ │Inventory│
│ Service  │ │Service │ │Service │ │ Service │
└────┬─────┘ └───┬────┘ └───┬────┘ └───┬────┘
     ↓           ↓          ↓          ↓
 ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
 │User DB │ │Order DB│ │Pay DB  │ │Inv DB  │
 └────────┘ └────────┘ └────────┘ └────────┘
```

**Advantages:**
- Independent deployment
- Technology flexibility
- Scalability (scale services independently)
- Fault isolation
- Better organization (small, focused teams)

**Disadvantages:**
- Complex deployment
- Distributed system complexity
- Network latency
- Data consistency challenges
- Testing complexity

**When to Use:**
- Large, complex applications
- Multiple teams
- Need for independent scaling
- Different technology requirements per service

### Service-Oriented Architecture (SOA)

An architectural pattern where services are provided to other components via communication protocols over a network.

**Structure:**
```
┌──────────────────────────────────┐
│     Enterprise Service Bus       │
└──────────────┬───────────────────┘
               │
       ┌───────┼───────┬───────┐
       ↓       ↓       ↓       ↓
   ┌────────┐ ┌─────┐ ┌────┐ ┌────┐
   │Service │ │Srv  │ │Srv │ │Srv │
   │   A    │ │  B  │ │ C  │ │ D  │
   └────────┘ └─────┘ └────┘ └────┘
```

**Characteristics:**
- Services communicate via ESB (Enterprise Service Bus)
- SOAP-based communication
- Reusable business services
- Enterprise-wide services

**Advantages:**
- Service reusability
- Platform independence
- Scalability
- Easier maintenance

**Disadvantages:**
- ESB can become bottleneck
- Complex governance
- Higher latency
- Expensive infrastructure

### Event-Driven Architecture

Architecture where services communicate through events rather than direct calls.

**Structure:**
```
┌─────────┐      Event       ┌──────────────┐
│Publisher├────────────────→ │ Event Broker │
└─────────┘                   └──────┬───────┘
                                     │
                      ┌──────────────┼──────────────┐
                      ↓              ↓              ↓
                ┌──────────┐   ┌──────────┐  ┌──────────┐
                │Subscriber│   │Subscriber│  │Subscriber│
                │    A     │   │    B     │  │    C     │
                └──────────┘   └──────────┘  └──────────┘
```

**Event Types:**
- **Event Notification**: Notify that something happened
- **Event-Carried State Transfer**: Event contains state changes
- **Event Sourcing**: Store events as source of truth

**Advantages:**
- Loose coupling
- Scalability
- Flexibility
- Real-time processing
- Asynchronous communication

**Disadvantages:**
- Complex debugging
- Event ordering challenges
- Eventual consistency
- Message broker dependency

**Example:**
```javascript
// Publisher
eventBus.publish('order.created', {
  orderId: '123',
  userId: 'user456',
  total: 99.99
});

// Subscriber
eventBus.subscribe('order.created', async (event) => {
  // Send confirmation email
  await emailService.sendOrderConfirmation(event.orderId);

  // Update inventory
  await inventoryService.reduceStock(event.items);

  // Process payment
  await paymentService.charge(event.total);
});
```

## API Architecture Patterns

### API Gateway Pattern

Single entry point for all client requests that routes to appropriate microservices.

**Architecture:**
```
┌──────────┐
│  Client  │
└─────┬────┘
      │
      ↓
┌──────────────────┐
│   API Gateway    │
│  - Routing       │
│  - Auth          │
│  - Rate Limiting │
│  - Caching       │
└─────┬────────────┘
      │
      ├──────────┬──────────┬──────────┐
      ↓          ↓          ↓          ↓
  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
  │Service │ │Service │ │Service │ │Service │
  │   A    │ │   B    │ │   C    │ │   D    │
  └────────┘ └────────┘ └────────┘ └──��─────┘
```

**Responsibilities:**
- Request routing
- Authentication/Authorization
- Rate limiting
- Request/Response transformation
- Protocol translation
- Caching
- Logging and monitoring

**Benefits:**
- Single entry point
- Simplified client code
- Reduced round trips
- Cross-cutting concerns centralized

**Example:**
```javascript
// API Gateway configuration
const gateway = {
  routes: [
    {
      path: '/api/users/*',
      service: 'http://user-service:3000',
      auth: true,
      rateLimit: '100/minute'
    },
    {
      path: '/api/orders/*',
      service: 'http://order-service:3001',
      auth: true,
      rateLimit: '50/minute'
    }
  ]
};
```

### Backend for Frontend (BFF)

Separate backend for each frontend platform with tailored APIs.

**Architecture:**
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│   Web    │  │  Mobile  │  │  Desktop │
└────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │             │
     ↓             ↓             ↓
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Web BFF │  │Mobile   │  │Desktop  │
│         │  │  BFF    │  │  BFF    │
└────┬────┘  └────┬────┘  └────┬────┘
     └────────────┼─────────────┘
                  ↓
         ┌──────────────────┐
         │  Microservices   │
         └──────────────────┘
```

**Benefits:**
- Optimized for each platform
- Independent evolution
- Better separation of concerns

### CQRS (Command Query Responsibility Segregation)

Separate read and write operations into different models.

**Architecture:**
```
        Commands                Queries
           │                       │
           ↓                       ↓
    ┌────────────┐          ┌────────────┐
    │  Write     │          │   Read     │
    │  Model     │────────→ │   Model    │
    └────────────┘  Events  └────────────┘
           │                       │
           ↓                       ↓
    ┌────────────┐          ┌────────────┐
    │  Write DB  │          │   Read DB  │
    └────────────┘          └────────────┘
```

**Benefits:**
- Optimized read and write operations
- Independent scaling
- Simplified queries
- Better performance

**Example:**
```javascript
// Command (Write)
class CreateOrderCommand {
  async execute(orderData) {
    const order = await Order.create(orderData);
    await eventBus.publish('order.created', order);
    return order.id;
  }
}

// Query (Read)
class GetOrderQuery {
  async execute(orderId) {
    return await OrderReadModel.findById(orderId);
  }
}
```

## Layered Architecture

Organizing code into logical layers with specific responsibilities.

**Structure:**
```
┌─────────────────────┐
│ Presentation Layer  │  ← Controllers, Routes
├─────────────────────┤
│  Business Layer     │  ← Business Logic, Services
├─────────────────────┤
│ Data Access Layer   │  ← Repositories, ORM
├─────────────────────┤
│   Database Layer    │  ← Database
└─────────────────────┘
```

**Example:**
```javascript
// Presentation Layer
app.get('/api/users/:id', async (req, res) => {
  const user = await userService.getById(req.params.id);
  res.json(user);
});

// Business Layer
class UserService {
  async getById(id) {
    const user = await userRepository.findById(id);
    if (!user) throw new NotFoundError('User not found');
    return this.sanitizeUser(user);
  }
}

// Data Access Layer
class UserRepository {
  async findById(id) {
    return await db.query('SELECT * FROM users WHERE id = ?', [id]);
  }
}
```

## Hexagonal Architecture (Ports and Adapters)

Isolate core business logic from external concerns.

**Structure:**
```
        ┌──────────────────────┐
        │   External Systems   │
        └──────────┬───────────┘
                   │
        ┌──────────▼───────────┐
        │      Adapters        │
        ├──────────────────────┤
        │       Ports          │
        ├──────────────────────┤
        │   Business Logic     │
        │   (Core Domain)      │
        └──────────────────────┘
```

**Benefits:**
- Technology independence
- Testability
- Flexibility
- Clear boundaries

## Service Mesh

Infrastructure layer for service-to-service communication.

**Architecture:**
```
┌────────────┐        ┌────────────┐
│  Service A │        │  Service B │
└─────┬──────┘        └──────┬─────┘
      │                      │
      ↓                      ↓
┌─────────────┐        ┌─────────────┐
│ Sidecar     │ ←────→ │  Sidecar    │
│ Proxy (Envoy)│        │ Proxy (Envoy)│
└─────────────┘        └─────────────┘
      │                      │
      └──────────┬───────────┘
                 ↓
        ┌───────────────┐
        │ Control Plane │
        │  (Istio/      │
        │   Linkerd)    │
        └───────────────┘
```

**Features:**
- Traffic management
- Service discovery
- Load balancing
- Circuit breaking
- Observability
- Security (mTLS)

## Best Practices

### 1. Design for Failure

```javascript
// Circuit breaker pattern
const circuitBreaker = new CircuitBreaker(apiCall, {
  timeout: 3000,
  errorThreshold: 50,
  resetTimeout: 30000
});

try {
  const result = await circuitBreaker.fire(params);
} catch (error) {
  // Fallback logic
  return getCachedData();
}
```

### 2. Implement Health Checks

```javascript
app.get('/health', (req, res) => {
  const health = {
    status: 'UP',
    timestamp: Date.now(),
    checks: {
      database: await checkDatabase(),
      cache: await checkCache(),
      externalAPI: await checkExternalAPI()
    }
  };
  res.json(health);
});
```

### 3. Use API Versioning

```javascript
// URL versioning
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Header versioning
app.use((req, res, next) => {
  const version = req.headers['api-version'] || '1';
  req.apiVersion = version;
  next();
});
```

### 4. Implement Logging and Monitoring

```javascript
const logger = require('winston');

app.use((req, res, next) => {
  logger.info('Request', {
    method: req.method,
    url: req.url,
    timestamp: Date.now(),
    correlationId: req.headers['x-correlation-id']
  });
  next();
});
```

## Related Documentation

- [Overview](./overview.md) - Concepts overview
- [TechStack](./techstack.md) - Technology stack
- [Security](../security/overview.md) - Security best practices
