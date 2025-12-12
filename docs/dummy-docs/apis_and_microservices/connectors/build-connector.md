# Build a Connector

Learn how to build custom connectors to integrate your application with external systems, databases, and APIs.

## Overview

Connectors provide a standardized way to integrate with external systems by:
- Abstracting connection details
- Providing reusable integration logic
- Handling authentication and authorization
- Managing connection pooling
- Implementing retry and error handling

## Connector Architecture

### Connector Components

```
┌─────────────────────────────────────┐
│         Connector Interface         │
├─────────────────────────────────────┤
│  • Configuration                    │
│  • Authentication                   │
│  • Connection Management            │
│  • Operation Methods                │
│  • Error Handling                   │
└─────────────────────────────────────┘
```

### Basic Connector Structure

```javascript
// BaseConnector.js
export class BaseConnector {
  constructor(config) {
    this.config = config;
    this.connection = null;
    this.isConnected = false;
  }

  async connect() {
    throw new Error('connect() must be implemented by subclass');
  }

  async disconnect() {
    throw new Error('disconnect() must be implemented by subclass');
  }

  async execute(operation, params) {
    throw new Error('execute() must be implemented by subclass');
  }

  async healthCheck() {
    throw new Error('healthCheck() must be implemented by subclass');
  }
}
```

## Creating a Database Connector

### PostgreSQL Connector Example

```javascript
import { Pool } from 'pg';
import { BaseConnector } from './BaseConnector.js';

export class PostgreSQLConnector extends BaseConnector {
  constructor(config) {
    super(config);
    this.pool = null;
  }

  async connect() {
    try {
      this.pool = new Pool({
        host: this.config.host,
        port: this.config.port || 5432,
        database: this.config.database,
        user: this.config.username,
        password: this.config.password,
        max: this.config.maxConnections || 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000
      });

      // Test connection
      const client = await this.pool.connect();
      client.release();

      this.isConnected = true;
      console.log('PostgreSQL connector connected');
    } catch (error) {
      throw new Error(`Failed to connect to PostgreSQL: ${error.message}`);
    }
  }

  async disconnect() {
    if (this.pool) {
      await this.pool.end();
      this.isConnected = false;
      console.log('PostgreSQL connector disconnected');
    }
  }

  async execute(operation, params = {}) {
    if (!this.isConnected) {
      throw new Error('Connector not connected');
    }

    switch (operation) {
      case 'query':
        return await this.query(params.sql, params.values);
      case 'insert':
        return await this.insert(params.table, params.data);
      case 'update':
        return await this.update(params.table, params.data, params.where);
      case 'delete':
        return await this.delete(params.table, params.where);
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  }

  async query(sql, values = []) {
    const client = await this.pool.connect();
    try {
      const result = await client.query(sql, values);
      return result.rows;
    } finally {
      client.release();
    }
  }

  async insert(table, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');

    const sql = `
      INSERT INTO ${table} (${keys.join(', ')})
      VALUES (${placeholders})
      RETURNING *
    `;

    const result = await this.query(sql, values);
    return result[0];
  }

  async update(table, data, where) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(', ');

    const whereKeys = Object.keys(where);
    const whereValues = Object.values(where);
    const whereClause = whereKeys
      .map((key, i) => `${key} = $${keys.length + i + 1}`)
      .join(' AND ');

    const sql = `
      UPDATE ${table}
      SET ${setClause}
      WHERE ${whereClause}
      RETURNING *
    `;

    const result = await this.query(sql, [...values, ...whereValues]);
    return result[0];
  }

  async delete(table, where) {
    const keys = Object.keys(where);
    const values = Object.values(where);
    const whereClause = keys
      .map((key, i) => `${key} = $${i + 1}`)
      .join(' AND ');

    const sql = `DELETE FROM ${table} WHERE ${whereClause}`;
    await this.query(sql, values);
  }

  async healthCheck() {
    try {
      const result = await this.query('SELECT 1 as health');
      return {
        status: 'healthy',
        connected: this.isConnected,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        connected: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}
```

## Creating a REST API Connector

### HTTP REST Connector

```javascript
import axios from 'axios';
import { BaseConnector } from './BaseConnector.js';

export class RESTAPIConnector extends BaseConnector {
  constructor(config) {
    super(config);
    this.client = null;
  }

  async connect() {
    this.client = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout || 30000,
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers
      }
    });

    // Add authentication interceptor
    this.client.interceptors.request.use(
      async (config) => {
        const token = await this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Token expired, refresh and retry
          await this.refreshToken();
          return this.client.request(error.config);
        }
        return Promise.reject(error);
      }
    );

    this.isConnected = true;
    console.log('REST API connector connected');
  }

  async disconnect() {
    this.client = null;
    this.isConnected = false;
    console.log('REST API connector disconnected');
  }

  async execute(operation, params = {}) {
    if (!this.isConnected) {
      throw new Error('Connector not connected');
    }

    switch (operation) {
      case 'get':
        return await this.get(params.path, params.query);
      case 'post':
        return await this.post(params.path, params.data);
      case 'put':
        return await this.put(params.path, params.data);
      case 'delete':
        return await this.delete(params.path);
      case 'patch':
        return await this.patch(params.path, params.data);
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  }

  async get(path, query = {}) {
    const response = await this.client.get(path, { params: query });
    return response.data;
  }

  async post(path, data) {
    const response = await this.client.post(path, data);
    return response.data;
  }

  async put(path, data) {
    const response = await this.client.put(path, data);
    return response.data;
  }

  async patch(path, data) {
    const response = await this.client.patch(path, data);
    return response.data;
  }

  async delete(path) {
    const response = await this.client.delete(path);
    return response.data;
  }

  async getAuthToken() {
    // Implement token retrieval logic
    return this.config.apiKey || null;
  }

  async refreshToken() {
    // Implement token refresh logic
    console.log('Refreshing authentication token');
  }

  async healthCheck() {
    try {
      const response = await this.client.get('/health');
      return {
        status: 'healthy',
        connected: this.isConnected,
        responseTime: response.headers['x-response-time'],
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        connected: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}
```

## Creating a Java Connector

### JDBC Database Connector

```java
package com.example.connectors;

import java.sql.*;
import java.util.*;
import javax.sql.DataSource;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public abstract class BaseConnector {
    protected Map<String, Object> config;
    protected boolean isConnected;

    public BaseConnector(Map<String, Object> config) {
        this.config = config;
        this.isConnected = false;
    }

    public abstract void connect() throws Exception;
    public abstract void disconnect() throws Exception;
    public abstract Object execute(String operation, Map<String, Object> params) throws Exception;
    public abstract HealthCheckResult healthCheck() throws Exception;
}

public class JDBCConnector extends BaseConnector {
    private DataSource dataSource;

    public JDBCConnector(Map<String, Object> config) {
        super(config);
    }

    @Override
    public void connect() throws Exception {
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setJdbcUrl((String) config.get("jdbcUrl"));
        hikariConfig.setUsername((String) config.get("username"));
        hikariConfig.setPassword((String) config.get("password"));
        hikariConfig.setMaximumPoolSize((Integer) config.getOrDefault("maxPoolSize", 10));
        hikariConfig.setMinimumIdle((Integer) config.getOrDefault("minIdle", 2));
        hikariConfig.setConnectionTimeout((Long) config.getOrDefault("connectionTimeout", 30000L));

        this.dataSource = new HikariDataSource(hikariConfig);
        this.isConnected = true;

        System.out.println("JDBC connector connected");
    }

    @Override
    public void disconnect() throws Exception {
        if (dataSource instanceof HikariDataSource) {
            ((HikariDataSource) dataSource).close();
            this.isConnected = false;
            System.out.println("JDBC connector disconnected");
        }
    }

    @Override
    public Object execute(String operation, Map<String, Object> params) throws Exception {
        if (!isConnected) {
            throw new IllegalStateException("Connector not connected");
        }

        switch (operation) {
            case "query":
                return executeQuery((String) params.get("sql"),
                                  (List<Object>) params.get("values"));
            case "update":
                return executeUpdate((String) params.get("sql"),
                                    (List<Object>) params.get("values"));
            case "batchUpdate":
                return executeBatch((String) params.get("sql"),
                                  (List<List<Object>>) params.get("batchValues"));
            default:
                throw new IllegalArgumentException("Unknown operation: " + operation);
        }
    }

    public List<Map<String, Object>> executeQuery(String sql, List<Object> values)
            throws SQLException {
        List<Map<String, Object>> results = new ArrayList<>();

        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            setParameters(stmt, values);

            try (ResultSet rs = stmt.executeQuery()) {
                ResultSetMetaData metaData = rs.getMetaData();
                int columnCount = metaData.getColumnCount();

                while (rs.next()) {
                    Map<String, Object> row = new HashMap<>();
                    for (int i = 1; i <= columnCount; i++) {
                        row.put(metaData.getColumnName(i), rs.getObject(i));
                    }
                    results.add(row);
                }
            }
        }

        return results;
    }

    public int executeUpdate(String sql, List<Object> values) throws SQLException {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            setParameters(stmt, values);
            return stmt.executeUpdate();
        }
    }

    public int[] executeBatch(String sql, List<List<Object>> batchValues)
            throws SQLException {
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            for (List<Object> values : batchValues) {
                setParameters(stmt, values);
                stmt.addBatch();
            }

            return stmt.executeBatch();
        }
    }

    private void setParameters(PreparedStatement stmt, List<Object> values)
            throws SQLException {
        if (values != null) {
            for (int i = 0; i < values.size(); i++) {
                stmt.setObject(i + 1, values.get(i));
            }
        }
    }

    @Override
    public HealthCheckResult healthCheck() throws Exception {
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT 1")) {

            return new HealthCheckResult(
                "healthy",
                isConnected,
                null,
                new Date()
            );
        } catch (Exception e) {
            return new HealthCheckResult(
                "unhealthy",
                false,
                e.getMessage(),
                new Date()
            );
        }
    }
}

class HealthCheckResult {
    public String status;
    public boolean connected;
    public String error;
    public Date timestamp;

    public HealthCheckResult(String status, boolean connected, String error, Date timestamp) {
        this.status = status;
        this.connected = connected;
        this.error = error;
        this.timestamp = timestamp;
    }
}
```

## Connector Configuration

### Configuration Schema

```javascript
// connector-config.js
export const connectorConfigSchema = {
  name: {
    type: 'string',
    required: true,
    description: 'Connector name'
  },
  type: {
    type: 'string',
    required: true,
    enum: ['database', 'rest-api', 'message-queue', 'file-system', 'custom'],
    description: 'Connector type'
  },
  connection: {
    type: 'object',
    required: true,
    properties: {
      host: { type: 'string' },
      port: { type: 'number' },
      username: { type: 'string' },
      password: { type: 'string', secret: true },
      database: { type: 'string' }
    }
  },
  options: {
    type: 'object',
    properties: {
      timeout: { type: 'number', default: 30000 },
      retryAttempts: { type: 'number', default: 3 },
      poolSize: { type: 'number', default: 10 }
    }
  }
};
```

### Configuration Example

```yaml
# connector-config.yaml
connectors:
  - name: primary-database
    type: database
    provider: postgresql
    connection:
      host: localhost
      port: 5432
      database: myapp
      username: ${DB_USERNAME}
      password: ${DB_PASSWORD}
    options:
      maxConnections: 20
      connectionTimeout: 5000
      idleTimeout: 300000

  - name: external-api
    type: rest-api
    connection:
      baseURL: https://api.example.com
      apiKey: ${API_KEY}
    options:
      timeout: 30000
      retryAttempts: 3
      rateLimit:
        requests: 100
        window: 60000
```

## Error Handling and Retry Logic

### Retry Mechanism

```javascript
export class ConnectorWithRetry extends BaseConnector {
  constructor(config) {
    super(config);
    this.maxRetries = config.maxRetries || 3;
    this.retryDelay = config.retryDelay || 1000;
  }

  async executeWithRetry(operation, params, attempt = 1) {
    try {
      return await this.execute(operation, params);
    } catch (error) {
      if (attempt >= this.maxRetries) {
        throw new Error(
          `Operation failed after ${this.maxRetries} attempts: ${error.message}`
        );
      }

      console.log(`Retry attempt ${attempt}/${this.maxRetries}`);

      // Exponential backoff
      const delay = this.retryDelay * Math.pow(2, attempt - 1);
      await this.sleep(delay);

      return await this.executeWithRetry(operation, params, attempt + 1);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

## Testing Connectors

### Unit Tests

```javascript
import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { PostgreSQLConnector } from './PostgreSQLConnector.js';

describe('PostgreSQLConnector', () => {
  let connector;

  beforeAll(async () => {
    connector = new PostgreSQLConnector({
      host: 'localhost',
      port: 5432,
      database: 'test_db',
      username: 'test_user',
      password: 'test_password'
    });

    await connector.connect();
  });

  afterAll(async () => {
    await connector.disconnect();
  });

  test('should connect successfully', () => {
    expect(connector.isConnected).toBe(true);
  });

  test('should execute query', async () => {
    const result = await connector.execute('query', {
      sql: 'SELECT * FROM users WHERE id = $1',
      values: [1]
    });

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  test('should insert data', async () => {
    const result = await connector.execute('insert', {
      table: 'users',
      data: {
        name: 'Test User',
        email: 'test@example.com'
      }
    });

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  test('should pass health check', async () => {
    const health = await connector.healthCheck();
    expect(health.status).toBe('healthy');
    expect(health.connected).toBe(true);
  });
});
```

## Best Practices

### Connector Design Principles
1. **Abstraction**: Hide implementation details behind a clean interface
2. **Configuration**: Support flexible configuration options
3. **Error Handling**: Implement comprehensive error handling
4. **Connection Pooling**: Use connection pools for efficiency
5. **Retry Logic**: Implement intelligent retry mechanisms
6. **Health Checks**: Provide health check endpoints
7. **Logging**: Log connection events and errors
8. **Testing**: Write comprehensive tests

### Security Considerations
- Store credentials securely (environment variables, secret managers)
- Use encrypted connections (SSL/TLS)
- Implement proper authentication
- Validate all inputs
- Implement rate limiting
- Log security events

### Performance Optimization
- Use connection pooling
- Implement caching where appropriate
- Batch operations when possible
- Set appropriate timeouts
- Monitor connection health
- Profile and optimize queries

### Documentation
- Document configuration options
- Provide usage examples
- Document error scenarios
- Include troubleshooting guide
- Maintain changelog

By following these guidelines, you can build robust, reusable connectors that provide reliable integration with external systems.
