# Autoprefixer Configuration

## Overview
This project now includes Autoprefixer, a PostCSS plugin that automatically adds vendor prefixes to CSS properties for better browser compatibility, especially for Safari.

## Files Added/Modified

### 1. `postcss.config.js`
PostCSS configuration file that includes:
- TailwindCSS processing
- Autoprefixer with Safari-specific browser targeting
- Flexbox prefixing (with `flexbox: 'no-2009'` for modern flexbox)
- Grid prefixing disabled to avoid conflicts with manual prefixes

### 2. `.browserslistrc`
Browser support configuration defining target browsers:
- Modern browsers (> 1%, last 2 versions)
- Safari >= 10 and iOS >= 10
- Chrome >= 60, Edge >= 16
- Firefox ESR

### 3. `astro.config.mjs`
Updated to include PostCSS configuration through Vite.

## Browser Support
Autoprefixer now automatically handles prefixes for:
- **Safari/iOS**: `-webkit-` prefixes for flexbox, transform, user-select, backdrop-filter
- **Chrome**: Older versions requiring `-webkit-` prefixes
- **Firefox**: `-moz-` prefixes where needed
- **Edge**: `-ms-` prefixes for legacy versions

## Properties Automatically Prefixed
- `display: flex` → `-webkit-flex`
- `transform` → `-webkit-transform`
- `user-select` → `-webkit-user-select`, `-moz-user-select`
- `backdrop-filter` → `-webkit-backdrop-filter`
- `appearance` → `-webkit-appearance`, `-moz-appearance`
- `box-shadow` → `-webkit-box-shadow`
- `transition` → `-webkit-transition`
- And many more...

## Usage
No changes needed in your CSS files. Autoprefixer automatically processes all CSS during build and development.

## Verification
Run `npx autoprefixer --info` to see which browsers are supported and which prefixes will be added.

## Notes
- Grid prefixing is disabled to avoid conflicts with manual Safari grid prefixes
- The configuration prioritizes Safari compatibility while maintaining support for other browsers
- Works seamlessly with TailwindCSS and custom CSS
