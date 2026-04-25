export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type ContactHighlight = {
  label: string;
  value: string;
};

export type ServiceCard = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HomePageContent = {
  clinicName: string;
  tagline: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  navItems: NavItem[];
  highlights: ContactHighlight[];
  addressLines: string[];
  phoneNumbers: string[];
  socialLinks: SocialLink[];
  services: ServiceCard[];
};
