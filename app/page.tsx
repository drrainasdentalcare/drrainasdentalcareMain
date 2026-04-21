import { dentalThemeVars } from "@/constants/theme";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutPreviewSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="flex min-h-full flex-1 bg-[var(--color-bg)] px-6 py-10 md:py-14"
        style={dentalThemeVars}
      >
        <section className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <HeroSection />
            <ServicesSection />
          </div>
          <div className="md:col-span-4">
            <AboutPreviewSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
