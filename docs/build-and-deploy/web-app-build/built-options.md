---
last_update: { author: "Author Name" }
---

# Build Options

Explore the various build options available for web applications.

## Overview
This guide covers different build configurations and options to optimize your web application for various deployment scenarios.

## Build Types

### Development Build
- Fast compilation
- Source maps enabled
- Hot module replacement
- Verbose error messages
- Debug mode enabled
- Unminified code

**Use Case**: Local development and debugging

### Production Build
- Optimized and minified
- Tree shaking enabled
- Code splitting
- Asset optimization
- Compressed bundles
- Source maps optional

**Use Case**: Production deployment

### Staging Build
- Similar to production
- Additional logging
- Performance monitoring
- Feature flags enabled
- Testing instrumentation

**Use Case**: Pre-production testing

## Build Configurations

### Output Formats

#### WAR (Web Application Archive)
- Java EE standard format
- Deployable to servlet containers
- Contains all application resources
- Server-side rendering

#### Static Content
- HTML, CSS, JavaScript files
- Optimized for CDN delivery
- Client-side rendering
- Serverless compatible

#### Docker Image
- Containerized application
- Includes runtime environment
- Portable across platforms
- Scalable deployment

### Bundle Options

#### Single Bundle
- All code in one file
- Simple deployment
- Larger initial load
- Better for small apps

**Configuration**:
```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  }
};
```

#### Code Splitting
- Separate vendor bundles
- Route-based splitting
- Dynamic imports
- Lazy loading

**Configuration**:
```javascript
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  }
};
```

## Optimization Options

### Minification
- JavaScript minification
- CSS minification
- HTML minification
- Remove whitespace and comments

**Tools**:
- Terser (JavaScript)
- CSSNano (CSS)
- HTMLMinifier

### Tree Shaking
- Remove unused code
- ES6 module support
- Dead code elimination
- Reduced bundle size

### Asset Optimization

#### Image Optimization
- Compression
- Format conversion (WebP)
- Responsive images
- Lazy loading

#### Font Optimization
- Subset fonts
- Preload critical fonts
- Font display strategies
- WOFF2 format

### Caching Strategy
- Content hashing
- Long-term caching
- Cache busting
- Service worker caching

## Environment-Specific Builds

### Environment Variables
```javascript
// .env.development
NODE_ENV=development
API_URL=http://localhost:3000
DEBUG=true

// .env.production
NODE_ENV=production
API_URL=https://api.production.com
DEBUG=false
```

### Conditional Compilation
```javascript
if (process.env.NODE_ENV === 'production') {
  // Production-only code
  enableAnalytics();
} else {
  // Development-only code
  enableDevTools();
}
```

## Build Tools

### Webpack
```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  }
};
```

### Vite
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});
```

### Rollup
```javascript
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    terser(),
    babel(),
    resolve()
  ]
};
```

## Build Profiles

### Development Profile
```json
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build:dev": "webpack --mode development"
  }
}
```

### Production Profile
```json
{
  "scripts": {
    "build": "webpack --mode production",
    "build:analyze": "webpack --mode production --analyze"
  }
}
```

## Advanced Options

### Progressive Web App (PWA)
- Service worker generation
- App manifest
- Offline support
- Install prompts

### Server-Side Rendering (SSR)
- Pre-render HTML
- Improved SEO
- Faster initial load
- Hydration support

### Static Site Generation (SSG)
- Generate HTML at build time
- No server required
- Optimal performance
- CDN-friendly

## Build Performance

### Optimization Techniques
- Parallel builds
- Incremental compilation
- Build caching
- Worker threads

### Build Cache
```javascript
module.exports = {
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
};
```

### Multi-threading
```javascript
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  }
};
```

## Quality Checks

### Linting
- ESLint for JavaScript
- StyleLint for CSS
- Prettier for formatting
- Pre-commit hooks

### Type Checking
- TypeScript compilation
- Flow type checking
- PropTypes validation

### Testing
- Unit tests
- Integration tests
- E2E tests
- Coverage reports

## Build Artifacts

### Generated Files
- JavaScript bundles
- CSS stylesheets
- HTML files
- Source maps
- Asset files

### Build Manifest
- File listing
- Chunk dependencies
- Asset mapping
- Version information

## Build Commands

### Common Commands
```bash
# Development build
npm run build:dev

# Production build
npm run build

# Watch mode
npm run watch

# Analyze bundle
npm run analyze

# Clean build
npm run clean && npm run build
```

## Configuration Management

### Build Config Files
- `webpack.config.js`
- `vite.config.js`
- `rollup.config.js`
- `.env` files
- `package.json`

### Config Merging
```javascript
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const prod = require('./webpack.prod.js');

module.exports = merge(common, prod);
```

## Troubleshooting

### Common Issues
- Build failures
- Memory errors
- Slow builds
- Large bundle sizes
- Missing dependencies

### Debug Options
```bash
# Verbose output
npm run build -- --verbose

# Debug webpack
node --inspect-brk ./node_modules/.bin/webpack

# Profile build
webpack --profile --json > stats.json
```

## Best Practices

1. **Use appropriate build type** for each environment
2. **Enable source maps** for debugging
3. **Implement code splitting** for better performance
4. **Optimize assets** to reduce bundle size
5. **Cache builds** for faster compilation
6. **Run tests** before production builds
7. **Version your builds** for traceability
8. **Monitor bundle size** over time
9. **Use CI/CD** for automated builds
10. **Document build process** for team

## Related Documentation

- [WAR Deployment](./war-deployment.md)
- [Static Content Deployment](./static-deployment.md)
- [CI/CD Pipeline](../deployment-cicd/one-click-deployment.md)
