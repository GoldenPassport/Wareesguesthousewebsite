export type Language =
  | "en"
  | "th"
  | "zh"
  | "ru"
  | "de"
  | "it"
  | "sv"
  | "fi";

export const translations = {
  en: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Waree's Guesthouse",
      subtitle: "Your Family Home in Kata Beach",
      tagline:
        "Experience Phuket with authentic Thai hospitality since 2000",
      emailButton: "Email Us",
      bookButton: "Book on Airbnb",
      reviewsButton: "Read Reviews",
    },
    // Common UI
    common: {
      showDetails: "Show Details",
      hideDetails: "Hide Details",
    },
    // About
    about: {
      title: "Meet Anna, Josh & Mam",
      p1: "Hi! Just Anna, Josh, Mam—that's us! Here since 2000. Most guests who enjoy us, do so because of our <strong>family feel and relaxed home away from home style</strong>.",
      p2: "Let's hang out at our outdoor lounge, in our small bar, or play badminton with us in the street—we genuinely enjoy spending time with guests! We help arrange trips, book taxis, restaurants and more.",
      p3: "<strong>We believe that travel is all about the people you meet!</strong>",
      note: "<strong>🎵 Note:</strong> There's an outdoor market behind us playing chill live music in the evenings. They finish between 22:00 and 23:00 most nights (no later than midnight).",
      budget:
        'Like we said, we\'re just a regular family, running our small, relaxed guesthouse/homestay. We consider ourselves <strong>"2 Star" / budget-friendly</strong>.',
      rightForYouTitle: "✨ We Think You'll Love Us If You:",
      rightForYou: [
        "Want a more unique and local experience",
        "Enjoy feeling part of the family, meeting new people and making new friends",
        "On a budget, but appreciate small luxuries like air-conditioning, clean sheets and hot water",
        "Appreciate our location—not near a noisy road or bars, but still walking distance to the beach",
        "Love cats! 🐱",
      ],
      notRightTitle: "💭 We May Not Be Right For You If You:",
      notRight: [
        "Need professional facilities and services you'd find in a big hotel",
        "Are very specific about bed types, pillows or towels",
        "Need to be very close to the beach",
        "Simply need a place to sleep without the local experience",
        "Are sensitive to developing country realities (occasional blackouts, insects, geckos, etc.)",
        "Allergic to or don't like cats",
      ],
      hostsPhotoAlt:
        "Mam, Anna (sisters), and Waree - The founding family of Waree's Guesthouse",
      hostPhotoAlt:
        "Anna, Josh and Fin - Your hosts at Waree's Guesthouse",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb Superhost • Guest Favourite",
      subtitle: "Rated 4.83 out of 5 by our wonderful guests",
      superhost: "Anna is an Airbnb Superhost",
      superhostDesc:
        "Superhosts are experienced, highly rated hosts committed to providing great stays",
      guestFavorite: "Guest Favourite",
      guestFavoriteDesc:
        "One of the most loved homes on Airbnb based on ratings, reviews, and reliability",
      rating: "4.83 Rating",
      ratingDesc:
        "Consistently excellent reviews from guests who love our family atmosphere",
      achievementsDate:
        "Airbnb achievements as of January 23, 2026",
      ratingText: "Rating from 35 Reviews",
      superhostTitle: "Superhost",
      superhostYears: "Anna • 10 Years Hosting",
      checkInTitle: "Exceptional Check-In",
      checkInDesc:
        "Recent guests gave the check-in process a 5-star rating",
      locationTitle: "Unbeatable Location",
      locationDesc:
        "100% of guests in the past year gave this location a 5-star rating",
      trustedTitle: "Trusted Experience",
      ctaText:
        "See why guests keep coming back and rating us 5 stars!",
      ctaButton: "Check Availability on Airbnb",
    },
    // Reviews
    reviews: {
      title: "What Our Guests Say",
      subtitle:
        "Real experiences from travellers who've stayed with us",
      ratingsDate: "Ratings as of January 23, 2026",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "From 35 Reviews",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "From 126 Reviews",
      // Rating categories
      categories: {
        cleanliness: "Cleanliness",
        accuracy: "Accuracy",
        checkIn: "Check-in",
        communication: "Communication",
        location: "Location",
        value: "Value",
        sleepQuality: "Sleep Quality",
        rooms: "Rooms",
        service: "Service",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "Great hosts, spotlessly clean, comfortable bed, nice balcony, quiet... family-run business with a lot of love. We loved staying here!",
          author: "Andreas, Airbnb",
        },
        {
          text: "Anna is super lovely, nice, helpful, and friendly. The rooms are really clean and comfortable. Highly recommended!",
          author: "Rosa, Airbnb",
        },
        {
          text: "Probably the friendliest guesthouse owner we've met on our entire trip. Made us feel completely at home.",
          author: "Michael, TripAdvisor",
        },
        {
          text: "Clean rooms, friendly staff, perfect location. You really feel like part of the family here!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Airbnb Reviews",
      readTripadvisorButton: "TripAdvisor Reviews",
    },
    // Rooms
    rooms: {
      title: "Our Guesthouse",
      subtitle:
        "Comfortable, clean, and equipped with everything you need",
      roomTypes: [
        {
          name: "Double Room with Private Balcony",
          description:
            "Cozy, comfortable room with everything you need for a relaxing stay",
          features: [
            "King Bed",
            "Ensuite Shower Room (Hot Water)",
            "Air Conditioning",
            "Refrigerator",
            "Free WiFi",
            "Kettle",
            "Private Balcony",
            "Safe",
          ],
        },
        {
          name: "Ground Floor Apartment",
          description:
            "Offering additional living space, this apartment has a sofa and kitchen. Sleeps 3 guests with inner courtyard and quiet street views.",
          features: [
            "1 Bedroom, separate lounge with attached kitchen",
            "Spacious Ensuite Shower Room (Hot Water)",
            "Full Kitchen with Stovetop & Refrigerator",
            "Free WiFi",
            "Air Conditioning",
            "Inner Courtyard View",
            "Quiet Street View",
            "Private Entrance",
            "Sofa Bed",
            "Dining Area",
            "Safety Deposit Box",
            "Flat-screen TV with Satellite & Cable",
          ],
        },
        {
          name: "Two-Bedroom House",
          description:
            "Spacious 65 sqm house with two bedrooms, kitchen, and private entrance. Perfect for families or groups with inner courtyard and quiet street views.",
          features: [
            "2 Bedrooms",
            "1 Bathroom with Bath & Shower",
            "Full Kitchen with Dining Area",
            "Free WiFi",
            "Air Conditioning",
            "Flat-screen TV",
            "Inner Courtyard View",
            "Quiet Street View",
            "Private Entrance",
            "Seating Area with Sofa",
            "Outdoor Furniture",
            "Wardrobe or Closet",
          ],
        },
      ],
      // Property details
      roomsLabel: "Rooms",
      floorsLabel: "Floors",
      establishedLabel: "Established",
      voltageLabel: "Voltage",
      // More space section
      needMoreSpace: "Need More Space?",
      moreSpaceDesc:
        "Looking for a suite or apartment? We can arrange other accommodation options to suit your needs. Just email us directly and we'll help find the perfect space for your stay!",
      // CTA button
      viewAvailability: "View Availability on Airbnb",
    },
    // Amenities
    amenities: {
      title: "Everything You Need",
      subtitle:
        "We've thought of all the details to make your stay comfortable and worry-free. Plus, Anna and Josh are always happy to help organise taxis, island trips, restaurant recommendations, and more!",
      items: [
        {
          title: "Air Conditioning",
          description: "Stay cool in tropical weather",
        },
        {
          title: "Free WiFi",
          description: "High-speed internet access",
        },
        {
          title: "Refrigerator",
          description: "Keep drinks and snacks cold",
        },
        {
          title: "Outdoor Dining & BBQ",
          description: "Enjoy meals in tropical setting",
        },
        {
          title: "Quality Bedding",
          description: "Extra pillows, blankets & linens",
        },
        {
          title: "Iron Available",
          description: "Keep your clothes looking fresh",
        },
        {
          title: "Toiletries Provided",
          description: "Shampoo, soap, towels & essentials",
        },
        {
          title: "Scooter Rental",
          description: "Convenient motorbike rentals available",
        },
        {
          title: "Luggage Storage",
          description: "Early arrival or late departure",
        },
        {
          title: "Long-Term Stays Welcome",
          description: "28+ days available",
        },
        {
          title: "Personal Host Greeting",
          description: "Anna welcomes every guest",
        },
        {
          title: "Security & Safety",
          description: "Fire extinguisher & first aid kit",
        },
      ],
      beachAlt:
        "Kata Beach - Just steps from Waree's Guesthouse",
    },
    // Photo Gallery
    gallery: {
      title: "Life at Waree's",
      subtitle:
        "Meet your hosts, explore Kata Beach, and discover the authentic Phuket experience that awaits you",
      familyMatters: "Family Matters :)",
      familyMattersDesc:
        "Mam, Anna & Waree - Your family away from home",
      meetHosts: "Meet Your Hosts",
      meetHostsDesc:
        "Anna, Josh & Fin - Your family away from home since 2000",
      paradiseFound: "Paradise Found",
      paradiseFoundDesc:
        "Stunning views, crystal waters, and peaceful island life",
      explore: "Explore the Island",
      exploreDesc:
        "Discover breathtaking viewpoints and hidden gems around Phuket",
      familyFun: "Family Fun",
      familyFunDesc:
        "Waterparks, attractions, and activities for all ages nearby",
      yourHome: "Your Home in Kata",
      yourHomeDesc:
        "Nestled in the heart of Kata Beach with stunning mountain views",
      welcome: "Welcome to Waree's",
      welcomeDesc:
        "Look for our iconic bird and key logo - your home away from home",
      courtyard: "Guesthouse Courtyard",
      courtyardDesc:
        "A peaceful and inviting space for relaxation and enjoyment",
      entrance: "Guesthouse Entrance",
      entranceDesc:
        "A welcoming and charming entrance to your new home away from home",
      ctaTitle: "Ready to create your own memories?",
      ctaDesc:
        "Join the Waree's family and experience authentic Thai hospitality in one of Phuket's most beautiful locations",
      ctaButton: "Book Your Stay",
    },
    // Things to Do
    thingsToDo: {
      title: "Things to Do & Nearby",
      subtitle:
        "Everything you need is just minutes away - beaches, attractions, shops, and local conveniences",
      attractionsTitle: "Beaches & Attractions",
      kataBeach: "Kata Beach",
      kataBeachDesc: "Beautiful white sand beach",
      kataBeachDist: "10 min walk",
      karonBeach: "Karon Beach",
      karonBeachDesc: "Long stretch of pristine sand",
      karonBeachDist: "15 min walk",
      viewpoint: "Karon Viewpoint",
      viewpointDesc: "Breathtaking coastal views",
      viewpointDist: "Short drive",
      bigBuddha: "Big Buddha",
      bigBuddhaDesc: "Iconic Phuket landmark",
      bigBuddhaDist: "20 min drive",
      watChalong: "Wat Chalong Temple",
      watChalongDesc: "Beautiful Buddhist temple",
      watChalongDist: "25 min drive",
      nightMarket: "Kata Night Market",
      nightMarketDesc: "Local food & shopping",
      nightMarketDist: "Behind us! 🎵",
      oldTown: "Old Phuket Town",
      oldTownDesc: "Historic Sino-Portuguese architecture",
      oldTownDist: "30 min drive",
      getDirections: "Get Directions",
      conveniencesTitle: "Nearby Conveniences",
      atm: "ATM",
      atmDesc: "Cash withdrawal",
      atmDist: "5 min walk",
      pharmacy: "Patak Pharmacy",
      pharmacyDesc: "Healthcare & medicine",
      pharmacyDist: "5 min walk",
      sevenEleven: "7-Eleven",
      sevenElevenDesc: "24/7 convenience store",
      sevenElevenDist: "5 min walk",
      macro: "Macro Market",
      macroDesc: "Groceries & supplies",
      macroDist: "5 min walk",
      clinic: "Clinic & Hospital",
      clinicDesc: "Medical services nearby",
      clinicDist: "Short drive",
      jungceylon: "Jungceylon",
      jungceylonDesc: "Major shopping centre",
      jungceylonDist: "7.3 km • Patong",
      restaurants: "Local Restaurants",
      restaurantsDesc: "Thai & international food",
      restaurantsDist: "2 min walk",
      localTip:
        "<strong>💡 Local Tip:</strong> We're happy to help you arrange transport, recommend restaurants, book tours, and share our favourite local spots. Just ask—we love helping our guests discover the real Phuket!",
    },
    // 2-Hour Adventures
    adventures: {
      title: "2-Hour Adventure Ideas",
      subtitle: "Fun mini-trips perfect for a morning or afternoon escape",
      duration: "~2 hours",
      trips: [
        {
          name: "Big Buddha & Temple Trail",
          description: "Experience Buddhism firsthand and take in stunning 360° island views",
          purpose: "Cultural immersion, photography, and breathtaking viewpoints",
          transport: "Scooter (recommended) or taxi",
          dresscode: "Legs covered - no swimmers or skirts",
          stops: [
            {
              name: "Kata Beach View Point",
              time: "15 min",
              activity: "Jump off for panoramic views and grab an ice-cold mango smoothie",
              tip: "Trust me, you'll thank me later - the mango smoothie is essential!",
              mapLink: "https://maps.app.goo.gl/EGhPrq7cFn4dKm27A"
            },
            {
              name: "Big Buddha",
              time: "60 min",
              activity: "Walk around the stunning 45-meter statue with 360° island views. See monks praying and soak in the atmosphere",
              tip: "Without a scooter, be prepared to hike up a steep road in warm temperatures - totally worth it! With a scooter, you can ride straight up",
              mapLink: "https://maps.app.goo.gl/s3tJzWLYywEbrAHY9"
            },
            {
              name: "Wat Chalong Temple",
              time: "40 min",
              activity: "Phuket's most important temple - a small adventure in itself",
              tip: "Coming down from Big Buddha, pay attention to the green rural roads. On a scooter, you'll see the 'local' vibe and houses - it's beautiful!",
              mapLink: "https://maps.app.goo.gl/BP1nq5mMzTqgSfNo8"
            },
            {
              name: "Back to Waree's",
              time: "",
              activity: "Reflect on how different and beautiful people can be",
              tip: "Whether religious or not, Buddhism offers a fascinating 180° from Abrahamic beliefs - focusing on the 'I' in a non-selfish way rather than your place in community",
              mapLink: "https://maps.app.goo.gl/NFova6qdwRZtQ97M6"
            }
          ]
        },
        {
          name: "\"Big\" Bike Tour",
          description: "Ride Phuket's scenic coastal roads on a proper motorcycle",
          purpose: "Motorcycle touring, coastal views, and island exploration",
          transport: "Full motorcycle license required",
          dresscode: "Helmet & protective gear recommended",
          stops: [
            {
              name: "Pick up Motorcycle",
              time: "30 min",
              activity: "Rent from Phuket Town Centre - plenty of shops with new models. I got my Honda Rebel here!",
              tip: "You need a FULL motorcycle license, not just the mini scooter one. Police often check around Kata/Karon, so be legit!",
              mapLink: "https://maps.app.goo.gl/NFova6qdwRZtQ97M6"
            },
            {
              name: "Karon Viewpoint",
              time: "20 min",
              activity: "Pull over for some of the best panoramic views in Phuket - three bays in one shot",
              tip: "Police often set up here, so make sure your license and bike papers are in order. Worth the stop though!",
              mapLink: "https://maps.app.goo.gl/EGhPrq7cFn4dKm27A"
            },
            {
              name: "Phuket Big Bike",
              time: "10 min",
              activity: "Drive past (or stop if you're dreaming big!) - BMW showroom where fantasies are made",
              tip: "I always daydream about buying a BMW, parking it with a friend, and coming back each year... then reality hits! 😄",
              mapLink: "https://maps.app.goo.gl/ujzvhgkE3o5Q4DLP9"
            },
            {
              name: "Rawai Seafood Market",
              time: "60 min",
              activity: "Lunch break! Rawai beach road is amazing - so much choice, not just seafood",
              tip: "The beach road vibe here is unbeatable. Take your time choosing a spot - there are dozens of great options",
              mapLink: "https://maps.app.goo.gl/AGShCoft56TojrsB7"
            },
            {
              name: "Promthep Cape",
              time: "30 min",
              activity: "Southern tip of Phuket - walk around and soak in the views. Can get busy during peak season",
              tip: "Even if it's crowded, it's worth it. The lighthouse walk and viewpoints are stunning",
              mapLink: "https://maps.app.goo.gl/NMhgMLVjuBi8b8UVA"
            },
            {
              name: "Yanui Beach",
              time: "30 min",
              activity: "Relaxing drink spot - save your drinking till you get here, it's totally worth the wait",
              tip: "Perfect wind-down spot before heading back. The beach vibes are perfect here",
              mapLink: "https://maps.app.goo.gl/3BMH5MAKcksauDXn9"
            },
            {
              name: "Back to Waree's",
              time: "",
              activity: "Just windy roads, tropical greenery, and letting your brain detox. This is what biking in Thailand is all about!",
              tip: "Fun fact: There are biking groups in the area doing longer trips to Kuala Lumpur, Bangkok, and beyond. If you're into touring, research and join a group!",
              mapLink: "https://maps.app.goo.gl/NFova6qdwRZtQ97M6"
            }
          ]
        },
        {
          name: "Hidden Beaches Hopper",
          description: "Discover secret spots locals love away from crowds",
          purpose: "Beach relaxation, swimming, and local vibes",
          dresscode: "Bring swimmers and sunblock",
          stops: [
            {
              name: "Kata Noi Beach",
              time: "90 min",
              activity: "The small neighbor to Kata beach - one of my personal favorites! Play lawn chess, eat great food, and do laps up and down the beach all day",
              tip: "Less crowded than main Kata beach but just as beautiful. The lawn chess is a unique touch you won't find everywhere!",
              mapLink: "https://maps.app.goo.gl/kjCYxSbXs7nyNoc56"
            },
            {
              name: "Nai Harn Beach",
              time: "90 min",
              activity: "Where the locals go - peaceful, beautiful, and authentic Phuket beach experience",
              tip: "If you see locals here, you know it's the real deal. This is where we come to actually relax!",
              mapLink: "https://maps.app.goo.gl/nAKo36mCRay3ZCcf9"
            },
            {
              name: "Back to Waree's",
              time: "",
              activity: "Sun-kissed and relaxed - the perfect beach day",
              tip: "These beaches are close to Kata/Karon, so no long journey needed for that peaceful beach vibe",
              mapLink: "https://maps.app.goo.gl/NFova6qdwRZtQ97M6"
            }
          ]
        },
        {
          name: "Old Town Food Walk",
          description: "Historic streets meet authentic Phuket flavors",
          purpose: "Street food, architecture photography, local culture",
          stops: [
            {
              name: "Thalang Road",
              time: "30 min",
              activity: "Colorful Sino-Portuguese buildings - photo heaven",
              tip: "Look for the street art murals"
            },
            {
              name: "Kopitiam by Wilai",
              time: "25 min",
              activity: "Traditional Phuket breakfast - dim sum & kopi",
              tip: "Try the hokkien noodles - local specialty"
            },
            {
              name: "Local Markets",
              time: "35 min",
              activity: "Sample roti, satay, and fresh fruit from vendors",
              tip: "Bargain gently and smile - prices are flexible"
            },
            {
              name: "Dessert at Torry's Ice Cream",
              time: "20 min",
              activity: "Finish with unique Thai-inspired ice cream flavors",
              tip: "Coconut ash or Thai tea flavor is a must"
            },
            {
              name: "Sunday Walking Street (Weekend Only)",
              time: "2 hrs",
              activity: "Browse crafts and street performances if visiting Sunday",
              tip: "Starts around 4pm on Sundays only"
            }
          ]
        }
      ]
    },
    // Location
    location: {
      title: "How to Get There",
      subtitle:
        "Located in the heart of Kata Beach, we're easy to reach from anywhere in Phuket",
      ourAddress: "Our Address",
      address:
        "44/5 Kata Road\nKata Beach, Karon\nPhuket 83100\nThailand",
      directions: "Get Directions",
      fromAirport: "From the Airport",
      distance: "Distance:",
      distanceValue: "Approximately 45 km (28 miles)",
      travelTime: "Travel Time:",
      travelTimeValue: "45-60 minutes by car",
      recommendedTitle: "Recommended for First-Time Visitors",
      recommendedSubtitle:
        "Take a taxi from Phuket International Airport",
      airportTaxiTitle: "🚖 Airport Taxi",
      airportTaxiDesc:
        "The easiest and most comfortable option for first-time visitors to Phuket. Official airport taxis are safe, reliable, and provide direct service to our door.",
      taxiCost: "Cost:",
      taxiCostValue: "Approximately 800-1,000 THB (fixed rate)",
      taxiWhere: "Where to find:",
      taxiWhereValue: "Official taxi counter in arrivals hall",
      taxiDuration: "Duration:",
      taxiDurationValue: "45-60 minutes direct to Kata Beach",
      taxiTip: "Tip:",
      taxiTipValue:
        "Keep your booking confirmation handy to show the driver",
      airportBusTitle: "🚌 Airport Bus",
      airportBusDesc:
        "Budget-friendly option with regular service to Kata Beach area.",
      busCost: "~150-200 THB",
      busDuration: "90-120 minutes",
      privateTransferTitle: "🚗 Private Transfer",
      privateTransferDesc:
        "Pre-booked transfer with meet & greet service available.",
      privateCost: "~1,200-1,500 THB",
      privateDuration: "45-60 minutes",
      localTransportTitle: "🛵 Local Transport",
      localTransportDesc:
        "Tuk-tuks and motorbike taxis available for short trips around Kata Beach.",
      localCost: "Varies by distance",
      localTip: "Always agree on price first",
      helpTitle: "Need help arranging transportation?",
      helpDesc:
        "Anna and Josh are happy to help you arrange a taxi or provide directions. Just message us after booking!",
      whatsappButton: "WhatsApp Us",
      callButton: "Call +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "Stay Connected",
      subtitle:
        "Follow us on Facebook for daily updates, guest photos, local tips, and special offers! See what's happening at Waree's and get inspired for your Kata Beach adventure.",
      communityTitle: "Community",
      communityDesc:
        "Join our growing family of travellers from around the world",
      storiesTitle: "Guest Stories",
      storiesDesc:
        "See photos and stories from guests who've become friends",
      eventsTitle: "Events & Updates",
      eventsDesc:
        "Local events, beach updates, and guesthouse news",
      latestTitle: "Latest from Facebook",
      latestDesc:
        "See our most recent posts, photos, and updates from Anna, Josh, and Mam!",
      ctaText:
        "Click below to visit our Facebook page and see what's new at Waree's Guesthouse!",
      ctaButton: "Visit Our Facebook Page",
      feature1: "Updates",
      feature2: "Guest photos",
      feature3: "Local recommendations",
      feature4: "Direct messaging",
      quickTitle: "Quick Question?",
      quickDesc:
        "Message us on Facebook, text, email or call us for the fastest response!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "Email",
    },
    // Footer
    footer: {
      description:
        "Your home away from home in beautiful Kata Beach, Phuket. Experience local warmth and genuine hospitality.",
      contactTitle: "Contact Us",
      connectTitle: "Connect With Us",
      facebook: "Follow us on Facebook",
      whatsapp: "WhatsApp Us",
      line: "Line Us",
      messagePrompt:
        "Message us on your favourite platform—we're here to help!",
      bookTitle: "Book Your Stay",
      bookDescription:
        "Ready to experience Kata Beach like a local? Book now for the best rates and instant confirmation.",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Waree's Guesthouse, Kata Beach, Phuket. All rights reserved.",
      tagline:
        "Making memories, one guest at a time since 2000. 💛",
      quickLinks: "Quick Links",
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      social: "Follow Us",
      about: "About",
      rooms: "Rooms",
      amenities: "Amenities",
      reviews: "Reviews",
      location: "Location",
    },
  },
  th: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "เกสต์เฮ้าส์วารี",
      subtitle: "บ้านของครอบครัวคุณที่หาดกะตะ",
      tagline:
        "สัมผัสภูเก็ตกับการต้อนรับแบบไทยแท้ ตั้งแต่ปี 2000",
      emailButton: "ส่งอีเมลหาเรา",
      bookButton: "จองทาง Airbnb",
      reviewsButton: "อ่านรีวิว",
    },
    // About
    about: {
      title: "พบกับแอนนา จอช และแหม่ม",
      p1: "สวัสดีค่ะ! เราคือแอนนา จอช และแหม่ม อยู่ที่นี่ตั้งแต่ปี 2000 แขกส่วนใหญ่ที่ชอบเรา ชอบเพราะ<strong>บรรยากาศครอบครัวและสไตล์บ้านที่ผ่อนคลาย</strong>",
      p2: "มานั่งเล่นที่ลานกลางแจ้ง บาร์เล็กๆ ของเรา หรือมาเล่นแบดมินตันกับเราที่ถนน เราชอบใช้เวลากับแขกจริงๆ! เราช่วยจัดทริป จองแท็กซี่ ร้านอาหาร และอื่นๆ อีกมากมาย",
      p3: "<strong>เราเชื่อว่าการเดินทางคือเรื่องของคนที่คุณพบเจอ!</strong>",
      note: "<strong>🎵 หมายเหตุ:</strong> มีตลาดกลางคืนด้านหลังเราที่เล่นดนตรีสดผ่อนๆ ในตอนเย็น ปิดประมาณ 22:00-23:00 (ไม่เกินเที่ยงคืน)",
      budget:
        'อย่างที่บอก เราเป็นแค่ครอบครัวธรรมดา ดูแลเกสต์เฮ้าส์/โฮมสเตย์เล็กๆ ที่ผ่อนคลาย เราถือว่าตัวเองเป็น<strong>"2 ดาว" / ราคาประหยัด</strong>',
      rightForYouTitle: "✨ เราคิดว่าคุณจะชอบเราถ้าคุณ:",
      rightForYou: [
        "ต้องการประสบการณ์ที่เป็นเอกลักษณ์และท้องถิ่น",
        "ชอบความรู้สึกเป็นส่วนหนึ่งของครอบครัว พบปะคนใหม่และสร้างเพื่อนใหม่",
        "ใช้งบประมาณ แต่ชื่นชอบความสะดวกสบายเล็กๆ น้อยๆ เช่น เครื่องปรับอากาศ ผ้าปูที่นอนสะอาด และน้ำอุ่น",
        "ชื่นชอบทำเลของเรา ไม่ใกล้ถนนหรือบาร์ที่เสียงดัง แต่ยังเดินไปชายหาดได้",
        "รักแมว! 🐱",
      ],
      notRightTitle: "💭 เราอาจไม่เหมาะกับคุณถ้าคุณ:",
      notRight: [
        "ต้องการสิ่งอำนวยความสะดวกและบริการแบบมืออาชีพที่คุณจะพบในโรงแรมใหญ่",
        "เป็นคนเฉพาะเจาะจงมากเกี่ยวกับประเภทเตียง หมอน หรือผ้าเช็ดตัว",
        "ต้องการอยู่ใกล้ชายหาดมาก",
        "ต้องการเพียงที่นอนโดยไม่ต้องการประสบการณ์ท้องถิ่น",
        "ไวต่อความเป็นจริงของประเทศกำลังพัฒนา (ไฟดับบางครั้ง แมลง ตุ๊กแก ฯลฯ)",
        "แพ้หรือไม่ชอบแมว",
      ],
      hostsPhotoAlt:
        "แม่ม แอนนา และวารี - ครอบครัวผู้ก่อตั้งเกสต์เฮาส์วารี",
      hostPhotoAlt: "แอนนา จอช และฟิน - เจ้าของที่พักของคุณ",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb Superhost • Guest Favorite",
      subtitle: "คะแนน 4.83 จาก 5 จากแขกที่น่ารักของเรา",
      superhost: "แอนนาเป็น Airbnb Superhost",
      superhostDesc:
        "Superhost คือโฮสต์ที่มีประสบการณ์ คะแนนสูง มุ่งมั่นให้การพักที่ยอดเยี่ยม",
      guestFavorite: "Guest Favorite",
      guestFavoriteDesc:
        "หนึ่งในที่พักที่ได้รับความรักมากที่สุดบน Airbnb จากคะแนน รีวิว และความน่าเชื่อถือ",
      rating: "คะแนน 4.83",
      ratingDesc:
        "รีวิวที่ยอดเยี่ยมอย่างสม่ำเสมอจากแขกที่รักบรรยากาศครอบครัวของเรา",
      achievementsDate:
        "ความสำเร็จบน Airbnb ณ วันที่ 23 มกราคม 2026",
      ratingText: "คะแนนจาก 35 รีวิว",
      superhostTitle: "Superhost",
      superhostYears: "แอนนา • 10 ปีของการเป็นโฮสต์",
      checkInTitle: "การเช็คอินที่ยอดเยี่ยม",
      checkInDesc: "แขกล่าสุดให้คะแนนกระบวนการเช็คอิน 5 ดาว",
      locationTitle: "ทำเลที่ตั้งที่ดีที่สุด",
      locationDesc:
        "แขก 100% ในปีที่ผ่านมาให้คะแนนทำเลที่ตั้งนี้ 5 ดาว",
      trustedTitle: "ประสบการณ์ที่ไว้วางใจได้",
      ctaText: "ดูว่าทำไมแขกถึงกลับมาและให้คะแนน 5 ดาวกับเรา!",
      ctaButton: "เช็คห้องว่างบน Airbnb",
    },
    // Reviews
    reviews: {
      title: "แขกของเราพูดว่าอย่างไร",
      subtitle: "ประสบการณ์จริงจากนักเดินทางที่เคยพักกับเรา",
      ratingsDate: "คะแนน ณ วันที่ 23 มกราคม 2026",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "จาก 35 รีวิว",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "จาก 126 รีวิว",
      // Rating categories
      categories: {
        cleanliness: "ความสะอาด",
        accuracy: "ความถูกต้อง",
        checkIn: "การเช็คอิน",
        communication: "การสื่อสาร",
        location: "ทำเล",
        value: "คุ้มค่า",
        sleepQuality: "คุณภาพการนอน",
        rooms: "ห้องพัก",
        service: "บริการ",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "โฮสต์ที่ยอดเยี่ยม สะอาดเป็นประกาย เตียงสบาย ระเบียงสวย เงียบ... ธุรกิจครอบครัวที่เต็มไปด้วยความรัก เรารักที่นี่!",
          author: "Andreas, Airbnb",
        },
        {
          text: "แอนนาน่ารักมาก ใจดี ช่วยเหลือดี และเป็นมิตร ห้องพักสะอาดและสบายมาก แนะนำอย่างยิ่ง!",
          author: "Rosa, Airbnb",
        },
        {
          text: "อาจเป็นเจ้าของเกสต์เฮ้าส์ที่เป็นมิตรที่สุดที่เราเคยพบในการเดินทางทั้งหมดของเรา ทำให้เรารู้สึกเหมือนอยู่บ้าน",
          author: "Michael, TripAdvisor",
        },
        {
          text: "ห้องสะอาด พนักงานเป็นมิตร ทำเลเยี่ยม คุณรู้สึกเหมือนเป็นส่วนหนึ่งของครอบครัวจริงๆ!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "รีวิว Airbnb",
      readTripadvisorButton: "รีวิว TripAdvisor",
    },
    // Rooms
    rooms: {
      title: "เกสต์เฮาส์ของเรา",
      subtitle:
        "สะดวกสบาย สะอาด และครบครันด้วยทุกสิ่งที่คุณต้องการ",
      roomTypes: [
        {
          name: "ห้องดับเบิลพร้อมระเบียงส่วนตัว",
          description:
            "ห้องที่อบอุ่น สะดวกสบาย พร้อมทุกสิ่งที่คุณต้องการสำหรับการพักผ่อน",
          features: [
            "เตียงคิงไซส์",
            "ห้องอาบน้ำในตัว (น้ำอุ่น)",
            "เครื่องปรับอากาศ",
            "ตู้เย็น",
            "Wi-Fi ฟรี",
            "กาต้มน้ำ",
            "ระเบียงส่วนตัว",
            "ตู้เซฟ",
          ],
        },
        {
          name: "อพาร์ทเมนต์ชั้นล่าง",
          description:
            "ห้องที่มีพื้นที่นั่งเล่นเพิ่มเติม มีโซฟาและครัว รองรับได้ 3 ท่าน วิวสวนภายในและถนนเงียบสงบ",
          features: [
            "1 ห้องนอน ห้องนั่งเล่นแยกพร้อมครัวติดต่อ",
            "ห้องอาบน้ำในตัวขนาดกว้างขวาง (น้ำอุ่น)",
            "ครัวพร้อมเตาและตู้เย็น",
            "Wi-Fi ฟรี",
            "เครื่องปรับอากาศ",
            "วิวสวนภายใน",
            "วิวถนนเงียบสงบ",
            "ทางเข้าส่วนตัว",
            "โซฟาเบด",
            "พื้นที่รับประทานอาหาร",
            "ตู้นิรภัย",
            "ทีวีจอแบนพร้อมดาวเทียมและเคเบิล",
          ],
        },
        {
          name: "บ้านสองห้องนอน",
          description:
            "บ้านขนาด 65 ตารางเมตร มี 2 ห้องนอน ครัว และทางเข้าส่วนตัว เหมาะสำหรับครอบครัวหรือกลุ่มที่มีวิวสวนภายในและถนนเงียบสงบ",
          features: [
            "2 ห้องนอน",
            "1 ห้องน้ำพร้อมอ่างอาบน้ำและฝักบัว",
            "ครัวพร้อมพื้นที่รับประทานอาหาร",
            "Wi-Fi ฟรี",
            "เครื่องปรับอากาศ",
            "ทีวีจอแบน",
            "วิวสวนภายใน",
            "วิวถนนเงียบสงบ",
            "ทางเข้าส่วนตัว",
            "พื้นที่นั่งเล่นพร้อมโซฟา",
            "เฟอร์นิเจอร์กลางแจ้ง",
            "ตู้เสื้อผ้า",
          ],
        },
      ],
      roomsLabel: "ห้อง",
      floorsLabel: "ชั้น",
      establishedLabel: "ก่อตั้ง",
      voltageLabel: "แรงดันไฟฟ้า",
      // More space section
      needMoreSpace: "ต้องการพื้นที่มากขึ้นไหม?",
      moreSpaceDesc:
        "กำลังมองหาห้องสวีทหรืออพาร์ทเมนท์ใช่ไหม? เราสามารถจัดเตรียมตัวเลือกที่พักอื่นๆ ที่เหมาะกับคุณ เพียงอีเมลถึงเราโดยตรงและเราจะช่วยหาพื้นที่ที่สมบูรณ์แบบสำหรับการเข้าพักของคุณ!",
      // CTA button
      viewAvailability: "ดูห้องว่างใน Airbnb",
    },
    // Amenities
    amenities: {
      title: "ทุกสิ่งที่คุณต้องการ",
      subtitle:
        "เราคิดถึงทุกรายละเอียดเพื่อให้การเข้าพักของคุณสะดวกสบายและปลอดภัย แอนนาและจอชยินดีช่วยจัดแท็กซี่ ทริปเที่ยวเกาะ แนะนำร้านอาหาร และอื่นๆ!",
      items: [
        {
          title: "เครื่องปรับอากาศ",
          description: "เย็นสบายในสภาพอากาศเขตร้อน",
        },
        {
          title: "Wi-Fi ฟรี",
          description: "อินเทอร์เน็ตความเร็วสูง",
        },
        {
          title: "ตู้เย็น",
          description: "เก็บเครื่องดื่มและขนมให้เย็น",
        },
        {
          title: "พื้นที่รับประทานอาหารกลางแจ้งและบาร์บีคิว",
          description: "เพลิดเพลินกับอาหารในบรรยากาศเขตร้อน",
        },
        {
          title: "ที่นอนคุณภาพดี",
          description: "หมอนเสริม ผ้าห่ม และผ้าปูที่นอน",
        },
        {
          title: "มีเตารีด",
          description: "ดูแลเสื้อผ้าให้สดใส",
        },
        {
          title: "อุปกรณ์อาบน้ำ",
          description: "แชมพู สบู่ ผ้าเช็ดตัว และของจำเป็น",
        },
        {
          title: "เช่ามอเตอร์ไซค์",
          description: "บริการเช่ามอเตอร์ไซค์สะดวก",
        },
        {
          title: "เก็บกระเป๋าเดินทาง",
          description: "มาถึงเร็วหรือออกเดินทางช้า",
        },
        {
          title: "ยินดีรับการเข้าพักระยะยาว",
          description: "28+ วันขึ้นไป",
        },
        {
          title: "เจ้าของบ้านต้อนรับส่วนตัว",
          description: "แอนนาต้อนรับแขกทุกคน",
        },
        {
          title: "ความปลอดภัย",
          description: "เครื่องดับเพลิงและชุดปฐมพยาบาล",
        },
      ],
      beachAlt: "หาดกะตะ - เพียงไม่กี่ก้าวจากเกสต์เฮ้าส์วารี",
    },
    // Photo Gallery
    gallery: {
      title: "ชีวิตที่เกสต์เฮ้าส์วารี",
      subtitle:
        "พบกับโฮสต์ของคุณ สำรวจหาดกะตะ และค้นพบประสบการณ์ภูเก็ตแท้ๆ ที่รอคุณอยู่",
      familyMatters: "ครอบครัวสำคัญ :)",
      familyMattersDesc:
        "แหม่ม แอนนา และวารี - ครอบครัวของคุณห่างจากบ้าน",
      meetHosts: "พบกับโฮสต์ของคุณ",
      meetHostsDesc:
        "แอนนา จอช และฟิน - ครอบครัวของคุณห่างจากบ้านตั้งแต่ปี 2000",
      paradiseFound: "พบสวรรค์",
      paradiseFoundDesc:
        "ทิวทัศน์สวยงาม น้ำใส และชีวิตเกาะที่เงียบสงบ",
      explore: "สำรวจเกาะ",
      exploreDesc:
        "ค้นพบจุดชมวิวที่น่าทึ่งและสถานที่ซ่อนเร้นรอบๆ ภูเก็ต",
      familyFun: "ความสนุกสำหรับครอบครัว",
      familyFunDesc:
        "สวนน้ำ สถานที่ท่องเที่ยว และกิจกรรมสำหรับทุกวัยใกล้เคียง",
      yourHome: "บ้านของคุณในกะตะ",
      yourHomeDesc:
        "ตั้งอยู่ในใจกลางหาดกะตะพร้อมวิวภูเขาที่สวยงาม",
      welcome: "ยินดีต้อนรับสู่วารี",
      welcomeDesc:
        "มองหาโลโก้นกและกุญแจอันเป็นเอกลักษณ์ของเรา - บ้านของคุณห่างจากบ้าน",
      courtyard: "ลานเกสต์เฮ้าส์",
      courtyardDesc:
        "พื้นที่เงียบสงบและน่าอยู่สำหรับการผ่อนคลายและพักผ่อน",
      entrance: "ทางเข้าเกสต์เฮ้าส์",
      entranceDesc:
        "ทางเข้าที่อบอุ่นและมีเสน่ห์สู่บ้านใหม่ของคุณห่างจากบ้าน",
      ctaTitle: "พร้อมที่จะสร้างความทรงจำของคุณเองหรือยัง?",
      ctaDesc:
        "เข้าร่วมครอบครัววารีและสัมผัสการต้อนรับแบบไทยแท้ๆ ในหนึ่งในสถานที่สวยที่สุดของภูเก็ต",
      ctaButton: "จองที่พักของคุณ",
    },
    // Things to Do
    thingsToDo: {
      title: "สิ่งที่ควรทำและสถานที่ใกล้เคียง",
      subtitle:
        "ทุกสิ่งที่คุณต้องการอยู่ห่างเพียงไม่กี่นาที - ชายหาด สถานที่ท่องเที่ยว ร้านค้า และสิ่งอำนวยความสะดวกท้องถิ่น",
      attractionsTitle: "ชายหาดและสถานที่ท่องเที่ยว",
      kataBeach: "หาดกะตะ",
      kataBeachDesc: "หาดทรายขาวสวยงาม",
      kataBeachDist: "เดิน 10 นาที",
      karonBeach: "หาดกะรน",
      karonBeachDesc: "ชายหาดทรายบริสุทธิ์ยาว",
      karonBeachDist: "เดิน 15 นาที",
      viewpoint: "จุดชมวิวกะรน",
      viewpointDesc: "วิวชายฝั่งที่น่าทึ่ง",
      viewpointDist: "ขับรถระยะสั้น",
      bigBuddha: "พระใหญ่",
      bigBuddhaDesc: "สัญลักษณ์สำคัญของภูเก็ต",
      bigBuddhaDist: "ขับรถ 20 นาที",
      watChalong: "วัดฉลอง",
      watChalongDesc: "วัดพุทธที่สวยงาม",
      watChalongDist: "ขับรถ 25 นาที",
      nightMarket: "ตลาดกลางคืนกะตะ",
      nightMarketDesc: "อาหารและช้อปปิ้งท้องถิ่น",
      nightMarketDist: "ด้านหลังเรา! 🎵",
      oldTown: "เมืองเก่าภูเก็ต",
      oldTownDesc: "สถาปัตยกรรมชิโน-โปรตุกีสประวัติศาสตร์",
      oldTownDist: "ขับรถ 30 นาที",
      getDirections: "ดูเส้นทาง",
      conveniencesTitle: "สิ่งอำนวยความสะดวกใกล้เคียง",
      atm: "ตู้เอทีเอ็ม",
      atmDesc: "ถอนเงินสด",
      atmDist: "เดิน 5 นาที",
      pharmacy: "ร้านขายยาป่าตอง",
      pharmacyDesc: "การดูแลสุขภาพและยา",
      pharmacyDist: "เดิน 5 นาที",
      sevenEleven: "เซเว่นอีเลฟเว่น",
      sevenElevenDesc: "ร้านสะดวกซื้อ 24 ชั่วโมง",
      sevenElevenDist: "เดิน 5 นาที",
      macro: "แม็คโคร",
      macroDesc: "ของชำและเสบียง",
      macroDist: "เดิน 5 นาที",
      clinic: "คลินิกและโรงพยาบาล",
      clinicDesc: "บริการทางการแพทย์ใกล้เคียง",
      clinicDist: "ขับรถระยะสั้น",
      jungceylon: "จังซีลอน",
      jungceylonDesc: "ศูนย์การค้าใหญ่",
      jungceylonDist: "7.3 กม. • ป่าตอง",
      restaurants: "ร้านอาหารท้องถิ่น",
      restaurantsDesc: "อาหารไทยและนานาชาติ",
      restaurantsDist: "เดิน 2 นาที",
      localTip:
        "<strong>💡 เคล็ดลับท้องถิ่น:</strong> เรายินดีช่วยจัดการเดินทาง แนะนำร้านอาหาร จองทัวร์ และแบ่งปันสถานที่ท้องถิ่นโปรดของเรา แค่ถาม เรารักที่จะช่วยแขกของเราค้นพบภูเก็ตที่แท้จริง!",
    },
    // 2-Hour Adventures
    adventures: {
      title: "ไอเดียทริป 2 ชั่วโมง",
      subtitle: "ทริปสนุกๆ เหมาะสำหรับหนีเที่ยวช่วงเช้าหรือบ่าย",
      duration: "~2 ชั่วโมง",
      trips: [
        {
          name: "Sunset & Street Food Tour",
          description: "ชมพระอาทิตย์ตกและชิมอาหารริมทางที่ดีที่สุดของภูเก็ต",
          purpose: "ถ่ายรูปและชิมอาหารท้องถิ่น",
          stops: [
            {
              name: "Karon Viewpoint",
              time: "30 min",
              activity: "จุดชมวิวอ่าวสามแห่งที่สวยงาม",
              tip: "มา 30 นาทีก่อนพระอาทิตย์ตกเพื่อแสงที่ดีที่สุด"
            },
            {
              name: "Rawai Seafood Market",
              time: "45 min",
              activity: "เลือกซื้ออาหารทะเลสดและให้ปรุงให้ทันที",
              tip: "ลองกุ้งย่างและปลาทั้งตัว"
            },
            {
              name: "Nai Harn Beach Sunset",
              time: "30 min",
              activity: "ชมพระอาทิตย์ตกริมหาด",
              tip: "ซื้อมะพร้าวน้ำหอมจากแผงข้างๆ"
            },
            {
              name: "Chalong Night Market",
              time: "15 min",
              activity: "หยุดชิมของหวาน - ข้าวเหนียวมะม่วง",
              tip: "เหมาะสำหรับซื้อของฝากแบบด่วนๆ ด้วย"
            }
          ]
        },
        {
          name: "Temple & Culture Trail",
          description: "สำรวจด้านจิตวิญญาณของภูเก็ตและสถาปัตยกรรมที่สวยงาม",
          purpose: "ถ่ายรูป วัฒนธรรม และความสงบ",
          stops: [
            {
              name: "Wat Chalong Temple",
              time: "40 min",
              activity: "เยี่ยมชมวัดที่สำคัญที่สุดของภูเก็ต",
              tip: "แต่งกายสุภาพ - ปิดบ่าและเข่า"
            },
            {
              name: "Big Buddha",
              time: "40 min",
              activity: "เดินรอบพระใหญ่หินอ่อนสูง 45 เมตร",
              tip: "วิวเกาะ 360 องศาจากด้านบน"
            },
            {
              name: "Local Coffee Shop",
              time: "20 min",
              activity: "พักกาแฟเย็นไทยที่ร้านริมทาง",
              tip: "ลองกาแฟดั้งเดิม - เข้มและหวาน"
            },
            {
              name: "Karon Temple (Quick Stop)",
              time: "20 min",
              activity: "วัดท้องถิ่นเล็กๆ ที่มีรายละเอียดทองสวยงาม",
              tip: "โดยปกติเงียบ - เหมาะสำหรับการไตร่ตรอง"
            }
          ]
        },
        {
          name: "Hidden Beaches Hopper",
          description: "ค้นพบจุดลับที่คนท้องถิ่นรักห่างจากฝูงชน",
          purpose: "ถ่ายรูปชายหาด ว่ายน้ำ และอาหารท้องถิ่น",
          stops: [
            {
              name: "Ya Nui Beach",
              time: "40 min",
              activity: "อ่าวเล็กๆ ที่ซ่อนอยู่ - เหมาะสำหรับดำน้ำตื้น",
              tip: "นำอุปกรณ์ดำน้ำ หินมีปลาเขตร้อน"
            },
            {
              name: "Ao Sane Beach",
              time: "30 min",
              activity: "ชายหาดหินที่มีน้ำใสมาก",
              tip: "ดีสำหรับถ่ายรูปมากกว่าว่ายน้ำ"
            },
            {
              name: "Nui Beach Restaurant",
              time: "30 min",
              activity: "อาหารกลางวันไทยริมหาดพร้อมอาหารทะเลสด",
              tip: "สั่งข้าวผัดสับปะรดในสับปะรด!"
            },
            {
              name: "Windmill Viewpoint",
              time: "20 min",
              activity: "จุดถ่ายรูปชมวิวใต้ภูเก็ต",
              tip: "คนน้อยกว่า Promthep Cape"
            }
          ]
        },
        {
          name: "Old Town Food Walk",
          description: "ถนนเก่ากับรสชาติภูเก็ตแท้ๆ",
          purpose: "อาหารริมทาง ถ่ายรูปสถาปัตยกรรม วัฒนธรรมท้องถิ่น",
          stops: [
            {
              name: "Thalang Road",
              time: "30 min",
              activity: "อาคารชิโนโปรตุกีสสีสันสดใส - สวรรค์ถ่ายรูป",
              tip: "มองหาภาพจิตรกรรมฝาผนัง"
            },
            {
              name: "Kopitiam by Wilai",
              time: "25 min",
              activity: "อาหารเช้าภูเก็ตดั้งเดิม - ติ่มซำและกาแฟ",
              tip: "ลองก๋วยเตี๋ยวฮกเกี้ยน - เมนูพื้นเมือง"
            },
            {
              name: "Local Markets",
              time: "35 min",
              activity: "ชิมโรตี สะเต๊ะ และผลไม้สดจากแผงขาย",
              tip: "ต่อรองราคาอย่างอ่อนโยนและยิ้ม - ราคายืดหยุ่น"
            },
            {
              name: "Dessert at Torry's Ice Cream",
              time: "20 min",
              activity: "จบด้วยไอศกรีมรสชาติไทยที่ไม่เหมือนใคร",
              tip: "มะพร้าวถ่านหรือชาไทย ต้องลอง"
            },
            {
              name: "Sunday Walking Street (Weekend Only)",
              time: "10 min",
              activity: "เดินชมงานฝีมือและการแสดงถ้ามาวันอาทิตย์",
              tip: "เริ่มประมาณ 4 โมงเย็นวันอาทิตย์เท่านั้น"
            }
          ]
        }
      ]
    },
    // Location
    location: {
      title: "วิธีการเดินทางมาที่นี่",
      subtitle:
        "ตั้งอยู่ใจกลางหาดกะตะ เดินทางมาถึงได้ง่ายจากทุกที่ในภูเก็ต",
      ourAddress: "ที่อยู่ของเรา",
      address:
        "44/5 ถนนกะตะ\nหาดกะตะ กะรน\nภูเก็ต 83100\nประเทศไทย",
      directions: "ดูเส้นทาง",
      fromAirport: "จากสนามบิน",
      distance: "ระยะทาง:",
      distanceValue: "ประมาณ 45 กม. (28 ไมล์)",
      travelTime: "เวลาเดินทาง:",
      travelTimeValue: "45-60 นาทีโดยรถยนต์",
      recommendedTitle: "แนะนำสำหรับผู้มาเยือนครั้งแรก",
      recommendedSubtitle:
        "ใช้บริการแท็กซี่จากสนามบินนานาชาติภูเก็ต",
      airportTaxiTitle: "🚖 แท็กซี่สนามบิน",
      airportTaxiDesc:
        "ตัวเลือกที่ง่ายและสะดวกสบายที่สุดสำหรับผู้มาเยือนภูเก็ตครั้งแรก แท็กซี่สนามบินอย่างเป็นทางการปลอดภัย เชื่อถือได้ และให้บริการถึงหน้าประตูของเรา",
      taxiCost: "ค่าใช้จ่าย:",
      taxiCostValue: "ประมาณ 800-1,000 บาท (ราคาคงที่)",
      taxiWhere: "หาได้จากที่ไหน:",
      taxiWhereValue:
        "เคาน์เตอร์แท็กซี่อย่างเป็นทางการในห้องโถงผู้โดยสารขาเข้า",
      taxiDuration: "ระยะเวลา:",
      taxiDurationValue: "45-60 นาทีตรงสู่หาดกะตะ",
      taxiTip: "เคล็ดลับ:",
      taxiTipValue:
        "เก็บการยืนยันการจองไว้เพื่อแสดงให้คนขับรถเห็น",
      airportBusTitle: "🚌 รถบัสสนามบิน",
      airportBusDesc:
        "ตัวเลือกราคาประหยัดพร้อมบริการสม่ำเสมอไปยังพื้นที่หาดกะตะ",
      busCost: "~150-200 บาท",
      busDuration: "90-120 นาที",
      privateTransferTitle: "🚗 รถรับส่งส่วนตัว",
      privateTransferDesc:
        "รถรับส่งที่จองล่วงหน้าพร้อมบริการต้อนรับและแนะนำ",
      privateCost: "~1,200-1,500 บาท",
      privateDuration: "45-60 นาที",
      localTransportTitle: "🛵 การเดินทางท้องถิ่น",
      localTransportDesc:
        "ตุ๊กตุ๊กและมอเตอร์ไซค์รับจ้างสำหรับเดินทางระยะสั้นรอบๆ หาดกะตะ",
      localCost: "แล้วแต่ระยะทาง",
      localTip: "ตกลงราคาก่อนเสมอ",
      helpTitle: "ต้องการความช่วยเหลือในการจัดการเดินทาง?",
      helpDesc:
        "แอนนาและจอชยินดีช่วยจัดแท็กซี่หรือให้คำแนะนำเส้นทาง แค่ส่งข้อความหาเราหลังจองเลย!",
      whatsappButton: "WhatsApp เรา",
      callButton: "โทร +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "ติดตามเรื่องราวของเรา",
      subtitle:
        "ติดตามเราบน Facebook เพื่อรับข้อมูลอัพเดทประจำวัน รูปภาพจากแขก เคล็ดลับท้องถิ่น และข้อเสนอพิเศษ! ดูว่ามีอะไรใหม่ที่วารีและรับแรงบันดาลใจสำหรับการผจญภัยที่หาดกะตะ",
      communityTitle: "ชุมชน",
      communityDesc:
        "เข้าร่วมครอบครัวนักเดินทางที่เติบโตของเราจากทั่วโลก",
      storiesTitle: "เรื่องราวของแขก",
      storiesDesc:
        "ดูรูปภาพและเรื่องราวจากแขกที่กลายเป็นเพื่อน",
      eventsTitle: "กิจกรรมและข้อมูลอัพเดท",
      eventsDesc:
        "กิจกรรมท้องถิ่น ข้อมูลอัพเดทชายหาด และข่าวสารเกสต์เฮ้าส์",
      latestTitle: "อัพเดทล่าสุดจาก Facebook",
      latestDesc:
        "ดูโพสต์ รูปภาพ และข้อมูลอัพเดทล่าสุดจากแอนนา จอช และแหม่ม!",
      ctaText:
        "คลิกด้านล่างเพื่อเยี่ยมชมหน้า Facebook ของเราและดูว่ามีอะไรใหม่ที่เกสต์เฮ้าส์วารี!",
      ctaButton: "เยี่ยมชมหน้า Facebook ของเรา",
      feature1: "อัพเดท",
      feature2: "รูปภาพจากแขก",
      feature3: "คำแนะนำท้องถิ่น",
      feature4: "ส่งข้อความโดยตรง",
      quickTitle: "มีคำถามเร็วๆ ไหม?",
      quickDesc:
        "ส่งข้อความหาเราบน Facebook ส่งข้อความ อีเมล หรือโทรหาเราเพื่อรับการตอบกลับที่เร็วที่สุด!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "อีเมล",
    },
    // Common UI
    common: {
      showDetails: "แสดงรายละเอียด",
      hideDetails: "ซ่อนรายละเอียด",
    },
    // Footer
    footer: {
      description:
        "บ้านของคุณห่างจากบ้านในหาดกะตะที่สวยงาม ภูเก็ต สัมผัสความอบอุ่นและการต้อนรับที่แท้จริง",
      contactTitle: "ติดต่อเรา",
      connectTitle: "เชื่อมต่อกับเรา",
      facebook: "ติดตามเราบน Facebook",
      whatsapp: "WhatsApp เรา",
      line: "Line เรา",
      messagePrompt:
        "ส่งข้อความหาเราบนแพลตฟอร์มโปรดของคุณ เรายินดีช่วยเหลือ!",
      bookTitle: "จองที่พัก",
      bookDescription:
        "พร้อมสัมผัสหาดกะตะแบบคนท้องถิ่นแล้วหรือยัง? จองเลยเพื่อราคาดีที่สุดและการยืนยันทันที",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 เกสต์เฮ้าส์วารี หาดกะตะ ภูเก็ต สงวนลิขสิทธิ์",
      tagline: "สร้างความทรงจำ ทีละคนแขก ตั้งแต่ปี 2000 💛",
      quickLinks: "ลิงก์ด่วน",
      contact: "ติดต่อ",
      phone: "โทรศัพท์",
      email: "อีเมล",
      social: "ติดตามเรา",
      about: "เกี่ยวกับ",
      rooms: "ห้องพัก",
      amenities: "สิ่งอำนวยความสะดวก",
      reviews: "รีวิว",
      location: "สถานที่",
    },
  },
  zh: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Waree宾馆",
      subtitle: "您在卡塔海滩的家",
      tagline: "自2000年以来，体验正宗的泰式待客之道",
      emailButton: "给我们发邮件",
      bookButton: "在 Airbnb 预订",
      reviewsButton: "阅读评论",
    },
    // About
    about: {
      title: "认识Anna、Josh和Mam",
      p1: "你好！我们是Anna、Josh和Mam！自2000年以来一直在这里。大多数喜欢我们的客人，是因为我们<strong>家庭般的感觉和轻松的家外之家风格</strong>。",
      p2: "让我们在户外休息室、小酒吧闲逛，或在街上和我们一起打羽毛球——我们真的很享受与客人共度时光！我们帮助安排旅行、预订出租车、餐厅等等。",
      p3: "<strong>我们相信旅行就是认识你遇到的人！</strong>",
      note: "<strong>🎵 注意：</strong> 我们后面有一个户外市场，晚上播放轻松的现场音乐。他们大多数晚上在22:00到23:00之间结束（不晚于午夜）。",
      budget:
        '就像我们说的，我们只是一个普通家庭，经营我们小而轻松的宾馆/民宿。我们认为自己是<strong>"2星"/经济型</strong>。',
      rightForYouTitle:
        "✨ 如果您符合以下情况，我们认为您会喜欢我们：",
      rightForYou: [
        "想要更独特和本地的体验",
        "享受成为家庭一员的感觉，结识新朋友",
        "预算有限，但欣赏空调、干净床单和热水等小奢侈品",
        "欣赏我们的位置——不靠近嘈杂的道路或酒吧，但仍然可以步行到海滩",
        "喜欢猫！🐱",
      ],
      notRightTitle:
        "💭 如果您符合以下情况，我们可能不适合您：",
      notRight: [
        "需要大酒店的专业设施和服务",
        "对床型、枕头或毛巾非常挑剔",
        "需要非常靠近海滩",
        "只需要一个睡觉的地方，不需要本地体验",
        "对发展中国家的现实敏感（偶尔停电、昆虫、壁虎等）",
        "对猫过敏或不喜欢猫",
      ],
      hostsPhotoAlt:
        "Mam、Anna（姐妹）和Waree - Waree民宿的创始家族",
      hostPhotoAlt: "Anna、Josh和Fin - 您的民宿主人",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb 超赞房东 • 房客最爱",
      subtitle: "我们出色的客人给出4.83分（满分5分）的评分",
      superhost: "Anna是Airbnb超赞房东",
      superhostDesc:
        "超赞房东是经验丰富、评价很高的房东，致力于提供出色的住宿体验",
      guestFavorite: "房客最爱",
      guestFavoriteDesc:
        "根据评分、评论和可靠性，这是Airbnb上最受欢迎的房源之一",
      rating: "4.83评分",
      ratingDesc: "来自喜爱我们家庭氛围的客人的持续好评",
      achievementsDate: "截至2026年1月23日的Airbnb成就",
      ratingText: "来自35条评论的评分",
      superhostTitle: "超赞房东",
      superhostYears: "Anna • 10年房东经验",
      checkInTitle: "卓越的入住体验",
      checkInDesc: "最近的客人给入住流程打了5星好评",
      locationTitle: "无与伦比的位置",
      locationDesc: "过去一年100%的客人给这个位置打了5星好评",
      trustedTitle: "值得信赖的体验",
      ctaText: "看看为什么客人不断回来并给我们5星好评！",
      ctaButton: "在Airbnb上查看空房",
    },
    // Reviews
    reviews: {
      title: "客人评价",
      subtitle: "来自与我们住过的旅行者的真实体验",
      ratingsDate: "评分截至2026年1月23日",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "来自35条评论",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "来自126条评论",
      // Rating categories
      categories: {
        cleanliness: "清洁度",
        accuracy: "准确性",
        checkIn: "入住",
        communication: "沟通",
        location: "位置",
        value: "性价比",
        sleepQuality: "睡眠质量",
        rooms: "房间",
        service: "服务",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "很棒的房东，一尘不染，舒适的床，漂亮的阳台，安静...充满爱的家庭经营。我们喜欢住在这里！",
          author: "Andreas, Airbnb",
        },
        {
          text: "安娜非常可爱、友善、乐于助人。房间非常干净舒适。强烈推荐！",
          author: "Rosa, Airbnb",
        },
        {
          text: "可能是我们整个旅程中遇到的最友好的宾馆老板。让我们感觉完全像在家里一样。",
          author: "Michael, TripAdvisor",
        },
        {
          text: "房间干净，员工友好，位置完美。你真的感觉像家庭的一部分！",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Airbnb评论",
      readTripadvisorButton: "TripAdvisor评论",
    },
    // Rooms
    rooms: {
      title: "我们的旅馆",
      subtitle: "舒适、干净，配备您需要的一切",
      roomTypes: [
        {
          name: "带私人阳台的双人房",
          description: "舒适的房间，配备您放松住宿所需的一切",
          features: [
            "特大床",
            "套内淋浴间（热水）",
            "空调",
            "冰箱",
            "免费WiFi",
            "水壶",
            "私人阳台",
            "保险箱",
          ],
        },
        {
          name: "一楼公寓",
          description:
            "提供额外的生活空间，配有沙发和厨房。可容纳3位客人，享有内庭院和安静街景。",
          features: [
            "1间卧室，独立休息室配附属厨房",
            "宽敞的套内淋浴间（热水）",
            "带炉灶和冰箱的全套厨房",
            "免费WiFi",
            "空调",
            "内庭院景观",
            "安静街景",
            "私人入口",
            "沙发床",
            "用餐区",
            "保险箱",
            "带卫星和有线电视的平板电视",
          ],
        },
        {
          name: "两卧室房屋",
          description:
            "宽敞的65平方米房屋，配有两间卧室、厨房和私人入口。非常适合家庭或团体，享有内庭院和安静街景。",
          features: [
            "2间卧室",
            "1间带浴缸和淋浴的浴室",
            "带用餐区的全套厨房",
            "免费WiFi",
            "空调",
            "平板电视",
            "内庭院景观",
            "安静街景",
            "私人入口",
            "带沙发的休息区",
            "户外家具",
            "衣柜",
          ],
        },
      ],
      roomsLabel: "房间",
      floorsLabel: "楼层",
      establishedLabel: "成立",
      voltageLabel: "电压",
      // More space section
      needMoreSpace: "需要更多空间？",
      moreSpaceDesc:
        "寻找套房或公寓？我们可以安排其他住宿选择以满足您的需求。直接给我们发电子邮件，我们将帮助您找到完美的住宿空间！",
      // CTA button
      viewAvailability: "在Airbnb查看可用性",
    },
    // Amenities
    amenities: {
      title: "您需要的一切",
      subtitle:
        "我们考虑了所有细节，让您的住宿舒适无忧。安娜和乔希很乐意帮助安排出租车、岛屿游览、餐厅推荐等！",
      items: [
        { title: "空调", description: "在热带天气中保持凉爽" },
        { title: "免费WiFi", description: "高速互联网接入" },
        { title: "冰箱", description: "保持饮料和零食冷藏" },
        {
          title: "户外餐饮和烧烤",
          description: "在热带环境中享用美食",
        },
        {
          title: "优质床品",
          description: "额外枕头、毯子和床单",
        },
        { title: "提供熨斗", description: "保持衣物整洁" },
        {
          title: "提供洗浴用品",
          description: "洗发水、肥皂、毛巾和必需品",
        },
        {
          title: "摩托车租赁",
          description: "方便的摩托车租赁",
        },
        { title: "行李寄存", description: "早到或晚离" },
        { title: "欢迎长期住宿", description: "28天以上" },
        {
          title: "主人亲自迎接",
          description: "安娜欢迎每位客人",
        },
        { title: "安全保障", description: "灭火器和急救箱" },
      ],
      beachAlt: "卡塔海滩 - 距离Waree宾馆仅几步之遥",
    },
    // Photo Gallery
    gallery: {
      title: "Waree的生活",
      subtitle:
        "认识您的房东，探索卡塔海滩，发现等待您的正宗普吉岛体验",
      familyMatters: "家庭很重要 :)",
      familyMattersDesc: "Mam、Anna和Waree - 您的家外之家",
      meetHosts: "认识您的房东",
      meetHostsDesc:
        "Anna、Josh和Fin - 自2000年以来您的家外之家",
      paradiseFound: "发现天堂",
      paradiseFoundDesc:
        "令人惊叹的景色、清澈的海水和宁静的岛屿生活",
      explore: "探索岛屿",
      exploreDesc: "发现普吉岛周围令人惊叹的观景点和隐藏的宝石",
      familyFun: "家庭乐趣",
      familyFunDesc:
        "附近的水上乐园、景点和适合所有年龄段的活动",
      yourHome: "您在卡塔的家",
      yourHomeDesc: "坐落在卡塔海滩的中心地带，享有壮丽的山景",
      welcome: "欢迎来到Waree",
      welcomeDesc:
        "寻找我们标志性的鸟和钥匙标志 - 您的家外之家",
      courtyard: "宾馆庭院",
      courtyardDesc: "一个宁静而温馨的空间，供您放松和享受",
      entrance: "宾馆入口",
      entranceDesc: "一个温馨而迷人的入口，通向您新的海外之家",
      ctaTitle: "准备好创造自己的回忆了吗？",
      ctaDesc:
        "加入Waree家族，在普吉岛最美丽的地方之一体验正宗的泰式热情好客",
      ctaButton: "预订您的住宿",
    },
    // Things to Do
    thingsToDo: {
      title: "景点与周边",
      subtitle:
        "您需要的一切都只需几分钟 - 海滩、景点、商店和当地便利设施",
      attractionsTitle: "海滩与景点",
      kataBeach: "卡塔海滩",
      kataBeachDesc: "美丽的白色沙滩",
      kataBeachDist: "步行10分钟",
      karonBeach: "卡伦海滩",
      karonBeachDesc: "绵长的原始沙滩",
      karonBeachDist: "步行15分钟",
      viewpoint: "卡伦观景点",
      viewpointDesc: "令人惊叹的海岸景色",
      viewpointDist: "短途车程",
      bigBuddha: "大佛",
      bigBuddhaDesc: "普吉岛标志性地标",
      bigBuddhaDist: "车程20分钟",
      watChalong: "查龙寺",
      watChalongDesc: "美丽的佛教寺庙",
      watChalongDist: "车程25分钟",
      nightMarket: "卡塔夜市",
      nightMarketDesc: "当地美食和购物",
      nightMarketDist: "就在我们后面！🎵",
      oldTown: "普吉老镇",
      oldTownDesc: "历史悠久的中葡建筑",
      oldTownDist: "车程30分钟",
      getDirections: "获取路线",
      conveniencesTitle: "附近便利设施",
      atm: "ATM",
      atmDesc: "取款",
      atmDist: "步行5分钟",
      pharmacy: "Patak药房",
      pharmacyDesc: "医疗保健和药品",
      pharmacyDist: "步行5分钟",
      sevenEleven: "7-11便利店",
      sevenElevenDesc: "24小时便利店",
      sevenElevenDist: "步行5分钟",
      macro: "Macro超市",
      macroDesc: "杂货和用品",
      macroDist: "步行5分钟",
      clinic: "诊所和医院",
      clinicDesc: "附近的医疗服务",
      clinicDist: "短途车程",
      jungceylon: "Jungceylon购物中心",
      jungceylonDesc: "大型购物中心",
      jungceylonDist: "7.3公里 • 芭东",
      restaurants: "当地餐厅",
      restaurantsDesc: "泰国和国际美食",
      restaurantsDist: "步行2分钟",
      localTip:
        "<strong>💡 当地小贴士：</strong> 我们很乐意帮助您安排交通、推荐餐厅、预订旅游，并分享我们最喜欢的当地景点。只需询问——我们喜欢帮助客人发现真正的普吉岛！",
    },
    // 2-Hour Adventures
    adventures: {
      title: "2小时冒险创意",
      subtitle: "适合上午或下午短途旅行的有趣小旅行",
      duration: "~2小时",
      trips: [
        {
          name: "Sunset & Street Food Tour",
          description: "追逐日落同时品尝普吉岛最好的街头小吃",
          purpose: "摄影和当地美食的完美结合",
          stops: [
            { name: "Karon Viewpoint", time: "30 min", activity: "拍摄三个海湾的壮丽全景", tip: "日落前30分钟到达以获得最佳光线" },
            { name: "Rawai Seafood Market", time: "45 min", activity: "选择新鲜海鲜并现场烹饪", tip: "试试烤虾和整条鱼" },
            { name: "Nai Harn Beach Sunset", time: "30 min", activity: "脚踩沙滩观赏日落", tip: "从附近摊贩买个椰子" },
            { name: "Chalong Night Market", time: "15 min", activity: "快速甜点站 - 试试芒果糯米饭", tip: "也很适合买纪念品" }
          ]
        },
        {
          name: "Temple & Culture Trail",
          description: "探索普吉岛的精神面和惊人建筑",
          purpose: "摄影、文化和宁静时刻",
          stops: [
            { name: "Wat Chalong Temple", time: "40 min", activity: "参观普吉岛最重要的佛教寺庙", tip: "穿着得体 - 遮住肩膀和膝盖" },
            { name: "Big Buddha", time: "40 min", activity: "绕45米高的大理石雕像漫步", tip: "山顶可360°俯瞰全岛" },
            { name: "Local Coffee Shop", time: "20 min", activity: "在路边咖啡馆享用泰式冰咖啡", tip: "试试传统kopi - 浓郁香甜" },
            { name: "Karon Temple (Quick Stop)", time: "20 min", activity: "小型当地寺庙，金色细节精美", tip: "通常很安静 - 适合平静反思" }
          ]
        },
        {
          name: "Hidden Beaches Hopper",
          description: "发现当地人喜爱的秘密景点，远离人群",
          purpose: "海滩摄影、游泳和当地美食",
          stops: [
            { name: "Ya Nui Beach", time: "40 min", activity: "隐藏的小海湾 - 非常适合浮潜", tip: "带上浮潜装备，岩石周围有热带鱼" },
            { name: "Ao Sane Beach", time: "30 min", activity: "岩石海滩，水晶般清澈的海水", tip: "更适合拍照而非游泳" },
            { name: "Nui Beach Restaurant", time: "30 min", activity: "海滨泰式午餐配新鲜海鲜", tip: "点菠萝炒饭装在菠萝里！" },
            { name: "Windmill Viewpoint", time: "20 min", activity: "俯瞰普吉岛南部的全景照片" , tip: "比Promthep Cape人少" }
          ]
        },
        {
          name: "Old Town Food Walk",
          description: "历史街道邂逅正宗普吉风味",
          purpose: "街头美食、建筑摄影、当地文化",
          stops: [
            { name: "Thalang Road", time: "30 min", activity: "色彩缤纷的中葡建筑 - 摄影天堂", tip: "寻找街头艺术壁画" },
            { name: "Kopitiam by Wilai", time: "25 min", activity: "传统普吉早餐 - 点心和咖啡", tip: "试试福建面 - 当地特色" },
            { name: "Local Markets", time: "35 min", activity: "品尝摊贩的煎饼、沙爹和新鲜水果", tip: "温和讨价还价并微笑 - 价格灵活" },
            { name: "Dessert at Torry's Ice Cream", time: "20 min", activity: "以独特的泰式冰淇淋口味结束", tip: "椰子灰或泰茶口味必试" },
            { name: "Sunday Walking Street (Weekend Only)", time: "10 min", activity: "周日来访可浏览工艺品和街头表演", tip: "仅周日下午4点左右开始" }
          ]
        }
      ]
    },
    // Location
    location: {
      title: "如何到达这里",
      subtitle:
        "位于卡塔海滩的中心地带，从普吉岛的任何地方都很容易到达",
      ourAddress: "我们的地址",
      address:
        "44/5 卡塔路\n卡塔海滩，卡伦\n普吉岛 83100\n泰国",
      directions: "获取路线",
      fromAirport: "从机场",
      distance: "距离：",
      distanceValue: "约45公里（28英里）",
      travelTime: "旅行时间：",
      travelTimeValue: "开车45-60分钟",
      recommendedTitle: "推荐给首次访客",
      recommendedSubtitle: "从普吉国际机场乘坐出租车",
      airportTaxiTitle: "🚖 机场出租车",
      airportTaxiDesc:
        "对于第一次来普吉岛的游客来说，这是最简单、最舒适的选择。官方机场出租车安全可靠，并提供直达我们门口的服务。",
      taxiCost: "费用：",
      taxiCostValue: "约800-1,000泰铢（固定价格）",
      taxiWhere: "在哪里找到：",
      taxiWhereValue: "到达大厅的官方出租车柜台",
      taxiDuration: "时长：",
      taxiDurationValue: "45-60分钟直达卡塔海滩",
      taxiTip: "提示：",
      taxiTipValue: "随身携带预订确认信以向司机出示",
      airportBusTitle: "🚌 机场巴士",
      airportBusDesc:
        "经济实惠的选择，定期服务到卡塔海滩地区。",
      busCost: "~150-200泰铢",
      busDuration: "90-120分钟",
      privateTransferTitle: "🚗 私人接送",
      privateTransferDesc: "预订接送服务，提供迎接和接待服务。",
      privateCost: "~1,200-1,500泰铢",
      privateDuration: "45-60分钟",
      localTransportTitle: "🛵 当地交通",
      localTransportDesc:
        "嘟嘟车和摩托车出租车可用于卡塔海滩周围的短途旅行。",
      localCost: "根据距离而定",
      localTip: "始终先商定价格",
      helpTitle: "需要帮助安排交通？",
      helpDesc:
        "Anna和Josh很乐意帮助您安排出租车或提供路线。预订后给我们留言即可！",
      whatsappButton: "WhatsApp联系我们",
      callButton: "致电 +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "保持联系",
      subtitle:
        "在Facebook上关注我们，获取每日更新、客人照片、本地贴士和特别优惠！了解瓦里的最新动态，激发您的卡塔海滩冒险灵感。",
      communityTitle: "社区",
      communityDesc: "加入我们来自世界各地不断壮大的旅行者家庭",
      storiesTitle: "客人故事",
      storiesDesc: "查看已成为朋友的客人的照片和故事",
      eventsTitle: "活动与更新",
      eventsDesc: "本地活动、海滩更新和宾馆新闻",
      latestTitle: "Facebook最新动态",
      latestDesc:
        "查看我们最新的帖子、照片以及安娜、乔希和妈妈的更新！",
      ctaText:
        "点击下方访问我们的Facebook页面，了解瓦里宾馆的最新动态！",
      ctaButton: "访问我们的Facebook页面",
      feature1: "更新",
      feature2: "客人照片",
      feature3: "本地推荐",
      feature4: "直接消息",
      quickTitle: "有快速问题？",
      quickDesc:
        "通过Facebook、短信、电子邮件给我们留言，或致电我们获取最快回复！",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "电子邮件",
    },
    // Common UI
    common: {
      showDetails: "显示详情",
      hideDetails: "隐藏详情",
    },
    // Footer
    footer: {
      description:
        "您在美丽的普吉岛卡塔海滩的家外之家。体验当地的温暖和真诚的待客之道。",
      contactTitle: "联系我们",
      connectTitle: "与我们联系",
      facebook: "在Facebook上关注我们",
      whatsapp: "WhatsApp我们",
      line: "Line我们",
      messagePrompt:
        "在您喜欢的平台上给我们留言——我们随时为您服务！",
      bookTitle: "预订住宿",
      bookDescription:
        "准备好像当地人一样体验卡塔海滩了吗？立即预订以获得最优惠的价格和即时确认。",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Waree宾馆，卡塔海滩，普吉岛。保留所有权利。",
      tagline: "自2000年以来，一次一位客人，创造回忆 💛",
      quickLinks: "快速链接",
      contact: "联系方式",
      phone: "电话",
      email: "电子邮件",
      social: "关注我们",
      about: "关于",
      rooms: "客房",
      amenities: "设施",
      reviews: "评论",
      location: "位置",
    },
  },
  ru: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Гестхаус Waree",
      subtitle: "Ваш семейный дом на пляже Ката",
      tagline:
        "Познайте Пхукет с подлинным тайским гостеприимством с 2000 года",
      emailButton: "Написать нам",
      bookButton: "Забронировать на Airbnb",
      reviewsButton: "Читать отзывы",
    },
    // About
    about: {
      title: "Познакомьтесь с Анной, Джошем и Мам",
      p1: "Привет! Мы - Анна, Джош и Мам! Здесь с 2000 года. Большинству гостей, которые нас любят, нравится наша <strong>семейная атмосфера и расслабленный стиль дома вдали от дома</strong>.",
      p2: "Давайте посидим в нашей открытой зоне отдыха, в нашем маленьком баре или поиграем в бадминтон на улице - мы действительно любим проводить время с гостями! Мы помогаем организовывать поездки, бронировать такси, рестораны и многое другое.",
      p3: "<strong>Мы верим, что путешествие - это люди, которых вы встречаете!</strong>",
      note: "<strong>🎵 Примечание:</strong> За нами находится открытый рынок с живой музыкой по вечерам. Они заканчивают между 22:00 и 23:00 большинство ночей (не позднее полуночи).",
      budget:
        'Как мы уже сказали, мы просто обычная семья, управляющая нашим небольшим, расслабленным гестхаусом/хоумстеем. Мы считаем себя <strong>"2 звезды" / бюджетным вариантом</strong>.',
      rightForYouTitle:
        "✨ Мы думаем, что мы вам понравимся, если вы:",
      rightForYou: [
        "Хотите более уникальный и местный опыт",
        "Наслаждаетесь ощущением части семьи, знакомством с новыми людьми и заведением новых друзей",
        "На бюджете, но цените маленькие удобства, такие как кондиционер, чистые простыни и горячая вода",
        "Цените наше расположение - не рядом с шумной дорогой или барами, но всё ещё в пешей доступности от пляжа",
        "Любите кошек! 🐱",
      ],
      notRightTitle: "💭 Мы можем не подходить вам, если вы:",
      notRight: [
        "Нуждаетесь в профессиональных удобствах и услугах, которые вы найдёте в большом отеле",
        "Очень требовательны к типам кроватей, подушкам или полотенцам",
        "Нужно быть очень близко к пляжу",
        "Просто нужно место для сна без местного опыта",
        "Чувствительны к реалиям развивающейся страны (периодические отключения света, насекомые, гекконы и т. д.)",
        "Аллергия на кошек или не любите кошек",
      ],
      hostsPhotoAlt:
        "Мам, Анна (сестры) и Вари - семья-основатель гестхауса Waree",
      hostPhotoAlt:
        "Анна, Джош и Фин - ваши хозяева в гестхаусе Waree",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb Суперхозяин • Любимец гостей",
      subtitle:
        "Оценка 4.83 из 5 от наших замечательных гостей",
      superhost: "Анна - Суперхозяин Airbnb",
      superhostDesc:
        "Суперхозяева - это опытные хозяева с высокими оценками, стремящиеся обеспечить отличное проживание",
      guestFavorite: "Любимец гостей",
      guestFavoriteDesc:
        "Один из самых любимых домов на Airbnb, основанный на оценках, отзывах и надёжности",
      rating: "Рейтинг 4.83",
      ratingDesc:
        "Постоянные отличные отзывы от гостей, которые любят нашу семейную атмосферу",
      achievementsDate:
        "Достижения на Airbnb по состоянию на 23 января 2026 года",
      ratingText: "Рейтинг на основе 35 отзывов",
      superhostTitle: "Суперхозяин",
      superhostYears: "Анна • 10 лет на Airbnb",
      checkInTitle: "Отличное заселение",
      checkInDesc:
        "Недавние гости поставили процессу заселения 5 звёзд",
      locationTitle: "Непревзойдённое расположение",
      locationDesc:
        "100% гостей за последний год поставили этому месту 5 звёзд",
      trustedTitle: "Проверенный опыт",
      ctaText:
        "Узнайте, почему гости возвращаются и ставят нам 5 звёзд!",
      ctaButton: "Проверить доступность на Airbnb",
    },
    // Reviews
    reviews: {
      title: "Что говорят наши гости",
      subtitle:
        "Реальный опыт путешественников, которые останавливались у нас",
      ratingsDate:
        "Рейтинги по состоянию на 23 января 2026 года",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "На основе 35 отзывов",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "На основе 126 отзывов",
      // Rating categories
      categories: {
        cleanliness: "Чистота",
        accuracy: "Точность",
        checkIn: "Заселение",
        communication: "Общение",
        location: "Расположение",
        value: "Ценность",
        sleepQuality: "Качество сна",
        rooms: "Номера",
        service: "Обслуживание",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "Отличные хозяева, безупречная чистота, удобная кровать, хороший балкон, тихо... семейный бизнес с большой любовью. Нам понравилось здесь!",
          author: "Andreas, Airbnb",
        },
        {
          text: "Анна очень милая, добрая, отзывчивая и дружелюбная. Номера действительно чистые и удобные. Настоятельно рекомендую!",
          author: "Rosa, Airbnb",
        },
        {
          text: "Вероятно, самый дружелюбный владелец гестхауса, которого мы встретили за всю нашу поездку. Мы чувствовали себя как дома.",
          author: "Michael, TripAdvisor",
        },
        {
          text: "Чистые номера, дружелюбный персонал, отличное расположение. Вы действительно чувствуете себя частью семьи!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Отзывы Airbnb",
      readTripadvisorButton: "Отзывы TripAdvisor",
    },
    // Rooms
    rooms: {
      title: "Наш гостевой дом",
      subtitle:
        "Удобный, чистый и оборудованный всем необходимым",
      roomTypes: [
        {
          name: "Двухместный номер с личным балконом",
          description:
            "Уютный, комфортный номер со всем необходимым для расслабляющего отдыха",
          features: [
            "Кровать king-size",
            "Душевая комната в номере (горячая вода)",
            "Кондиционер",
            "Холодильник",
            "Бесплатный Wi-Fi",
            "Чайник",
            "Личный балкон",
            "Сейф",
          ],
        },
        {
          name: "Апартаменты на первом этаже",
          description:
            "Предлагая дополнительное жилое пространство, эти апартаменты имеют диван и кухню. Размещение 3 гостей с видом на внутренний двор и тихую улицу.",
          features: [
            "1 спальня, отдельная гостиная с кухней",
            "Просторная ванная комната с душем (горячая вода)",
            "Полная кухня с плитой и холодильником",
            "Бесплатный Wi-Fi",
            "Кондиционер",
            "Вид на внутренний двор",
            "Вид на тихую улицу",
            "Отдельный вход",
            "Диван-кровать",
            "Обеденная зона",
            "Сейф",
            "Телевизор с плоским экраном и спутниковым/кабельным ТВ",
          ],
        },
        {
          name: "Дом с двумя спальнями",
          description:
            "Просторный дом 65 кв.м с двумя спальнями, кухней и отдельным входом. Идеально подходит для семей или групп с видом на внутренний двор и тихую улицу.",
          features: [
            "2 спальни",
            "1 ванная комната с ванной и душем",
            "Полная кухня с обеденной зоной",
            "Бесплатный Wi-Fi",
            "Кондиционер",
            "Телевизор с плоским экраном",
            "Вид на внутренний двор",
            "Вид на тихую улицу",
            "Отдельный вход",
            "Зона отдыха с диваном",
            "Садовая мебель",
            "Шкаф для одежды",
          ],
        },
      ],
      roomsLabel: "Номера",
      floorsLabel: "Этажи",
      establishedLabel: "Основан",
      voltageLabel: "Напряжение",
      // More space section
      needMoreSpace: "Нужно больше места?",
      moreSpaceDesc:
        "Ищете люкс или апартаменты? Мы можем организовать другие варианты размещения, соответствующие вашим потребностям. Просто напишите нам напрямую, и мы поможем найти идеальное место для вашего проживания!",
      // CTA button
      viewAvailability: "Посмотреть доступность на Airbnb",
    },
    // Amenities
    amenities: {
      title: "Всё, что вам нужно",
      subtitle:
        "Мы продумали все детали, чтобы ваше пребывание было комфортным и беззаботным. Кроме того, Анна и Джош всегда рады помочь организовать такси, поездки на острова, порекомендовать рестораны и многое другое!",
      items: [
        {
          title: "Кондиционер",
          description:
            "Сохраняйте прохладу в тропическую погоду",
        },
        {
          title: "Бесплатный Wi-Fi",
          description: "Высокоскоростной интернет",
        },
        {
          title: "Холодильник",
          description: "Храните напитки и закуски холодными",
        },
        {
          title: "Обеды на открытом воздухе и барбекю",
          description:
            "Наслаждайтесь едой в тропической обстановке",
        },
        {
          title: "Качественное постельное белье",
          description: "Дополнительные подушки, одеяла и белье",
        },
        {
          title: "Утюг в наличии",
          description: "Держите одежду свежей",
        },
        {
          title: "Туалетные принадлежности",
          description: "Шампунь, мыло, полотенца и необходимое",
        },
        {
          title: "Аренда скутеров",
          description: "Удобная аренда мотобайков",
        },
        {
          title: "Хранение багажа",
          description: "Ранний заезд или поздний выезд",
        },
        {
          title: "Приветствуем долгосрочное пребывание",
          description: "28+ дней",
        },
        {
          title: "Личная встреча хозяйкой",
          description: "Анна встречает каждого гостя",
        },
        {
          title: "Безопасность",
          description: "Огнетушитель и аптечка",
        },
      ],
      beachAlt:
        "Пляж Ката - всего в нескольких шагах от гестхауса Waree",
    },
    // Photo Gallery
    gallery: {
      title: "Жизнь в Waree",
      subtitle:
        "Познакомьтесь с хозяевами, исследуйте пляж Ката и откройте для себя подлинный опыт Пхукета",
      familyMatters: "Семья важна :)",
      familyMattersDesc:
        "Мам, Анна и Варее - ваша семья вдали от дома",
      meetHosts: "Познакомьтесь с вашими хозяевами",
      meetHostsDesc:
        "Анна, Джош и Фин - ваша семья вдали от дома с 2000 года",
      paradiseFound: "Рай найден",
      paradiseFoundDesc:
        "Потрясающие виды, кристально чистая вода и мирная островная жизнь",
      explore: "Исследуйте остров",
      exploreDesc:
        "Откройте для себя захватывающие дух смотровые площадки и скрытые жемчужины вокруг Пхукета",
      familyFun: "Семейное веселье",
      familyFunDesc:
        "Аквапарки, достопримечательности и развлечения для всех возрастов поблизости",
      yourHome: "Ваш дом в Ката",
      yourHomeDesc:
        "Расположен в самом сердце пляжа Ката с потрясающим видом на горы",
      welcome: "Добро пожаловать в Waree",
      welcomeDesc:
        "Ищите наш знаковый логотип с птицей и ключом - ваш дом вдали от дома",
      courtyard: "Двор гестхауса",
      courtyardDesc:
        "Мирное и уютное пространство для отдыха и наслаждения",
      entrance: "Вход в гестхаус",
      entranceDesc:
        "Гостеприимный и очаровательный вход в ваш новый дом вдали от дома",
      ctaTitle: "Готовы создать свои собственные воспоминания?",
      ctaDesc:
        "Присоединяйтесь к семье Waree и испытайте подлинное тайское гостеприимство в одном из самых красивых мест Пхукета",
      ctaButton: "Забронировать проживание",
    },
    // Things to Do
    thingsToDo: {
      title: "Чем заняться и что рядом",
      subtitle:
        "Всё, что вам нужно, находится всего в нескольких минутах - пляжи, достопримечательности, магазины и местные удобства",
      attractionsTitle: "Пляжи и достопримечательности",
      kataBeach: "Пляж Ката",
      kataBeachDesc: "Красивый белый песчаный пляж",
      kataBeachDist: "10 минут пешком",
      karonBeach: "Пляж Карон",
      karonBeachDesc: "Длинный участок чистого песка",
      karonBeachDist: "15 минут пешком",
      viewpoint: "Смотровая площадка Карон",
      viewpointDesc: "Захватывающие дух виды на побережье",
      viewpointDist: "Короткая поездка",
      bigBuddha: "Большой Будда",
      bigBuddhaDesc: "Знаковая достопримечательность Пхукета",
      bigBuddhaDist: "20 минут езды",
      watChalong: "Храм Ват Чалонг",
      watChalongDesc: "Красивый буддийский храм",
      watChalongDist: "25 минут езды",
      nightMarket: "Ночной рынок Ката",
      nightMarketDesc: "Местная еда и шопинг",
      nightMarketDist: "За нами! 🎵",
      oldTown: "Старый город Пхукет",
      oldTownDesc:
        "Историческая китайско-португальская архитектура",
      oldTownDist: "30 минут езды",
      getDirections: "Получить маршрут",
      conveniencesTitle: "Ближайшие удобства",
      atm: "Банкомат",
      atmDesc: "Снятие наличных",
      atmDist: "5 минут пешком",
      pharmacy: "Аптека Patak",
      pharmacyDesc: "Здравоохранение и лекарства",
      pharmacyDist: "5 минут пешком",
      sevenEleven: "7-Eleven",
      sevenElevenDesc: "Круглосуточный магазин",
      sevenElevenDist: "5 минут пешком",
      macro: "Магазин Macro",
      macroDesc: "Продукты и товары",
      macroDist: "5 минут пешком",
      clinic: "Клиника и больница",
      clinicDesc: "Медицинские услуги рядом",
      clinicDist: "Короткая поездка",
      jungceylon: "Торговый центр Jungceylon",
      jungceylonDesc: "Крупный торговый центр",
      jungceylonDist: "7.3 км • Патонг",
      restaurants: "Местные рестораны",
      restaurantsDesc: "Тайская и интернациональная кухня",
      restaurantsDist: "2 минуты пешком",
      localTip:
        "<strong>💡 Местный совет:</strong> Мы рады помочь вам организовать транспорт, порекомендовать рестораны, забронировать туры и поделиться нашими любимыми местными местами. Просто спросите - мы любим помогать нашим гостям открывать настоящий Пхукет!",
    },
    // 2-Hour Adventures  
    adventures: {
      title: "2-часовые приключения",
      subtitle: "Веселые мини-поездки идеально подходят для утреннего или дневного отдыха",
      duration: "~2 часа",
      trips: [
        { name: "Sunset & Street Food Tour", description: "Закат и лучшая уличная еда Пхукета", purpose: "Фотография и местные вкусы", stops: [
            { name: "Karon Viewpoint", time: "30 мин", activity: "Панорамные виды трёх заливов", tip: "Приезжайте за 30 минут до заката" },
            { name: "Rawai Seafood Market", time: "45 мин", activity: "Выберите морепродукты и приготовьте на месте", tip: "Попробуйте креветки на гриле" },
            { name: "Nai Harn Beach Sunset", time: "30 мин", activity: "Наблюдайте закат с ногами в песке", tip: "Купите кокос у продавцов" },
            { name: "Chalong Night Market", time: "15 мин", activity: "Десерт - попробуйте манго с рисом", tip: "Отлично для сувениров" }
          ]},
        { name: "Temple & Culture Trail", description: "Исследуйте духовную сторону Пхукета", purpose: "Фотография, культура и спокойствие", stops: [
            { name: "Wat Chalong Temple", time: "40 мин", activity: "Самый важный храм Пхукета", tip: "Скромная одежда - закройте плечи и колени" },
            { name: "Big Buddha", time: "40 мин", activity: "45-метровая мраморная статуя", tip: "360° вид на остров сверху" },
            { name: "Local Coffee Shop", time: "20 мин", activity: "Тайский холодный кофе", tip: "Попробуйте традиционный копи - крепкий и сладкий" },
            { name: "Karon Temple (Quick Stop)", time: "20 мин", activity: "Маленький местный храм", tip: "Обычно тихо - идеально для размышлений" }
          ]},
        { name: "Hidden Beaches Hopper", description: "Секретные места вдали от толпы", purpose: "Пляжные фото, плавание и местная еда", stops: [
            { name: "Ya Nui Beach", time: "40 мин", activity: "Скрытая бухта - отлично для снорклинга", tip: "Возьмите снаряжение, есть тропические рыбы" },
            { name: "Ao Sane Beach", time: "30 мин", activity: "Каменистый пляж с кристально чистой водой", tip: "Лучше для фото, чем для плавания" },
            { name: "Nui Beach Restaurant", time: "30 мин", activity: "Тайский обед на пляже со свежими морепродуктами", tip: "Закажите жареный рис с ананасом в ананасе!" },
            { name: "Windmill Viewpoint", time: "20 мин", activity: "Панорамное фото южного Пхукета", tip: "Меньше людей, чем на Promthep Cape" }
          ]},
        { name: "Old Town Food Walk", description: "Исторические улицы встречают вкусы Пхукета", purpose: "Уличная еда, архитектурные фото, культура", stops: [
            { name: "Thalang Road", time: "30 мин", activity: "Яркие китайско-португальские здания", tip: "Ищите уличные фрески" },
            { name: "Kopitiam by Wilai", time: "25 мин", activity: "Традиционный завтрак Пхукета - димсам и кофе", tip: "Попробуйте лапшу хоккиен - местное блюдо" },
            { name: "Local Markets", time: "35 мин", activity: "Пробуйте роти, сатай и свежие фрукты", tip: "Торгуйтесь мягко и улыбайтесь" },
            { name: "Dessert at Torry's Ice Cream", time: "20 мин", activity: "Уникальные тайские вкусы мороженого", tip: "Кокосовый пепел или тайский чай обязательно" },
            { name: "Sunday Walking Street (Weekend Only)", time: "10 мин", activity: "Ремесла и уличные выступления по воскресеньям", tip: "Начинается около 16:00 только по воскресеньям" }
          ]}
      ]
    },
    // Location
    location: {
      title: "Как добраться",
      subtitle:
        "Расположены в самом сердце пляжа Ката, до нас легко добраться из любой точки Пхукета",
      ourAddress: "Наш адрес",
      address:
        "44/5 Kata Road\nПляж Ката, Карон\nПхукет 83100\nТаиланд",
      directions: "Получить маршрут",
      fromAirport: "Из аэропорта",
      distance: "Расстояние:",
      distanceValue: "Примерно 45 км (28 миль)",
      travelTime: "Время в пути:",
      travelTimeValue: "45-60 минут на машине",
      recommendedTitle: "Рекомендуется для новичков",
      recommendedSubtitle:
        "Возьмите такси из международного аэропорта Пхукета",
      airportTaxiTitle: "🚖 Такси из аэропорта",
      airportTaxiDesc:
        "Самый простой и удобный вариант для тех, кто впервые посещает Пхукет. Официальные такси из аэропорта безопасны, надежны и доставят вас прямо к нашей двери.",
      taxiCost: "Стоимость:",
      taxiCostValue:
        "Примерно 800-1,000 батов (фиксированная ставка)",
      taxiWhere: "Где найти:",
      taxiWhereValue: "Официальная стойка такси в зале прилета",
      taxiDuration: "Продолжительность:",
      taxiDurationValue: "45-60 минут прямо до пляжа Ката",
      taxiTip: "Совет:",
      taxiTipValue:
        "Держите подтверждение бронирования под рукой, чтобы показать водителю",
      airportBusTitle: "🚌 Автобус из аэропорта",
      airportBusDesc:
        "Бюджетный вариант с регулярным сообщением в район пляжа Ката.",
      busCost: "~150-200 батов",
      busDuration: "90-120 минут",
      privateTransferTitle: "🚗 Частный трансфер",
      privateTransferDesc:
        "Предварительно забронированный трансфер со встречей и сопровождением.",
      privateCost: "~1,200-1,500 батов",
      privateDuration: "45-60 минут",
      localTransportTitle: "🛵 Местный транспорт",
      localTransportDesc:
        "Тук-туки и мототакси доступны для коротких поездок по пляжу Ката.",
      localCost: "Зависит от расстояния",
      localTip: "Всегда договаривайтесь о цене заранее",
      helpTitle: "Нужна помощь с организацией транспорта?",
      helpDesc:
        "Анна и Джош будут рады помочь вам организовать такси или предоставить направления. Просто напишите нам после бронирования!",
      whatsappButton: "Написать в WhatsApp",
      callButton: "Позвонить +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "Оставайтесь на связи",
      subtitle:
        "Следите за нами в Facebook для ежедневных обновлений, фото гостей, местных советов и специальных предложений! Узнайте, что происходит в Вари, и вдохновитесь на приключение на пляже Ката.",
      communityTitle: "Сообщество",
      communityDesc:
        "Присоединяйтесь к нашей растущей семье путешественников со всего мира",
      storiesTitle: "Истории гостей",
      storiesDesc:
        "Смотрите фотографии и истории гостей, ставших друзьями",
      eventsTitle: "События и обновления",
      eventsDesc:
        "Местные события, новости пляжа и новости гестхауса",
      latestTitle: "Последние новости из Facebook",
      latestDesc:
        "Смотрите наши последние посты, фотографии и обновления от Анны, Джоша и Мам!",
      ctaText:
        "Нажмите ниже, чтобы посетить нашу страницу в Facebook и узнать, что нового в гестхаусе Вари!",
      ctaButton: "Посетить нашу страницу в Facebook",
      feature1: "Обновления",
      feature2: "Фото гостей",
      feature3: "Местные рекомендации",
      feature4: "Прямые сообщения",
      quickTitle: "Быстрый вопрос?",
      quickDesc:
        "Напишите нам в Facebook, текстовое сообщение, электронную почту или позвоните для самого быстрого ответа!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "Электронная почта",
    },
    // Common UI
    common: {
      showDetails: "Показать детали",
      hideDetails: "Скрыть детали",
    },
    // Footer
    footer: {
      description:
        "Ваш дом вдали от дома на прекрасном пляже Ката, Пхукет. Ощутите местное тепло и искреннее гостеприимство.",
      contactTitle: "Свяжитесь с нами",
      connectTitle: "Оставайтесь на связи",
      facebook: "Следите за нами на Facebook",
      whatsapp: "Напишите нам в WhatsApp",
      line: "Напишите нам в Line",
      messagePrompt:
        "Напишите нам на вашей любимой платформе — мы всегда готовы помочь!",
      bookTitle: "Забронируйте проживание",
      bookDescription:
        "Готовы познакомиться с пляжем Ката как местный житель? Бронируйте сейчас для лучших цен и мгновенного подтверждения.",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Гестхаус Waree, пляж Ката, Пхукет. Все права защищены.",
      tagline:
        "Создаём воспоминания, по одному гостю за раз с 2000 года 💛",
      quickLinks: "Быстрые ссылки",
      contact: "Контакты",
      phone: "Телефон",
      email: "Эл. почта",
      social: "Следите за нами",
      about: "О нас",
      rooms: "Номера",
      amenities: "Удобства",
      reviews: "Отзывы",
      location: "Расположение",
    },
  },
  de: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Waree's Gästehaus",
      subtitle: "Ihr Familienzuhause am Kata Beach",
      tagline:
        "Erleben Sie Phuket mit authentischer thailändischer Gastfreundschaft seit 2000",
      emailButton: "Schreiben Sie uns",
      bookButton: "Auf Airbnb buchen",
      reviewsButton: "Bewertungen lesen",
    },
    // About
    about: {
      title: "Lernen Sie Anna, Josh & Mam kennen",
      p1: "Hallo! Nur Anna, Josh, Mam—das sind wir! Seit 2000 hier. Die meisten Gäste, die uns mögen, tun dies wegen unserer <strong>familiären Atmosphäre und entspannten Zuhause-fern-von-Zuhause-Stimmung</strong>.",
      p2: "Lassen Sie uns in unserer Außenlounge abhängen, in unserer kleinen Bar oder Badminton mit uns auf der Straße spielen—wir genießen es wirklich, Zeit mit Gästen zu verbringen! Wir helfen bei der Organisation von Ausflügen, buchen Taxis, Restaurants und mehr.",
      p3: "<strong>Wir glauben, dass Reisen vor allem die Menschen betrifft, die man trifft!</strong>",
      note: "<strong>🎵 Hinweis:</strong> Hinter uns gibt es einen Freiluftmarkt, der abends entspannte Live-Musik spielt. Sie enden zwischen 22:00 und 23:00 Uhr die meisten Abende (spätestens Mitternacht).",
      budget:
        'Wie gesagt, wir sind einfach eine normale Familie, die unser kleines, entspanntes Gästehaus/Homestay führt. Wir betrachten uns als <strong>"2 Sterne" / budgetfreundlich</strong>.',
      rightForYouTitle:
        "✨ Wir denken, Sie werden uns lieben, wenn Sie:",
      rightForYou: [
        "Eine einzigartigere und lokalere Erfahrung wünschen",
        "Es genießen, Teil der Familie zu sein, neue Leute kennenzulernen und neue Freunde zu finden",
        "Mit kleinem Budget reisen, aber kleine Luxusgüter wie Klimaanlage, saubere Bettwäsche und heißes Wasser schätzen",
        "Unsere Lage schätzen—nicht in der Nähe einer lauten Straße oder Bars, aber dennoch zu Fuß zum Strand",
        "Katzen lieben! 🐱",
      ],
      notRightTitle:
        "💭 Wir sind möglicherweise nicht das Richtige für Sie, wenn Sie:",
      notRight: [
        "Professionelle Einrichtungen und Dienstleistungen benötigen, die Sie in einem großen Hotel finden würden",
        "Sehr spezifisch bezüglich Betttypen, Kissen oder Handtüchern sind",
        "Sehr nah am Strand sein müssen",
        "Einfach nur einen Schlafplatz ohne lokale Erfahrung benötigen",
        "Empfindlich gegenüber Realitäten von Entwicklungsländern sind (gelegentliche Stromausfälle, Insekten, Geckos usw.)",
        "Allergisch gegen Katzen sind oder keine Katzen mögen",
      ],
      hostsPhotoAlt:
        "Mam, Anna (Schwestern) und Waree - Die Gründerfamilie von Waree's Gästehaus",
      hostPhotoAlt:
        "Anna, Josh und Fin - Ihre Gastgeber im Waree's Gästehaus",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb Superhost • Gästefavorit",
      subtitle:
        "Von unseren wunderbaren Gästen mit 4,83 von 5 bewertet",
      superhost: "Anna ist ein Airbnb Superhost",
      superhostDesc:
        "Superhosts sind erfahrene, hoch bewertete Gastgeber, die sich für großartige Aufenthalte einsetzen",
      guestFavorite: "Gästefavorit",
      guestFavoriteDesc:
        "Eines der beliebtesten Häuser auf Airbnb basierend auf Bewertungen, Rezensionen und Zuverlässigkeit",
      rating: "4,83 Bewertung",
      ratingDesc:
        "Durchweg hervorragende Bewertungen von Gästen, die unsere Familienatmosphäre lieben",
      achievementsDate: "Airbnb-Erfolge Stand 23. Januar 2026",
      ratingText: "Bewertung aus 35 Rezensionen",
      superhostTitle: "Superhost",
      superhostYears: "Anna • 10 Jahre Gastgeber",
      checkInTitle: "Außergewöhnlicher Check-in",
      checkInDesc:
        "Kürzliche Gäste haben den Check-in-Prozess mit 5 Sternen bewertet",
      locationTitle: "Unschlagbare Lage",
      locationDesc:
        "100% der Gäste im letzten Jahr haben diese Lage mit 5 Sternen bewertet",
      trustedTitle: "Vertrauenswürdige Erfahrung",
      ctaText:
        "Sehen Sie, warum Gäste wiederkommen und uns 5 Sterne geben!",
      ctaButton: "Verfügbarkeit auf Airbnb prüfen",
    },
    // Reviews
    reviews: {
      title: "Was unsere Gäste sagen",
      subtitle:
        "Echte Erfahrungen von Reisenden, die bei uns übernachtet haben",
      ratingsDate: "Bewertungen Stand 23. Januar 2026",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "Aus 35 Bewertungen",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "Aus 126 Bewertungen",
      // Rating categories
      categories: {
        cleanliness: "Sauberkeit",
        accuracy: "Genauigkeit",
        checkIn: "Check-in",
        communication: "Kommunikation",
        location: "Lage",
        value: "Preis-Leistung",
        sleepQuality: "Schlafqualität",
        rooms: "Zimmer",
        service: "Service",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "Tolle Gastgeber, blitzsauber, bequemes Bett, schöner Balkon, ruhig... Familienbetrieb mit viel Liebe. Wir haben es geliebt hier zu bleiben!",
          author: "Andreas, Airbnb",
        },
        {
          text: "Anna ist super lieb, nett, hilfsbereit und freundlich. Die Zimmer sind wirklich sauber und komfortabel. Sehr zu empfehlen!",
          author: "Rosa, Airbnb",
        },
        {
          text: "Wahrscheinlich der freundlichste Gästehaus-Besitzer, den wir auf unserer ganzen Reise getroffen haben. Wir fühlten uns völlig zu Hause.",
          author: "Michael, TripAdvisor",
        },
        {
          text: "Saubere Zimmer, freundliches Personal, perfekte Lage. Man fühlt sich wirklich wie Teil der Familie!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Airbnb Bewertungen",
      readTripadvisorButton: "TripAdvisor Bewertungen",
    },
    // Rooms
    rooms: {
      title: "Unser Gästehaus",
      subtitle:
        "Komfortabel, sauber und mit allem ausgestattet, was Sie brauchen",
      roomTypes: [
        {
          name: "Doppelzimmer mit privatem Balkon",
          description:
            "Gemütliches, komfortables Zimmer mit allem, was Sie für einen erholsamen Aufenthalt benötigen",
          features: [
            "Kingsize-Bett",
            "Eigenes Duschbad (Warmwasser)",
            "Klimaanlage",
            "Kühlschrank",
            "Kostenloses WLAN",
            "Wasserkocher",
            "Privater Balkon",
            "Safe",
          ],
        },
        {
          name: "Erdgeschosswohnung",
          description:
            "Mit zusätzlichem Wohnraum bietet dieses Apartment ein Sofa und eine Küche. Platz für 3 Gäste mit Blick auf den Innenhof und eine ruhige Straße.",
          features: [
            "1 Schlafzimmer, separates Wohnzimmer mit angeschlossener Küche",
            "Geräumiges eigenes Duschbad (Warmwasser)",
            "Vollküche mit Herd und Kühlschrank",
            "Kostenloses WLAN",
            "Klimaanlage",
            "Blick auf den Innenhof",
            "Blick auf eine ruhige Straße",
            "Privater Eingang",
            "Schlafsofa",
            "Essbereich",
            "Safe",
            "Flachbildfernseher mit Satellit und Kabel",
          ],
        },
        {
          name: "Haus mit zwei Schlafzimmern",
          description:
            "Geräumiges 65 qm großes Haus mit zwei Schlafzimmern, Küche und privatem Eingang. Perfekt für Familien oder Gruppen mit Blick auf den Innenhof und eine ruhige Straße.",
          features: [
            "2 Schlafzimmer",
            "1 Badezimmer mit Badewanne und Dusche",
            "Vollküche mit Essbereich",
            "Kostenloses WLAN",
            "Klimaanlage",
            "Flachbildfernseher",
            "Blick auf den Innenhof",
            "Blick auf eine ruhige Straße",
            "Privater Eingang",
            "Sitzbereich mit Sofa",
            "Gartenmöbel",
            "Kleiderschrank",
          ],
        },
      ],
      roomsLabel: "Zimmer",
      floorsLabel: "Etagen",
      establishedLabel: "Gegründet",
      voltageLabel: "Spannung",
      // More space section
      needMoreSpace: "Brauchen Sie mehr Platz?",
      moreSpaceDesc:
        "Suchen Sie nach einer Suite oder Wohnung? Wir können andere Unterkunftsmöglichkeiten arrangieren, die Ihren Bedürfnissen entsprechen. Schreiben Sie uns einfach direkt eine E-Mail und wir helfen Ihnen, den perfekten Raum für Ihren Aufenthalt zu finden!",
      // CTA button
      viewAvailability: "Verfügbarkeit auf Airbnb anzeigen",
    },
    // Amenities
    amenities: {
      title: "Alles, was Sie brauchen",
      subtitle:
        "Wir haben an alle Details gedacht, damit Ihr Aufenthalt komfortabel und sorgenfrei ist. Außerdem helfen Anna und Josh gerne bei der Organisation von Taxis, Inselausflügen, Restaurantempfehlungen und mehr!",
      items: [
        {
          title: "Klimaanlage",
          description: "Bleiben Sie kühl im tropischen Wetter",
        },
        {
          title: "Kostenloses WLAN",
          description: "Hochgeschwindigkeits-Internetzugang",
        },
        {
          title: "Kühlschrank",
          description: "Halten Sie Getränke und Snacks kalt",
        },
        {
          title: "Essen im Freien & Grill",
          description:
            "Genießen Sie Mahlzeiten in tropischem Ambiente",
        },
        {
          title: "Hochwertige Bettwäsche",
          description: "Extra Kissen, Decken & Laken",
        },
        {
          title: "Bügeleisen verfügbar",
          description: "Halten Sie Ihre Kleidung frisch",
        },
        {
          title: "Toilettenartikel vorhanden",
          description:
            "Shampoo, Seife, Handtücher & Wesentliches",
        },
        {
          title: "Rollerverleih",
          description: "Bequeme Motorradmiete verfügbar",
        },
        {
          title: "Gepäckaufbewahrung",
          description: "Frühe Ankunft oder späte Abreise",
        },
        {
          title: "Langzeitaufenthalte willkommen",
          description: "28+ Tage verfügbar",
        },
        {
          title: "Persönliche Gastgeber-Begrüßung",
          description: "Anna begrüßt jeden Gast",
        },
        {
          title: "Sicherheit",
          description: "Feuerlöscher & Erste-Hilfe-Kasten",
        },
      ],
      beachAlt:
        "Kata Beach - nur wenige Schritte von Waree's Gästehaus entfernt",
    },
    // Photo Gallery
    gallery: {
      title: "Leben bei Waree's",
      subtitle:
        "Lernen Sie Ihre Gastgeber kennen, erkunden Sie Kata Beach und entdecken Sie das authentische Phuket-Erlebnis",
      familyMatters: "Familie ist wichtig :)",
      familyMattersDesc:
        "Mam, Anna & Waree - Ihre Familie fern von Zuhause",
      meetHosts: "Lernen Sie Ihre Gastgeber kennen",
      meetHostsDesc:
        "Anna, Josh & Fin - Ihre Familie fern von Zuhause seit 2000",
      paradiseFound: "Paradies gefunden",
      paradiseFoundDesc:
        "Atemberaubende Aussichten, kristallklares Wasser und friedliches Inselleben",
      explore: "Die Insel erkunden",
      exploreDesc:
        "Entdecken Sie atemberaubende Aussichtspunkte und versteckte Schätze rund um Phuket",
      familyFun: "Familienspaß",
      familyFunDesc:
        "Wasserparks, Attraktionen und Aktivitäten für alle Altersgruppen in der Nähe",
      yourHome: "Ihr Zuhause in Kata",
      yourHomeDesc:
        "Im Herzen von Kata Beach mit atemberaubendem Bergblick",
      welcome: "Willkommen bei Waree's",
      welcomeDesc:
        "Suchen Sie nach unserem ikonischen Vogel-und-Schlüssel-Logo - Ihr Zuhause fern von Zuhause",
      courtyard: "Gästehaus-Innenhof",
      courtyardDesc:
        "Ein friedlicher und einladender Raum zum Entspannen und Genießen",
      entrance: "Gästehaus-Eingang",
      entranceDesc:
        "Ein einladender und charmanter Eingang zu Ihrem neuen Zuhause fern von Zuhause",
      ctaTitle:
        "Bereit, Ihre eigenen Erinnerungen zu schaffen?",
      ctaDesc:
        "Werden Sie Teil der Waree-Familie und erleben Sie authentische thailändische Gastfreundschaft an einem der schönsten Orte Phukets",
      ctaButton: "Buchen Sie Ihren Aufenthalt",
    },
    // Things to Do
    thingsToDo: {
      title: "Aktivitäten & In der Nähe",
      subtitle:
        "Alles, was Sie brauchen, ist nur wenige Minuten entfernt - Strände, Sehenswürdigkeiten, Geschäfte und lokale Annehmlichkeiten",
      attractionsTitle: "Strände & Sehenswürdigkeiten",
      kataBeach: "Kata Beach",
      kataBeachDesc: "Schöner weißer Sandstrand",
      kataBeachDist: "10 Min. zu Fuß",
      karonBeach: "Karon Beach",
      karonBeachDesc: "Langer Abschnitt mit unberührtem Sand",
      karonBeachDist: "15 Min. zu Fuß",
      viewpoint: "Karon Aussichtspunkt",
      viewpointDesc: "Atemberaubende Küstenaussichten",
      viewpointDist: "Kurze Fahrt",
      bigBuddha: "Großer Buddha",
      bigBuddhaDesc: "Ikonisches Wahrzeichen von Phuket",
      bigBuddhaDist: "20 Min. Fahrt",
      watChalong: "Wat Chalong Tempel",
      watChalongDesc: "Wunderschöner buddhistischer Tempel",
      watChalongDist: "25 Min. Fahrt",
      nightMarket: "Kata Nachtmarkt",
      nightMarketDesc: "Lokales Essen & Shopping",
      nightMarketDist: "Hinter uns! 🎵",
      oldTown: "Phuket Altstadt",
      oldTownDesc:
        "Historische sino-portugiesische Architektur",
      oldTownDist: "30 Min. Fahrt",
      getDirections: "Route anzeigen",
      conveniencesTitle: "Annehmlichkeiten in der Nähe",
      atm: "Geldautomat",
      atmDesc: "Bargeldabhebung",
      atmDist: "5 Min. zu Fuß",
      pharmacy: "Patak Apotheke",
      pharmacyDesc: "Gesundheitsversorgung & Medizin",
      pharmacyDist: "5 Min. zu Fuß",
      sevenEleven: "7-Eleven",
      sevenElevenDesc: "24/7 Supermarkt",
      sevenElevenDist: "5 Min. zu Fuß",
      macro: "Macro Markt",
      macroDesc: "Lebensmittel & Vorräte",
      macroDist: "5 Min. zu Fuß",
      clinic: "Klinik & Krankenhaus",
      clinicDesc: "Medizinische Dienste in der Nähe",
      clinicDist: "Kurze Fahrt",
      jungceylon: "Jungceylon",
      jungceylonDesc: "Großes Einkaufszentrum",
      jungceylonDist: "7,3 km • Patong",
      restaurants: "Lokale Restaurants",
      restaurantsDesc: "Thailändische & internationale Küche",
      restaurantsDist: "2 Min. zu Fuß",
      localTip:
        "<strong>💡 Lokaler Tipp:</strong> Wir helfen Ihnen gerne bei der Organisation von Transporten, empfehlen Restaurants, buchen Touren und teilen unsere Lieblingsorte. Fragen Sie einfach—wir lieben es, unseren Gästen zu helfen, das echte Phuket zu entdecken!",
    },
    // 2-Hour Adventures
    adventures: {
      title: "2-Stunden-Abenteuer-Ideen",
      subtitle: "Lustige Mini-Trips perfekt für einen Morgen oder Nachmittag",
      duration: "~2 Stunden",
      trips: [
        { name: "Sunset & Street Food Tour", description: "Sonnenuntergang und Phukets bestes Street Food", purpose: "Fotografie und lokale Aromen", stops: [{ name: "Karon Viewpoint", time: "30 Min", activity: "Panoramablick auf drei Buchten", tip: "30 Min vor Sonnenuntergang ankommen" }, { name: "Rawai Seafood Market", time: "45 Min", activity: "Frische Meeresfrüchte auswählen und vor Ort kochen lassen", tip: "Probieren Sie die gegrillten Garnelen" }, { name: "Nai Harn Beach Sunset", time: "30 Min", activity: "Sonnenuntergang mit Füßen im Sand", tip: "Kokosnuss von Verkäufern holen" }, { name: "Chalong Night Market", time: "15 Min", activity: "Dessert-Stopp - Mango Sticky Rice", tip: "Auch gut für Last-Minute-Souvenirs" }]},
        { name: "Temple & Culture Trail", description: "Entdecken Sie Phukets spirituelle Seite", purpose: "Fotografie, Kultur und friedliche Momente", stops: [{ name: "Wat Chalong Temple", time: "40 Min", activity: "Phukets wichtigster buddhistischer Tempel", tip: "Bescheiden kleiden - Schultern und Knie bedecken" }, { name: "Big Buddha", time: "40 Min", activity: "45-Meter-Marmorstatue", tip: "360°-Blick auf die Insel von oben" }, { name: "Local Coffee Shop", time: "20 Min", activity: "Thai-Eiskaffee-Pause", tip: "Traditionellen Kopi probieren - stark und süß" }, { name: "Karon Temple (Quick Stop)", time: "20 Min", activity: "Kleiner lokaler Tempel", tip: "Meist ruhig - perfekt für Reflexion" }]},
        { name: "Hidden Beaches Hopper", description: "Entdecken Sie geheime Orte", purpose: "Strandfotos, Schwimmen und lokales Essen", stops: [{ name: "Ya Nui Beach", time: "40 Min", activity: "Versteckte Bucht - perfekt zum Schnorcheln", tip: "Schnorchelausrüstung mitbringen" }, { name: "Ao Sane Beach", time: "30 Min", activity: "Felsenstrand mit kristallklarem Wasser", tip: "Besser zum Fotografieren als zum Schwimmen" }, { name: "Nui Beach Restaurant", time: "30 Min", activity: "Thai-Mittagessen am Strand", tip: "Gebratener Reis mit Ananas in einer Ananas bestellen!" }, { name: "Windmill Viewpoint", time: "20 Min", activity: "Panoramafoto von Süd-Phuket", tip: "Weniger überfüllt als Promthep Cape" }]},
        { name: "Old Town Food Walk", description: "Historische Straßen treffen authentische Phuket-Aromen", purpose: "Street Food, Architekturfotografie, lokale Kultur", stops: [{ name: "Thalang Road", time: "30 Min", activity: "Farbenfrohe chinesisch-portugiesische Gebäude", tip: "Suchen Sie nach Street-Art-Wandgemälden" }, { name: "Kopitiam by Wilai", time: "25 Min", activity: "Traditionelles Phuket-Frühstück - Dim Sum & Kaffee", tip: "Hokkien-Nudeln probieren - lokale Spezialität" }, { name: "Local Markets", time: "35 Min", activity: "Roti, Satay und frische Früchte probieren", tip: "Sanft verhandeln und lächeln" }, { name: "Dessert at Torry's Ice Cream", time: "20 Min", activity: "Einzigartige Thai-inspirierte Eissorten", tip: "Kokosnussasche oder Thai-Tee - ein Muss" }, { name: "Sunday Walking Street (Weekend Only)", time: "10 Min", activity: "Kunsthandwerk und Straßenaufführungen sonntags", tip: "Beginnt sonntags um 16 Uhr" }]}
      ]
    },
    // Location
    location: {
      title: "So erreichen Sie uns",
      subtitle:
        "Im Herzen von Kata Beach gelegen, sind wir von überall auf Phuket leicht zu erreichen",
      ourAddress: "Unsere Adresse",
      address:
        "44/5 Kata Road\nKata Beach, Karon\nPhuket 83100\nThailand",
      directions: "Wegbeschreibung",
      fromAirport: "Vom Flughafen",
      distance: "Entfernung:",
      distanceValue: "Ungefähr 45 km (28 Meilen)",
      travelTime: "Reisezeit:",
      travelTimeValue: "45-60 Minuten mit dem Auto",
      recommendedTitle: "Empfohlen für Erstbesucher",
      recommendedSubtitle:
        "Nehmen Sie ein Taxi vom internationalen Flughafen Phuket",
      airportTaxiTitle: "🚖 Flughafen-Taxi",
      airportTaxiDesc:
        "Die einfachste und bequemste Option für Erstbesucher von Phuket. Offizielle Flughafen-Taxis sind sicher, zuverlässig und bringen Sie direkt vor unsere Tür.",
      taxiCost: "Kosten:",
      taxiCostValue: "Ungefähr 800-1.000 THB (Festpreis)",
      taxiWhere: "Wo zu finden:",
      taxiWhereValue:
        "Offizieller Taxi-Schalter in der Ankunftshalle",
      taxiDuration: "Dauer:",
      taxiDurationValue: "45-60 Minuten direkt zum Kata Beach",
      taxiTip: "Tipp:",
      taxiTipValue:
        "Halten Sie Ihre Buchungsbestätigung bereit, um sie dem Fahrer zu zeigen",
      airportBusTitle: "🚌 Flughafen-Bus",
      airportBusDesc:
        "Budgetfreundliche Option mit regelmäßiger Verbindung zum Kata Beach-Gebiet.",
      busCost: "~150-200 THB",
      busDuration: "90-120 Minuten",
      privateTransferTitle: "🚗 Privater Transfer",
      privateTransferDesc:
        "Vorgebuchter Transfer mit Meet & Greet-Service verfügbar.",
      privateCost: "~1.200-1.500 THB",
      privateDuration: "45-60 Minuten",
      localTransportTitle: "🛵 Lokaler Transport",
      localTransportDesc:
        "Tuk-Tuks und Motorrad-Taxis für kurze Fahrten rund um Kata Beach.",
      localCost: "Abhängig von der Entfernung",
      localTip: "Vereinbaren Sie immer zuerst den Preis",
      helpTitle:
        "Benötigen Sie Hilfe bei der Organisation des Transports?",
      helpDesc:
        "Anna und Josh helfen Ihnen gerne bei der Organisation eines Taxis oder geben Ihnen Wegbeschreibungen. Schreiben Sie uns einfach nach der Buchung!",
      whatsappButton: "WhatsApp uns",
      callButton: "Anrufen +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "Bleiben Sie verbunden",
      subtitle:
        "Folgen Sie uns auf Facebook für tägliche Updates, Gästefotos, lokale Tipps und Sonderangebote! Sehen Sie, was bei Waree's los ist und lassen Sie sich für Ihr Kata Beach-Abenteuer inspirieren.",
      communityTitle: "Gemeinschaft",
      communityDesc:
        "Treten Sie unserer wachsenden Familie von Reisenden aus aller Welt bei",
      storiesTitle: "Gästegeschichten",
      storiesDesc:
        "Sehen Sie Fotos und Geschichten von Gästen, die Freunde geworden sind",
      eventsTitle: "Veranstaltungen & Updates",
      eventsDesc:
        "Lokale Veranstaltungen, Strandneuigkeiten und Gästehaus-News",
      latestTitle: "Neueste Nachrichten von Facebook",
      latestDesc:
        "Sehen Sie unsere neuesten Beiträge, Fotos und Updates von Anna, Josh und Mam!",
      ctaText:
        "Klicken Sie unten, um unsere Facebook-Seite zu besuchen und zu sehen, was es Neues bei Waree's Guesthouse gibt!",
      ctaButton: "Besuchen Sie unsere Facebook-Seite",
      feature1: "Updates",
      feature2: "Gästefotos",
      feature3: "Lokale Empfehlungen",
      feature4: "Direktnachrichten",
      quickTitle: "Schnelle Frage?",
      quickDesc:
        "Schreiben Sie uns auf Facebook, per SMS, E-Mail oder rufen Sie uns an für die schnellste Antwort!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "E-Mail",
    },
    // Common UI
    common: {
      showDetails: "Details anzeigen",
      hideDetails: "Details ausblenden",
    },
    // Footer
    footer: {
      description:
        "Ihr Zuhause fern von Zuhause am wunderschönen Kata Beach, Phuket. Erleben Sie lokale Wärme und echte Gastfreundschaft.",
      contactTitle: "Kontaktieren Sie uns",
      connectTitle: "Verbinden Sie sich mit uns",
      facebook: "Folgen Sie uns auf Facebook",
      whatsapp: "Schreiben Sie uns auf WhatsApp",
      line: "Schreiben Sie uns auf Line",
      messagePrompt:
        "Schreiben Sie uns auf Ihrer bevorzugten Plattform—wir sind hier, um zu helfen!",
      bookTitle: "Buchen Sie Ihren Aufenthalt",
      bookDescription:
        "Bereit, Kata Beach wie ein Einheimischer zu erleben? Buchen Sie jetzt für die besten Preise und sofortige Bestätigung.",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Waree's Gästehaus, Kata Beach, Phuket. Alle Rechte vorbehalten.",
      tagline:
        "Erinnerungen schaffen, ein Gast nach dem anderen seit 2000 💛",
      quickLinks: "Schnelllinks",
      contact: "Kontakt",
      phone: "Telefon",
      email: "E-Mail",
      social: "Folgen Sie uns",
      about: "Über uns",
      rooms: "Zimmer",
      amenities: "Annehmlichkeiten",
      reviews: "Bewertungen",
      location: "Lage",
    },
  },
  it: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Pensione di Waree",
      subtitle: "La Vostra Casa di Famiglia a Kata Beach",
      tagline:
        "Scopri Phuket con autentica ospitalità thailandese dal 2000",
      emailButton: "Scrivici",
      bookButton: "Prenota su Airbnb",
      reviewsButton: "Leggi le Recensioni",
    },
    // About
    about: {
      title: "Incontra Anna, Josh e Mam",
      p1: "Ciao! Solo Anna, Josh, Mam—siamo noi! Qui dal 2000. La maggior parte degli ospiti che ci apprezzano, lo fanno per la nostra <strong>atmosfera familiare e stile rilassato di casa lontano da casa</strong>.",
      p2: "Stiamo insieme nella nostra lounge all'aperto, nel nostro piccolo bar, o giochiamo a badminton con noi in strada—ci piace davvero trascorrere tempo con gli ospiti! Aiutiamo ad organizzare viaggi, prenotare taxi, ristoranti e altro ancora.",
      p3: "<strong>Crediamo che viaggiare riguardi soprattutto le persone che incontri!</strong>",
      note: "<strong>🎵 Nota:</strong> C'è un mercato all'aperto dietro di noi che suona musica dal vivo rilassante la sera. Finiscono tra le 22:00 e le 23:00 la maggior parte delle sere (non oltre la mezzanotte).",
      budget:
        'Come abbiamo detto, siamo solo una famiglia normale, che gestisce la nostra piccola pensione/homestay rilassata. Ci consideriamo <strong>"2 Stelle" / economici</strong>.',
      rightForYouTitle: "✨ Pensiamo che Vi Piaceremo Se:",
      rightForYou: [
        "Volete un'esperienza più unica e locale",
        "Vi piace sentirvi parte della famiglia, incontrare nuove persone e fare nuove amicizie",
        "Avete un budget limitato, ma apprezzate piccoli lussi come aria condizionata, lenzuola pulite e acqua calda",
        "Apprezzate la nostra posizione—non vicino a una strada rumorosa o bar, ma comunque a distanza a piedi dalla spiaggia",
        "Amate i gatti! 🐱",
      ],
      notRightTitle: "💭 Potremmo Non Essere Adatti a Voi Se:",
      notRight: [
        "Avete bisogno di strutture e servizi professionali che trovereste in un grande hotel",
        "Siete molto specifici riguardo ai tipi di letti, cuscini o asciugamani",
        "Dovete essere molto vicini alla spiaggia",
        "Avete semplicemente bisogno di un posto dove dormire senza l'esperienza locale",
        "Siete sensibili alle realtà dei paesi in via di sviluppo (blackout occasionali, insetti, gechi, ecc.)",
        "Siete allergici ai gatti o non vi piacciono i gatti",
      ],
      hostsPhotoAlt:
        "Mam, Anna (sorelle) e Waree - La famiglia fondatrice della Pensione di Waree",
      hostPhotoAlt:
        "Anna, Josh e Fin - I vostri host alla Pensione di Waree",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Superhost Airbnb • Preferito dagli Ospiti",
      subtitle:
        "Valutato 4,83 su 5 dai nostri meravigliosi ospiti",
      superhost: "Anna è un Superhost di Airbnb",
      superhostDesc:
        "I Superhost sono host esperti e molto apprezzati impegnati a fornire soggiorni eccellenti",
      guestFavorite: "Preferito dagli Ospiti",
      guestFavoriteDesc:
        "Una delle case più amate su Airbnb in base a valutazioni, recensioni e affidabilità",
      rating: "Valutazione 4,83",
      ratingDesc:
        "Recensioni costantemente eccellenti da ospiti che amano la nostra atmosfera familiare",
      achievementsDate:
        "Riconoscimenti Airbnb al 23 gennaio 2026",
      ratingText: "Valutazione da 35 recensioni",
      superhostTitle: "Superhost",
      superhostYears: "Anna • 10 anni di ospitalità",
      checkInTitle: "Check-in Eccezionale",
      checkInDesc:
        "Gli ospiti recenti hanno valutato il processo di check-in con 5 stelle",
      locationTitle: "Posizione Imbattibile",
      locationDesc:
        "Il 100% degli ospiti nell'ultimo anno ha valutato questa posizione con 5 stelle",
      trustedTitle: "Esperienza Affidabile",
      ctaText:
        "Scopri perché gli ospiti continuano a tornare e darci 5 stelle!",
      ctaButton: "Verifica Disponibilità su Airbnb",
    },
    // Reviews
    reviews: {
      title: "Cosa Dicono i Nostri Ospiti",
      subtitle:
        "Esperienze reali di viaggiatori che hanno soggiornato da noi",
      ratingsDate: "Valutazioni al 23 gennaio 2026",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "Da 35 recensioni",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "Da 126 recensioni",
      // Rating categories
      categories: {
        cleanliness: "Pulizia",
        accuracy: "Precisione",
        checkIn: "Check-in",
        communication: "Comunicazione",
        location: "Posizione",
        value: "Rapporto qualità-prezzo",
        sleepQuality: "Qualità del sonno",
        rooms: "Camere",
        service: "Servizio",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "Ottimi padroni di casa, immacolatamente pulito, letto comodo, bel balcone, tranquillo... attività familiare con molto amore. Ci è piaciuto soggiornare qui!",
          author: "Andreas, Airbnb",
        },
        {
          text: "Anna è super adorabile, simpatica, disponibile e amichevole. Le camere sono davvero pulite e confortevoli. Altamente raccomandato!",
          author: "Rosa, Airbnb",
        },
        {
          text: "Probabilmente il proprietario di guest house più cordiale che abbiamo incontrato in tutto il nostro viaggio. Ci ha fatto sentire completamente a casa.",
          author: "Michael, TripAdvisor",
        },
        {
          text: "Camere pulite, personale cordiale, posizione perfetta. Ti senti davvero parte della famiglia qui!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Recensioni Airbnb",
      readTripadvisorButton: "Recensioni TripAdvisor",
    },
    // Rooms
    rooms: {
      title: "La Nostra Pensione",
      subtitle:
        "Confortevole, pulita e dotata di tutto ciò di cui hai bisogno",
      roomTypes: [
        {
          name: "Camera Doppia con Balcone Privato",
          description:
            "Camera accogliente e confortevole con tutto il necessario per un soggiorno rilassante",
          features: [
            "Letto King",
            "Bagno Privato con Doccia (Acqua Calda)",
            "Aria Condizionata",
            "Frigorifero",
            "Wi-Fi Gratuito",
            "Bollitore",
            "Balcone Privato",
            "Cassaforte",
          ],
        },
        {
          name: "Appartamento al Piano Terra",
          description:
            "Offrendo spazio abitativo aggiuntivo, questo appartamento dispone di un divano e cucina. Ospita 3 persone con vista sul cortile interno e strada tranquilla.",
          features: [
            "1 Camera da Letto, soggiorno separato con cucina annessa",
            "Ampio Bagno Privato con Doccia (Acqua Calda)",
            "Cucina completa con piano cottura e frigorifero",
            "Wi-Fi Gratuito",
            "Aria Condizionata",
            "Vista Cortile Interno",
            "Vista Strada Tranquilla",
            "Ingresso Privato",
            "Divano Letto",
            "Zona Pranzo",
            "Cassaforte",
            "TV a schermo piatto con Satellite e Cavo",
          ],
        },
        {
          name: "Casa con Due Camere da Letto",
          description:
            "Spaziosa casa di 65 mq con due camere da letto, cucina e ingresso privato. Perfetta per famiglie o gruppi con vista sul cortile interno e strada tranquilla.",
          features: [
            "2 Camere da Letto",
            "1 Bagno con Vasca e Doccia",
            "Cucina completa con zona pranzo",
            "Wi-Fi Gratuito",
            "Aria Condizionata",
            "TV a schermo piatto",
            "Vista Cortile Interno",
            "Vista Strada Tranquilla",
            "Ingresso Privato",
            "Area Salotto con Divano",
            "Mobili da Esterno",
            "Armadio",
          ],
        },
      ],
      roomsLabel: "Camere",
      floorsLabel: "Piani",
      establishedLabel: "Fondato",
      voltageLabel: "Tensione",
      // More space section
      needMoreSpace: "Hai Bisogno di Più Spazio?",
      moreSpaceDesc:
        "Cerchi una suite o un appartamento? Possiamo organizzare altre opzioni di alloggio per soddisfare le tue esigenze. Inviaci semplicemente un'email e ti aiuteremo a trovare lo spazio perfetto per il tuo soggiorno!",
      // CTA button
      viewAvailability: "Visualizza Disponibilità su Airbnb",
    },
    // Amenities
    amenities: {
      title: "Tutto Ciò di Cui Hai Bisogno",
      subtitle:
        "Abbiamo pensato a tutti i dettagli per rendere il tuo soggiorno confortevole e senza preoccupazioni. Inoltre, Anna e Josh sono sempre felici di aiutare a organizzare taxi, gite alle isole, raccomandazioni di ristoranti e altro ancora!",
      items: [
        {
          title: "Aria Condizionata",
          description: "Resta fresco nel clima tropicale",
        },
        {
          title: "Wi-Fi Gratuito",
          description: "Accesso internet ad alta velocità",
        },
        {
          title: "Frigorifero",
          description: "Mantieni bevande e snack freddi",
        },
        {
          title: "Pranzo all'aperto e BBQ",
          description: "Goditi i pasti in ambiente tropicale",
        },
        {
          title: "Biancheria di Qualità",
          description: "Cuscini extra, coperte e lenzuola",
        },
        {
          title: "Ferro da Stiro Disponibile",
          description: "Mantieni i tuoi vestiti freschi",
        },
        {
          title: "Articoli da Toilette Forniti",
          description:
            "Shampoo, sapone, asciugamani ed essenziali",
        },
        {
          title: "Noleggio Scooter",
          description:
            "Comodo noleggio motociclette disponibile",
        },
        {
          title: "Deposito Bagagli",
          description: "Arrivo anticipato o partenza tardiva",
        },
        {
          title: "Soggiorni a Lungo Termine Benvenuti",
          description: "28+ giorni disponibili",
        },
        {
          title: "Accoglienza Personale dell'Host",
          description: "Anna accoglie ogni ospite",
        },
        {
          title: "Sicurezza",
          description: "Estintore e kit di pronto soccorso",
        },
      ],
      beachAlt:
        "Kata Beach - a pochi passi dalla Pensione di Waree",
    },
    // Photo Gallery
    gallery: {
      title: "La Vita da Waree's",
      subtitle:
        "Incontra i tuoi host, esplora Kata Beach e scopri l'autentica esperienza di Phuket che ti aspetta",
      familyMatters: "La Famiglia Conta :)",
      familyMattersDesc:
        "Mam, Anna e Waree - La vostra famiglia lontano da casa",
      meetHosts: "Incontra i Tuoi Host",
      meetHostsDesc:
        "Anna, Josh e Fin - La vostra famiglia lontano da casa dal 2000",
      paradiseFound: "Paradiso Trovato",
      paradiseFoundDesc:
        "Viste mozzafiato, acque cristalline e tranquilla vita insulare",
      explore: "Esplora l'Isola",
      exploreDesc:
        "Scopri punti panoramici mozzafiato e gemme nascoste intorno a Phuket",
      familyFun: "Divertimento in Famiglia",
      familyFunDesc:
        "Parchi acquatici, attrazioni e attività per tutte le età nelle vicinanze",
      yourHome: "La Vostra Casa a Kata",
      yourHomeDesc:
        "Nel cuore di Kata Beach con splendide viste sulle montagne",
      welcome: "Benvenuti da Waree's",
      welcomeDesc:
        "Cerca il nostro iconico logo con uccello e chiave - la vostra casa lontano da casa",
      courtyard: "Cortile della Pensione",
      courtyardDesc:
        "Uno spazio tranquillo e accogliente per il relax e il piacere",
      entrance: "Ingresso della Pensione",
      entranceDesc:
        "Un ingresso accogliente e affascinante alla vostra nuova casa lontano da casa",
      ctaTitle: "Pronti a creare i vostri ricordi?",
      ctaDesc:
        "Unisciti alla famiglia Waree e sperimenta l'autentica ospitalità tailandese in uno dei luoghi più belli di Phuket",
      ctaButton: "Prenota il Tuo Soggiorno",
    },
    // Things to Do
    thingsToDo: {
      title: "Cosa Fare e Nelle Vicinanze",
      subtitle:
        "Tutto ciò di cui hai bisogno è a pochi minuti - spiagge, attrazioni, negozi e servizi locali",
      attractionsTitle: "Spiagge e Attrazioni",
      kataBeach: "Spiaggia di Kata",
      kataBeachDesc: "Bella spiaggia di sabbia bianca",
      kataBeachDist: "10 min a piedi",
      karonBeach: "Spiaggia di Karon",
      karonBeachDesc: "Lungo tratto di sabbia incontaminata",
      karonBeachDist: "15 min a piedi",
      viewpoint: "Punto Panoramico di Karon",
      viewpointDesc: "Viste costiere mozzafiato",
      viewpointDist: "Breve tragitto",
      bigBuddha: "Grande Buddha",
      bigBuddhaDesc: "Punto di riferimento iconico di Phuket",
      bigBuddhaDist: "20 min in auto",
      watChalong: "Tempio Wat Chalong",
      watChalongDesc: "Bellissimo tempio buddista",
      watChalongDist: "25 min in auto",
      nightMarket: "Mercato Notturno di Kata",
      nightMarketDesc: "Cibo e shopping locale",
      nightMarketDist: "Dietro di noi! 🎵",
      oldTown: "Città Vecchia di Phuket",
      oldTownDesc: "Architettura storica sino-portoghese",
      oldTownDist: "30 min in auto",
      getDirections: "Ottieni indicazioni",
      conveniencesTitle: "Servizi Nelle Vicinanze",
      atm: "Bancomat",
      atmDesc: "Prelievo contanti",
      atmDist: "5 min a piedi",
      pharmacy: "Farmacia Patak",
      pharmacyDesc: "Assistenza sanitaria e medicinali",
      pharmacyDist: "5 min a piedi",
      sevenEleven: "7-Eleven",
      sevenElevenDesc: "Negozio di convenienza 24/7",
      sevenElevenDist: "5 min a piedi",
      macro: "Mercato Macro",
      macroDesc: "Generi alimentari e forniture",
      macroDist: "5 min a piedi",
      clinic: "Clinica e Ospedale",
      clinicDesc: "Servizi medici nelle vicinanze",
      clinicDist: "Breve tragitto",
      jungceylon: "Jungceylon",
      jungceylonDesc: "Grande centro commerciale",
      jungceylonDist: "7,3 km • Patong",
      restaurants: "Ristoranti Locali",
      restaurantsDesc: "Cucina thailandese e internazionale",
      restaurantsDist: "2 min a piedi",
      localTip:
        "<strong>💡 Consiglio Locale:</strong> Siamo felici di aiutarvi ad organizzare i trasporti, consigliare ristoranti, prenotare tour e condividere i nostri luoghi locali preferiti. Basta chiedere—amiamo aiutare i nostri ospiti a scoprire la vera Phuket!",
    },
    // 2-Hour Adventures
    adventures: {
      title: "Idee Avventure di 2 Ore",
      subtitle: "Mini-viaggi divertenti perfetti per una mattina o un pomeriggio",
      duration: "~2 ore",
      trips: [
        { name: "Sunset & Street Food Tour", description: "Tramonto e il miglior cibo di strada di Phuket", purpose: "Fotografia e sapori locali", stops: [{ name: "Karon Viewpoint", time: "30 min", activity: "Vista panoramica di tre baie", tip: "Arrivare 30 min prima del tramonto" }, { name: "Rawai Seafood Market", time: "45 min", activity: "Scegliere frutti di mare freschi e farli cucinare sul posto", tip: "Provare i gamberi alla griglia" }, { name: "Nai Harn Beach Sunset", time: "30 min", activity: "Guardare il tramonto con i piedi nella sabbia", tip: "Prendere una noce di cocco dai venditori" }, { name: "Chalong Night Market", time: "15 min", activity: "Sosta dessert - provare mango sticky rice", tip: "Ottimo anche per souvenir" }]},
        { name: "Temple & Culture Trail", description: "Esplorare il lato spirituale di Phuket", purpose: "Fotografia, cultura e momenti di pace", stops: [{ name: "Wat Chalong Temple", time: "40 min", activity: "Tempio buddista più importante di Phuket", tip: "Vestirsi modestamente - coprire spalle e ginocchia" }, { name: "Big Buddha", time: "40 min", activity: "Statua di marmo alta 45 metri", tip: "Vista a 360° dell'isola dall'alto" }, { name: "Local Coffee Shop", time: "20 min", activity: "Pausa caffè ghiacciato tailandese", tip: "Provare il kopi tradizionale - forte e dolce" }, { name: "Karon Temple (Quick Stop)", time: "20 min", activity: "Piccolo tempio locale", tip: "Solitamente tranquillo - perfetto per la riflessione" }]},
        { name: "Hidden Beaches Hopper", description: "Scoprire luoghi segreti lontano dalle folle", purpose: "Foto di spiaggia, nuoto e cibo locale", stops: [{ name: "Ya Nui Beach", time: "40 min", activity: "Piccola baia nascosta - perfetta per lo snorkeling", tip: "Portare attrezzatura da snorkeling" }, { name: "Ao Sane Beach", time: "30 min", activity: "Spiaggia rocciosa con acqua cristallina", tip: "Meglio per le foto che per nuotare" }, { name: "Nui Beach Restaurant", time: "30 min", activity: "Pranzo tailandese in spiaggia con frutti di mare freschi", tip: "Ordinare riso fritto all'ananas in un ananas!" }, { name: "Windmill Viewpoint", time: "20 min", activity: "Foto panoramica del sud di Phuket", tip: "Meno affollato di Promthep Cape" }]},
        { name: "Old Town Food Walk", description: "Strade storiche incontrano i sapori autentici di Phuket", purpose: "Cibo di strada, fotografia architettonica, cultura locale", stops: [{ name: "Thalang Road", time: "30 min", activity: "Edifici sino-portoghesi colorati", tip: "Cercare i murales di street art" }, { name: "Kopitiam by Wilai", time: "25 min", activity: "Colazione tradizionale di Phuket - dim sum e caffè", tip: "Provare i noodles hokkien - specialità locale" }, { name: "Local Markets", time: "35 min", activity: "Assaggiare roti, satay e frutta fresca", tip: "Contrattare gentilmente e sorridere" }, { name: "Dessert at Torry's Ice Cream", time: "20 min", activity: "Gusti unici di gelato ispirati alla Thailandia", tip: "Cenere di cocco o tè tailandese da provare" }, { name: "Sunday Walking Street (Weekend Only)", time: "10 min", activity: "Artigianato e spettacoli di strada la domenica", tip: "Inizia intorno alle 16:00 solo la domenica" }]}
      ]
    },
    // Location
    location: {
      title: "Come Arrivare",
      subtitle:
        "Situati nel cuore di Kata Beach, siamo facili da raggiungere da qualsiasi punto di Phuket",
      ourAddress: "Il Nostro Indirizzo",
      address:
        "44/5 Kata Road\nKata Beach, Karon\nPhuket 83100\nThailandia",
      directions: "Ottieni Indicazioni",
      fromAirport: "Dall'Aeroporto",
      distance: "Distanza:",
      distanceValue: "Circa 45 km (28 miglia)",
      travelTime: "Tempo di Viaggio:",
      travelTimeValue: "45-60 minuti in auto",
      recommendedTitle:
        "Consigliato per i Visitatori alla Prima Esperienza",
      recommendedSubtitle:
        "Prendi un taxi dall'Aeroporto Internazionale di Phuket",
      airportTaxiTitle: "🚖 Taxi dall'Aeroporto",
      airportTaxiDesc:
        "L'opzione più semplice e comoda per chi visita Phuket per la prima volta. I taxi ufficiali dell'aeroporto sono sicuri, affidabili e offrono un servizio diretto fino alla nostra porta.",
      taxiCost: "Costo:",
      taxiCostValue: "Circa 800-1.000 THB (tariffa fissa)",
      taxiWhere: "Dove trovarli:",
      taxiWhereValue: "Banco taxi ufficiale nell'area arrivi",
      taxiDuration: "Durata:",
      taxiDurationValue:
        "45-60 minuti direttamente a Kata Beach",
      taxiTip: "Suggerimento:",
      taxiTipValue:
        "Tieni a portata di mano la conferma della prenotazione da mostrare all'autista",
      airportBusTitle: "🚌 Autobus dall'Aeroporto",
      airportBusDesc:
        "Opzione economica con servizio regolare per l'area di Kata Beach.",
      busCost: "~150-200 THB",
      busDuration: "90-120 minuti",
      privateTransferTitle: "🚗 Transfer Privato",
      privateTransferDesc:
        "Transfer prenotato in anticipo con servizio di accoglienza disponibile.",
      privateCost: "~1.200-1.500 THB",
      privateDuration: "45-60 minuti",
      localTransportTitle: "🛵 Trasporto Locale",
      localTransportDesc:
        "Tuk-tuk e moto-taxi disponibili per brevi spostamenti intorno a Kata Beach.",
      localCost: "Varia in base alla distanza",
      localTip: "Concordare sempre prima il prezzo",
      helpTitle:
        "Hai bisogno di aiuto per organizzare il trasporto?",
      helpDesc:
        "Anna e Josh sono felici di aiutarti a organizzare un taxi o fornirti indicazioni. Mandaci un messaggio dopo la prenotazione!",
      whatsappButton: "Scrivici su WhatsApp",
      callButton: "Chiama +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "Rimani Connesso",
      subtitle:
        "Seguici su Facebook per aggiornamenti quotidiani, foto degli ospiti, consigli locali e offerte speciali! Scopri cosa succede da Waree's e lasciati ispirare per la tua avventura a Kata Beach.",
      communityTitle: "Comunità",
      communityDesc:
        "Unisciti alla nostra crescente famiglia di viaggiatori da tutto il mondo",
      storiesTitle: "Storie degli Ospiti",
      storiesDesc:
        "Guarda le foto e le storie degli ospiti diventati amici",
      eventsTitle: "Eventi e Aggiornamenti",
      eventsDesc:
        "Eventi locali, aggiornamenti sulla spiaggia e notizie della pensione",
      latestTitle: "Ultimi da Facebook",
      latestDesc:
        "Guarda i nostri post, foto e aggiornamenti più recenti da Anna, Josh e Mam!",
      ctaText:
        "Clicca qui sotto per visitare la nostra pagina Facebook e scoprire le novità di Waree's Guesthouse!",
      ctaButton: "Visita la nostra pagina Facebook",
      feature1: "Aggiornamenti",
      feature2: "Foto degli ospiti",
      feature3: "Raccomandazioni locali",
      feature4: "Messaggistica diretta",
      quickTitle: "Domanda Veloce?",
      quickDesc:
        "Scrivici su Facebook, per messaggio, email o chiamaci per la risposta più veloce!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "Email",
    },
    // Common UI
    common: {
      showDetails: "Mostra dettagli",
      hideDetails: "Nascondi dettagli",
    },
    // Footer
    footer: {
      description:
        "La vostra casa lontano da casa nella bellissima Kata Beach, Phuket. Sperimentate il calore locale e l'ospitalità genuina.",
      contactTitle: "Contattaci",
      connectTitle: "Connettiti con noi",
      facebook: "Seguici su Facebook",
      whatsapp: "Scrivici su WhatsApp",
      line: "Scrivici su Line",
      messagePrompt:
        "Scrivici sulla tua piattaforma preferita—siamo qui per aiutarti!",
      bookTitle: "Prenota il Tuo Soggiorno",
      bookDescription:
        "Pronto a vivere Kata Beach come un locale? Prenota ora per le migliori tariffe e conferma istantanea.",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Pensione di Waree, Kata Beach, Phuket. Tutti i diritti riservati.",
      tagline:
        "Creando ricordi, un ospite alla volta dal 2000 💛",
      quickLinks: "Link Rapidi",
      contact: "Contatti",
      phone: "Telefono",
      email: "Email",
      social: "Seguici",
      about: "Chi Siamo",
      rooms: "Camere",
      amenities: "Servizi",
      reviews: "Recensioni",
      location: "Posizione",
    },
  },
  sv: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Waree's Gästhus",
      subtitle: "Ditt Familjehem vid Kata Beach",
      tagline:
        "Upplev Phuket med äkta thailändsk gästfrihet sedan 2000",
      emailButton: "Mejla oss",
      bookButton: "Boka på Airbnb",
      reviewsButton: "Läs Recensioner",
    },
    // About
    about: {
      title: "Möt Anna, Josh & Mam",
      p1: "Hej! Bara Anna, Josh, Mam—det är vi! Här sedan 2000. De flesta gäster som gillar oss, gör det på grund av vår <strong>familjekänsla och avslappnade hemma-borta-från-hemma-stil</strong>.",
      p2: "Låt oss hänga i vår utomhuslounge, i vår lilla bar eller spela badminton med oss på gatan—vi njuter verkligen av att spendera tid med gäster! Vi hjälper till att arrangera resor, boka taxibilar, restauranger och mer.",
      p3: "<strong>Vi tror att att resa handlar om människorna du möter!</strong>",
      note: "<strong>🎵 Obs:</strong> Det finns en utomhusmarknad bakom oss som spelar lugn livemusik på kvällarna. De slutar mellan 22:00 och 23:00 de flesta kvällar (inte senare än midnatt).",
      budget:
        'Som vi sa, vi är bara en vanlig familj som driver vårt lilla, avslappnade gästhus/homestay. Vi anser oss vara <strong>"2 Stjärnor" / budgetvänliga</strong>.',
      rightForYouTitle:
        "✨ Vi Tror Att Du Kommer Älska Oss Om Du:",
      rightForYou: [
        "Vill ha en mer unik och lokal upplevelse",
        "Njuter av att känna dig som en del av familjen, träffa nya människor och få nya vänner",
        "Har en budget, men uppskattar små lyxigheter som luftkonditionering, rena lakan och varmt vatten",
        "Uppskattar vårt läge—inte nära en bullrig väg eller barer, men ändå promenadavstånd till stranden",
        "Älskar katter! 🐱",
      ],
      notRightTitle: "💭 Vi Kanske Inte Passar Dig Om Du:",
      notRight: [
        "Behöver professionella faciliteter och tjänster som du skulle hitta på ett stort hotell",
        "Är väldigt specifik om sängtyper, kuddar eller handdukar",
        "Måste vara väldigt nära stranden",
        "Bara behöver en plats att sova utan den lokala upplevelsen",
        "Är känslig för utvecklingsländernas realiteter (tillfälliga strömavbrott, insekter, geckos, etc.)",
        "Är allergisk mot eller inte gillar katter",
      ],
      hostsPhotoAlt:
        "Mam, Anna (systrar) och Waree - Grundarfamiljen för Waree's Gästhus",
      hostPhotoAlt:
        "Anna, Josh och Fin - Dina värdar på Waree's Gästhus",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb Superhost • Gästfavorit",
      subtitle: "Betygsatt 4,83 av 5 av våra underbara gäster",
      superhost: "Anna är en Airbnb Superhost",
      superhostDesc:
        "Superhosts är erfarna, högt rankade värdar som är engagerade i att ge fantastiska vistelser",
      guestFavorite: "Gästfavorit",
      guestFavoriteDesc:
        "Ett av de mest älskade hemmen på Airbnb baserat på betyg, recensioner och tillförlitlighet",
      rating: "4,83 Betyg",
      ratingDesc:
        "Konsekvent utmärkta recensioner från gäster som älskar vår familjeatmosfär",
      achievementsDate:
        "Airbnb-prestationer per den 23 januari 2026",
      ratingText: "Betyg från 35 recensioner",
      superhostTitle: "Superhost",
      superhostYears: "Anna • 10 års värdskap",
      checkInTitle: "Exceptionell Incheckning",
      checkInDesc:
        "Senaste gästerna gav incheckningsprocessen 5 stjärnor",
      locationTitle: "Oslagbart Läge",
      locationDesc:
        "100% av gästerna det senaste året gav detta läge 5 stjärnor",
      trustedTitle: "Pålitlig Upplevelse",
      ctaText:
        "Se varför gäster fortsätter att komma tillbaka och ge oss 5 stjärnor!",
      ctaButton: "Kontrollera Tillgänglighet på Airbnb",
    },
    // Reviews
    reviews: {
      title: "Vad Våra Gäster Säger",
      subtitle:
        "Verkliga upplevelser från resenärer som har bott hos oss",
      ratingsDate: "Betyg per 23 januari 2026",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "Från 35 recensioner",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "Från 126 recensioner",
      // Rating categories
      categories: {
        cleanliness: "Renlighet",
        accuracy: "Noggrannhet",
        checkIn: "Incheckning",
        communication: "Kommunikation",
        location: "Läge",
        value: "Värde",
        sleepQuality: "Sömnkvalitet",
        rooms: "Rum",
        service: "Service",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "Fantastiska värdar, skinande rent, bekväm säng, fin balkong, tyst... familjeföretag med mycket kärlek. Vi älskade att bo här!",
          author: "Andreas, Airbnb",
        },
        {
          text: "Anna är super lovely, trevlig, hjälpsam och vänlig. Rummen är verkligen rena och bekväma. Rekommenderas varmt!",
          author: "Rosa, Airbnb",
        },
        {
          text: "Förmodligen den vänligaste pensionatsägaren vi träffat på hela vår resa. Fick oss att känna oss helt hemma.",
          author: "Michael, TripAdvisor",
        },
        {
          text: "Rena rum, vänlig personal, perfekt läge. Du känner dig verkligen som en del av familjen här!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Airbnb recensioner",
      readTripadvisorButton: "TripAdvisor recensioner",
    },
    // Rooms
    rooms: {
      title: "Vårt Gästhus",
      subtitle:
        "Bekvämt, rent och utrustat med allt du behöver",
      roomTypes: [
        {
          name: "Dubbelrum med privat balkong",
          description:
            "Mysigt, bekvämt rum med allt du behöver för en avkopplande vistelse",
          features: [
            "King Size-säng",
            "Eget Duschrum (Varmvatten)",
            "Luftkonditionering",
            "Kylskåp",
            "Gratis WiFi",
            "Vattenkokare",
            "Privat Balkong",
            "Kassaskåp",
          ],
        },
        {
          name: "Bottenvåningslägenhet",
          description:
            "Med extra boyta erbjuder denna lägenhet en soffa och kök. Plats för 3 gäster med utsikt över innergården och tyst gata.",
          features: [
            "1 Sovrum, separat vardagsrum med angränsande kök",
            "Rymligt eget duschrum (varmvatten)",
            "Fullständigt kök med spis och kylskåp",
            "Gratis WiFi",
            "Luftkonditionering",
            "Utsikt över Innergård",
            "Utsikt över Tyst Gata",
            "Privat Ingång",
            "Bäddsoffa",
            "Matplats",
            "Kassaskåp",
            "Platt-TV med Satellit och Kabel",
          ],
        },
        {
          name: "Tvårumslägenhet",
          description:
            "Rymlig 65 kvm lägenhet med två sovrum, kök och privat ingång. Perfekt för familjer eller grupper med utsikt över innergården och tyst gata.",
          features: [
            "2 Sovrum",
            "1 Badrum med Badkar och Dusch",
            "Fullständigt kök med matplats",
            "Gratis WiFi",
            "Luftkonditionering",
            "Platt-TV",
            "Utsikt över Innergård",
            "Utsikt över Tyst Gata",
            "Privat Ingång",
            "Sittområde med Soffa",
            "Utemöbler",
            "Garderob",
          ],
        },
      ],
      roomsLabel: "Rum",
      floorsLabel: "Våningar",
      establishedLabel: "Grundad",
      voltageLabel: "Spänning",
      // More space section
      needMoreSpace: "Behöver Du Mer Utrymme?",
      moreSpaceDesc:
        "Letar du efter en svit eller lägenhet? Vi kan ordna andra boendealternativ som passar dina behov. Maila oss direkt så hjälper vi dig hitta det perfekta utrymmet för din vistelse!",
      // CTA button
      viewAvailability: "Visa Tillgänglighet på Airbnb",
    },
    // Amenities
    amenities: {
      title: "Allt Du Behöver",
      subtitle:
        "Vi har tänkt på alla detaljer för att göra din vistelse bekväm och bekymmersfri. Dessutom hjälper Anna och Josh gärna till med att ordna taxi, öturer, restaurangrekommendationer och mer!",
      items: [
        {
          title: "Luftkonditionering",
          description: "Håll dig sval i tropiskt väder",
        },
        {
          title: "Gratis WiFi",
          description: "Höghastighetsinternet",
        },
        {
          title: "Kylskåp",
          description: "Håll drycker och snacks kalla",
        },
        {
          title: "Utomhusmåltider & Grill",
          description: "Njut av måltider i tropisk miljö",
        },
        {
          title: "Kvalitetssängkläder",
          description: "Extra kuddar, filtar och lakan",
        },
        {
          title: "Strykjärn Tillgängligt",
          description: "Håll dina kläder fräscha",
        },
        {
          title: "Toalettartiklar Tillhandahålls",
          description:
            "Schampo, tvål, handdukar och nödvändigheter",
        },
        {
          title: "Skoteruthyrning",
          description: "Bekväm motorcykeluthyrning tillgänglig",
        },
        {
          title: "Bagageförvaring",
          description: "Tidig ankomst eller sen avresa",
        },
        {
          title: "Långtidsvistelser Välkomna",
          description: "28+ dagar tillgängliga",
        },
        {
          title: "Personlig Värdhälsning",
          description: "Anna välkomnar varje gäst",
        },
        {
          title: "Säkerhet",
          description: "Brandsläckare och första hjälpen-kit",
        },
      ],
      beachAlt:
        "Kata Beach - bara några steg från Waree's Gästhus",
    },
    // Photo Gallery
    gallery: {
      title: "Livet på Waree's",
      subtitle:
        "Möt dina värdar, utforska Kata Beach och upptäck den autentiska Phuket-upplevelsen som väntar dig",
      familyMatters: "Familjen Betyder Allt :)",
      familyMattersDesc:
        "Mam, Anna & Waree - Din familj borta från hemmet",
      meetHosts: "Möt Dina Värdar",
      meetHostsDesc:
        "Anna, Josh & Fin - Din familj borta från hemmet sedan 2000",
      paradiseFound: "Paradiset Hittat",
      paradiseFoundDesc:
        "Fantastiska vyer, kristallklart vatten och fridfullt öbondeliv",
      explore: "Utforska Ön",
      exploreDesc:
        "Upptäck hisnande utsiktspunkter och dolda pärlor runt Phuket",
      familyFun: "Familjekul",
      familyFunDesc:
        "Vattenparker, attraktioner och aktiviteter för alla åldrar i närheten",
      yourHome: "Ditt Hem i Kata",
      yourHomeDesc:
        "Beläget i hjärtat av Kata Beach med fantastisk bergsutsikt",
      welcome: "Välkommen till Waree's",
      welcomeDesc:
        "Leta efter vår ikoniska fågel-och-nyckel-logotyp - ditt hem borta från hemmet",
      courtyard: "Gästhusets Innergård",
      courtyardDesc:
        "Ett fridfullt och välkomnande utrymme för avkoppling och njutning",
      entrance: "Gästhusets Ingång",
      entranceDesc:
        "En välkomnande och charmig ingång till ditt nya hem borta från hemmet",
      ctaTitle: "Redo att skapa egna minnen?",
      ctaDesc:
        "Gå med i Waree-familjen och upplev autentisk thailändsk gästfrihet på en av Phukets vackraste platser",
      ctaButton: "Boka Din Vistelse",
    },
    // Things to Do
    thingsToDo: {
      title: "Saker att Göra & I Närheten",
      subtitle:
        "Allt du behöver är bara några minuter bort - stränder, attraktioner, butiker och lokala bekvämligheter",
      attractionsTitle: "Stränder & Attraktioner",
      kataBeach: "Kata Beach",
      kataBeachDesc: "Vacker vit sandstrand",
      kataBeachDist: "10 min promenad",
      karonBeach: "Karon Beach",
      karonBeachDesc: "Lång sträcka av orörd sand",
      karonBeachDist: "15 min promenad",
      viewpoint: "Karon Utsiktspunkt",
      viewpointDesc: "Hisnande kustvyer",
      viewpointDist: "Kort biltur",
      bigBuddha: "Stora Buddha",
      bigBuddhaDesc: "Ikoniskt landmärke i Phuket",
      bigBuddhaDist: "20 min biltur",
      watChalong: "Wat Chalong Tempel",
      watChalongDesc: "Vackert buddhistiskt tempel",
      watChalongDist: "25 min biltur",
      nightMarket: "Kata Nattmarknad",
      nightMarketDesc: "Lokal mat & shopping",
      nightMarketDist: "Bakom oss! 🎵",
      oldTown: "Gamla Stan Phuket",
      oldTownDesc: "Historisk kinesisk-portugisisk arkitektur",
      oldTownDist: "30 min biltur",
      getDirections: "Vägbeskrivning",
      conveniencesTitle: "Närliggande Bekvämligheter",
      atm: "Bankomat",
      atmDesc: "Kontantuttag",
      atmDist: "5 min promenad",
      pharmacy: "Patak Apotek",
      pharmacyDesc: "Hälsovård & medicin",
      pharmacyDist: "5 min promenad",
      sevenEleven: "7-Eleven",
      sevenElevenDesc: "24/7 närbutik",
      sevenElevenDist: "5 min promenad",
      macro: "Macro Marknad",
      macroDesc: "Matvaror & förnödenheter",
      macroDist: "5 min promenad",
      clinic: "Klinik & Sjukhus",
      clinicDesc: "Medicinska tjänster i närheten",
      clinicDist: "Kort biltur",
      jungceylon: "Jungceylon",
      jungceylonDesc: "Stort köpcentrum",
      jungceylonDist: "7,3 km • Patong",
      restaurants: "Lokala Restauranger",
      restaurantsDesc: "Thailändsk & internationell mat",
      restaurantsDist: "2 min promenad",
      localTip:
        "<strong>💡 Lokalt Tips:</strong> Vi hjälper gärna till att ordna transport, rekommendera restauranger, boka turer och dela våra favoritlokala platser. Bara fråga—vi älskar att hjälpa våra gäster att upptäcka det verkliga Phuket!",
    },
    // 2-Hour Adventures
    adventures: {
      title: "2-Timmars Äventyrsidéer",
      subtitle: "Roliga mini-resor perfekta för en morgon eller eftermiddag",
      duration: "~2 timmar",
      trips: [
        { name: "Sunset & Street Food Tour", description: "Solnedgång och Phukets bästa gatumat", purpose: "Fotografering och lokala smaker", stops: [{ name: "Karon Viewpoint", time: "30 min", activity: "Panoramautsikt över tre vikar", tip: "Kom 30 min före solnedgången" }, { name: "Rawai Seafood Market", time: "45 min", activity: "Välj färska skaldjur och låt dem lagas på plats", tip: "Prova de grillade räkorna" }, { name: "Nai Harn Beach Sunset", time: "30 min", activity: "Titta på solnedgången med fötterna i sanden", tip: "Ta en kokosnöt från säljare" }, { name: "Chalong Night Market", time: "15 min", activity: "Dessertstopp - prova mango sticky rice", tip: "Bra för sista minuten-souvenirer också" }]},
        { name: "Temple & Culture Trail", description: "Utforska Phukets andliga sida", purpose: "Fotografering, kultur och lugna stunder", stops: [{ name: "Wat Chalong Temple", time: "40 min", activity: "Phukets viktigaste buddhistiska tempel", tip: "Klä dig anständigt - täck axlar och knän" }, { name: "Big Buddha", time: "40 min", activity: "45 meter hög marmorstaty", tip: "360° utsikt över ön uppifrån" }, { name: "Local Coffee Shop", time: "20 min", activity: "Thai iskaffe-paus", tip: "Prova traditionell kopi - stark och söt" }, { name: "Karon Temple (Quick Stop)", time: "20 min", activity: "Litet lokalt tempel", tip: "Vanligtvis lugnt - perfekt för reflektion" }]},
        { name: "Hidden Beaches Hopper", description: "Upptäck hemliga platser bort från folkmassorna", purpose: "Strandfotografering, simning och lokal mat", stops: [{ name: "Ya Nui Beach", time: "40 min", activity: "Liten gömd vik - perfekt för snorkling", tip: "Ta med snorkelutrustning" }, { name: "Ao Sane Beach", time: "30 min", activity: "Stenstrand med kristallklart vatten", tip: "Bättre för foton än simning" }, { name: "Nui Beach Restaurant", time: "30 min", activity: "Thai lunch vid stranden med färska skaldjur", tip: "Beställ ananas stekt ris i en ananas!" }, { name: "Windmill Viewpoint", time: "20 min", activity: "Panoramafoto av södra Phuket", tip: "Mindre folkmassor än Promthep Cape" }]},
        { name: "Old Town Food Walk", description: "Historiska gator möter autentiska Phuket-smaker", purpose: "Gatumat, arkitekturfotografering, lokal kultur", stops: [{ name: "Thalang Road", time: "30 min", activity: "Färgglada kinesisk-portugisiska byggnader", tip: "Leta efter street art-muralmålningar" }, { name: "Kopitiam by Wilai", time: "25 min", activity: "Traditionell Phuket-frukost - dim sum & kaffe", tip: "Prova hokkien-nudlar - lokal specialitet" }, { name: "Local Markets", time: "35 min", activity: "Prova roti, satay och färsk frukt", tip: "Pruta försiktigt och le" }, { name: "Dessert at Torry's Ice Cream", time: "20 min", activity: "Unika thaiinspirerade glassmaker", tip: "Kokosaska eller thai-te är ett måste" }, { name: "Sunday Walking Street (Weekend Only)", time: "10 min", activity: "Bläddra hantverk och gatuföreställningar på söndagar", tip: "Börjar runt 16:00 endast söndagar" }]}
      ]
    },
    // Location
    location: {
      title: "Så Här Tar Du Dig Hit",
      subtitle:
        "Beläget i hjärtat av Kata Beach, vi är lätta att nå från var som helst på Phuket",
      ourAddress: "Vår Adress",
      address:
        "44/5 Kata Road\nKata Beach, Karon\nPhuket 83100\nThailand",
      directions: "Få Vägbeskrivning",
      fromAirport: "Från Flygplatsen",
      distance: "Avstånd:",
      distanceValue: "Cirka 45 km (28 miles)",
      travelTime: "Restid:",
      travelTimeValue: "45-60 minuter med bil",
      recommendedTitle: "Rekommenderat för Förstagångsbesökare",
      recommendedSubtitle:
        "Ta en taxi från Phuket International Airport",
      airportTaxiTitle: "🚖 Flygplatstax",
      airportTaxiDesc:
        "Det enklaste och bekvämaste alternativet för förstagångsbesökare till Phuket. Officiella flygplatstaxibilar är säkra, pålitliga och ger direkt service till vår dörr.",
      taxiCost: "Kostnad:",
      taxiCostValue: "Cirka 800-1 000 THB (fast pris)",
      taxiWhere: "Var man hittar:",
      taxiWhereValue: "Officiell taxidisk i ankomsthallen",
      taxiDuration: "Varaktighet:",
      taxiDurationValue: "45-60 minuter direkt till Kata Beach",
      taxiTip: "Tips:",
      taxiTipValue:
        "Ha din bokningsbekräftelse till hands för att visa föraren",
      airportBusTitle: "🚌 Flygplatsbuss",
      airportBusDesc:
        "Budgetvänligt alternativ med regelbunden trafik till Kata Beach-området.",
      busCost: "~150-200 THB",
      busDuration: "90-120 minuter",
      privateTransferTitle: "🚗 Privat Transfer",
      privateTransferDesc:
        "Förbokning av transfer med möte & hälsningsservice tillgänglig.",
      privateCost: "~1 200-1 500 THB",
      privateDuration: "45-60 minuter",
      localTransportTitle: "🛵 Lokal Transport",
      localTransportDesc:
        "Tuk-tuks och motorcykeltaxibilar tillgängliga för korta resor runt Kata Beach.",
      localCost: "Varierar beroende på avstånd",
      localTip: "Kom alltid överens om priset först",
      helpTitle: "Behöver du hjälp med att ordna transport?",
      helpDesc:
        "Anna och Josh hjälper gärna till att ordna en taxi eller ge vägbeskrivningar. Skicka bara ett meddelande till oss efter bokningen!",
      whatsappButton: "WhatsApp Oss",
      callButton: "Ring +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "Håll Kontakten",
      subtitle:
        "Följ oss på Facebook för dagliga uppdateringar, gästfoton, lokala tips och specialerbjudanden! Se vad som händer på Waree's och bli inspirerad för ditt Kata Beach-äventyr.",
      communityTitle: "Gemenskap",
      communityDesc:
        "Gå med i vår växande familj av resenärer från hela världen",
      storiesTitle: "Gästberättelser",
      storiesDesc:
        "Se foton och berättelser från gäster som blivit vänner",
      eventsTitle: "Evenemang & Uppdateringar",
      eventsDesc:
        "Lokala evenemang, strandnyheter och gästhus-nyheter",
      latestTitle: "Senaste från Facebook",
      latestDesc:
        "Se våra senaste inlägg, foton och uppdateringar från Anna, Josh och Mam!",
      ctaText:
        "Klicka nedan för att besöka vår Facebook-sida och se vad som är nytt på Waree's Guesthouse!",
      ctaButton: "Besök vår Facebook-sida",
      feature1: "Uppdateringar",
      feature2: "Gästfoton",
      feature3: "Lokala rekommendationer",
      feature4: "Direktmeddelanden",
      quickTitle: "Snabb Fråga?",
      quickDesc:
        "Skicka meddelande till oss på Facebook, sms, e-post eller ring oss för snabbast svar!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "E-post",
    },
    // Common UI
    common: {
      showDetails: "Visa detaljer",
      hideDetails: "Dölj detaljer",
    },
    // Footer
    footer: {
      description:
        "Ditt hem borta från hemmet vid vackra Kata Beach, Phuket. Upplev lokal värme och genuin gästfrihet.",
      contactTitle: "Kontakta Oss",
      connectTitle: "Anslut med Oss",
      facebook: "Följ oss på Facebook",
      whatsapp: "WhatsApp Oss",
      line: "Line Oss",
      messagePrompt:
        "Skicka meddelande till oss på din favoritplattform—vi finns här för att hjälpa!",
      bookTitle: "Boka Din Vistelse",
      bookDescription:
        "Redo att uppleva Kata Beach som en lokal? Boka nu för bästa priser och omedelbar bekräftelse.",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Waree's Gästhus, Kata Beach, Phuket. Alla rättigheter förbehållna.",
      tagline: "Skapar minnen, en gäst i taget sedan 2000 💛",
      quickLinks: "Snabblänkar",
      contact: "Kontakt",
      phone: "Telefon",
      email: "E-post",
      social: "Följ Oss",
      about: "Om Oss",
      rooms: "Rum",
      amenities: "Bekvämligheter",
      reviews: "Recensioner",
      location: "Plats",
    },
  },
  fi: {
    // Language Names
    languageNames: {
      en: "English",
      th: "ไทย",
      zh: "中文",
      ru: "Русский",
      de: "Deutsch",
      it: "Italiano",
      sv: "Svenska",
      fi: "Suomi",
    },
    // Hero
    hero: {
      title: "Wareen Majatalo",
      subtitle: "Perhekotisi Kata Beachillä",
      tagline:
        "Koe Phuket aidolla thaimaalaisella vieraanvaraisuudella vuodesta 2000",
      emailButton: "Lähetä meille sähköpostia",
      bookButton: "Varaa Airbnb:stä",
      reviewsButton: "Lue Arvostelut",
    },
    // About
    about: {
      title: "Tapaa Anna, Josh ja Mam",
      p1: "Hei! Vain Anna, Josh, Mam—se olemme me! Täällä vuodesta 2000. Useimmat vieraat, jotka pitävät meistä, tekevät niin <strong>perhemaisen tunnelman ja rennon koti-poissa-kodista-tyylin</strong> takia.",
      p2: "Ollaan yhdessä ulko-oleskelutilassamme, pienessä baarissamme tai pelataan sulkapalloa kanssamme kadulla—nautimme aidosti ajan viettämisestä vieraiden kanssa! Autamme järjestämään retkiä, varaamaan takseja, ravintoloita ja paljon muuta.",
      p3: "<strong>Uskomme, että matkailu on ennen kaikkea ihmisiä, jotka tapaat!</strong>",
      note: "<strong>🎵 Huomautus:</strong> Takana on ulkomarkkina, jossa soitetaan rentouttavaa livemusiikkia iltaisin. He lopettavat kello 22:00 ja 23:00 välillä useimpina iltoina (viimeistään keskiyöllä).",
      budget:
        'Kuten sanoimme, olemme vain tavallinen perhe, joka pyörittää pientä, rentoa majataloa/kotimajoitusta. Pidämme itseämme <strong>"2 Tähteä" / budjettiyspitäisenä</strong>.',
      rightForYouTitle: "✨ Uskomme, että Pidät Meistä Jos:",
      rightForYou: [
        "Haluat ainutlaatuisemman ja paikallisemman kokemuksen",
        "Nautit olemisesta osa perhettä, tapaamassa uusia ihmisiä ja hankkimassa uusia ystäviä",
        "Olet budjetilla, mutta arvostat pieniä ylellisyyksiä kuten ilmastointia, puhtaita lakanoita ja kuumaa vettä",
        "Arvostat sijaintiamme—ei meluisan tien tai baarien lähellä, mutta silti kävelymatkan päässä rannasta",
        "Rakastat kissoja! 🐱",
      ],
      notRightTitle: "💭 Emme Ehkä Sovi Sinulle Jos:",
      notRight: [
        "Tarvitset ammattimaisia tiloja ja palveluita, joita löydät suuresta hotellista",
        "Olet hyvin tarkka sänkytyypeistä, tyynyistä tai pyyhkeistä",
        "Sinun täytyy olla hyvin lähellä rantaa",
        "Tarvitset vain paikan nukkua ilman paikallista kokemusta",
        "Olet herkkä kehitysmaan todellisuudelle (satunnaiset sähkökatkot, hyönteiset, gekot jne.)",
        "Olet allerginen kissoille tai et pidä kissoista",
      ],
      hostsPhotoAlt:
        "Mam, Anna (sisarukset) ja Waree - Wareen Majatalon perustajperhe",
      hostPhotoAlt:
        "Anna, Josh ja Fin - Isäntäsi Wareen Majatalossa",
    },
    // Airbnb Highlights
    airbnb: {
      title: "Airbnb Superhost • Vieraiden Suosikki",
      subtitle:
        "Arvioitu 4,83/5 ihanasten vieras temme toimesta",
      superhost: "Anna on Airbnb Superhost",
      superhostDesc:
        "Superhostit ovat kokeneita, korkeasti arvioituja isäntiä, jotka ovat sitoutuneet tarjoamaan loistavia yöpymisiä",
      guestFavorite: "Vieraiden Suosikki",
      guestFavoriteDesc:
        "Yksi Airbnb:n rakastetuimmista kodeista arvioiden, arvostelujen ja luotettavuuden perusteella",
      rating: "4,83 Arvio",
      ratingDesc:
        "Jatkuvasti erinomaiset arvostelut vierailta, jotka rakastavat perheilmapiiriämme",
      achievementsDate:
        "Airbnb-saavutukset 23. tammikuuta 2026",
      ratingText: "Arvio 35 arvostelusta",
      superhostTitle: "Superhost",
      superhostYears: "Anna • 10 vuotta isäntänä",
      checkInTitle: "Poikkeuksellinen Sisäänkirjautuminen",
      checkInDesc:
        "Viimeaikaiset vieraat antoivat sisäänkirjautumisprosessille 5 tähteä",
      locationTitle: "Lyömätön Sijainti",
      locationDesc:
        "100% vieraista viime vuonna antoi tälle sijainnille 5 tähteä",
      trustedTitle: "Luotettava Kokemus",
      ctaText:
        "Katso miksi vieraat palaavat ja antavat meille 5 tähteä!",
      ctaButton: "Tarkista Saatavuus Airbnb:ssä",
    },
    // Reviews
    reviews: {
      title: "Mitä Vieraamme Sanovat",
      subtitle:
        "Todellisia kokemuksia matkailijoilta, jotka ovat yöpyneet luonamme",
      ratingsDate: "Arvostelut 23. tammikuuta 2026",
      airbnbTitle: "Airbnb",
      airbnbScore: "4.83",
      airbnbReviewCount: "35 arvostelusta",
      tripadvisorTitle: "TripAdvisor",
      tripadvisorScore: "4.5",
      tripadvisorReviewCount: "126 arvostelusta",
      // Rating categories
      categories: {
        cleanliness: "Siisteys",
        accuracy: "Tarkkuus",
        checkIn: "Sisäänkirjautuminen",
        communication: "Viestintä",
        location: "Sijainti",
        value: "Hinta-laatusuhde",
        sleepQuality: "Unen laatu",
        rooms: "Huoneet",
        service: "Palvelu",
      },
      // Guest reviews
      guestReviews: [
        {
          text: "Mahtavat isännät, nuhteettoman siisti, mukava sänky, kiva parveke, hiljainen... perheomisteinen yritys paljon rakkaudella. Rakastimme yöpyä täällä!",
          author: "Andreas, Airbnb",
        },
        {
          text: "Anna on erittäin ihana, mukava, avulias ja ystävällinen. Huoneet ovat todella siistit ja mukavat. Erittäin suositeltava!",
          author: "Rosa, Airbnb",
        },
        {
          text: "Luultavasti ystävällisin majatalon omistaja jonka tapasimme koko matkamme aikana. Sai meidät tuntemaan itsemme täysin kotoisaksi.",
          author: "Michael, TripAdvisor",
        },
        {
          text: "Siistit huoneet, ystävällinen henkilökunta, täydellinen sijainti. Tunnet itsesi todella osaksi perhettä täällä!",
          author: "Emma, Airbnb",
        },
      ],
      // CTA buttons
      readAirbnbButton: "Airbnb arvostelut",
      readTripadvisorButton: "TripAdvisor arvostelut",
    },
    // Rooms
    rooms: {
      title: "Majatalomme",
      subtitle:
        "Mukava, puhdas ja varustettu kaikella mitä tarvitset",
      roomTypes: [
        {
          name: "Kahden hengen huone yksityisellä parvekkeella",
          description:
            "Viihtyisä, mukava huone kaikella mitä tarvitset rentouttavaan yöpymiseen",
          features: [
            "King-sänky",
            "Oma Suihkuhuone (Lämmin Vesi)",
            "Ilmastointi",
            "Jääkaappi",
            "Ilmainen WiFi",
            "Vedenkeitin",
            "Yksityinen Parveke",
            "Tallelokero",
          ],
        },
        {
          name: "Pohjakerroksen Asunto",
          description:
            "Tarjoten lisäasumistilaa, tässä asunnossa on sohva ja keittiö. Majoitustilaa 3 vieraalle sisäpihan ja hiljaisen kadun näköalalla.",
          features: [
            "1 Makuuhuone, erillinen olohuone keittiöllä",
            "Tilava oma suihkuhuone (lämmin vesi)",
            "Täysi keittiö liedellä ja jääkaapilla",
            "Ilmainen WiFi",
            "Ilmastointi",
            "Sisäpihan Näkymä",
            "Hiljaisen Kadun Näkymä",
            "Yksityinen Sisäänkäynti",
            "Vuodesohva",
            "Ruokailualue",
            "Tallelokero",
            "Tasokuva-TV satelliitti- ja kaapelikanaville",
          ],
        },
        {
          name: "Kahden Makuuhuoneen Talo",
          description:
            "Tilava 65 neliömetrin talo kahdella makuuhuoneella, keittiöllä ja yksityisellä sisäänkäynnillä. Täydellinen perheille tai ryhmille sisäpihan ja hiljaisen kadun näköalalla.",
          features: [
            "2 Makuuhuonetta",
            "1 Kylpyhuone kylpyammeella ja suihkulla",
            "Täysi keittiö ruokailualueella",
            "Ilmainen WiFi",
            "Ilmastointi",
            "Tasokuva-TV",
            "Sisäpihan Näkymä",
            "Hiljaisen Kadun Näkymä",
            "Yksityinen Sisäänkäynti",
            "Oleskelualue Sohvalla",
            "Ulkokalusteet",
            "Vaatekaappi",
          ],
        },
      ],
      roomsLabel: "Huoneet",
      floorsLabel: "Kerrokset",
      establishedLabel: "Perustettu",
      voltageLabel: "Jännite",
      // More space section
      needMoreSpace: "Tarvitsetko Enemmän Tilaa?",
      moreSpaceDesc:
        "Etsitkö sviittiä tai asuntoa? Voimme järjestää muita majoitusvaihtoehtoja tarpeisiisi. Lähetä meille vain sähköpostia suoraan, niin autamme löytämään täydellisen tilan oleskeluusi!",
      // CTA button
      viewAvailability: "Näytä Saatavuus Airbnb:ssä",
    },
    // Amenities
    amenities: {
      title: "Kaikki Mitä Tarvitset",
      subtitle:
        "Olemme ajatelleet kaikki yksityiskohdat tehdäksemme yöpymisestäsi mukavan ja huolettoman. Lisäksi Anna ja Josh auttavat mielellään taksivarausten, saariretkien, ravintolasuositusten ja muiden järjestämisessä!",
      items: [
        {
          title: "Ilmastointi",
          description: "Pysy viileänä trooppisessa säässä",
        },
        {
          title: "Ilmainen WiFi",
          description: "Nopea internetyhteys",
        },
        {
          title: "Jääkaappi",
          description: "Pidä juomat ja välipalat kylminä",
        },
        {
          title: "Ulkoruokailu & Grilli",
          description:
            "Nauti aterioista trooppisessa ympäristössä",
        },
        {
          title: "Laadukas Vuodevaatteet",
          description: "Lisätyynyjä, peittoja ja lakanoita",
        },
        {
          title: "Silitysrauta Saatavilla",
          description: "Pidä vaatteesi raikkaana",
        },
        {
          title: "Pesuaineet Tarjolla",
          description:
            "Shampoo, saippua, pyyhkeet ja välttämättömyydet",
        },
        {
          title: "Skootterivuokraus",
          description:
            "Kätevä moottoripyörävuokraus saatavilla",
        },
        {
          title: "Matkatavarasäilytys",
          description:
            "Aikainen saapuminen tai myöhäinen lähtö",
        },
        {
          title: "Pitkäaikaiset Yöpymiset Tervetulleita",
          description: "28+ päivää saatavilla",
        },
        {
          title: "Henkilökohtainen Isännän Tervehdys",
          description:
            "Anna toivottaa jokaisen vieraan tervetulleeksi",
        },
        {
          title: "Turvallisuus",
          description: "Sammutin ja ensiapupakkaus",
        },
      ],
      beachAlt:
        "Kata Beach - vain muutaman askeleen päässä Wareen Majatalosta",
    },
    // Photo Gallery
    gallery: {
      title: "Elämä Wareella",
      subtitle:
        "Tapaa isäntäsi, tutustu Kata Beachiin ja löydä aito Phuket-kokemus, joka odottaa sinua",
      familyMatters: "Perhe on Tärkeä :)",
      familyMattersDesc:
        "Mam, Anna ja Waree - Perheesi poissa kotoa",
      meetHosts: "Tapaa Isäntäsi",
      meetHostsDesc:
        "Anna, Josh ja Fin - Perheesi poissa kotoa vuodesta 2000",
      paradiseFound: "Paratiisi Löydetty",
      paradiseFoundDesc:
        "Upeat näkymät, kristallinkirkas vesi ja rauhallinen saarielämä",
      explore: "Tutustu Saareen",
      exploreDesc:
        "Löydä henkeäsalpaavia näköalapaikkoja ja piilotettuja helmiä ympäri Phuketa",
      familyFun: "Perhehauskuus",
      familyFunDesc:
        "Vesipuistoja, nähtävyyksiä ja aktiviteettejä kaikenikäisille lähellä",
      yourHome: "Kotisi Katassa",
      yourHomeDesc:
        "Sijaitsee Kata Beachin sydämessä upeine vuoristomaisemineen",
      welcome: "Tervetuloa Wareelle",
      welcomeDesc:
        "Etsi ikoninen lintu-ja-avain-logomme - kotisi poissa kotoa",
      courtyard: "Majatalon Sisäpiha",
      courtyardDesc:
        "Rauhallinen ja kutsuva tila rentoutumiseen ja nautiskeluun",
      entrance: "Majatalon Sisäänkäynti",
      entranceDesc:
        "Vieraanvarainen ja viehättävä sisäänkäynti uuteen kotiisi poissa kotoa",
      ctaTitle: "Valmis luomaan omia muistoja?",
      ctaDesc:
        "Liity Waree-perheeseen ja koe aito thaimaalainen vieraanvaraisuus yhdessä Phuketin kauneimmista paikoista",
      ctaButton: "Varaa Oleskelusi",
    },
    // Things to Do
    thingsToDo: {
      title: "Tekemistä ja Lähellä",
      subtitle:
        "Kaikki mitä tarvitset on vain minuuttien päässä - rannat, nähtävyydet, kaupat ja paikalliset mukavuudet",
      attractionsTitle: "Rannat ja Nähtävyydet",
      kataBeach: "Kata Beach",
      kataBeachDesc: "Kaunis valkoinen hiekkaranta",
      kataBeachDist: "10 min kävelymatka",
      karonBeach: "Karon Beach",
      karonBeachDesc: "Pitkä koskemattoman hiekan pätkä",
      karonBeachDist: "15 min kävelymatka",
      viewpoint: "Karonin Näköalapaikka",
      viewpointDesc: "Henkeäsalpaavat rannikkonäkymät",
      viewpointDist: "Lyhyt ajomatka",
      bigBuddha: "Iso Buddha",
      bigBuddhaDesc: "Ikoninen Phuketin maamerkki",
      bigBuddhaDist: "20 min ajomatka",
      watChalong: "Wat Chalong Temppeli",
      watChalongDesc: "Kaunis buddhalainen temppeli",
      watChalongDist: "25 min ajomatka",
      nightMarket: "Katan Yötori",
      nightMarketDesc: "Paikallista ruokaa ja shoppailu a",
      nightMarketDist: "Takanamme! 🎵",
      oldTown: "Phuketin Vanha Kaupunki",
      oldTownDesc:
        "Historiallista kiinalais-portugalilaista arkkitehtuuria",
      oldTownDist: "30 min ajomatka",
      getDirections: "Hae reittiohjeet",
      conveniencesTitle: "Lähellä Olevat Mukavuudet",
      atm: "Pankkiautomaatti",
      atmDesc: "Käteisennosto",
      atmDist: "5 min kävelymatka",
      pharmacy: "Patak Apteekki",
      pharmacyDesc: "Terveydenhuolto ja lääkkeet",
      pharmacyDist: "5 min kävelymatka",
      sevenEleven: "7-Eleven",
      sevenElevenDesc: "24/7 lähikauppa",
      sevenElevenDist: "5 min kävelymatka",
      macro: "Macro Market",
      macroDesc: "Ruokatarvikkeet ja tarvikkeet",
      macroDist: "5 min kävelymatka",
      clinic: "Klinikka ja Sairaala",
      clinicDesc: "Lääketieteelliset palvelut lähellä",
      clinicDist: "Lyhyt ajomatka",
      jungceylon: "Jungceylon",
      jungceylonDesc: "Suuri ostoskeskus",
      jungceylonDist: "7,3 km • Patong",
      restaurants: "Paikalliset Ravintolat",
      restaurantsDesc: "Thaimaalaista ja kansainvälistä ruokaa",
      restaurantsDist: "2 min kävelymatka",
      localTip:
        "<strong>💡 Paikallinen Vinkki:</strong> Autamme mielellämme järjestämään kuljetuksen, suosittelemaan ravintoloita, varaamaan retkiä ja jakamaan suosikkipaikallispaikkaame. Kysy vain—rakastamme auttaa vieraitamme löytämään todellisen Phuketin!",
    },
    // 2-Hour Adventures
    adventures: {
      title: "2 Tunnin Seikkailuideat",
      subtitle: "Hauskoja mini-retkiä täydellisiä aamuksi tai iltapäiväksi",
      duration: "~2 tuntia",
      trips: [
        { name: "Sunset & Street Food Tour", description: "Auringonlasku ja Phuketin paras katukatu", purpose: "Valokuvaus ja paikalliset maut", stops: [{ name: "Karon Viewpoint", time: "30 min", activity: "Panoraamanäkymä kolmeen lahtteen", tip: "Saavu 30 min ennen auringonlaskua" }, { name: "Rawai Seafood Market", time: "45 min", activity: "Valitse tuoreet merenelävät ja anna valmistaa paikan päällä", tip: "Maista grillattuja katkarapuja" }, { name: "Nai Harn Beach Sunset", time: "30 min", activity: "Katso auringonlaskua jalat hiekassa", tip: "Nappaa kookospähkinä myyjiltä" }, { name: "Chalong Night Market", time: "15 min", activity: "Jälkiruokapysähdys - maista mango sticky rice", tip: "Hyvä myös viime hetken matkamuistoille" }]},
        { name: "Temple & Culture Trail", description: "Tutki Phuketin henkistä puolta", purpose: "Valokuvaus, kulttuuri ja rauhallisia hetkiä", stops: [{ name: "Wat Chalong Temple", time: "40 min", activity: "Phuketin tärkein buddhalainen temppeli", tip: "Pukeudu vaatimattomasti - peitä hartiat ja polvet" }, { name: "Big Buddha", time: "40 min", activity: "45 metrin korkuinen marmoripatsas", tip: "360° näkymä saaresta ylhäältä" }, { name: "Local Coffee Shop", time: "20 min", activity: "Thai-jääkahvitauko", tip: "Maista perinteinen kopi - vahva ja makea" }, { name: "Karon Temple (Quick Stop)", time: "20 min", activity: "Pieni paikallinen temppeli", tip: "Yleensä hiljainen - täydellinen pohdintaan" }]},
        { name: "Hidden Beaches Hopper", description: "Löydä salaiset paikat kaukana väkijoukosta", purpose: "Rantavalokuvaus, uinti ja paikallinen ruoka", stops: [{ name: "Ya Nui Beach", time: "40 min", activity: "Pieni piilotettu lahti - täydellinen snorklailuun", tip: "Ota snorklausvarusteet mukaan" }, { name: "Ao Sane Beach", time: "30 min", activity: "Kiviranta kirkkaalla vedellä", tip: "Parempi valokuvaukseen kuin uintiin" }, { name: "Nui Beach Restaurant", time: "30 min", activity: "Thai-lounas rannalla tuoreilla merenelvillä", tip: "Tilaa ananaspaistettua riisiä ananaksessa!" }, { name: "Windmill Viewpoint", time: "20 min", activity: "Panoraamavalokuva eteläisestä Phuketista", tip: "Vähemmän ruuhkaa kuin Promthep Cape" }]},
        { name: "Old Town Food Walk", description: "Historialliset kadut kohtaavat aidot Phuket-maut", purpose: "Katumatua, arkkitehtuurivalokuvaus, paikallinen kulttuuri", stops: [{ name: "Thalang Road", time: "30 min", activity: "Värikkäät kiinalais-portugalilaiset rakennukset", tip: "Etsi katuteidemuuraalia" }, { name: "Kopitiam by Wilai", time: "25 min", activity: "Perinteinen Phuket-aamiainen - dim sum & kahvi", tip: "Maista hokkien-nuudeleita - paikallinen erikoisuus" }, { name: "Local Markets", time: "35 min", activity: "Maista rotia, satayta ja tuoreita hedelmiä", tip: "Tinkaa lempeästi ja hymyile" }, { name: "Dessert at Torry's Ice Cream", time: "20 min", activity: "Ainutlaatuiset thai-inspiroitut jäätelömaut", tip: "Kookostuhka tai thai-tee on pakko maistaa" }, { name: "Sunday Walking Street (Weekend Only)", time: "10 min", activity: "Selaa käsitöitä ja katuesiintymiä sunnuntaisin", tip: "Alkaa noin klo 16 vain sunnuntaisin" }]}
      ]
    },
    // Location
    location: {
      title: "Kuinka Pääset Perille",
      subtitle:
        "Sijaitsee Kata Beachin sydämessä, meihin on helppo päästä mistä tahansa Phuketista",
      ourAddress: "Osoitteemme",
      address:
        "44/5 Kata Road\nKata Beach, Karon\nPhuket 83100\nThaimaa",
      directions: "Hae Reittiohjeet",
      fromAirport: "Lentokentältä",
      distance: "Etäisyys:",
      distanceValue: "Noin 45 km (28 mailia)",
      travelTime: "Matka-aika:",
      travelTimeValue: "45-60 minuuttia autolla",
      recommendedTitle: "Suositeltu Ensikertalaisille",
      recommendedSubtitle:
        "Ota taksi Phuketin kansainväliseltä lentokentältä",
      airportTaxiTitle: "🚖 Lentokenttätaksi",
      airportTaxiDesc:
        "Helpoin ja mukavin vaihtoehto Phuketin ensikertalaisille. Viralliset lentokenttätaksit ovat turvallisia, luotettavia ja tarjoavat suoran palvelun ovellemme.",
      taxiCost: "Hinta:",
      taxiCostValue: "Noin 800-1 000 THB (kiinteä hinta)",
      taxiWhere: "Mistä löytää:",
      taxiWhereValue: "Virallinen taksitiski saapumishallissa",
      taxiDuration: "Kesto:",
      taxiDurationValue:
        "45-60 minuuttia suoraan Kata Beachille",
      taxiTip: "Vinkki:",
      taxiTipValue:
        "Pidä varausvahvistuksesi käsillä näyttääksesi sen kuljettajalle",
      airportBusTitle: "🚌 Lentokenttäbussi",
      airportBusDesc:
        "Budjettitietoinen vaihtoehto säännöllisellä palvelulla Kata Beach -alueelle.",
      busCost: "~150-200 THB",
      busDuration: "90-120 minuuttia",
      privateTransferTitle: "🚗 Yksityinen Kuljetus",
      privateTransferDesc:
        "Ennakkoon varattu kuljetus tapaamis- ja tervehdyspalvelulla saatavilla.",
      privateCost: "~1 200-1 500 THB",
      privateDuration: "45-60 minuuttia",
      localTransportTitle: "🛵 Paikallisliikenne",
      localTransportDesc:
        "Tuk-tukit ja moottoripyörätaksit saatavilla lyhyille matkoille Kata Beachin ympäristössä.",
      localCost: "Vaihtelee etäisyyden mukaan",
      localTip: "Sovi aina hinnasta etukäteen",
      helpTitle:
        "Tarvitsetko apua kuljetuksen järjestämisessä?",
      helpDesc:
        "Anna ja Josh auttavat mielellään taksin järjestämisessä tai reittiohjeiden antamisessa. Lähetä meille vain viesti varauksen jälkeen!",
      whatsappButton: "WhatsApp Meille",
      callButton: "Soita +66 76 331 016",
    },
    // Social Feed
    social: {
      title: "Pysy Yhteydessä",
      subtitle:
        "Seuraa meitä Facebookissa päivittäisten päivitysten, vieraiden kuvien, paikallisten vinkkien ja erikoistarjousten saamiseksi! Katso, mitä Waree'sissa tapahtuu ja inspiroidu Kata Beachin seikkailuusi.",
      communityTitle: "Yhteisö",
      communityDesc:
        "Liity kasvavaan matkailijaperheeseen ympäri maailmaa",
      storiesTitle: "Vieraiden Tarinoita",
      storiesDesc:
        "Katso kuvia ja tarinoita vieraista, jotka ovat tulleet ystäviksi",
      eventsTitle: "Tapahtumat & Päivitykset",
      eventsDesc:
        "Paikalliset tapahtumat, rantauutiset ja majatalon kuulumiset",
      latestTitle: "Uusimmat Facebookista",
      latestDesc:
        "Katso uusimmat julkaisumme, kuvamme ja päivityksemme Annalta, Joshilta ja Mamilta!",
      ctaText:
        "Klikkaa alla vieraillaksesi Facebook-sivullamme ja nähdäksesi, mitä uutta Waree's Guesthousella on!",
      ctaButton: "Käy Facebook-sivullamme",
      feature1: "Päivitykset",
      feature2: "Vieraiden kuvia",
      feature3: "Paikalliset suositukset",
      feature4: "Suoraviestit",
      quickTitle: "Nopea Kysymys?",
      quickDesc:
        "Lähetä meille viesti Facebookissa, tekstiviesti, sähköposti tai soita meille nopeinta vastausta varten!",
      facebookBtn: "Facebook",
      whatsappBtn: "WhatsApp",
      lineBtn: "LINE",
      phoneBtn: "+66 76 331 016",
      emailBtn: "Sähköposti",
    },
    // Common UI
    common: {
      showDetails: "Näytä tiedot",
      hideDetails: "Piilota tiedot",
    },
    // Footer
    footer: {
      description:
        "Kotisi poissa kotoa kauniilla Kata Beachillä, Phuketissa. Koe paikallinen lämpö ja aito vieraanvaraisuus.",
      contactTitle: "Ota Yhteyttä",
      connectTitle: "Yhdistä Kanssamme",
      facebook: "Seuraa meitä Facebookissa",
      whatsapp: "WhatsApp Meille",
      line: "Line Meille",
      messagePrompt:
        "Lähetä meille viesti suosikkialustallasi—olemme täällä auttamassa!",
      bookTitle: "Varaa Majoitus",
      bookDescription:
        "Valmis kokemaan Kata Beachin kuten paikallinen? Varaa nyt parhaat hinnat ja välitön vahvistus.",
      tripadvisor: "TripAdvisor",
      copyright:
        "© 2026 Wareen Majatalo, Kata Beach, Phuket. Kaikki oikeudet pidätetään.",
      tagline:
        "Luomme muistoja, yksi vieras kerrallaan vuodesta 2000 💛",
      quickLinks: "Pikalinkit",
      contact: "Yhteystiedot",
      phone: "Puhelin",
      email: "Sähköposti",
      social: "Seuraa Meitä",
      about: "Tietoa Meistä",
      rooms: "Huoneet",
      amenities: "Mukavuudet",
      reviews: "Arvostelut",
      location: "Sijainti",
    },
  },
} as const;