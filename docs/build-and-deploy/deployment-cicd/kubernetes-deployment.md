---
last_update: { author: "Author Name" }
---

# Kubernetes Deployment

Comprehensive guide to deploying applications on Kubernetes clusters.

## Overview
Kubernetes (K8s) is a powerful container orchestration platform for automating deployment, scaling, and management of containerized applications.

## Kubernetes Basics

### Core Concepts

#### Pods
- Smallest deployable unit
- Contains one or more containers
- Shares network and storage
- Ephemeral by nature

#### Deployments
- Manages ReplicaSets
- Declarative updates
- Rolling updates
- Rollback capability

#### Services
- Stable network endpoint
- Load balancing
- Service discovery
- Internal/External access

#### ConfigMaps & Secrets
- Configuration management
- Environment variables
- Sensitive data (Secrets)
- Volume mounts

## Basic Deployment

### Simple Deployment

#### deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myregistry.com/myapp:1.0.0
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: production
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

#### service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
```

#### Apply Resources
```bash
# Apply deployment
kubectl apply -f deployment.yaml

# Apply service
kubectl apply -f service.yaml

# Or apply all in directory
kubectl apply -f k8s/

# Check status
kubectl get deployments
kubectl get pods
kubectl get services
```

## Configuration Management

### ConfigMaps

#### configmap.yaml
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  API_URL: "https://api.example.com"
  LOG_LEVEL: "info"
  CACHE_TTL: "3600"
  app.conf: |
    server {
      listen 80;
      server_name myapp.com;
    }
```

#### Using ConfigMap
```yaml
# As environment variables
env:
- name: API_URL
  valueFrom:
    configMapKeyRef:
      name: myapp-config
      key: API_URL

# As volume mount
volumes:
- name: config
  configMap:
    name: myapp-config
    items:
    - key: app.conf
      path: app.conf

volumeMounts:
- name: config
  mountPath: /etc/config
```

### Secrets

#### Creating Secrets
```bash
# From literal values
kubectl create secret generic myapp-secrets \
  --from-literal=DATABASE_URL=postgresql://... \
  --from-literal=API_KEY=secret123

# From file
kubectl create secret generic myapp-secrets \
  --from-file=./secrets/database.txt

# From env file
kubectl create secret generic myapp-secrets \
  --from-env-file=.env.production
```

#### secret.yaml
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
data:
  # Base64 encoded values
  DATABASE_URL: cG9zdGdyZXNxbDovLy4uLg==
  API_KEY: c2VjcmV0MTIz
```

#### Using Secrets
```yaml
env:
- name: DATABASE_URL
  valueFrom:
    secretKeyRef:
      name: myapp-secrets
      key: DATABASE_URL

# Or mount as volume
volumes:
- name: secrets
  secret:
    secretName: myapp-secrets

volumeMounts:
- name: secrets
  mountPath: /etc/secrets
  readOnly: true
```

## Advanced Deployment Strategies

### Rolling Update

#### Strategy Configuration
```yaml
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max pods above desired count
      maxUnavailable: 1  # Max pods that can be unavailable
```

#### Perform Update
```bash
# Update image
kubectl set image deployment/myapp myapp=myregistry.com/myapp:1.1.0

# Or apply new manifest
kubectl apply -f deployment.yaml

# Check rollout status
kubectl rollout status deployment/myapp

# View history
kubectl rollout history deployment/myapp

# Rollback if needed
kubectl rollout undo deployment/myapp

# Rollback to specific revision
kubectl rollout undo deployment/myapp --to-revision=2
```

### Blue-Green Deployment

#### Blue Deployment (Current)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: blue
  template:
    metadata:
      labels:
        app: myapp
        version: blue
    spec:
      containers:
      - name: myapp
        image: myregistry.com/myapp:1.0.0
```

#### Green Deployment (New)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-green
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      version: green
  template:
    metadata:
      labels:
        app: myapp
        version: green
    spec:
      containers:
      - name: myapp
        image: myregistry.com/myapp:2.0.0
```

#### Switch Traffic
```yaml
# Service initially points to blue
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
    version: blue  # Change to 'green' to switch
  ports:
  - port: 80
    targetPort: 3000
```

### Canary Deployment

```yaml
# Main deployment (90%)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-stable
spec:
  replicas: 9
  selector:
    matchLabels:
      app: myapp
      track: stable
  template:
    metadata:
      labels:
        app: myapp
        track: stable
    spec:
      containers:
      - name: myapp
        image: myregistry.com/myapp:1.0.0

---
# Canary deployment (10%)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-canary
spec:
  replicas: 1
  selector:
    matchLabels:
      app: myapp
      track: canary
  template:
    metadata:
      labels:
        app: myapp
        track: canary
    spec:
      containers:
      - name: myapp
        image: myregistry.com/myapp:2.0.0

---
# Service for both
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp  # Matches both stable and canary
  ports:
  - port: 80
    targetPort: 3000
```

## Scaling

### Manual Scaling
```bash
# Scale deployment
kubectl scale deployment myapp --replicas=5

# Scale via manifest
kubectl apply -f deployment.yaml
```

### Horizontal Pod Autoscaler (HPA)

#### hpa.yaml
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

```bash
# Create HPA
kubectl apply -f hpa.yaml

# Check HPA status
kubectl get hpa

# Describe HPA
kubectl describe hpa myapp-hpa
```

## Ingress & Networking

### Ingress Controller

#### Install Nginx Ingress
```bash
# Using Helm
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm install nginx-ingress ingress-nginx/ingress-nginx

# Or using manifests
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
```

#### ingress.yaml
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - myapp.com
    secretName: myapp-tls
  rules:
  - host: myapp.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: myapp-api-service
            port:
              number: 8080
```

### Network Policies

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: myapp-network-policy
spec:
  podSelector:
    matchLabels:
      app: myapp
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 3000
  egress:
  - to:
    - podSelector:
        matchLabels:
          role: database
    ports:
    - protocol: TCP
      port: 5432
```

## Persistent Storage

### Persistent Volume (PV) and Claim (PVC)

#### pv.yaml
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: myapp-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: /mnt/data
```

#### pvc.yaml
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: myapp-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard
```

#### Using PVC in Deployment
```yaml
spec:
  template:
    spec:
      containers:
      - name: myapp
        volumeMounts:
        - name: data
          mountPath: /app/data
      volumes:
      - name: data
        persistentVolumeClaim:
          claimName: myapp-pvc
```

## StatefulSets

For stateful applications like databases:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi
```

## Helm Charts

### Installing Helm
```bash
# Install Helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Add repositories
helm repo add stable https://charts.helm.sh/stable
helm repo update
```

### Creating Helm Chart

#### Directory Structure
```
myapp-chart/
├── Chart.yaml
├── values.yaml
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── _helpers.tpl
```

#### Chart.yaml
```yaml
apiVersion: v2
name: myapp
description: My Application Helm Chart
version: 1.0.0
appVersion: "1.0.0"
```

#### values.yaml
```yaml
replicaCount: 3

image:
  repository: myregistry.com/myapp
  tag: 1.0.0
  pullPolicy: IfNotPresent

service:
  type: LoadBalancer
  port: 80

ingress:
  enabled: true
  className: nginx
  hosts:
    - host: myapp.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
```

#### Using Helm
```bash
# Install chart
helm install myapp ./myapp-chart

# Install with custom values
helm install myapp ./myapp-chart -f custom-values.yaml

# Upgrade release
helm upgrade myapp ./myapp-chart

# Rollback
helm rollback myapp 1

# Uninstall
helm uninstall myapp

# List releases
helm list
```

## Monitoring & Logging

### Prometheus & Grafana

```bash
# Install Prometheus
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack

# Access Grafana
kubectl port-forward svc/prometheus-grafana 3000:80
```

### ELK Stack

```yaml
# Elasticsearch
helm repo add elastic https://helm.elastic.co
helm install elasticsearch elastic/elasticsearch

# Kibana
helm install kibana elastic/kibana

# Filebeat
helm install filebeat elastic/filebeat
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Deploy to Kubernetes

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Build Docker image
        run: |
          docker build -t myregistry.com/myapp:${{ github.sha }} .
          docker push myregistry.com/myapp:${{ github.sha }}

      - name: Setup kubectl
        uses: azure/setup-kubectl@v3

      - name: Configure kubectl
        run: |
          echo "${{ secrets.KUBE_CONFIG }}" | base64 -d > kubeconfig
          export KUBECONFIG=kubeconfig

      - name: Deploy to Kubernetes
        run: |
          kubectl set image deployment/myapp \
            myapp=myregistry.com/myapp:${{ github.sha }}
          kubectl rollout status deployment/myapp
```

## Best Practices

1. **Use namespaces** for environment isolation
2. **Set resource limits** on all containers
3. **Implement health checks** (liveness/readiness)
4. **Use ConfigMaps and Secrets** for configuration
5. **Enable RBAC** for access control
6. **Use Ingress** for external access
7. **Implement network policies** for security
8. **Monitor and log** everything
9. **Use Helm** for package management
10. **Automate deployments** with CI/CD

## Troubleshooting

### Common Commands
```bash
# View pods
kubectl get pods

# Describe pod
kubectl describe pod <pod-name>

# View logs
kubectl logs <pod-name>
kubectl logs -f <pod-name>  # Follow logs
kubectl logs <pod-name> -c <container-name>  # Specific container

# Execute command in pod
kubectl exec -it <pod-name> -- /bin/bash

# Port forward
kubectl port-forward <pod-name> 8080:3000

# View events
kubectl get events --sort-by='.lastTimestamp'

# Debug pod
kubectl run debug --image=busybox -it --rm -- /bin/sh
```

## Related Documentation

- [One-Click Deployment](./one-click-deployment.md)
- [Container Deployment](./container-deployment.md)
- [Build Options](../web-app-build/built-options.md)
