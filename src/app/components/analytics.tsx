import { useEffect } from 'react';
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
  // Get analytics IDs from environment variables
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;

  // Only enable if environment variables are set
  const isGAEnabled = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.trim() !== '';
  const isFBPixelEnabled = FB_PIXEL_ID && FB_PIXEL_ID.trim() !== '';

  useEffect(() => {
    // Initialize Facebook Pixel
    if (isFBPixelEnabled) {
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
  }, [isFBPixelEnabled, FB_PIXEL_ID]);

  return (
    <>
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

// Helper functions for tracking events
export const trackEvent = {
  // Google Analytics event
  ga: (eventName: string, eventParams?: Record<string, any>) => {
    if (window.gtag && import.meta.env.VITE_GA_MEASUREMENT_ID) {
      window.gtag('event', eventName, eventParams);
    }
  },

  // Facebook Pixel event
  fb: (eventName: string, eventParams?: Record<string, any>) => {
    if (window.fbq && import.meta.env.VITE_FB_PIXEL_ID) {
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
