/**
 * Site Configuration
 *
 * Centralized configuration for contact information, social media links,
 * and other business details. Update these values here instead of
 * hardcoding them throughout the application.
 */

export const siteConfig = {
  // Business Information
  business: {
    name: "Waree's Guesthouse",
    legalName: "Waree's Guesthouse",
    established: "2000",
    slogan: "Your Family Home in Kata Beach",
  },

  // Contact Information
  contact: {
    email: "wareesguesthouse@hotmail.com",
    phone: {
      display: "+66 76 331 016", // Display format
      raw: "+66763310166", // Format for tel: links
      international: "+66 76 331 016",
    },
    address: {
      street: "9 Kata Rd",
      subdistrict: "Karon",
      district: "Mueang Phuket",
      province: "Phuket",
      postalCode: "83100",
      country: "Thailand",
      // Full formatted address
      full: "9 Kata Rd, Karon, Mueang Phuket District, Phuket 83100, Thailand",
    },
  },

  // Location Coordinates
  location: {
    latitude: 7.8167,
    longitude: 98.3,
    // Google Maps Embed URL (using coordinates)
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=7.8167,98.3000&hl=en&z=15&output=embed",
    // Google Maps Directions URL (from Phuket International Airport to the guesthouse)
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/Phuket+International+Airport,+222,+Mai+Khao,+Thalang+District,+Phuket+83110,+Thailand/7.8167,98.3000",
    // Airport Information
    airport: {
      name: "Phuket International Airport",
      code: "HKT",
      distanceKm: 45,
      distanceMiles: 28,
      travelTimeMinutes: "45-60",
    },
  },

  // Social Media Links
  social: {
    facebook: {
      url: "https://www.facebook.com/wareesguesthouse/",
      handle: "@wareesguesthouse",
    },
    line: {
      url: "https://line.me/ti/p/~0763310166",
      id: "0763310166",
    },
    instagram: {
      url: "", // Add when available
      handle: "",
    },
    twitter: {
      url: "", // Add when available
      handle: "",
    },
  },

  // Booking Platform Links
  booking: {
    airbnb: {
      url: "https://www.airbnb.com/rooms/726744824043972517",
      roomId: "726744824043972517",
      // Helper function to add UTM tracking to Airbnb URLs
      getTrackedUrl: (source: string) => {
        const baseUrl =
          "https://www.airbnb.com/rooms/726744824043972517";
        const params = new URLSearchParams({
          utm_source: "wareeguesthouse_website",
          utm_medium: "referral",
          utm_campaign: "direct_booking",
          utm_content: source, // e.g., 'hero', 'footer', 'rooms'
        });
        return `${baseUrl}?${params.toString()}`;
      },
    },
    bookingCom: {
      url: "", // Add when available
      propertyId: "",
    },
    agoda: {
      url: "", // Add when available
      propertyId: "",
    },
  },

  // Review Platform Links
  reviews: {
    tripadvisor: {
      url: "https://www.tripadvisor.com/Hotel_Review-g1210687-d3136593-Reviews-Waree_s_Guesthouse-Kata_Beach_Karon_Phuket.html",
      locationId: "d3136593",
    },
    google: {
      url: "", // Add when available
      placeId: "",
    },
  },

  // Business Hours (24-hour format)
  hours: {
    checkIn: "14:00",
    checkOut: "11:00",
    reception: {
      open: "08:00",
      close: "22:00",
    },
  },

  // Hosts Information
  hosts: {
    primary: {
      name: "Anna",
      role: "Superhost",
      yearsHosting: 10,
    },
    team: ["Anna", "Josh", "Mam", "Fin"],
  },

  // Ratings & Stats (Update these periodically)
  stats: {
    airbnb: {
      rating: 4.83,
      reviewCount: 35,
      superhostStatus: true,
      guestFavorite: true,
      lastUpdated: "2026-01-23",
    },
    tripadvisor: {
      rating: 4.5,
      reviewCount: 126,
      lastUpdated: "2026-01-23",
    },
  },

  // Features
  features: {
    starRating: 2, // Self-described star rating
    budgetFriendly: true,
    familyRun: true,
    petFriendly: true, // Cats
    wifi: true,
    airConditioning: true,
  },
} as const;

// Type exports for better TypeScript support
export type SiteConfig = typeof siteConfig;