# Waree's Guesthouse - Deployment README

## 🎉 What's Been Fixed

Your Figma Make → GitHub → Vercel deployment pipeline now has comprehensive image handling!

### The Problem We Solved

Images exported from Figma Make to GitHub were being corrupted as **base64-encoded text files** instead of proper binary image files. This caused:
- Build failures on Vercel
- Broken images on deployed site
- Confusion between `.png` and `.jpg` extensions

### The Solution

We've implemented a **4-layer defense system**:

1. **📝 .gitattributes** - Ensures Git treats images as binary
2. **🔧 Fix Script** - Auto-converts base64 text to binary images
3. **🔍 Build Validation** - Detects corrupted images during Vite build
4. **🔄 Auto-Conversion** - Handles `.png` ↔ `.jpg` extension mismatches

## 🚀 How to Deploy

### Quick Method

```bash
# 1. Export images from Figma Make (right-click → Save Image As)
#    Save all 20 images to /src/assets/ with exact hash filenames

# 2. Verify they're binary (should show "JPEG" or "PNG", NOT "ASCII text")
file src/assets/*.{png,jpg} 2>/dev/null | head -3

# 3. If corrupted, run the fix script
node scripts/fix_image_assets.js

# 4. Commit and push
git add src/assets/
git commit -m "Update image assets"
git push

# 5. Vercel auto-deploys! ✨
```

## 📁 File Structure

```
warees-guesthouse/
├── src/
│   ├── assets/                    # 20 binary image files (.png or .jpg)
│   │   ├── 302a78d8...png         # Logo
│   │   ├── d873a09b...png         # About photos (2)
│   │   ├── fe90856b...png         # Room photos (9)
│   │   └── fd44587c...png         # Gallery photos (8)
│   └── app/
│       └── components/
│           ├── hero.tsx           # Imports logo
│           ├── about.tsx          # Imports about photos
│           ├── rooms.tsx          # Imports room photos
│           └── photo-gallery.tsx  # Imports gallery photos
├── scripts/
│   └── fix_image_assets.js        # Auto-fix corrupted images
├── vite.config.ts                 # Build plugin with validation
├── .gitattributes                 # Binary file handling
├── QUICK-DEPLOY-GUIDE.md          # Quick reference
├── FIGMA_EXPORT_GUIDE.md          # Detailed export instructions
├── IMAGE_FIX_SUMMARY.md           # Technical details
└── EXPORT-IMAGES.md               # Image list with filenames
```

## 🛠️ Tools & Scripts

### Fix Corrupted Images
```bash
node scripts/fix_image_assets.js
```
- Detects base64-encoded text files
- Decodes to binary
- Detects actual format (JPEG/PNG)
- Writes correct binary files
- Updates extensions if needed

### Verify Images
```bash
# Count images (should be 20)
ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l

# Check file types (should be image files, NOT text)
file src/assets/*.{png,jpg} 2>/dev/null

# Check they're committed to git (should be 20)
git ls-files src/assets/ | wc -l
```

## 🔄 Build Process

When you deploy to Vercel, the Vite build:

1. **Transforms imports:** `figma:asset/xyz.png` → `/src/assets/xyz.png`
2. **Auto-converts extensions:** If `.png` requested but only `.jpg` exists, uses `.jpg`
3. **Validates binary:** Detects base64-encoded text corruption
4. **Fails safely:** Clear error messages with fix instructions
5. **Emits assets:** Optimized images to `dist/assets/` with cache-busting hashes

## 📋 20 Required Images

All must be in `/src/assets/` (can be `.png` OR `.jpg`):

| Category | Count | Examples |
|----------|-------|----------|
| Logo | 1 | `302a78d8be4e75fe5f3bef65f80ada9b7aeb0688` |
| About | 2 | `d873a09b9daa74b19fd6bfcd9d5107923506e80f` |
| Rooms | 9 | `fe90856b4d0401840ae1c7eae87b65bf4a9d0967` |
| Gallery | 8 | `fd44587c767eb50f2741b29b66410e6e33ab7e5b` |

See `/EXPORT-IMAGES.md` for complete list with descriptions.

## ⚠️ Common Issues & Fixes

### Issue: Build fails with "Missing asset file"
**Fix:** Export the missing image from Figma Make to `/src/assets/`

### Issue: Build fails with "Corrupted image file detected"
**Fix:** Run `node scripts/fix_image_assets.js` or re-export from Figma

### Issue: Images not loading on deployed site
**Fix:** 
1. Check images are committed: `git ls-files src/assets/`
2. Check they're binary: `file src/assets/*.{png,jpg}`
3. Re-commit if needed: `git add src/assets/ && git commit --amend`

### Issue: Extension mismatch (.png vs .jpg)
**Fix:** Don't worry! The Vite plugin auto-converts. Just ensure the file exists in `/src/assets/`

## 🎯 Key Features

### ✅ Flexible Extensions
Code imports `.png`, but you can save as `.jpg` (or vice versa) - the plugin handles it!

### ✅ Corruption Detection
Build fails with helpful error if images contain base64 text instead of binary data.

### ✅ Auto-Fix Script
One command to decode all corrupted images: `node scripts/fix_image_assets.js`

### ✅ Binary Safety
`.gitattributes` ensures Git never corrupts images with line-ending conversions.

## 📚 Documentation Index

- **QUICK-DEPLOY-GUIDE.md** - Quick reference for deploying
- **FIGMA_EXPORT_GUIDE.md** - How to export images from Figma correctly
- **IMAGE_FIX_SUMMARY.md** - Technical details of the fix
- **EXPORT-IMAGES.md** - List of all 20 required images
- **DEPLOYMENT.md** - General deployment workflow (if exists)

## 🎉 You're Ready!

Your deployment pipeline is now:
- ✅ **Robust** - Handles corrupted images gracefully
- ✅ **Flexible** - Works with both PNG and JPEG
- ✅ **Validated** - Catches issues at build time
- ✅ **Self-documenting** - Clear error messages guide you to fixes

Just export your images, commit, and push. Vercel handles the rest! 🚀
