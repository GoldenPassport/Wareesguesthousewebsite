# Quick Deploy Guide - Waree's Guesthouse

## 🎯 Current Status

✅ **Vite plugin enhanced** with auto-conversion between `.png` ↔ `.jpg`  
✅ **Base64 corruption detection** built into build process  
✅ **Auto-fix script available** at `/scripts/fix_image_assets.js` (ES Module)  
✅ **Git binary handling configured** in `.gitattributes`

## 🚀 Deploy Workflow

### Option 1: Direct Export (Cleanest Method)

1. **Export images from Figma Make browser:**
   - Right-click each image → "Save Image As..."
   - Save to `/src/assets/` with exact hash filename
   - Can save as either `.png` OR `.jpg` (plugin auto-converts!)

2. **Verify images are binary:**
   ```bash
   file src/assets/*.{png,jpg} 2>/dev/null | head -5
   ```
   Should show "JPEG image" or "PNG image", NOT "ASCII text"

3. **Commit and push:**
   ```bash
   git add src/assets/
   git commit -m "Update image assets"
   git push
   ```

4. **Vercel auto-deploys** ✨

### Option 2: Using the Fix Script (If Images Are Corrupted)

If images are already in `/src/assets/` but corrupted (base64 text):

```bash
# Run the auto-fix script
node scripts/fix_image_assets.js

# Commit fixed images
git add src/assets/
git commit -m "Fix corrupted image assets"
git push
```

## 🔍 Troubleshooting

### Build fails with "Missing asset file"?
- Check 20 images exist: `ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l`
- Should return 20

### Build fails with "Corrupted image file detected"?
- Run: `node scripts/fix_image_assets.js`
- OR re-export from Figma Make

### Images not displaying on deployed site?
- Check images are committed: `git ls-files src/assets/ | wc -l` (should be 20)
- Check they're binary: `file src/assets/*.{png,jpg}` (should NOT show "ASCII text")

## 📋 Required Files (20 total)

All go in `/src/assets/` with these exact names (can be `.png` OR `.jpg`):

### Logo (1)
- `302a78d8be4e75fe5f3bef65f80ada9b7aeb0688` (.png or .jpg)

### About (2)
- `d873a09b9daa74b19fd6bfcd9d5107923506e80f` (.png or .jpg)
- `a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84` (.png or .jpg)

### Rooms (9)
- `fe90856b4d0401840ae1c7eae87b65bf4a9d0967` (.png or .jpg)
- `c8eb8834474b6ee7e9b14931d4731257b7f460f4` (.png or .jpg)
- `afcf207372169cde9fed998c2cab3df10bf19418` (.png or .jpg)
- `4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3` (.png or .jpg)
- `ae87d5913824777f33e1cf7b1aa5bb9ff9e76937` (.png or .jpg)
- `e624635e32d87a6ef0d6605d63e4816d15a69a0a` (.png or .jpg)
- `b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc` (.png or .jpg)
- `7535206b35eef49ec344fb3a87c9dd37de145c2e` (.png or .jpg)
- `aaeceff6fe165faa2028b5c18597728bddcf2ac4` (.png or .jpg)

### Gallery (8)
- `fd44587c767eb50f2741b29b66410e6e33ab7e5b` (.png or .jpg)
- `56c596cd5a33949f5e17a640ea10e1226770ea89` (.png or .jpg)
- `4fc2e1b259bb7e4cf3619d1c04678de03d10b74f` (.png or .jpg)
- `5ed0347ef6ba377b3aed014e82457f62f67c3b79` (.png or .jpg)
- `9103a84bcde1c52daa2a9cf0281a93994f92a2dc` (.png or .jpg)
- `5ff9106bea6d26fc1b1053a02cfc36823470b9ce` (.png or .jpg)
- `87e0980cb43c2b86fabd01026a648813efa362af` (.png or .jpg)
- `b5e500c11743141ce9c535bfc9fc16c8222d03ca` (.png or .jpg)

## 💡 Key Features

### Auto Extension Conversion
The Vite plugin automatically handles extension mismatches:
- Code imports `.png` but only `.jpg` exists → Uses `.jpg` ✅
- Code imports `.jpg` but only `.png` exists → Uses `.png` ✅
- No need to update component imports!

### Base64 Corruption Detection
Build will fail with helpful error if images are corrupted:
```
❌ Corrupted image file detected: [filename]
   The file appears to contain base64-encoded text instead of binary image data.
   
   To fix:
   1. Re-export from Figma Desktop App
   2. Or run: node scripts/fix_image_assets.js
```

## 📚 More Info

- **Detailed export guide:** `/FIGMA_EXPORT_GUIDE.md`
- **Technical details:** `/IMAGE_FIX_SUMMARY.md`
- **Fix script source:** `/scripts/fix_image_assets.js`