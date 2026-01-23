import { useLanguage } from '@/contexts/language-context';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { 
  bathroomShower, 
  bathroomSink, 
  balconyView, 
  balconySeating, 
  kingBedRoom, 
  roomAmenities, 
  roomWithMirror, 
  roomAmenitiesWide, 
  fullRoomView 
} from '@/assets/images';

export function Rooms() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
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
  
  const rooms = [
    {
      name: t.rooms.roomName,
      description: t.rooms.roomDesc,
      images: [roomWithMirror, kingBedRoom, roomAmenitiesWide, balconySeating, balconyView, bathroomShower],
      features: t.rooms.featuresList
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-[#b3dce6]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-[#0a3d3d] text-center mb-4">{t.rooms.title}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t.rooms.subtitle}
        </p>
        
        {/* Property Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">8</div>
            <div className="text-sm text-gray-600">{t.rooms.roomsLabel}</div>
          </div>
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">3</div>
            <div className="text-sm text-gray-600">{t.rooms.floorsLabel}</div>
          </div>
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">1999</div>
            <div className="text-sm text-gray-600">{t.rooms.establishedLabel}</div>
          </div>
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">220V</div>
            <div className="text-sm text-gray-600">{t.rooms.voltageLabel}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {room.images.map((image, idx) => (
                      <div key={idx} className="flex-[0_0_100%] min-w-0">
                        <img 
                          src={image} 
                          alt={`${room.name} - Photo ${idx + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Dots */}
                <div className="flex justify-center gap-2 py-3 bg-gray-50">
                  {scrollSnaps.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === selectedIndex 
                          ? 'bg-[#f58220] w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => scrollTo(idx)}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-3 gap-2">
                {room.images.map((image, idx) => (
                  <img 
                    key={idx}
                    src={image} 
                    alt={room.name}
                    className="w-full h-80 object-cover"
                  />
                ))}
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl text-[#0a3d3d] mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{room.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm md:text-base">
                      <span className="w-2 h-2 bg-[#f58220] rounded-full mr-2 md:mr-3 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional accommodation options */}
        <div className="mt-12 bg-white rounded-lg p-8 max-w-2xl mx-auto text-center border-2 border-[#b3dce6]">
          <Mail className="w-12 h-12 text-[#f58220] mx-auto mb-4" />
          <h3 className="text-xl text-[#0a3d3d] mb-3">{t.rooms.needMoreSpace}</h3>
          <p className="text-gray-600 mb-4">
            {t.rooms.moreSpaceDesc}
          </p>
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-block text-[#f58220] hover:text-[#d47020] transition-colors"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <div className="text-center mt-12">
          <a 
            href={siteConfig.booking.airbnb.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {t.rooms.viewAvailability}
          </a>
        </div>
      </div>
    </section>
  );
}