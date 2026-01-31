import { Cookie } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { cookieTranslations } from '@/translations/cookies';
import { trackEvent } from '@/app/components/analytics';

export function CookieSettingsButton() {
  const { language } = useLanguage();
  const t = cookieTranslations[language];

  const handleOpenSettings = () => {
    // Track the settings button click
    trackEvent.ctaClick('Cookie Settings', 'footer', 'settings');
    
    // Remove the consent to show the banner again
    localStorage.removeItem('cookie-consent');
    // Reload the page to show the cookie banner
    window.location.reload();
  };

  return (
    <button
      onClick={handleOpenSettings}
      data-tracking-id="footer_cookie_settings"
      data-tracking-section="footer"
      className="flex items-center gap-2 text-white/80 hover:text-[#f58220] transition-colors duration-300"
    >
      <Cookie className="w-4 h-4" />
      <span className="text-sm">{t.settingsButton}</span>
    </button>
  );
}

CookieSettingsButton.displayName = 'CookieSettingsButton';