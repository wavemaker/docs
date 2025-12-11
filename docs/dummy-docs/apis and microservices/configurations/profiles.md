---
id: profiles
title: Configuration Profiles
sidebar_label: Profiles
sidebar_position: 1
---

# Configuration Profiles

Manage environment-specific configurations using Spring profiles for different deployment environments.

## Overview

Profiles allow you to:
- Separate configurations for development, testing, staging, and production
- Override default settings per environment
- Activate/deactivate beans conditionally
- Manage environment-specific properties

## Creating Profiles

### Profile-specific Property Files

```
src/main/resources/
├── application.properties          # Default configuration
├── application-dev.properties      # Development
├── application-test.properties     # Testing
├── application-staging.properties  # Staging
├── application-prod.properties     # Production
```

### application.properties (Default)

```properties
# Application name
spring.application.name=myapp-api

# Server configuration
server.port=8080

# Logging
logging.level.root=INFO
logging.level.com.wavemaker=DEBUG

# Database (overridden by profiles)
spring.datasource.url=jdbc:mysql://localhost:3306/myapp
spring.datasource.username=root
spring.datasource.password=password

# JPA
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
```

### application-dev.properties

```properties
# Development environment

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/myapp_dev
spring.datasource.username=dev_user
spring.datasource.password=dev_password

# H2 Console (for quick testing)
spring.h2.console.enabled=true

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# Logging
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

# Disable security for easier development
security.enabled=false

# Hot reload
spring.devtools.restart.enabled=true
```

### application-test.properties

```properties
# Test environment

# In-memory database
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# JPA
spring.jpa.hibernate.ddl-auto=create-drop

# Disable external services
external.api.enabled=false
```

### application-staging.properties

```properties
# Staging environment

# Database
spring.datasource.url=jdbc:mysql://staging-db.example.com:3306/myapp
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

# JPA
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false

# Logging
logging.level.root=INFO
logging.file.name=/var/log/myapp/application.log

# Security
security.jwt.secret=${JWT_SECRET}
security.jwt.expiration=3600000

# External APIs
external.api.url=https://staging-api.example.com
```

### application-prod.properties

```properties
# Production environment

# Database
spring.datasource.url=jdbc:mysql://prod-db.example.com:3306/myapp
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5

# JPA
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.jdbc.batch_size=20

# Logging
logging.level.root=WARN
logging.level.com.wavemaker=INFO
logging.file.name=/var/log/myapp/application.log
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n

# Security
security.jwt.secret=${JWT_SECRET}
security.jwt.expiration=1800000

# SSL
server.ssl.enabled=true
server.ssl.key-store=${SSL_KEY_STORE}
server.ssl.key-store-password=${SSL_KEY_STORE_PASSWORD}

# External APIs
external.api.url=https://api.example.com
external.api.timeout=5000

# Actuator (restrict access)
management.endpoints.web.exposure.include=health,metrics
management.endpoint.health.show-details=when-authorized
```

## Using YAML Configuration

```yaml
# application.yml
spring:
  application:
    name: myapp-api

  profiles:
    active: ${SPRING_PROFILES_ACTIVE:dev}

  datasource:
    url: jdbc:mysql://localhost:3306/myapp
    username: root
    password: password

---
# application-dev.yml
spring:
  config:
    activate:
      on-profile: dev

  datasource:
    url: jdbc:mysql://localhost:3306/myapp_dev
    username: dev_user
    password: dev_password

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

---
# application-prod.yml
spring:
  config:
    activate:
      on-profile: prod

  datasource:
    url: jdbc:mysql://${DB_HOST}:3306/${DB_NAME}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    hikari:
      maximum-pool-size: 20

  jpa:
    hibernate:
      ddl-auto: none
    show-sql: false
```

## Activating Profiles

### Via Application Properties

```properties
spring.profiles.active=dev
```

### Via Command Line

```bash
java -jar myapp.jar --spring.profiles.active=prod
```

### Via Environment Variable

```bash
export SPRING_PROFILES_ACTIVE=prod
java -jar myapp.jar
```

### Via IDE (IntelliJ IDEA)

```
Run → Edit Configurations → Active profiles: dev
```

### Via Maven

```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

## Profile-specific Beans

```java
@Configuration
public class DataSourceConfig {

    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:h2:mem:devdb")
            .driverClassName("org.h2.Driver")
            .build();
    }

    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        return DataSourceBuilder.create()
            .url(System.getenv("DB_URL"))
            .username(System.getenv("DB_USERNAME"))
            .password(System.getenv("DB_PASSWORD"))
            .build();
    }
}

@Service
@Profile("!prod")
public class MockEmailService implements EmailService {
    @Override
    public void sendEmail(String to, String subject, String body) {
        log.info("Mock email sent to: {}", to);
    }
}

@Service
@Profile("prod")
public class RealEmailService implements EmailService {
    @Override
    public void sendEmail(String to, String subject, String body) {
        // Actual email sending logic
    }
}
```

## Multiple Active Profiles

```properties
spring.profiles.active=dev,mysql,logging
```

```java
@Component
@Profile({"dev", "staging"})
public class DebugComponent {
    // Active in dev OR staging
}

@Component
@Profile({"dev & mysql"})
public class DevMySQLComponent {
    // Active when BOTH dev AND mysql profiles are active
}
```

## Profile Groups

```properties
# Define profile groups
spring.profiles.group.local=dev,mysql,logging
spring.profiles.group.production=prod,postgres,monitoring

# Activate a group
spring.profiles.active=local
```

## Configuration Properties per Profile

```java
@Configuration
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private String version;
    private Api api;
    private Database database;

    // Getters and setters

    public static class Api {
        private String baseUrl;
        private int timeout;
        // Getters and setters
    }

    public static class Database {
        private int poolSize;
        private boolean showSql;
        // Getters and setters
    }
}
```

```yaml
app:
  name: MyApp
  version: 1.0.0
  api:
    base-url: http://localhost:8080
    timeout: 5000
  database:
    pool-size: 10
    show-sql: true

---
spring:
  config:
    activate:
      on-profile: prod

app:
  api:
    base-url: https://api.production.com
    timeout: 3000
  database:
    pool-size: 50
    show-sql: false
```

## Environment Variables

```properties
# Use environment variables
database.url=${DATABASE_URL:jdbc:mysql://localhost:3306/myapp}
database.username=${DATABASE_USERNAME:root}
database.password=${DATABASE_PASSWORD:password}

# JWT configuration
security.jwt.secret=${JWT_SECRET}
security.jwt.expiration=${JWT_EXPIRATION:3600000}

# API keys
external.api.key=${EXTERNAL_API_KEY}
```

## Docker Configuration

```dockerfile
# Dockerfile
FROM openjdk:17-jdk-slim

ARG SPRING_PROFILE=prod
ENV SPRING_PROFILES_ACTIVE=${SPRING_PROFILE}

COPY target/myapp.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app-dev:
    build: .
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - DB_HOST=mysql-dev
    ports:
      - "8080:8080"

  app-prod:
    build: .
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_HOST=mysql-prod
      - DB_USERNAME=${DB_USERNAME}
      - DB_PASSWORD=${DB_PASSWORD}
    ports:
      - "8443:8443"
```

## Kubernetes ConfigMaps

```yaml
# configmap-dev.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  SPRING_PROFILES_ACTIVE: "dev"
  DATABASE_URL: "jdbc:mysql://mysql-service:3306/myapp_dev"

---
# configmap-prod.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  SPRING_PROFILES_ACTIVE: "prod"
  DATABASE_URL: "jdbc:mysql://mysql-service:3306/myapp_prod"
```

## Testing with Profiles

```java
@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void testCreateUser() {
        // Test logic
    }
}
```

## Best Practices

1. **Default to Development**: Set `dev` as default profile
2. **Externalize Secrets**: Never commit passwords or keys
3. **Use Environment Variables**: For sensitive data in production
4. **Document Profiles**: List all available profiles and their purpose
5. **Test Each Profile**: Ensure configurations work correctly
6. **Minimize Differences**: Keep profiles as similar as possible
7. **Version Control**: Commit profile templates, not actual credentials

## Profile Template

Create a `.env.template` file:

```bash
# Database
DB_HOST=localhost
DB_PORT=3306
DB_NAME=myapp
DB_USERNAME=user
DB_PASSWORD=password

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRATION=3600000

# External APIs
EXTERNAL_API_KEY=your-api-key
EXTERNAL_API_URL=https://api.example.com
```

## Next Steps

- [Build Connectors](../connectors/framework.md)
- [Unit Testing](../testing-debugging/unit-testing.md)
- [How to Build & Use](../testing-debugging/how-to-build-use.md)
