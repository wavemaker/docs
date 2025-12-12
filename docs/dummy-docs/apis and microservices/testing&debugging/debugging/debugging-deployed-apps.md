# Debugging Deployed Applications

Comprehensive guide to debugging applications in production and staging environments without disrupting services.

## Remote Debugging

### Node.js Remote Debugging

```bash
# Start Node.js with remote debugging
node --inspect=0.0.0.0:9229 server.js

# SSH tunnel for secure remote debugging
ssh -L 9229:localhost:9229 user@production-server

# Connect Chrome DevTools to localhost:9229
```

### SSH Port Forwarding

```bash
# Forward remote debugging port to local machine
ssh -N -L 9229:localhost:9229 user@remote-server

# Multiple port forwarding
ssh -L 9229:localhost:9229 -L 5432:localhost:5432 user@remote-server

# Keep SSH connection alive
ssh -o ServerAliveInterval=60 -L 9229:localhost:9229 user@remote-server
```

## Production Logging

### Structured Logging for Production

```javascript
import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: {
    service: 'api-service',
    environment: process.env.NODE_ENV,
    version: process.env.APP_VERSION,
    hostname: require('os').hostname()
  },
  transports: [
    // File transport
    new winston.transports.File({
      filename: '/var/log/app/error.log',
      level: 'error',
      maxsize: 10485760, // 10MB
      maxFiles: 10
    }),
    new winston.transports.File({
      filename: '/var/log/app/combined.log',
      maxsize: 10485760,
      maxFiles: 10
    }),
    // Elasticsearch transport for centralized logging
    new ElasticsearchTransport({
      level: 'info',
      clientOpts: {
        node: process.env.ELASTICSEARCH_URL
      },
      index: 'app-logs'
    })
  ]
});

// Request correlation ID
app.use((req, res, next) => {
  req.id = require('uuid').v4();
  logger.defaultMeta.requestId = req.id;
  next();
});

export default logger;
```

### Java Production Logging

```xml
<!-- logback-spring.xml for production -->
<configuration>
    <property name="LOG_PATH" value="/var/log/app"/>
    
    <!-- JSON format for log aggregation -->
    <appender name="JSON_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/application.json</file>
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <customFields>{"app":"my-service","env":"${ENV}"}</customFields>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/application-%d{yyyy-MM-dd}.json.gz</fileNamePattern>
            <maxHistory>30</maxHistory>
            <totalSizeCap>10GB</totalSizeCap>
        </rollingPolicy>
    </appender>
    
    <root level="INFO">
        <appender-ref ref="JSON_FILE"/>
    </root>
</configuration>
```

## Application Performance Monitoring (APM)

### New Relic Integration

```javascript
// Add at the very beginning of your app
require('newrelic');

import express from 'express';
import newrelic from 'newrelic';

const app = express();

// Custom transaction tracking
app.get('/api/orders/:id', async (req, res) => {
  const transaction = newrelic.getTransaction();
  transaction.addAttribute('orderId', req.params.id);
  
  try {
    const order = await getOrder(req.params.id);
    res.json(order);
  } catch (error) {
    newrelic.noticeError(error, {
      orderId: req.params.id,
      userId: req.user?.id
    });
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// Custom metrics
function recordMetric(name, value) {
  newrelic.recordMetric(`Custom/${name}`, value);
}

recordMetric('OrderProcessingTime', processingTime);
```

### DataDog APM

```javascript
// dd-trace.js
import tracer from 'dd-trace';

tracer.init({
  service: 'my-api',
  env: process.env.NODE_ENV,
  version: process.env.APP_VERSION,
  logInjection: true,
  profiling: true,
  runtimeMetrics: true
});

export default tracer;

// server.js
import './dd-trace';
import express from 'express';

const app = express();

// Custom span
import tracer from 'dd-trace';

async function processOrder(order) {
  const span = tracer.startSpan('order.process');
  span.setTag('order.id', order.id);
  span.setTag('order.amount', order.amount);
  
  try {
    const result = await performProcessing(order);
    span.setTag('order.status', result.status);
    return result;
  } catch (error) {
    span.setTag('error', true);
    span.setTag('error.message', error.message);
    throw error;
  } finally {
    span.finish();
  }
}
```

## Error Tracking

### Sentry Integration

```javascript
import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  release: process.env.APP_VERSION,
  tracesSampleRate: 0.1, // 10% of transactions
  profilesSampleRate: 0.1,
  integrations: [
    new ProfilingIntegration()
  ]
});

// Request handler
app.use(Sentry.Handlers.requestHandler());

// Error handler (must be before other error middleware)
app.use(Sentry.Handlers.errorHandler());

// Capture errors manually
try {
  processPayment(order);
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      section: 'payment'
    },
    extra: {
      orderId: order.id,
      amount: order.amount
    },
    user: {
      id: user.id,
      email: user.email
    }
  });
  throw error;
}

// Breadcrumbs for context
Sentry.addBreadcrumb({
  category: 'auth',
  message: 'User logged in',
  level: 'info',
  data: {
    userId: user.id,
    timestamp: new Date().toISOString()
  }
});
```

### Sentry for Java

```xml
<dependency>
    <groupId>io.sentry</groupId>
    <artifactId>sentry-spring-boot-starter</artifactId>
    <version>6.30.0</version>
</dependency>
```

```properties
# application.properties
sentry.dsn=${SENTRY_DSN}
sentry.environment=${ENV}
sentry.traces-sample-rate=0.1
```

```java
import io.sentry.Sentry;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;

@Service
public class PaymentService {
    
    public void processPayment(Payment payment) {
        try {
            chargeCard(payment);
        } catch (Exception e) {
            Sentry.captureException(e, scope -> {
                scope.setTag("payment.method", payment.getMethod());
                scope.setExtra("payment.amount", payment.getAmount());
                scope.setLevel(SentryLevel.ERROR);
            });
            throw new PaymentException("Payment failed", e);
        }
    }
}
```

## Health Checks and Monitoring

### Health Check Endpoints

```javascript
import { createTerminus } from '@godaddy/terminus';

async function onHealthCheck() {
  // Check database
  await db.ping();
  
  // Check Redis
  await redis.ping();
  
  // Check external API
  await fetch('https://external-api.com/health');
  
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  };
}

async function onSignal() {
  console.log('Server is starting cleanup');
  // Close database connections
  await db.close();
  // Close Redis connection
  await redis.quit();
}

createTerminus(server, {
  signal: 'SIGINT',
  healthChecks: {
    '/health': onHealthCheck,
    '/health/liveness': async () => ({ status: 'alive' }),
    '/health/readiness': onHealthCheck
  },
  onSignal,
  logger: console.log
});
```

### Prometheus Metrics

```javascript
import promClient from 'prom-client';

const register = new promClient.Registry();

// Default metrics
promClient.collectDefaultMetrics({ register });

// Custom metrics
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

const httpRequestTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);

// Middleware to record metrics
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    
    httpRequestDuration.labels(
      req.method,
      req.route?.path || req.path,
      res.statusCode
    ).observe(duration);
    
    httpRequestTotal.labels(
      req.method,
      req.route?.path || req.path,
      res.statusCode
    ).inc();
  });
  
  next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
```

## Debug Mode in Production

### Feature Flags for Debug Logging

```javascript
import LaunchDarkly from 'launchdarkly-node-server-sdk';

const ldClient = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY);

await ldClient.waitForInitialization();

app.use(async (req, res, next) => {
  const user = {
    key: req.user?.id || 'anonymous',
    email: req.user?.email
  };
  
  const debugEnabled = await ldClient.variation('debug-logging', user, false);
  
  if (debugEnabled) {
    req.debugMode = true;
    logger.debug('Debug mode enabled for user', { userId: user.key });
  }
  
  next();
});

// Conditional debug logging
function log(message, data, req) {
  if (req.debugMode) {
    logger.debug(message, data);
  } else {
    logger.info(message, { ...data, details: '[hidden]' });
  }
}
```

## Database Query Debugging

### Sequelize Query Logging

```javascript
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'postgres',
  logging: (sql, timing) => {
    if (process.env.LOG_SQL === 'true') {
      logger.debug('SQL Query', { sql, timing });
    }
  },
  benchmark: true
});

// Log slow queries only
const sequelize = new Sequelize(database, username, password, {
  logging: (sql, timing) => {
    if (timing > 1000) { // Log queries slower than 1 second
      logger.warn('Slow query detected', { sql, timing });
    }
  },
  benchmark: true
});
```

### MongoDB Query Profiling

```javascript
import mongoose from 'mongoose';

mongoose.set('debug', (collectionName, method, query, doc) => {
  logger.debug('MongoDB Query', {
    collection: collectionName,
    method,
    query,
    doc
  });
});

// Enable profiling
await db.admin().command({
  profile: 2, // 0=off, 1=slow queries, 2=all queries
  slowms: 100 // Threshold for slow queries in ms
});

// View profiled queries
const profile = await db.collection('system.profile').find().toArray();
console.log(profile);
```

## Container Debugging

### Docker Debugging

```bash
# View container logs
docker logs -f container_name

# Follow logs with tail
docker logs -f --tail 100 container_name

# Execute command in running container
docker exec -it container_name /bin/sh

# Copy files from container
docker cp container_name:/var/log/app/error.log ./error.log

# Inspect container
docker inspect container_name

# View resource usage
docker stats container_name
```

### Kubernetes Debugging

```bash
# View pod logs
kubectl logs pod-name -f

# View logs from previous crashed pod
kubectl logs pod-name --previous

# Execute command in pod
kubectl exec -it pod-name -- /bin/sh

# Port forwarding for debugging
kubectl port-forward pod-name 9229:9229

# Describe pod for events
kubectl describe pod pod-name

# View pod resource usage
kubectl top pod pod-name

# Debug with ephemeral container
kubectl debug pod-name -it --image=busybox
```

## Best Practices

1. **Never use debugger statements in production** - Remove before deployment
2. **Use structured logging** - JSON format for log aggregation
3. **Implement correlation IDs** - Track requests across services
4. **Set up error tracking** - Sentry, Rollbar, or similar
5. **Monitor application metrics** - Use APM tools
6. **Health checks** - Liveness and readiness probes
7. **Secure remote debugging** - Use SSH tunnels, VPN
8. **Log aggregation** - ELK Stack, Splunk, CloudWatch
9. **Feature flags** - Control debug logging without deployment
10. **Performance monitoring** - Track slow queries and endpoints

Debugging deployed applications requires proper logging, monitoring, and the right tools to identify and fix issues quickly.
