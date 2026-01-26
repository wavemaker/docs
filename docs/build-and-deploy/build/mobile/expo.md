---
last_update: { author: 'Vivek Raj' }
---

# Expo EAS Build

Expo EAS (Expo Application Services) Build is a cloud-based build service for React Native applications. Alternative to [AppChef](./appchef) and [CLI builds](./cli) with Expo ecosystem integration.

**Expo Documentation:** [docs.expo.dev/build](https://docs.expo.dev/build/introduction/)

---

## Setup

**1. Install Expo CLI and EAS CLI:**

```bash
npm install -g expo-cli eas-cli
```

**2. Create Expo account:**

```bash
eas login
```

Or sign up at [expo.dev/signup](https://expo.dev/signup)

**3. Initialize EAS configuration:**

```bash
cd /path/to/react-native-export
eas build:configure
```

Creates `eas.json` in project root.

**4. Configure app.json:**

```json
{
  "expo": {
    "name": "My App",
    "slug": "my-app",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.company.myapp",
      "buildNumber": "1"
    },
    "android": {
      "package": "com.company.myapp",
      "versionCode": 1
    }
  }
}
```

---

## Pricing

**Free Plan:**
- 30 builds per month
- Standard build queue
- Both Android and iOS

**Production Plan ($29/month):**
- Unlimited builds
- Priority queue
- Concurrent builds

**Check current pricing:** [expo.dev/pricing](https://expo.dev/pricing)

---

## Android Builds

**Build command:**

```bash
eas build --platform android --profile production
```

### Keystore Setup

**Generate new keystore (automatic):**

Run build command, select "Generate new Android Keystore" when prompted. Expo generates and stores securely.

**Upload existing keystore:**

```bash
eas credentials
```

Select Android → Production → Upload Keystore

Provide:
- Keystore file
- Keystore password
- Key alias
- Key password

### Build Output

**APK (default for preview):**

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

**AAB (for Play Store):**

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

**Download:** From [expo.dev](https://expo.dev/) → Projects → Builds

---

## iOS Builds

**Build command:**

```bash
eas build --platform ios --profile production
```

### Certificate Setup

**Option 1: Automated (recommended)**

Run build command, select "Generate new Apple credentials". Expo automatically:
- Generates distribution certificate
- Creates provisioning profile
- Stores securely

**Option 2: Manual upload**

```bash
eas credentials
```

Select iOS → Production → Upload Certificate

Provide:
- P12 certificate file
- P12 password
- Provisioning profile file

### Build Output

**IPA file** for App Store, TestFlight, or device testing.

**Download:** From Expo dashboard after build completion.

---

## Build Profiles

Configure in `eas.json`:

**Development:**

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    }
  }
}
```

**Preview (internal testing):**

```json
{
  "build": {
    "preview": {
      "distribution": "internal"
    }
  }
}
```

**Production (app stores):**

```json
{
  "build": {
    "production": {}
  }
}
```

---

## CI/CD Integration

Expo works with all major CI/CD platforms.

**GitHub Actions example:**

```yaml
- name: Setup Expo
  uses: expo/expo-github-action@v8
  with:
    eas-version: latest
    token: ${{ secrets.EXPO_TOKEN }}

- name: Build Android
  run: eas build --platform android --profile production --non-interactive
```

**Generate Expo token:**

```bash
eas build:configure
```

Store token in CI secrets.

---

## Comparison with Other Methods

| Feature | Expo EAS | AppChef | CLI |
|---------|----------|---------|-----|
| **Setup** | Expo CLI | Web browser | Node + SDKs |
| **Cost** | 30 free/month | Free | Free |
| **Build location** | Expo cloud | WaveMaker cloud | Local |
| **iOS builds** | Any OS | Any OS | macOS only |
| **Certificate management** | Manual or automated | Manual | Manual |
| **Build limits** | 30/month (free) | 25 apps, 10 builds/app | Unlimited |
| **Integration** | Expo ecosystem | WaveMaker Studio | CI/CD |

---

## When to Use Expo

**Use Expo when:**
- Using Expo SDK and libraries
- Want automated certificate management
- Need custom native code with expo-dev-client
- CI/CD pipeline with Expo CLI

**Use AppChef or CLI instead when:**
- WaveMaker-centric workflow
- No Expo ecosystem integration
- Want GUI-based builds (AppChef)
- Need unlimited builds without cost (CLI)

---

## Troubleshooting

### Build Failed

**View logs:**

```bash
eas build:list
eas build:view [BUILD_ID]
```

Download logs from Expo dashboard.

### Keystore/Certificate Issues

**Android:**

Verify keystore credentials correct.

**iOS:**

- Check P12 password
- Verify provisioning profile includes certificate
- Ensure bundle identifier matches

### Build Limit Reached

**Free plan:** 30 builds/month limit

**Solutions:**
- Wait for monthly reset
- Upgrade to Production plan ($29/month)
- Use CLI builds locally (unlimited)

---

## Summary

- **Setup:** Expo CLI, EAS CLI, Expo account
- **Build command:** `eas build --platform android/ios --profile production`
- **Certificates:** Automated generation or manual upload
- **Pricing:** 30 builds/month (free), unlimited ($29/month)
- **Download:** From expo.dev dashboard
- **Best for:** Expo ecosystem integration, automated certificate management

---

## Related Documentation

**Build Documentation:**
- [Overview](./overview) – Build methods comparison
- [AppChef](./appchef) – WaveMaker cloud builds alternative
- [CLI](./cli) – Local builds alternative
- [Configuration](./configuration) – App settings

**Publishing Documentation:**
- [Publishing Overview](../../publish/mobile/overview) – Distribution channels
- [Android Publishing](../../publish/mobile/android-publishing) – Upload AAB to Play Store
- [iOS Publishing](../../publish/mobile/ios-publishing) – Upload IPA to App Store
- [Certificates and Signing](../../publish/mobile/certificates-and-signing) – Certificate setup

**External Resources:**
- [Expo Documentation](https://docs.expo.dev/) – Official Expo ecosystem docs
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/) – Cloud build service
- [Expo Pricing](https://expo.dev/pricing) – Build plans and pricing
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) – Command-line interface
