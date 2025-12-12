# Using Logs for Debugging

Comprehensive guide to effective logging strategies for debugging applications in production and development.

## Logging Levels

### Standard Log Levels

```
FATAL - Critical errors causing application shutdown
ERROR - Runtime errors requiring attention
WARN  - Warning messages for potentially harmful situations
INFO  - Informational messages about application progress
DEBUG - Detailed information for debugging
TRACE - Very detailed information (method entry/exit, variable values)
```

## Node.js Logging

### Winston Logger

```javascript
import winston from 'winston';

// Create logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    // Error logs
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // Combined logs
    new winston.transports.File({ 
      filename: 'logs/combined.log',
      maxsize: 5242880,
      maxFiles: 5
    })
  ]
});

// Console logging for development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

export default logger;
```

### Usage Examples

```javascript
import logger from './logger';

// Info level
logger.info('User logged in', { userId: 123, username: 'john' });

// Debug level with context
logger.debug('Processing order', { 
  orderId: 456,
  items: 3,
  total: 99.99
});

// Error with stack trace
try {
  processPayment(order);
} catch (error) {
  logger.error('Payment processing failed', {
    error: error.message,
    stack: error.stack,
    orderId: order.id
  });
}

// Warning
logger.warn('API rate limit approaching', { 
  current: 950, 
  limit: 1000 
});
```

### Request Logging Middleware

```javascript
import morgan from 'morgan';

// Custom token for response time
morgan.token('response-time-ms', (req, res) => {
  if (!req._startTime) return '0';
  return (Date.now() - req._startTime).toString();
});

// Custom format
const logFormat = ':method :url :status :response-time ms - :res[content-length]';

// Development logging
app.use(morgan('dev'));

// Production logging with Winston
app.use(morgan(logFormat, {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

// Custom request logging
app.use((req, res, next) => {
  req._startTime = Date.now();
  
  logger.info('Incoming request', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    userId: req.user?.id
  });
  
  res.on('finish', () => {
    logger.info('Request completed', {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: Date.now() - req._startTime,
      userId: req.user?.id
    });
  });
  
  next();
});
```

## Java Logging

### SLF4J with Logback

```xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>2.0.9</version>
    </dependency>
    <dependency>
        <groupId>ch.qos.logback</groupId>
        <artifactId>logback-classic</artifactId>
        <version>1.4.11</version>
    </dependency>
</dependencies>
```

### Logback Configuration

```xml
<!-- src/main/resources/logback-spring.xml -->
<configuration>
    <property name="LOG_PATH" value="logs"/>
    <property name="LOG_PATTERN" 
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"/>
    
    <!-- Console Appender -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
    </appender>
    
    <!-- File Appender -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/application.log</file>
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/application-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy 
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>10MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
    </appender>
    
    <!-- Error File Appender -->
    <appender name="ERROR_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_PATH}/error.log</file>
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
        <encoder>
            <pattern>${LOG_PATTERN}</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${LOG_PATH}/error-%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
    </appender>
    
    <!-- Async Appenders for better performance -->
    <appender name="ASYNC_FILE" class="ch.qos.logback.classic.AsyncAppender">
        <appender-ref ref="FILE"/>
        <queueSize>512</queueSize>
    </appender>
    
    <!-- Root Logger -->
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="ASYNC_FILE"/>
        <appender-ref ref="ERROR_FILE"/>
    </root>
    
    <!-- Specific Logger Levels -->
    <logger name="com.example.myapp" level="DEBUG"/>
    <logger name="org.springframework.web" level="INFO"/>
    <logger name="org.hibernate" level="WARN"/>
</configuration>
```

### Java Logging Examples

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    
    public User createUser(User user) {
        logger.info("Creating user: {}", user.getEmail());
        
        try {
            validateUser(user);
            User savedUser = userRepository.save(user);
            
            logger.info("User created successfully: userId={}, email={}", 
                savedUser.getId(), savedUser.getEmail());
            
            return savedUser;
        } catch (ValidationException e) {
            logger.warn("User validation failed: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            logger.error("Error creating user: email={}", user.getEmail(), e);
            throw new ServiceException("Failed to create user", e);
        }
    }
    
    public User findById(Long userId) {
        logger.debug("Finding user by id: {}", userId);
        
        return userRepository.findById(userId)
            .orElseThrow(() -> {
                logger.warn("User not found: userId={}", userId);
                return new UserNotFoundException(userId);
            });
    }
    
    private void validateUser(User user) {
        logger.trace("Validating user: {}", user);
        
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            logger.debug("User validation failed: email is required");
            throw new ValidationException("Email is required");
        }
    }
}
```

## Structured Logging

### JSON Logging with Winston

```javascript
// Structured logging format
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/app.json' })
  ]
});

// Log with structured data
logger.info('Order processed', {
  event: 'order_processed',
  orderId: 12345,
  userId: 678,
  amount: 99.99,
  currency: 'USD',
  items: [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 1 }
  ],
  processingTime: 1250,
  timestamp: new Date().toISOString()
});
```

### MDC (Mapped Diagnostic Context) in Java

```java
import org.slf4j.MDC;

@Component
public class RequestInterceptor implements HandlerInterceptor {
    
    @Override
    public boolean preHandle(HttpServletRequest request, 
                            HttpServletResponse response, 
                            Object handler) {
        // Add request ID to MDC
        String requestId = UUID.randomUUID().toString();
        MDC.put("requestId", requestId);
        MDC.put("userId", getCurrentUserId(request));
        MDC.put("ipAddress", request.getRemoteAddr());
        
        return true;
    }
    
    @Override
    public void afterCompletion(HttpServletRequest request, 
                               HttpServletResponse response, 
                               Object handler, 
                               Exception ex) {
        // Clear MDC
        MDC.clear();
    }
}

// Logback pattern with MDC
// <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] [%X{requestId}] [%X{userId}] %-5level %logger{36} - %msg%n</pattern>

// Usage in service
@Service
public class OrderService {
    
    private static final Logger logger = LoggerFactory.getLogger(OrderService.class);
    
    public void processOrder(Order order) {
        MDC.put("orderId", order.getId().toString());
        
        logger.info("Processing order");
        // Log will include requestId, userId, and orderId
        
        MDC.remove("orderId");
    }
}
```

## Debug Logging Patterns

### Conditional Debug Logging

```javascript
// Only evaluate expensive operations when debug is enabled
if (logger.isDebugEnabled()) {
  logger.debug('Complex data', { 
    data: JSON.stringify(complexObject, null, 2)
  });
}
```

### Function Entry/Exit Logging

```javascript
function processOrder(order) {
  logger.debug('ENTER processOrder', { orderId: order.id });
  
  try {
    // Process order
    const result = performProcessing(order);
    
    logger.debug('EXIT processOrder', { 
      orderId: order.id, 
      result: result.status 
    });
    
    return result;
  } catch (error) {
    logger.error('ERROR in processOrder', { 
      orderId: order.id, 
      error: error.message 
    });
    throw error;
  }
}
```

### Performance Logging

```javascript
function measurePerformance(fn, context) {
  return async function(...args) {
    const startTime = Date.now();
    const fnName = fn.name || 'anonymous';
    
    logger.debug(`Starting ${fnName}`, { context });
    
    try {
      const result = await fn.apply(this, args);
      const duration = Date.now() - startTime;
      
      logger.info(`Completed ${fnName}`, { 
        context,
        duration,
        status: 'success'
      });
      
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      logger.error(`Failed ${fnName}`, { 
        context,
        duration,
        error: error.message
      });
      
      throw error;
    }
  };
}

// Usage
const processOrderWithLogging = measurePerformance(
  processOrder, 
  { service: 'OrderService' }
);
```

## Log Analysis

### Searching Logs

```bash
# Search for errors
grep "ERROR" logs/application.log

# Search with context
grep -A 5 -B 5 "ERROR" logs/application.log

# Search for specific user
grep "userId=123" logs/application.log

# Count error occurrences
grep -c "ERROR" logs/application.log

# Search across multiple files
grep -r "OutOfMemoryError" logs/

# Search with regex
grep -E "(ERROR|FATAL)" logs/application.log
```

### Log Analysis with awk

```bash
# Extract response times over 1000ms
awk '$NF > 1000 { print $0 }' logs/access.log

# Count requests by status code
awk '{ print $9 }' logs/access.log | sort | uniq -c

# Average response time
awk '{ sum += $NF; count++ } END { print sum/count }' logs/access.log
```

## Best Practices

1. **Use appropriate log levels** - Don't log everything as ERROR
2. **Include context** - User ID, request ID, correlation ID
3. **Structured logging** - Use JSON format for easier parsing
4. **Avoid sensitive data** - Don't log passwords, tokens, credit cards
5. **Performance considerations** - Use async logging in production
6. **Log rotation** - Prevent logs from filling disk space
7. **Centralized logging** - Use ELK Stack, Splunk, or CloudWatch
8. **Correlation IDs** - Track requests across microservices
9. **Meaningful messages** - Make logs searchable and actionable
10. **Monitor logs** - Set up alerts for critical errors

Effective logging is essential for debugging production issues and monitoring application health.
