import { logo } from '@/assets/images';
import { LanguageSwitcher } from '@/app/components/language-switcher';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import { Award, Heart, Star, Mail } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1634272967254-4d4b307bc351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHVrZXQlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjkxNzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d3d]/60 via-transparent to-[#0a3d3d]/80" />
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-24 sm:pt-0">
        {/* Logo - Centered on Desktop Only */}
        <div className="hidden sm:block mb-6 sm:mb-8">
          <img src={logo} alt="Waree's Guesthouse Logo" className="w-32 h-32 mx-auto drop-shadow-2xl rounded-2xl" />
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl text-white mb-4 sm:mb-6 drop-shadow-lg leading-tight">
          {t.hero.title}
        </h1>
        
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4">
          <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-[#f58220] fill-[#f58220]" />
            <span className="text-white text-xs sm:text-sm font-medium">
              AirBNB Superhost
            </span>
          </div>
          
          <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-[#f58220] fill-[#f58220]" />
            <span className="text-white text-xs sm:text-sm font-medium">
              Guest Favorite
            </span>
          </div>
          
          <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 text-[#f58220] fill-[#f58220]" />
            <span className="text-white text-xs sm:text-sm font-medium">
              4.83 Rating
            </span>
          </div>
        </div>
        
        <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <p className="text-sm sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-xl leading-relaxed px-2">
          {t.hero.tagline}
        </p>
        
        <div className="flex flex-col w-full max-w-md px-4 gap-3 sm:flex-row sm:max-w-none sm:px-0 sm:gap-4 sm:justify-center">
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            className="bg-[#b3dce6] hover:bg-[#9cc8d6] text-[#0a3d3d] px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl text-center flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {t.hero.emailButton}
          </a>
          <a 
            href={siteConfig.booking.airbnb.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#f58220] hover:bg-[#d47020] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl text-center"
          >
            {t.hero.bookButton}
          </a>
          <a 
            href={siteConfig.reviews.tripadvisor.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-[#0a3d3d] px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl text-center"
          >
            {t.hero.reviewsButton}
          </a>
        </div>
      </div>
    </div>
  );
}

Hero.displayName = 'Hero';