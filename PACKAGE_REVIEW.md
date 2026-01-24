# Package.json Review & Cleanup Recommendations

**Review Date:** January 2026  
**Total Dependencies:** 58 production + 4 dev = 62 packages  

---

## ✅ Build Scripts Review

**Your recent changes to build scripts are EXCELLENT!** 

```json
"build": "npm run fix-images && npm run generate-favicons && vite build",
"build:dev": "vite build",
"build:quick": "npm run generate-favicons && vite build",
"generate-favicons": "node scripts/generate-favicons.js",
```

This is smart because:
- ✓ `build` - Full production build with all checks
- ✓ `build:dev` - Quick build without image processing
- ✓ `build:quick` - Build with favicons but skip slow image fix
- ✓ Separates concerns properly

---

## 🗑️ UNUSED Dependencies to Remove

These packages are installed but **NOT imported anywhere** in your codebase:

### Material UI Components (6 packages - **REMOVE ALL**)
```json
"@emotion/react": "11.14.0",           // ❌ MUI peer dependency (unused)
"@emotion/styled": "11.14.1",          // ❌ MUI peer dependency (unused)
"@mui/icons-material": "7.3.5",        // ❌ Not imported anywhere
"@mui/material": "7.3.5",              // ❌ Not imported anywhere
```

**Why installed:** Likely added automatically by shadcn/ui or a template  
**Actually using:** Radix UI + lucide-react (which you ARE using)  
**Action:** Remove all 4 packages

### Animation & Carousel (1 package)
```json
"react-slick": "0.31.0",               // ❌ Not imported anywhere
```

**Why installed:** Common carousel library  
**Actually using:** `embla-carousel-react` (which you ARE using extensively)  
**Action:** Remove

### Layout & Grid (1 package)
```json
"react-responsive-masonry": "2.7.1",   // ❌ Not imported anywhere
```

**Why installed:** Masonry grid layout  
**Actually using:** Regular CSS Grid/Flexbox  
**Action:** Remove

### Drag & Drop (2 packages)
```json
"react-dnd": "16.0.1",                 // ❌ Not imported anywhere
"react-dnd-html5-backend": "16.0.1",   // ❌ Not imported anywhere
```

**Why installed:** Drag and drop functionality  
**Actually using:** Nothing - no drag/drop in the site  
**Action:** Remove both

### Layout & Panels (1 package)
```json
"react-resizable-panels": "2.1.7",     // ❌ Not imported anywhere
```

**Why installed:** Resizable split panels  
**Actually using:** Nothing - no resizable panels  
**Action:** Remove

### Utilities (2 packages)
```json
"date-fns": "3.6.0",                   // ❌ Not imported anywhere
"tw-animate-css": "1.3.8",             // ❌ Not imported anywhere
```

**Why installed:** Date formatting and animations  
**Actually using:** Built-in JS Date, Motion for animations  
**Action:** Remove both

### Positioning (2 packages - **MAYBE KEEP**)
```json
"@popperjs/core": "2.11.8",            // ⚠️ Peer dependency of react-popper
"react-popper": "2.3.0",               // ⚠️ Not directly imported
```

**Status:** Not found in code search  
**BUT:** Radix UI components may use Popper.js internally  
**Action:** Try removing, see if build breaks

### PWA (1 package)
```json
"vite-plugin-pwa": "^1.2.0",           // ❌ Not in vite.config.ts
```

**Why installed:** Progressive Web App functionality  
**Actually using:** Nothing in vite.config  
**Action:** Remove (or configure if you want PWA)

---

## ✅ USED Dependencies (Keep These)

### UI Framework (Radix UI) - **28 packages - ALL USED**
```
@radix-ui/react-accordion        ✓ Used in accordion.tsx
@radix-ui/react-alert-dialog     ✓ Used in alert-dialog.tsx
@radix-ui/react-aspect-ratio     ✓ Used in aspect-ratio.tsx
@radix-ui/react-avatar           ✓ Used in avatar.tsx
@radix-ui/react-checkbox         ✓ Used in checkbox.tsx
@radix-ui/react-collapsible      ✓ Used in collapsible.tsx
@radix-ui/react-context-menu     ✓ Used in context-menu.tsx
@radix-ui/react-dialog           ✓ Used in dialog.tsx, sheet.tsx
@radix-ui/react-dropdown-menu    ✓ Used in dropdown-menu.tsx
@radix-ui/react-hover-card       ✓ Used in hover-card.tsx
@radix-ui/react-label            ✓ Used in label.tsx, form.tsx
@radix-ui/react-menubar          ✓ Used in menubar.tsx
@radix-ui/react-navigation-menu  ✓ Used in navigation-menu.tsx
@radix-ui/react-popover          ✓ Used in popover.tsx
@radix-ui/react-progress         ✓ Used in progress.tsx
@radix-ui/react-radio-group      ✓ Used in radio-group.tsx
@radix-ui/react-scroll-area      ✓ Used in scroll-area.tsx
@radix-ui/react-select           ✓ Used in select.tsx
@radix-ui/react-separator        ✓ Used in separator.tsx
@radix-ui/react-slider           ✓ Used in slider.tsx
@radix-ui/react-slot             ✓ Used in button.tsx, badge.tsx, form.tsx, etc.
@radix-ui/react-switch           ✓ Used in switch.tsx
@radix-ui/react-tabs             ✓ Used in tabs.tsx
@radix-ui/react-toggle           ✓ Used in toggle.tsx
@radix-ui/react-toggle-group     ✓ Used in toggle-group.tsx
@radix-ui/react-tooltip          ✓ Used in tooltip.tsx
```

### Carousel & Sliders (1 package)
```
embla-carousel-react             ✓ Used in 7+ components (rooms, reviews, gallery, etc.)
```

### UI Components (7 packages)
```
react-day-picker                 ✓ Used in calendar.tsx
cmdk                             ✓ Used in command.tsx
vaul                             ✓ Used in drawer.tsx
input-otp                        ✓ Used in input-otp.tsx
next-themes                      ✓ Used in sonner.tsx (theme detection)
recharts                         ✓ Used in chart.tsx
sonner                           ✓ Used for toast notifications
```

### Forms (1 package)
```
react-hook-form                  ✓ Used in form.tsx
```

### Icons & Styling (4 packages)
```
lucide-react                     ✓ Used everywhere (Award, Heart, Star, etc.)
class-variance-authority         ✓ Used in UI components
clsx                             ✓ Used for conditional classes
tailwind-merge                   ✓ Used in cn() utility function
```

### Core App (4 packages)
```
react-router                     ✓ Used for routing (if multi-page)
react-helmet-async               ✓ Used in seo-head.tsx
@vercel/analytics                ✓ Used for Vercel Analytics
motion                           ✓ Used for animations
```

### Build Tools (1 package)
```
favicons                         ✓ Used in scripts/generate-favicons.js
```

---

## 🧹 Cleanup Commands

### Option 1: Remove All Unused (Recommended)

```bash
# Remove Material UI (not using it)
npm uninstall @emotion/react @emotion/styled @mui/icons-material @mui/material

# Remove unused carousel
npm uninstall react-slick

# Remove unused layout libraries
npm uninstall react-responsive-masonry react-resizable-panels

# Remove unused drag & drop
npm uninstall react-dnd react-dnd-html5-backend

# Remove unused utilities
npm uninstall date-fns tw-animate-css

# Remove unused PWA plugin
npm uninstall vite-plugin-pwa

# Try removing Popper (may break - if so, reinstall)
npm uninstall @popperjs/core react-popper
```

### Option 2: Conservative Cleanup (Keep Popper)

```bash
# Remove everything except Popper (just in case Radix needs it)
npm uninstall @emotion/react @emotion/styled @mui/icons-material @mui/material react-slick react-responsive-masonry react-resizable-panels react-dnd react-dnd-html5-backend date-fns tw-animate-css vite-plugin-pwa
```

### After Cleanup: Test Build

```bash
# Test that everything still works
npm run build

# If build fails, check which package is missing and reinstall only that one
npm install <missing-package>
```

---

## 📊 Expected Savings

**Before:** 62 total packages  
**After cleanup:** ~46 packages (removing 16 unused)  

**Benefits:**
- ⚡ Faster `npm install` (less to download)
- 🗜️ Smaller `node_modules` (~150-200 MB smaller)
- 🚀 Slightly faster builds (fewer deps to resolve)
- 🧹 Cleaner dependency tree
- 🔒 Fewer security audit warnings

---

## ⚠️ Dependencies That Might Be Indirect

These might be peer dependencies used internally:

```
@popperjs/core                   // May be used by Radix UI internally
react-popper                     // May be used by Radix UI internally
```

**Test approach:**
1. Remove them
2. Run `npm run build`
3. If build fails with missing peer dependency warning → reinstall
4. If build succeeds → they were truly unused!

---

## 📝 Updated package.json After Cleanup

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "@vercel/analytics": "^1.6.1",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "embla-carousel-react": "8.6.0",
    "favicons": "^7.2.0",
    "input-otp": "1.4.2",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react-day-picker": "8.10.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "7.55.0",
    "react-router": "^7.12.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "vaul": "1.1.2"
  }
}
```

**Removed 16 packages:**
- ❌ @emotion/* (2)
- ❌ @mui/* (2)
- ❌ @popperjs/core
- ❌ react-popper
- ❌ react-slick
- ❌ react-responsive-masonry
- ❌ react-dnd (2)
- ❌ react-resizable-panels
- ❌ date-fns
- ❌ tw-animate-css
- ❌ vite-plugin-pwa

---

## 🎯 Recommendation

**Execute Option 1 (Remove All)** - You're not using any of these packages and they're just bloat.

**Steps:**
1. Commit current working state first (backup!)
2. Run all uninstall commands from Option 1
3. Test build: `npm run build`
4. Test local dev: `npm run dev`
5. If everything works → commit and deploy
6. If something breaks → reinstall only that specific package

---

## 📌 Notes

- Your build scripts are well-organized ✓
- All Radix UI packages are being used (good shadcn/ui setup) ✓
- Embla Carousel is used extensively (good choice) ✓
- No duplicate functionality (e.g., not using both MUI AND Radix) ✓
- `motion` package is modern choice (good update from framer-motion) ✓

**Overall:** Clean, modern stack. Just needs to remove the unused Material UI dependencies and a few other stragglers.
