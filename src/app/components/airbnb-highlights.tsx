import { Award, Star, Heart, MapPin, Key, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export function AirbnbHighlights() {
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

  const highlights = [
    {
      icon: Key,
      title: t.airbnb.checkInTitle,
      description: t.airbnb.checkInDesc,
      showStars: true
    },
    {
      icon: MapPin,
      title: t.airbnb.locationTitle,
      description: t.airbnb.locationDesc,
      showStars: true
    },
    {
      icon: Calendar,
      title: t.airbnb.trustedTitle,
      description: t.airbnb.superhostDesc,
      showStars: false
    }
  ];
  
  return (
    <section className="pt-2 pb-12 px-4 bg-gradient-to-b from-white to-[#b3dce6]/10">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f58220]/10 rounded-full mb-4">
                        <IconComponent className="w-8 h-8 text-[#f58220]" />
                      </div>
                      <h3 className="text-lg text-[#0a3d3d] mb-3">{highlight.title}</h3>
                      <div className="flex justify-center mb-3">
                        {highlight.showStars ? (
                          <>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-5 h-5 fill-[#f58220] text-[#f58220]" />
                            ))}
                          </>
                        ) : (
                          <Award className="w-6 h-6 text-[#f58220]" />
                        )}
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {highlight.description}
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
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f58220]/10 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-[#f58220]" />
                </div>
                <h3 className="text-xl text-[#0a3d3d] mb-3">{highlight.title}</h3>
                <div className="flex justify-center mb-3">
                  {highlight.showStars ? (
                    <>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-[#f58220] text-[#f58220]" />
                      ))}
                    </>
                  ) : (
                    <Award className="w-6 h-6 text-[#f58220]" />
                  )}
                </div>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-base sm:text-lg px-4">
            {t.airbnb.ctaText}
          </p>
          <a 
            href={siteConfig.booking.airbnb.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t.airbnb.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}