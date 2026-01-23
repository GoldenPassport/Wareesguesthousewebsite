# Figma Export Prompt for Vercel Build

## Quick Reference: Exporting Images from Figma

**CRITICAL:** Images must be exported as **binary files**, NOT base64 text.

### Correct Method (Figma Desktop App)

1. Select image/frame in Figma
2. Right sidebar → **Export** section
3. Click **+** → Choose format (PNG or JPG)
4. Click **Export [filename]**
5. **Save dialog:** Ensure file type is "PNG Image" or "JPEG Image" (NOT "All Files" or "Text")
6. Save to `/src/assets/` with exact hash filename (see list below)

### Verification After Export

```bash
# Check file is binary (should show "JPEG image" or "PNG image")
file src/assets/[filename].jpg

# If it shows "ASCII text" → file is corrupted, re-export
```

### Required Files (20 images)

All files go in `/src/assets/` with these exact names:

**Logo:**
- `302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.jpg`

**About (2):**
- `d873a09b9daa74b19fd6bfcd9d5107923506e80f.jpg`
- `a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84.jpg`

**Rooms (9):**
- `fe90856b4d0401840ae1c7eae87b65bf4a9d0967.jpg`
- `c8eb8834474b6ee7e9b14931d4731257b7f460f4.jpg`
- `afcf207372169cde9fed998c2cab3df10bf19418.jpg`
- `4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3.jpg`
- `ae87d5913824777f33e1cf7b1aa5bb9ff9e76937.jpg`
- `e624635e32d87a6ef0d6605d63e4816d15a69a0a.jpg`
- `b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc.jpg`
- `7535206b35eef49ec344fb3a87c9dd37de145c2e.jpg`
- `aaeceff6fe165faa2028b5c18597728bddcf2ac4.jpg`

**Gallery (8):**
- `fd44587c767eb50f2741b29b66410e6e33ab7e5b.jpg`
- `56c596cd5a33949f5e17a640ea10e1226770ea89.jpg`
- `4fc2e1b259bb7e4cf3619d1c04678de03d10b74f.jpg`
- `5ed0347ef6ba377b3aed014e82457f62f67c3b79.jpg`
- `9103a84bcde1c52daa2a9cf0281a93994f92a2dc.jpg`
- `5ff9106bea6d26fc1b1053a02cfc36823470b9ce.jpg`
- `87e0980cb43c2b86fabd01026a648813efa362af.jpg`
- `b5e500c11743141ce9c535bfc9fc16c8222d03ca.jpg`

### Build Integration

The Vercel build will:
- ✅ Validate images are binary (not base64 text)
- ✅ Fail with clear error if corrupted images detected
- ✅ Transform `figma:asset/` imports automatically

**If build fails:** Check `FIGMA_EXPORT_GUIDE.md` for detailed troubleshooting.

### Quick Fix Script

If images are already corrupted (base64 text):
```bash
node scripts/fix_image_assets.js
```

This automatically decodes base64 and creates correct binary files.

---

**See `FIGMA_EXPORT_GUIDE.md` for complete instructions.**
