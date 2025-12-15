# Profiles

Learn how to use profiles to manage different configurations across environments.

## Overview
Profiles allow you to define environment-specific configurations for your application, making it easy to switch between development, testing, staging, and production settings.

## What are Profiles?

Profiles provide a way to segregate parts of your application configuration and make it available only in certain environments. This enables you to:
- Use different databases for different environments
- Configure different logging levels
- Set environment-specific API endpoints
- Enable/disable features per environment
- Customize security settings

## Common Profile Types

### Development Profile
- Local database connections
- Verbose logging (DEBUG level)
- Hot reload enabled
- Detailed error messages
- Mock external services

### Testing Profile
- In-memory or test databases
- Isolated test data
- Faster execution settings
- Mock integrations
- Reduced timeouts

### Staging Profile
- Production-like configuration
- Staging database
- Production log levels
- Real integrations (non-production)
- Performance monitoring enabled

### Production Profile
- Production databases
- Optimized settings
- Error logging only
- Real services
- High security settings
- Performance optimizations

## Creating Profiles

### Spring Boot Example
```properties
# application.properties (default)
app.name=MyApplication
spring.profiles.active=dev

# application-dev.properties
spring.datasource.url=jdbc:mysql://localhost:3306/devdb
logging.level.root=DEBUG

# application-prod.properties
spring.datasource.url=jdbc:mysql://prod-server:3306/proddb
logging.level.root=WARN
```

### Using YAML
```yaml
# application.yml
spring:
  application:
    name: MyApplication
  profiles:
    active: dev

---
# Development Profile
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:mysql://localhost:3306/devdb
logging:
  level:
    root: DEBUG

---
# Production Profile
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: jdbc:mysql://prod-server:3306/proddb
logging:
  level:
    root: WARN
```

### Node.js Example
```javascript
// config/default.js
module.exports = {
  app: {
    name: 'MyApplication',
    port: 3000
  }
};

// config/development.js
module.exports = {
  database: {
    host: 'localhost',
    port: 3306,
    name: 'devdb'
  },
  logging: {
    level: 'debug'
  }
};

// config/production.js
module.exports = {
  database: {
    host: process.env.DB_HOST,
    port: 3306,
    name: 'proddb'
  },
  logging: {
    level: 'error'
  }
};
```

## Activating Profiles

### Command Line
```bash
# Spring Boot
java -jar app.jar --spring.profiles.active=prod

# Node.js
NODE_ENV=production node app.js

# Python
export APP_ENV=production
python app.py
```

### Environment Variables
```bash
# Set in shell
export SPRING_PROFILES_ACTIVE=prod

# Set in Docker
docker run -e SPRING_PROFILES_ACTIVE=prod myapp

# Set in Kubernetes
env:
  - name: SPRING_PROFILES_ACTIVE
    value: "prod"
```

### Configuration Files
```properties
# application.properties
spring.profiles.active=prod
```

### Programmatically
```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        app.setAdditionalProfiles("prod");
        app.run(args);
    }
}
```

## Multiple Profiles

### Activating Multiple Profiles
```bash
# Spring Boot - comma-separated
java -jar app.jar --spring.profiles.active=prod,monitoring

# Environment variable
export SPRING_PROFILES_ACTIVE=prod,monitoring,metrics
```

### Profile Groups
```yaml
spring:
  profiles:
    group:
      production:
        - prod
        - monitoring
        - metrics
      development:
        - dev
        - debug
```

## Profile-Specific Beans

### Spring Boot
```java
@Configuration
@Profile("dev")
public class DevConfiguration {

    @Bean
    public DataSource dataSource() {
        // Development database configuration
        return new DevelopmentDataSource();
    }
}

@Configuration
@Profile("prod")
public class ProdConfiguration {

    @Bean
    public DataSource dataSource() {
        // Production database configuration
        return new ProductionDataSource();
    }
}
```

### Conditional Logic
```java
@Service
public class EmailService {

    @Value("${spring.profiles.active}")
    private String activeProfile;

    public void sendEmail(String to, String subject, String body) {
        if ("dev".equals(activeProfile)) {
            // Log email instead of sending
            logger.info("DEV: Would send email to {}", to);
        } else {
            // Actually send email
            emailClient.send(to, subject, body);
        }
    }
}
```

## Profile-Specific Properties

### Database Configuration
```properties
# Development
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=create-drop

# Production
spring.datasource.url=jdbc:mysql://prod-server:3306/proddb
spring.jpa.hibernate.ddl-auto=validate
```

### Logging Configuration
```properties
# Development
logging.level.root=DEBUG
logging.level.org.springframework.web=DEBUG
logging.level.com.myapp=TRACE

# Production
logging.level.root=WARN
logging.level.com.myapp=INFO
```

### Security Configuration
```properties
# Development
security.require-ssl=false
security.csrf.enabled=false

# Production
security.require-ssl=true
security.csrf.enabled=true
```

## Best Practices

### Organization
- Keep profile files organized
- Use clear naming conventions
- Document profile purposes
- Maintain consistency across profiles

### Security
- Never commit sensitive data to version control
- Use environment variables for secrets
- Encrypt sensitive configuration
- Use secret management tools (Vault, AWS Secrets Manager)

### Default Values
- Provide sensible defaults
- Make development the default profile
- Document all configuration options
- Validate required properties

### Testing
- Test each profile configuration
- Verify profile activation
- Test profile switching
- Validate environment-specific behavior

## Configuration Management

### Externalized Configuration
```bash
# Load from external location
java -jar app.jar --spring.config.location=/etc/myapp/application.properties
```

### Configuration Precedence
1. Command-line arguments
2. Environment variables
3. Profile-specific properties
4. Default properties

### Environment Variables Override
```bash
# Override any property via environment variable
export SPRING_DATASOURCE_URL=jdbc:mysql://override-server:3306/db
```

## Common Use Cases

### Database per Environment
```yaml
spring:
  profiles:
    active: ${APP_PROFILE:dev}

---
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:h2:mem:devdb

---
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: ${DATABASE_URL}
    hikari:
      maximum-pool-size: 20
```

### Feature Flags
```java
@Configuration
public class FeatureConfiguration {

    @Bean
    @Profile("dev | staging")
    public FeatureFlag experimentalFeature() {
        return new FeatureFlag(true);
    }

    @Bean
    @Profile("prod")
    public FeatureFlag experimentalFeature() {
        return new FeatureFlag(false);
    }
}
```

### Service Mocking
```java
@Service
@Profile("dev")
public class MockPaymentService implements PaymentService {
    public PaymentResult process(Payment payment) {
        return PaymentResult.success(); // Always succeed in dev
    }
}

@Service
@Profile("prod")
public class RealPaymentService implements PaymentService {
    public PaymentResult process(Payment payment) {
        return paymentGateway.process(payment); // Real processing
    }
}
```

## Troubleshooting

### Profile Not Active
- Check profile activation method
- Verify property file naming
- Check environment variables
- Review application logs

### Wrong Configuration Loaded
- Check profile precedence
- Verify file locations
- Check for typos in profile names
- Review configuration hierarchy

### Missing Properties
- Ensure profile-specific files exist
- Check property names
- Verify property sources
- Add default values

## Tools and Integration

### IDE Support
- IntelliJ IDEA profile support
- Eclipse profile configuration
- VS Code Spring Boot extensions

### Build Tools
```xml
<!-- Maven -->
<profiles>
    <profile>
        <id>dev</id>
        <properties>
            <spring.profiles.active>dev</spring.profiles.active>
        </properties>
    </profile>
</profiles>
```

```gradle
// Gradle
bootRun {
    systemProperty 'spring.profiles.active', 'dev'
}
```

### CI/CD Integration
```yaml
# GitHub Actions
- name: Run tests
  run: ./mvnw test
  env:
    SPRING_PROFILES_ACTIVE: test

# Jenkins
environment {
    SPRING_PROFILES_ACTIVE = 'staging'
}
```
