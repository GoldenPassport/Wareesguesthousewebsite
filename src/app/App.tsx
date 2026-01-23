import { LanguageProvider } from '@/contexts/language-context';
import { SEOProvider } from '@/app/components/seo-head';
import { Hero } from '@/app/components/hero';
import { About } from '@/app/components/about';
import { AirbnbHighlights } from '@/app/components/airbnb-highlights';
import { Reviews } from '@/app/components/reviews';
import { Rooms } from '@/app/components/rooms';
import { Amenities } from '@/app/components/amenities';
import { PhotoGallery } from '@/app/components/photo-gallery';
import { ThingsToDo } from '@/app/components/things-to-do';
import { Location } from '@/app/components/location';
import { SocialFeed } from '@/app/components/social-feed';
import { Footer } from '@/app/components/footer';

function App() {
  return (
    <SEOProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white">
          <Hero />
          <About />
          <AirbnbHighlights />
          <Reviews />
          <Rooms />
          <Amenities />
          <PhotoGallery />
          <ThingsToDo />
          <Location />
          <SocialFeed />
          <Footer />
        </div>
      </LanguageProvider>
    </SEOProvider>
  );
}

App.displayName = 'App';

export default App;
