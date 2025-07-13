# Lighthouse Performance Monitor Setup

## Installation

Install Lighthouse and Chrome Launcher:

```bash
npm install --save-dev lighthouse chrome-launcher
```

## Usage

### Basic Usage
```bash
node lighthouse-monitor.js [url]
```

### Development Server
```bash
npm run lighthouse:dev
```

### Production Site
```bash
npm run lighthouse:prod
```

### CI/CD Integration
```bash
npm run lighthouse:ci
```

## Core Web Vitals Monitoring

The monitor tracks three key metrics:

### 1. Largest Contentful Paint (LCP)
- **Good**: ≤ 2.5 seconds
- **Needs Improvement**: 2.5 - 4.0 seconds  
- **Poor**: > 4.0 seconds

### 2. Cumulative Layout Shift (CLS)
- **Good**: ≤ 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

### 3. Total Blocking Time (TBT)
- **Good**: ≤ 200ms
- **Needs Improvement**: 200 - 600ms
- **Poor**: > 600ms

## Performance Optimizations Implemented

### LCP Optimizations
- First 2 images load with `loading="eager"` and `fetchpriority="high"`
- Explicit width/height attributes to prevent layout shifts
- Content visibility optimization for off-screen images

### CLS Optimizations  
- Explicit dimensions on all images
- Layout containment on talent cards
- Reserved space for dynamic content

### TBT Optimizations
- Animation deferring based on performance metrics
- Reduced motion support for user preferences
- Simplified animations for low-end devices

## Animation Deferring Strategy

The system automatically:

1. **Monitors Performance**: Tracks TBT and CLS in real-time
2. **Defers Animations**: Reduces animation duration when TBT > 300ms
3. **Respects User Preferences**: Honors `prefers-reduced-motion`
4. **Adapts to Device**: Simplifies animations on low-end devices

## Real-time Monitoring

The performance observer runs continuously and:
- Logs warnings when thresholds are exceeded
- Automatically optimizes images and animations
- Provides debugging metrics via `window.getPerformanceMetrics()`

## CI/CD Integration

Add to your build process:

```yaml
# GitHub Actions example
- name: Performance Audit
  run: |
    npm run build
    npm run dev &
    sleep 5
    npm run lighthouse:ci
```

## Reports

Reports are saved to `lighthouse-reports/` with timestamps and include:
- Performance scores
- Core Web Vitals ratings
- Optimization opportunities
- Diagnostic information
- Animation recommendations

## Browser Support

- Chrome/Chromium (required for Lighthouse)
- Performance Observer API support
- Modern browsers for Core Web Vitals tracking
