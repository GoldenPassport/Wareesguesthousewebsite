# Figma Image Export Guide for Vercel Deployment

## Critical: Preventing Corrupted Image Assets

**IMPORTANT:** Images exported from Figma must be saved as **binary image files**, NOT as base64-encoded text. This guide ensures images are exported correctly.

## What Went Wrong Previously

Previously, images were synced from Figma to GitHub as **base64-encoded text files** instead of binary image files. This caused:
- Images appearing as ASCII text (starting with `/9j/4AAQSkZJRg...`)
- Files with `.png` extension containing JPEG data in base64 format
- Build failures and broken image displays

## Correct Export Method

### Step 1: Export from Figma Desktop App (Recommended)

1. **Open Figma Desktop App** (not browser)
2. Select the image/frame you want to export
3. In the right sidebar, click the **Export** section
4. Click **+** to add an export setting
5. Choose format: **PNG** or **JPG** (use JPG for photos, PNG for logos/transparency)
6. Click **Export [filename]** button
7. **CRITICAL:** When the save dialog appears, ensure:
   - File type is set to the correct image format (PNG Image or JPEG Image)
   - The file extension matches the format (`.png` or `.jpg`)
   - Save directly to `/src/assets/` with the exact hash filename

### Step 2: Export from Figma Browser (Alternative)

If using Figma in browser:

1. Right-click on the image/frame
2. Select **Copy/Paste as** → **Copy as PNG** or **Copy as JPEG**
3. Open an image editor (Preview on Mac, Paint on Windows, or GIMP)
4. Paste the image
5. **File → Save As**
6. **CRITICAL:** 
   - Choose format: **PNG** or **JPEG** (not "All Files" or "Text")
   - Save with the exact hash filename to `/src/assets/`
   - Verify the file is saved as binary (check file size - should be reasonable, not tiny)

### Step 3: Verify Image Files

After exporting, verify each file is a valid binary image:

```bash
# Check file type (should show "PNG image" or "JPEG image", NOT "ASCII text")
file src/assets/*.jpg src/assets/*.png

# Check file size (should be reasonable, e.g., 50KB-500KB for photos)
ls -lh src/assets/*.jpg src/assets/*.png

# Verify magic bytes (JPEG should start with FF D8 FF, PNG should start with 89 50 4E 47)
hexdump -C src/assets/[filename].jpg | head -1
```

**Red flags:**
- File type shows "ASCII text" → **WRONG** - file is corrupted
- File starts with `/9j/` or base64 characters → **WRONG** - file is base64 text
- File size is suspiciously small or large → **CHECK** - may be corrupted

## Required Image Files (20 total)

All images should be saved to `/src/assets/` with these exact filenames:

### Logo (1 image - use PNG for transparency)
- `302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.jpg` - Waree's Guesthouse logo

### About Section (2 images)
- `d873a09b9daa74b19fd6bfcd9d5107923506e80f.jpg` - Host photo
- `a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84.jpg` - Hosts group photo

### Rooms Gallery (9 images)
- `fe90856b4d0401840ae1c7eae87b65bf4a9d0967.jpg` - Bathroom shower
- `c8eb8834474b6ee7e9b14931d4731257b7f460f4.jpg` - Bathroom sink
- `afcf207372169cde9fed998c2cab3df10bf19418.jpg` - Balcony view
- `4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3.jpg` - Balcony seating
- `ae87d5913824777f33e1cf7b1aa5bb9ff9e76937.jpg` - King bed room
- `e624635e32d87a6ef0d6605d63e4816d15a69a0a.jpg` - Room amenities
- `b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc.jpg` - Room with mirror
- `7535206b35eef49ec344fb3a87c9dd37de145c2e.jpg` - Room amenities wide
- `aaeceff6fe165faa2028b5c18597728bddcf2ac4.jpg` - Full room view

### Photo Gallery (8 images)
- `fd44587c767eb50f2741b29b66410e6e33ab7e5b.jpg` - Surfing photo
- `56c596cd5a33949f5e17a640ea10e1226770ea89.jpg` - Beach photo
- `4fc2e1b259bb7e4cf3619d1c04678de03d10b74f.jpg` - Viewpoint photo
- `5ed0347ef6ba377b3aed014e82457f62f67c3b79.jpg` - Waterpark photo
- `9103a84bcde1c52daa2a9cf0281a93994f92a2dc.jpg` - Courtyard
- `5ff9106bea6d26fc1b1053a02cfc36823470b9ce.jpg` - Entrance
- `87e0980cb43c2b86fabd01026a648813efa362af.jpg` - Street view
- `b5e500c11743141ce9c535bfc9fc16c8222d03ca.jpg` - Front sign

## Pre-Commit Verification Script

Before committing images, run this verification:

```bash
# Run the fix script to check for corrupted images
node scripts/fix_image_assets.js

# Or manually verify:
for file in src/assets/*.{jpg,png}; do
  file_type=$(file "$file" | grep -o "PNG image\|JPEG image\|JPEG")
  if [[ -z "$file_type" ]]; then
    echo "ERROR: $file is not a valid image (may be corrupted)"
    exit 1
  fi
done
echo "All images are valid binary files"
```

## Build Process Integration

The Vite build process will:
1. Check for image files in `/src/assets/`
2. Transform `figma:asset/` imports to load from local files
3. Fail with clear error if image files are missing

**Note:** The build will NOT detect corrupted base64 text files. Always verify images before committing.

## Troubleshooting

### If images appear broken after deployment:

1. Check if files are binary: `file src/assets/*.jpg`
2. If files show "ASCII text", they're corrupted
3. Re-export from Figma using the correct method above
4. Run `node scripts/fix_image_assets.js` if needed (this script can fix base64-encoded files)

### If build fails with "Missing asset file":

1. Ensure all 20 image files are in `/src/assets/`
2. Verify filenames match exactly (case-sensitive)
3. Check file extensions match the format (`.jpg` for JPEG, `.png` for PNG)

## Best Practices

1. **Always export from Figma Desktop App** when possible (most reliable)
2. **Never copy-paste base64 data** directly into files
3. **Verify file type** after export: `file src/assets/[filename].jpg`
4. **Check file size** - corrupted files may be unusually small or large
5. **Use `.gitattributes`** - ensures Git treats images as binary (already configured)
6. **Run verification script** before committing image changes

## Quick Reference

```bash
# Verify all images are valid
file src/assets/*.{jpg,png} | grep -v "image" && echo "ERROR: Corrupted files found!"

# Count images (should be 20)
ls -1 src/assets/*.{jpg,png} 2>/dev/null | wc -l

# Fix corrupted base64 images (if needed)
node scripts/fix_image_assets.js
```
