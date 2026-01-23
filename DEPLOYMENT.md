# Deployment Guide - Waree's Guesthouse Website

Complete guide for deploying the Waree's Guesthouse website from Figma Make to Vercel.

## 🎯 Current System Status

✅ **Vite build plugin** with auto-conversion between `.png` ↔ `.jpg`  
✅ **Auto-decode base64 images** during build (corrupted images are fixed automatically)  
✅ **Fix script available** at `/scripts/fix_image_assets.js` (ES Module)  
✅ **Git binary handling** configured in `.gitattributes`

## 🚀 Quick Deploy Workflow

### Simple 3-Step Process

```bash
# 1. Commit your changes
git add .
git commit -m "Update website"

# 2. Push to GitHub
git push

# 3. Vercel auto-deploys ✨
```

**That's it!** The build system now automatically handles image format conversions and base64 corruption.

## 📦 Required Image Assets (20 Total)

All images must be in `/src/assets/` with these exact hash filenames.  
**Note:** Can be saved as either `.png` OR `.jpg` - the build system auto-converts!

### Logo (1 image)
```
302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png
```

### About Section (2 images)
```
d873a09b9daa74b19fd6bfcd9d5107923506e80f.png
a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84.png
```

### Rooms Gallery (9 images)
```
fe90856b4d0401840ae1c7eae87b65bf4a9d0967.png
c8eb8834474b6ee7e9b14931d4731257b7f460f4.png
afcf207372169cde9fed998c2cab3df10bf19418.png
4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3.png
ae87d5913824777f33e1cf7b1aa5bb9ff9e76937.png
e624635e32d87a6ef0d6605d63e4816d15a69a0a.png
b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc.png
7535206b35eef49ec344fb3a87c9dd37de145c2e.png
aaeceff6fe165faa2028b5c18597728bddcf2ac4.png
```

### Photo Gallery (8 images)
```
fd44587c767eb50f2741b29b66410e6e33ab7e5b.png
56c596cd5a33949f5e17a640ea10e1226770ea89.png
4fc2e1b259bb7e4cf3619d1c04678de03d10b74f.png
5ed0347ef6ba377b3aed014e82457f62f67c3b79.png
9103a84bcde1c52daa2a9cf0281a93994f92a2dc.png
5ff9106bea6d26fc1b1053a02cfc36823470b9ce.png
87e0980cb43c2b86fabd01026a648813efa362af.png
b5e500c11743141ce9c535bfc9fc16c8222d03ca.png
```

## 📥 How to Export Images from Figma Make

### Method 1: Direct Export from Browser (Recommended)

1. **Open Figma Make** in your browser where the site is working
2. **Right-click each image** → "Save Image As..." or "Open Image in New Tab" → Save
3. **Save to** `/src/assets/` with the exact hash filename (see list above)
4. Can save as `.png` OR `.jpg` - build system handles conversion automatically

### Method 2: Use Fix Script (If Images Are Already Downloaded)

If you have images but they're corrupted (base64 text instead of binary):

```bash
# Auto-fix corrupted images
node scripts/fix_image_assets.js

# Commit the fixed images
git add src/assets/
git commit -m "Fix image assets"
git push
```

### Verify Images

```bash
# Check you have all 20 images
ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l
# Should output: 20

# Check images are binary (not corrupted)
file src/assets/*.{png,jpg} 2>/dev/null | head -5
# Should show "JPEG image" or "PNG image", NOT "ASCII text"
```

## 🔧 Troubleshooting

### Build Fails: "Missing asset file"

**Problem:** One or more images are missing from `/src/assets/`

**Solution:**
```bash
# Check how many images you have
ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l

# Should be 20. If not, export missing images from Figma Make
```

### Build Fails: "Corrupted image file detected"

**Problem:** Images contain base64 text instead of binary data

**Solution (Automatic):** The build now auto-decodes base64 images! This error should no longer occur. If it does:
```bash
node scripts/fix_image_assets.js
git add src/assets/
git commit -m "Fix corrupted images"
git push
```

### Build Fails: ES Module Error

**Problem:** `ReferenceError: require is not defined`

**Solution:** This is fixed in the current version. The `fix_image_assets.js` script now uses ES modules (`import` instead of `require`).

### Images Not Displaying on Deployed Site

**Check 1:** Images are committed to git
```bash
git ls-files src/assets/ | wc -l
# Should output: 20
```

**Check 2:** Images are binary, not corrupted
```bash
file src/assets/*.{png,jpg} 2>/dev/null
# Should NOT show "ASCII text"
```

**Fix:** If images are missing or corrupted:
```bash
# Re-export from Figma Make or run fix script
node scripts/fix_image_assets.js

# Commit and push
git add src/assets/
git commit -m "Update image assets"
git push
```

## 💡 How the Build System Works

### Auto Extension Conversion

The Vite plugin automatically handles mismatches:
- Code imports `.png` but only `.jpg` exists → Uses `.jpg` ✅
- Code imports `.jpg` but only `.png` exists → Uses `.png` ✅
- No need to update component imports!

### Auto Base64 Decoding

If images are corrupted (base64 text instead of binary):
1. Build detects base64-encoded text
2. Automatically decodes to binary during build
3. Detects actual format (JPEG/PNG) from magic bytes
4. Emits correct binary asset to `dist/`

**You don't need to do anything!** Just push and Vercel will build successfully.

### Git Binary Handling

The `.gitattributes` file ensures images are never corrupted by git:

```gitattributes
*.png binary
*.jpg binary
*.jpeg binary
```

This tells git to treat these files as binary (never convert line endings).

## 📋 NPM Scripts

```json
{
  "build": "vite build",                    // Production build (Vercel runs this)
  "verify-images": "bash scripts/verify-images.sh",  // Check images locally
  "fix-images": "node scripts/fix_image_assets.js"   // Fix corrupted images
}
```

## 🌐 Vercel Deployment Process

When you push to GitHub, Vercel automatically:

1. **Detects the push** and starts a new build
2. **Runs `npm install`** to install dependencies
3. **Runs `npm run build`** which:
   - Transforms `figma:asset` imports to actual file paths
   - Auto-converts `.png` ↔ `.jpg` if needed
   - Auto-decodes base64-corrupted images
   - Emits optimized assets to `dist/`
4. **Deploys `dist/`** to Vercel CDN
5. **Updates the live site** ✨

## 📁 Project Structure

```
wareeguesthouse/
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   │   ├── hero.tsx
│   │   │   ├── rooms.tsx
│   │   │   └── ...
│   │   └── App.tsx            # Main app entry
│   ├── assets/                # 20 image files (png/jpg)
│   ├── config/
│   │   └── siteConfig.ts      # Contact info, site metadata
│   ├── contexts/
│   │   └── language-context.tsx  # i18n context
│   ├── translations/          # Translation files
│   │   ├── index.ts           # Main translations
│   │   └── cookies.ts         # Cookie policy translations
│   └── styles/                # CSS files
├── scripts/
│   ├── fix_image_assets.js    # Auto-fix corrupted images
│   └── verify-images.sh       # Verify images locally
├── .gitattributes             # Git binary file handling
├── vite.config.ts             # Vite build config (with custom plugin)
├── package.json
└── vercel.json                # Vercel deployment config
```

## 🎯 Key Features

### Multi-language Support (8 Languages)
- English, Thai, Chinese, Russian, German, Italian, Swedish, Finnish
- Configured in `/src/translations/index.ts`

### Cookie Consent System
- EU GDPR compliant
- Configured in `/src/translations/cookies.ts`
- Component: `/src/app/components/cookie-consent.tsx`

### SEO Optimization
- Meta tags per language
- Configured in `/src/config/siteConfig.ts`
- Component: `/src/app/components/seo-head.tsx`

### Contact Information
- Centralized in `/src/config/siteConfig.ts`
- Email: wareesguesthouse@gmail.com
- Phone: +66 76 331 016
- Address: 44/5 Kata Road, Karon, Phuket 83100, Thailand

## 🚨 Common Mistakes to Avoid

❌ **Don't** rename image files - use exact hash filenames  
❌ **Don't** manually edit `vite.config.ts` unless needed  
❌ **Don't** commit `.env` files with real API keys  
❌ **Don't** use Figma Make's "Sync to GitHub" for binary images

✅ **Do** export images from browser with exact filenames  
✅ **Do** verify images before committing (`file` command)  
✅ **Do** commit images to git (not ignored)  
✅ **Do** push from local repo to GitHub → Vercel auto-deploys

## 📚 Additional Files

- **ATTRIBUTIONS.md** - Credits for tools, libraries, and resources
- **README.md** - Project overview and development guide
- **guidelines/Guidelines.md** - Development guidelines

## ✅ Final Checklist

Before deploying:

- [ ] All 20 images are in `/src/assets/`
- [ ] Images have exact hash filenames (see list above)
- [ ] Images are binary files (not base64 text)
- [ ] All images are committed to git
- [ ] Code changes are committed
- [ ] Pushed to GitHub
- [ ] Vercel deployment successful

---

**Need help?** Check the troubleshooting section above or review the build logs in Vercel.
