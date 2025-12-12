# Inspection Framework

Comprehensive guide to code inspection, runtime inspection, and using inspection tools for debugging and code quality.

## Runtime Inspection

### JavaScript Object Inspection

```javascript
// Deep object inspection
function inspect(obj, depth = 2) {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'function') {
      return value.toString();
    }
    if (value instanceof Error) {
      return {
        message: value.message,
        stack: value.stack,
        ...value
      };
    }
    return value;
  }, 2);
}

// Usage
const user = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  getData: function() { return this.name; }
};

console.log(inspect(user));
```

### Node.js util.inspect

```javascript
import util from 'util';

const complexObject = {
  user: {
    id: 1,
    profile: {
      name: 'John',
      settings: { theme: 'dark', notifications: true }
    }
  },
  metadata: new Map([['key1', 'value1'], ['key2', 'value2']])
};

// Basic inspection
console.log(util.inspect(complexObject));

// Custom depth and colors
console.log(util.inspect(complexObject, {
  depth: null,      // Show all levels
  colors: true,     // Colorize output
  maxArrayLength: 100,
  breakLength: 80,
  compact: false,
  sorted: true,     // Sort keys
  getters: true     // Show getters
}));

// Custom inspection for classes
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this._password = 'secret';
  }
  
  // Custom inspect method
  [util.inspect.custom](depth, options) {
    return `User { id: ${this.id}, name: ${this.name} }`;
  }
}

const user = new User(1, 'John');
console.log(util.inspect(user)); // User { id: 1, name: John }
```

## Type Inspection

### JavaScript Type Checking

```javascript
class TypeInspector {
  static getType(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'array';
    if (value instanceof Date) return 'date';
    if (value instanceof RegExp) return 'regexp';
    if (value instanceof Error) return 'error';
    return typeof value;
  }
  
  static isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
  
  static getConstructorName(value) {
    return value?.constructor?.name || 'unknown';
  }
  
  static inspectValue(value) {
    return {
      type: this.getType(value),
      constructor: this.getConstructorName(value),
      isArray: Array.isArray(value),
      isObject: this.isPlainObject(value),
      isNullish: value == null,
      prototype: Object.getPrototypeOf(value)?.constructor?.name
    };
  }
}

// Usage
console.log(TypeInspector.inspectValue([]));
console.log(TypeInspector.inspectValue(new Date()));
console.log(TypeInspector.inspectValue({ a: 1 }));
```

### Java Reflection

```java
import java.lang.reflect.*;

public class InspectionFramework {
    
    public static void inspectClass(Class<?> clazz) {
        System.out.println("Class: " + clazz.getName());
        System.out.println("Package: " + clazz.getPackage().getName());
        System.out.println("Modifiers: " + Modifier.toString(clazz.getModifiers()));
        
        // Inspect fields
        System.out.println("\nFields:");
        for (Field field : clazz.getDeclaredFields()) {
            System.out.printf("  %s %s %s%n",
                Modifier.toString(field.getModifiers()),
                field.getType().getSimpleName(),
                field.getName());
        }
        
        // Inspect methods
        System.out.println("\nMethods:");
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.printf("  %s %s %s(%s)%n",
                Modifier.toString(method.getModifiers()),
                method.getReturnType().getSimpleName(),
                method.getName(),
                getParameterTypes(method));
        }
        
        // Inspect constructors
        System.out.println("\nConstructors:");
        for (Constructor<?> constructor : clazz.getDeclaredConstructors()) {
            System.out.printf("  %s %s(%s)%n",
                Modifier.toString(constructor.getModifiers()),
                constructor.getName(),
                getParameterTypes(constructor));
        }
    }
    
    private static String getParameterTypes(Executable executable) {
        Class<?>[] types = executable.getParameterTypes();
        if (types.length == 0) return "";
        
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < types.length; i++) {
            if (i > 0) sb.append(", ");
            sb.append(types[i].getSimpleName());
        }
        return sb.toString();
    }
    
    // Inspect object values
    public static void inspectObject(Object obj) throws IllegalAccessException {
        Class<?> clazz = obj.getClass();
        System.out.println("Object of type: " + clazz.getName());
        
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            Object value = field.get(obj);
            System.out.printf("  %s = %s%n", field.getName(), value);
        }
    }
    
    // Invoke method via reflection
    public static Object invokeMethod(Object obj, String methodName, 
                                     Class<?>[] paramTypes, Object[] args) 
            throws Exception {
        Method method = obj.getClass().getDeclaredMethod(methodName, paramTypes);
        method.setAccessible(true);
        return method.invoke(obj, args);
    }
}

// Usage
public class User {
    private Long id;
    private String name;
    private String email;
    
    public String getName() {
        return name;
    }
}

// Inspect
InspectionFramework.inspectClass(User.class);

User user = new User();
InspectionFramework.inspectObject(user);
```

## Memory Inspection

### JavaScript Memory Profiling

```javascript
class MemoryInspector {
  static getMemoryUsage() {
    if (typeof process !== 'undefined' && process.memoryUsage) {
      const usage = process.memoryUsage();
      return {
        heapUsed: this.formatBytes(usage.heapUsed),
        heapTotal: this.formatBytes(usage.heapTotal),
        external: this.formatBytes(usage.external),
        rss: this.formatBytes(usage.rss)
      };
    }
    
    if (typeof performance !== 'undefined' && performance.memory) {
      return {
        usedJSHeapSize: this.formatBytes(performance.memory.usedJSHeapSize),
        totalJSHeapSize: this.formatBytes(performance.memory.totalJSHeapSize),
        jsHeapSizeLimit: this.formatBytes(performance.memory.jsHeapSizeLimit)
      };
    }
    
    return null;
  }
  
  static formatBytes(bytes) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }
  
  static async checkMemoryLeak(fn, iterations = 100) {
    const measurements = [];
    
    for (let i = 0; i < iterations; i++) {
      await fn();
      
      if (global.gc) {
        global.gc();
      }
      
      const usage = process.memoryUsage();
      measurements.push(usage.heapUsed);
      
      if (i % 10 === 0) {
        console.log(`Iteration ${i}: ${this.formatBytes(usage.heapUsed)}`);
      }
    }
    
    // Analyze trend
    const firstTen = measurements.slice(0, 10).reduce((a, b) => a + b) / 10;
    const lastTen = measurements.slice(-10).reduce((a, b) => a + b) / 10;
    const increase = ((lastTen - firstTen) / firstTen) * 100;
    
    console.log('Memory leak analysis:');
    console.log(`  Start: ${this.formatBytes(firstTen)}`);
    console.log(`  End: ${this.formatBytes(lastTen)}`);
    console.log(`  Increase: ${increase.toFixed(2)}%`);
    
    return increase > 10; // Potential leak if >10% increase
  }
}

// Usage
console.log('Memory usage:', MemoryInspector.getMemoryUsage());

// Check for memory leaks
// Run Node.js with: node --expose-gc script.js
const hasleak = await MemoryInspector.checkMemoryLeak(async () => {
  // Your function to test
  const data = new Array(1000).fill('test');
});
```

### Java Memory Inspection

```java
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;

public class MemoryInspector {
    
    public static void printMemoryUsage() {
        MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();
        
        MemoryUsage heapUsage = memoryBean.getHeapMemoryUsage();
        MemoryUsage nonHeapUsage = memoryBean.getNonHeapMemoryUsage();
        
        System.out.println("Heap Memory:");
        System.out.println("  Used: " + formatBytes(heapUsage.getUsed()));
        System.out.println("  Committed: " + formatBytes(heapUsage.getCommitted()));
        System.out.println("  Max: " + formatBytes(heapUsage.getMax()));
        
        System.out.println("Non-Heap Memory:");
        System.out.println("  Used: " + formatBytes(nonHeapUsage.getUsed()));
        System.out.println("  Committed: " + formatBytes(nonHeapUsage.getCommitted()));
    }
    
    private static String formatBytes(long bytes) {
        return String.format("%.2f MB", bytes / 1024.0 / 1024.0);
    }
    
    public static void trackMemory(Runnable task) {
        Runtime runtime = Runtime.getRuntime();
        
        long before = runtime.totalMemory() - runtime.freeMemory();
        System.out.println("Memory before: " + formatBytes(before));
        
        task.run();
        
        System.gc();
        
        long after = runtime.totalMemory() - runtime.freeMemory();
        System.out.println("Memory after: " + formatBytes(after));
        System.out.println("Difference: " + formatBytes(after - before));
    }
}
```

## Call Stack Inspection

### JavaScript Stack Traces

```javascript
class StackInspector {
  static getStackTrace() {
    const stack = new Error().stack;
    return stack
      .split('\n')
      .slice(2) // Remove Error and getStackTrace
      .map(line => line.trim());
  }
  
  static getCurrentFunction() {
    const stack = this.getStackTrace();
    return stack[0] || 'unknown';
  }
  
  static getCallerFunction() {
    const stack = this.getStackTrace();
    return stack[1] || 'unknown';
  }
  
  static printCallChain() {
    const stack = this.getStackTrace();
    console.log('Call chain:');
    stack.forEach((line, index) => {
      console.log(`  ${index + 1}. ${line}`);
    });
  }
  
  static wrapWithStackTrace(fn) {
    return function(...args) {
      console.log('Function called:', fn.name);
      StackInspector.printCallChain();
      return fn.apply(this, args);
    };
  }
}

// Usage
function processOrder(order) {
  console.log('Current function:', StackInspector.getCurrentFunction());
  console.log('Called from:', StackInspector.getCallerFunction());
  StackInspector.printCallChain();
}
```

## Code Quality Inspection

### ESLint Custom Rules

```javascript
// .eslintrc.js
module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    // Code quality rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    
    // Complexity rules
    'complexity': ['warn', 10],
    'max-depth': ['warn', 4],
    'max-lines-per-function': ['warn', 50],
    'max-params': ['warn', 4],
    
    // Best practices
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-return-await': 'error'
  }
};
```

### SonarQube Integration

```xml
<!-- pom.xml -->
<plugin>
    <groupId>org.sonarsource.scanner.maven</groupId>
    <artifactId>sonar-maven-plugin</artifactId>
    <version>3.9.1.2184</version>
</plugin>

<properties>
    <sonar.host.url>http://localhost:9000</sonar.host.url>
    <sonar.projectKey>my-project</sonar.projectKey>
</properties>
```

```bash
# Run SonarQube analysis
mvn sonar:sonar
```

## Performance Inspection

### Function Performance Profiler

```javascript
class PerformanceInspector {
  static profile(fn, iterations = 1000) {
    const times = [];
    
    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      fn();
      const end = performance.now();
      times.push(end - start);
    }
    
    times.sort((a, b) => a - b);
    
    return {
      min: times[0],
      max: times[times.length - 1],
      average: times.reduce((a, b) => a + b) / times.length,
      median: times[Math.floor(times.length / 2)],
      p95: times[Math.floor(times.length * 0.95)],
      p99: times[Math.floor(times.length * 0.99)]
    };
  }
  
  static compare(functions) {
    console.log('Performance comparison:');
    
    for (const [name, fn] of Object.entries(functions)) {
      const stats = this.profile(fn);
      console.log(`\n${name}:`);
      console.log(`  Average: ${stats.average.toFixed(3)}ms`);
      console.log(`  Median:  ${stats.median.toFixed(3)}ms`);
      console.log(`  P95:     ${stats.p95.toFixed(3)}ms`);
    }
  }
}

// Usage
PerformanceInspector.compare({
  'Array forEach': () => {
    const arr = Array(1000).fill(1);
    arr.forEach(x => x * 2);
  },
  'For loop': () => {
    const arr = Array(1000).fill(1);
    for (let i = 0; i < arr.length; i++) {
      arr[i] * 2;
    }
  },
  'Array map': () => {
    const arr = Array(1000).fill(1);
    arr.map(x => x * 2);
  }
});
```

## API Inspection

### HTTP Request/Response Inspector

```javascript
class APIInspector {
  static inspectRequest(req) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
      body: req.body,
      ip: req.ip,
      userAgent: req.headers['user-agent']
    };
  }
  
  static inspectResponse(res) {
    return {
      statusCode: res.statusCode,
      statusMessage: res.statusMessage,
      headers: res.getHeaders()
    };
  }
  
  static middleware(req, res, next) {
    console.log('Request:', this.inspectRequest(req));
    
    const originalSend = res.send;
    res.send = function(data) {
      console.log('Response:', {
        ...APIInspector.inspectResponse(res),
        body: data
      });
      originalSend.call(this, data);
    };
    
    next();
  }
}

// Usage
app.use(APIInspector.middleware);
```

## Best Practices

1. **Use built-in tools** - util.inspect, console.dir, debugger
2. **Reflection sparingly** - Performance overhead in production
3. **Type checking** - Validate types at runtime when needed
4. **Memory profiling** - Detect memory leaks early
5. **Stack traces** - Understand call chains and execution flow
6. **Code quality tools** - ESLint, SonarQube, PMD
7. **Performance profiling** - Measure before optimizing
8. **API inspection** - Log requests/responses for debugging
9. **Security inspection** - Never expose sensitive data
10. **Automated inspection** - CI/CD integration for quality gates

Inspection frameworks provide deep insights into code behavior, performance, and quality issues.
