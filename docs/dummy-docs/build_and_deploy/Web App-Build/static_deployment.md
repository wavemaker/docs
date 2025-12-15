# Static Content Deployment

Learn how to build and deploy static web content for modern web applications.

## Overview
Static content deployment involves serving HTML, CSS, JavaScript, images, and other assets without server-side processing. This approach is ideal for single-page applications (SPAs), JAMstack sites, and static site generators.

## What is Static Content?

### Static Assets
- **HTML files** - Markup and structure
- **CSS files** - Styles and layouts
- **JavaScript files** - Client-side logic
- **Images** - PNG, JPEG, SVG, WebP
- **Fonts** - WOFF, WOFF2, TTF
- **Media** - Videos, audio files
- **Documents** - PDFs, downloads

### Benefits
- Fast loading times
- High scalability
- Low hosting costs
- Enhanced security
- Global CDN distribution
- Simple deployment

## Building Static Content

### React Application

#### Build Configuration
```json
{
  "name": "my-react-app",
  "scripts": {
    "build": "react-scripts build",
    "build:prod": "GENERATE_SOURCEMAP=false react-scripts build"
  }
}
```

#### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output in 'build' directory
# build/
#   ├── index.html
#   ├── static/
#   │   ├── css/
#   │   ├── js/
#   │   └── media/
#   └── manifest.json
```

### Vue.js Application

#### Build Configuration
```javascript
// vue.config.js
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? '/myapp/' : '/',
  productionSourceMap: false,

  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: 'all'
    })
  }
}
```

#### Build Process
```bash
# Build for production
npm run build

# Output in 'dist' directory
```

### Angular Application

#### Build Configuration
```json
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "buildOptimizer": true
            }
          }
        }
      }
    }
  }
}
```

#### Build Process
```bash
# Build for production
ng build --configuration production

# Output in 'dist' directory
```

### Static Site Generators

#### Gatsby
```bash
# Build
gatsby build

# Output in 'public' directory
```

#### Next.js (Static Export)
```bash
# Build and export
next build && next export

# Output in 'out' directory
```

#### Hugo
```bash
# Build
hugo

# Output in 'public' directory
```

## Deployment Targets

### Amazon S3 + CloudFront

#### S3 Configuration
```bash
# Create S3 bucket
aws s3 mb s3://my-app-bucket

# Configure bucket for static hosting
aws s3 website s3://my-app-bucket \
  --index-document index.html \
  --error-document error.html

# Upload files
aws s3 sync build/ s3://my-app-bucket --delete
```

#### CloudFront Setup
```bash
# Create CloudFront distribution
aws cloudfront create-distribution \
  --origin-domain-name my-app-bucket.s3.amazonaws.com \
  --default-root-object index.html
```

#### Bucket Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-app-bucket/*"
    }
  ]
}
```

### Netlify

#### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

#### Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=build
```

### Vercel

#### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

#### Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### GitHub Pages

#### Configuration
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

#### Deployment
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### Azure Static Web Apps

#### staticwebapp.config.json
```json
{
  "routes": [
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html"
  }
}
```

#### Deployment
```bash
# Using Azure CLI
az staticwebapp create \
  --name my-static-app \
  --resource-group my-rg \
  --source https://github.com/user/repo \
  --location "West US 2" \
  --branch main \
  --app-location "/" \
  --output-location "build"
```

### Firebase Hosting

#### firebase.json
```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### Deployment
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

## Nginx Configuration

### Basic Configuration
```nginx
server {
    listen 80;
    server_name myapp.com;
    root /var/www/myapp;
    index index.html;

    # Serve static files
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### HTTPS Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name myapp.com;

    ssl_certificate /etc/ssl/certs/myapp.crt;
    ssl_certificate_key /etc/ssl/private/myapp.key;

    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    root /var/www/myapp;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Apache Configuration

### .htaccess
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>
```

## CDN Integration

### CloudFront Configuration
```javascript
// AWS CDK example
const distribution = new cloudfront.Distribution(this, 'Distribution', {
  defaultBehavior: {
    origin: new origins.S3Origin(bucket),
    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
  },
  defaultRootObject: 'index.html',
  errorResponses: [
    {
      httpStatus: 404,
      responsePagePath: '/index.html',
      responseHttpStatus: 200,
    },
  ],
});
```

### Cloudflare Configuration
- Add site to Cloudflare
- Update DNS records
- Enable Auto Minify (HTML, CSS, JS)
- Enable Brotli compression
- Set cache levels
- Configure Page Rules

## Optimization

### Asset Optimization

#### Image Optimization
```bash
# Install imagemin
npm install imagemin imagemin-mozjpeg imagemin-pngquant

# Optimize images
imagemin src/images/* --out-dir=build/images
```

#### Code Splitting
```javascript
// Dynamic imports
const Component = lazy(() => import('./Component'));

// Route-based splitting
const routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./Dashboard'))
  }
];
```

### Performance Optimization

#### Build Optimization
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
};
```

#### Resource Hints
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://api.example.com">

<!-- Preload critical resources -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>

<!-- Prefetch next page -->
<link rel="prefetch" href="/next-page.html">
```

## CI/CD Integration

### GitHub Actions
```yaml
name: Deploy Static Site

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          SOURCE_DIR: 'build'
```

## Best Practices

1. **Optimize assets** before deployment
2. **Use CDN** for global distribution
3. **Enable compression** (Gzip/Brotli)
4. **Set cache headers** appropriately
5. **Implement security headers**
6. **Use HTTPS** everywhere
7. **Handle SPA routing** correctly
8. **Monitor performance** regularly
9. **Automate deployments** with CI/CD
10. **Version your builds**

## Troubleshooting

### Common Issues

#### 404 on Page Refresh
- Configure server for SPA routing
- Add rewrite rules
- Set up fallback to index.html

#### Assets Not Loading
- Check relative vs absolute paths
- Verify publicPath configuration
- Check CORS headers

#### Cache Issues
- Implement cache busting
- Use content hashing
- Set appropriate cache headers

## Related Documentation

- [Build Options](./built_options.md)
- [WAR Deployment](./war_deployment.md)
- [Container Deployment](../Deployment-CI_CD/container_deployment.md)
