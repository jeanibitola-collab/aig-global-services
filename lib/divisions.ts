export type Division = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  services: string[];
  image: string;
  whatsappMessage: string;
  website?: string;
};

export const PHONE = "2347068057446";
export const PHONE_DISPLAY = "0706 805 7446";
export const EMAIL = "info@aigglobalservices.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const divisions: Division[] = [
  {
    slug: "gadgets",
    name: "AIG Gadgets",
    tagline: "Your one-stop shop for premium gadgets and repairs.",
    description:
      "Original phones, laptops, smartwatches and accessories, plus fast repairs and reliable internet installation, all in one place.",
    services: [
      "Smartphones & Accessories",
      "Laptops & Tablets",
      "Smartwatches & Audio",
      "Phone, Laptop & Console Repairs",
      "Internet Installation",
      "Swap Deals & Upgrades",
    ],
    image: "/images/gadgets.jpg",
    whatsappMessage: "Hi AIG Gadgets, I'm interested in a gadget.",
    website: "https://aiggadgets.com",
  },
  {
    slug: "homes",
    name: "AIG Homes",
    tagline: "Helping you find, own, and enjoy the perfect spaces.",
    description:
      "From buying and renting to managing your property, we make real estate simple, safe and stress-free.",
    services: [
      "Property Sales & Rentals",
      "Real Estate Advisory",
      "Property Management",
      "Smart & Secure Living",
    ],
    image: "/images/homes.jpg",
    whatsappMessage: "Hi AIG Homes, I'm interested in a property.",
  },
  {
    slug: "autos",
    name: "AIG Autos",
    tagline: "Quality vehicles. Trusted deals. Total peace of mind.",
    description:
      "New and foreign-used cars, sourcing, trade-ins and expert advice to help you drive away with confidence.",
    services: [
      "New & Foreign Used Cars",
      "Car Sales & Procurement",
      "Trade-ins & Upgrades",
      "Automobile Advisory",
    ],
    image: "/images/autos.jpg",
    whatsappMessage: "Hi AIG Autos, I'm interested in a car.",
  },
  {
    slug: "xchange",
    name: "AIG Xchange",
    tagline: "Fast, secure, and reliable exchange solutions.",
    description:
      "Currency exchange, digital assets and funds transfer at great rates, handled quickly and securely.",
    services: [
      "Currency Exchange",
      "Crypto & Digital Assets",
      "Funds Transfer",
      "Secure & Best Rates",
    ],
    image: "/images/x.jpg",
    whatsappMessage: "Hi AIG Xchange, I'd like to make an exchange.",
  },
  {
    slug: "solar",
    name: "Solar Installation",
    tagline: "Powering homes and businesses with clean, renewable energy.",
    description:
      "Say goodbye to constant power cuts. We design, install and maintain solar systems built for your needs and budget.",
    services: [
      "Solar System Design",
      "Installation & Maintenance",
      "Energy Consultation",
      "Sustainable & Cost Effective",
    ],
    image: "/images/solar.jpg",
    whatsappMessage: "Hi AIG Global Services, I'm interested in solar installation.",
  },
  {
    slug: "industrial-machines",
    name: "Industrial Machines",
    tagline: "High-performance machines for industrial growth and efficiency.",
    description:
      "Supply, installation and maintenance of industrial equipment, with genuine parts to keep your operations running.",
    services: [
      "Equipment Supply",
      "Installation & Support",
      "Maintenance Services",
      "Genuine Parts & Spares",
    ],
    image: "/images/machines.jpg",
    whatsappMessage: "Hi AIG Global Services, I'm interested in industrial machines.",
  },
];

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}