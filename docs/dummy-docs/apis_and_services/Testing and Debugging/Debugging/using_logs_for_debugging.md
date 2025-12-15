# Using Logs for Debugging

Learn how to effectively use logging for debugging your applications.

## Overview
Logging is a critical tool for debugging applications, providing insights into application behavior, errors, and performance issues.

## Logging Frameworks

### Popular Java Logging Frameworks
- Log4j 2
- SLF4J with Logback
- Java Util Logging (JUL)
- Apache Commons Logging

### Logging Levels
- **TRACE** - Very detailed information
- **DEBUG** - Detailed debugging information
- **INFO** - Informational messages
- **WARN** - Warning messages
- **ERROR** - Error events
- **FATAL** - Critical errors

## Implementing Logging

### Basic Logging Example
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyService {
    private static final Logger logger = LoggerFactory.getLogger(MyService.class);

    public void processData(String data) {
        logger.debug("Processing data: {}", data);

        try {
            // Process data
            logger.info("Data processed successfully");
        } catch (Exception e) {
            logger.error("Error processing data", e);
        }
    }
}
```

### Structured Logging
```java
logger.info("User action completed",
    kv("userId", userId),
    kv("action", "purchase"),
    kv("amount", amount));
```

## Log Configuration

### Configuring Log Levels
- Set appropriate log levels for different packages
- Use DEBUG in development
- Use INFO/WARN in production
- Enable TRACE for specific troubleshooting

### Log Appenders
- Console appender
- File appender
- Rolling file appender
- Database appender
- Remote logging services

### Log Formatting
- Pattern layout
- JSON format
- Custom formatters
- Include timestamps
- Add thread information
- Include class and method names

## Debugging Techniques with Logs

### Strategic Log Placement
- Entry and exit points of methods
- Before and after critical operations
- Exception catch blocks
- Conditional branches
- Loop iterations (carefully)

### Contextual Information
```java
logger.debug("Starting order processing for orderId: {}, userId: {}", orderId, userId);
// Process order
logger.debug("Order processing completed. Status: {}, time: {}ms", status, duration);
```

### Exception Logging
```java
try {
    performOperation();
} catch (SpecificException e) {
    logger.error("Failed to perform operation for user {}: {}",
        userId, e.getMessage(), e);
    // Include full stack trace with 'e' parameter
}
```

## Log Analysis

### Reading Logs
- Filter by log level
- Search for error patterns
- Trace request flows
- Identify performance bottlenecks

### Log Aggregation Tools
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Splunk
- Graylog
- CloudWatch Logs

### Correlation IDs
Use correlation IDs to track requests across services:
```java
MDC.put("correlationId", correlationId);
logger.info("Processing request");
MDC.clear();
```

## Best Practices

### What to Log
- Application startup and shutdown
- Configuration changes
- User actions
- Database queries (in debug mode)
- API calls
- Errors and exceptions
- Performance metrics

### What NOT to Log
- Sensitive data (passwords, credit cards)
- Personal information (unless necessary)
- Excessive detail in production
- Inside tight loops (causes performance issues)

### Performance Considerations
```java
// Bad - String concatenation happens even if debug is disabled
logger.debug("Processing " + expensiveOperation());

// Good - Only evaluated if debug is enabled
logger.debug("Processing {}", () -> expensiveOperation());

// Or check log level first
if (logger.isDebugEnabled()) {
    logger.debug("Processing " + expensiveOperation());
}
```

### Log Maintenance
- Rotate log files
- Archive old logs
- Set retention policies
- Monitor disk space
- Compress archived logs

## Debugging Common Issues

### Application Not Starting
- Check startup logs
- Look for configuration errors
- Verify dependencies
- Check port conflicts

### Unexpected Behavior
- Enable DEBUG level
- Add strategic log statements
- Trace data flow
- Compare with expected behavior

### Performance Issues
- Log execution times
- Identify slow operations
- Monitor resource usage
- Analyze bottlenecks

### Production Debugging
- Use appropriate log levels
- Avoid verbose logging
- Enable DEBUG temporarily
- Monitor log volume
- Use feature flags for detailed logging

## Troubleshooting Logging Issues

### Logs Not Appearing
- Verify logger configuration
- Check log level settings
- Verify appender configuration
- Check file permissions

### Log File Growth
- Implement log rotation
- Reduce log verbosity
- Remove unnecessary logs
- Archive old logs

### Performance Impact
- Reduce logging frequency
- Use async appenders
- Optimize log formatting
- Conditional logging
