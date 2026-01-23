# Analytics Guide - Waree's Guesthouse

Complete guide for setting up and using Google Analytics and Facebook/Instagram Pixel tracking.

## 🎯 Overview

The website supports two analytics platforms:

1. **Google Analytics 4 (GA4)** - Track website traffic, user behavior, conversions
2. **Meta Pixel (Facebook/Instagram)** - Track conversions, create custom audiences, retargeting

Both are **optional** and only activate when environment variables are configured.

## 🔑 Environment Variables

### Required Variables

| Variable | Platform | Format | Example |
|----------|----------|--------|---------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics | `G-XXXXXXXXXX` | `G-ABC123DEF4` |
| `VITE_FB_PIXEL_ID` | Meta Pixel | Numeric ID | `1234567890123456` |

### Privacy & Cookie Compliance

✅ **Analytics respect cookie consent:**
- Scripts only load if environment variables are set
- Users can manage preferences via cookie consent banner
- GDPR/CCPA compliant when used with cookie consent system

## 📊 Setting Up Google Analytics

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon, bottom left)
3. Click **Create Property**
4. Fill in property details:
   - **Property name:** Waree's Guesthouse
   - **Reporting time zone:** Asia/Bangkok (GMT+7)
   - **Currency:** Thai Baht (THB)
5. Click **Next** → Select industry category → Click **Create**

### Step 2: Set Up Data Stream

1. After creating property, select **Web** platform
2. Enter website details:
   - **Website URL:** `https://wareeguesthouse.com`
   - **Stream name:** Waree's Guesthouse Website
3. Click **Create stream**
4. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add variable:
   - **Key:** `VITE_GA_MEASUREMENT_ID`
   - **Value:** Your Measurement ID (e.g., `G-ABC123DEF4`)
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
4. Click **Save**
5. Redeploy your site

### Step 4: Verify Installation

1. Visit your live website
2. Open Google Analytics → **Reports** → **Realtime**
3. You should see yourself as an active user
4. Check browser console (F12) - no GA errors should appear

## 📘 Setting Up Meta Pixel (Facebook/Instagram)

### Step 1: Create Meta Pixel

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Click **Connect Data Sources** → **Web** → **Meta Pixel**
3. Click **Get Started**
4. Enter Pixel name: `Waree's Guesthouse`
5. **Optional:** Enter website URL
6. Click **Continue**

### Step 2: Get Pixel ID

1. In Events Manager, click your newly created Pixel
2. Click **Settings** tab
3. **Copy the Pixel ID** (numeric, e.g., `1234567890123456`)

### Step 3: Add to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add variable:
   - **Key:** `VITE_FB_PIXEL_ID`
   - **Value:** Your Pixel ID (e.g., `1234567890123456`)
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
4. Click **Save**
5. Redeploy your site

### Step 4: Verify Installation

1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) Chrome extension
2. Visit your live website
3. Click the extension icon - should show green checkmark
4. Go to Events Manager → **Test Events** tab
5. Visit your website - events should appear in Test Events

## 📈 Tracked Events

The website automatically tracks these events:

### Standard Events (Both Platforms)

| Event | Description | Trigger |
|-------|-------------|---------|
| `page_view` | Page view | Automatic on page load |
| `booking_click` | Booking button clicked | User clicks AirBNB/Booking.com button |
| `contact_click` | Contact method used | Email, phone, WhatsApp, LINE, Facebook |
| `view_item` | Room viewed | User views room details |
| `view_gallery` | Photo gallery viewed | User opens photo gallery |
| `language_change` | Language switched | User changes website language |
| `social_click` | Social media clicked | Facebook, Instagram, TripAdvisor links |
| `view_reviews` | Reviews section viewed | User scrolls to reviews |

### Event Parameters

Events include useful parameters for analysis:

```javascript
// Example: Booking click
{
  platform: 'airbnb',  // or 'booking', 'email'
}

// Example: Contact click
{
  method: 'whatsapp',  // or 'phone', 'email', 'line', 'facebook'
}

// Example: Room view
{
  item_name: 'Standard Room',
  item_category: 'room'
}

// Example: Language change
{
  language: 'th'  // or 'en', 'zh', 'ru', 'de', 'it', 'sv', 'fi'
}
```

## 🛠️ Developer Guide

### Using Analytics in Components

Import the `trackEvent` helper:

```tsx
import { trackEvent } from '@/app/components/analytics';

// Track single platform
trackEvent.ga('event_name', { param: 'value' });
trackEvent.fb('event_name', { param: 'value' });

// Track both platforms
trackEvent.all('event_name', { param: 'value' });

// Use predefined events
trackEvent.bookingClick('airbnb');
trackEvent.contactClick('whatsapp');
trackEvent.roomView('Deluxe Room');
trackEvent.languageChange('th');
trackEvent.socialClick('facebook');
```

### Example: Track Button Click

```tsx
<button
  onClick={() => {
    trackEvent.bookingClick('airbnb');
    window.open('https://airbnb.com/...', '_blank');
  }}
>
  Book on AirBNB
</button>
```

### Adding Custom Events

Edit `/src/app/components/analytics.tsx`:

```typescript
export const trackEvent = {
  // ... existing events ...
  
  // Add custom event
  customEvent: (param1: string, param2: number) => {
    trackEvent.all('custom_event', { 
      custom_param1: param1,
      custom_param2: param2
    });
  }
};
```

## 🔒 Privacy & Compliance

### Cookie Consent Integration

Analytics automatically respect the cookie consent system:

1. **Before consent:** No analytics scripts load
2. **After consent:** Analytics activate based on user choice
3. **Decline:** Analytics remain disabled

### GDPR Compliance

✅ **Cookie banner** - Users can accept/decline cookies  
✅ **Cookie policy** - Full transparency about data collection  
✅ **Opt-out** - Users can decline analytics  
✅ **Data minimization** - Only essential tracking enabled  

### Data Retention

**Google Analytics:**
- Default: 14 months
- Configure in GA4 Admin → Data Settings → Data Retention

**Meta Pixel:**
- Default: 180 days
- Configure in Meta Events Manager → Settings → Data Retention

## 📋 Analytics Reports & Insights

### Key Metrics to Monitor

**Google Analytics 4:**
1. **Users** - Total visitors
2. **Sessions** - Website visits
3. **Engagement rate** - % of engaged sessions
4. **Bounce rate** - % of single-page visits
5. **Conversion rate** - % completing desired actions
6. **Top pages** - Most visited pages
7. **Traffic sources** - Where visitors come from
8. **Geographic data** - Visitor locations
9. **Device breakdown** - Mobile vs Desktop

**Meta Pixel:**
1. **Event counts** - How many events fired
2. **Custom audiences** - Create audiences for retargeting
3. **Conversions** - Track booking completions
4. **Attribution** - Which ads drive bookings

### Creating Custom Reports

**Google Analytics:**
1. Go to **Explore** tab
2. Create custom explorations
3. Add dimensions (country, device, language)
4. Add metrics (users, sessions, conversions)
5. Save report for future use

**Meta Ads Manager:**
1. Use Pixel data for ad targeting
2. Create Custom Audiences from website visitors
3. Set up Conversion campaigns
4. Track ROI from Facebook/Instagram ads

## 🧪 Testing Analytics

### Local Testing

```bash
# Create .env file (don't commit!)
cp .env.example .env

# Add test IDs
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FB_PIXEL_ID=1234567890123456

# Run development server
npm run dev
```

### Production Testing

**Google Analytics:**
1. Visit your website
2. Open browser console (F12)
3. Run: `window.gtag`
4. Should show function, not undefined

**Meta Pixel:**
1. Install Meta Pixel Helper extension
2. Visit your website
3. Extension icon should show green checkmark
4. Click icon to see fired events

### Debug Mode

**Google Analytics:**
```javascript
// In browser console
window.gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'manual_test',
  value: 1
});
```

**Meta Pixel:**
```javascript
// In browser console
window.fbq('track', 'TestEvent', {
  test_param: 'test_value'
});
```

## ❓ Troubleshooting

### Analytics Not Loading

**Check environment variables:**
```bash
# In Vercel Dashboard
Settings → Environment Variables → Verify IDs are correct
```

**Check browser console:**
```javascript
// Should show your IDs
console.log(import.meta.env.VITE_GA_MEASUREMENT_ID);
console.log(import.meta.env.VITE_FB_PIXEL_ID);
```

**Check network tab:**
- GA should load from `googletagmanager.com`
- FB should load from `connect.facebook.net`

### Events Not Firing

**Google Analytics:**
1. Check Realtime report
2. Wait 24-48 hours for data to appear in standard reports
3. Use GA Debugger extension

**Meta Pixel:**
1. Use Meta Pixel Helper extension
2. Check Test Events in Events Manager
3. Verify Pixel ID is correct

### Ad Blockers

Some users have ad blockers that prevent analytics:
- This is expected behavior
- Analytics will miss these users
- Typically affects 10-30% of traffic

## 📚 Additional Resources

**Google Analytics:**
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Event Tracking Guide](https://support.google.com/analytics/answer/9267735)

**Meta Pixel:**
- [Pixel Setup Guide](https://www.facebook.com/business/help/952192354843755)
- [Events Reference](https://developers.facebook.com/docs/meta-pixel/reference)
- [Troubleshooting](https://www.facebook.com/business/help/1457403127655380)

**Privacy & Compliance:**
- [GDPR Guide](https://gdpr.eu/)
- [Cookie Consent Best Practices](https://gdpr.eu/cookies/)
- [Google Analytics Privacy](https://support.google.com/analytics/answer/9019185)

---

**Need help?** Check the troubleshooting section or review analytics documentation linked above.
