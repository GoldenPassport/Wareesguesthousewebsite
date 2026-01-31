import { Hero } from '@/app/components/hero';
import { About } from '@/app/components/about';
import { AirbnbHighlights } from '@/app/components/airbnb-highlights';
import { Reviews } from '@/app/components/reviews';
import { Rooms } from '@/app/components/rooms';
import { Amenities } from '@/app/components/amenities';
import { PhotoGallery } from '@/app/components/photo-gallery';
import { ThingsToDo } from '@/app/components/things-to-do';
import { AdventureTrips } from '@/app/components/adventure-trips';
import { Location } from '@/app/components/location';
import { SocialFeed } from '@/app/components/social-feed';
import { Footer } from '@/app/components/footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <AirbnbHighlights />
      <Reviews />
      <Rooms />
      <Amenities />
      <PhotoGallery />
      <ThingsToDo />
      <AdventureTrips />
      <Location />
      <SocialFeed />
      <Footer />
    </>
  );
}

HomePage.displayName = 'HomePage';
