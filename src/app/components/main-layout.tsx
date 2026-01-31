import { Outlet } from 'react-router';
import { LanguageProvider } from '@/contexts/language-context';
import { SEOProvider } from '@/app/components/seo-head';
import { Analytics } from '@/app/components/analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { CookieConsent } from '@/app/components/cookie-consent';
import { ScrollToTop } from '@/app/components/scroll-to-top';

export function MainLayout() {
  return (
    <LanguageProvider>
      <SEOProvider>
        <Analytics />
        <VercelAnalytics />
        <div className="min-h-screen bg-white">
          <Outlet />
          <CookieConsent />
          <ScrollToTop />
        </div>
      </SEOProvider>
    </LanguageProvider>
  );
}

MainLayout.displayName = 'MainLayout';
