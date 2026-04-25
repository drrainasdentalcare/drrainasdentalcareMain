import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

export default function TermsAndConditionsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)] px-6 py-12" style={dentalThemeVars}>
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
          <h1 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
            By using this website, you agree to these terms. The content is for general information
            and does not replace clinical diagnosis or in-person consultation.
          </p>

          <div className="mt-6 space-y-5 text-sm leading-6 text-[var(--color-body)]">
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Appointments</h2>
              <p className="mt-2">
                Appointment slots are subject to availability and confirmation by the clinic. Please
                provide accurate contact details while booking.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Medical Advice</h2>
              <p className="mt-2">
                Information on this website is educational. Final treatment recommendations are made
                only after professional examination by our dental team.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">External Links</h2>
              <p className="mt-2">
                External platforms such as maps, social media, and messaging services are governed by
                their own terms and privacy policies.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Updates to Terms</h2>
              <p className="mt-2">
                We may update these terms periodically to reflect service, legal, or policy changes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
