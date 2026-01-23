import { Cookie } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { cookieTranslations } from '@/translations/cookies';

export function CookieSettingsButton() {
  const { language } = useLanguage();
  const t = cookieTranslations[language];

  const handleOpenSettings = () => {
    // Remove the consent to show the banner again
    localStorage.removeItem('cookie-consent');
    // Reload the page to show the cookie banner
    window.location.reload();
  };

  return (
    <button
      onClick={handleOpenSettings}
      className="flex items-center gap-2 text-white/80 hover:text-[#f58220] transition-colors duration-300"
    >
      <Cookie className="w-4 h-4" />
      <span className="text-sm">{t.settingsButton}</span>
    </button>
  );
}

CookieSettingsButton.displayName = 'CookieSettingsButton';
