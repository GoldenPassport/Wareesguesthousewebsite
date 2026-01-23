# Image Assets Directory

This directory contains all image assets for Waree's Guesthouse website.

## How It Works

The website uses `figma:asset` imports in the code, which:
- **In Figma Make (dev mode)**: Automatically loads images from Figma's asset system
- **In Vercel (production)**: The Vite plugin transforms these imports to load from this directory

## Required Image Files

Place the following image files in this directory with these exact filenames:

### Logo & Branding
- `302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png` - Waree's Guesthouse logo (bird & key)

### Host & Family Photos
- `d873a09b9daa74b19fd6bfcd9d5107923506e80f.png` - Host photo
- `a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84.png` - Hosts group photo

### Room Photos
- `fe90856b4d0401840ae1c7eae87b65bf4a9d0967.png` - Bathroom shower
- `c8eb8834474b6ee7e9b14931d4731257b7f460f4.png` - Bathroom sink
- `afcf207372169cde9fed998c2cab3df10bf19418.png` - Balcony view
- `4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3.png` - Balcony seating
- `ae87d5913824777f33e1cf7b1aa5bb9ff9e76937.png` - King bed room
- `e624635e32d87a6ef0d6605d63e4816d15a69a0a.png` - Room amenities
- `b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc.png` - Room with mirror
- `7535206b35eef49ec344fb3a87c9dd37de145c2e.png` - Room amenities wide
- `aaeceff6fe165faa2028b5c18597728bddcf2ac4.png` - Full room view

### Beach & Activity Photos
- `fd44587c767eb50f2741b29b66410e6e33ab7e5b.png` - Surfing photo
- `56c596cd5a33949f5e17a640ea10e1226770ea89.png` - Beach photo
- `4fc2e1b259bb7e4cf3619d1c04678de03d10b74f.png` - Viewpoint photo
- `5ed0347ef6ba377b3aed014e82457f62f67c3b79.png` - Waterpark photo

### Guesthouse Photos
- `9103a84bcde1c52daa2a9cf0281a93994f92a2dc.png` - Courtyard
- `5ff9106bea6d26fc1b1053a02cfc36823470b9ce.png` - Entrance
- `87e0980cb43c2b86fabd01026a648813efa362af.png` - Street view
- `b5e500c11743141ce9c535bfc9fc16c8222d03ca.png` - Front sign

## For Deployment

Before deploying to Vercel:
1. Export all images from your Figma file
2. Save them to this directory with the exact filenames listed above
3. Commit and push to Git
4. Deploy to Vercel

The Vite plugin (`/vite-plugin-figma-assets.ts`) will automatically handle the import transformation.
