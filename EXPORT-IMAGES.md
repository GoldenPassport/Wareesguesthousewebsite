# How to Export Images from Figma Make

## Option 1: Export from Figma Make Preview

Since the images are currently working in Figma Make:

1. **Open your browser's Developer Tools** (F12 or Right-click → Inspect)
2. **Go to the Network tab**
3. **Filter by "Img"**
4. **Refresh the page** (or scroll through the website to load all images)
5. **Right-click each image in the Network tab** → "Open in new tab"
6. **Save each image** with its figma:asset filename:
   - Example: Save as `302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png`
7. **Place all files in** `/src/app/assets/`

## Option 2: Export from Original Figma File

If you have the original Figma design file:

1. **Open the Figma file** in Figma.com
2. **Select each image/frame** you want to export
3. **In the right panel**: Click "Export" → Choose "PNG" format
4. **Export and rename** each file to match the hash filenames
5. **Place in** `/src/app/assets/`

## Option 3: Use Figma Make's Export Feature

If Figma Make has an export feature:

1. Look for an **"Export"** or **"Download"** button in Figma Make
2. Export all assets
3. Rename files to match the required filenames
4. Place in `/src/app/assets/`

## Required Filenames Reference

See `/src/app/assets/README.md` for the complete list of 20 required filenames.

## After Exporting

Once all 20 image files are in `/src/app/assets/`:

```bash
# Verify you have all files
ls -la src/app/assets/*.png | wc -l
# Should show: 20

# Commit and push
git add src/app/assets/*.png
git commit -m "Add exported images for Vercel deployment"
git push origin main
```

Then deploy to Vercel!
