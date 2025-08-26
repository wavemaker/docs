---
title: "Creating WMX Widget"
id: "create-wmx-widget"
sidebar_label: "Creating WMX Widget"
---
---

- All WMX Widgets in a WaveMaker Project are stored in: `src/main/webapp/extensions/components/src`. 

- Each widget requires its own folder with a lowercase alphanumeric name. For example, a widget named mywidget should be placed in `src/main/webapp/extensions/components/src/mywidget/`.

```
src/main/webapp/extensions/components/src/
├── mywidget/
│   ├── index.tsx
│   ├── wmx.json
│   └── icon.svg (optional)
├── anothercustomwidget/
│   ├── index.tsx
│   ├── wmx.json
│   └── icon.svg (optional)
└── ...
```
---

## Required Files

| File        | Purpose |
|-------------|---------|
| **`index.tsx`** | Contains the widget's UI logic. Must export the component as **default**. |
| **`wmx.json`** | Metadata about the component (name, props, events, styles). Based on this metadata, the properties panel is shown in Studio |
| **`icon.svg`** *(optional)* | This svg is used in Studio as widget icon. Preferably, this icon should have transparent background and should use `#737373` as stroke color. |

---

## Steps to Create a WMX Widget

### 1. Create the Widget Folder
- Navigate to:  `src/main/webapp/extensions/components/src`
- Create a new folder for your widget (lowercase alphanumeric name).

### 2. Add the `index.tsx` in your widget folder
Example:
```typescript
import * as React from 'react';
import { View, Text } from 'react-native';

interface MyWidgetProps {
  title?: string;
}

const MyWidget: React.FC<MyWidgetProps> = ({ title = "Hello World" }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default MyWidget;
```

### 3. Add the `wmx.json` in your widget folder
Example:
```json
{
  "name": "mywidget",
  "displayName": "My Widget",
  "description": "A custom WMX Widget example.",
  "webSupport": true,
  "iconUrl": "icon.svg",
  "props": {
    "title": {
        "name":"title",
      "displayName": "Title",
      "description": "Title text for the widget",
      "type": "string",
      "defaultValue": "Hello World"
    }
  },
  "events": {},
  "styles": {}
}
```

### 4. Add an icon.svg (Optional) in your widget folder

Add an `icon.svg` file for better widget identification in Studio.

## Adding External Dependencies

If your widget requires external npm packages, then install them in the `components` directory.

```bash
# From components folder
cd src/main/webapp/extensions/components
npm install <package_name>
npm run build
```

:::note
Following packages are also available in WaveMaker runtime. If these packages are needed, then add them as development dependencies to compile the code for your development. This will help in preventing version clashes.
- color
- lodash
- moment
- react-native-gesture-handler
- react-native-reanimated
- react-native-svg
- victory-native
:::

## Syncing to Studio
After creating or editing your WMX Widget, push your changes to the Studio.
```bash
mvn wavemaker-workspace:push
```

Your widget will now appear in **WaveMaker Studio → WMX Widgets** section.

## Schema

### WMX JSON schema
Name | Description | Required | Default |
---- |-------------|----------| --------------|
**name** | name of the component in lowercase alphabets. | Yes||
**displayName**| Regular Name to display in Studio. If not specified, name is used displayName.  | No | |
**description**| Additional information about the component. This will be used in Studio as help info to developers. | No | |
**iconUrl** | relative path of icon svg image. Ex: icon.svg | No |  |
**webSupport** | Indicates whether this component can render in web preview | No | false |
**props** | A map of properties. property name is key and property as value. For more information about property see below | No | |
**events** | A map of events. event name is key and event as value. For more information about event see below | No | |
**styles** | A map of styles. style name is key and style as value. For more information about style see below  | No | |

### Property Schema

Name | Description | Required | Default |
---- |-------------|----------| --------------|
**name** | name of the property in alphanumeric. | Yes||
**displayName**| Regular Name to display in Studio. If not specified, name is used displayName.  | No | |
**description**| Additional information about the property. This will be used in Studio as help info to developers. | No | |
**type** | Indicates the type of property. Allowed values are number, string, boolean, object.| No | string |
**isList** | A boolean value that indicates whether this is of array type| No | false |
**defaultValue** | Value for this property by default | No | |
**isRequired** | A boolean value that indicates whether value to this property is required | No | false


### Event Schema

Name | Description | Required | Default |
---- |-------------|----------| --------------|
**name** | name of the event in alphanumeric. | Yes||
**displayName**| Regular Name to display in Studio. If not specified, name is used displayName.  | No | |
**description**| Additional information about the event. This will be used in Studio as help info to developers. | No | |


### Style Schema

Name | Description | Required | Default |
---- |-------------|----------| --------------|
**name** | name of the style property in alphanumeric. | Yes||
**style**| default styles | No| |
