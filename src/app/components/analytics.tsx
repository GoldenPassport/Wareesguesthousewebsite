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
 * Environment Variables:
 * - VITE_GA_MEASUREMENT_ID: Google Analytics Measurement ID (format: G-XXXXXXXXXX)
 * - VITE_FB_PIXEL_ID: Facebook Pixel ID (numeric)
 * 
 * See ANALYTICS.md for complete setup guide.
 */

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export function Analytics() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Get analytics IDs from environment variables
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;

  // Check cookie consent status
  useEffect(() => {
    const checkCookieConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      const newConsentStatus = consent === 'accepted';
      
      // Update state
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

  // Only enable if BOTH environment variables are set AND cookies are accepted
  const isGAEnabled = cookiesAccepted && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.trim() !== '';
  const isFBPixelEnabled = cookiesAccepted && FB_PIXEL_ID && FB_PIXEL_ID.trim() !== '';

  useEffect(() => {
    // Initialize Facebook Pixel only after cookies are accepted
    if (isFBPixelEnabled && cookiesAccepted) {
      // Facebook Pixel initialization
      window.fbq = function() {
        window.fbq?.callMethod 
          ? window.fbq.callMethod.apply(window.fbq, arguments as any)
          : window.fbq?.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = window.fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
      
      // Track PageView
      window.fbq('init', FB_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, [isFBPixelEnabled, FB_PIXEL_ID, cookiesAccepted]);

  return (
    <>
      {/* Google Analytics Consent Mode - Initialize BEFORE GA loads */}
      {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.trim() !== '' && (
        <Helmet>
          <script>
            {`
              // Set default consent to 'denied' for all consent types
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              
              // Check if user has already consented
              const consent = localStorage.getItem('cookie-consent');
              if (consent === 'accepted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted',
                });
              }
            `}
          </script>
        </Helmet>
      )}

      {/* Google Analytics */}
      {isGAEnabled && (
        <Helmet>
          {/* Google tag (gtag.js) */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </script>
        </Helmet>
      )}

      {/* Facebook Pixel */}
      {isFBPixelEnabled && (
        <Helmet>
          <script>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </script>
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