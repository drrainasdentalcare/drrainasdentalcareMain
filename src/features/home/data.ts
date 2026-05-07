import type { HomePageContent } from "@/features/home/types";

export const homePageContent: HomePageContent = {
  clinicName: "Dr. Raina Dental Care & Implants",
  tagline: "30 Years of Trusted Dental Care in New Delhi",
  description:
    "Trusted since 1996 for world-class dental care. From everyday checkups to advanced implants and specialist treatments, every smile gets the same skill, warmth, and attention.",
  ctaPrimary: "Book Consultation",
  ctaSecondary: "Book an Appointment",
  navItems: [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about-us",
      children: [
        { label: "Our Specialists", href: "/#our-specialists" },
        { label: "Photo Gallery", href: "/#photo-gallery" },
      ],
    },
    { label: "Know Your Doctor", href: "/know-your-doctor" },
    { label: "Online Consultation", href: "/online-consultation" },
    { label: "Services", href: "/#services" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  highlights: [
    { label: "Hours", value: "Mon - Sat, 9:00 AM - 1:00 PM, 5:00 PM - 8:00 PM" },
    { label: "Sunday", value: "Off" },
    { label: "Consultation", value: "By appointments only" },
  ],
  addressLines: ["91-A, MIG Flats,", "Rajouri Garden,", "New Delhi-110027"],
  phoneNumbers: ["011 - 41017000", "011 - 35708139", "+91 8595389394", "+91 9810167454"],
  socialLinks: [
    { label: "Mail", href: "mailto:drrainasdentalcareandimplants@gmail.com" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/p/Dr-Rainas-Dental-Care-Implants-100054578223815/",
    },
  ],
  services: [
    {
      title: "Routine Exams",
      description: "Comprehensive dental checkups for early detection and long-term oral health.",
    },
    {
      title: "Hygiene & Whitening",
      description: "Professional cleaning and whitening to keep your smile bright and healthy.",
    },
    {
      title: "Fillings",
      description: "Durable, natural-looking fillings to restore function and protect teeth.",
    },
    {
      title: "Crowns & Dentures",
      description: "Custom restorations designed for comfort, fit, and confident daily use.",
    },
    {
      title: "Implants",
      description: "Advanced implant solutions with precision planning for stable, lasting results.",
    },
    {
      title: "Orthodontics",
      description: "Modern alignment treatments for improved bite, function, and smile aesthetics.",
    },
  ],
};
