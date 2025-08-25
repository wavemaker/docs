---
title: "Creating and using WMX widget manually"
id: "creating-and-using-wmx-widget-manually"
sidebar_label: "Example - Creating & Using WMX Widget"
---
---

import typewriterTextPreview from '/learn/assets/react-native/wmx/typewriterTextPreview.mp4';

## A Simple Typewriter effect text component using WMX widget.

In this example we will create a simple WMX widget to implement a custom component to create Typewriter like effect text. We will use `react-native-type-animation` library for this example. 

<video
  src={typewriterTextPreview}
  style={{ width: '100%', maxWidth: 320, height: 'auto' }}
  autoPlay
  loop
  muted
  playsInline
/>

### Creating and pushing it to studio

Let's call our custom component `typewritertext`.

1. Create Widget Folder
```bash
cd src/main/webapp/extensions/components/src
mkdir typewritertext
cd typewritertext
```
2. Create Component (`index.tsx`)
```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TypeAnimation } from 'react-native-type-animation';

interface TypewriterTextProps {
  text?: string;
  typeSpeed?: number;
  deletionSpeed?: number;
  fontSize?: number;
  color?: string;
  loop?: boolean;
  showCursor?: boolean;
  delayBetweenSequence?: number;
  onChartyped?: (data: { character: string; currentText: string }) => void;
  onChardeleted?: (data: { character: string; currentText: string }) => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text = "Hello World",
  typeSpeed = 100,
  deletionSpeed = 75,
  fontSize = 24,
  color = "#374151",
  loop = true,
  showCursor = true,
  delayBetweenSequence = 1500,
  onChartyped,
  onChardeleted
}) => {
  return (
    <View style={styles.container}>
      <TypeAnimation
        sequence={[
          { text: text },
          { text: '', deleteCount: text.length, deletionSpeed: deletionSpeed }
        ]}
        loop={loop}
        typeSpeed={typeSpeed}
        delayBetweenSequence={delayBetweenSequence}
        cursor={showCursor}
        style={{
          fontSize: fontSize,
          color: color,
          fontWeight: '400',
          textAlign: 'center',
          letterSpacing: 0.5,
          fontFamily: 'System',
        }}
        cursorStyle={{
          color: '#6B7280',
          fontSize: fontSize,
          fontWeight: '300',
        }}
        onCharTyped={onChartyped}
        onCharDeleted={onChardeleted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
  },
});

export default TypewriterText;
```

3. Create Metadata (`wmx.json`)
```json
{
  "name": "typewritertext",
  "displayName": "Typewriter Text",
  "description": "Animated typewriter effect for text",
  "webSupport": true,
  "iconUrl": "icon.svg",
  "props": {
    "text": {
      "name": "text",
      "displayName": "Text",
      "description": "Text to animate",
      "type": "string",
      "defaultValue": "Hello World",
      "isRequired": false
    },
    "typeSpeed": {
      "name": "typeSpeed",
      "displayName": "Type Speed",
      "description": "Typing speed in milliseconds",
      "type": "number",
      "defaultValue": 100
    },
    "deletionSpeed": {
      "name": "deletionSpeed",
      "displayName": "Deletion Speed",
      "description": "Character deletion speed in milliseconds",
      "type": "number",
      "defaultValue": 75
    },
    "fontSize": {
      "name": "fontSize", 
      "displayName": "Font Size",
      "description": "Text size in pixels",
      "type": "number",
      "defaultValue": 24
    },
    "color": {
      "name": "color",
      "displayName": "Text Color",
      "description": "Text color in hex format",
      "type": "string", 
      "defaultValue": "#374151"
    },
    "loop": {
      "name": "loop",
      "displayName": "Loop Animation",
      "description": "Whether to loop the animation indefinitely",
      "type": "boolean",
      "defaultValue": true
    },
    "showCursor": {
      "name": "showCursor",
      "displayName": "Show Cursor",
      "description": "Whether to display the typing cursor",
      "type": "boolean",
      "defaultValue": true
    },
    "delayBetweenSequence": {
      "name": "delayBetweenSequence",
      "displayName": "Delay Between Sequences",
      "description": "Delay between animation sequences in milliseconds",
      "type": "number",
      "defaultValue": 1500
    }
  },
  "events": {
    "onChartyped": {
      "name": "onChartyped",
      "displayName": "Character Typed",
      "description": "Triggered when each character is typed"
    },
    "onChardeleted": {
      "name": "onChardeleted",
      "displayName": "Character Deleted", 
      "description": "Triggered when each character is deleted"
    }
  },
  "styles": {
    "container": {
      "name": "container",
      "style": {
        "backgroundColor": "transparent",
        "paddingHorizontal": 24
      }
    }
  }
}
```
4. Add `icon.svg`
5. Add Dependencies
```bash
cd src/main/webapp/extensions/components
npm install react-native-type-animation
npm run build
```
6. Push to Studio
```bash
mvn wavemaker-workspace:push
```
<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/n56kPeU3uKr3qeEf3pzM5N"
    title="Adding custom WMX Widget"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Using the newly added WMX Widget

You can drag and drop a WMX widget on canvas and use it just like any other WaveMaker widget.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/3q1Hiw6gD3gWyMQLe3uaYc"
    title="using WMX widget"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>
