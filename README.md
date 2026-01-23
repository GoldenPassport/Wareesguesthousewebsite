# Waree's Guesthouse Website

A family-run B&B website in Kata Beach, Phuket, operated by Anna, Josh, Mam, and Fin since 2000.

## 🚀 Quick Start

### Local Development (Figma Make)

The site runs in Figma Make with live preview. Images load automatically via `figma:asset` imports.

### Deploy to Vercel

```bash
# 1. Export images from Figma Make
#    Right-click each image → Save As → /src/assets/

# 2. Verify images are valid binary files
npm run verify-images

# 3. Fix corrupted images (if needed)
npm run fix-images

# 4. Build and deploy
git add .
git commit -m "Deploy to Vercel"
git push

# 5. Set up analytics (optional)
#    Add environment variables in Vercel Dashboard:
#    - VITE_GA_MEASUREMENT_ID (Google Analytics)
#    - VITE_FB_PIXEL_ID (Facebook/Instagram Pixel)
#    See DEPLOYMENT.md for details
```

## 📁 Project Structure

```
warees-guesthouse/
├── src/
│   ├── assets/              # 20 image files (binary PNG or JPEG)
│   ├── app/
│   │   ├── components/      # React components
│   │   ├── App.tsx          # Main app component
│   │   └── routes.ts        # React Router config
│   ├── config/              # Site configuration
│   ├── contexts/            # React contexts (language, etc.)
│   ├── hooks/               # Custom React hooks
│   └── styles/              # CSS styles
├── scripts/
│   ├── fix_image_assets.js  # Auto-fix corrupted images
│   └── verify-images.sh     # Verify image integrity
└── vite.config.ts           # Vite build config with image handling
```

## 🛠️ Available Scripts

```bash
npm run build              # Build for production
npm run verify-images      # Verify all images are valid
npm run fix-images         # Fix corrupted base64 images
```

## 📸 Image Management

### The Challenge

Images exported from Figma Make to GitHub can become corrupted as base64-encoded text instead of binary files. We've built a comprehensive solution:

### Solutions Implemented

1. **Auto-Fix Script** (`npm run fix-images`)
   - Detects base64-encoded text files
   - Decodes to binary images
   - Automatically fixes extensions (.png ↔ .jpg)

2. **Build-Time Validation** (in `vite.config.ts`)
   - Detects corrupted images during build
   - Auto-converts between .png and .jpg extensions
   - Fails with helpful error messages

3. **Git Configuration** (`.gitattributes`)
   - Ensures images are always treated as binary
   - Prevents line-ending corruption

### Quick Image Verification

```bash
# Check all images are valid binary files
npm run verify-images

# Count images (should be 20)
ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l

# Check file types (should show "JPEG" or "PNG", NOT "ASCII")
file src/assets/*.{png,jpg} 2>/dev/null | head -5
```

## 🌍 Multi-Language Support

The site supports 8 languages:
- English (default)
- Thai
- Chinese (Simplified)
- Russian
- German
- Italian
- Swedish
- Finnish

Language switching is handled by the `LanguageSwitcher` component.

## 🎨 Design System

- **Colors:** Orange (`#FF6B35`), Teal (`#008B8B`), Light Blue (`#87CEEB`)
- **Logo:** Bird and key design
- **Typography:** Modern, clean, readable fonts
- **Style:** Warm, welcoming, family-friendly

## 📋 Key Features

- ✅ Multi-language support (8 languages)
- ✅ Responsive design (mobile & desktop)
- ✅ AirBNB integration (Superhost badges, ratings)
- ✅ Photo gallery with lightbox
- ✅ Room showcase with carousel
- ✅ Interactive map and directions
- ✅ Contact information and booking CTAs
- ✅ Cookie policy compliance
- ✅ SEO optimized

## 🔧 Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 6.3
- **Styling:** Tailwind CSS 4.1
- **Routing:** React Router 7
- **UI Components:** Radix UI, Material UI
- **Animations:** Motion (formerly Framer Motion)
- **Icons:** Lucide React
- **Carousel:** Embla Carousel

## 📚 Documentation

- **[QUICK-DEPLOY-GUIDE.md](./QUICK-DEPLOY-GUIDE.md)** - Fast deployment reference
- **[README-DEPLOYMENT.md](./README-DEPLOYMENT.md)** - Complete deployment guide
- **[FIGMA_EXPORT_GUIDE.md](./FIGMA_EXPORT_GUIDE.md)** - How to export images correctly
- **[IMAGE_FIX_SUMMARY.md](./IMAGE_FIX_SUMMARY.md)** - Technical details of image fix
- **[EXPORT-IMAGES.md](./EXPORT-IMAGES.md)** - List of all 20 required images

## ⚠️ Common Issues

### Build fails with "Missing asset file"
```bash
# Export the missing image from Figma Make to /src/assets/
# See EXPORT-IMAGES.md for the complete list
```

### Build fails with "Corrupted image file"
```bash
npm run fix-images
# OR re-export from Figma Make
```

### Images not loading on deployed site
```bash
# 1. Verify images are committed to git
git ls-files src/assets/

# 2. Verify they're binary (not text)
file src/assets/*.{png,jpg}

# 3. Re-commit if needed
git add src/assets/ && git commit -m "Fix images"
```

## 🚢 Deployment

The site automatically deploys to Vercel on push to the `main` branch.

### Pre-Deploy Checklist

- [ ] All 20 images in `/src/assets/` are valid binary files
- [ ] Images are committed to git
- [ ] `npm run verify-images` passes
- [ ] `npm run build` succeeds locally

### Deploy Process

1. Vercel detects push to GitHub
2. Runs `npm install`
3. Runs `npm run build` (includes image validation)
4. Deploys to production if build succeeds

## 🎯 Project Goals

- **Primary:** Drive bookings through AirBNB
- **Secondary:** Showcase excellent reviews (4.83★, Superhost)
- **Tertiary:** Reflect authentic, warm, family-feel atmosphere

## 👥 About Waree's Guesthouse

Operated by Anna, Josh, Mam, and Fin since 2000. Located in Kata Beach, Phuket. Known for:
- Authentic local experiences
- Warm hospitality
- Budget-friendly "2 star" honest approach
- AirBNB Superhost status
- "Guest Favorite" designation

## 📞 Contact

- **Email:** info@wareesguesthouse.com
- **Phone:** +66 XX XXX XXXX
- **Location:** Kata Beach, Phuket, Thailand
- **AirBNB:** [Link to listing]

## 📝 License

Private - © 2024 Waree's Guesthouse

---

**Need help?** See the documentation files listed above or contact the development team.
