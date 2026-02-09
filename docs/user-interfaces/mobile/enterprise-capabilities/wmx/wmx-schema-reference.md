# WMX Component Schema 

When creating a WMX widget, the `wmx.json` file defines the component’s metadata, appearance in Studio, and supported properties, events, and styles. The following table outlines the **WMX JSON schema** and the structure expected by WaveMaker Studio.

### Widget Metadata Schema

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Unique widget identifier (lowercase alphanumeric). | Yes |
| `displayName` | Name shown in Studio. If omitted, `name` is used. | No |
| `description` | Help text displayed in Studio. | No |
| `iconUrl` | Relative path to an optional SVG icon (e.g., `icon.svg`). | No |
| `webSupport` | Indicates if the widget supports web preview (default: `false`). | No |
| `props` | Object defining widget properties (see **Property Schema**). | No |
| `events` | Object defining widget events (see **Event Schema**). | No |
| `styles` | Object defining stylable properties (see **Style Schema**). | No |

---

### Property Schema

Defines a widget’s configurable properties for use in Studio. 

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Property identifier (alphanumeric). | Yes |
| `displayName` | Studio label—defaults to `name` if omitted. | No |
| `description` | Help text shown in Studio. | No |
| `type` | Data type (`number`, `string`, `boolean`, `object`). Defaults to `string`. | No |
| `isList` | Whether this property is an array. Default is `false`. | No |
| `defaultValue` | Default value for the property. | No |
| `isRequired` | Whether the property must be provided. Default is `false`. | No |

---

### Event Schema

Defines events that the widget can emit.

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Event name (alphanumeric). | Yes |
| `displayName` | Studio label—defaults to `name` if omitted. | No |
| `description` | Help text shown in Studio. | No |

---

### Style Schema

Defines style properties that can be configured in Studio. 

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Style property identifier (alphanumeric). | Yes |
| `style` | Default value for the style. | No |

---