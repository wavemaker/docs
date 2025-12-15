# Inspection Framework

Learn about inspection frameworks and tools for analyzing and debugging code at runtime.

## Overview
Inspection frameworks provide capabilities to examine, monitor, and analyze applications at runtime, offering deep insights into application behavior and state.

## Types of Inspection

### Code Inspection
- Static code analysis
- Runtime code inspection
- Bytecode analysis
- Class structure examination

### Runtime Inspection
- Object state inspection
- Memory inspection
- Thread inspection
- Stack trace analysis

### Performance Inspection
- CPU profiling
- Memory profiling
- Thread profiling
- I/O monitoring

## Java Inspection Tools

### Java Reflection API
```java
// Inspect class structure
Class<?> clazz = MyClass.class;

// Get methods
Method[] methods = clazz.getDeclaredMethods();
for (Method method : methods) {
    System.out.println("Method: " + method.getName());
}

// Get fields
Field[] fields = clazz.getDeclaredFields();
for (Field field : fields) {
    System.out.println("Field: " + field.getName());
}

// Invoke method dynamically
Method method = clazz.getMethod("methodName", parameterTypes);
Object result = method.invoke(instance, arguments);
```

### Java Management Extensions (JMX)
```java
// Create MBean
@ManagedResource
public class ApplicationMonitor implements ApplicationMonitorMBean {

    @ManagedAttribute
    public int getActiveUsers() {
        return userService.getActiveCount();
    }

    @ManagedOperation
    public void clearCache() {
        cacheService.clear();
    }
}

// Access via JConsole or VisualVM
```

### Java Instrumentation
```java
public class InspectionAgent {
    public static void premain(String agentArgs, Instrumentation inst) {
        inst.addTransformer(new ClassFileTransformer() {
            public byte[] transform(ClassLoader loader,
                                   String className,
                                   Class<?> classBeingRedefined,
                                   ProtectionDomain protectionDomain,
                                   byte[] classfileBuffer) {
                // Inspect or modify bytecode
                return modifiedBytecode;
            }
        });
    }
}
```

## Debugging Inspection Tools

### VisualVM
- Heap dump analysis
- Thread dump analysis
- CPU and memory profiling
- MBean browser
- Visual GC monitoring

### JConsole
- Memory monitoring
- Thread monitoring
- Class loading statistics
- MBean operations
- VM summary information

### Java Mission Control (JMC)
- Flight recorder analysis
- Advanced profiling
- Memory leak detection
- Performance optimization

## Browser Inspection (JavaScript)

### Elements Inspection
```javascript
// Inspect DOM elements
console.dir(document.querySelector('#myElement'));

// View computed styles
window.getComputedStyle(element);

// Monitor DOM changes
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        console.log('DOM changed:', mutation);
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
```

### Object Inspection
```javascript
// Detailed object inspection
console.dir(complexObject);

// Property enumeration
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
});

// Prototype chain inspection
Object.getPrototypeOf(obj);
```

### Performance Inspection
```javascript
// Performance observer
const observer = new PerformanceObserver(list => {
    list.getEntries().forEach(entry => {
        console.log('Performance:', entry);
    });
});

observer.observe({ entryTypes: ['measure', 'navigation'] });
```

## Memory Inspection

### Heap Snapshots
- Capture heap state
- Compare snapshots
- Identify memory leaks
- Analyze object retention

### Memory Analysis Process
1. Take initial snapshot
2. Perform operations
3. Take second snapshot
4. Compare snapshots
5. Identify growing objects
6. Trace retention paths

### Memory Leak Detection
```java
// Weak references for monitoring
WeakReference<Object> weakRef = new WeakReference<>(object);

// Check if collected
if (weakRef.get() == null) {
    logger.debug("Object was garbage collected");
}

// Phantom references for cleanup
PhantomReference<Object> phantomRef = new PhantomReference<>(object, queue);
```

## Thread Inspection

### Thread Dump Analysis
```java
// Programmatic thread dump
Thread[] threads = new Thread[Thread.activeCount()];
Thread.enumerate(threads);

for (Thread thread : threads) {
    System.out.println("Thread: " + thread.getName());
    System.out.println("State: " + thread.getState());
    System.out.println("Priority: " + thread.getPriority());

    StackTraceElement[] stackTrace = thread.getStackTrace();
    for (StackTraceElement element : stackTrace) {
        System.out.println("  " + element);
    }
}
```

### Deadlock Detection
```java
ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
long[] deadlockedThreads = threadBean.findDeadlockedThreads();

if (deadlockedThreads != null) {
    ThreadInfo[] threadInfos = threadBean.getThreadInfo(deadlockedThreads);
    for (ThreadInfo threadInfo : threadInfos) {
        System.out.println("Deadlocked thread: " + threadInfo.getThreadName());
    }
}
```

## Custom Inspection Framework

### Building Custom Inspector
```java
public class ObjectInspector {

    public static String inspect(Object obj) {
        if (obj == null) return "null";

        StringBuilder sb = new StringBuilder();
        Class<?> clazz = obj.getClass();

        sb.append("Class: ").append(clazz.getName()).append("\n");

        // Inspect fields
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            try {
                Object value = field.get(obj);
                sb.append("  ")
                  .append(field.getName())
                  .append(" = ")
                  .append(value)
                  .append("\n");
            } catch (IllegalAccessException e) {
                sb.append("  ").append(field.getName())
                  .append(" = <inaccessible>\n");
            }
        }

        return sb.toString();
    }
}
```

### Method Call Tracing
```java
public class MethodTracer {

    public static void trace(String methodName, Object... args) {
        StackTraceElement[] stack = Thread.currentThread().getStackTrace();

        logger.debug("Method: {}", methodName);
        logger.debug("Arguments: {}", Arrays.toString(args));
        logger.debug("Called from: {}",
            stack[2].getClassName() + "." + stack[2].getMethodName());
    }
}
```

## Aspect-Oriented Inspection

### Using AspectJ
```java
@Aspect
public class InspectionAspect {

    @Around("execution(* com.example.service.*.*(..))")
    public Object inspectMethod(ProceedingJoinPoint joinPoint) throws Throwable {
        String methodName = joinPoint.getSignature().getName();
        Object[] args = joinPoint.getArgs();

        logger.debug("Entering method: {} with args: {}",
            methodName, Arrays.toString(args));

        long startTime = System.currentTimeMillis();

        try {
            Object result = joinPoint.proceed();
            logger.debug("Method {} returned: {}", methodName, result);
            return result;
        } catch (Exception e) {
            logger.error("Method {} threw exception", methodName, e);
            throw e;
        } finally {
            long duration = System.currentTimeMillis() - startTime;
            logger.debug("Method {} took {}ms", methodName, duration);
        }
    }
}
```

## Runtime Monitoring

### Health Checks
```java
@Component
public class ApplicationHealthInspector {

    public HealthReport inspect() {
        HealthReport report = new HealthReport();

        // Check database connection
        report.setDatabaseHealth(checkDatabaseHealth());

        // Check memory usage
        Runtime runtime = Runtime.getRuntime();
        long usedMemory = runtime.totalMemory() - runtime.freeMemory();
        report.setMemoryUsage(usedMemory);

        // Check thread count
        report.setThreadCount(Thread.activeCount());

        return report;
    }
}
```

### Metrics Collection
```java
public class MetricsInspector {

    private final Map<String, Counter> counters = new ConcurrentHashMap<>();
    private final Map<String, Timer> timers = new ConcurrentHashMap<>();

    public void recordOperation(String operation) {
        counters.computeIfAbsent(operation, k -> new Counter())
                .increment();
    }

    public void recordTiming(String operation, long duration) {
        timers.computeIfAbsent(operation, k -> new Timer())
              .record(duration);
    }

    public Map<String, Object> getMetrics() {
        // Return collected metrics
        return Map.of(
            "counters", counters,
            "timers", timers
        );
    }
}
```

## Best Practices

### Inspection Guidelines
1. **Minimize performance impact**
   - Use sampling when possible
   - Disable verbose inspection in production
   - Use conditional inspection

2. **Security considerations**
   - Protect sensitive data
   - Restrict inspection access
   - Audit inspection activities

3. **Organized inspection**
   - Structure inspection output
   - Use consistent formatting
   - Group related information

4. **Actionable insights**
   - Focus on relevant information
   - Provide context
   - Suggest solutions

### Production Inspection
- Use feature flags
- Implement sampling
- Monitor impact
- Secure access
- Audit usage

## Common Use Cases

### Debugging Production Issues
- Inspect object state
- Trace method calls
- Monitor performance
- Analyze memory usage

### Performance Optimization
- Profile CPU usage
- Identify bottlenecks
- Analyze memory patterns
- Monitor I/O operations

### Security Auditing
- Inspect access patterns
- Monitor authentication
- Track data access
- Audit sensitive operations

## Tools Summary

### Java Tools
- VisualVM
- JConsole
- Java Mission Control
- YourKit
- JProfiler

### Browser Tools
- Chrome DevTools
- Firefox Developer Tools
- Safari Web Inspector
- Edge DevTools

### APM Tools
- New Relic
- AppDynamics
- Dynatrace
- DataDog
