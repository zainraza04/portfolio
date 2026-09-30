export interface Testimonial {
  name: string;
  role: string;
  company: string;
  relationship: string;
  quote: string;
  avatar?: string;
}

// Add verified recommendations here when they are available.
export const testimonials: Testimonial[] = [];
