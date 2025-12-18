# One-Click Deployment

Simplified deployment process with automated one-click deployment solutions.

## Overview
One-click deployment streamlines the deployment process, allowing you to deploy applications to production or staging environments with a single action, reducing manual steps and human error.

## What is One-Click Deployment?

### Definition
One-click deployment is an automated deployment process that handles:
- Building the application
- Running tests
- Packaging artifacts
- Deploying to target environment
- Verifying deployment
- Rollback if needed

### Benefits
- **Speed** - Deploy in seconds/minutes
- **Consistency** - Same process every time
- **Reliability** - Automated testing and validation
- **Reduced Errors** - Eliminates manual mistakes
- **Rollback** - Quick revert if issues arise
- **Audit Trail** - Track all deployments

## Platform Solutions

### Heroku

#### Setup
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create my-app-name

# Add remote
git remote add heroku https://git.heroku.com/my-app-name.git
```

#### Deploy
```bash
# One-click deploy
git push heroku main

# Deploy from branch
git push heroku develop:main

# View logs
heroku logs --tail

# Open app
heroku open
```

#### Configuration
```json
// package.json
{
  "scripts": {
    "start": "node server.js",
    "build": "npm run build:prod"
  },
  "engines": {
    "node": "18.x"
  }
}
```

```yaml
# Procfile
web: npm start
worker: node worker.js
```

### Vercel

#### Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login
```

#### Deploy
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Deploy with environment
vercel --prod --env CUSTOM_VAR=value
```

#### Configuration
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ],
  "env": {
    "API_URL": "@api_url"
  }
}
```

### Netlify

#### Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init
```

#### Deploy
```bash
# Deploy to production
netlify deploy --prod

# Deploy to preview
netlify deploy

# Deploy with build
netlify deploy --prod --build
```

#### Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "https://api.example.com/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### AWS Elastic Beanstalk

#### Setup
```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init

# Select region and platform
# Create environment
eb create production
```

#### Deploy
```bash
# Deploy current commit
eb deploy

# Deploy with environment
eb deploy production

# Check status
eb status

# View logs
eb logs

# Open app
eb open
```

#### Configuration
```yaml
# .ebextensions/nodecommand.config
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production
```

### Google Cloud Platform

#### Setup
```bash
# Install gcloud CLI
# Initialize
gcloud init

# Set project
gcloud config set project my-project-id
```

#### App Engine Deploy
```bash
# Deploy
gcloud app deploy

# Deploy with version
gcloud app deploy --version=v1

# View app
gcloud app browse
```

#### Configuration
```yaml
# app.yaml
runtime: nodejs18

env_variables:
  NODE_ENV: 'production'

automatic_scaling:
  min_instances: 1
  max_instances: 10
```

### Azure App Service

#### Setup
```bash
# Install Azure CLI
# Login
az login

# Create app service
az webapp create \
  --name my-app \
  --resource-group my-rg \
  --plan my-plan
```

#### Deploy
```bash
# Deploy from local Git
az webapp deployment source config-local-git \
  --name my-app \
  --resource-group my-rg

git remote add azure <git-url>
git push azure main

# Deploy from ZIP
az webapp deployment source config-zip \
  --resource-group my-rg \
  --name my-app \
  --src app.zip
```

## Custom One-Click Solutions

### Deployment Script

#### Simple Deploy Script
```bash
#!/bin/bash
# deploy.sh

set -e  # Exit on error

echo "Starting deployment..."

# Pull latest code
echo "Pulling latest code..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run tests
echo "Running tests..."
npm test

# Build application
echo "Building application..."
npm run build

# Backup current version
echo "Backing up current version..."
cp -r dist dist.backup

# Deploy new version
echo "Deploying new version..."
rsync -avz dist/ /var/www/html/

# Restart server
echo "Restarting server..."
sudo systemctl restart nginx

# Health check
echo "Performing health check..."
curl -f http://localhost/health || (
  echo "Health check failed! Rolling back..."
  rm -rf /var/www/html
  cp -r dist.backup /var/www/html
  sudo systemctl restart nginx
  exit 1
)

echo "Deployment successful!"
```

#### Usage
```bash
# Make executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### Deploy Button (README.md)

#### Heroku Deploy Button
```markdown
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/user/repo)
```

```json
// app.json
{
  "name": "My App",
  "description": "A simple Node.js app",
  "repository": "https://github.com/user/repo",
  "keywords": ["node", "express"],
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    }
  ],
  "env": {
    "API_KEY": {
      "description": "API key for external service",
      "required": true
    }
  }
}
```

#### Vercel Deploy Button
```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/user/repo)
```

#### Netlify Deploy Button
```markdown
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/user/repo)
```

### Web Interface Deploy

#### Custom Deploy Dashboard
```javascript
// deploy-dashboard.js
const express = require('express');
const { exec } = require('child_process');

const app = express();

app.post('/deploy', authenticate, (req, res) => {
  const { branch = 'main', environment = 'production' } = req.body;

  exec(`./deploy.sh ${branch} ${environment}`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
        logs: stderr
      });
    }

    res.json({
      success: true,
      logs: stdout
    });
  });
});

app.listen(3000);
```

## CI/CD Integration

### GitHub Actions One-Click

```yaml
name: One-Click Deploy

on:
  workflow_dispatch:  # Manual trigger
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ github.event.inputs.environment }}

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy
        run: |
          if [ "${{ github.event.inputs.environment }}" == "production" ]; then
            npm run deploy:prod
          else
            npm run deploy:staging
          fi
```

### GitLab CI/CD Manual Deploy

```yaml
# .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

deploy:
  stage: deploy
  when: manual  # Requires manual trigger
  script:
    - npm ci
    - npm run build
    - npm run deploy
  only:
    - main
  environment:
    name: production
    url: https://myapp.com
```

## Deployment Monitoring

### Health Checks
```javascript
// health.js
app.get('/health', (req, res) => {
  const health = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
    checks: {
      database: checkDatabase(),
      redis: checkRedis(),
      api: checkExternalAPI()
    }
  };

  const isHealthy = Object.values(health.checks).every(c => c.status === 'OK');

  res.status(isHealthy ? 200 : 503).json(health);
});
```

### Deployment Notifications

#### Slack Notification
```bash
# notify.sh
#!/bin/bash

SLACK_WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

curl -X POST -H 'Content-type: application/json' \
  --data "{
    \"text\": \"Deployment completed successfully!\",
    \"attachments\": [{
      \"color\": \"good\",
      \"fields\": [{
        \"title\": \"Environment\",
        \"value\": \"${ENVIRONMENT}\",
        \"short\": true
      }, {
        \"title\": \"Version\",
        \"value\": \"${VERSION}\",
        \"short\": true
      }]
    }]
  }" \
  $SLACK_WEBHOOK_URL
```

## Rollback Procedures

### Quick Rollback
```bash
#!/bin/bash
# rollback.sh

echo "Rolling back deployment..."

# Restore backup
rm -rf /var/www/html
cp -r /var/www/html.backup /var/www/html

# Restart services
sudo systemctl restart nginx
sudo systemctl restart app

# Verify
curl -f http://localhost/health

echo "Rollback complete!"
```

### Version-Based Rollback
```bash
# Deploy with version tracking
./deploy.sh --version=1.2.3

# Rollback to previous version
./rollback.sh --version=1.2.2
```

## Security Considerations

### Secure Deployments
1. **Authentication** - Require authentication for deployments
2. **Authorization** - Role-based deployment access
3. **Audit Logs** - Track all deployment activities
4. **Secrets Management** - Use environment variables
5. **Network Security** - Deploy over secure connections
6. **Verification** - Verify deployment integrity

### Environment Variables
```bash
# .env.production (not in version control)
DATABASE_URL=postgresql://user:pass@host:5432/db
API_KEY=secret_key_here
JWT_SECRET=jwt_secret_here
```

## Best Practices

1. **Test before deploy** - Always run tests
2. **Use staging** - Test in staging first
3. **Automate everything** - Minimize manual steps
4. **Monitor deployments** - Watch for issues
5. **Have rollback ready** - Quick revert capability
6. **Version everything** - Track all versions
7. **Document process** - Clear deployment docs
8. **Notify team** - Communication is key
9. **Security first** - Secure all credentials
10. **Gradual rollout** - Use staged deployments

## Troubleshooting

### Common Issues

**Deployment Fails**
- Check logs for errors
- Verify credentials
- Test build locally
- Check network connectivity

**App Not Starting**
- Verify environment variables
- Check application logs
- Validate configuration
- Test dependencies

**Slow Deployment**
- Optimize build process
- Use caching
- Parallelize steps
- Check network speed

## Related Documentation

- [Container Deployment](./container-deployment.md)
- [Kubernetes Deployment](./kubernetes-deployment.md)
- [Build Options](../web-app-build/built-options.md)
