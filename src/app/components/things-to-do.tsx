import { MapPin, ShoppingBag, Plus, Utensils, Building2, Palmtree, Camera, Waves, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

export function ThingsToDo() {
  const { t } = useLanguage();
  
  // Expansion state
  const [attractionsExpanded, setAttractionsExpanded] = useState(false);
  const [conveniencesExpanded, setConveniencesExpanded] = useState(false);
  
  // Carousel for attractions
  const [emblaRefAttractions, emblaApiAttractions] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });
  const [selectedIndexAttractions, setSelectedIndexAttractions] = useState(0);
  const [scrollSnapsAttractions, setScrollSnapsAttractions] = useState<number[]>([]);

  const scrollToAttractions = useCallback((index: number) => emblaApiAttractions && emblaApiAttractions.scrollTo(index), [emblaApiAttractions]);

  const onSelectAttractions = useCallback(() => {
    if (!emblaApiAttractions) return;
    setSelectedIndexAttractions(emblaApiAttractions.selectedScrollSnap());
  }, [emblaApiAttractions]);

  useEffect(() => {
    if (!emblaApiAttractions) return;
    setScrollSnapsAttractions(emblaApiAttractions.scrollSnapList());
    onSelectAttractions();
    emblaApiAttractions.on('select', onSelectAttractions);
    return () => {
      emblaApiAttractions.off('select', onSelectAttractions);
    };
  }, [emblaApiAttractions, onSelectAttractions]);

  // Carousel for conveniences
  const [emblaRefConveniences, emblaApiConveniences] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    breakpoints: {
      '(min-width: 768px)': { active: false }
    }
  });
  const [selectedIndexConveniences, setSelectedIndexConveniences] = useState(0);
  const [scrollSnapsConveniences, setScrollSnapsConveniences] = useState<number[]>([]);

  const scrollToConveniences = useCallback((index: number) => emblaApiConveniences && emblaApiConveniences.scrollTo(index), [emblaApiConveniences]);

  const onSelectConveniences = useCallback(() => {
    if (!emblaApiConveniences) return;
    setSelectedIndexConveniences(emblaApiConveniences.selectedScrollSnap());
  }, [emblaApiConveniences]);

  useEffect(() => {
    if (!emblaApiConveniences) return;
    setScrollSnapsConveniences(emblaApiConveniences.scrollSnapList());
    onSelectConveniences();
    emblaApiConveniences.on('select', onSelectConveniences);
    return () => {
      emblaApiConveniences.off('select', onSelectConveniences);
    };
  }, [emblaApiConveniences, onSelectConveniences]);

  const attractions = [
    { name: t.thingsToDo.kataBeach, desc: t.thingsToDo.kataBeachDesc, dist: t.thingsToDo.kataBeachDist, icon: Waves, mapUrl: 'https://maps.app.goo.gl/9haTFbS4ieQYZ4cs6' },
    { name: t.thingsToDo.karonBeach, desc: t.thingsToDo.karonBeachDesc, dist: t.thingsToDo.karonBeachDist, icon: Waves, mapUrl: 'https://maps.app.goo.gl/mZGRfL4y4eWsfSCi8' },
    { name: t.thingsToDo.viewpoint, desc: t.thingsToDo.viewpointDesc, dist: t.thingsToDo.viewpointDist, icon: Camera, mapUrl: 'https://maps.app.goo.gl/EGhPrq7cFn4dKm27A' },
    { name: t.thingsToDo.bigBuddha, desc: t.thingsToDo.bigBuddhaDesc, dist: t.thingsToDo.bigBuddhaDist, icon: Camera, mapUrl: 'https://maps.app.goo.gl/dpSLHFxgicgWx7Ty8' },
    { name: t.thingsToDo.watChalong, desc: t.thingsToDo.watChalongDesc, dist: t.thingsToDo.watChalongDist, icon: Camera, mapUrl: 'https://maps.app.goo.gl/RMGCv3u5LKH7orYy7' },
    { name: t.thingsToDo.oldTown, desc: t.thingsToDo.oldTownDesc, dist: t.thingsToDo.oldTownDist, icon: Camera, mapUrl: 'https://maps.app.goo.gl/NwdG2uEbufQCa77aA' }
  ];

  const conveniences = [
    { name: t.thingsToDo.atm, desc: t.thingsToDo.atmDesc, dist: t.thingsToDo.atmDist, icon: Plus },
    { name: t.thingsToDo.pharmacy, desc: t.thingsToDo.pharmacyDesc, dist: t.thingsToDo.pharmacyDist, icon: Plus },
    { name: t.thingsToDo.sevenEleven, desc: t.thingsToDo.sevenElevenDesc, dist: t.thingsToDo.sevenElevenDist, icon: ShoppingBag },
    { name: t.thingsToDo.macro, desc: t.thingsToDo.macroDesc, dist: t.thingsToDo.macroDist, icon: ShoppingBag },
    { name: t.thingsToDo.clinic, desc: t.thingsToDo.clinicDesc, dist: t.thingsToDo.clinicDist, icon: Plus },
    { name: t.thingsToDo.jungceylon, desc: t.thingsToDo.jungceylonDesc, dist: t.thingsToDo.jungceylonDist, icon: Building2 },
    { name: t.thingsToDo.restaurants, desc: t.thingsToDo.restaurantsDesc, dist: t.thingsToDo.restaurantsDist, icon: Utensils }
  ];

  // Group conveniences into slides of 2 for mobile
  const convenienceSlides = [];
  for (let i = 0; i < conveniences.length; i += 2) {
    convenienceSlides.push(conveniences.slice(i, i + 2));
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-[#b3dce6]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Palmtree className="w-12 h-12 md:w-16 md:h-16 text-[#f58220] mx-auto mb-3 md:mb-4" />
          <h2 className="text-3xl sm:text-4xl text-[#0a3d3d] mb-3 md:mb-4">{t.thingsToDo.title}</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            {t.thingsToDo.subtitle}
          </p>
        </div>

        {/* Things to Do & Sights */}
        <div className="mb-16">
          {/* Button Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {/* Beaches & Attractions Button */}
            <button 
              onClick={() => {
                setAttractionsExpanded(!attractionsExpanded);
                if (!attractionsExpanded) setConveniencesExpanded(false);
              }}
              className="flex items-center justify-between gap-2 sm:gap-3 group hover:bg-[#f58220]/5 active:bg-[#f58220]/10 p-4 sm:p-5 rounded-xl transition-all border-2 border-[#b3dce6]/30 hover:border-[#f58220]/40 min-h-[60px] touch-manipulation"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <Camera className="w-6 h-6 sm:w-7 sm:h-7 text-[#f58220] flex-shrink-0" />
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0a3d3d] leading-tight text-left font-semibold">{t.thingsToDo.attractionsTitle}</h3>
              </div>
              {attractionsExpanded ? (
                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#f58220] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#f58220] flex-shrink-0" />
              )}
            </button>

            {/* Nearby Conveniences Button */}
            <button 
              onClick={() => {
                setConveniencesExpanded(!conveniencesExpanded);
                if (!conveniencesExpanded) setAttractionsExpanded(false);
              }}
              className="flex items-center justify-between gap-2 sm:gap-3 group hover:bg-[#f58220]/5 active:bg-[#f58220]/10 p-4 sm:p-5 rounded-xl transition-all border-2 border-[#b3dce6]/30 hover:border-[#f58220]/40 min-h-[60px] touch-manipulation"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#f58220] flex-shrink-0" />
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#0a3d3d] leading-tight text-left font-semibold">{t.thingsToDo.conveniencesTitle}</h3>
              </div>
              {conveniencesExpanded ? (
                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#f58220] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#f58220] flex-shrink-0" />
              )}
            </button>
          </div>
          
          {/* Attractions Expandable Content */}
          {attractionsExpanded && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300 mb-8">
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <div className="overflow-hidden py-2" ref={emblaRefAttractions}>
                  <div className="flex">
                    {attractions.map((attraction, index) => {
                      const IconComponent = attraction.icon;
                      return (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#b3dce6]/30 h-full">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl text-[#0a3d3d] mb-1 font-semibold">{attraction.name}</h4>
                                <p className="text-gray-600 text-base">{attraction.desc}</p>
                              </div>
                              <IconComponent className={`w-6 h-6 flex-shrink-0 ml-2 ${attraction.icon === Waves ? 'text-[#b3dce6]' : 'text-[#f58220]'}`} />
                            </div>
                            <p className="text-[#f58220] font-semibold mb-3">{attraction.dist}</p>
                            {attraction.mapUrl && (
                              <a 
                                href={attraction.mapUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm bg-[#f58220] text-white px-4 py-2 rounded-lg hover:bg-[#e57420] transition-colors"
                              >
                                <MapPin className="w-4 h-4" />
                                {t.thingsToDo.getDirections}
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {scrollSnapsAttractions.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndexAttractions 
                          ? 'bg-[#f58220] w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => scrollToAttractions(index)}
                      aria-label={`Go to attraction ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attractions.map((attraction, index) => {
                  const IconComponent = attraction.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#b3dce6]/30 hover:border-[#f58220]/50 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl text-[#0a3d3d] mb-1 font-semibold">{attraction.name}</h4>
                          <p className="text-gray-600 text-sm">{attraction.desc}</p>
                        </div>
                        <IconComponent className={`w-6 h-6 ${attraction.icon === Waves ? 'text-[#b3dce6]' : 'text-[#f58220]'}`} />
                      </div>
                      <p className="text-[#f58220] font-semibold mb-3">{attraction.dist}</p>
                      {attraction.mapUrl && (
                        <a 
                          href={attraction.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm bg-[#f58220] text-white px-4 py-2 rounded-lg hover:bg-[#e57420] transition-colors"
                        >
                          <MapPin className="w-4 h-4" />
                          {t.thingsToDo.getDirections}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Conveniences Expandable Content */}
          {conveniencesExpanded && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <div className="overflow-hidden py-2" ref={emblaRefConveniences}>
                  <div className="flex">
                    {convenienceSlides.map((slide, slideIndex) => (
                      <div key={slideIndex} className="flex-[0_0_100%] min-w-0 px-2">
                        <div className="space-y-4">
                          {slide.map((convenience, itemIndex) => {
                            const IconComponent = convenience.icon;
                            return (
                              <div key={itemIndex} className="bg-white p-5 rounded-xl shadow-lg border-2 border-[#b3dce6]/30">
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="w-12 h-12 bg-[#f58220]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <IconComponent className="w-6 h-6 text-[#f58220]" />
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className="text-base text-[#0a3d3d] font-semibold">{convenience.name}</h4>
                                    <p className="text-xs text-gray-600">{convenience.desc}</p>
                                  </div>
                                </div>
                                <p className="text-[#f58220] font-semibold text-sm ml-15">{convenience.dist}</p>
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
                  {scrollSnapsConveniences.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndexConveniences 
                          ? 'bg-[#f58220] w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => scrollToConveniences(index)}
                      aria-label={`Go to conveniences page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {conveniences.map((convenience, index) => {
                  const IconComponent = convenience.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#b3dce6]/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-[#f58220]/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#f58220]" />
                        </div>
                        <div>
                          <h4 className="text-lg text-[#0a3d3d] font-semibold">{convenience.name}</h4>
                          <p className="text-sm text-gray-600">{convenience.desc}</p>
                        </div>
                      </div>
                      <p className="text-[#f58220] font-semibold">{convenience.dist}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Call out box */}
        <div className="mt-12 bg-[#f58220]/10 border-l-4 border-[#f58220] p-6 rounded-lg">
          <p className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: t.thingsToDo.localTip }} />
        </div>
      </div>
    </section>
  );
}