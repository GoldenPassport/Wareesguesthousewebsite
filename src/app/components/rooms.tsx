import { useLanguage } from '@/contexts/language-context';
import { Mail } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { trackEvent } from '@/app/components/analytics';
import { RoomCard } from '@/app/components/room-card';
import bathroomShower from 'figma:asset/fe90856b4d0401840ae1c7eae87b65bf4a9d0967.png';
import bathroomSink from 'figma:asset/c8eb8834474b6ee7e9b14931d4731257b7f460f4.png';
import balconyView from 'figma:asset/afcf207372169cde9fed998c2cab3df10bf19418.png';
import balconySeating from 'figma:asset/4ef3e0d03f87cafbc8eaaaea75adf4ec188f3ab3.png';
import kingBedRoom from 'figma:asset/ae87d5913824777f33e1cf7b1aa5bb9ff9e76937.png';
import roomAmenities from 'figma:asset/e624635e32d87a6ef0d6605d63e4816d15a69a0a.png';
import roomWithMirror from 'figma:asset/b94d4d20d14168f3e5fed1c480d0c31daa2cf4cc.png';
import roomAmenitiesWide from 'figma:asset/7535206b35eef49ec344fb3a87c9dd37de145c2e.png';
import fullRoomView from 'figma:asset/aaeceff6fe165faa2028b5c18597728bddcf2ac4.png';
// Ground Floor Apartment images
import apartmentLivingRoom from 'figma:asset/351d3f8845ce3ca91a2dc0674b1bf5e82b63027a.png';
import apartmentFullView from 'figma:asset/841cd18c9b53c51de2346a1af27be97c9c00cc3f.png';
import apartmentKitchen from 'figma:asset/69de0ba210fe8ee33ccb991d65d44efb4de9d5f6.png';
import apartmentBedroom from 'figma:asset/3571ead409000b8a9924c66d801b96158c6961ca.png';
import apartmentBedDetail from 'figma:asset/041651d3fede3f41701b2f7b2e55d7f593c816b3.png';
import apartmentInterior from 'figma:asset/f1ca437fd7cd6f33d58ff2036f9633294a8c0fdb.png';
import apartmentBathroom from 'figma:asset/0f06e42f756e4a03ddd2f7414c96f4e056f1de5f.png';
import apartmentBathroomShower from 'figma:asset/72d876f74c91ce72688e72932aa9f35c0d83320a.png';

export function Rooms() {
  const { t } = useLanguage();
  
  const rooms = t.rooms.roomTypes.map((roomType, index) => ({
    name: roomType.name,
    description: roomType.description,
    images: index === 0 
      ? [roomWithMirror, kingBedRoom, roomAmenitiesWide, balconySeating, balconyView, bathroomShower]
      : [apartmentLivingRoom, apartmentFullView, apartmentKitchen, apartmentBedDetail, apartmentBedroom, apartmentInterior, apartmentBathroom, apartmentBathroomShower],
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