import Image from "next/image";
import { dentalThemeVars } from "@/constants/theme";
import type { SanityServicesSection } from "@/src/sanity/types/services";

const fallbackServices = [
  {
    title: "Routine Exams",
    description:
      "Routine dental exams are recommended at an interval of 6 months for everyone, irrespective of age.",
    image: "/Images/Services/routinexam.jpg",
  },
  {
    title: "Dental Hygiene, Teeth Whitening & Smile Designing",
    description:
      "Keep your gums healthy, brighten your smile, and refine overall aesthetics with professional hygiene, whitening, and smile designing.",
    image: "/Images/Services/whitening.jpg",
  },
  {
    title: "Dental Fillings",
    description: "Make your teeth cavity-free with tooth-coloured fillings.",
    image: "/Images/Services/fillings.png",
  },
  {
    title: "Crowns & Bridges and Dentures",
    description:
      "Get a Hollywood smile with full functionality with our veneers and dentures.",
    image: "/Images/Services/crowns&dentures.png",
  },
  {
    title: "Implants",
    description:
      "Get a permanent solution for your lost tooth with implants by our highly experienced doctors.",
    image: "/Images/Services/implants.png",
  },
  {
    title: "Orthodontic Treatment",
    description: "Get perfectly aligned teeth by our expert consultants.",
    image: "/Images/Services/orthodontic.jpg",
  },
  {
    title: "Dental Extraction",
    description:
      "Safe and comfortable tooth extraction procedures performed with precision and post-care guidance.",
    image: "/Images/Services/dentalexraction.png",
  },
];

type ServicesSectionProps = {
  cmsData?: SanityServicesSection | null;
};

const normalizeKey = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

export function ServicesSection({ cmsData }: ServicesSectionProps) {
  const cmsServices =
    cmsData?.items
      ?.map((item) => ({
        title: item.title ?? "",
        description: item.description ?? "",
        image: item.image?.asset?.url ?? "",
        alt: item.image?.alt ?? item.title ?? "Service image",
      }))
      .filter((item) => item.title && item.description && item.image) ?? [];

  const baseServices = fallbackServices.map((item) => ({
    ...item,
    alt: item.title,
  }));

  const services = [...baseServices];
  for (const cmsService of cmsServices) {
    const cmsKey = normalizeKey(cmsService.title);
    const existingIndex = services.findIndex((service) => normalizeKey(service.title) === cmsKey);
    if (existingIndex >= 0) {
      services[existingIndex] = cmsService;
    } else {
      services.push(cmsService);
    }
  }

  const heading = cmsData?.title || "Complete Dental Care Under One Roof";
  const highlightText = cmsData?.highlightText || "Under One Roof";
  const hasHighlight = Boolean(highlightText) && heading.includes(highlightText);
  const headingParts = hasHighlight ? heading.split(highlightText) : [heading];

  return (
    <section
      id="services"
      className="w-full scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <p className="group text-sm font-semibold tracking-[0.16em] uppercase">
          <span className="relative block h-6 overflow-hidden">
            <span className="block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              {cmsData?.label || "Our Services"}
            </span>
            <span className="absolute inset-x-0 top-6 block text-[var(--color-accent-hover)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              {cmsData?.label || "Our Services"}
            </span>
          </span>
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          {headingParts[0]}
          {hasHighlight ? (
            <span className="text-[var(--color-accent)]">{highlightText}</span>
          ) : null}
          {headingParts[1] || ""}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-body)] md:text-base">
          {cmsData?.subtitle ||
            "Personalized treatment plans, experienced specialists, and modern techniques for every stage of your dental journey."}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-[var(--color-accent-border)]/60 bg-[var(--color-bg)] shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-border)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-48 w-full overflow-hidden border-b border-[var(--color-border-soft)] bg-[var(--color-surface)]">
                <div className="relative h-full w-full">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-bottom transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="p-5">
                <div>
                  <h3 className="font-heading text-[1.3rem] leading-tight font-semibold tracking-[0.01em] text-[var(--color-heading)]">
                    {service.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-12 bg-[var(--color-accent)]/75" />
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
