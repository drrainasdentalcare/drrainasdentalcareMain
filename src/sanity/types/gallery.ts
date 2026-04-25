export type SanityGalleryImageItem = {
  _type?: string;
  asset?: {
    url?: string;
  };
  image?: {
    asset?: {
      url?: string;
    };
  };
  alt?: string;
  description?: string;
};

export type SanityGallerySection = {
  label?: string;
  title?: string;
  subtitle?: string;
  clinicTabLabel?: string;
  eventTabLabel?: string;
  clinicImages?: SanityGalleryImageItem[];
  eventImages?: SanityGalleryImageItem[];
};
