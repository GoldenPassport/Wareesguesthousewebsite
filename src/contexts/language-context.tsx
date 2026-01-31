import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.displayName = 'LanguageProvider';

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // In development or preview environments, log the error but provide a fallback
    console.error('useLanguage must be used within a LanguageProvider');
    
    // Provide a fallback default context to prevent crashes
    return {
      language: 'en' as Language,
      setLanguage: () => {
        console.warn('setLanguage called outside LanguageProvider');
      },
      t: translations.en,
    };
  }
  return context;
}