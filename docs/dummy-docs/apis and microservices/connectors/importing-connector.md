# Importing Connector

Learn how to import, configure, and use pre-built connectors in your application to integrate with external systems and services.

## Overview

Importing connectors allows you to quickly integrate with external services without writing integration code from scratch. Connectors provide standardized interfaces for databases, APIs, cloud services, and other systems.

## Installation Methods

### Using Package Managers

#### npm (Node.js)
```bash
# Install a specific connector
npm install @platform/connector-postgresql

# Install multiple connectors
npm install @platform/connector-postgresql @platform/connector-mongodb @platform/connector-stripe

# Install with specific version
npm install @platform/connector-postgresql@2.1.0

# Save as dependency
npm install --save @platform/connector-postgresql
```

#### Maven (Java)
```xml
<!-- pom.xml -->
<dependencies>
    <!-- PostgreSQL Connector -->
    <dependency>
        <groupId>com.platform.connectors</groupId>
        <artifactId>postgresql-connector</artifactId>
        <version>2.1.0</version>
    </dependency>

    <!-- Stripe Connector -->
    <dependency>
        <groupId>com.platform.connectors</groupId>
        <artifactId>stripe-connector</artifactId>
        <version>10.2.0</version>
    </dependency>
</dependencies>
```

#### Gradle (Java)
```groovy
// build.gradle
dependencies {
    implementation 'com.platform.connectors:postgresql-connector:2.1.0'
    implementation 'com.platform.connectors:stripe-connector:10.2.0'
}
```

#### Python (pip)
```bash
# Install connector
pip install platform-connector-postgresql

# Install from requirements.txt
pip install -r requirements.txt
```

## Importing Connectors in Code

### JavaScript/TypeScript

#### ES6 Import
```javascript
// Import specific connector
import { PostgreSQLConnector } from '@platform/connector-postgresql';

// Import multiple connectors
import { PostgreSQLConnector } from '@platform/connector-postgresql';
import { MongoDBConnector } from '@platform/connector-mongodb';
import { StripeConnector } from '@platform/connector-stripe';

// Import with alias
import { PostgreSQLConnector as PGConnector } from '@platform/connector-postgresql';

// Import default export
import PostgreSQLConnector from '@platform/connector-postgresql';
```

#### CommonJS Require
```javascript
// Require connector
const { PostgreSQLConnector } = require('@platform/connector-postgresql');

// Require with destructuring
const {
  PostgreSQLConnector,
  ConnectionPoolManager
} = require('@platform/connector-postgresql');
```

### Java

#### Import Statements
```java
// Import connector class
import com.platform.connectors.postgresql.PostgreSQLConnector;

// Import connector factory
import com.platform.connectors.ConnectorFactory;

// Import connector configuration
import com.platform.connectors.postgresql.PostgreSQLConfig;

// Import multiple connectors
import com.platform.connectors.postgresql.PostgreSQLConnector;
import com.platform.connectors.mongodb.MongoDBConnector;
import com.platform.connectors.stripe.StripeConnector;
```

### Python

```python
# Import connector
from platform_connectors.postgresql import PostgreSQLConnector

# Import multiple connectors
from platform_connectors.postgresql import PostgreSQLConnector
from platform_connectors.mongodb import MongoDBConnector
from platform_connectors.stripe import StripeConnector

# Import with alias
from platform_connectors.postgresql import PostgreSQLConnector as PGConnector
```

## Basic Configuration

### Configuration File Approach

#### JSON Configuration
```json
{
  "connectors": {
    "database": {
      "type": "postgresql",
      "host": "localhost",
      "port": 5432,
      "database": "myapp",
      "username": "${DB_USERNAME}",
      "password": "${DB_PASSWORD}",
      "pool": {
        "max": 20,
        "min": 2,
        "idle": 30000
      }
    },
    "cache": {
      "type": "redis",
      "host": "localhost",
      "port": 6379,
      "password": "${REDIS_PASSWORD}",
      "db": 0
    },
    "payment": {
      "type": "stripe",
      "apiKey": "${STRIPE_SECRET_KEY}",
      "webhookSecret": "${STRIPE_WEBHOOK_SECRET}"
    }
  }
}
```

#### YAML Configuration
```yaml
# connectors.yaml
connectors:
  database:
    type: postgresql
    host: localhost
    port: 5432
    database: myapp
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    ssl: true
    pool:
      max: 20
      min: 2
      idle: 30000

  cache:
    type: redis
    host: localhost
    port: 6379
    password: ${REDIS_PASSWORD}
    db: 0

  payment:
    type: stripe
    apiKey: ${STRIPE_SECRET_KEY}
    webhookSecret: ${STRIPE_WEBHOOK_SECRET}
```

### Programmatic Configuration

#### JavaScript
```javascript
import { PostgreSQLConnector } from '@platform/connector-postgresql';

// Basic configuration
const dbConnector = new PostgreSQLConnector({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  ssl: true,
  pool: {
    max: 20,
    min: 2,
    idle: 30000,
    connectionTimeout: 5000
  }
});

// Connect
await dbConnector.connect();
```

#### Java
```java
import com.platform.connectors.postgresql.PostgreSQLConnector;
import com.platform.connectors.postgresql.PostgreSQLConfig;

public class DatabaseSetup {
    public PostgreSQLConnector setupDatabase() {
        // Create configuration
        PostgreSQLConfig config = PostgreSQLConfig.builder()
            .host(System.getenv("DB_HOST"))
            .port(Integer.parseInt(System.getenv("DB_PORT")))
            .database(System.getenv("DB_NAME"))
            .username(System.getenv("DB_USERNAME"))
            .password(System.getenv("DB_PASSWORD"))
            .ssl(true)
            .maxPoolSize(20)
            .minPoolSize(2)
            .connectionTimeout(5000)
            .build();

        // Create connector
        PostgreSQLConnector connector = new PostgreSQLConnector(config);

        // Connect
        try {
            connector.connect();
            System.out.println("Database connected successfully");
        } catch (Exception e) {
            System.err.println("Failed to connect: " + e.getMessage());
        }

        return connector;
    }
}
```

## Using Connector Factory

### Factory Pattern for Multiple Connectors

#### JavaScript
```javascript
import { ConnectorFactory } from '@platform/connectors';

class ConnectorManager {
  constructor() {
    this.connectors = {};
    this.factory = new ConnectorFactory();
  }

  async loadConnectors(config) {
    // Load database connector
    this.connectors.database = await this.factory.create(
      'postgresql',
      config.database
    );
    await this.connectors.database.connect();

    // Load cache connector
    this.connectors.cache = await this.factory.create(
      'redis',
      config.cache
    );
    await this.connectors.cache.connect();

    // Load payment connector
    this.connectors.payment = await this.factory.create(
      'stripe',
      config.payment
    );
    await this.connectors.payment.connect();

    console.log('All connectors loaded successfully');
  }

  getConnector(name) {
    return this.connectors[name];
  }

  async disconnectAll() {
    for (const [name, connector] of Object.entries(this.connectors)) {
      await connector.disconnect();
      console.log(`${name} connector disconnected`);
    }
  }
}

// Usage
const manager = new ConnectorManager();
await manager.loadConnectors(config);

const db = manager.getConnector('database');
const users = await db.execute('query', {
  sql: 'SELECT * FROM users'
});
```

#### Java
```java
import com.platform.connectors.ConnectorFactory;
import com.platform.connectors.Connector;

public class ConnectorManager {
    private Map<String, Connector> connectors = new HashMap<>();
    private ConnectorFactory factory = new ConnectorFactory();

    public void loadConnectors(Configuration config) throws Exception {
        // Load database connector
        Connector dbConnector = factory.create(
            "postgresql",
            config.getDatabaseConfig()
        );
        dbConnector.connect();
        connectors.put("database", dbConnector);

        // Load cache connector
        Connector cacheConnector = factory.create(
            "redis",
            config.getCacheConfig()
        );
        cacheConnector.connect();
        connectors.put("cache", cacheConnector);

        System.out.println("All connectors loaded successfully");
    }

    public Connector getConnector(String name) {
        return connectors.get(name);
    }

    public void disconnectAll() throws Exception {
        for (Map.Entry<String, Connector> entry : connectors.entrySet()) {
            entry.getValue().disconnect();
            System.out.println(entry.getKey() + " connector disconnected");
        }
    }
}
```

## Environment-Specific Configuration

### Multiple Environments

#### Development, Staging, Production
```javascript
// config/connectors.js
const environments = {
  development: {
    database: {
      host: 'localhost',
      port: 5432,
      database: 'myapp_dev',
      username: 'dev_user',
      password: 'dev_password'
    }
  },
  staging: {
    database: {
      host: 'staging-db.example.com',
      port: 5432,
      database: 'myapp_staging',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      ssl: true
    }
  },
  production: {
    database: {
      host: 'prod-db.example.com',
      port: 5432,
      database: 'myapp_prod',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      ssl: true,
      pool: {
        max: 50,
        min: 10
      }
    }
  }
};

const env = process.env.NODE_ENV || 'development';
export const config = environments[env];
```

### Loading Configuration
```javascript
import { config } from './config/connectors.js';
import { PostgreSQLConnector } from '@platform/connector-postgresql';

const dbConnector = new PostgreSQLConnector(config.database);
await dbConnector.connect();
```

## Advanced Import Patterns

### Lazy Loading Connectors

#### On-Demand Loading
```javascript
class LazyConnectorLoader {
  constructor() {
    this.connectors = new Map();
    this.configs = new Map();
  }

  registerConnector(name, type, config) {
    this.configs.set(name, { type, config });
  }

  async getConnector(name) {
    // Return cached connector if exists
    if (this.connectors.has(name)) {
      return this.connectors.get(name);
    }

    // Load connector on first access
    const { type, config } = this.configs.get(name);

    let ConnectorClass;
    switch (type) {
      case 'postgresql':
        const { PostgreSQLConnector } = await import('@platform/connector-postgresql');
        ConnectorClass = PostgreSQLConnector;
        break;
      case 'mongodb':
        const { MongoDBConnector } = await import('@platform/connector-mongodb');
        ConnectorClass = MongoDBConnector;
        break;
      default:
        throw new Error(`Unknown connector type: ${type}`);
    }

    const connector = new ConnectorClass(config);
    await connector.connect();
    this.connectors.set(name, connector);

    return connector;
  }
}

// Usage
const loader = new LazyConnectorLoader();

loader.registerConnector('database', 'postgresql', {
  host: 'localhost',
  database: 'myapp'
});

// Connector is only loaded when first accessed
const db = await loader.getConnector('database');
```

### Conditional Imports

```javascript
// Import based on environment
async function getStorageConnector() {
  if (process.env.NODE_ENV === 'production') {
    const { S3Connector } = await import('@platform/connector-aws-s3');
    return new S3Connector({
      region: 'us-east-1',
      bucket: 'prod-bucket'
    });
  } else {
    const { LocalStorageConnector } = await import('@platform/connector-local-storage');
    return new LocalStorageConnector({
      path: './storage'
    });
  }
}

const storage = await getStorageConnector();
```

## Dependency Injection

### Using DI Container

#### JavaScript with InversifyJS
```javascript
import { Container, injectable, inject } from 'inversify';
import { PostgreSQLConnector } from '@platform/connector-postgresql';

@injectable()
class UserService {
  constructor(@inject('DatabaseConnector') private db: PostgreSQLConnector) {}

  async getUsers() {
    return await this.db.execute('query', {
      sql: 'SELECT * FROM users'
    });
  }
}

// Setup container
const container = new Container();

container.bind('DatabaseConnector').toDynamicValue(async () => {
  const connector = new PostgreSQLConnector(config);
  await connector.connect();
  return connector;
});

container.bind(UserService).toSelf();

// Usage
const userService = container.get(UserService);
const users = await userService.getUsers();
```

#### Java with Spring
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.platform.connectors.postgresql.PostgreSQLConnector;

@Configuration
public class ConnectorConfiguration {

    @Bean
    public PostgreSQLConnector databaseConnector() {
        PostgreSQLConfig config = PostgreSQLConfig.builder()
            .host(env.getProperty("db.host"))
            .port(Integer.parseInt(env.getProperty("db.port")))
            .database(env.getProperty("db.name"))
            .username(env.getProperty("db.username"))
            .password(env.getProperty("db.password"))
            .build();

        PostgreSQLConnector connector = new PostgreSQLConnector(config);
        try {
            connector.connect();
        } catch (Exception e) {
            throw new RuntimeException("Failed to connect database", e);
        }
        return connector;
    }
}

// Usage with injection
@Service
public class UserService {
    @Autowired
    private PostgreSQLConnector databaseConnector;

    public List<User> getUsers() throws Exception {
        return databaseConnector.execute("query",
            Map.of("sql", "SELECT * FROM users"));
    }
}
```

## Connector Lifecycle Management

### Initialization and Cleanup

```javascript
class ApplicationConnectors {
  constructor() {
    this.connectors = [];
  }

  async initialize() {
    console.log('Initializing connectors...');

    // Database
    const db = new PostgreSQLConnector(config.database);
    await db.connect();
    this.connectors.push(db);

    // Cache
    const cache = new RedisConnector(config.cache);
    await cache.connect();
    this.connectors.push(cache);

    // Payment
    const payment = new StripeConnector(config.payment);
    await payment.connect();
    this.connectors.push(payment);

    console.log('All connectors initialized');

    // Setup cleanup on shutdown
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
  }

  async shutdown() {
    console.log('Shutting down connectors...');

    for (const connector of this.connectors) {
      try {
        await connector.disconnect();
      } catch (error) {
        console.error('Error disconnecting connector:', error);
      }
    }

    console.log('All connectors shut down');
    process.exit(0);
  }

  async healthCheck() {
    const results = {};

    for (const connector of this.connectors) {
      const health = await connector.healthCheck();
      results[connector.constructor.name] = health;
    }

    return results;
  }
}

// Usage
const connectors = new ApplicationConnectors();
await connectors.initialize();

// Health check endpoint
app.get('/health', async (req, res) => {
  const health = await connectors.healthCheck();
  res.json(health);
});
```

## Best Practices

### Configuration Management
- Use environment variables for sensitive data
- Separate configuration by environment
- Validate configuration on startup
- Use configuration schema validation
- Document all configuration options

### Connection Management
- Initialize connectors at application startup
- Implement connection pooling
- Set appropriate timeouts
- Handle connection failures gracefully
- Clean up connections on shutdown

### Error Handling
```javascript
try {
  const connector = new PostgreSQLConnector(config);
  await connector.connect();
} catch (error) {
  if (error.code === 'CONNECTION_TIMEOUT') {
    console.error('Database connection timeout');
  } else if (error.code === 'AUTH_FAILED') {
    console.error('Authentication failed');
  } else {
    console.error('Connection error:', error);
  }
  process.exit(1);
}
```

### Security
- Never commit credentials to version control
- Use secure credential storage (vaults, secret managers)
- Enable SSL/TLS for production
- Implement proper authentication
- Rotate credentials regularly
- Audit connector access

### Testing
```javascript
// Mock connector for testing
class MockDatabaseConnector {
  async connect() {
    return true;
  }

  async execute(operation, params) {
    return mockData;
  }

  async disconnect() {
    return true;
  }
}

// Test with mock
describe('UserService', () => {
  let userService;
  let mockDb;

  beforeEach(() => {
    mockDb = new MockDatabaseConnector();
    userService = new UserService(mockDb);
  });

  test('should get users', async () => {
    const users = await userService.getUsers();
    expect(users).toBeDefined();
  });
});
```

## Troubleshooting

### Common Issues

#### Connection Failures
```javascript
// Add retry logic
async function connectWithRetry(connector, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await connector.connect();
      return true;
    } catch (error) {
      console.log(`Connection attempt ${i + 1} failed`);
      if (i === maxRetries - 1) throw error;
      await sleep(1000 * Math.pow(2, i)); // Exponential backoff
    }
  }
}
```

#### Version Conflicts
```bash
# Check installed versions
npm list @platform/connector-postgresql

# Update to specific version
npm install @platform/connector-postgresql@2.1.0

# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

By following these guidelines, you can effectively import and use connectors to integrate external systems into your application.
