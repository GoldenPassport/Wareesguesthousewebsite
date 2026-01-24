import { Wifi, Tv, Wind, Droplet, Flame, Shield, Users, Luggage, Calendar, Coffee, UtensilsCrossed, Bed, Shirt, Package, Bike } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const amenityIcons = [Wind, Wifi, Coffee, UtensilsCrossed, Bed, Shirt, Package, Bike, Luggage, Calendar, Users, Shield];

export function Amenities() {
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

  // Group amenities into slides of 3 for mobile
  const amenitySlides = [];
  for (let i = 0; i < t.amenities.items.length; i += 3) {
    amenitySlides.push(t.amenities.items.slice(i, i + 3));
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#0a3d3d] text-center mb-3 sm:mb-4 px-2">{t.amenities.title}</h2>
        <p className="text-gray-600 text-center text-base sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
          {t.amenities.subtitle}
        </p>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {amenitySlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="space-y-6">
                    {slide.map((amenity, itemIndex) => {
                      const Icon = amenityIcons[slideIndex * 3 + itemIndex];
                      return (
                        <div key={itemIndex} className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b3dce6]/20 rounded-full mb-3">
                            <Icon className="w-8 h-8 text-[#0a3d3d]" />
                          </div>
                          <h3 className="text-lg text-[#0a3d3d] mb-2">{amenity.title}</h3>
                          <p className="text-gray-600 text-sm px-4">{amenity.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
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
                aria-label={`Go to amenities page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {t.amenities.items.map((amenity, index) => {
            const Icon = amenityIcons[index];
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b3dce6]/20 rounded-full mb-4 group-hover:bg-[#f58220]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[#0a3d3d] group-hover:text-[#f58220] transition-colors" />
                </div>
                <h3 className="text-lg text-[#0a3d3d] mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}