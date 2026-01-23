# Vercel Deployment Guide for Waree's Guesthouse Website

## ✅ Pre-Deployment Checklist Complete

All `figma:asset` imports have been replaced with standard image imports from `/src/assets/images.ts`.

## 🚀 Deploy to Vercel

### Step 1: Commit Changes to Git

```bash
git add .
git commit -m "Fixed Vercel deployment - replaced figma:asset imports"
git push origin main
```

### Step 2: Deploy on Vercel

1. Go to your Vercel dashboard
2. Click **"Deploy"** on the deployment configuration screen
3. Vercel will automatically:
   - Pull the latest code from GitHub
   - Run `npm install`
   - Run `npm run build` (or `vite build`)
   - Deploy the `dist` folder

### Step 3: Verify Deployment

Once deployed, verify:
- ✅ Website loads correctly
- ✅ All images display (currently using placeholder images from Unsplash)
- ✅ Language switcher works
- ✅ Cookie consent banner appears
- ✅ All navigation and links work

## 📸 Important: Replace Placeholder Images

The current deployment uses **placeholder images from Unsplash**. For the final production site:

1. **Collect your actual photos**:
   - Logo (120x120px recommended)
   - Host/family photos
   - Room photos
   - Beach and activity photos
   - Guesthouse exterior photos

2. **Update `/src/assets/images.ts`**:
   - Replace all Unsplash URLs with your actual image URLs
   - Or upload images to a CDN (like Cloudinary, imgix, or Vercel itself)

3. **Example**:
```typescript
// Replace this:
export const logo = "https://images.unsplash.com/...";

// With your actual image:
export const logo = "https://your-cdn.com/waree-logo.png";
```

## ⚙️ Vercel Configuration

The `vercel.json` file is already configured with:
- ✅ Build command: `vite build`
- ✅ Output directory: `dist`
- ✅ SPA routing support
- ✅ Cache optimization for assets

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

## 🎉 You're Ready!

Click **"Deploy"** in Vercel and your site will be live in minutes!
