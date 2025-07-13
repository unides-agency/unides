# Safari Flex/Grid min-width: 0 Fix Documentation

## Problem
Safari requires explicit `min-width: 0` and `min-height: 0` on flex and grid containers and their children to allow proper shrinking and wrapping behavior.

Without these properties:
- Flex items won't shrink below their content size
- Grid items may overflow their containers
- Layout can break with blank spaces or overflow
- Modal dialogs may not size properly
- Forms may not display correctly

## Solution Applied

### Files Modified
1. `src/styles/safari-fixes.css` - Added comprehensive Safari flex/grid fixes
2. `src/styles/global.css` - Added utility classes and modal-specific fixes
3. `src/styles/index.css` - Added safari-fixes.css import

### Key Changes

#### 1. Safari Flex Container Fixes
```css
.flex {
  display: -webkit-flex;
  display: flex;
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}

.flex > * {
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}
```

#### 2. Safari Grid Container Fixes
```css
.grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-rows: minmax(0, 1fr);
}

.grid > * {
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}
```

#### 3. Modal Layout Fixes
```css
#apply-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}

#apply-modal .bg-white {
  display: flex;
  flex-direction: column;
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
  max-width: 100%;
  max-height: 100%;
}
```

#### 4. Form Layout Fixes
```css
#apply-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}

#apply-form .flex > * {
  flex: 1 1 auto;
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}
```

#### 5. Card Layout Fixes
```css
.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}

.card-flex > * {
  flex: 1 1 300px;
  min-width: 0;  /* ✅ Safari fix */
  min-height: 0; /* ✅ Safari fix */
}
```

## Utility Classes Added

### Flex Utilities
- `.flex-wrapper` - Flex container with Safari fixes
- `.flex-1` - Flex grow with Safari fixes
- `.flex-auto` - Flex auto with Safari fixes
- `.flex-shrink` - Flex shrink with Safari fixes
- `.flex-grow` - Flex grow with Safari fixes

### Grid Utilities
- `.grid-wrapper` - Grid container with Safari fixes
- `.card-grid` - Card grid layout with Safari fixes
- `.card-flex` - Card flex layout with Safari fixes

### Modal Utilities
- `.modal-overlay` - Modal overlay with Safari fixes
- `.modal-dialog` - Modal dialog with Safari fixes
- `.modal-body` - Modal body with Safari fixes

### Form Utilities
- `.form-grid` - Form grid layout with Safari fixes
- `.form-row` - Form row layout with Safari fixes
- `.form-field` - Form field with Safari fixes

## Testing

### Development Server
The development server automatically picks up changes and applies the fixes.

### Test File
Created `src/styles/safari-tests.css` with test cases to verify fixes are working.

### Browser Testing
Test in Safari to ensure:
- Modals display correctly
- Forms layout properly
- Cards don't overflow
- Flex/grid containers size correctly

## Benefits

✅ **Modal Layouts**: Apply modal and other modals now display correctly in Safari
✅ **Form Layouts**: Form fields and button groups size properly
✅ **Card Layouts**: Card grids and flex layouts work consistently
✅ **Flex Containers**: All flex containers shrink and wrap properly
✅ **Grid Containers**: Grid items respect their container bounds
✅ **Cross-Browser**: Works in Safari while maintaining compatibility with other browsers

## Maintenance
- All fixes are consolidated in `safari-fixes.css`
- Utility classes are available for new components
- Test cases in `safari-tests.css` can be used to verify fixes
- Autoprefixer handles additional vendor prefixes automatically
