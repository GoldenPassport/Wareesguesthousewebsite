# Vercel Deployment Guide for Waree's Guesthouse Website

## ✅ Automatic figma:asset Handling

The website now includes a Vite plugin that automatically transforms `figma:asset` imports for Vercel deployment!

### How It Works:
- **In Figma Make (dev)**: `figma:asset` imports work natively
- **In Vercel (production)**: The plugin transforms them to load from `/src/app/assets/`

## 🚀 Deploy to Vercel

### Step 1: Add Image Files

1. Export all images from your Figma file (or download from Figma Make)
2. Place them in `/src/app/assets/` with the exact filenames shown in `/src/app/assets/README.md`
3. See the README for the complete list of required filenames

### Step 2: Commit Changes to Git

```bash
git add .
git commit -m "Add image assets for Vercel deployment"
git push origin main
```

### Step 3: Deploy on Vercel

1. Go to your Vercel dashboard
2. Click **"Deploy"** on the deployment configuration screen
3. Vercel will automatically:
   - Pull the latest code from GitHub
   - Run `npm install`
   - Run `npm run build` (or `vite build`)
   - The Vite plugin transforms all `figma:asset` imports
   - Deploy the `dist` folder

### Step 4: Verify Deployment

Once deployed, verify:
- ✅ Website loads correctly
- ✅ All images display from `/src/app/assets/`
- ✅ Language switcher works
- ✅ Cookie consent banner appears
- ✅ All navigation and links work

## 📸 Image Assets Setup

Before deployment, ensure all image files are in `/src/app/assets/`:

**Required files** (20 total):
- Logo: 1 file
- Host photos: 2 files  
- Room photos: 9 files
- Activity photos: 4 files
- Guesthouse photos: 4 files

See `/src/app/assets/README.md` for exact filenames.

## ⚙️ Vercel Configuration

The `vercel.json` file is configured with:
- ✅ Build command: `vite build`
- ✅ Output directory: `dist`
- ✅ SPA routing support
- ✅ Cache optimization for assets

The `vite-plugin-figma-assets.ts` handles automatic import transformation.

## 🌍 Custom Domain (Optional)

To add a custom domain like `wareeguesthouse.com`:

1. Go to your Vercel project settings
2. Click **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate provisioning (automatic)

## 🔧 Environment Variables (If Needed)

If you add Google Analytics or other services later:

1. Go to Vercel project **Settings** → **Environment Variables**
2. Add variables like:
   - `VITE_GA_TRACKING_ID`
   - `VITE_API_KEY`
3. Redeploy for changes to take effect

## 📱 Features Included

✅ Multi-language support (8 languages)
✅ Cookie consent system
✅ SEO optimization with meta tags
✅ Responsive design (mobile & desktop)
✅ Fast page loads with Vite
✅ Automatic HTTPS on Vercel
✅ Automatic figma:asset transformation

## 🎉 You're Ready!

1. Add image files to `/src/app/assets/`
2. Commit and push to Git
3. Click **"Deploy"** in Vercel
4. Your site will be live in minutes!