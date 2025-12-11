---
id: how-to-build-use
title: How to Build & Use
sidebar_label: How to Build & Use
sidebar_position: 1
---

# How to Build & Use APIs

Complete guide to building, running, and deploying your WaveMaker APIs and microservices.

## Prerequisites

- Java 17 or later
- Maven 3.9+ or Gradle 8+
- Docker (optional)
- Git

## Project Structure

```
myapp-api/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/wavemaker/myapp/
│   │   │       ├── controller/     # REST controllers
│   │   │       ├── service/        # Business logic
│   │   │       ├── repository/     # Data access
│   │   │       ├── model/          # Entities and DTOs
│   │   │       ├── config/         # Configuration classes
│   │   │       └── Application.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── application-dev.properties
│   │       └── application-prod.properties
│   └── test/
│       └── java/
│           └── com/wavemaker/myapp/
├── pom.xml                         # Maven configuration
├── Dockerfile
└── README.md
```

## Building the Application

### Using Maven

```bash
# Clean and build
mvn clean install

# Skip tests
mvn clean install -DskipTests

# Build specific profile
mvn clean install -P production

# Create executable JAR
mvn clean package
```

### Using Gradle

```bash
# Build project
./gradlew build

# Skip tests
./gradlew build -x test

# Clean and build
./gradlew clean build
```

## Running Locally

### Using Maven

```bash
# Run with default profile
mvn spring-boot:run

# Run with specific profile
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Run with system properties
mvn spring-boot:run -Dspring-boot.run.arguments="--server.port=9090"
```

### Using Gradle

```bash
# Run application
./gradlew bootRun

# With profile
./gradlew bootRun --args='--spring.profiles.active=dev'
```

### Using JAR

```bash
# Build JAR
mvn clean package

# Run JAR
java -jar target/myapp-api-1.0.0.jar

# With profile
java -jar target/myapp-api-1.0.0.jar --spring.profiles.active=prod

# With environment variables
export SPRING_PROFILES_ACTIVE=prod
java -jar target/myapp-api-1.0.0.jar
```

## Using the API

### Health Check

```bash
curl http://localhost:8080/actuator/health
```

### API Endpoints

```bash
# Get all users
curl http://localhost:8080/api/users

# Get user by ID
curl http://localhost:8080/api/users/1

# Create user
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","email":"john@example.com"}'

# Update user
curl -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"username":"john_updated","email":"john@example.com"}'

# Delete user
curl -X DELETE http://localhost:8080/api/users/1
```

### With Authentication

```bash
# Login
TOKEN=$(curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"password"}' \
  | jq -r '.token')

# Use token
curl http://localhost:8080/api/users \
  -H "Authorization: Bearer $TOKEN"
```

## Docker Deployment

### Create Dockerfile

```dockerfile
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM eclipse-temurin:17-jre-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.wavemaker.myapp.Application"]
```

### Build and Run

```bash
# Build image
docker build -t myapp-api:1.0.0 .

# Run container
docker run -p 8080:8080 myapp-api:1.0.0

# With environment variables
docker run -p 8080:8080 \
  -e SPRING_PROFILES_ACTIVE=prod \
  -e DB_HOST=mysql \
  -e DB_USERNAME=admin \
  -e DB_PASSWORD=secret \
  myapp-api:1.0.0
```

### Docker Compose

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: myapp
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql

  api:
    build: .
    ports:
      - "8080:8080"
    environment:
      SPRING_PROFILES_ACTIVE: dev
      DB_HOST: mysql
      DB_USERNAME: root
      DB_PASSWORD: root
    depends_on:
      - mysql

volumes:
  mysql-data:
```

```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop services
docker-compose down
```

## Kubernetes Deployment

### Deployment YAML

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp-api
  template:
    metadata:
      labels:
        app: myapp-api
    spec:
      containers:
      - name: myapp-api
        image: myapp-api:1.0.0
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "prod"
        - name: DB_HOST
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: DB_HOST
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: DB_PASSWORD
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 20
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-api-service
spec:
  selector:
    app: myapp-api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer
```

```bash
# Apply configuration
kubectl apply -f deployment.yaml

# Check status
kubectl get deployments
kubectl get pods
kubectl get services

# View logs
kubectl logs -f deployment/myapp-api

# Scale
kubectl scale deployment myapp-api --replicas=5
```

## CI/CD Pipeline

### GitHub Actions

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'

    - name: Build with Maven
      run: mvn clean package

    - name: Run tests
      run: mvn test

    - name: Build Docker image
      run: docker build -t myapp-api:${{ github.sha }} .

    - name: Push to Docker Hub
      run: |
        echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin
        docker push myapp-api:${{ github.sha }}
```

## Monitoring

### Application Metrics

```bash
# Prometheus metrics
curl http://localhost:8080/actuator/prometheus

# Health check
curl http://localhost:8080/actuator/health

# Application info
curl http://localhost:8080/actuator/info

# Metrics
curl http://localhost:8080/actuator/metrics
```

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Find process
lsof -i :8080

# Kill process
kill -9 <PID>

# Or use different port
java -jar myapp.jar --server.port=9090
```

**Connection refused to database:**
```bash
# Check database is running
docker ps

# Check connection
telnet localhost 3306
```

**Out of memory:**
```bash
# Increase heap size
java -Xmx1024m -Xms512m -jar myapp.jar
```

## Best Practices

1. **Use Profiles**: Separate dev, test, and prod configurations
2. **Externalize Configuration**: Use environment variables
3. **Health Checks**: Implement liveness and readiness probes
4. **Logging**: Configure appropriate log levels
5. **Monitoring**: Enable actuator endpoints
6. **Security**: Never commit secrets to version control
7. **Documentation**: Keep README updated

## Next Steps

- [Unit Testing](./unit-testing.md)
- [Deploy to Production](../../build and deploy/)
