export type Testimonial = {
  quote: string;
  name: string;
  detail: string; // e.g. "Bought a car through AIG Autos"
};

// Only add genuine reviews, with the customer's permission
export const testimonials: Testimonial[] = [];