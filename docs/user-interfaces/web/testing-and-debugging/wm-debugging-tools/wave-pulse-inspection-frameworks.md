# Wave Pulse, Inspection frameworks

WaveMaker's built-in debugging and inspection tools for monitoring and troubleshooting applications.

## Overview

WaveMaker provides powerful debugging and inspection frameworks to help developers identify issues, monitor application performance, and understand application behavior in real-time. These tools integrate seamlessly with the WaveMaker development environment.

## Wave Pulse

Wave Pulse is WaveMaker's comprehensive monitoring and diagnostics tool that provides real-time insights into application behavior.

### Features

- **Real-time Monitoring**: Track application performance metrics
- **Request/Response Inspection**: View API calls and responses
- **Error Tracking**: Capture and analyze errors
- **Performance Profiling**: Identify bottlenecks
- **Database Query Analysis**: Monitor database operations
- **User Session Tracking**: Track user activities

### Enabling Wave Pulse

```javascript
// Enable Wave Pulse in your application
WM.enablePulse({
  monitoring: true,
  errorTracking: true,
  performanceMetrics: true,
  detailedLogging: true,
});
```

### Dashboard Overview

The Wave Pulse dashboard provides:

1. **Performance Metrics**
   - Page load times
   - API response times
   - Resource usage
   - Memory consumption

2. **Error Console**
   - JavaScript errors
   - API failures
   - Network errors
   - Console warnings

3. **Network Monitor**
   - HTTP requests
   - WebSocket connections
   - Request/response headers
   - Payload inspection

4. **Database Queries**
   - Query execution time
   - Query frequency
   - Slow query detection
   - Connection pool status

### Using Wave Pulse API

```javascript
// Track custom events
WM.Pulse.trackEvent('button_clicked', {
  buttonId: 'submit-form',
  timestamp: Date.now(),
  userId: currentUser.id,
});

// Log custom metrics
WM.Pulse.logMetric('api_response_time', {
  endpoint: '/api/users',
  duration: 245,
  status: 200,
});

// Track errors
WM.Pulse.trackError(error, {
  component: 'UserForm',
  action: 'submit',
  severity: 'high',
});

// Start performance measurement
const performanceId = WM.Pulse.startPerformance('data_load');
// ... perform operation
WM.Pulse.endPerformance(performanceId);
```

### Performance Monitoring

```javascript
// Monitor page performance
WM.Pulse.monitorPage({
  pageName: 'ProductListing',
  metrics: {
    loadTime: window.performance.timing.loadEventEnd - window.performance.timing.navigationStart,
    domContentLoaded: window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart,
    firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
  },
});

// Monitor component render
const ComponentWithMonitoring = () => {
  useEffect(() => {
    WM.Pulse.startRender('UserList');

    return () => {
      WM.Pulse.endRender('UserList');
    };
  }, []);

  return <UserList />;
};
```

### Network Inspection

```javascript
// Intercept and log API calls
WM.Pulse.interceptor.use(
  (request) => {
    console.log('Request:', {
      url: request.url,
      method: request.method,
      headers: request.headers,
      data: request.data,
    });
    return request;
  },
  (error) => {
    WM.Pulse.trackError(error, {
      type: 'network_error',
      url: error.config?.url,
    });
    return Promise.reject(error);
  }
);

// Log response details
WM.Pulse.interceptor.response.use(
  (response) => {
    console.log('Response:', {
      url: response.config.url,
      status: response.status,
      duration: response.config.metadata.endTime - response.config.metadata.startTime,
      size: JSON.stringify(response.data).length,
    });
    return response;
  }
);
```

## Inspection Framework

WaveMaker's Inspection Framework provides detailed insights into component hierarchy, state, and props.

### Component Inspector

```javascript
// Enable component inspection
WM.Inspector.enable({
  showComponentBoundaries: true,
  highlightUpdates: true,
  trackProps: true,
  trackState: true,
});

// Inspect specific component
WM.Inspector.inspect('UserProfile', {
  props: true,
  state: true,
  children: true,
  events: true,
});

// Get component tree
const tree = WM.Inspector.getComponentTree();
console.log('Component hierarchy:', tree);
```

### State Inspector

```javascript
// Watch state changes
WM.Inspector.watchState('UserStore', (newState, prevState) => {
  console.log('State changed:', {
    previous: prevState,
    current: newState,
    diff: WM.Inspector.diff(prevState, newState),
  });
});

// Inspect current state
const currentState = WM.Inspector.getState('UserStore');
console.log('Current state:', currentState);

// Time-travel debugging
WM.Inspector.revertState('UserStore', 5); // Go back 5 state changes
```

### Props Inspector

```javascript
// Track prop changes
WM.Inspector.trackProps('ProductCard', {
  onChange: (props) => {
    console.log('Props updated:', props);
  },
  logHistory: true,
});

// Get prop history
const propHistory = WM.Inspector.getPropHistory('ProductCard');
console.log('Prop changes:', propHistory);
```

### Event Inspector

```javascript
// Monitor events
WM.Inspector.monitorEvents({
  component: 'SearchBar',
  events: ['onChange', 'onSubmit', 'onFocus', 'onBlur'],
  callback: (event) => {
    console.log('Event triggered:', {
      type: event.type,
      target: event.target,
      data: event.data,
      timestamp: event.timestamp,
    });
  },
});

// Get event history
const events = WM.Inspector.getEventHistory('SearchBar');
console.log('Event log:', events);
```

## Variable Inspector

Monitor and debug application variables and data bindings.

```javascript
// Watch variable changes
WM.Inspector.watchVariable('selectedProduct', {
  onChange: (newValue, oldValue) => {
    console.log('Variable changed:', {
      from: oldValue,
      to: newValue,
    });
  },
  trackSource: true, // Track what triggered the change
});

// Get variable details
const varInfo = WM.Inspector.getVariable('selectedProduct');
console.log('Variable info:', {
  value: varInfo.value,
  type: varInfo.type,
  bindings: varInfo.bindings,
  watchers: varInfo.watchers,
});

// List all variables
const allVars = WM.Inspector.listVariables();
console.log('All variables:', allVars);
```

## Database Query Inspector

Monitor and analyze database operations.

```javascript
// Enable query logging
WM.DB.enableInspection({
  logQueries: true,
  logParameters: true,
  warnSlowQueries: true,
  slowQueryThreshold: 1000, // ms
});

// Monitor specific query
WM.DB.Inspector.watch('getUserById', {
  onExecute: (query, params) => {
    console.log('Query executed:', query, params);
  },
  onComplete: (result, duration) => {
    console.log('Query completed:', {
      rowCount: result.length,
      duration: duration,
    });
  },
  onError: (error) => {
    console.error('Query failed:', error);
  },
});

// Get query statistics
const stats = WM.DB.Inspector.getStats();
console.log('Database stats:', {
  totalQueries: stats.total,
  averageTime: stats.avgDuration,
  slowQueries: stats.slow,
  failedQueries: stats.failed,
});
```

## Service Inspector

Debug REST and SOAP service calls.

```javascript
// Monitor service calls
WM.Services.Inspector.monitor({
  services: ['UserService', 'ProductService'],
  logRequests: true,
  logResponses: true,
  trackErrors: true,
});

// Inspect specific service call
WM.Services.Inspector.inspect('UserService.getUsers', {
  onRequest: (config) => {
    console.log('Service request:', config);
  },
  onResponse: (response) => {
    console.log('Service response:', response);
  },
  onError: (error) => {
    console.error('Service error:', error);
  },
});

// Get service call history
const history = WM.Services.Inspector.getHistory('UserService');
console.log('Service call history:', history);
```

## Widget Inspector

Inspect WaveMaker widget properties and behavior.

```javascript
// Enable widget inspection mode
WM.Widgets.Inspector.enable();

// Inspect widget
WM.Widgets.Inspector.select('widget123', {
  showProperties: true,
  showEvents: true,
  showDataSource: true,
  highlightElement: true,
});

// Get widget tree
const widgetTree = WM.Widgets.Inspector.getTree();
console.log('Widget hierarchy:', widgetTree);

// Monitor widget events
WM.Widgets.Inspector.monitorWidget('searchWidget', {
  events: ['onChange', 'onSelect'],
  callback: (event) => {
    console.log('Widget event:', event);
  },
});
```

## Console Logger

Enhanced console logging with filtering and formatting.

```javascript
// Configure logger
WM.Logger.configure({
  level: 'debug', // trace, debug, info, warn, error
  timestamp: true,
  componentName: true,
  colors: true,
  grouping: true,
});

// Use logger
WM.Logger.debug('Component mounted', { componentId: 'UserProfile' });
WM.Logger.info('Data loaded', { count: 50 });
WM.Logger.warn('Slow operation detected', { duration: 2000 });
WM.Logger.error('Failed to save', { error: err });

// Group logs
WM.Logger.group('User Registration Flow');
WM.Logger.info('Validating inputs');
WM.Logger.info('Calling API');
WM.Logger.info('Processing response');
WM.Logger.groupEnd();
```

## Performance Profiler

Profile application performance and identify bottlenecks.

```javascript
// Start profiling
WM.Profiler.start({
  includeComponents: true,
  includeNetwork: true,
  includeMemory: true,
  duration: 30000, // Profile for 30 seconds
});

// Mark performance points
WM.Profiler.mark('data-fetch-start');
// ... fetch data
WM.Profiler.mark('data-fetch-end');
WM.Profiler.measure('data-fetch', 'data-fetch-start', 'data-fetch-end');

// Get profiling results
const profile = WM.Profiler.getResults();
console.log('Performance profile:', {
  components: profile.components,
  network: profile.network,
  memory: profile.memory,
  slowOperations: profile.slow,
});

// Export profile
WM.Profiler.export('performance-profile.json');
```

## Memory Inspector

Monitor memory usage and detect leaks.

```javascript
// Start memory monitoring
WM.Memory.startMonitoring({
  interval: 5000, // Check every 5 seconds
  warnThreshold: 100 * 1024 * 1024, // Warn at 100MB
  alertThreshold: 200 * 1024 * 1024, // Alert at 200MB
});

// Take memory snapshot
const snapshot = WM.Memory.takeSnapshot();
console.log('Memory snapshot:', {
  heapUsed: snapshot.heapUsed,
  heapTotal: snapshot.heapTotal,
  external: snapshot.external,
});

// Compare snapshots
const snapshot1 = WM.Memory.takeSnapshot();
// ... perform operations
const snapshot2 = WM.Memory.takeSnapshot();
const diff = WM.Memory.compare(snapshot1, snapshot2);
console.log('Memory diff:', diff);

// Detect leaks
WM.Memory.detectLeaks({
  threshold: 10 * 1024 * 1024, // 10MB increase
  callback: (leak) => {
    console.warn('Potential memory leak:', leak);
  },
});
```

## Breakpoint Debugger

Set conditional breakpoints in code.

```javascript
// Set breakpoint
WM.Debug.breakpoint('UserForm.submit', {
  condition: (context) => context.user.role === 'admin',
  action: (context) => {
    console.log('Breakpoint hit:', context);
    debugger; // Pause execution
  },
});

// Set data breakpoint
WM.Debug.breakOnDataChange('selectedProduct', {
  condition: (newValue, oldValue) => newValue.price > 1000,
  action: (newValue, oldValue) => {
    console.log('High-value product selected:', newValue);
  },
});
```

## Integration with Browser DevTools

```javascript
// Enable browser devtools integration
WM.DevTools.enable({
  reactDevTools: true,
  reduxDevTools: true,
  performanceTimeline: true,
});

// Send custom data to devtools
WM.DevTools.log({
  type: 'state-change',
  data: { state: currentState },
});

// Add custom panel
WM.DevTools.addPanel('WaveMaker Inspector', {
  content: InspectorComponent,
  icon: 'inspect',
});
```

## Export and Reporting

```javascript
// Export debugging session
WM.Debug.export({
  format: 'json',
  include: {
    errors: true,
    performance: true,
    network: true,
    console: true,
  },
  filename: 'debug-session.json',
});

// Generate report
const report = WM.Debug.generateReport({
  timeRange: { start: Date.now() - 3600000, end: Date.now() },
  includeSummary: true,
  includeCharts: true,
});

console.log('Debug report:', report);
```

## Best Practices

### 1. Enable in Development Only

```javascript
if (process.env.NODE_ENV === 'development') {
  WM.enablePulse();
  WM.Inspector.enable();
}
```

### 2. Use Appropriate Log Levels

```javascript
// ✅ Good - Use appropriate levels
WM.Logger.debug('Component rendered'); // Development info
WM.Logger.info('User logged in'); // Important events
WM.Logger.warn('API deprecated'); // Warnings
WM.Logger.error('Failed to save'); // Errors

// ❌ Bad - Everything as error
WM.Logger.error('Component rendered');
```

### 3. Clean Up Watchers

```javascript
useEffect(() => {
  const watcher = WM.Inspector.watchState('UserStore', callback);

  return () => {
    watcher.unsubscribe();
  };
}, []);
```

### 4. Monitor Performance Impact

```javascript
// Check if monitoring is affecting performance
const impact = WM.Pulse.getPerformanceImpact();
if (impact.overhead > 5) {
  console.warn('Monitoring overhead too high:', impact);
  WM.Pulse.reduce(); // Reduce monitoring frequency
}
```

## Related Documentation

- [Flipper, Expo, Dev tools...](../community-debugging-tools/flipper-expo-dev-tools.md)
- [UI Testing Web](../testing-strategies/ui-testing-web.md)
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile.md)
- [State Management](../../develop/state-management.md)
