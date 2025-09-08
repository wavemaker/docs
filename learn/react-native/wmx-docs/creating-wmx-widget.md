---
title: "Creating WMX Widget"
id: "create-wmx-widget"
sidebar_label: "Creating WMX Widget"
---
---

Once project has been set up locally, you can start building your WMX widget. Here we will see how to create a WMX Widget in your WaveMaker project, including folder structure and essential files with a "Hello World" Example.

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

To install a package as a development dependency, use the `--save-dev` flag with the npm install command, for example: `npm install <package-name> --save-dev`.
:::

## Syncing to Studio
After creating or editing your WMX Widget, push your changes to the Studio.
```bash
mvn wavemaker-workspace:push
```

Your widget will now appear in **WaveMaker Studio → WMX Widgets** section.

## Schema

### WMX JSON schema
Name | Description | Required |
---- |-------------|----------| 
**name** | Widget name in lowercase letters. | Yes|
**displayName**| Display name shown in Studio. If not set, `name` is used.  | No |
**description**| Description shown as help info in Studio. | No |
**iconUrl** | Relative path to the SVG icon (e.g., icon.svg). | No |
**webSupport** | Can this component render in web preview? Default value is `false` | No |
**props** | Object of properties supported by widget. (see [Property Schema](#property-schema) below). | No |
**events** | Object of events supported by widget. (see [Event Schema](#event-schema) below). | No |
**styles** | Object of styles supported by widget. (see [Style Schema](#style-schema) below). | No |

### Property Schema

Name | Description | Required |
---- |-------------|----------|
**name** | Property name (alphanumeric). | Yes|
**displayName**| Display name in Studio. If not set, `name` is used.  | No |
**description**| Description shown as help info in Studio. | No |
**type** | Property type, valid property type values are `number`, `string`, `boolean`, `object`. Default value is `string` | No |
**isList** | Set to true if this property is an array. Default value is `false` | No |
**defaultValue** | Default value for this property. | No |
**isRequired** | Set to true if this property is required. Default value is `false` | No |


### Event Schema

Name | Description | Required |
---- |-------------|----------|
**name** | Event name (alphanumeric). | Yes|
**displayName**| Display name in Studio. If not set, `name` is used.  | No |
**description**| Description shown as help info in Studio. | No |


### Style Schema

Name | Description | Required |
---- |-------------|----------|
**name** | Style property name (alphanumeric). | Yes|
**style**| Default style value. | No|
