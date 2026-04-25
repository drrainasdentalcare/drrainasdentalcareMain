import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)] px-6 py-12" style={dentalThemeVars}>
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
          <h1 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">
            Contact Us
          </h1>
          <p className="mt-4 text-[var(--color-body)]">
            This page is ready for clinic address, map embed, phone numbers, and contact form.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
