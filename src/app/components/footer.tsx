import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import { CookieSettingsButton } from '@/app/components/cookie-settings-button';
import { trackEvent } from '@/app/components/analytics';
import { Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';
import logo from 'figma:asset/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#545041] text-white py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <img src={logo} alt="Waree's Guesthouse Logo" className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-xl" />
            <h3 className="text-lg sm:text-xl mb-2">{t.hero.title}</h3>
            <p className="text-white/80 text-sm">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">{t.footer.contactTitle}</h3>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackEvent.contactClick('email')}
                data-tracking-id="footer_email_link"
                data-tracking-section="footer"
                className="flex items-center gap-2 sm:gap-3 hover:text-[#f58220] transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#f58220] flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">{siteConfig.contact.email}</span>
              </a>
              <a href={`tel:${siteConfig.contact.phone.raw}`} className="flex items-center space-x-2 sm:space-x-3 hover:text-[#f58220] transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f58220] flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">{siteConfig.contact.phone.display}</span>
              </a>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f58220] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">44/5 Kata Road, Kata Beach<br/>Phuket 83100, Thailand</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">{t.footer.connectTitle}</h3>
            <div className="space-y-2 sm:space-y-4">
              <a 
                href={siteConfig.social.facebook.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 sm:space-x-3 hover:text-[#f58220] transition-colors group"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#f58220]" />
                <span className="text-white/80 text-sm sm:text-base">{t.footer.facebook}</span>
              </a>
              <p className="text-white/60 text-xs sm:text-sm mt-2 sm:mt-4">
                {t.footer.messagePrompt}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">{t.footer.bookTitle}</h3>
            <p className="text-white/80 mb-3 sm:mb-4 text-sm">
              {t.footer.bookDescription}
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 w-full text-center text-sm"
              >
                {t.hero.emailButton}
              </a>
              <a 
                href={siteConfig.booking.airbnb.getTrackedUrl('footer_link')}
                target="_blank" 
                rel="noopener noreferrer"
                id="airbnb-booking-footer"
                onClick={() => trackEvent.bookingClick('airbnb')}
                data-tracking-id="footer_link"
                data-tracking-section="footer"
                data-tracking-platform="airbnb"
                className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 w-full text-center text-sm"
              >
                Airbnb
              </a>
              <a 
                href={siteConfig.reviews.tripadvisor.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/30 px-4 sm:px-6 py-2 rounded-full transition-all duration-300 w-full text-center text-sm"
              >
                {t.footer.tripadvisor}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/60">
          <p className="text-xs sm:text-sm">{t.footer.copyright}</p>
          <p className="mt-2 text-xs sm:text-sm">{t.footer.tagline}</p>
          <div className="mt-4 flex justify-center">
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}