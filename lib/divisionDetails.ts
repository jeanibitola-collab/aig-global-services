export type Highlight = { value: string; label: string };
export type GalleryItem = { image: string; caption: string };
export type VideoItem = { src: string; poster: string; caption: string };
export type Listing = {
  title: string;
  price?: string;
  details: string[];
  image: string;
  status?: "Available" | "Reserved" | "Sold";
};
export type Faq = { q: string; a: string };

export type DivisionDetails = {
  highlights?: Highlight[];
  listingsTitle?: string;
  listings?: Listing[];
  galleryTitle?: string;
  galleryAspect?: "portrait" | "landscape";
  gallery?: GalleryItem[];
  videosTitle?: string;
  videos?: VideoItem[];
  faqs?: Faq[];
};

/*
  HOW TO ADD CONTENT (only use real information from the client)

  highlights: [{ value: "500+", label: "Solar systems installed" }]
  listings:   [{ title: "2021 Toyota Highlander XLE", price: "₦38,500,000",
                 details: ["Foreign used", "45,000 km", "Automatic"],
                 image: "/images/autos/highlander.jpg", status: "Available" }]
  gallery:    [{ image: "/images/solar/project-1.jpg", caption: "10kVA system, Gwarinpa" }]
*/

export const divisionDetails: Record<string, DivisionDetails> = {
  gadgets: {
    listingsTitle: "Available now",
    listings: [],
    galleryTitle: "From our store shelves",
    gallery: [
      {
        image: "/images/gadgets/gadgets-iphone-pro-2.jpg",
        caption: "The latest iPhones",
      },
      {
        image: "/images/gadgets/gadgets-iphone-fold.jpg",
        caption: "Foldable iPhones",
      },
      {
        image: "/images/gadgets/gadgets-ipad-11.jpg",
        caption: "iPad 11, 128GB Wi-Fi",
      },
      {
        image: "/images/gadgets/gadgets-dji-neo-2.jpg",
        caption: "DJI Neo 2 Fly More Combo drones",
      },
      {
        image: "/images/gadgets/gadgets-dji-osmo-mobile-8p.jpg",
        caption: "DJI Osmo Mobile 8P gimbals",
      },
      {
        image: "/images/gadgets/gadgets-iphone-pro-1.jpg",
        caption: "iPhone Pro models",
      },
      {
        image: "/images/gadgets/gadgets-tp-link-extenders.jpg",
        caption: "TP-Link AC750 Mesh Wi-Fi Extenders",
      },
      {
        image: "/images/gadgets/gadgets-nokia-105.jpg",
        caption: "Nokia 105 phones",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "How do I check if a device is in stock?",
        a: "Send us a WhatsApp message with the model you want. We'll confirm availability and the price, and share photos or videos of the actual item.",
      },
      {
        q: "Can you repair my phone, laptop or console?",
        a: "Yes. Message us with your device model and the problem, and we'll explain what's involved and the cost before any work starts.",
      },
      {
        q: "Can I swap my old device for a new one?",
        a: "Yes, through our swap deals. Send us details and photos of your current device and we'll give you a trade-in estimate.",
      },
    ],
  },

  homes: {
    listingsTitle: "Properties available",
    listings: [],
    galleryTitle: "Properties we've handled",
    gallery: [],
    highlights: [],
    faqs: [
      {
        q: "Do you handle both sales and rentals?",
        a: "Yes. Whether you want to buy, rent, sell or let out a property, tell us what you need and we'll guide you through the process.",
      },
      {
        q: "Can you help me find a property within my budget?",
        a: "Yes. Share your preferred location, the type of property and your budget, and we'll recommend suitable options.",
      },
      {
        q: "Can you manage a property I already own?",
        a: "Yes. Our property management service takes care of the day-to-day running of your property. Contact us to discuss what you need.",
      },
    ],
  },

  autos: {
    listingsTitle: "Vehicles available now",
    listings: [],
    galleryTitle: "Vehicles we can source for you",
    galleryAspect: "landscape",
    gallery: [
      {
        image: "/images/autos/autos-howo-box-truck-1.jpg",
        caption: "HOWO light-duty box truck",
      },
      {
        image: "/images/autos/autos-faw-jk6-1.jpg",
        caption: "FAW JK6 truck chassis",
      },

      {
        image: "/images/autos/autos-faw-box-truck.jpg",
        caption: "FAW box truck",
      },

      {
        image: "/images/autos/autos-faw-jk6-front.jpg",
        caption: "FAW JK6, front view",
      },

      {
        image: "/images/autos/autos-changan-uni-v-1.jpg",
        caption: "Changan UNI-V sedan",
      },

      {
        image: "/images/autos/autos-changan-uni-v-front.jpg",
        caption: "Changan UNI-V, front view",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "Do you sell both new and foreign used cars?",
        a: "Yes. Tell us the make, model and budget you have in mind, and we'll show you what's available.",
      },
      {
        q: "Can you source a specific car for me?",
        a: "Yes. If the vehicle you want isn't in stock, our procurement service can help you source it.",
      },
      {
        q: "Do you accept trade-ins?",
        a: "Yes. Send us the details and photos of your current vehicle and we'll discuss trade-in and upgrade options with you.",
      },
    ],
  },

  xchange: {
    highlights: [],
    faqs: [
      {
        q: "How do I start an exchange?",
        a: "Send us a WhatsApp message with what you'd like to exchange and the amount. We'll confirm the rate and the process with you before anything is agreed.",
      },
      {
        q: "Why don't you show exchange rates on the website?",
        a: "Rates change frequently throughout the day, so we confirm the current rate directly with you at the time of your transaction.",
      },
      {
        q: "Will I need to verify my identity?",
        a: "For some transactions, yes. Identity verification helps keep transactions secure and is required by law in many cases.",
      },
    ],
  },

  solar: {
    listingsTitle: "Equipment we install",
    listings: [
      {
        title: "Felicity Solar panels",
        details: ["Monocrystalline solar panels for homes and businesses"],
        image: "/images/solar/solar-felicity-panels.jpg",
      },
      {
        title: "Felicity Solar battery",
        details: ["Energy storage to keep your power running day and night"],
        image: "/images/solar/solar-felicity-battery.jpg",
      },
    ],
    galleryTitle: "Our past projects",
    galleryAspect: "landscape",
    gallery: [
      {
        image: "/images/solar/solar-rooftop-array.jpg",
        caption: "Rooftop solar installation",
      },
      {
        image: "/images/solar/solar-technician-mounting.jpg",
        caption: "Mounting panels on a residential roof",
      },
      {
        image: "/images/solar/solar-rooftop-tiled-roof.jpg",
        caption: "Solar installation on a tiled roof",
      },
      {
        image: "/images/solar/solar-street-light.jpg",
        caption: "Solar street lighting for a residential compound",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "How do I know what size of solar system I need?",
        a: "We start with an energy consultation. We look at the appliances you want to power and for how long, then recommend a system that fits your needs and budget.",
      },
      {
        q: "Do you install for both homes and businesses?",
        a: "Yes. We design and install solar systems for homes, offices and commercial properties.",
      },
      {
        q: "Do you offer maintenance after installation?",
        a: "Yes. We provide maintenance and support to keep your system running efficiently.",
      },
    ],
  },

  "industrial-machines": {
    videosTitle: "See our equipment in action",
    videos: [
      {
        src: "/videos/industrial/industrial-embroidery-4-head-demo.mp4",
        poster:
          "/images/industrial/industrial-embroidery-4-head-demo-poster.jpg",
        caption: "Computerised four-head embroidery machine",
      },
      {
        src: "/videos/industrial/industrial-embroidery-4-head-factory.mp4",
        poster:
          "/images/industrial/industrial-embroidery-4-head-factory-poster.jpg",
        caption: "Four-head embroidery machines",
      },
      {
        src: "/videos/industrial/industrial-embroidery-2-head.mp4",
        poster: "/images/industrial/industrial-embroidery-2-head-poster.jpg",
        caption: "Two-head commercial embroidery machine",
      },
      {
        src: "/videos/industrial/industrial-production-line.mp4",
        poster: "/images/industrial/industrial-production-line-poster.jpg",
        caption: "Automated production line",
      },
      {
        src: "/videos/industrial/industrial-processing-machinery.mp4",
        poster: "/images/industrial/industrial-processing-machinery-poster.jpg",
        caption: "Processing machinery",
      },
      {
        src: "/videos/industrial/industrial-large-format-printer.mp4",
        poster: "/images/industrial/industrial-large-format-printer-poster.jpg",
        caption: "Large-format printer",
      },
    ],
    galleryTitle: "Equipment we can supply",
    galleryAspect: "landscape",
    gallery: [
      {
        image: "/images/industrial/industrial-embroidery-4-head.jpg",
        caption: "FUJA four-head embroidery machine",
      },
    ],
    highlights: [],
    faqs: [
      {
        q: "How do I find the right equipment for my operation?",
        a: "Tell us about your operation and what you need the equipment to do, and our team will recommend suitable options.",
      },
      {
        q: "Do you install the machines you supply?",
        a: "Yes. We provide installation and support to get your equipment running properly.",
      },
      {
        q: "Can you supply spare parts?",
        a: "Yes. We supply genuine parts and spares, and offer maintenance services to reduce downtime.",
      },
    ],
  },
};
