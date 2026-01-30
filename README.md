# slideFrame

**Lightweight JS + CSS snippet for displaying external links in a dynamic overlay**

---

## Overview

slideFrame is a minimal JavaScript and CSS snippet that allows you to display external links in a dynamic overlay. It’s lightweight, easy to include, and perfect for quickly enhancing link behavior on your website.

> ⚠️ **Note:** slideFrame is **no longer actively maintained**. The project is provided as-is.  
> Feel free to fork and continue development on your own.

---

## Features

- Display external links in a sliding overlay
- Sleek, minimal design (fully customizable via CSS)
- Easy to integrate with minimal setup
- Lightweight JS + CSS, no dependencies

---

## Installation

Include the CSS file in your `<head>` section and the JS file just before your closing `</body>` tag:

```html
<link rel="stylesheet" type="text/css" href="slideFrame.css" />
<script src="slideFrame.min.js"></script>
```

---

## Usage

There are two ways to activate slideFrame:

### 1. Global activation

Activate slideFrame for all links on your website by adding the `data-slideframe="true"` attribute to your `<body>` tag:

```html
<body data-slideframe="true">
```

To exclude specific links, add `data-slideframe="false"` directly to the respective `<a>` tag:

```html
<a href="https://example.com" data-slideframe="false">Skip Overlay</a>
```

### 2. Per-link activation

Activate slideFrame individually by adding `data-slideframe="true"` to specific `<a>` tags:

```html
<a href="https://example.com" data-slideframe="true">Open in Overlay</a>
```

---

### Optional: Titles

You can add a `title` attribute to your links. Its content will be displayed in slideFrame’s titlebar. If no `title` attribute is provided, the link text will be shown.

```html
<a href="https://example.com" data-slideframe="true" title="Example Website">Example</a>
```

---

## Known Limitations

- slideFrame **cannot be used when linking from an HTTPS site to a non-HTTPS site** due to browser security restrictions.
- Some websites implement security measures (such as CORS and SOP) that prevent their content from being loaded in iFrames. slideFrame cannot bypass these restrictions, but you can exclude specific links as needed.
- slideFrame is **not compatible with most social media sites** for the above reasons.

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## Maintenance

slideFrame is **not actively maintained**. Contributions or pull requests **may not be reviewed**, and I **cannot offer support**. Use at your own risk.

The snippet is provided as-is, but feel free to fork it and adapt it for your own projects.
