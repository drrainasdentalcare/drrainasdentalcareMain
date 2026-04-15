import { dentalThemeVars } from "@/constants/theme";

export default function Home() {
  return (
    <main
      className="flex min-h-full flex-1 bg-[var(--color-bg)] px-6 py-10 md:py-14"
      style={dentalThemeVars}
    >
      <section className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-12">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] md:col-span-8 md:p-10">
          <p className="inline-flex rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
            Minimal Dummy Website
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight font-semibold text-[var(--color-heading)] md:text-5xl">
            Dr. Raina&apos;s Dental Care &amp; Implants
          </h1>{" "}
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-body)] md:text-lg">
            A calm, modern, patient-first clinic experience. This is a polished temporary homepage
            while the full website is being prepared.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5">
              <h2 className="font-heading text-lg font-medium text-[var(--color-heading)]">
                Preventive Dentistry
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Routine exams, scaling, and oral health guidance to keep smiles healthy.
              </p>
            </article>
            <article className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5">
              <h2 className="font-heading text-lg font-medium text-[var(--color-heading)]">
                Dental Implants
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Precise implant planning focused on natural aesthetics and long-term function.
              </p>
            </article>
            <article className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5">
              <h2 className="font-heading text-lg font-medium text-[var(--color-heading)]">
                Cosmetic Care
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Smile design and aesthetic treatments tailored to your facial profile.
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-hover)]">
              Book Consultation
            </button>
            <button className="rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent)] transition hover:bg-[var(--color-accent-soft)]">
              Call Clinic
            </button>
          </div>
        </div>

        <aside className="space-y-6 md:col-span-4">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
              Clinic Hours
            </p>
            <div className="mt-3 space-y-2 text-sm text-[var(--color-body)]">
              <p>Mon - Sat: 10:00 AM - 7:30 PM</p>
              <p>Sunday: By Appointment</p>
              <p>Emergency support available</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-deep-surface)] p-6 text-white">
            <p className="text-xs font-semibold tracking-wide text-[var(--color-deep-accent)] uppercase">
              Address Placeholder
            </p>
            <p className="mt-3 text-sm text-[var(--color-deep-text)]">
              Full address, map, and WhatsApp appointment support will be added next.
            </p>
            <p className="mt-5 text-sm font-medium text-white">Launching complete site shortly.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
