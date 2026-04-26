export type SanityServiceItem = {
  title?: string;
  description?: string;
  image?: {
    asset?: {
      url?: string;
    };
    alt?: string;
  };
};

export type SanityServicesSection = {
  label?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  items?: SanityServiceItem[];
};
