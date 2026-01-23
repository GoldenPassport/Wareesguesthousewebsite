import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Language } from '@/translations';
import { useState, useRef, useEffect } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; flag: string }[] = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'th', flag: '🇹🇭' },
    { code: 'zh', flag: '🇨🇳' },
    { code: 'ru', flag: '🇷🇺' },
    { code: 'de', flag: '🇩🇪' },
    { code: 'it', flag: '🇮🇹' },
    { code: 'sv', flag: '🇸🇪' },
    { code: 'fi', flag: '🇫🇮' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#b3dce6] text-[#0a3d3d] rounded-full hover:bg-[#b3dce6]/90 transition-all shadow-lg border border-[#b3dce6]"
        aria-label="Select language"
      >
        <Languages className="w-5 h-5" />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="font-medium hidden sm:inline">{currentLanguage && t.languageNames[currentLanguage.code]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border-2 border-[#b3dce6]/30 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#b3dce6]/20 transition-colors ${
                language === lang.code ? 'bg-[#f58220]/10 text-[#f58220]' : 'text-gray-700'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{t.languageNames[lang.code]}</span>
              {language === lang.code && (
                <span className="ml-auto text-[#f58220]">✓</span>
              )}
            </button>
          ))}
          
          {/* AI Translation Disclaimer */}
          <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
            <p className="text-[10px] text-gray-500 text-center leading-tight">
              🤖 Translations auto-created by AI. Errors may occur.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}