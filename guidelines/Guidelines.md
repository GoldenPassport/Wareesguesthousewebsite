# Waree's Guesthouse - Project Guidelines

## Documentation Philosophy

**Minimal Documentation - Single Source of Truth**

- All project documentation lives in this file ONLY
- No separate markdown files for features, deployment, or setup
- Keep documentation concise and action-oriented
- Update this file when adding new features or changing workflows
- Avoid redundancy - document once, reference when needed

---

## Deployment Workflow

### Quick Deploy (3 Steps)

```bash
git add .
git commit -m "Update website"
git push  # Vercel auto-deploys
```

The build system automatically handles image format conversions and base64 corruption.

### Environment Variables (Optional Analytics)

Add in Vercel Dashboard → Settings → Environment Variables:
- `VITE_GA_MEASUREMENT_ID` (format: `G-XXXXXXXXXX`)
- `VITE_FB_PIXEL_ID` (numeric ID)

Analytics ONLY load if BOTH env vars are set AND user accepts cookies.
Get IDs from [Google Analytics](https://analytics.google.com/) and [Meta Events Manager](https://business.facebook.com/events_manager).

---

## Image Assets (20 Required)

All images must be in `/src/assets/` with exact hash filenames.
Can be saved as `.png` OR `.jpg` - build system auto-converts.

### Export from Figma Make

1. Open Figma Make in browser
2. Right-click each image → "Save Image As..."
3. Save to `/src/assets/` with exact hash filename
4. Commit and push

### Verify Images

```bash
# Check count (should be 20)
ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l

# Check binary format (not corrupted)
file src/assets/*.{png,jpg} 2>/dev/null | head -5
```

### Fix Corrupted Images

```bash
node scripts/fix_image_assets.js
git add src/assets/
git commit -m "Fix image assets"
git push
```

---

## Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── analytics.tsx    # Google Analytics & Meta Pixel (cookie-gated)
│   │   ├── cookie-consent.tsx
│   │   └── ...
│   └── App.tsx
├── assets/                  # 20 image files (png/jpg)
├── config/
│   └── siteConfig.ts        # Contact info, SEO metadata
├── contexts/
│   └── language-context.tsx # i18n context
├── translations/            # 8 language translations
│   ├── index.ts
│   └── cookies.ts
└── styles/
```

---

## Key Features

### Multi-language Support (8 Languages)
English, Thai, Chinese, Russian, German, Italian, Swedish, Finnish
- Configured in `/src/translations/index.ts`

### Cookie Consent & Analytics
- EU GDPR compliant cookie banner
- Analytics (Google Analytics + Meta Pixel) only load when user accepts cookies
- Component: `/src/app/components/cookie-consent.tsx`
- Analytics: `/src/app/components/analytics.tsx`

**How Cookie Consent Works:**
1. Banner appears on first visit (1 second delay)
2. User can Accept, Decline, or Learn More
3. Choice saved in `localStorage` as `cookie-consent` = `accepted` or `declined`
4. When user accepts: Page reloads to initialize analytics scripts
5. When user declines: No analytics scripts load

**Google Analytics Consent Mode Integration:**
- Default consent state: `denied` for all analytics/ad storage
- When cookies accepted: Consent updated to `granted` via `gtag('consent', 'update')`
- Consent mode script loads BEFORE GA to ensure proper tracking
- Real-time consent updates when user changes settings

**Cookie Settings Button:**
- Located in footer
- Removes consent choice and reloads page
- Allows users to change their decision anytime

**Analytics Event Tracking:**
- All tracking respects cookie consent
- `trackEvent` helper functions check consent before firing
- Events: booking clicks, contact clicks, room views, language changes, etc.
- See `/src/app/components/analytics.tsx` for all available events

**AirBNB Booking Tracking:**
- All AirBNB links have unique IDs and UTM parameters
- Tracking IDs: `hero_primary_cta`, `airbnb_highlights_cta`, `rooms_section_cta`, `reviews_section_cta`, `gallery_section_cta`, `footer_link`
- UTM parameters automatically added: `utm_source=wareeguesthouse_website`, `utm_medium=referral`, `utm_campaign=direct_booking`
- Data attributes on all buttons for enhanced tracking

### SEO Optimization
- Meta tags per language
- Structured data, Open Graph, Twitter Cards
- Configured in `/src/config/siteConfig.ts`
- Component: `/src/app/components/seo-head.tsx`

### Contact Information
Centralized in `/src/config/siteConfig.ts`:
- Email: wareesguesthouse@gmail.com
- Phone: +66 76 331 016
- Address: 44/5 Kata Road, Karon, Phuket 83100, Thailand

---

## Build System

### Auto Extension Conversion
- Code imports `.png` but only `.jpg` exists → Uses `.jpg`
- Code imports `.jpg` but only `.png` exists → Uses `.png`
- No need to update component imports

### Auto Base64 Decoding
- Build detects base64-encoded images
- Automatically decodes to binary during build
- Detects format from magic bytes
- Emits correct binary asset to `dist/`

### Git Binary Handling
`.gitattributes` ensures images are never corrupted:
```gitattributes
*.png binary
*.jpg binary
*.jpeg binary
```

---

## Common Mistakes to Avoid

❌ Don't rename image files - use exact hash filenames  
❌ Don't manually edit `vite.config.ts` unless needed  
❌ Don't commit `.env` files with real API keys  
❌ Don't use Figma Make's "Sync to GitHub" for binary images

✅ Do export images from browser with exact filenames  
✅ Do verify images before committing (`file` command)  
✅ Do commit images to git (not ignored)  
✅ Do push from local repo to GitHub → Vercel auto-deploys

---

## Troubleshooting

### Build Fails: "Missing asset file"
```bash
# Check image count
ls -1 src/assets/*.{png,jpg} 2>/dev/null | wc -l
# Should be 20. If not, export missing images from Figma Make
```

### Build Fails: "Corrupted image file detected"
```bash
node scripts/fix_image_assets.js
git add src/assets/
git commit -m "Fix corrupted images"
git push
```

### Images Not Displaying on Deployed Site
```bash
# Check images are committed
git ls-files src/assets/ | wc -l  # Should be 20

# Check images are binary
file src/assets/*.{png,jpg} 2>/dev/null  # Should NOT show "ASCII text"
```

### Analytics Not Loading
```javascript
// Check cookie consent
localStorage.getItem('cookie-consent')  // Should be "accepted"

// Check env vars
console.log(import.meta.env.VITE_GA_MEASUREMENT_ID);
console.log(import.meta.env.VITE_FB_PIXEL_ID);

// Check scripts loaded
console.log(typeof window.gtag);  // Should be "function"
console.log(typeof window.fbq);   // Should be "function"
```

---

## Design Guidelines

### Brand Identity
- **Colors:** Orange (#FF6B35), Teal (#0A9396), Light Blue (#94D2BD)
- **Logo:** Bird and key design (302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png)
- **Tone:** Warm, authentic, family-run hospitality
- **Target:** Budget travelers seeking genuine local experiences

### Messaging
- Emphasize "family feel" atmosphere
- Honest "2-star" budget-friendly approach
- Highlight AirBNB Superhost status (4.83 rating)
- Showcase "Guest Favorite" designation
- Focus on authentic local experiences over luxury

### Multi-language Considerations
- All text must be translatable
- No hard-coded strings in components
- Use translation keys from `/src/translations/index.ts`
- Cookie policy translations in `/src/translations/cookies.ts`

---

## NPM Scripts

```json
{
  "build": "vite build",                    // Production build (Vercel runs this)
  "verify-images": "bash scripts/verify-images.sh",  // Check images locally
  "fix-images": "node scripts/fix_image_assets.js"   // Fix corrupted images
}
```

---

## Pre-Deployment Checklist

- [ ] All 20 images in `/src/assets/` with exact hash filenames
- [ ] Images are binary files (not base64 text)
- [ ] All images committed to git
- [ ] Code changes committed
- [ ] Pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Analytics env vars configured (if using)

---

**System Status:**
✅ Vite build plugin with auto `.png` ↔ `.jpg` conversion  
✅ Auto-decode base64 images during build  
✅ Fix script at `/scripts/fix_image_assets.js`  
✅ Git binary handling in `.gitattributes`  
✅ Cookie-gated analytics (Google Analytics + Meta Pixel)  
✅ Multi-language support (8 languages)  
✅ SEO optimization with structured data