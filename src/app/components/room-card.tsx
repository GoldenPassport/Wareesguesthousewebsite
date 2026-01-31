import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageLightbox } from './image-lightbox';

interface RoomCardProps {
  room: {
    name: string;
    description: string;
    images: string[];
    features: string[];
  };
  showPrimaryOnly?: boolean; // If true, show only first image initially on desktop
}

export function RoomCard({ room, showPrimaryOnly = false }: RoomCardProps) {
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
  });
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
  });
  const [selectedIndexMobile, setSelectedIndexMobile] = useState(0);
  const [selectedIndexDesktop, setSelectedIndexDesktop] = useState(0);
  const [scrollSnapsMobile, setScrollSnapsMobile] = useState<number[]>([]);
  const [scrollSnapsDesktop, setScrollSnapsDesktop] = useState<number[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollToMobile = useCallback((index: number) => emblaApiMobile && emblaApiMobile.scrollTo(index), [emblaApiMobile]);
  const scrollToDesktop = useCallback((index: number) => emblaApiDesktop && emblaApiDesktop.scrollTo(index), [emblaApiDesktop]);

  const scrollPrevDesktop = useCallback(() => emblaApiDesktop && emblaApiDesktop.scrollPrev(), [emblaApiDesktop]);
  const scrollNextDesktop = useCallback(() => emblaApiDesktop && emblaApiDesktop.scrollNext(), [emblaApiDesktop]);

  const onSelectMobile = useCallback(() => {
    if (!emblaApiMobile) return;
    setSelectedIndexMobile(emblaApiMobile.selectedScrollSnap());
  }, [emblaApiMobile]);

  const onSelectDesktop = useCallback(() => {
    if (!emblaApiDesktop) return;
    setSelectedIndexDesktop(emblaApiDesktop.selectedScrollSnap());
  }, [emblaApiDesktop]);

  useEffect(() => {
    if (!emblaApiMobile) return;
    setScrollSnapsMobile(emblaApiMobile.scrollSnapList());
    onSelectMobile();
    emblaApiMobile.on('select', onSelectMobile);
    return () => {
      emblaApiMobile.off('select', onSelectMobile);
    };
  }, [emblaApiMobile, onSelectMobile]);

  useEffect(() => {
    if (!emblaApiDesktop) return;
    setScrollSnapsDesktop(emblaApiDesktop.scrollSnapList());
    onSelectDesktop();
    emblaApiDesktop.on('select', onSelectDesktop);
    return () => {
      emblaApiDesktop.off('select', onSelectDesktop);
    };
  }, [emblaApiDesktop, onSelectDesktop]);

  // Reset carousels to first image when room changes
  useEffect(() => {
    if (emblaApiMobile) {
      emblaApiMobile.scrollTo(0, true); // true = instant, no animation
    }
    if (emblaApiDesktop) {
      emblaApiDesktop.scrollTo(0, true);
    }
  }, [room.name, emblaApiMobile, emblaApiDesktop]);

  // Group images into chunks of 3 for desktop (1 row)
  // If showPrimaryOnly is true, first slide is just the primary image, rest are groups of 3
  const desktopSlides = [];
  if (showPrimaryOnly && room.images.length > 0) {
    // First slide: single primary image
    desktopSlides.push([room.images[0]]);
    // Remaining slides: groups of 3
    for (let i = 1; i < room.images.length; i += 3) {
      desktopSlides.push(room.images.slice(i, i + 3));
    }
  } else {
    // Default behavior: all images in groups of 3
    for (let i = 0; i < room.images.length; i += 3) {
      desktopSlides.push(room.images.slice(i, i + 3));
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:min-h-[650px]">
      {/* Mobile Carousel */}
      <div className="md:hidden flex-shrink-0">
        <div className="overflow-hidden" ref={emblaRefMobile}>
          <div className="flex">
            {room.images.map((image, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0">
                <img 
                  src={image} 
                  alt={`${room.name} - Photo ${idx + 1}`}
                  className="w-full h-56 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(idx)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 py-3 bg-gray-50">
          {scrollSnapsMobile.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === selectedIndexMobile 
                  ? 'bg-[#f58220] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => scrollToMobile(idx)}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden" ref={emblaRefDesktop}>
          <div className="flex">
            {desktopSlides.map((slide, slideIdx) => (
              <div key={slideIdx} className="flex-[0_0_100%] min-w-0">
                {/* If this is the primary image slide (first slide with single image) */}
                {showPrimaryOnly && slideIdx === 0 && slide.length === 1 ? (
                  <div className="flex justify-center items-center">
                    <img 
                      src={slide[0]} 
                      alt={`${room.name} - Primary Photo`}
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(0)}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {slide.map((image, idx) => {
                      // Calculate the global image index
                      const globalIdx = showPrimaryOnly && slideIdx > 0 
                        ? 1 + (slideIdx - 1) * 3 + idx 
                        : slideIdx * 3 + idx;
                      return (
                        <img 
                          key={idx}
                          src={image} 
                          alt={`${room.name} - Photo ${globalIdx + 1}`}
                          className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openLightbox(globalIdx)}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Navigation */}
        {desktopSlides.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              onClick={scrollPrevDesktop}
              aria-label="Previous photos"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              onClick={scrollNextDesktop}
              aria-label="Next photos"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
            
        {/* Carousel Dots - Always show to maintain consistent spacing */}
        <div className="flex justify-center gap-2 py-3 bg-gray-50">
          {desktopSlides.length > 1 ? (
            scrollSnapsDesktop.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === selectedIndexDesktop 
                    ? 'bg-[#f58220] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollToDesktop(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))
          ) : (
            // Empty spacer div to maintain consistent height when no dots needed
            <div className="h-2" />
          )}
        </div>
      </div>

      <div className="p-5 md:p-6 pb-3 md:pb-3 flex-grow">
        <h3 className="text-xl md:text-2xl text-[#0a3d3d] mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4 text-sm md:text-base">{room.description}</p>
        <div className="flex flex-col md:flex-row md:gap-4">
          {/* First column - max 7 items */}
          <div className="flex-1">
            {room.features.slice(0, 7).map((feature, idx) => (
              <div key={idx} className="flex items-center text-gray-700 text-sm md:text-base mb-2">
                <span className="w-2 h-2 bg-[#f58220] rounded-full mr-2 md:mr-3 flex-shrink-0" />
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
          {/* Second column - remaining items */}
          {room.features.length > 7 && (
            <div className="flex-1">
              {room.features.slice(7).map((feature, idx) => (
                <div key={idx + 7} className="flex items-center text-gray-700 text-sm md:text-base mb-2">
                  <span className="w-2 h-2 bg-[#f58220] rounded-full mr-2 md:mr-3 flex-shrink-0" />
                  <span className="leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={room.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          roomName={room.name}
        />
      )}
    </div>
  );
}