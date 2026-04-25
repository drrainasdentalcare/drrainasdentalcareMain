import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

export default function CancellationAndRefundPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)] px-6 py-12" style={dentalThemeVars}>
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
          <h1 className="font-heading text-3xl font-semibold text-[var(--color-heading)]">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
            We understand schedules can change. Please review our cancellation and refund guidelines
            for appointments and advance bookings.
          </p>

          <div className="mt-6 space-y-5 text-sm leading-6 text-[var(--color-body)]">
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Appointment Cancellation</h2>
              <p className="mt-2">
                Kindly inform us at the earliest if you need to reschedule or cancel your
                consultation. Early notice helps us serve other patients better.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Refund Eligibility</h2>
              <p className="mt-2">
                Any refundable amount, where applicable, is processed after internal verification and
                may take a reasonable number of business days depending on payment mode.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Treatment Plans</h2>
              <p className="mt-2">
                Refund terms for multi-visit or procedure-based plans are shared case-by-case at the
                time of treatment planning.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)]">Support</h2>
              <p className="mt-2">
                For cancellation or refund support, please contact the clinic through the phone
                numbers listed on this website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
