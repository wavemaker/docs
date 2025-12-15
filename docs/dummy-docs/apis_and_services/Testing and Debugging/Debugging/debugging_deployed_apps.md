# Debugging Deployed Apps

Learn how to debug applications in production and staging environments.

## Overview
Debugging deployed applications requires different approaches than local development due to security, performance, and accessibility constraints.

## Challenges in Production Debugging

### Common Constraints
- Limited access to production systems
- Cannot pause execution with breakpoints
- Sensitive data concerns
- Performance impact considerations
- High availability requirements

### Safety First
- Never debug directly in production if avoidable
- Use staging environments when possible
- Have rollback plans ready
- Monitor impact of debugging activities

## Remote Debugging Setup

### Enabling Remote Debugging
**WARNING**: Only enable in controlled environments
```bash
# Java applications
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -jar app.jar

# Node.js applications
node --inspect=0.0.0.0:9229 app.js
```

### Security Considerations
- Use SSH tunnels for remote debugging
- Restrict access by IP address
- Use VPN connections
- Disable after debugging session
- Never expose debug ports publicly

## Log-Based Debugging

### Structured Logging
```java
logger.info("Order processing",
    kv("orderId", orderId),
    kv("userId", userId),
    kv("status", status),
    kv("environment", "production"));
```

### Log Aggregation
- Centralized logging (ELK, Splunk)
- Real-time log streaming
- Log search and filtering
- Alert configuration

### Correlation IDs
Track requests across services:
```java
String correlationId = UUID.randomUUID().toString();
MDC.put("correlationId", correlationId);
// All logs will include correlationId
```

## Application Performance Monitoring (APM)

### APM Tools
- New Relic
- Datadog
- AppDynamics
- Dynatrace
- AWS X-Ray
- Google Cloud Trace

### APM Features
- Transaction tracing
- Error tracking
- Performance metrics
- Database query analysis
- External service monitoring

## Error Tracking

### Error Tracking Services
- Sentry
- Rollbar
- Bugsnag
- Airbrake

### Error Context
```javascript
Sentry.captureException(error, {
    tags: {
        environment: 'production',
        feature: 'checkout'
    },
    extra: {
        userId: userId,
        orderId: orderId
    }
});
```

## Health Checks and Monitoring

### Health Check Endpoints
```java
@GetMapping("/health")
public ResponseEntity<HealthStatus> health() {
    return ResponseEntity.ok(new HealthStatus("UP"));
}
```

### Monitoring Metrics
- Application uptime
- Response times
- Error rates
- Resource usage
- Database connections

## Remote Access Tools

### SSH Access
```bash
# Connect to server
ssh user@production-server

# View logs
tail -f /var/log/application.log

# Check processes
ps aux | grep java
```

### Container Debugging
```bash
# Docker
docker logs container-name
docker exec -it container-name /bin/bash

# Kubernetes
kubectl logs pod-name
kubectl exec -it pod-name -- /bin/bash
kubectl describe pod pod-name
```

## Feature Flags for Debugging

### Conditional Debug Mode
```java
if (featureFlags.isEnabled("debug-mode-user-123")) {
    logger.debug("Detailed debug information for specific user");
}
```

### Benefits
- Enable debugging for specific users
- Test fixes in production safely
- Gradual rollout of changes
- Quick enable/disable without deployment

## Database Debugging

### Query Logging
- Enable slow query logs
- Monitor query performance
- Check connection pool status
- Review transaction logs

### Database Health
```sql
-- Check active connections
SELECT * FROM pg_stat_activity;

-- Check slow queries
SELECT * FROM pg_stat_statements ORDER BY mean_time DESC;
```

## Network and API Debugging

### API Request Logging
```java
@Slf4j
@Component
public class RequestLoggingFilter extends OncePerRequestFilter {
    protected void doFilterInternal(HttpServletRequest request,
                                   HttpServletResponse response,
                                   FilterChain filterChain) {
        logger.info("API Request: {} {}", request.getMethod(), request.getRequestURI());
        // Log request and response details
    }
}
```

### Network Tools
- tcpdump for packet capture
- Wireshark for analysis
- curl for API testing
- Postman for request debugging

## Memory and Resource Debugging

### Heap Dumps
```bash
# Generate heap dump
jmap -dump:live,format=b,file=heap.bin <pid>

# Analyze with tools
# - Eclipse Memory Analyzer (MAT)
# - VisualVM
# - JProfiler
```

### Thread Dumps
```bash
# Generate thread dump
jstack <pid> > thread-dump.txt

# Analyze for deadlocks, blocked threads
```

## Debugging Strategies

### Reproduce in Staging
1. Copy production data to staging (sanitized)
2. Replay production traffic
3. Debug with full access
4. Verify fix before production deployment

### Incremental Logging
- Add detailed logging in suspected areas
- Deploy changes
- Monitor logs
- Analyze and iterate

### A/B Testing for Fixes
- Deploy fix to subset of users
- Monitor error rates
- Compare with control group
- Full rollout if successful

## Emergency Debugging

### Hot Fixes
- Quick patches for critical issues
- Minimal changes
- Fast deployment
- Immediate monitoring

### Rollback Procedures
- Keep previous versions ready
- Automated rollback triggers
- Database migration rollback
- Communication plan

## Best Practices

### Preparation
- Design for debuggability
- Include debug endpoints (secured)
- Implement comprehensive logging
- Set up monitoring from day one

### Documentation
- Document common issues
- Maintain runbooks
- Keep architecture diagrams updated
- Document debugging procedures

### Security
- Protect sensitive data in logs
- Secure debug endpoints
- Audit debug access
- Time-limited debug access

### Performance
- Use sampling for high-traffic systems
- Minimize logging overhead
- Use async logging
- Monitor debug impact

## Tools and Services

### Cloud Provider Tools
- AWS CloudWatch
- Azure Monitor
- Google Cloud Logging
- Heroku logs

### Profiling Tools
- Java: JProfiler, YourKit, VisualVM
- Node.js: Chrome DevTools, clinic.js
- Python: cProfile, py-spy

### Log Management
- Elasticsearch, Logstash, Kibana (ELK)
- Graylog
- Splunk
- Sumo Logic

## Troubleshooting Checklist

1. Check application logs
2. Review error tracking dashboard
3. Examine APM data
4. Verify infrastructure health
5. Check recent deployments
6. Review monitoring alerts
7. Analyze user reports
8. Compare with baseline metrics
