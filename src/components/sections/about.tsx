import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { dentalThemeVars } from "@/constants/theme";
import type { SanityAboutSection } from "@/src/sanity/types/about";

type AboutPreviewSectionProps = {
  cmsData?: SanityAboutSection | null;
};

export function AboutPreviewSection({ cmsData }: AboutPreviewSectionProps) {
  const heading = cmsData?.title || "Where Experience Meets Dental Care";
  const highlightText = cmsData?.highlightText || "Dental Care";
  const hasHighlight = Boolean(highlightText) && heading.includes(highlightText);
  const headingParts = hasHighlight ? heading.split(highlightText) : [heading];

  const imageSrc = cmsData?.image?.asset?.url || "/Images/CenterImages/kapilAboutus.jpg";
  const imageAlt = cmsData?.image?.alt || "Dr. Raina's Dental Care team";

  return (
    <section
      className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="grid items-center gap-8 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
          <div className="relative h-[320px] overflow-hidden sm:h-[400px] md:h-[520px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 767px) 100vw, 56vw"
            />
          </div>

          <div className="group md:pl-2">
            <p className="text-sm font-semibold tracking-[0.16em] uppercase">
              <span className="relative block h-6 overflow-hidden">
                <span className="block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  {cmsData?.label || "Meet Dr. Raina"}
                </span>
                <span className="absolute inset-x-0 top-6 block text-[var(--color-accent-hover)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
                  {cmsData?.label || "Meet Dr. Raina"}
                </span>
              </span>
            </p>
            <h3 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
              {headingParts[0]}
              {hasHighlight ? <span className="text-[var(--color-accent)]">{highlightText}</span> : null}
              {headingParts[1] || ""}
            </h3>
            <p className="mt-5 text-base leading-7 text-[var(--color-body)] text-justify">
              {cmsData?.paragraphOne ||
                "For nearly three decades, Dr. Raina's Dental Care & Implants has earned patient trust through ethical treatment, precise dentistry, and a warm, patient-first approach for every smile."}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--color-body)] text-justify">
              {cmsData?.paragraphTwo ||
                "Led by experienced specialists, the clinic combines advanced technology with thoughtful consultation to offer complete dental solutions, from preventive care and restorative dentistry to implants and smile-focused treatments tailored for long-term oral health."}
            </p>
            <Link
              href={cmsData?.ctaHref || "/about-us"}
              className="mt-7 inline-flex items-center gap-2  border border-[var(--color-accent)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:bg-[var(--color-accent)] hover:text-white"
            >
              {cmsData?.ctaLabel || "Learn More About Us"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
