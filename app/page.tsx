import { dentalThemeVars } from "@/constants/theme";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { AboutPreviewSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero";
import { ConsultationCtaSection } from "@/components/sections/consultation-cta";
import { OurSpecialistsSection } from "@/components/sections/our-specialists";
import { PhotoGallerySection } from "@/components/sections/photo-gallery";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { getAboutSection } from "@/src/sanity/queries/about";
import { getGallerySection } from "@/src/sanity/queries/gallery";
import { getServicesSection } from "@/src/sanity/queries/services";
import { getSpecialistsSection } from "@/src/sanity/queries/specialists";
import { getTestimonialsSection } from "@/src/sanity/queries/testimonials";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drrainadentalcare.com";

export const metadata: Metadata = {
  title: "Best Dental Clinic in India - Rajouri Garden, New Delhi",
  description:
    "Visit Dr. Raina Dental Care & Implants, a trusted dental clinic in India located in Rajouri Garden, New Delhi, for implants, crowns, bridges, and family dental care.",
  keywords: [
    "best dental clinic in India",
    "best dental clinic in New Delhi",
    "best dentist in Rajouri Garden",
    "dental implants clinic Delhi",
    "family dentist New Delhi",
  ],
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const aboutSection = await getAboutSection();
  const gallerySection = await getGallerySection();
  const servicesSection = await getServicesSection();
  const specialistsSection = await getSpecialistsSection();
  const testimonialsSection = await getTestimonialsSection();

  return (
    <>
      <TopBar />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dr. Raina Dental Care & Implants",
            url: siteUrl,
            image: `${siteUrl}/Images/AboutUs/centerfront(landscape).jpg`,
            telephone: ["+91-8595389394", "+91-9810167454", "+91-11-41017000"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "91-A, MIG Flats, Rajouri Garden",
              addressLocality: "New Delhi",
              postalCode: "110027",
              addressCountry: "IN",
            },
            areaServed: ["Rajouri Garden", "West Delhi", "New Delhi"],
            sameAs: ["https://www.google.com/maps/search/?api=1&query=Dr.+Kapil+Raina+Dental+Care+and+Implant%2C+Rajouri+Garden%2C+New+Delhi"],
          }),
        }}
      />
      <main className="flex min-h-full flex-1 flex-col bg-[var(--color-bg)]" style={dentalThemeVars}>
        <HeroSection />
        <AboutPreviewSection cmsData={aboutSection} />
        <ServicesSection cmsData={servicesSection} />
        <WhyChooseUsSection />
        <OurSpecialistsSection cmsData={specialistsSection} />
        <PhotoGallerySection cmsData={gallerySection} />
        <TestimonialsSection cmsData={testimonialsSection} />
        <ConsultationCtaSection />
      </main>
      <Footer />
    </>
  );
}
