import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { cookieTranslations } from '@/translations/cookies';

export function CookieConsent() {
  const { language } = useLanguage();
  const t = cookieTranslations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  const handleShowPolicy = () => {
    setShowPolicy(true);
  };

  const handleClosePolicy = () => {
    setShowPolicy(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#f58220]/10 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-[#f58220]" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0a3d3d] mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {t.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAccept}
                    className="bg-[#f58220] hover:bg-[#d47020] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    {t.acceptButton}
                  </button>
                  <button
                    onClick={handleDecline}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    {t.declineButton}
                  </button>
                  <button
                    onClick={handleShowPolicy}
                    className="text-[#0a3d3d] hover:text-[#f58220] px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 underline"
                  >
                    {t.learnMore}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Policy Modal */}
      {showPolicy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#0a3d3d]">
                {t.policyTitle}
              </h2>
              <button
                onClick={handleClosePolicy}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <p className="text-gray-700">
                {t.policyIntro}
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0a3d3d] mb-3">
                  {t.whatAreCookiesTitle}
                </h3>
                <p className="text-gray-700">
                  {t.whatAreCookies}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0a3d3d] mb-3">
                  {t.typesTitle}
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-[#b3dce6]/10 p-4 rounded-lg border border-[#b3dce6]/30">
                    <h4 className="font-semibold text-[#0a3d3d] mb-2">
                      {t.essentialTitle}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {t.essentialDesc}
                    </p>
                  </div>
                  
                  <div className="bg-[#f58220]/10 p-4 rounded-lg border border-[#f58220]/30">
                    <h4 className="font-semibold text-[#0a3d3d] mb-2">
                      {t.analyticsTitle}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {t.analyticsDesc}
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#0a3d3d] mb-3">
                  {t.managingTitle}
                </h3>
                <p className="text-gray-700">
                  {t.managingDesc}
                </p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleClosePolicy}
                  className="w-full bg-[#0a3d3d] hover:bg-[#0a3d3d]/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                >
                  {t.closeButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

CookieConsent.displayName = 'CookieConsent';
