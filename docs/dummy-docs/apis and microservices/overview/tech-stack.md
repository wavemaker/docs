---
id: tech-stack
title: Technology Stack
sidebar_label: Tech Stack
sidebar_position: 2
---

# Technology Stack

Overview of the technologies and frameworks powering WaveMaker APIs and Microservices.

## Backend Framework

### Spring Boot
WaveMaker uses **Spring Boot** as the foundation for building microservices.

**Key Features:**
- Auto-configuration and convention over configuration
- Embedded application servers (Tomcat, Jetty)
- Production-ready features (health checks, metrics)
- Extensive ecosystem of libraries

**Version:**
- Spring Boot 3.x
- Spring Framework 6.x

### Spring Cloud
For microservices infrastructure and patterns.

**Components:**
- **Spring Cloud Gateway**: API Gateway
- **Spring Cloud Config**: Centralized configuration
- **Spring Cloud Netflix**: Resilience patterns
- **Spring Cloud Security**: OAuth2 and JWT support

## Data Access

### JPA/Hibernate
Object-Relational Mapping (ORM) for database operations.

**Features:**
- Entity relationship mapping
- Query abstraction (JPQL, Criteria API)
- Transaction management
- Database schema generation

### Spring Data
Repository pattern implementation for data access.

**Supported Databases:**
- MySQL
- PostgreSQL
- Oracle
- SQL Server
- MongoDB
- Cassandra

## API Technologies

### RESTful APIs
Built on Spring MVC/Spring WebFlux.

**Standards:**
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Status codes (200, 201, 400, 404, 500, etc.)
- Content negotiation (JSON, XML)
- HATEOAS support

### GraphQL
For flexible data querying (optional).

### gRPC
For high-performance inter-service communication.

## Security

### Spring Security
Enterprise-grade security framework.

**Features:**
- Authentication (Form, Basic, OAuth2, JWT)
- Authorization (Role-based, Permission-based)
- CSRF protection
- CORS configuration
- Security headers

### OAuth 2.0 / OpenID Connect
Industry-standard protocols for authorization and authentication.

**Supported Flows:**
- Authorization Code
- Client Credentials
- Implicit
- Password Grant

## API Documentation

### OpenAPI/Swagger
Automatic API documentation generation.

**Tools:**
- Swagger UI: Interactive API documentation
- Swagger Codegen: Client SDK generation
- OpenAPI 3.0 specification

## Testing

### JUnit 5
Unit testing framework.

**Features:**
- Parameterized tests
- Test lifecycle management
- Assertions and assumptions

### Spring Boot Test
Integration testing support.

**Tools:**
- MockMvc for testing REST controllers
- TestRestTemplate for integration tests
- @DataJpaTest for repository tests

### Mockito
Mocking framework for unit tests.

## Monitoring & Observability

### Spring Boot Actuator
Production-ready monitoring and management.

**Endpoints:**
- `/actuator/health`: Health checks
- `/actuator/metrics`: Application metrics
- `/actuator/info`: Application information
- `/actuator/loggers`: Log level management

### Micrometer
Metrics collection and monitoring.

**Supported Systems:**
- Prometheus
- Grafana
- New Relic
- Datadog

## Logging

### SLF4J + Logback
Flexible logging framework.

**Features:**
- Multiple log levels (TRACE, DEBUG, INFO, WARN, ERROR)
- Log appenders (Console, File, Database)
- MDC (Mapped Diagnostic Context) for tracing
- Log rotation and archival

## Build Tools

### Maven
Dependency management and build automation.

**Configuration:**
- `pom.xml` for project configuration
- Multi-module support
- Profile-based builds

### Gradle
Alternative build tool (optional).

## DevOps Tools

### Docker
Containerization for consistent deployments.

**Features:**
- Dockerfile generation
- Multi-stage builds
- Docker Compose for local development

### Kubernetes
Container orchestration (for cloud deployments).

**Resources:**
- Deployments
- Services
- ConfigMaps
- Secrets

## Development Tools

### IDE Support
- IntelliJ IDEA
- Eclipse
- Visual Studio Code

### API Testing
- Postman
- Insomnia
- cURL

## Technology Versions

| Technology | Version |
|------------|---------|
| Java | 17+ |
| Spring Boot | 3.2.x |
| Spring Framework | 6.1.x |
| Hibernate | 6.x |
| Maven | 3.9.x |

## Next Steps

- [Explore the Architecture](./architecture.md)
- [Create Your First API](../apis/database-crud-apis.md)
- [Set Up Authentication](../security/authentication-authorization.md)
