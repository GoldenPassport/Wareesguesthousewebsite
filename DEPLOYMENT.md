# Deployment Workflow for Waree's Guesthouse Website

## 🚨 Important: Image Corruption Issue

**Problem:** When using Figma Make's built-in "Sync to GitHub" feature, binary image files (PNG, JPG, etc.) can become corrupted.

**Solution:** Always use the manual workflow below.

## ✅ Correct Deployment Workflow

### Step 1: Export Images from Figma Make (One-time setup)

1. **Open the website in Figma Make** (in your browser where it's working correctly)
2. **Right-click each image** → "Save Image As..." or "Open Image in New Tab" → Save
3. **Save to your LOCAL repository** at `/src/assets/` with exact hash filenames
4. See `/EXPORT-IMAGES.md` for the complete list of 20 required image filenames

### Step 2: Sync Code Changes from Figma Make

When you make code changes in Figma Make:

**Option A: Manual File Copy (Recommended for binary files)**
1. Copy the changed code files from Figma Make
2. Paste into your local repository
3. Proceed to Step 3

**Option B: Use Figma Make Sync (OK for code, NOT for images)**
1. Use Figma Make's "Sync to GitHub" feature
2. **BEFORE deploying**, verify images in `/src/assets/` are not corrupted:
   ```bash
   # Check file sizes - they should be reasonable (not 0 bytes or tiny)
   ls -lh src/assets/*.png
   ```
3. **If images are corrupted**, re-copy them from your local backup or re-download from Figma Make

### Step 3: Deploy from Local Repository

From your local git repository:

```bash
# Verify you're on the main branch
git status

# Add all changes (code + images)
git add .

# Commit with a descriptive message
git commit -m "Update website content and images"

# Push to GitHub
git push origin main
```

### Step 4: Vercel Auto-Deploy

Vercel will automatically detect the GitHub push and deploy your changes.

## 🔧 Troubleshooting

### Images not loading on Vercel deployment?

1. **Check image files exist locally:**
   ```bash
   ls -1 src/assets/*.png | wc -l
   # Should return: 20
   ```

2. **Check file sizes are reasonable:**
   ```bash
   ls -lh src/assets/*.png
   # Each file should be multiple KB or MB, not 0 bytes
   ```

3. **Verify images are committed to git:**
   ```bash
   git ls-files src/assets/*.png | wc -l
   # Should return: 20
   ```

4. **If images are corrupted or missing:**
   - Re-download them from Figma Make (see Step 1)
   - Commit and push again

### Binary files getting corrupted?

The `.gitattributes` file ensures binary files are handled correctly:

```gitattributes
*.png binary
*.jpg binary
*.jpeg binary
```

This tells git to never perform text conversion on these files.

## 📦 What Gets Deployed

- **Source code:** `/src/**/*.tsx`, `/src/**/*.ts`, `/src/**/*.css`
- **Images:** `/src/assets/*.png` (20 files)
- **Config:** `/vite.config.ts`, `/package.json`, `/tsconfig.json`
- **Public assets:** Any files in `/public/` if they exist

## 🎯 Summary

**Golden Rule:** 
- ✅ Code changes: Can sync through Figma Make
- ❌ Image files: NEVER sync through Figma Make, always handle via local git
- ✅ Deployment: Always push from local git repository to GitHub → Vercel auto-deploys
