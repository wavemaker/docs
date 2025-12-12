# Print and Logger Statements

Comprehensive guide to using print and logger statements effectively for debugging applications.

## Console Logging Best Practices

### Strategic Print Placement

```javascript
// ❌ Bad: Too much logging
function calculateTotal(items) {
  console.log('Starting calculateTotal');
  console.log('Items:', items);
  let total = 0;
  console.log('Initial total:', total);
  
  for (let i = 0; i < items.length; i++) {
    console.log('Processing item', i);
    console.log('Item:', items[i]);
    total += items[i].price;
    console.log('New total:', total);
  }
  
  console.log('Final total:', total);
  return total;
}

// ✅ Good: Strategic logging
function calculateTotal(items) {
  logger.debug('Calculating total', { itemCount: items.length });
  
  const total = items.reduce((sum, item) => sum + item.price, 0);
  
  logger.debug('Total calculated', { total, itemCount: items.length });
  return total;
}
```

### Meaningful Log Messages

```javascript
// ❌ Bad: Unclear messages
console.log('data:', data);
console.log('result:', result);
console.log('here');
console.log('x');

// ✅ Good: Clear, contextual messages
logger.info('User data retrieved from database', { 
  userId: data.id, 
  fetchTime: Date.now() - startTime 
});

logger.info('Payment processed successfully', { 
  orderId: result.orderId,
  amount: result.amount,
  transactionId: result.transactionId
});

logger.debug('Entering order validation', { orderId: order.id });

logger.error('Invalid user credentials', { 
  username: credentials.username,
  attemptNumber: attempt
});
```

## Logging Levels

### Using Appropriate Levels

```javascript
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// TRACE - Very detailed information
logger.silly('Function parameter values', { 
  param1: value1, 
  param2: value2 
});

// DEBUG - Detailed information for diagnosing problems
logger.debug('Cache miss, fetching from database', { 
  key: cacheKey 
});

// INFO - General informational messages
logger.info('User logged in successfully', { 
  userId: user.id,
  timestamp: new Date().toISOString()
});

// WARN - Warning messages for potentially harmful situations
logger.warn('API rate limit approaching', { 
  current: 950,
  limit: 1000,
  userId: user.id
});

// ERROR - Error events that might still allow the app to continue
logger.error('Database query failed', { 
  error: err.message,
  query: sqlQuery,
  parameters: params
});

// FATAL - Very severe error events that might cause termination
logger.error('Database connection lost', { 
  error: err.message,
  retryCount: retries,
  fatal: true
});
```

## Contextual Logging

### Adding Context to Logs

```javascript
// Create child logger with context
const requestLogger = logger.child({
  requestId: req.id,
  userId: req.user?.id,
  ip: req.ip,
  userAgent: req.headers['user-agent']
});

// All logs from this logger will include the context
requestLogger.info('Processing order', { orderId: order.id });
requestLogger.warn('Low inventory', { productId: product.id, quantity: 2 });
requestLogger.error('Payment failed', { error: err.message });

// Function-scoped logger
function processOrder(order) {
  const fnLogger = logger.child({ 
    function: 'processOrder',
    orderId: order.id 
  });
  
  fnLogger.debug('Validating order');
  validateOrder(order);
  
  fnLogger.debug('Processing payment');
  const payment = processPayment(order);
  
  fnLogger.info('Order processed successfully', { 
    paymentId: payment.id 
  });
}
```

### Request Correlation

```javascript
import { v4 as uuidv4 } from 'uuid';
import { AsyncLocalStorage } from 'async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

// Middleware to create correlation ID
app.use((req, res, next) => {
  const correlationId = req.headers['x-correlation-id'] || uuidv4();
  
  asyncLocalStorage.run({ correlationId }, () => {
    req.correlationId = correlationId;
    res.setHeader('X-Correlation-ID', correlationId);
    next();
  });
});

// Logger that includes correlation ID
function log(level, message, meta = {}) {
  const store = asyncLocalStorage.getStore();
  logger[level](message, {
    ...meta,
    correlationId: store?.correlationId
  });
}

// Usage
log('info', 'Processing request', { endpoint: '/api/users' });
log('error', 'Request failed', { error: err.message });
```

## Conditional Logging

### Debug Mode

```javascript
class Logger {
  constructor(debugMode = false) {
    this.debugMode = debugMode;
  }
  
  debug(message, data) {
    if (this.debugMode) {
      console.log(`[DEBUG] ${message}`, data);
    }
  }
  
  info(message, data) {
    console.log(`[INFO] ${message}`, data);
  }
  
  error(message, data) {
    console.error(`[ERROR] ${message}`, data);
  }
}

// Enable debug mode via environment variable
const logger = new Logger(process.env.DEBUG === 'true');

// Enable debug mode for specific users
function createUserLogger(user) {
  const debugEnabled = user.role === 'admin' || 
                       process.env.DEBUG_USERS?.includes(user.id);
  return new Logger(debugEnabled);
}
```

### Performance-Conscious Logging

```javascript
// ❌ Bad: Always evaluates expensive operation
logger.debug('User data', JSON.stringify(largeObject, null, 2));

// ✅ Good: Only evaluate when debug is enabled
if (logger.level === 'debug') {
  logger.debug('User data', JSON.stringify(largeObject, null, 2));
}

// ✅ Better: Lazy evaluation
logger.debug(() => ['User data', JSON.stringify(largeObject, null, 2)]);

// Implementation
class LazyLogger {
  debug(messageFn) {
    if (this.level === 'debug') {
      const [message, ...args] = typeof messageFn === 'function' 
        ? messageFn() 
        : [messageFn];
      console.log(message, ...args);
    }
  }
}
```

## Structured Logging

### JSON Format

```javascript
import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'app.json' })
  ]
});

// Produces structured JSON logs
logger.info('Order created', {
  event: 'order_created',
  orderId: '12345',
  userId: '67890',
  amount: 99.99,
  currency: 'USD',
  items: [
    { productId: 'A1', quantity: 2, price: 29.99 },
    { productId: 'B2', quantity: 1, price: 40.01 }
  ],
  timestamp: new Date().toISOString()
});

// Output:
// {
//   "level": "info",
//   "message": "Order created",
//   "event": "order_created",
//   "orderId": "12345",
//   "userId": "67890",
//   "amount": 99.99,
//   ...
// }
```

## Print Statement Patterns

### Entry/Exit Logging

```javascript
function processOrder(order) {
  logger.debug('→ processOrder', { orderId: order.id });
  
  try {
    const result = performProcessing(order);
    logger.debug('← processOrder', { 
      orderId: order.id, 
      status: result.status 
    });
    return result;
  } catch (error) {
    logger.error('✗ processOrder failed', { 
      orderId: order.id, 
      error: error.message 
    });
    throw error;
  }
}
```

### Variable Inspection

```javascript
// Print variable state at specific point
function calculateDiscount(order) {
  logger.debug('Order before discount', { 
    orderId: order.id,
    subtotal: order.subtotal,
    discountCode: order.discountCode
  });
  
  const discount = applyDiscount(order);
  
  logger.debug('Order after discount', { 
    orderId: order.id,
    subtotal: order.subtotal,
    discount: discount,
    total: order.subtotal - discount
  });
  
  return discount;
}
```

### Comparison Logging

```javascript
// Log before and after state
function updateUserProfile(userId, updates) {
  const before = await getUser(userId);
  logger.debug('User before update', { 
    userId, 
    profile: before 
  });
  
  const after = await user.update(updates);
  logger.debug('User after update', { 
    userId, 
    profile: after,
    changes: getDiff(before, after)
  });
  
  return after;
}

function getDiff(before, after) {
  const changes = {};
  for (const key in after) {
    if (before[key] !== after[key]) {
      changes[key] = { before: before[key], after: after[key] };
    }
  }
  return changes;
}
```

## Java Logger Statements

### SLF4J Logging

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class OrderService {
    
    private static final Logger log = LoggerFactory.getLogger(OrderService.class);
    
    public Order processOrder(Order order) {
        log.debug("Processing order: orderId={}", order.getId());
        
        try {
            validateOrder(order);
            log.debug("Order validated: orderId={}", order.getId());
            
            Payment payment = processPayment(order);
            log.info("Payment processed: orderId={}, paymentId={}, amount={}", 
                order.getId(), payment.getId(), payment.getAmount());
            
            return order;
        } catch (ValidationException e) {
            log.warn("Order validation failed: orderId={}, reason={}", 
                order.getId(), e.getMessage());
            throw e;
        } catch (PaymentException e) {
            log.error("Payment processing failed: orderId={}, error={}", 
                order.getId(), e.getMessage(), e);
            throw e;
        }
    }
    
    // Conditional logging to avoid expensive string operations
    public void processLargeData(Data data) {
        if (log.isDebugEnabled()) {
            log.debug("Processing data: {}", data.toDetailedString());
        }
        
        // Process data
    }
}
```

### Log4j2 Logging

```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class UserService {
    
    private static final Logger logger = LogManager.getLogger(UserService.class);
    
    public void createUser(User user) {
        logger.info("Creating user: email={}", user.getEmail());
        
        try {
            userRepository.save(user);
            logger.info("User created: userId={}, email={}", 
                user.getId(), user.getEmail());
        } catch (DataIntegrityViolationException e) {
            logger.error("Failed to create user: email={}, error={}", 
                user.getEmail(), e.getMessage());
            throw e;
        }
    }
    
    // Lazy logging with lambda
    public void processData(ComplexData data) {
        logger.debug("Data: {}", () -> data.toJson());
    }
}
```

## Temporary Debug Logging

### Temporary Logs for Debugging

```javascript
// Use a prefix to identify temporary logs
const DEBUG = 'TEMP_DEBUG';

function suspiciousFunction(data) {
  console.log(`${DEBUG}: Function called`, data);
  
  // Your code
  const result = processData(data);
  
  console.log(`${DEBUG}: Result`, result);
  
  return result;
}

// Easy to find and remove
// grep -r "TEMP_DEBUG" .
// Then remove before committing
```

### Time-boxed Debug Logging

```javascript
// Debug logging that expires
const DEBUG_UNTIL = new Date('2024-12-31');

function conditionalLog(message, data) {
  if (new Date() < DEBUG_UNTIL) {
    console.log('[TEMPORARY]', message, data);
  }
}

// Or use environment variable
function debugLog(message, data) {
  if (process.env.TEMPORARY_DEBUG === 'true') {
    console.log('[TEMPORARY]', message, data);
  }
}
```

## Removing Print Statements

### Pre-commit Hooks

```bash
# .git/hooks/pre-commit
#!/bin/sh

# Check for console.log in staged files
if git diff --cached --name-only | grep -E '\.(js|ts|jsx|tsx)$' | xargs grep -n 'console\.log'; then
    echo "Error: console.log statements found. Please remove them before committing."
    exit 1
fi
```

### ESLint Configuration

```json
{
  "rules": {
    "no-console": ["error", { 
      "allow": ["warn", "error"] 
    }]
  }
}
```

## Best Practices

1. **Use logger instead of console** - Structured, leveled, configurable
2. **Include context** - User ID, request ID, operation details
3. **Appropriate log levels** - Don't log everything as ERROR
4. **Performance conscious** - Avoid expensive operations in logs
5. **Remove temporary logs** - Before committing code
6. **Structured data** - Use objects, not string concatenation
7. **Consistent format** - Make logs searchable
8. **Correlation IDs** - Track requests across services
9. **Sensitive data** - Never log passwords, tokens, credit cards
10. **Log rotation** - Prevent disk space issues

Effective use of print and logger statements helps debug issues quickly while maintaining code quality and performance.
