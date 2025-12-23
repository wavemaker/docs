---
last_update: { author: "Author Name" }
---

# Container, Cloud, and Private Infrastructure Deployment

Comprehensive guide to deploying applications using containers, cloud platforms, and private infrastructure.

## Overview
This guide covers deployment strategies for containerized applications across various platforms including cloud providers and on-premises infrastructure.

## Container Deployment

### Docker Basics

#### Dockerfile
```dockerfile
# Node.js application example
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Start application
CMD ["node", "dist/server.js"]
```

#### Building Images
```bash
# Build image
docker build -t myapp:1.0.0 .

# Build with specific platform
docker build --platform linux/amd64 -t myapp:1.0.0 .

# Build with build args
docker build --build-arg NODE_ENV=production -t myapp:1.0.0 .

# Multi-stage build
docker build --target production -t myapp:1.0.0 .
```

#### Running Containers
```bash
# Run container
docker run -d -p 3000:3000 --name myapp myapp:1.0.0

# Run with environment variables
docker run -d -p 3000:3000 \
  -e NODE_ENV=production \
  -e DATABASE_URL=postgresql://... \
  myapp:1.0.0

# Run with volume mount
docker run -d -p 3000:3000 \
  -v /host/data:/app/data \
  myapp:1.0.0

# Run with resource limits
docker run -d -p 3000:3000 \
  --memory="512m" \
  --cpus="1.0" \
  myapp:1.0.0
```

### Docker Compose

#### docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://db:5432/myapp
    depends_on:
      - db
      - redis
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:

networks:
  default:
    name: myapp-network
```

#### Managing with Compose
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Scale services
docker-compose up -d --scale app=3
```

## Cloud Deployment

### Amazon Web Services (AWS)

#### ECS (Elastic Container Service)

**Task Definition**
```json
{
  "family": "myapp",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "myapp",
      "image": "123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:region:account:secret:db-url"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/myapp",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      },
      "healthCheck": {
        "command": ["CMD-SHELL", "curl -f http://localhost:3000/health || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3
      }
    }
  ]
}
```

**Deployment**
```bash
# Login to ECR
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin \
  123456789.dkr.ecr.us-east-1.amazonaws.com

# Build and push
docker build -t myapp:latest .
docker tag myapp:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:latest

# Update service
aws ecs update-service \
  --cluster my-cluster \
  --service myapp-service \
  --force-new-deployment
```

#### EKS (Elastic Kubernetes Service)
See [Kubernetes Deployment](./kubernetes-deployment.md) section.

#### Elastic Beanstalk (Docker)

**Dockerrun.aws.json**
```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "myapp:latest",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": 3000,
      "HostPort": 80
    }
  ],
  "Volumes": [
    {
      "HostDirectory": "/var/app/data",
      "ContainerDirectory": "/app/data"
    }
  ]
}
```

### Google Cloud Platform (GCP)

#### Cloud Run
```bash
# Build and submit to GCR
gcloud builds submit --tag gcr.io/project-id/myapp

# Deploy to Cloud Run
gcloud run deploy myapp \
  --image gcr.io/project-id/myapp \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 1 \
  --max-instances 10 \
  --set-env-vars NODE_ENV=production
```

#### GKE (Google Kubernetes Engine)
See [Kubernetes Deployment](./kubernetes-deployment.md) section.

### Microsoft Azure

#### Azure Container Instances
```bash
# Create resource group
az group create --name myapp-rg --location eastus

# Create container instance
az container create \
  --resource-group myapp-rg \
  --name myapp \
  --image myregistry.azurecr.io/myapp:latest \
  --cpu 1 \
  --memory 1 \
  --registry-login-server myregistry.azurecr.io \
  --registry-username <username> \
  --registry-password <password> \
  --dns-name-label myapp-unique \
  --ports 80 443 \
  --environment-variables 'NODE_ENV'='production'
```

#### Azure Kubernetes Service (AKS)
See [Kubernetes Deployment](./kubernetes-deployment.md) section.

## Private Infrastructure Deployment

### On-Premises Deployment

#### Docker on VM

**Setup Script**
```bash
#!/bin/bash
# setup-docker.sh

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" \
  -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker $USER
```

**Deploy Script**
```bash
#!/bin/bash
# deploy.sh

set -e

# Variables
IMAGE_NAME="myapp"
CONTAINER_NAME="myapp"
PORT=3000

# Pull latest image
docker pull myregistry.com/$IMAGE_NAME:latest

# Stop and remove old container
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

# Run new container
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:3000 \
  -e NODE_ENV=production \
  --env-file .env.production \
  myregistry.com/$IMAGE_NAME:latest

# Health check
sleep 5
curl -f http://localhost:$PORT/health || exit 1

echo "Deployment successful!"
```

### Private Container Registry

#### Harbor Registry

**docker-compose.yml**
```yaml
version: '3.8'

services:
  registry:
    image: goharbor/harbor-core:v2.8.0
    restart: always
    volumes:
      - ./harbor/config:/etc/core
      - ./harbor/data:/data
    ports:
      - "80:8080"
    depends_on:
      - postgresql
      - redis

  postgresql:
    image: goharbor/harbor-db:v2.8.0
    restart: always
    volumes:
      - ./postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: root123

  redis:
    image: goharbor/redis-photon:v2.8.0
    restart: always
```

#### Docker Registry
```bash
# Start registry
docker run -d \
  -p 5000:5000 \
  --restart=always \
  --name registry \
  -v /mnt/registry:/var/lib/registry \
  registry:2

# Push to registry
docker tag myapp:latest localhost:5000/myapp:latest
docker push localhost:5000/myapp:latest
```

### Load Balancing

#### Nginx Load Balancer

**nginx.conf**
```nginx
upstream backend {
    least_conn;
    server app1:3000 max_fails=3 fail_timeout=30s;
    server app2:3000 max_fails=3 fail_timeout=30s;
    server app3:3000 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    server_name myapp.com;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Health check
        proxy_next_upstream error timeout http_500 http_502 http_503;
        proxy_connect_timeout 5s;
        proxy_send_timeout 10s;
        proxy_read_timeout 10s;
    }

    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
```

#### HAProxy Load Balancer

**haproxy.cfg**
```
global
    maxconn 4096
    log stdout format raw local0

defaults
    mode http
    timeout connect 5s
    timeout client 30s
    timeout server 30s

frontend http_front
    bind *:80
    default_backend http_back

backend http_back
    balance roundrobin
    option httpchk GET /health
    http-check expect status 200
    server app1 app1:3000 check
    server app2 app2:3000 check
    server app3 app3:3000 check
```

## Monitoring and Logging

### Container Monitoring

#### Prometheus + Grafana
```yaml
# prometheus.yml
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
    ports:
      - 9090:9090

  grafana:
    image: grafana/grafana
    ports:
      - 3001:3000
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
```

#### Centralized Logging
```yaml
# ELK Stack
services:
  elasticsearch:
    image: elasticsearch:8.8.0
    environment:
      - discovery.type=single-node
    ports:
      - 9200:9200

  logstash:
    image: logstash:8.8.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf

  kibana:
    image: kibana:8.8.0
    ports:
      - 5601:5601
    depends_on:
      - elasticsearch
```

## Security Best Practices

### Container Security

**1. Use Official Base Images**
```dockerfile
FROM node:18-alpine  # Official, minimal image
```

**2. Run as Non-Root**
```dockerfile
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
```

**3. Minimize Layers**
```dockerfile
RUN apt-get update && apt-get install -y \
    package1 \
    package2 \
    && rm -rf /var/lib/apt/lists/*
```

**4. Scan for Vulnerabilities**
```bash
# Scan with Trivy
trivy image myapp:latest

# Scan with Snyk
snyk container test myapp:latest
```

**5. Use Multi-Stage Builds**
```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/server.js"]
```

## Backup and Disaster Recovery

### Volume Backups
```bash
# Backup volume
docker run --rm \
  -v myapp_data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/backup.tar.gz -C /data .

# Restore volume
docker run --rm \
  -v myapp_data:/data \
  -v $(pwd):/backup \
  alpine sh -c "cd /data && tar xzf /backup/backup.tar.gz"
```

### Database Backups
```bash
# PostgreSQL backup
docker exec postgres pg_dump -U user dbname > backup.sql

# MySQL backup
docker exec mysql mysqldump -u user -p dbname > backup.sql

# Restore
docker exec -i postgres psql -U user dbname < backup.sql
```

## Best Practices

1. **Use multi-stage builds** to reduce image size
2. **Tag images properly** with versions
3. **Implement health checks** in all containers
4. **Use secrets management** for sensitive data
5. **Monitor container metrics** and logs
6. **Implement automatic restarts** with proper policies
7. **Use resource limits** to prevent resource exhaustion
8. **Keep images updated** and scan for vulnerabilities
9. **Use orchestration** for production workloads
10. **Have backup and recovery** procedures

## Troubleshooting

### Common Issues

**Container Won't Start**
```bash
# Check logs
docker logs container-name

# Check events
docker events

# Inspect container
docker inspect container-name
```

**Network Issues**
```bash
# List networks
docker network ls

# Inspect network
docker network inspect network-name

# Connect container to network
docker network connect network-name container-name
```

**Performance Issues**
```bash
# Check resource usage
docker stats

# Check processes
docker top container-name

# Limit resources
docker update --memory="512m" --cpus="1.0" container-name
```

## Related Documentation

- [One-Click Deployment](./one-click-deployment.md)
- [Kubernetes Deployment](./kubernetes-deployment.md)
- [Build Options](../web-app-build/built-options.md)
