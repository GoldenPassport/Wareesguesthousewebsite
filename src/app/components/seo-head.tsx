import { Helmet, HelmetProvider } from 'react-helmet-async';

export function SEOHead() {
  // Note: For favicons to work in production, you'll need to place icon files in the public directory
  // and reference them with absolute paths like /favicon.ico
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Waree's Guesthouse - Your Family Away from Home in Kata Beach, Phuket</title>
      <meta 
        name="description" 
        content="Experience authentic Thai hospitality at Waree's Guesthouse in Kata Beach, Phuket. Family-run B&B since 2000 with excellent reviews, Superhost status, and 4.83 rating. Budget-friendly accommodation near the beach." 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Waree's Guesthouse - Kata Beach, Phuket" />
      <meta 
        property="og:description" 
        content="Your family away from home in Kata Beach. Budget-friendly B&B with authentic Thai hospitality since 2000." 
      />
      <meta property="og:site_name" content="Waree's Guesthouse" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Waree's Guesthouse - Kata Beach, Phuket" />
      <meta 
        name="twitter:description" 
        content="Your family away from home in Kata Beach. Budget-friendly B&B with authentic Thai hospitality since 2000." 
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="Waree's Guesthouse, Kata Beach, Phuket, Thailand, B&B, accommodation, budget hotel, guesthouse, Superhost, AirBNB, family-run, beach hotel" />
      <meta name="author" content="Waree's Guesthouse" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="TH-83" />
      <meta name="geo.placename" content="Kata Beach, Phuket" />
      <meta name="geo.position" content="7.837000;98.300000" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0a3d3d" />
      <meta name="msapplication-TileColor" content="#0a3d3d" />
    </Helmet>
  );
}

export function SEOProvider({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <SEOHead />
      {children}
    </HelmetProvider>
  );
}