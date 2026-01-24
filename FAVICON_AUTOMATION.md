# Automated Favicon Generation

## Overview

The build process automatically generates all required favicon formats from `/public/favicon.svg` to ensure proper display in Google search results and all browsers.

## What Gets Generated

Every build automatically creates:

- ✅ `favicon.ico` (16x16, 32x32, 48x48 multi-size ICO)
- ✅ `favicon-16x16.png`
- ✅ `favicon-32x32.png`
- ✅ `apple-touch-icon.png` (180x180 for iOS)

## How It Works

### Build Process

```bash
npm run build
```

**Step 1:** Pre-build script (`/scripts/generate-favicons.js`)
- Reads `/public/favicon.svg`
- Generates all favicon formats using the `favicons` library
- Outputs to `/public/` directory

**Step 2:** Vite build
- Copies `/public/` to `/dist/`
- All favicons are included in deployment

### Source File

**Location:** `/public/favicon.svg`

This SVG contains:
- Waree's Guesthouse bird and key logo
- White background (#ffffff)
- Teal bird (#6bbdbd)
- Orange key (#f47e3d)

### Generated Files

All files are created in `/public/` during build:

| File | Size | Format | Purpose |
|------|------|--------|---------|
| `favicon.ico` | Multi-size | ICO | Legacy browsers, Google Search |
| `favicon-16x16.png` | 16×16px | PNG | Browser tabs |
| `favicon-32x32.png` | 32×32px | PNG | Browser tabs (high-DPI) |
| `apple-touch-icon.png` | 180×180px | PNG | iOS home screen |

## Google Search Integration

Google Search specifically looks for:
1. `favicon.ico` in the root domain
2. PNG favicons referenced in `<link>` tags
3. Standard sizes: 16x16, 32x32, 48x48

**SEO Head Configuration:** `/src/app/components/seo-head.tsx`

```tsx
{/* Favicons - auto-generated during build */}
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## Deployment

### Vercel Deployment

```bash
git add .
git commit -m "Update website"
git push
```

Vercel automatically:
1. Runs `npm run build`
2. Executes `/scripts/generate-favicons.js` (pre-build)
3. Generates all favicon formats
4. Deploys to production

**No manual favicon management required!**

## Troubleshooting

### Favicon Not Showing in Google Search

**Timeline:**
- Google re-indexes favicons every 1-7 days
- Changes may take up to a week to appear in search results

**Force Re-indexing:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Request URL inspection for homepage
3. Click "Request Indexing"

**Verify Deployment:**
```bash
# Check if favicons exist on deployed site
curl -I https://wareeguesthouse.com/favicon.ico
curl -I https://wareeguesthouse.com/favicon-32x32.png
```

Should return `200 OK` status.

### Build Fails During Favicon Generation

**Error:** `Cannot find module 'favicons'`

**Solution:**
```bash
npm install
```

The `favicons` package is already in `package.json` dependencies.

**Error:** `ENOENT: no such file or directory '/public/favicon.svg'`

**Solution:**
Ensure `/public/favicon.svg` exists. This is the source file for all generated favicons.

### Local Testing

```bash
# Run build locally
npm run build

# Check generated files
ls -la public/favicon*
```

You should see:
```
favicon.svg          (source)
favicon.ico          (generated)
favicon-16x16.png    (generated)
favicon-32x32.png    (generated)
apple-touch-icon.png (generated)
```

## Customizing Favicons

### Change Logo/Design

**Option 1: Update SVG (Recommended)**
1. Edit `/public/favicon.svg`
2. Commit and push
3. Automatic regeneration on next build

**Option 2: Replace Source Image**
1. Replace `/public/favicon.svg` with new SVG
2. Or update script to use PNG source
3. Commit and push

### Script Configuration

Edit `/scripts/generate-favicons.js`:

```javascript
const config = {
  appName: "Waree's Guesthouse",
  appShortName: "Waree's",
  background: '#ffffff',    // Favicon background color
  theme_color: '#0a3d3d',   // Theme color for PWA
  // ... more options
};
```

## Technical Details

### Technology Stack

- **Build Tool:** Vite 6.3.5
- **Favicon Library:** `favicons@7.2.0`
- **Source Format:** SVG (scalable, no quality loss)
- **Output Formats:** ICO, PNG

### Script Location

**Path:** `/scripts/generate-favicons.js`

**Execution:** Runs before `vite build` (defined in `package.json`)

```json
{
  "scripts": {
    "build": "node scripts/generate-favicons.js && vite build"
  }
}
```

### Why SVG as Source?

1. **Scalable:** No quality loss at any size
2. **Lightweight:** Small file size
3. **Editable:** Easy to modify design
4. **Future-proof:** Modern browsers support SVG favicons

The script automatically converts SVG → multiple PNG/ICO formats for maximum compatibility.

## Benefits

✅ **Zero Manual Work:** Favicons auto-generate every build  
✅ **Google-Optimized:** All formats Google needs for search results  
✅ **Browser Compatible:** Works in all browsers (legacy to modern)  
✅ **Version Controlled:** Source SVG in git, generated files ephemeral  
✅ **Deployment Ready:** Vercel automatically handles everything

---

**Status:** ✅ Fully Automated  
**Last Updated:** January 2025  
**Maintained By:** Build script (`/scripts/generate-favicons.js`)
