export type SanityTestimonialItem = {
  name?: string;
  review?: string;
  treatment?: string;
  rating?: number;
};

export type SanityTestimonialsSection = {
  label?: string;
  title?: string;
  subtitle?: string;
  googleReviewsUrl?: string;
  items?: SanityTestimonialItem[];
};
