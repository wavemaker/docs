# Secure Connection for Deployed Apps

Ensure secure connections and configurations for production-deployed applications.

## Reverse Proxy Configuration

### Nginx as Reverse Proxy

```nginx
upstream app_servers {
    least_conn;
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://app_servers;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

## Load Balancer SSL Termination

### AWS Application Load Balancer

```javascript
// Trust proxy headers
app.set('trust proxy', 1);

// Check if request is secure
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});
```

## Database Connections

### PostgreSQL SSL

```javascript
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'user',
  password: 'password',
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync('/path/to/server-ca.pem').toString(),
    key: fs.readFileSync('/path/to/client-key.pem').toString(),
    cert: fs.readFileSync('/path/to/client-cert.pem').toString()
  }
});
```

### MongoDB SSL

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://host:port/database', {
  ssl: true,
  sslValidate: true,
  sslCA: fs.readFileSync('/path/to/ca.pem'),
  sslCert: fs.readFileSync('/path/to/cert.pem'),
  sslKey: fs.readFileSync('/path/to/key.pem')
});
```

## Environment Variables

```javascript
// config.js
const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production'
  },
  session: {
    secret: process.env.SESSION_SECRET,
    secure: process.env.NODE_ENV === 'production'
  },
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || []
  }
};

module.exports = config;
```

## Docker Security

```dockerfile
# Use non-root user
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY --chown=nodejs:nodejs . .
USER nodejs

EXPOSE 3000
CMD ["node", "server.js"]
```

## Best Practices

1. Use HTTPS everywhere
2. Implement SSL/TLS termination at load balancer
3. Encrypt database connections
4. Use environment-specific configurations
5. Implement health checks
6. Use secrets management (AWS Secrets Manager, Vault)
7. Enable access logs
8. Implement rate limiting
9. Use CDN for static assets
10. Regular security updates

Secure deployment configurations protect your application in production environments.
