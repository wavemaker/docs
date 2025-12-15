# Print Logger Statement

Learn how to effectively use print and logger statements for debugging.

## Overview
Print and logger statements are fundamental debugging tools that help track program flow, variable values, and identify issues.

## Print vs Logger

### Print Statements
```java
// Java
System.out.println("Debug message: " + value);

// JavaScript
console.log("Debug message:", value);

// Python
print(f"Debug message: {value}")
```

### Logger Statements
```java
// Java with SLF4J
logger.debug("Debug message: {}", value);
logger.info("Info message: {}", value);
logger.error("Error occurred", exception);
```

### When to Use Each

**Use Print Statements:**
- Quick, temporary debugging
- Simple scripts or prototypes
- Local development only
- Learning and experimentation

**Use Logger Statements:**
- Production code
- Long-term debugging
- Different log levels needed
- Configurable output
- Professional applications

## Effective Print Debugging

### Basic Principles
```java
// Identify location
System.out.println("=== Starting processOrder ===");

// Show variable values
System.out.println("orderId: " + orderId);
System.out.println("userId: " + userId);

// Track execution flow
System.out.println("Before database call");
// ... database operation
System.out.println("After database call");

// Mark completion
System.out.println("=== Finished processOrder ===");
```

### Descriptive Output
```javascript
// Bad - unclear
console.log(data);

// Good - descriptive
console.log("User data received:", data);
console.log("Processing order ID:", orderId);
```

### Formatting Output
```java
// Java
System.out.println("========================================");
System.out.println("DEBUG: User Processing");
System.out.println("----------------------------------------");
System.out.println("User ID: " + userId);
System.out.println("Name: " + userName);
System.out.println("========================================");

// JavaScript - styled console
console.log("%c Debug Info", "color: blue; font-weight: bold");
console.log("%c Error", "color: red; font-weight: bold", errorMessage);
```

## Logger Statement Best Practices

### Choose Appropriate Log Level
```java
// TRACE - Very detailed, rarely used
logger.trace("Entering method with parameters: {}, {}", param1, param2);

// DEBUG - Detailed debugging info
logger.debug("Processing item {}, current count: {}", itemId, count);

// INFO - General information
logger.info("User {} logged in successfully", username);

// WARN - Warning conditions
logger.warn("Retry attempt {} for operation {}", attempt, operation);

// ERROR - Error events
logger.error("Failed to process order {}", orderId, exception);
```

### Structured Logging
```java
// Include context
logger.info("Order processed",
    kv("orderId", orderId),
    kv("userId", userId),
    kv("amount", amount),
    kv("duration", duration));

// Method with structured data
logger.debug("Database query executed",
    kv("query", queryName),
    kv("rows", rowCount),
    kv("time", executionTime));
```

### Parameterized Messages
```java
// Bad - String concatenation
logger.debug("User " + userId + " processed " + count + " items");

// Good - Parameterized
logger.debug("User {} processed {} items", userId, count);

// Multiple parameters
logger.info("Transaction: user={}, order={}, amount={}, status={}",
    userId, orderId, amount, status);
```

## Strategic Placement

### Method Entry and Exit
```java
public void processOrder(Order order) {
    logger.debug("Entering processOrder with orderId: {}", order.getId());

    try {
        // Processing logic
        logger.debug("Order processing completed successfully");
    } catch (Exception e) {
        logger.error("Error processing order", e);
        throw e;
    } finally {
        logger.debug("Exiting processOrder");
    }
}
```

### Decision Points
```java
if (user.isActive()) {
    logger.debug("User {} is active, proceeding", userId);
    // Process active user
} else {
    logger.debug("User {} is inactive, skipping", userId);
    return;
}
```

### Loop Debugging
```java
// Be careful with loops - avoid excessive logging
logger.debug("Processing {} items", items.size());

for (int i = 0; i < items.size(); i++) {
    // Log only on errors or milestones
    if (i % 100 == 0) {
        logger.debug("Processed {} items so far", i);
    }

    try {
        processItem(items.get(i));
    } catch (Exception e) {
        logger.error("Failed to process item at index {}", i, e);
    }
}

logger.debug("Completed processing all items");
```

### Exception Logging
```java
try {
    performOperation();
} catch (SpecificException e) {
    // Log with full context
    logger.error("Operation failed for user {} with parameters {}",
        userId, parameters, e);

    // Include stack trace with exception parameter
    logger.error("Detailed error information", e);
}
```

## Advanced Techniques

### Conditional Logging
```java
// Check if debug is enabled before expensive operations
if (logger.isDebugEnabled()) {
    logger.debug("Expensive debug info: {}", computeExpensiveDebugInfo());
}

// Lambda for lazy evaluation
logger.debug("Debug info: {}", () -> computeExpensiveDebugInfo());
```

### Correlation IDs
```java
// Add correlation ID for request tracking
MDC.put("correlationId", correlationId);
logger.info("Processing request");
// All subsequent logs include correlationId
MDC.clear();
```

### Temporary Debug Flags
```java
private static final boolean DEBUG_MODE = true;

if (DEBUG_MODE) {
    System.out.println("Detailed debug: " + complexObject);
}

// Easy to enable/disable, remember to remove before commit
```

## What to Log

### Important Information
- Method entry/exit with parameters
- Variable state at key points
- Conditional branch taken
- External service calls
- Database operations
- Error conditions
- Performance metrics

### What NOT to Log
```java
// DON'T log sensitive data
logger.debug("User password: {}", password); // NEVER!
logger.debug("Credit card: {}", creditCard); // NEVER!

// DON'T log in tight loops
for (int i = 0; i < 1000000; i++) {
    logger.debug("Iteration {}", i); // BAD - performance impact
}

// DON'T log excessive data
logger.debug("Large object: {}", veryLargeObject.toString()); // BAD
```

## Common Patterns

### Before and After
```java
logger.debug("Before: balance = {}", account.getBalance());
account.withdraw(amount);
logger.debug("After: balance = {}", account.getBalance());
```

### State Transitions
```java
logger.info("Order status changing from {} to {}",
    order.getStatus(), newStatus);
order.setStatus(newStatus);
```

### Timing Operations
```java
long startTime = System.currentTimeMillis();
logger.debug("Starting operation");

performOperation();

long duration = System.currentTimeMillis() - startTime;
logger.debug("Operation completed in {}ms", duration);
```

## Cleanup

### Remove Debug Statements
- Remove System.out.println before committing
- Keep appropriate logger statements
- Convert temporary prints to proper logs
- Use version control to track additions

### Code Review Checklist
- [ ] No System.out.println in production code
- [ ] Appropriate log levels used
- [ ] No sensitive data logged
- [ ] Parameterized messages used
- [ ] No excessive logging in loops
- [ ] Exception stack traces included

## Tools and Techniques

### IDE Features
- Breakpoint conditions
- Logpoints (log without stopping)
- Expression evaluation
- Variable watches

### Log Analysis
```bash
# Search for specific patterns
grep "ERROR" application.log

# Filter by user
grep "userId=123" application.log

# Count occurrences
grep -c "Failed" application.log

# Follow logs in real-time
tail -f application.log
```

## Best Practices Summary

1. **Use loggers in production code**, not print statements
2. **Choose appropriate log levels**
3. **Include context** in log messages
4. **Use parameterized messages** for performance
5. **Don't log sensitive data**
6. **Be strategic** with placement
7. **Clean up** debug statements before committing
8. **Monitor performance impact** of logging
9. **Use structured logging** for better analysis
10. **Document** important log messages
