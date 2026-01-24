/**
 * Analytics Component - Google Analytics & Meta Pixel (Facebook/Instagram)
 * 
 * Privacy & Cookie Compliance:
 * - Analytics scripts ONLY load when BOTH conditions are met:
 *   1. Environment variables are configured (VITE_GA_MEASUREMENT_ID, VITE_FB_PIXEL_ID)
 *   2. User has ACCEPTED cookies via the cookie consent banner
 * 
 * - If user declines cookies: NO analytics scripts load (GDPR/CCPA compliant)
 * - If environment variables are missing: Analytics remain disabled
 * - Cookie consent is checked continuously and analytics activate/deactivate accordingly
 * 
 * Google Analytics Consent Mode:
 * - Default consent: 'denied' for all storage types (analytics, ads, user data, personalization)
 * - When user accepts: Consent updated to 'granted' via gtag('consent', 'update')
 * - Consent mode script loads BEFORE GA to ensure proper tracking
 * 
 * Facebook Pixel Consent Mode:
 * - Default consent: 'revoke' if user hasn't consented
 * - When user accepts: Consent granted via fbq('consent', 'grant')
 * - Consent mode initialized BEFORE Pixel loads
 * - Real-time consent updates when user changes settings
 * 
 * Environment Variables:
 * - VITE_GA_MEASUREMENT_ID: Google Analytics Measurement ID (format: G-XXXXXXXXXX)
 * - VITE_FB_PIXEL_ID: Facebook Pixel ID (numeric)
 * 
 * See Guidelines.md for complete setup guide.
 */

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    _fbq_consent_mode?: any[];
  }
}

export function Analytics() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [gaLoaded, setGaLoaded] = useState(false);
  const [fbLoaded, setFbLoaded] = useState(false);

  // Get analytics IDs from environment variables
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;

  // Debug logging
  useEffect(() => {
    console.log('🔍 Analytics Debug Info:');
    console.log('- GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID || 'NOT SET');
    console.log('- FB_PIXEL_ID:', FB_PIXEL_ID || 'NOT SET');
    console.log('- Cookie Consent:', localStorage.getItem('cookie-consent') || 'NOT SET');
    console.log('- cookiesAccepted state:', cookiesAccepted);
    console.log('- gaLoaded:', gaLoaded);
    console.log('- fbLoaded:', fbLoaded);
    console.log('- window.gtag exists:', typeof window.gtag !== 'undefined');
    console.log('- window.fbq exists:', typeof window.fbq !== 'undefined');
  }, [GA_MEASUREMENT_ID, FB_PIXEL_ID, cookiesAccepted, gaLoaded, fbLoaded]);

  // Initialize Google Analytics consent mode (always load this)
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.trim() === '') return;

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer!.push(args);
    };

    // Set default consent to 'denied'
    window.gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': 500
    });

    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
      });
    }

    console.log('✅ Google Analytics consent mode initialized');
  }, [GA_MEASUREMENT_ID]);

  // Check cookie consent status and load GA script
  useEffect(() => {
    const checkCookieConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      const newConsentStatus = consent === 'accepted';
      
      setCookiesAccepted(newConsentStatus);
      
      // Update Google Analytics consent mode
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': newConsentStatus ? 'granted' : 'denied',
          'ad_storage': newConsentStatus ? 'granted' : 'denied',
          'ad_user_data': newConsentStatus ? 'granted' : 'denied',
          'ad_personalization': newConsentStatus ? 'granted' : 'denied',
        });
      }
      
      // Update Facebook Pixel consent mode
      if (window.fbq) {
        if (newConsentStatus) {
          window.fbq('consent', 'grant');
        } else {
          window.fbq('consent', 'revoke');
        }
      }
    };

    // Initial check
    checkCookieConsent();

    // Listen for storage changes (when user accepts/declines cookies)
    window.addEventListener('storage', checkCookieConsent);
    
    // Also check periodically in case consent changes in same tab
    const interval = setInterval(checkCookieConsent, 1000);

    return () => {
      window.removeEventListener('storage', checkCookieConsent);
      clearInterval(interval);
    };
  }, []);

  // Load Google Analytics script when cookies are accepted
  useEffect(() => {
    if (!cookiesAccepted || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.trim() === '' || gaLoaded) {
      return;
    }

    console.log('📊 Loading Google Analytics script...');

    // Load the gtag.js script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    script.onload = () => {
      console.log('✅ Google Analytics script loaded');
      
      // Initialize GA
      if (window.gtag) {
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
          cookie_flags: 'SameSite=None;Secure'
        });
        console.log('✅ Google Analytics configured with ID:', GA_MEASUREMENT_ID);
      }
      
      setGaLoaded(true);
    };
    script.onerror = () => {
      console.error('❌ Failed to load Google Analytics script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [cookiesAccepted, GA_MEASUREMENT_ID, gaLoaded]);

  // Load Facebook Pixel when cookies are accepted
  useEffect(() => {
    if (!cookiesAccepted || !FB_PIXEL_ID || FB_PIXEL_ID.trim() === '' || fbLoaded) {
      return;
    }

    console.log('📊 Loading Facebook Pixel...');

    // Facebook Pixel initialization
    (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function(...args: any[]) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);

    if (window.fbq) {
      window.fbq('init', FB_PIXEL_ID);
      window.fbq('track', 'PageView');
      console.log('✅ Facebook Pixel initialized with ID:', FB_PIXEL_ID);
      setFbLoaded(true);
    }
  }, [cookiesAccepted, FB_PIXEL_ID, fbLoaded]);

  // Render Facebook Pixel noscript fallback
  return (
    <>
      {fbLoaded && FB_PIXEL_ID && (
        <Helmet>
          <noscript>
            {`<img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"
            />`}
          </noscript>
        </Helmet>
      )}
    </>
  );
}

// Helper function to check cookie consent
const hasCookieConsent = (): boolean => {
  return localStorage.getItem('cookie-consent') === 'accepted';
};

// Helper functions for tracking events
export const trackEvent = {
  // Google Analytics event
  ga: (eventName: string, eventParams?: Record<string, any>) => {
    if (hasCookieConsent() && window.gtag && import.meta.env.VITE_GA_MEASUREMENT_ID) {
      window.gtag('event', eventName, eventParams);
    }
  },

  // Facebook Pixel event
  fb: (eventName: string, eventParams?: Record<string, any>) => {
    if (hasCookieConsent() && window.fbq && import.meta.env.VITE_FB_PIXEL_ID) {
      window.fbq('track', eventName, eventParams);
    }
  },

  // Track both platforms
  all: (eventName: string, eventParams?: Record<string, any>) => {
    trackEvent.ga(eventName, eventParams);
    trackEvent.fb(eventName, eventParams);
  },

  // Common events
  bookingClick: (platform: 'airbnb' | 'booking' | 'email') => {
    trackEvent.all('booking_click', { platform });
  },

  contactClick: (method: 'phone' | 'email' | 'whatsapp' | 'line' | 'facebook') => {
    trackEvent.all('contact_click', { method });
  },

  roomView: (roomType: string) => {
    trackEvent.all('view_item', { 
      item_name: roomType,
      item_category: 'room'
    });
  },

  galleryView: () => {
    trackEvent.all('view_gallery');
  },

  languageChange: (language: string) => {
    trackEvent.all('language_change', { language });
  },

  socialClick: (platform: 'facebook' | 'instagram' | 'tripadvisor') => {
    trackEvent.all('social_click', { platform });
  },

  reviewView: () => {
    trackEvent.all('view_reviews');
  }
};

Analytics.displayName = 'Analytics';
