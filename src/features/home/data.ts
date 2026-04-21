import type { HomePageContent } from "@/features/home/types";

export const homePageContent: HomePageContent = {
  clinicName: "Dr. Raina Dental Care & Implant",
  tagline: "Our website is getting refurbished",
  description:
    "Thank you for your patience. We are currently refreshing our website. For appointments and queries, please contact the clinic directly.",
  ctaPrimary: "Call Now",
  ctaSecondary: "Consultation by Appointment",
  navItems: [],
  highlights: [
    { label: "Hours", value: "Mon - Sat, 9:00 AM - 1:00 PM, 5:00 PM - 8:00 PM" },
    { label: "Sunday", value: "Off" },
    { label: "Consultation", value: "By appointments only" },
  ],
  addressLines: ["91-A, MIG Flats,", "Rajouri Garden,", "New Delhi-110027"],
  phoneNumbers: ["011 - 41017000", "011 - 35708139", "+91 8595389394", "+91 9810167454"],
  services: [
    {
      title: "Website Update",
      description: "Our full digital experience is currently under refurbishment.",
    },
    {
      title: "Consultation",
      description: "Consultation by appointments only. Please call before visiting.",
    },
    {
      title: "Clinic Hours",
      description: "Mon - Sat, 9:00 AM - 1:00 PM and 5:00 PM - 8:00 PM. Sunday off.",
    },
  ],
};
