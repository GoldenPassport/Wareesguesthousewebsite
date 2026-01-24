import { Facebook, Heart, Users, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export function SocialFeed() {
  const { t } = useLanguage();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const socialCards = [
    { icon: Users, title: t.social.communityTitle, desc: t.social.communityDesc },
    { icon: Heart, title: t.social.storiesTitle, desc: t.social.storiesDesc },
    { icon: Calendar, title: t.social.eventsTitle, desc: t.social.eventsDesc }
  ];

  return (
    <section className="pt-8 pb-12 md:py-20 px-4 bg-gradient-to-b from-[#b3dce6]/10 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Facebook className="w-12 h-12 md:w-16 md:h-16 text-[#f58220] mx-auto mb-3 md:mb-4" />
          <h2 className="text-3xl md:text-4xl text-[#0a3d3d] mb-3 md:mb-4">{t.social.title}</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
            {t.social.subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex">
              {socialCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full">
                      <IconComponent className="w-12 h-12 text-[#f58220] mx-auto mb-4" />
                      <h3 className="text-xl text-[#0a3d3d] mb-3">{card.title}</h3>
                      <p className="text-gray-600 text-base">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-[#f58220] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to social card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {socialCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <IconComponent className="w-12 h-12 text-[#f58220] mx-auto mb-4" />
                <h3 className="text-xl text-[#0a3d3d] mb-2">{card.title}</h3>
                <p className="text-gray-600 text-base">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Facebook Page Plugin Placeholder */}
        <div className="bg-white rounded-lg shadow-xl p-5 md:p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl text-[#0a3d3d] mb-3 md:mb-4">{t.social.latestTitle}</h3>
          <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6">
            {t.social.latestDesc}
          </p>
          
          {/* Direct Facebook Link with CTA */}
          <div className="bg-gradient-to-r from-[#0a3d3d] to-[#0a3d3d]/90 rounded-lg p-6 md:p-8 mb-5 md:mb-6">
            <Facebook className="w-10 h-10 md:w-12 md:h-12 text-[#f58220] mx-auto mb-3 md:mb-4" />
            <p className="text-white text-sm md:text-base mb-4">
              {t.social.ctaText}
            </p>
            <a 
              href={siteConfig.social.facebook.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.social.ctaButton}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
            <div>✨ {t.social.feature1}</div>
            <div>📸 {t.social.feature2}</div>
            <div>🌴 {t.social.feature3}</div>
            <div>💬 {t.social.feature4}</div>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-8 md:mt-12 bg-[#f58220] text-white rounded-lg p-5 md:p-6 text-center">
          <p className="text-base md:text-lg mb-4">
            <strong>{t.social.quickTitle}</strong> {t.social.quickDesc}
          </p>
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            <a 
              href={siteConfig.social.facebook.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#0a3d3d] px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-100 transition-colors"
            >
              📘 {t.social.facebookBtn}
            </a>
            <a 
              href={`tel:${siteConfig.contact.phone.raw}`}
              className="bg-white text-[#0a3d3d] px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-100 transition-colors"
            >
              📞 {t.social.phoneBtn}
            </a>
            <a 
              href={`mailto:${siteConfig.contact.email}`}
              className="bg-white text-[#0a3d3d] px-4 md:px-6 py-2 rounded-full text-sm md:text-base hover:bg-gray-100 transition-colors"
            >
              ✉️ {t.social.emailBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}