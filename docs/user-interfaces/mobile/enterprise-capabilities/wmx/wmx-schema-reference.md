---
last_update:
  author: Priyanka Bhadri
---

# WMX Component Schema

WMX Components allow developers to build custom React Native components
that integrate directly into WaveMaker Studio. Each component includes
UI logic, metadata configuration, and optional visual assets.

---

## Component Structure

All WMX components must be placed inside:

    `src/main/webapp/extensions/components/src`

Each component should follow this structure:
```text
    componentname/
    ├── index.tsx
    ├── wmx.json
    └── icon.svg (optional)
```

  File        | Purpose
------------|----------------------------------------
index.tsx   | Contains UI and component logic
wmx.json    | Defines properties, events, and styles
icon.svg    | Optional Studio icon

---

## wmx.json Overview

The `wmx.json` file defines how the component appears and behaves in
WaveMaker Studio.

### Example

   ```json
    {
      "name": "myComponent",
      "displayName": "My component",
      "description": "Sample WMX component",
      "webSupport": true,
      "iconUrl": "icon.svg",
      "props": {},
      "events": {},
      "styles": {}
    }
   ```


### Metadata Fields

 Field        | Description                   | Required
-------------|------------------------------|----------
name         | Unique lowercase identifier   | Yes
displayName  | Name shown in Studio          | No
description  | Help text                     | No
iconUrl      | SVG icon path                 | No
webSupport   | Enables web preview           | No
props        | Defines component properties  | No
events       | Defines component events      | No
styles       | Defines styling options       | No


### Property Schema

Defines configurable component inputs.

Field         | Description
--------------|---------------------------------
name          | Property identifier
type          | string, number, boolean, object
defaultValue  | Default property value
isList        | Supports array values
isRequired    | Marks property mandatory


### Event Schema

Defines events triggered by user interaction or state change.

  Field        | Description
-------------|---------------------
name         | Event identifier
displayName  | Studio label
description  | Event usage details


### Style Schema

Defines styling options exposed to Studio.

Field   | Description
--------|---------------------
name    | Style identifier
style   | Default style value

---

## index.tsx Overview

The `index.tsx` file contains the React Native implementation of the
component.

### Example
```
    import * as React from 'react';
    import { View, Text } from 'react-native';

    const MyComponent = ({ title = "Hello World" }) => (
      <View>
        <Text>{title}</Text>
      </View>
    );

    export default MyComponent;

```

---

## icon.svg Guidelines

-   SVG format only
-   Transparent background recommended
-   Suggested stroke color: #737373

---

## Summary

WMX components combine React Native UI development with metadata-driven
configuration. Proper schema definition ensures components remain
reusable, configurable, and easy to integrate within WaveMaker Studio.
