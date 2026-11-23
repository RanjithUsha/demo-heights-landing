/**
 * EDIT THIS FILE ONLY for new projects (text + image paths).
 * Put images in the ../img/ folder, then reference them here.
 */
const PROJECT_CONFIG = {
  meta: {
    title: "Demo Heights | 2, 3 & 4 BHK | Whitefield, Bengaluru",
    description:
      "Premium 2, 3 & 4 BHK homes in Whitefield. Starting price on request. RERA registered. Enquire on WhatsApp.",
    themeColor: "#1a3c34",
  },

  brand: {
    projectName: "Demo Heights",
    tagline: "At Whitefield, East Bengaluru",
    developer: "By Demo Developers",
    logo: "img/1.jpeg",
    logoAlt: "Demo Heights logo",
  },

  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneTel: "+919876543210",
    whatsapp: "919876543210",
    whatsappMessage:
      "Hi, I am interested in Demo Heights at Whitefield. Please share price and availability.",
  },

  /**
   * Enquiry popup (like sample construction sites).
   * formspreeUrl: optional — sign up at https://formspree.io and paste form URL to email leads.
   * afterSubmit: "whatsapp" opens WhatsApp with details; "formspree" only emails; "both" does both.
   */
  enquiry: {
    showPopupOnLoad: true,
    popupDelayMs: 2500,
    popupOncePerSession: true,
    title: "Enquire Now",
    subtitle:
      "Get price, floor plans, and availability. Our team will respond on WhatsApp.",
    submitLabel: "Submit & continue on WhatsApp",
    consentLabel:
      "I agree to be contacted by the project team via call, SMS, or WhatsApp.",
    formspreeUrl: "",
    afterSubmit: "whatsapp",
  },

  hero: {
    bannerDesktop: "img/3.jpeg",
    bannerMobile: "img/3.jpeg",
    bhkSummary: "2, 3 & 4 BHK",
    startingPrice: "₹ 1.07 Cr* Onwards",
    bullets: [
      "40+ acre integrated community",
      "RERA-registered project",
      "Metro & ITPL connectivity",
    ],
    stats: [
      { label: "Land parcel", value: "8.3 Acres" },
      { label: "Open space", value: "80%" },
      { label: "Towers", value: "4 Towers" },
    ],
    offers: [
      { icon: "ri-phone-line", text: "Instant call back" },
      { icon: "ri-bus-line", text: "Free site visit" },
      { icon: "ri-price-tag-3-line", text: "Unmatched price" },
    ],
  },

  usp: [
    { icon: "ri-award-line", title: "Trusted developer", text: "Established brand in Bengaluru" },
    { icon: "ri-home-smile-line", title: "Premium homes", text: "Spacious layouts & decks" },
    { icon: "ri-train-line", title: "Metro & IT corridor", text: "Whitefield & ORR access" },
  ],

  overview: {
    title: "About Demo Heights",
    text:
      "Demo Heights is a premium residential development in Whitefield, East Bengaluru. The project offers spacious homes, landscaped open spaces, and lifestyle amenities designed for modern families. Location offers easy access to IT parks, schools, healthcare, and retail.",
    highlightsTitle: "Why choose this project",
    highlights: [
      "Premium residences by an established developer",
      "Strategic location on Whitefield main corridor",
      "Large open spaces and clubhouse amenities",
      "Close to ITPL, metro, and airport road",
      "Possession timeline as per RERA filing",
    ],
  },

  pricing: {
    title: "Area & pricing",
    note: "*Prices are indicative. Final pricing confirmed on WhatsApp.",
    configurations: [
      {
        name: "2 BHK",
        area: "730 Sq.ft (carpet approx.)",
        price: "₹ 1.07 Cr*",
      },
      {
        name: "3 BHK",
        area: "1,540 Sq.ft (carpet approx.)",
        price: "₹ 2.19 Cr*",
      },
      {
        name: "4 BHK",
        area: "2,760 Sq.ft (carpet approx.)",
        price: "₹ 3.99 Cr*",
      },
    ],
    ctaLabel: "Get complete costing on WhatsApp",
  },

  plans: {
    title: "Master plan & floor plans",
    masterPlanImage: "img/4.jpeg",
    masterPlanAlt: "Master plan layout",
    floorPlans: [
      { name: "2 BHK", image: "img/2.jpeg", alt: "2 BHK floor plan" },
      { name: "3 BHK", image: "img/3.jpeg", alt: "3 BHK floor plan" },
      { name: "4 BHK", image: "img/5.jpeg", alt: "4 BHK floor plan" },
    ],
    ctaLabel: "Request floor plan on WhatsApp",
  },

  amenities: {
    title: "Amenities",
    items: [
      { icon: "ri-swimming-line", name: "Swimming Pool" },
      { icon: "ri-building-4-line", name: "Clubhouse" },
      { icon: "ri-run-line", name: "Jogging Track" },
      { icon: "ri-parent-line", name: "Kids Play Area" },
      { icon: "ri-heart-pulse-line", name: "Gym" },
      { icon: "ri-shield-check-line", name: "24×7 Security" },
      { icon: "ri-plant-line", name: "Landscaped Gardens" },
      { icon: "ri-parking-box-line", name: "Visitor Parking" },
    ],
  },

  gallery: {
    title: "Project gallery",
    images: [
      { src: "img/1.jpeg", alt: "Project view 1" },
      { src: "img/2.jpeg", alt: "Project view 2" },
      { src: "img/3.jpeg", alt: "Project view 3" },
      { src: "img/4.jpeg", alt: "Project view 4" },
      { src: "img/5.jpeg", alt: "Project view 5" },
    ],
  },

  location: {
    title: "Location advantage",
    tabs: [
      {
        id: "connectivity",
        label: "Connectivity",
        items: [
          "Hope Farm Metro – 5–8 km",
          "ITPL, Whitefield – 6–10 km",
          "Airport – 35–45 min drive",
        ],
      },
      {
        id: "education",
        label: "Education",
        items: [
          "International schools – 3–8 km",
          "Universities – 10–15 km",
        ],
      },
      {
        id: "healthcare",
        label: "Healthcare",
        items: [
          "Multi-specialty hospitals – 5–12 km",
          "Clinics & pharmacies nearby",
        ],
      },
      {
        id: "retail",
        label: "Malls & retail",
        items: [
          "Shopping malls – 5–10 km",
          "Restaurants & cafes on ORR",
        ],
      },
    ],
    mapEmbedUrl: "",
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What configurations are available?",
        a: "The project offers 2, 3, and 4 BHK homes. Sizes and prices are indicative; confirm the latest on WhatsApp.",
      },
      {
        q: "Is the project RERA registered?",
        a: "Yes. Registration numbers are listed in the footer. Verify on the Karnataka RERA portal before booking.",
      },
      {
        q: "How do I book a site visit?",
        a: "Tap Enquire or WhatsApp and our team will schedule a visit.",
      },
      {
        q: "What is included in the quoted price?",
        a: "Base price, floor rise, parking, and statutory charges may apply. Request a full costing breakdown on WhatsApp.",
      },
    ],
  },

  developer: {
    title: "About the developer",
    text:
      "Demo Developers has delivered residential and commercial projects across Bengaluru with a focus on quality construction, timely delivery, and customer service. Replace this paragraph with your client's official developer bio.",
  },

  legal: {
    rera: [
      "PRM/KA/RERA/1251/446/PR/000000/000000",
    ],
    disclaimer:
      "This website is for marketing and information only. It is not the official website of the developer unless stated by the developer. Prices, images, and specifications are indicative and subject to change. Verify all details with the authorised sales team before payment.",
    privacyPath: "privacy.html",
  },
};