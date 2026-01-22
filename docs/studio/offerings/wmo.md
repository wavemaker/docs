---
last_update: { author: "Author Name" }
---

# WaveMaker Online (WMO)

Cloud-based version of WaveMaker platform for rapid application development and deployment.

## Overview
WaveMaker Online (WMO) is the cloud-hosted, SaaS version of the WaveMaker platform. It provides instant access to the complete development environment without installation, making it perfect for rapid prototyping, small teams, and getting started quickly.

## Key Features

### Cloud-Based Development
- **No Installation Required** - Browser-based IDE
- **Instant Access** - Start developing immediately
- **Auto-Updates** - Always latest version
- **Cloud Storage** - Projects stored in cloud
- **Anywhere Access** - Work from anywhere

### Development Capabilities
- **Visual Development** - Drag-and-drop design
- **API Integration** - Connect to any API
- **Database Designer** - Visual database modeling
- **Pre-built Templates** - Quick start templates
- **Responsive Design** - Mobile-ready apps

### Deployment Options
- **One-Click Deploy** - Deploy to WaveMaker Cloud
- **Export Projects** - Download source code
- **External Deployment** - Deploy to your infrastructure
- **Mobile App Build** - Build iOS/Android apps

## Getting Started

### Sign Up

#### Create Account
1. Visit https://www.wavemaker.com
2. Click "Sign Up" or "Try Free"
3. Enter email address
4. Create password
5. Verify email
6. Start building

#### Account Types
- **Free Trial** - 30 days full access
- **Starter** - Individual developers
- **Team** - Small teams (5-10 users)
- **Professional** - Growing teams (unlimited users)

### First Project

#### Create New Project
1. Click "New Project"
2. Choose template:
   - **Blank** - Start from scratch
   - **Responsive** - Mobile-first template
   - **Dashboard** - Admin dashboard
   - **E-commerce** - Shopping cart
   - **CRM** - Customer management
3. Name your project
4. Click "Create"

## Studio Interface

### Cloud Studio Features

#### Design Canvas
- Drag-and-drop widgets
- Live preview
- Responsive breakpoints
- Component library
- Property inspector

#### Code Editor
- Syntax highlighting
- Auto-completion
- Code snippets
- Error detection
- Multi-file editing

#### API Designer
- Visual API builder
- Test console
- Mock data
- Response mapping
- Authentication setup

#### Database Designer
- Visual schema design
- Entity relationships
- Query builder
- Data import/export
- Database explorer

## Cloud Services

### WaveMaker Cloud Features

#### Project Storage
- Automatic saves
- Version history
- Cloud backup
- Team sync
- Project sharing

#### Build Service
- Cloud-based builds
- No local setup needed
- Fast build times
- Mobile app builds
- WAR/Docker export

#### Deployment Service
- One-click deployment
- Staging environment
- Production deployment
- Custom domain support
- SSL certificates

## Collaboration

### Team Features

#### Team Workspace
- Shared projects
- Team members
- Role assignment
- Access control
- Activity feed

#### Real-Time Collaboration
- Live editing indicators
- Change notifications
- Comments and annotations
- Chat integration
- Code review

### Version Control
- Git integration
- Branch management
- Commit history
- Pull requests
- Merge conflict resolution

## Cloud Deployment

### Deploy to WaveMaker Cloud

#### Deployment Steps
1. Click "Deploy" button
2. Choose environment:
   - **Demo** - Testing environment
   - **Stage** - Staging environment
   - **Live** - Production environment
3. Configure settings:
   - Application name
   - Domain name
   - SSL certificate
4. Click "Deploy"
5. Wait for deployment
6. Access deployed app

#### Deployment URL
```
https://{app-name}.wavemakeronline.com
```

### Custom Domain

#### Configure Custom Domain
1. Go to Project Settings
2. Select "Custom Domain"
3. Enter domain name
4. Configure DNS:
   ```
   CNAME record:
   www.yourdomain.com → your-app.wavemakeronline.com
   ```
5. Verify domain
6. Enable SSL

## Mobile App Publishing

### Build Mobile Apps

#### iOS App
1. Click "Build Mobile App"
2. Select "iOS"
3. Configure:
   - App name
   - Bundle ID
   - App icons
   - Splash screens
4. Upload certificates
5. Build app
6. Download IPA file

#### Android App
1. Click "Build Mobile App"
2. Select "Android"
3. Configure:
   - App name
   - Package name
   - App icons
   - Splash screens
4. Upload keystore
5. Build app
6. Download APK/AAB

### Publish to Stores
- Submit to App Store
- Publish to Play Store
- Enterprise distribution
- Beta testing (TestFlight, Google Play)

## Project Export

### Export Options

#### Export Source Code
```bash
# Download as ZIP
# Contains:
# - Source code
# - Configuration files
# - Resources
# - Database scripts
```

#### Export as WAR
```bash
# Java web application
# Deploy to:
# - Tomcat
# - JBoss
# - WebLogic
# - Any Java servlet container
```

#### Export as Docker
```bash
# Docker container
docker pull {registry}/your-app:latest
docker run -p 8080:8080 {registry}/your-app:latest
```

## Integration Features

### Third-Party Integrations

#### API Integration
- REST APIs
- SOAP Services
- GraphQL
- WebSockets
- Custom APIs

#### Database Integration
- MySQL
- PostgreSQL
- MongoDB
- Oracle
- SQL Server

#### Authentication
- OAuth 2.0
- SAML
- LDAP
- Social Login (Google, Facebook)
- Custom auth

#### Cloud Services
- AWS services
- Google Cloud
- Azure services
- Firebase
- Twilio

## Pricing

### Pricing Plans

#### Free Trial
- 30 days full access
- All features included
- 1 project
- 1 deployed app
- Community support

#### Starter Plan
- $29/month
- 5 projects
- 3 deployed apps
- 5 GB storage
- Email support

#### Team Plan
- $99/month per user
- Unlimited projects
- 10 deployed apps
- 50 GB storage
- Priority support

#### Professional Plan
- $199/month per user
- Unlimited projects
- Unlimited deployments
- 200 GB storage
- 24/7 support
- Custom domain
- Advanced features

## Limitations

### Cloud Limitations

#### Free/Starter Tier
- **Projects**: Limited number
- **Storage**: Limited space
- **Deployments**: Limited apps
- **Resources**: Shared resources
- **Support**: Basic support

#### Data Limits
- **Database Size**: Plan-dependent
- **API Calls**: Rate limited
- **File Upload**: Size limits
- **Concurrent Users**: Limited

## Migration

### Export for Self-Hosting

#### Steps to Export
1. Export project source
2. Set up infrastructure
3. Configure environment
4. Deploy application
5. Configure database
6. Set up monitoring

### Migrate to WME

#### Migration Process
1. Export WMO project
2. Install WME
3. Import project
4. Configure team
5. Set up deployment
6. Migrate data

## Best Practices

### Cloud Development
1. **Save frequently** (auto-save enabled)
2. **Use version control** for tracking
3. **Test in staging** before production
4. **Monitor app performance**
5. **Regular backups** (automatic)

### Collaboration
1. **Clear naming conventions**
2. **Regular communication**
3. **Code reviews**
4. **Document changes**
5. **Use branches** for features

### Deployment
1. **Test thoroughly** before deploy
2. **Use staging** environment
3. **Monitor after** deployment
4. **Have rollback** plan
5. **Check logs** regularly

## Troubleshooting

### Common Issues

**Cannot Login**
- Check credentials
- Reset password
- Clear browser cache
- Try different browser

**Project Not Loading**
- Check internet connection
- Refresh page
- Check browser console
- Contact support

**Deployment Failed**
- Check build logs
- Verify configuration
- Check resource limits
- Retry deployment

**Performance Issues**
- Optimize queries
- Reduce widget count
- Use pagination
- Minimize API calls

## Support

### Getting Help

#### Documentation
- Online docs
- Video tutorials
- Sample projects
- Community forums

#### Support Channels
- Email support
- Live chat (paid plans)
- Phone support (enterprise)
- Community forums

#### Resources
- Blog posts
- Webinars
- Training videos
- Case studies

## Related Documentation

- [WME Variant](./wme/welcome.md)

