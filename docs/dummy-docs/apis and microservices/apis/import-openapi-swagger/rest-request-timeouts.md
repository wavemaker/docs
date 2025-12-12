# REST Request Timeouts

Learn how to configure and manage timeouts for REST API requests to ensure reliable service communication.

## Understanding Timeouts

Timeouts prevent your application from waiting indefinitely for external service responses. Proper timeout configuration is crucial for:
- Preventing resource exhaustion
- Improving user experience
- Enabling graceful degradation
- Facilitating error handling

## Types of Timeouts

### Connection Timeout
Time allowed to establish a connection to the server.

```javascript
const client = createClient({
  baseURL: 'https://api.example.com',
  timeout: {
    connect: 5000 // 5 seconds to connect
  }
});
```

### Request Timeout
Total time allowed for the entire request (connection + response).

```javascript
const client = createClient({
  baseURL: 'https://api.example.com',
  timeout: {
    request: 30000 // 30 seconds total
  }
});
```

### Response Timeout
Time allowed to receive the response after connection is established.

```javascript
const client = createClient({
  baseURL: 'https://api.example.com',
  timeout: {
    response: 25000 // 25 seconds for response
  }
});
```

## Configuring Timeouts

### Global Timeout Configuration
```javascript
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 30000, // 30 seconds
  timeoutErrorMessage: 'Request timed out after 30 seconds'
});
```

### Per-Request Timeouts
```javascript
// Override global timeout for specific request
const response = await client.get('/users', {
  timeout: 60000 // 60 seconds for this request
});

// Long-running operation
const report = await client.post('/generate-report', data, {
  timeout: 120000 // 2 minutes
});
```

### Endpoint-Specific Timeouts
```javascript
const timeoutConfig = {
  '/users': 5000,           // Quick operations
  '/search': 15000,         // Search operations
  '/reports': 60000,        // Report generation
  '/export': 120000         // Large exports
};

client.interceptors.request.use((config) => {
  const endpoint = config.url;
  const timeout = timeoutConfig[endpoint];
  if (timeout) {
    config.timeout = timeout;
  }
  return config;
});
```

## Timeout Strategies

### Progressive Timeout
Increase timeout for retries:

```javascript
async function fetchWithProgressiveTimeout(url, maxRetries = 3) {
  let timeout = 5000; // Start with 5 seconds

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await client.get(url, { timeout });
      return response.data;
    } catch (error) {
      if (error.code === 'ECONNABORTED' && i < maxRetries - 1) {
        timeout *= 2; // Double timeout for next retry
        console.log(`Retry ${i + 1} with timeout ${timeout}ms`);
        continue;
      }
      throw error;
    }
  }
}
```

### Adaptive Timeout
Adjust based on historical response times:

```javascript
class AdaptiveTimeoutClient {
  private responseTimes: Map<string, number[]>;

  constructor() {
    this.responseTimes = new Map();
  }

  calculateTimeout(endpoint: string): number {
    const times = this.responseTimes.get(endpoint) || [];
    if (times.length === 0) return 30000; // Default 30s

    // Use 95th percentile + buffer
    const sorted = [...times].sort((a, b) => a - b);
    const p95Index = Math.floor(sorted.length * 0.95);
    const p95Time = sorted[p95Index];

    return p95Time * 1.5; // 50% buffer
  }

  recordResponseTime(endpoint: string, duration: number) {
    const times = this.responseTimes.get(endpoint) || [];
    times.push(duration);

    // Keep only last 100 samples
    if (times.length > 100) {
      times.shift();
    }

    this.responseTimes.set(endpoint, times);
  }

  async request(endpoint: string, options = {}) {
    const timeout = this.calculateTimeout(endpoint);
    const startTime = Date.now();

    try {
      const response = await client.get(endpoint, {
        ...options,
        timeout
      });

      const duration = Date.now() - startTime;
      this.recordResponseTime(endpoint, duration);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
```

## Handling Timeout Errors

### Basic Error Handling
```javascript
try {
  const response = await client.get('/users', { timeout: 5000 });
  return response.data;
} catch (error) {
  if (error.code === 'ECONNABORTED') {
    console.error('Request timed out');
    // Handle timeout
  } else {
    console.error('Other error:', error.message);
  }
}
```

### Retry with Backoff
```javascript
async function fetchWithRetry(url, retries = 3, backoff = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await client.get(url, {
        timeout: 30000
      });
      return response.data;
    } catch (error) {
      if (error.code === 'ECONNABORTED' && i < retries - 1) {
        const delay = backoff * Math.pow(2, i);
        console.log(`Timeout. Retrying in ${delay}ms...`);
        await sleep(delay);
        continue;
      }
      throw error;
    }
  }
}
```

### Fallback Mechanism
```javascript
async function fetchWithFallback(url, timeout = 5000) {
  try {
    const response = await client.get(url, { timeout });
    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.warn('Primary service timed out, using fallback');
      return await fetchFromCache(url);
    }
    throw error;
  }
}
```

## Circuit Breaker Pattern

Prevent cascading failures due to timeouts:

```javascript
class CircuitBreaker {
  private failures = 0;
  private lastFailTime = null;
  private state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN

  constructor(
    private threshold = 5,
    private timeout = 60000,
    private resetTimeout = 30000
  ) {}

  async execute(fn, requestTimeout = this.timeout) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const response = await fn(requestTimeout);
      this.onSuccess();
      return response;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = 'CLOSED';
  }

  private onFailure() {
    this.failures++;
    this.lastFailTime = Date.now();

    if (this.failures >= this.threshold) {
      this.state = 'OPEN';
      console.warn('Circuit breaker opened');
    }
  }
}

// Usage
const breaker = new CircuitBreaker();

async function fetchUsers() {
  return await breaker.execute(async (timeout) => {
    return await client.get('/users', { timeout });
  });
}
```

## Monitoring and Metrics

### Tracking Timeout Metrics
```javascript
class TimeoutMonitor {
  private timeouts = 0;
  private totalRequests = 0;

  recordRequest(timedOut: boolean) {
    this.totalRequests++;
    if (timedOut) {
      this.timeouts++;
    }
  }

  getTimeoutRate(): number {
    return this.timeouts / this.totalRequests;
  }

  shouldAlert(): boolean {
    return this.getTimeoutRate() > 0.05; // 5% threshold
  }
}

const monitor = new TimeoutMonitor();

client.interceptors.response.use(
  (response) => {
    monitor.recordRequest(false);
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      monitor.recordRequest(true);

      if (monitor.shouldAlert()) {
        alertOps('High timeout rate detected');
      }
    }
    return Promise.reject(error);
  }
);
```

## Best Practices

### Timeout Values
- **Connection timeout**: 5-10 seconds
- **Quick APIs**: 5-15 seconds
- **Standard APIs**: 15-30 seconds
- **Heavy operations**: 30-60 seconds
- **Batch operations**: 60-120 seconds

### General Guidelines
- Set appropriate timeouts for each endpoint
- Always handle timeout errors gracefully
- Implement retry logic with exponential backoff
- Use circuit breakers for external services
- Monitor timeout rates and adjust as needed
- Consider user experience when setting timeouts
- Log timeout events for analysis
- Test timeout behavior under load
- Document timeout configurations
- Use progressive or adaptive timeouts for resilience

### Configuration Tips
```javascript
// Good: Specific timeouts for different operations
const config = {
  health: { timeout: 3000 },
  read: { timeout: 15000 },
  write: { timeout: 30000 },
  batch: { timeout: 120000 }
};

// Bad: Same timeout for everything
const config = { timeout: 30000 };
```

### Testing Timeouts
```javascript
// Simulate timeout in tests
jest.mock('axios');

test('handles timeout correctly', async () => {
  const error = new Error('timeout');
  error.code = 'ECONNABORTED';
  axios.get.mockRejectedValue(error);

  await expect(fetchUsers()).rejects.toThrow('timeout');
});
```
