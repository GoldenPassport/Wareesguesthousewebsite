import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLanguage } from '@/contexts/language-context';
import { siteConfig } from '@/config/siteConfig';
import logo from "figma:asset/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png";

export function SEOHead() {
  const { language } = useLanguage();
  
  // Get current URL (in production this will be your actual domain)
  const siteUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://wareeguesthouse.com';
  
  // Base URL without query params
  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : siteUrl;
  
  const currentUrl = `${siteUrl}/${language}`;
  
  // List of supported languages
  const languages = ['en', 'th', 'zh', 'ru', 'de', 'it', 'sv', 'fi'];
  
  // SEO-optimized description
  const description = `Experience authentic Thai hospitality at Waree's Guesthouse, a family-run B&B in Kata Beach, Phuket since 2000. Airbnb Superhost with 4.83★ rating and Guest Favorite status. Budget-friendly rooms with AC, WiFi, near beach. Book now!`;
  
  const title = "Waree's Guesthouse Kata Beach Phuket | Airbnb Superhost | Budget B&B Thailand";
  
  // Use the imported logo - this will be a proper URL at runtime
  const logoUrl = logo.startsWith('http') ? logo : `${siteUrl}${logo}`;
  
  // Structured Data (JSON-LD) for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Main Organization/LocalBusiness
      {
        "@type": "LodgingBusiness",
        "@id": `${siteUrl}#business`,
        "name": siteConfig.business.name,
        "alternateName": "Waree's Guesthouse Kata Beach",
        "description": description,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": logoUrl,
          "width": 512,
          "height": 512,
          "caption": "Waree's Guesthouse Logo - Bird and Key Design"
        },
        "image": `${siteUrl}/og-image.jpg`,
        "telephone": siteConfig.contact.phone.international,
        "email": siteConfig.contact.email,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.contact.address.street,
          "addressLocality": siteConfig.contact.address.subdistrict,
          "addressRegion": siteConfig.contact.address.province,
          "postalCode": siteConfig.contact.address.postalCode,
          "addressCountry": "TH"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.location.latitude,
          "longitude": siteConfig.location.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "starRating": {
          "@type": "Rating",
          "ratingValue": siteConfig.stats.airbnb.rating,
          "bestRating": "5"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": siteConfig.stats.airbnb.rating,
          "reviewCount": siteConfig.stats.airbnb.reviewCount + siteConfig.stats.tripadvisor.reviewCount,
          "bestRating": "5",
          "worstRating": "1"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true }
        ],
        "sameAs": [
          siteConfig.social.facebook.url,
          siteConfig.booking.airbnb.url,
          siteConfig.reviews.tripadvisor.url
        ]
      },
      // Website
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": siteUrl,
        "name": siteConfig.business.name,
        "description": description,
        "publisher": {
          "@id": `${siteUrl}#business`
        },
        "inLanguage": ["en", "th", "zh", "ru", "de", "it", "sv", "fi"]
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${siteUrl}#website`
        },
        "about": {
          "@id": `${siteUrl}#business`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${siteUrl}/og-image.jpg`
        },
        "inLanguage": "en"
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kata Beach Hotels",
            "item": `${siteUrl}#hotels`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Waree's Guesthouse",
            "item": currentUrl
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Keywords - Important for SEO */}
      <meta name="keywords" content="Waree's Guesthouse, Kata Beach hotel, Phuket accommodation, Thailand B&B, budget hotel Phuket, guesthouse Kata, Airbnb Phuket, Superhost, family run hotel, cheap hotel Phuket, Kata Beach B&B, Phuket guesthouse, beach accommodation Thailand, Kata Beach lodging, affordable hotel Phuket, 2 star hotel, guest house near beach, Phuket budget stay, Kata accommodation" />
      
      {/* Author & Publisher */}
      <meta name="author" content="Waree's Guesthouse" />
      <meta name="publisher" content="Waree's Guesthouse" />
      
      {/* Robots - Critical for Google Indexing */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="TH-83" />
      <meta name="geo.placename" content="Kata Beach, Phuket, Thailand" />
      <meta name="geo.position" content={`${siteConfig.location.latitude};${siteConfig.location.longitude}`} />
      <meta name="ICBM" content={`${siteConfig.location.latitude}, ${siteConfig.location.longitude}`} />
      
      {/* Language & Region */}
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteConfig.business.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Waree's Guesthouse Kata Beach Phuket" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="th_TH" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      <meta name="twitter:image:alt" content="Waree's Guesthouse Kata Beach Phuket" />
      
      {/* Mobile & Browser Config */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
      <meta name="theme-color" content="#545041" />
      <meta name="msapplication-TileColor" content="#545041" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Waree's Guesthouse" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Alternate Languages for SEO */}
      {languages.map(lang => (
        <link key={lang} rel="alternate" hrefLang={lang} href={`${siteUrl}/${lang}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en`} />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Tags */}
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Hotels & Accommodation" />
      <meta name="category" content="Travel, Hotels, Accommodation" />
      
      {/* Verification Tags (Add these when you set up in Google/Bing) */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      {/* <meta name="facebook-domain-verification" content="YOUR_FB_VERIFICATION_CODE" /> */}
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