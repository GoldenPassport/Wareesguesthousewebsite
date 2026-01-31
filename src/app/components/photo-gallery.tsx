import hostPhoto from "figma:asset/d873a09b9daa74b19fd6bfcd9d5107923506e80f.png";
import surfingPhoto from "figma:asset/fd44587c767eb50f2741b29b66410e6e33ab7e5b.png";
import beachPhoto from "figma:asset/56c596cd5a33949f5e17a640ea10e1226770ea89.png";
import viewpointPhoto from "figma:asset/4fc2e1b259bb7e4cf3619d1c04678de03d10b74f.png";
import waterparkPhoto from "figma:asset/5ed0347ef6ba377b3aed014e82457f62f67c3b79.png";
import guesthouseCourtyard from "figma:asset/9103a84bcde1c52daa2a9cf0281a93994f92a2dc.png";
import guesthouseEntrance from "figma:asset/5ff9106bea6d26fc1b1053a02cfc36823470b9ce.png";
import guesthouseStreetView from "figma:asset/87e0980cb43c2b86fabd01026a648813efa362af.png";
import guesthouseFrontSign from "figma:asset/b5e500c11743141ce9c535bfc9fc16c8222d03ca.png";
import hostsPhoto from "figma:asset/a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84.png";
import { Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { trackEvent } from '@/app/components/analytics';

export function PhotoGallery() {
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

  // Gallery photos (excluding first two host photos)
  const galleryPhotos = [
    { src: beachPhoto, alt: "Kata Beach scenery - Beautiful location in Phuket", title: t.gallery.paradiseFound, desc: t.gallery.paradiseFoundDesc },
    { src: viewpointPhoto, alt: "Scenic viewpoint overlooking Phuket's coastline", title: t.gallery.explore, desc: t.gallery.exploreDesc },
    { src: waterparkPhoto, alt: "Family fun at waterpark - Activities near Waree's Guesthouse", title: t.gallery.familyFun, desc: t.gallery.familyFunDesc },
    { src: guesthouseStreetView, alt: "Waree's Guesthouse street view with mountains", title: t.gallery.yourHome, desc: t.gallery.yourHomeDesc },
    { src: guesthouseFrontSign, alt: "Waree's Guesthouse with iconic bird and key logo", title: t.gallery.welcome, desc: t.gallery.welcomeDesc },
    { src: guesthouseCourtyard, alt: "Guesthouse courtyard - Relaxing and inviting space", title: t.gallery.courtyard, desc: t.gallery.courtyardDesc },
    { src: guesthouseEntrance, alt: "Guesthouse entrance - Welcoming and charming", title: t.gallery.entrance, desc: t.gallery.entranceDesc }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <Camera className="w-12 h-12 md:w-16 md:h-16 text-[#f58220] mx-auto mb-3 md:mb-4" />
          <h2 className="text-3xl sm:text-4xl text-[#0a3d3d] mb-3 md:mb-4">{t.gallery.title}</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {galleryPhotos.map((photo, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-[350px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/90 via-[#0a3d3d]/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="text-xl mb-2">{photo.title}</h3>
                        <p className="text-white/90 text-base leading-relaxed">
                          {photo.desc}
                        </p>
                      </div>
                    </div>
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
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - First row - 3 photos */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-6">
          {galleryPhotos.slice(0, 3).map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/90 via-[#0a3d3d]/40 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{photo.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid - Second row - 2 photos */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6">
          {galleryPhotos.slice(3, 5).map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/90 via-[#0a3d3d]/40 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{photo.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid - Third row - 2 photos */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {galleryPhotos.slice(5, 7).map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d3d]/90 via-[#0a3d3d]/40 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{photo.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#b3dce6]/30 to-[#f58220]/20 rounded-2xl p-8">
          <p className="text-[#0a3d3d] text-xl mb-4">
            <strong>{t.gallery.ctaTitle}</strong>
          </p>
          <p className="text-gray-600 mb-6 px-4 text-base sm:text-lg">
            {t.gallery.ctaText}
          </p>
          <a 
            href={siteConfig.booking.airbnb.getTrackedUrl('gallery_section_cta')}
            target="_blank" 
            rel="noopener noreferrer"
            id="airbnb-booking-gallery"
            onClick={() => {
              trackEvent.bookingClick('airbnb', 'gallery');
              trackEvent.ctaClick('Book Your Stay', 'gallery', 'airbnb');
            }}
            data-tracking-id="gallery_section_cta"
            data-tracking-section="gallery"
            data-tracking-platform="airbnb"
            className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t.gallery.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}