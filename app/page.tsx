import { dentalThemeVars } from "@/constants/theme";
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
