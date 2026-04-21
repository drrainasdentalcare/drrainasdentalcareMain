import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function ServicesSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3" style={dentalThemeVars}>
      {homePageContent.services.map((service) => (
        <article
          key={service.title}
          className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5"
        >
          <h2 className="font-heading text-lg font-medium text-[var(--color-heading)]">
            {service.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{service.description}</p>
        </article>
      ))}
    </section>
  );
}
