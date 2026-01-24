import logo from "figma:asset/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png";
import { LanguageSwitcher } from '@/app/components/language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import { Award, Heart, Star, Mail } from 'lucide-react';
import { trackEvent } from '@/app/components/analytics';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1634272967254-4d4b307bc351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHVrZXQlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjkxNzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#545041]/70 via-black/30 to-[#545041]/80" />
      </div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      {/* Logo - Top Left on Mobile Only */}
      <div className="absolute top-6 left-6 z-20 sm:hidden">
        <img src={logo} alt="Waree's Guesthouse Logo" className="w-16 h-16 drop-shadow-2xl rounded-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-24 sm:pt-0 max-w-full overflow-hidden">
        {/* Logo - Centered on Desktop Only */}
        <div className="hidden sm:block mb-6 sm:mb-8">
          <img src={logo} alt="Waree's Guesthouse Logo" className="w-32 h-32 mx-auto drop-shadow-2xl rounded-2xl" />
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl text-white mb-4 sm:mb-6 leading-tight max-w-full" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}>
          {t.hero.title}
        </h1>
        
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4">
          <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
            <Award className="w-4 h-4 sm:w-4 sm:h-4 mr-1.5 text-[#f58220] fill-[#f58220]" />
            <span className="text-white text-sm sm:text-sm font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
              Airbnb Superhost
            </span>
          </div>
          
          <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
            <Heart className="w-4 h-4 sm:w-4 sm:h-4 mr-1.5 text-[#f58220] fill-[#f58220]" />
            <span className="text-white text-sm sm:text-sm font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
              Guest Favorite
            </span>
          </div>
          
          <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
            <Star className="w-4 h-4 sm:w-4 sm:h-4 mr-1.5 text-[#f58220] fill-[#f58220]" />
            <span className="text-white text-sm sm:text-sm font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
              4.83 Rating
            </span>
          </div>
        </div>
        
        <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>
          {t.hero.subtitle}
        </p>
        
        <p className="text-sm sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-xl leading-relaxed px-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}>
          {t.hero.tagline}
        </p>
        
        {/* CTA Buttons - Email primary on mobile, all buttons on desktop */}
        <div className="flex flex-col w-full max-w-md px-4 gap-4 sm:flex-row sm:max-w-none sm:px-0 sm:gap-4 sm:justify-center sm:items-center">
          {/* Primary CTA - Email Us */}
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            onClick={() => trackEvent.contactClick('email')}
            className="bg-[#b3dce6] hover:bg-[#9cc8d6] text-[#0a3d3d] px-8 py-4 sm:px-10 sm:py-4 rounded-full text-lg sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl text-center flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {t.hero.emailButton}
          </a>
          
          {/* Secondary CTAs - Text links on mobile, buttons on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
            <a 
              href={siteConfig.booking.airbnb.getTrackedUrl('hero_primary_cta')}
              target="_blank" 
              rel="noopener noreferrer"
              id="airbnb-booking-hero"
              onClick={() => trackEvent.bookingClick('airbnb')}
              data-tracking-id="hero_primary_cta"
              data-tracking-section="hero"
              data-tracking-platform="airbnb"
              className="text-white hover:text-[#b3dce6] text-base sm:text-lg transition-all duration-300 text-center underline underline-offset-4 sm:no-underline sm:bg-white/10 sm:backdrop-blur-sm sm:border sm:border-white/30 sm:hover:bg-white/20 sm:text-white sm:px-8 sm:py-4 sm:rounded-full"
            >
              {t.hero.bookButton}
            </a>
            <a 
              href={siteConfig.reviews.tripadvisor.url}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent.socialClick('tripadvisor')}
              className="text-white hover:text-[#b3dce6] text-base sm:text-lg transition-all duration-300 text-center underline underline-offset-4 sm:no-underline sm:bg-white/10 sm:backdrop-blur-sm sm:border sm:border-white/30 sm:hover:bg-white/20 sm:text-white sm:px-8 sm:py-4 sm:rounded-full"
            >
              {t.hero.reviewsButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.displayName = 'Hero';