# Public App Stores

Complete guide to publishing and managing applications on public app stores.

## Overview
This guide covers the process of submitting, managing, and optimizing apps on Apple App Store and Google Play Store.

## Apple App Store

### Prerequisites

#### Developer Account
- Apple Developer Program membership ($99/year)
- Valid payment information
- Two-factor authentication enabled
- Tax and banking information

#### Technical Requirements
- macOS with Xcode
- Valid distribution certificate
- App Store provisioning profile
- Built and archived app (.ipa file)

### App Store Connect Setup

#### Create App Record
1. Log in to App Store Connect
2. Click "My Apps" → "+" → "New App"
3. Select platform (iOS, tvOS, etc.)
4. Enter app name (must be unique)
5. Select primary language
6. Enter bundle ID
7. Enter SKU (unique identifier)

#### App Information
```
App Name: MyAwesomeApp (30 characters max)
Subtitle: Short descriptive subtitle (30 characters max)
Privacy Policy URL: https://myapp.com/privacy
Categories: Primary and Secondary
Age Rating: Based on content questionnaire
```

### App Store Listing

#### Metadata Requirements

**App Description**
- Up to 4,000 characters
- Clear feature description
- Benefits for users
- No promotional content in description
- Keywords for discoverability

**Keywords**
- Comma-separated
- 100 characters max
- No spaces after commas
- No duplicate keywords
- No app name in keywords

**What's New**
- Release notes (4,000 characters)
- Describe new features
- Bug fixes
- Improvements

#### Visual Assets

**App Icon**
- 1024 x 1024 pixels
- PNG or JPEG format
- No alpha channel
- No rounded corners (iOS applies them)

**Screenshots**
Required for each device size:
- iPhone 6.7" (1290 x 2796)
- iPhone 6.5" (1284 x 2778)
- iPhone 5.5" (1242 x 2208)
- iPad Pro 12.9" (2048 x 2732)
- iPad Pro 11" (1668 x 2388)

**App Preview Videos** (Optional)
- 15-30 seconds
- MP4 or MOV format
- Device-specific resolutions
- Show actual app functionality

### Submission Process

#### Prepare for Submission
```bash
# Archive app in Xcode
Product → Archive

# Validate archive
Window → Organizer → Archives
Select archive → Validate App

# Upload to App Store Connect
Distribute App → App Store Connect
```

#### Build Upload
1. Archive completes successfully
2. Validation passes
3. Upload to App Store Connect
4. Wait for processing (15-60 minutes)
5. Build appears in App Store Connect

#### Submit for Review
1. Select build for release
2. Complete all required information:
   - Version information
   - Screenshots
   - Description
   - Keywords
   - Support URL
   - Marketing URL (optional)
   - Privacy policy URL
3. Set pricing and availability
4. Age rating questionnaire
5. App review information
6. Submit for review

### App Review Process

#### Review Timeline
- Standard review: 1-3 days
- Expedited review: 1-2 days (with request)
- Rejection: Address issues and resubmit

#### Common Rejection Reasons
1. **Performance Issues**
   - App crashes
   - Broken features
   - Incomplete functionality

2. **Design Issues**
   - Poor user interface
   - Confusing navigation
   - Inconsistent with guidelines

3. **Business Issues**
   - Inappropriate content
   - Misleading metadata
   - Incorrect pricing

4. **Legal Issues**
   - Privacy policy missing
   - Permissions not justified
   - Intellectual property violations

#### App Review Information
```
Contact Information:
- First Name
- Last Name
- Phone Number
- Email Address

Review Notes:
- Login credentials (if required)
- Special instructions
- Features to test

Attachments:
- Demo videos
- Documentation
- Additional information
```

### App Store Guidelines Compliance

#### Must Follow
- Human Interface Guidelines
- App Store Review Guidelines
- Privacy policy requirements
- Data handling disclosure
- Age-appropriate content
- Proper use of APIs
- No private/undocumented APIs

#### Recommended
- Accessibility features
- Localization
- Support for latest iOS
- Universal app (iPhone + iPad)
- Dark mode support

## Google Play Store

### Prerequisites

#### Developer Account
- Google Play Developer account ($25 one-time)
- Valid payment profile
- Two-step verification
- Tax and merchant information

#### Technical Requirements
- Android Studio
- Signed APK or AAB
- Release keystore
- Built application bundle

### Play Console Setup

#### Create Application
1. Log in to Play Console
2. Click "Create app"
3. Enter app details:
   - App name
   - Default language
   - App or game
   - Free or paid
4. Declare compliance:
   - Developer Program Policies
   - US export laws
5. Create app

#### Store Listing

**App Details**
```
App name: Up to 50 characters
Short description: 80 characters
Full description: Up to 4,000 characters
```

**Categorization**
- App category
- Tags (up to 5)
- Target age group

**Contact Details**
- Email
- Phone (optional)
- Website

**Graphics**
Required assets:
- App icon (512 x 512 PNG)
- Feature graphic (1024 x 500 PNG)
- Screenshots (2-8 per device type)
  - Phone: 16:9 or 9:16 ratio
  - Tablet: 16:9 or 9:16 ratio
  - Wear OS, TV, Chromebook (if applicable)

Optional:
- Promotional video (YouTube URL)
- Promo graphic (180 x 120 PNG)

### Content Rating

#### IARC Questionnaire
1. Select content rating
2. Enter email address
3. Complete questionnaire:
   - Violence
   - Sexual content
   - Language
   - Controlled substances
   - Gambling
   - User interaction
4. Submit questionnaire
5. Receive ratings for all regions

### App Releases

#### Release Types

**Internal Testing**
- Up to 100 testers
- No review required
- Instant availability
- Quick feedback loop

**Closed Testing**
- Targeted user groups
- Email list management
- Controlled distribution
- Detailed feedback

**Open Testing**
- Public beta
- Discoverable on Play Store
- Requires review
- Large-scale testing

**Production**
- Full release
- All users
- Requires review
- Staged rollout available

#### Creating Release

1. Navigate to Release → Production
2. Create new release
3. Upload APK or AAB
4. Enter release name (internal)
5. Add release notes
   - Support multiple languages
   - Describe what's new
   - Up to 500 characters per language
6. Review and roll out

### Signing Configuration

#### App Signing
```
Play App Signing (Recommended):
- Google manages signing key
- You upload with upload key
- Better security
- Key reset option

Manual Signing:
- You manage signing key
- More control
- Higher risk if key lost
```

#### Upload Key Setup
```bash
# Generate upload key
keytool -genkey -v -keystore upload-key.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias upload

# Sign with upload key
jarsigner -verbose -sigalg SHA256withRSA \
  -digestalg SHA-256 -keystore upload-key.jks \
  app-release.apk upload
```

### Review Process

#### Review Timeline
- Initial review: Few hours to several days
- Updates: Usually faster than initial
- Rejected apps: Address issues and resubmit

#### Pre-launch Report
- Automatically tests on real devices
- Checks for crashes
- Identifies issues
- Security vulnerabilities
- Accessibility issues

### Publishing Options

#### Release Management

**Staged Rollout**
```
Release percentage:
- Start: 5% - 10%
- Monitor for issues
- Increase: 20% → 50% → 100%
- Halt if problems detected
```

**Release Tracks**
- Internal: Pre-release testing
- Closed: Limited beta testing
- Open: Public beta
- Production: Full release

**Update Priority**
```
Priority levels:
0 = Default
1-5 = Higher priority (faster updates)
```

### Store Listing Optimization

#### App Store Optimization (ASO)

**Title Optimization**
- Include main keyword
- Clear and descriptive
- Under 50 characters

**Description Best Practices**
- Start with key benefits
- Use bullet points
- Include keywords naturally
- Highlight features
- Call to action

**Keyword Strategy**
- Research competitor keywords
- Use relevant terms
- Monitor performance
- Update regularly

**Visual Optimization**
- High-quality screenshots
- Show key features
- Use captions
- Feature graphic impact
- Video preview engagement

### Analytics & Metrics

#### Key Metrics
- Installs
- Uninstalls
- Rating and reviews
- Crash rate
- ANR (Application Not Responding) rate
- Store listing visits
- Conversion rate

#### Play Console Reports
- Statistics
- User acquisition
- Financial reports
- Reviews analysis
- Pre-launch reports
- Android vitals

## Multi-Store Distribution

### Alternative Stores

**Amazon Appstore**
- Additional reach
- Fire devices
- Similar to Play Store process

**Samsung Galaxy Store**
- Samsung devices
- Large user base
- Separate submission

**Huawei AppGallery**
- Huawei devices
- Growing market
- Different guidelines

### Enterprise Distribution

**Apple Business Manager**
- Internal apps
- Custom apps
- Volume purchases

**Google Play for Work**
- Managed Google Play
- Private apps
- EMM integration

## Best Practices

### Before Submission
1. **Test thoroughly** on multiple devices
2. **Review guidelines** completely
3. **Prepare all assets** in advance
4. **Write clear descriptions**
5. **Optimize keywords**
6. **Set up analytics**
7. **Create support resources**

### During Review
1. **Monitor review status**
2. **Respond to rejections** quickly
3. **Provide additional info** if requested
4. **Be patient** with process

### After Approval
1. **Monitor ratings** and reviews
2. **Respond to reviews** professionally
3. **Track metrics** regularly
4. **Plan updates** strategically
5. **Fix bugs** quickly
6. **Engage with users**

### Ongoing Maintenance
1. **Update regularly**
2. **Support latest OS versions**
3. **Fix reported issues**
4. **Improve based on feedback**
5. **Monitor competition**
6. **Optimize store listing**

## Troubleshooting

### Common Issues

**App Rejection**
- Read rejection reason carefully
- Address all issues
- Provide clear response
- Resubmit quickly

**Low Ratings**
- Identify common complaints
- Fix bugs promptly
- Improve user experience
- Encourage positive reviews

**Low Visibility**
- Optimize ASO
- Improve visuals
- Update regularly
- Promote externally

## Related Documentation

- [Mobile Overview](./mobile_overview.md)
- [AppChef & CLI](./appchef_cli.md)
- [CI/CD Deployment](../Deployment-CI_CD/one_click_deployment.md)
