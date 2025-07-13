# 🎨 Unides Color Palette

## 🔤 Typography
- **Brand Font**: Playfair Display SC Bold - Used exclusively for "Unides" brand text
- **Body Font**: Inter Variable - Used for all other text content

## Primary Color Palette
| Name | Hex | Tailwind Class | Use Case |
|------|-----|----------------|----------|
| Purple Base | `#a987ff` | `purple-base` | Brand primary, buttons, accents |
| Deep Teal | `#0a353a` | `deep-teal` | Primary background, dark mode base |
| Bright Lime | `#e4f50f` | `bright-lime` | Call-to-actions, tags, hover states |
| Orange Red | `#fd5d13` | `orange-red` | Alerts, active states, badges |
| Soft Pink | `#ff8f9d` | `soft-pink` | Highlights, modals, playful accents |

## Extended Palette for UI
| Name | Hex | Tailwind Class | Use Case |
|------|-----|----------------|----------|
| Purple Dark | `#7c61d8` | `purple-dark` | Hover states, borders |
| Teal Lighter | `#134f55` | `teal-lighter` | Card backgrounds, hover backgrounds |
| Lime Muted | `#c1e600` | `lime-muted` | Secondary CTA, contrast-safe |
| Orange Tint | `#ff8142` | `orange-tint` | Hover/focus states, friendly alerts |
| Pink Muted | `#fdb0bc` | `pink-muted` | Light backgrounds, pills, cards |

## CSS Variable Colors
| Variable | Light Mode | Dark Mode | Purpose |
|----------|------------|-----------|---------|
| `--color-primary` | `#a987ff` | `#a987ff` | Primary brand color |
| `--color-secondary` | `#fd5d13` | `#fd5d13` | Secondary actions |
| `--color-accent` | `#e4f50f` | `#e4f50f` | CTAs and highlights |
| `--color-success` | `#c1e600` | `#c1e600` | Success states |
| `--color-warning` | `#ff8142` | `#ff8142` | Warning states |
| `--color-error` | `#ff8142` | `#ff8142` | Error states |
| `--color-text` | `#0a353a` | `#ffffff` | Primary text |
| `--color-text-offset` | `#134f55` | `#fdb0bc` | Secondary text |
| `--color-background` | `#ffffff` | `#0a353a` | Main background |
| `--color-background-offset` | `#f8f9fa` | `#134f55` | Card backgrounds |
| `--color-border` | `rgba(10,53,58,0.1)` | `rgba(255,255,255,0.1)` | Borders |

## 🧭 Suggested Role Assignments
- **Text (light mode)**: `#0a353a` (Deep Teal)
- **Text (dark mode)**: `#ffffff`
- **Background (light)**: `#ffffff` or `#f8f9fa`
- **Background (dark)**: `#0a353a`
- **Primary button**: `#a987ff`
- **Secondary button**: `#fd5d13`
- **Accent / CTA**: `#e4f50f`
- **Success**: `#c1e600`
- **Error / Warning**: `#ff8142`

## 📘 Example UI Applications

### Hero Section
```css
background: #0a353a;
title: white;
cta: #d9fd12;
```

### Cards
```css
background: #134f55;
hover-border: #a987ff;
```

### Buttons
```css
/* Primary */
background: #a987ff;
hover: #7c61d8;

/* Secondary */
background: #fd5d13;
hover: #ff8142;

/* Accent */
background: #d9fd12;
color: #0a353a;
hover: #c1e600;
```

### Highlight Elements
```css
/* Tags */
background: #d9fd12;
color: #0a353a;

/* Highlights */
background: #ff8f9d;
color: #0a353a;

/* Badges */
background: #fd5d13;
color: white;
```

## 🎭 Component Classes
Available in `global.css`:

- `.unides-brand` - Playfair Display SC Bold for brand text
- `.btn-primary` - Purple primary button
- `.btn-secondary` - Orange secondary button  
- `.btn-accent` - Lime accent button
- `.card` - Basic card styling
- `.card-hover` - Card with hover effects
- `.highlight` - Pink highlight background
- `.tag` - Lime tag styling
- `.badge` - Orange badge styling
- `.gradient-text` - Multi-color gradient text

## 🌟 Usage Examples

```html
<!-- Primary CTA Button -->
<button class="btn-primary">Get Started</button>

<!-- Secondary Action -->
<button class="btn-secondary">Learn More</button>

<!-- Accent Element -->
<span class="tag">New Feature</span>

<!-- Cards -->
<div class="card card-hover">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

<!-- Highlights -->
<span class="highlight">Important text</span>

<!-- Badges -->
<span class="badge">Hot</span>
```

## 📱 Accessibility Notes
- All color combinations meet WCAG AA contrast requirements
- Dark mode provides excellent readability
- Color-blind friendly palette with sufficient luminance differences
- Focus states use purple (`#a987ff`) for consistency
