---
title: "Creating Sticky Header"
id: "sticky-header"
sidebar_label: "Sticky Header"
---
---

import stickyHeaderExample from '/learn/assets/release-notes/stickyHeaderExample.mp4';

A sticky header is a UI element that remains _pinned_ at the top of the screen while the rest of the content scrolls beneath it. It allows widgets to stay visible and accessible as users scrolls, ensuring easy access to important sections and actions without the need to scroll back.

In below example, **Profiles** is configured to be _sticky_.

<video
  src={stickyHeaderExample}
  style={{ width: '100%', maxWidth: 320, height: 'auto' }}
  autoPlay
  loop
  muted
  playsInline
/>

### Configuring Sticky Header

Sticky header can be created by enabling the **Sticky** property on a Container widget. When enabled, all [supported widgets](#supported-widgets) inside that container become sticky:

- They stick below the top navigation bar (by default).
- If the top navigation bar is set to hide on scroll, sticky widgets will pin to the very top of the screen.

### Steps

1. **Add a Container:** Drag and drop a Container widget onto your page.
2. **Enable Sticky:** In the Properties panel, go to the _Behavior_ section and enable the `sticky` property for the container.
3. **Insert Widgets:** Place the widgets you want to be sticky inside this container.

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
    src="https://embed.app.guidde.com/playbooks/bH9KnVTTfwoYju7HimPYPm?mode=videoOnly"
    title="Navigate and Manage Sticky Header in Admin Dashboard"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Recommended Usage for Best Experience

- Sticky widgets are position calculated and move as you scroll, staying pinned at the top. For accurate positioning, avoid adding dynamic content (which takes time to load) above the sticky widget.
- Use a non-transparent background color for the sticky container to improve visibility and prevent content overlap.

### Limitations

- You can only create one sticky container per page.

### Supported Widgets

The following widgets are supported as sticky widgets:

Anchor, Button, Button Group, Icon, Lottie, Label, Picture, Progress Bar, Search, Spinner, Progress Circle, Video, Camera, Calendar, Checkbox, Chips, Menu, Checkboxset, Tile, Currency, Date, Datetime, Time, Number, Radioset, Rating, Select, Slider, Switch, Text, Textarea, Toggle, Audio, Partial
