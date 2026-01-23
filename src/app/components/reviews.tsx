import { Star, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Reviews() {
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
  const [isAirbnbExpanded, setIsAirbnbExpanded] = useState(false);
  const [isTripAdvisorExpanded, setIsTripAdvisorExpanded] = useState(false);

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

  const airbnbRatings = [
    { category: t.reviews.categories.cleanliness, score: 4.9 },
    { category: t.reviews.categories.accuracy, score: 4.9 },
    { category: t.reviews.categories.checkIn, score: 4.9 },
    { category: t.reviews.categories.communication, score: 5.0 },
    { category: t.reviews.categories.location, score: 4.8 },
    { category: t.reviews.categories.value, score: 4.9 }
  ];

  const tripAdvisorRatings = [
    { category: t.reviews.categories.cleanliness, score: 4.9 },
    { category: t.reviews.categories.value, score: 4.8 },
    { category: t.reviews.categories.sleepQuality, score: 4.8 },
    { category: t.reviews.categories.rooms, score: 4.7 },
    { category: t.reviews.categories.service, score: 4.7 },
    { category: t.reviews.categories.location, score: 4.1 }
  ];
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm">{t.reviews.ratingsDate}</p>
        </div>
        
        {/* Dual Platform Ratings Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* AirBNB Card */}
          <div className="bg-gradient-to-br from-[#f58220] to-[#d47020] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl mb-2">{t.reviews.airbnbTitle}</h2>
                <div className="flex items-center">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-white mr-2" />
                  <span className="text-3xl sm:text-4xl">{t.reviews.airbnbScore}</span>
                </div>
                <p className="text-white/90 text-xs sm:text-sm mt-2">{t.reviews.airbnbReviewCount}</p>
              </div>
              <Award className="w-12 h-12 sm:w-16 sm:h-16 opacity-20" />
            </div>
            
            {/* Accordion Button - Mobile Only */}
            <button
              className="md:hidden w-full text-sm text-white/90 py-2 flex items-center justify-center border-t border-white/20 mt-2"
              onClick={() => setIsAirbnbExpanded(!isAirbnbExpanded)}
            >
              {isAirbnbExpanded ? t.common.hideDetails : t.common.showDetails}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isAirbnbExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Detailed Ratings - Hidden on mobile unless expanded, always visible on desktop */}
            <div className={`space-y-2 sm:space-y-3 overflow-hidden transition-all duration-300 ${isAirbnbExpanded ? 'max-h-96 mt-4' : 'max-h-0 md:max-h-96 md:mt-6'}`}>
              {airbnbRatings.map((rating) => (
                <div key={rating.category} className="flex justify-between items-center gap-2">
                  <span className="text-white/90 text-sm sm:text-base truncate flex-shrink-0 min-w-0">{rating.category}</span>
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div className="w-20 sm:w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full" 
                        style={{ width: `${(rating.score / 5) * 100}%` }}
                      />
                    </div>
                    <span className="w-7 sm:w-8 text-right text-sm sm:text-base">{rating.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TripAdvisor Card */}
          <div className="bg-gradient-to-br from-[#0a3d3d] to-[#164d4d] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl mb-2">{t.reviews.tripadvisorTitle}</h2>
                <div className="flex items-center">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-white mr-2" />
                  <span className="text-3xl sm:text-4xl">{t.reviews.tripadvisorScore}</span>
                </div>
                <p className="text-white/90 text-xs sm:text-sm mt-2">{t.reviews.tripadvisorReviewCount}</p>
              </div>
              <Award className="w-12 h-12 sm:w-16 sm:h-16 opacity-20" />
            </div>
            
            {/* Accordion Button - Mobile Only */}
            <button
              className="md:hidden w-full text-sm text-white/90 py-2 flex items-center justify-center border-t border-white/20 mt-2"
              onClick={() => setIsTripAdvisorExpanded(!isTripAdvisorExpanded)}
            >
              {isTripAdvisorExpanded ? t.common.hideDetails : t.common.showDetails}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isTripAdvisorExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Detailed Ratings - Hidden on mobile unless expanded, always visible on desktop */}
            <div className={`space-y-2 sm:space-y-3 overflow-hidden transition-all duration-300 ${isTripAdvisorExpanded ? 'max-h-96 mt-4' : 'max-h-0 md:max-h-96 md:mt-6'}`}>
              {tripAdvisorRatings.map((rating) => (
                <div key={rating.category} className="flex justify-between items-center gap-2">
                  <span className="text-white/90 text-sm sm:text-base truncate flex-shrink-0 min-w-0">{rating.category}</span>
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div className="w-20 sm:w-32 h-2 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full" 
                        style={{ width: `${(rating.score / 5) * 100}%` }}
                      />
                    </div>
                    <span className="w-7 sm:w-8 text-right text-sm sm:text-base">{rating.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0a3d3d] mb-3 md:mb-4">{t.reviews.title}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t.reviews.subtitle}</p>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {t.reviews.guestReviews.map((review, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-[#b3dce6]/10 p-5 rounded-xl border-l-4 border-[#f58220] h-full">
                    <div className="flex items-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#f58220] text-[#f58220]" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-base mb-3 italic leading-relaxed">
                      "{review.text}"
                    </p>
                    <p className="text-sm text-gray-600">— {review.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-[#f58220] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.reviews.guestReviews.map((review, index) => (
            <div key={index} className="bg-[#b3dce6]/10 p-6 rounded-xl border-l-4 border-[#f58220]">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#f58220] text-[#f58220]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{review.text}"
              </p>
              <p className="text-sm text-gray-600">— {review.author}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={siteConfig.booking.airbnb.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
            >
              {t.reviews.readAirbnbButton}
            </a>
            <a 
              href={siteConfig.reviews.tripadvisor.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#0a3d3d] hover:bg-[#164d4d] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
            >
              {t.reviews.readTripadvisorButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}