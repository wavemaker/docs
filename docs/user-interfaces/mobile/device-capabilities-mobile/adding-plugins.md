---
last_update: { author: "Author Name" }
---

# Adding Plugins

Extending mobile application functionality with native device plugins and third-party integrations.

## Overview

Plugins provide access to native device features and third-party services in mobile applications. They bridge the gap between web technologies and native mobile capabilities, enabling features like camera access, geolocation, push notifications, and more.

## Plugin Architecture

### How Plugins Work

Plugins act as a bridge between JavaScript code and native device APIs:

```
JavaScript Code → Plugin Bridge → Native iOS/Android API → Device Hardware
```

### Plugin Types

1. **Core Plugins**: Built-in plugins for common features
2. **Third-Party Plugins**: Community-developed plugins
3. **Custom Plugins**: Plugins you create for specific needs

## Installing Plugins

### Cordova Plugins

```bash
# Install camera plugin
cordova plugin add cordova-plugin-camera

# Install with specific version
cordova plugin add cordova-plugin-camera@6.0.0

# Install from npm
npm install cordova-plugin-camera

# Install from Git repository
cordova plugin add https://github.com/apache/cordova-plugin-camera.git
```

### Capacitor Plugins

```bash
# Install camera plugin
npm install @capacitor/camera
npx cap sync

# Install geolocation plugin
npm install @capacitor/geolocation
npx cap sync
```

### Listing Installed Plugins

```bash
# Cordova
cordova plugin list

# Capacitor
npx cap ls
```

## Common Device Plugins

### Camera Plugin

Access device camera and photo library.

**Installation:**
```bash
npm install @capacitor/camera
npx cap sync
```

**Usage:**
```javascript
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const CameraComponent = () => {
  const [photo, setPhoto] = useState(null);

  const takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      setPhoto(image.webPath);
    } catch (error) {
      console.error('Camera error:', error);
    }
  };

  const selectFromGallery = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });

      setPhoto(image.dataUrl);
    } catch (error) {
      console.error('Gallery error:', error);
    }
  };

  return (
    <div>
      <button onClick={takePicture}>Take Photo</button>
      <button onClick={selectFromGallery}>Choose from Gallery</button>
      {photo && <img src={photo} alt="Captured" />}
    </div>
  );
};
```

### Geolocation Plugin

Get device location coordinates.

**Installation:**
```bash
npm install @capacitor/geolocation
npx cap sync
```

**Usage:**
```javascript
import { Geolocation } from '@capacitor/geolocation';

const LocationComponent = () => {
  const [position, setPosition] = useState(null);
  const [watching, setWatching] = useState(false);
  const [watchId, setWatchId] = useState(null);

  const getCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });

      setPosition({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        accuracy: coordinates.coords.accuracy,
      });
    } catch (error) {
      console.error('Location error:', error);
    }
  };

  const startWatching = async () => {
    const id = await Geolocation.watchPosition(
      { enableHighAccuracy: true },
      (position, err) => {
        if (err) {
          console.error('Watch error:', err);
          return;
        }
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }
    );

    setWatchId(id);
    setWatching(true);
  };

  const stopWatching = () => {
    if (watchId) {
      Geolocation.clearWatch({ id: watchId });
      setWatching(false);
    }
  };

  return (
    <div>
      <button onClick={getCurrentPosition}>Get Location</button>
      <button onClick={watching ? stopWatching : startWatching}>
        {watching ? 'Stop Watching' : 'Watch Location'}
      </button>
      {position && (
        <div>
          <p>Latitude: {position.latitude}</p>
          <p>Longitude: {position.longitude}</p>
          <p>Accuracy: {position.accuracy}m</p>
        </div>
      )}
    </div>
  );
};
```

### Push Notifications Plugin

Send and receive push notifications.

**Installation:**
```bash
npm install @capacitor/push-notifications
npx cap sync
```

**Usage:**
```javascript
import { PushNotifications } from '@capacitor/push-notifications';

const NotificationSetup = () => {
  useEffect(() => {
    // Request permission
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      }
    });

    // Register with FCM/APNS
    PushNotifications.addListener('registration', token => {
      console.log('Push registration success, token: ' + token.value);
      // Send token to your server
      sendTokenToServer(token.value);
    });

    // Handle errors
    PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    // Handle received notifications
    PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push received: ' + JSON.stringify(notification));
      showNotification(notification);
    });

    // Handle notification tap
    PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push action performed: ' + JSON.stringify(notification));
      handleNotificationClick(notification.notification.data);
    });

    return () => {
      PushNotifications.removeAllListeners();
    };
  }, []);

  return <div>Push notifications enabled</div>;
};
```

### Device Information Plugin

Get device hardware and software information.

**Installation:**
```bash
npm install @capacitor/device
npx cap sync
```

**Usage:**
```javascript
import { Device } from '@capacitor/device';

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const getDeviceInfo = async () => {
      const info = await Device.getInfo();
      const batteryInfo = await Device.getBatteryInfo();
      const languageCode = await Device.getLanguageCode();

      setDeviceInfo({
        model: info.model,
        platform: info.platform,
        operatingSystem: info.operatingSystem,
        osVersion: info.osVersion,
        manufacturer: info.manufacturer,
        isVirtual: info.isVirtual,
        batteryLevel: batteryInfo.batteryLevel,
        isCharging: batteryInfo.isCharging,
        language: languageCode.value,
      });
    };

    getDeviceInfo();
  }, []);

  if (!deviceInfo) return <div>Loading...</div>;

  return (
    <div>
      <h3>Device Information</h3>
      <p>Model: {deviceInfo.model}</p>
      <p>Platform: {deviceInfo.platform}</p>
      <p>OS: {deviceInfo.operatingSystem} {deviceInfo.osVersion}</p>
      <p>Manufacturer: {deviceInfo.manufacturer}</p>
      <p>Battery: {deviceInfo.batteryLevel * 100}%</p>
      <p>Charging: {deviceInfo.isCharging ? 'Yes' : 'No'}</p>
    </div>
  );
};
```

### File System Plugin

Read and write files on the device.

**Installation:**
```bash
npm install @capacitor/filesystem
npx cap sync
```

**Usage:**
```javascript
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const FileManager = () => {
  const writeFile = async () => {
    try {
      await Filesystem.writeFile({
        path: 'myfile.txt',
        data: 'Hello, World!',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      console.log('File written successfully');
    } catch (error) {
      console.error('Write error:', error);
    }
  };

  const readFile = async () => {
    try {
      const contents = await Filesystem.readFile({
        path: 'myfile.txt',
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      console.log('File contents:', contents.data);
      return contents.data;
    } catch (error) {
      console.error('Read error:', error);
    }
  };

  const deleteFile = async () => {
    try {
      await Filesystem.deleteFile({
        path: 'myfile.txt',
        directory: Directory.Documents,
      });
      console.log('File deleted');
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const listFiles = async () => {
    try {
      const result = await Filesystem.readdir({
        path: '',
        directory: Directory.Documents,
      });
      console.log('Files:', result.files);
      return result.files;
    } catch (error) {
      console.error('List error:', error);
    }
  };

  return (
    <div>
      <button onClick={writeFile}>Write File</button>
      <button onClick={readFile}>Read File</button>
      <button onClick={deleteFile}>Delete File</button>
      <button onClick={listFiles}>List Files</button>
    </div>
  );
};
```

### Network Plugin

Monitor network connectivity status.

**Installation:**
```bash
npm install @capacitor/network
npx cap sync
```

**Usage:**
```javascript
import { Network } from '@capacitor/network';

const NetworkStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Get current status
    Network.getStatus().then(status => {
      setStatus(status);
    });

    // Listen for network changes
    const listener = Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      setStatus(status);
    });

    return () => {
      listener.remove();
    };
  }, []);

  if (!status) return <div>Checking network...</div>;

  return (
    <div>
      <h3>Network Status</h3>
      <p>Connected: {status.connected ? 'Yes' : 'No'}</p>
      <p>Connection Type: {status.connectionType}</p>
      {!status.connected && (
        <div className="offline-banner">
          You are currently offline
        </div>
      )}
    </div>
  );
};
```

### Haptics Plugin

Provide haptic feedback.

**Installation:**
```bash
npm install @capacitor/haptics
npx cap sync
```

**Usage:**
```javascript
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

const HapticButtons = () => {
  const lightImpact = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
  };

  const mediumImpact = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  const heavyImpact = async () => {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  };

  const successNotification = async () => {
    await Haptics.notification({ type: NotificationType.Success });
  };

  const errorNotification = async () => {
    await Haptics.notification({ type: NotificationType.Error });
  };

  const vibrate = async () => {
    await Haptics.vibrate({ duration: 300 });
  };

  return (
    <div>
      <button onClick={lightImpact}>Light Impact</button>
      <button onClick={mediumImpact}>Medium Impact</button>
      <button onClick={heavyImpact}>Heavy Impact</button>
      <button onClick={successNotification}>Success</button>
      <button onClick={errorNotification}>Error</button>
      <button onClick={vibrate}>Vibrate</button>
    </div>
  );
};
```

## Third-Party Plugins

### Social Sharing Plugin

Share content to social media and other apps.

**Installation:**
```bash
npm install @capacitor/share
npx cap sync
```

**Usage:**
```javascript
import { Share } from '@capacitor/share';

const ShareButton = ({ title, text, url }) => {
  const handleShare = async () => {
    try {
      await Share.share({
        title: title,
        text: text,
        url: url,
        dialogTitle: 'Share with friends',
      });
    } catch (error) {
      console.error('Share error:', error);
    }
  };

  return <button onClick={handleShare}>Share</button>;
};
```

### Barcode Scanner Plugin

Scan QR codes and barcodes.

**Installation:**
```bash
npm install @capacitor-community/barcode-scanner
npx cap sync
```

**Usage:**
```javascript
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

const Scanner = () => {
  const [result, setResult] = useState('');

  const startScan = async () => {
    // Check permission
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // Make background transparent
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        setResult(result.content);
      }
    }
  };

  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  return (
    <div>
      <button onClick={startScan}>Start Scan</button>
      <button onClick={stopScan}>Stop Scan</button>
      {result && <p>Scanned: {result}</p>}
    </div>
  );
};
```

## Creating Custom Plugins

### Plugin Structure

```javascript
// MyCustomPlugin.swift (iOS)
import Foundation
import Capacitor

@objc(MyCustomPlugin)
public class MyCustomPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": value
        ])
    }
}

// MyCustomPlugin.java (Android)
@NativePlugin()
public class MyCustomPlugin extends Plugin {
    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
    }
}
```

### TypeScript Interface

```typescript
// definitions.ts
export interface MyCustomPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
```

### Plugin Registration

```typescript
// index.ts
import { registerPlugin } from '@capacitor/core';
import type { MyCustomPlugin } from './definitions';

const MyPlugin = registerPlugin<MyCustomPlugin>('MyCustomPlugin', {
  web: () => import('./web').then(m => new m.MyCustomPluginWeb()),
});

export * from './definitions';
export { MyPlugin };
```

## Plugin Configuration

### Permissions in Android

```xml
<!-- AndroidManifest.xml -->
<manifest>
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
</manifest>
```

### Permissions in iOS

```xml
<!-- Info.plist -->
<key>NSCameraUsageDescription</key>
<string>We need camera access to take photos</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need location access to show nearby places</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>We need photo library access to save images</string>
```

## Best Practices

### 1. Check Plugin Availability

```javascript
import { Capacitor } from '@capacitor/core';

const isPluginAvailable = Capacitor.isPluginAvailable('Camera');

if (isPluginAvailable) {
  // Use camera plugin
} else {
  // Provide fallback
}
```

### 2. Handle Permissions Gracefully

```javascript
const requestCameraPermission = async () => {
  const permission = await Camera.checkPermissions();

  if (permission.camera !== 'granted') {
    const result = await Camera.requestPermissions();
    return result.camera === 'granted';
  }

  return true;
};
```

### 3. Provide Fallbacks for Web

```javascript
const takePicture = async () => {
  if (Capacitor.getPlatform() === 'web') {
    // Web fallback (file input)
    return selectImageFromInput();
  } else {
    // Native camera
    return Camera.getPhoto({ ... });
  }
};
```

### 4. Clean Up Listeners

```javascript
useEffect(() => {
  const listener = Network.addListener('networkStatusChange', handleNetworkChange);

  return () => {
    listener.remove();
  };
}, []);
```

## Debugging Plugins

### Enable Debug Mode

```bash
# Cordova
cordova run android --debug

# Capacitor
npx cap run android --livereload --external
```

### View Native Logs

```bash
# Android
adb logcat

# iOS
xcrun simctl spawn booted log stream --level debug
```

## Related Documentation

- [Enabling Gestures](./enabling-gestures.md)
- [Offline Support](./offline-support.md)
- [WMX Components- Mobile](../enterprise-capabilities/prefabs/wmx-components-mobile.md)
