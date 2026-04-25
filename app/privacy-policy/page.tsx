import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)] px-6 py-12" style={dentalThemeVars}>
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
          <h1 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
            We value your privacy. Information shared through calls, messages, appointments, or
            website forms is used only to provide dental consultation, appointment coordination, and
            patient support.
          </p>

          <div className="mt-6 space-y-5 text-sm leading-6 text-[var(--color-body)]">
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Information We Collect</h2>
              <p className="mt-2">
                Name, phone number, email address, appointment details, and health-related notes you
                voluntarily share for treatment coordination.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">How We Use Information</h2>
              <p className="mt-2">
                To confirm appointments, communicate treatment-related updates, answer queries, and
                improve patient experience.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Data Protection</h2>
              <p className="mt-2">
                We take reasonable administrative and technical safeguards to protect patient
                information. Data is not sold to third parties.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Contact</h2>
              <p className="mt-2">
                For privacy-related questions, contact the clinic directly through the phone or email
                listed on this website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
