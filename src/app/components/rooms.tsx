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
import roomBedWithSafe from 'figma:asset/349b239356ffbc7de1c999a663c23bf074f5f8b9.png';
// Ground Floor Apartment images
import apartmentCourtyard from 'figma:asset/4932cdef4be7145e445285e2655b332a0a5a9cf8.png';
import apartmentBathroomShower from 'figma:asset/fcb23c3b762c07bd5d763699fd4ba02fde069765.png';
import apartmentBathroomSink from 'figma:asset/052ff561eb03d67253af29d921ce4d42a4e9b01e.png';
import apartmentInteriorShelves from 'figma:asset/8034899bb5b4af8bffc7d33154530f72692b65bf.png';
import apartmentInteriorWardrobe from 'figma:asset/0fefeb906903c38c7f9d4115276ba65c9c12ec23.png';
import apartmentStorageUnit from 'figma:asset/2a5a41f90ea70d757805598eb63687a6e33213c4.png';
import apartmentWideView from 'figma:asset/5777600bb0dfbf0ab10d83930a32e0d1e6bebd3e.png';
import apartmentBedTowels from 'figma:asset/29bfd27db8ec17cb9bbb530bbbb2a45797927012.png';
import apartmentKitchen from 'figma:asset/2af56812ce855cb1ab80070206c522cfdb2e1eae.png';
import apartmentLivingRoom from 'figma:asset/c05def542a859510fc8b2c18bf42e805b84b1a2e.png';
// Two-Bedroom House images
import houseExterior from 'figma:asset/099fce94991b27efebc26df19baa33a29b248956.png';
import houseBalcony from 'figma:asset/d930debdc532fc36f49faa1519c4b762a2518840.png';
import houseLivingRoomTV from 'figma:asset/8b2527fd98f8ce365f1039d3c602103274ba0a61.png';
import houseLivingRoomDining from 'figma:asset/18ee650b3b634cbf3345df79f176d74c216bbb65.png';
import houseBedroom from 'figma:asset/c42962c8939494ab9e60d3da05eb49d786617d94.png';
import houseDiningArea from 'figma:asset/2fe59df327f66fa57a5c0e273e00c11894f8ea97.png';
import houseBedroomMain from 'figma:asset/e392648303f73a9bde4e3915e507a4e21ed6da02.png';
import houseVanity from 'figma:asset/653c08dc83289b9d9225459133cb3820e76ceaa5.png';
import houseWardrobe from 'figma:asset/bbded6a639fee6d0f4fcd86fb9c410a135206a63.png';
import houseBedroom2 from 'figma:asset/c269f732fe17b716fecad88e700a9fd702a3b978.png';
import houseBathtub from 'figma:asset/5017040fc36f17fcb202bf15c453e6f7c6b10a71.png';
import houseBathroom from 'figma:asset/32bba7e6a6a9fdf7a348b95a6302b07b75a14ebc.png';
import houseKitchenCounter from 'figma:asset/07878e5d94a11750c5417a0ca12c0f2be6ba763a.png';
import houseKitchenView from 'figma:asset/95eb92c0c80354e33427a215c1af9f9b3edb744e.png';
import houseKitchenFull from 'figma:asset/cf13c033df7f79102f2ea09154f03b800b2082d5.png';
import houseKitchenUtensils from 'figma:asset/760f1ef221dd79e3fd95fc48eb57a66da5d741bc.png';

export function Rooms() {
  const { t } = useLanguage();
  
  const rooms = t.rooms.roomTypes.map((roomType, index) => {
    let images;
    if (index === 0) {
      // Double Room with Private Balcony
      images = [roomWithMirror, kingBedRoom, roomBedWithSafe, roomAmenitiesWide, balconySeating, balconyView, bathroomShower];
    } else if (index === 1) {
      // Ground Floor Apartment
      images = [apartmentKitchen, apartmentWideView, apartmentLivingRoom, apartmentCourtyard, apartmentBedTowels, apartmentInteriorWardrobe, apartmentStorageUnit, apartmentInteriorShelves, apartmentBathroomShower, apartmentBathroomSink];
    } else {
      // Two-Bedroom House
      images = [houseExterior, houseBalcony, houseLivingRoomTV, houseLivingRoomDining, houseDiningArea, houseBedroom, houseBedroomMain, houseVanity, houseWardrobe, houseBedroom2, houseBathtub, houseBathroom, houseKitchenFull, houseKitchenCounter, houseKitchenUtensils, houseKitchenView];
    }
    
    return {
      name: roomType.name,
      description: roomType.description,
      images: images,
      features: roomType.features
    };
  });
  
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
            <RoomCard 
              key={index} 
              room={room} 
              showPrimaryOnly={true} // Show primary image first for both rooms
            />
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