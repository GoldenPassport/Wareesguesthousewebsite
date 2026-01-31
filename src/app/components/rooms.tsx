import { useLanguage } from '@/contexts/language-context';
import { Mail } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { trackEvent } from '@/app/components/analytics';
import { RoomCard } from '@/app/components/room-card';
import bathroomShower from 'figma:asset/fe90856b4d0401840ae1c7eae87b65bf4a9d0967.png';
import balconyView from 'figma:asset/afcf207372169cde9fed998c2cab3df10bf19418.png';
import balconySeating from 'figma:asset/4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3.png';
import kingBedRoom from 'figma:asset/ae87d5913824777f33e1cf7b1aa5bb9ff9e76937.png';
import roomWithMirror from 'figma:asset/b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc.png';
import roomAmenitiesWide from 'figma:asset/7535206b35eef49ec344fb3a87c9dd37de145c2e.png';
// Ground Floor Apartment images
import apartmentCourtyard from 'figma:asset/4932cdef4be7145e445285e2655b332a0a5a9cf8.png';
import apartmentBathroomShower from 'figma:asset/fcb23c3b762c07bd5d763699fd4ba02fde069765.png';
import apartmentBathroomSink from 'figma:asset/052ff561eb03d67253af29d921ce4d42a4e9b01e.png';

export function Rooms() {
  const { t } = useLanguage();
  
  const rooms = t.rooms.roomTypes.map((roomType, index) => ({
    name: roomType.name,
    description: roomType.description,
    images: index === 0 
      ? [roomWithMirror, kingBedRoom, roomAmenitiesWide, balconySeating, balconyView, bathroomShower]
      : [apartmentCourtyard, apartmentBathroomShower, apartmentBathroomSink],
    features: roomType.features
  }));
  
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
            <div className="text-sm sm:text-base text-gray-600">{t.rooms.roomsLabel}</div>
          </div>
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">3</div>
            <div className="text-sm sm:text-base text-gray-600">{t.rooms.floorsLabel}</div>
          </div>
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">1999</div>
            <div className="text-sm sm:text-base text-gray-600">{t.rooms.establishedLabel}</div>
          </div>
          <div className="text-center">
            <Building2 className="w-10 h-10 text-[#f58220] mx-auto mb-2" />
            <div className="text-2xl text-[#0a3d3d] mb-1">220V</div>
            <div className="text-sm sm:text-base text-gray-600">{t.rooms.voltageLabel}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
        
        {/* Additional accommodation options */}
        <div className="mt-12 bg-white rounded-lg p-8 max-w-2xl mx-auto text-center border-2 border-[#b3dce6] px-4 sm:px-8">
          <Mail className="w-12 h-12 text-[#f58220] mx-auto mb-4" />
          <h3 className="text-xl text-[#0a3d3d] mb-3 text-center">{t.rooms.needMoreSpace}</h3>
          <p className="text-gray-600 mb-4 text-center">
            {t.rooms.moreSpaceDesc}
          </p>
          <a 
            href={`mailto:${siteConfig.contact.email}`}
            onClick={() => {
              trackEvent.contactClick('email', 'rooms');
              trackEvent.emailClick('rooms_need_more_space');
            }}
            data-tracking-id="rooms_need_more_space_email"
            data-tracking-section="rooms"
            data-tracking-context="need_more_space"
            className="inline-block text-[#f58220] hover:text-[#d47020] transition-colors text-center break-all"
          >
            {siteConfig.contact.email}
          </a>
        </div>

        <div className="text-center mt-12">
          <a 
            href={siteConfig.booking.airbnb.getTrackedUrl('rooms_section_cta')}
            target="_blank" 
            rel="noopener noreferrer"
            id="airbnb-booking-rooms"
            onClick={() => {
              trackEvent.bookingClick('airbnb', 'rooms');
              trackEvent.ctaClick('View Availability on Airbnb', 'rooms', 'airbnb');
            }}
            data-tracking-id="rooms_section_cta"
            data-tracking-section="rooms"
            data-tracking-platform="airbnb"
            className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t.rooms.viewAvailability}
          </a>
        </div>
      </div>
    </section>
  );
}