# JavaScript Debugging

Master JavaScript debugging techniques for client-side and server-side applications.

## Overview
Effective JavaScript debugging requires understanding browser developer tools, debugging techniques, and common pitfalls.

## Browser Developer Tools

### Chrome DevTools
- Elements panel
- Console
- Sources (debugger)
- Network
- Performance
- Application

### Opening DevTools
- F12 or Ctrl+Shift+I (Windows/Linux)
- Cmd+Option+I (Mac)
- Right-click → Inspect

## Console Debugging

### Console Methods
```javascript
console.log('Basic message');
console.info('Information');
console.warn('Warning message');
console.error('Error message');
console.debug('Debug details');
```

### Advanced Console Techniques
```javascript
// Grouping logs
console.group('User Details');
console.log('Name:', userName);
console.log('Age:', userAge);
console.groupEnd();

// Table display
console.table(arrayOfObjects);

// Timing
console.time('operation');
performOperation();
console.timeEnd('operation');

// Stack trace
console.trace('Execution path');

// Conditional logging
console.assert(value > 0, 'Value must be positive');
```

## Breakpoint Debugging

### Setting Breakpoints
- Click line number in Sources panel
- Add `debugger;` statement in code
- Conditional breakpoints
- Logpoints (non-breaking)

### Debugger Statement
```javascript
function processData(data) {
    debugger; // Execution pauses here
    const result = transform(data);
    return result;
}
```

### Stepping Through Code
- Step Over (F10) - Execute current line
- Step Into (F11) - Enter function call
- Step Out (Shift+F11) - Exit current function
- Continue (F8) - Resume execution

### Watch Expressions
- Add variables to watch
- Evaluate expressions
- Monitor changes

## Common Debugging Scenarios

### Debugging Async Code
```javascript
async function fetchData() {
    try {
        console.log('Fetching data...');
        const response = await fetch(url);
        console.log('Response:', response);
        const data = await response.json();
        console.log('Data:', data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

### Debugging Promises
```javascript
fetchData()
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Debugging Event Handlers
```javascript
element.addEventListener('click', function(event) {
    console.log('Event:', event);
    console.log('Target:', event.target);
    debugger; // Pause when event fires
});
```

## Network Debugging

### Network Panel
- Monitor HTTP requests
- View request/response headers
- Check response status
- Measure loading times
- Throttle network speed

### Debugging AJAX/Fetch
```javascript
fetch(url)
    .then(response => {
        console.log('Status:', response.status);
        console.log('Headers:', response.headers);
        return response.json();
    })
    .then(data => console.log('Data:', data));
```

## Error Handling

### Try-Catch Blocks
```javascript
try {
    riskyOperation();
} catch (error) {
    console.error('Error occurred:', error);
    console.error('Stack:', error.stack);
}
```

### Global Error Handling
```javascript
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
});
```

## Source Maps

### Using Source Maps
- Debug transpiled code (TypeScript, Babel)
- Map minified code to source
- Enable in browser settings
- Generate source maps during build

## Performance Debugging

### Performance Panel
- Record performance profile
- Identify bottlenecks
- Analyze frame rates
- Memory profiling

### Performance Markers
```javascript
performance.mark('start-operation');
performOperation();
performance.mark('end-operation');
performance.measure('operation', 'start-operation', 'end-operation');
```

## Memory Debugging

### Memory Leaks
- Heap snapshots
- Allocation timeline
- Comparison snapshots
- Detached DOM nodes

### Common Memory Issues
- Event listeners not removed
- Closures holding references
- Global variables
- Timers not cleared

## Node.js Debugging

### Node Debugger
```bash
node --inspect app.js
node --inspect-brk app.js  # Break on first line
```

### Chrome DevTools for Node
- Navigate to chrome://inspect
- Connect to Node process
- Use full DevTools capabilities

### VS Code Debugging
```json
{
    "type": "node",
    "request": "launch",
    "name": "Launch Program",
    "program": "${workspaceFolder}/app.js"
}
```

## Best Practices

### Effective Logging
- Use descriptive messages
- Include relevant context
- Log important state changes
- Remove debug logs before production

### Debugging Strategy
1. Reproduce the issue
2. Isolate the problem
3. Form a hypothesis
4. Test the hypothesis
5. Fix and verify

### Code Organization for Debugging
- Small, focused functions
- Clear naming conventions
- Proper error handling
- Modular structure

## Common Issues and Solutions

### Variable Scope Issues
```javascript
// Check variable scope in debugger
function outer() {
    let outerVar = 'outer';
    function inner() {
        console.log(outerVar); // Access outer scope
        let innerVar = 'inner';
    }
}
```

### Asynchronous Timing
- Use async/await for clarity
- Check promise states
- Verify callback execution
- Handle race conditions

### DOM Issues
- Verify element selection
- Check DOM ready state
- Inspect element properties
- Monitor DOM mutations

## Tools and Extensions

### Browser Extensions
- React Developer Tools
- Vue.js DevTools
- Redux DevTools
- Angular DevTools

### Debugging Libraries
- debug (Node.js)
- loglevel
- winston
- bunyan
