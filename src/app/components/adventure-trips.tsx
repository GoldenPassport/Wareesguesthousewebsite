import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Lightbulb, Car, Shirt, Navigation, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import hondaRebelImage from 'figma:asset/c427e3b53f6498361f3cfd7cd9fdd6a2d1afb9b1.png';

// Trip images from Unsplash + custom images
const tripImages = [
  'https://images.unsplash.com/photo-1653409918364-7491fa4c12fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHVrZXQlMjBiaWclMjBidWRkaGElMjB3aGl0ZSUyMG1hcmJsZSUyMHN0YXR1ZSUyMHRoYWlsYW5kfGVufDF8fHx8MTc2OTg4Mjc1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  hondaRebelImage,
  'https://images.unsplash.com/photo-1737515908817-2b7668aea1a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHVrZXQlMjBiZWFjaCUyMHBlYWNlZnVsJTIwcXVpZXQlMjBsb2NhbHxlbnwxfHx8fDE3Njk4ODY0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Soi_Rommanee%2C_Phuket_Town.jpg/2560px-Soi_Rommanee%2C_Phuket_Town.jpg',
];

export function AdventureTrips() {
  const { t } = useLanguage();
  const [selectedTripIndex, setSelectedTripIndex] = useState(0);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      // Keep details expanded if already open
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      // Keep details expanded if already open
    }
  }, [emblaApi]);

  // Update selected index when carousel scrolls
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedTripIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Initial selection

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const trips = t.adventures.trips;
  const selectedTrip = trips[selectedTripIndex];

  const toggleDetails = () => {
    setIsDetailsExpanded(!isDetailsExpanded);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-[#b3dce6]/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-[#0a3d3d] mb-3 sm:mb-4">
            {t.adventures.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {t.adventures.subtitle}
          </p>
        </div>

        {/* Trip Headers Carousel - Image + Title */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
            <div className="flex">
              {trips.map((trip, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <button 
                    onClick={toggleDetails}
                    className="relative h-64 sm:h-80 md:h-96 overflow-hidden w-full cursor-pointer group"
                  >
                    <ImageWithFallback
                      src={tripImages[index]}
                      alt={trip.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Trip Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-white/90 mb-2">
                            <Clock className="w-5 h-5" />
                            <span className="text-sm sm:text-base font-medium">{t.adventures.duration}</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">
                            {trip.name}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg text-white/90">
                            {trip.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          {selectedTripIndex === index && isDetailsExpanded ? (
                            <ChevronUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                          ) : (
                            <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white border-2 border-[#b3dce6] hover:border-[#f58220] hover:text-[#f58220] transition-all duration-300 shadow-xl backdrop-blur-sm"
            aria-label="Previous trip"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white border-2 border-[#b3dce6] hover:border-[#f58220] hover:text-[#f58220] transition-all duration-300 shadow-xl backdrop-blur-sm"
            aria-label="Next trip"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {trips.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  setIsDetailsExpanded(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedTripIndex === index
                    ? 'w-8 bg-[#f58220]'
                    : 'w-2 bg-gray-300 hover:bg-[#b3dce6]'
                }`}
                aria-label={`Go to trip ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Expandable Trip Details */}
        {isDetailsExpanded && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-6 sm:p-8">
              {/* Trip Purpose, Transport, Dress Code */}
              <div className="mb-6 pb-6 border-b-2 border-[#b3dce6] space-y-4">
                <div className="flex items-center gap-2 text-[#f58220] font-medium">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm sm:text-base">{selectedTrip.purpose}</span>
                </div>
                
                {/* Transport and Dress Code for trips that have them */}
                {(selectedTrip.transport || selectedTrip.dresscode) && (
                  <div className="flex flex-wrap gap-3">
                    {selectedTrip.transport && (
                      <div className="flex items-center gap-2 bg-[#b3dce6]/20 px-4 py-2 rounded-full border border-[#b3dce6]">
                        <Car className="w-4 h-4 text-[#0a3d3d]" />
                        <span className="text-xs sm:text-sm text-[#0a3d3d] font-medium">
                          {selectedTrip.transport}
                        </span>
                      </div>
                    )}
                    {selectedTrip.dresscode && (
                      <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-300">
                        <Shirt className="w-4 h-4 text-yellow-700" />
                        <span className="text-xs sm:text-sm text-yellow-700 font-medium">
                          {selectedTrip.dresscode}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Trip Stops */}
              <div className="space-y-6">
                {selectedTrip.stops.map((stop, index) => (
                  <div
                    key={index}
                    className="relative pl-8 sm:pl-12 pb-6 last:pb-0"
                  >
                    {/* Timeline Line */}
                    {index < selectedTrip.stops.length - 1 && (
                      <div className="absolute left-4 sm:left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#f58220] to-[#b3dce6]" />
                    )}

                    {/* Timeline Dot */}
                    <div className="absolute left-0 sm:left-2 top-1 w-8 h-8 bg-gradient-to-br from-[#f58220] to-[#d47020] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Stop Content */}
                    <div className="bg-gradient-to-br from-[#b3dce6]/10 to-white rounded-xl p-4 sm:p-5 border-2 border-[#b3dce6]/30 hover:border-[#f58220]/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h4 className="text-lg sm:text-xl font-semibold text-[#0a3d3d]">
                          {stop.name}
                        </h4>
                        {stop.time && (
                          <div className="flex items-center gap-2 text-[#f58220] font-medium text-sm sm:text-base">
                            <Clock className="w-4 h-4" />
                            <span>{stop.time}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 mb-3">
                        {stop.activity}
                      </p>

                      {/* Google Maps Link */}
                      {stop.mapLink && (
                        <a
                          href={stop.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#0a3d3d] hover:bg-[#f58220] text-white px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 mb-3 shadow-md"
                        >
                          <Navigation className="w-4 h-4" />
                          <span>Get Directions</span>
                        </a>
                      )}

                      <div className="flex items-start gap-2 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-yellow-800">
                          <strong>Tip:</strong> {stop.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trip Footer */}
              <div className="mt-8 pt-6 border-t-2 border-[#b3dce6] text-center">
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {t.adventures.helpText}
                </p>
                <a
                  href="mailto:wareesguesthouse@gmail.com?subject=Help Planning a 2-Hour Adventure"
                  className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t.adventures.helpButton}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

AdventureTrips.displayName = 'AdventureTrips';