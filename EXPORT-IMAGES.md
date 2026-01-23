# How to Export Images from Figma Make for Vercel Deployment

**IMPORTANT:** These images must be exported from Figma Make and placed in `/src/assets/` before deploying to Vercel.

## Quick Export Method (Recommended)

1. **Open Figma Make in your browser** where the website is currently working
2. **Right-click on any image** on the page → "Save Image As..." or "Open Image in New Tab" → Save
3. **CRITICAL:** Save each file with its **exact hash filename** (listed below)
4. **Save all files to** `/src/assets/` directory

## Complete List of 20 Required Images

Copy each filename exactly (case-sensitive):

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

## Verification

After adding all images, verify:

```bash
# Check you have all 20 files
ls -1 src/assets/*.png | wc -l
# Should output: 20
```

## Deploy to Vercel

Once all images are in place:

```bash
git add src/assets/*.png
git commit -m "Add production images for Vercel deployment"
git push
```

Then trigger a new Vercel deployment!