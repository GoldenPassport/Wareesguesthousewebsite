import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { translations, Language } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const VALID_LANGUAGES: Language[] = ['en', 'th', 'zh', 'ru', 'de', 'it', 'sv', 'fi'];

function isValidLanguage(lang: string | undefined): lang is Language {
  return VALID_LANGUAGES.includes(lang as Language);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const urlLang = params.lang;
  
  // Initialize language from URL or default to 'en'
  const initialLang = isValidLanguage(urlLang) ? urlLang : 'en';
  const [language, setLanguageState] = useState<Language>(initialLang);

  // Sync language with URL changes
  useEffect(() => {
    if (isValidLanguage(urlLang)) {
      setLanguageState(urlLang);
    }
  }, [urlLang]);

  // Custom setLanguage that updates URL
  const setLanguage = (lang: Language) => {
    if (isValidLanguage(lang)) {
      navigate(`/${lang}`, { replace: false });
      setLanguageState(lang);
    }
  };

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