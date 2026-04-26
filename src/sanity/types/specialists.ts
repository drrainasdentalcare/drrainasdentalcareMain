export type SanitySpecialistItem = {
  name?: string;
  role?: string;
  image?: {
    asset?: {
      url?: string;
    };
    alt?: string;
  };
};

export type SanitySpecialistsSection = {
  label?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  doctors?: SanitySpecialistItem[];
};
