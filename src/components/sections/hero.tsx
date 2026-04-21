import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function HeroSection() {
  return (
    <section
      className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] md:p-10"
      style={dentalThemeVars}
    >
      <p className="inline-flex rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
        Website Update
      </p>
      <h1 className="mt-5 font-heading text-4xl leading-tight font-semibold text-[var(--color-heading)] md:text-5xl">
        {homePageContent.clinicName}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-body)] md:text-lg">
        {homePageContent.description}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button className="rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-hover)]">
          {homePageContent.ctaPrimary}
        </button>
        <button className="rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent)] transition hover:bg-[var(--color-accent-soft)]">
          {homePageContent.ctaSecondary}
        </button>
      </div>
    </section>
  );
}
