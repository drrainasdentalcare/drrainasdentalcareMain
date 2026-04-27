import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dentist in Rajouri Garden",
  description:
    "Book an appointment with Dr. Raina Dental Care & Implants in Rajouri Garden, New Delhi. Find phone, email, clinic address, and map location.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
