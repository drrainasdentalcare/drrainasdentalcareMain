import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[var(--color-border)] bg-[#0b0f17]"
      style={dentalThemeVars}
    >
      {/* Mobile hero image + mobile content (visible below md) */}
      <div className="relative h-[84svh] w-full md:hidden">
        <Image
          src="/Images/CenterImages/heromain2.jpg"
          alt="Dr. Raina's Dental Care & Implants clinic"
          fill
          priority
          quality={100}
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-[22%_center]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,22,0.1)_0%,rgba(10,14,22,0.35)_55%,rgba(10,14,22,0.75)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 flex w-full flex-col items-center px-4 pb-24 text-center sm:pb-28">
          <p className="inline-flex items-center rounded-full border border-[var(--color-accent-border)]/45 bg-[var(--color-accent)]/8 px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-[var(--color-accent-soft)] uppercase backdrop-blur-sm transition hover:border-[var(--color-accent-border)]/70 hover:bg-[var(--color-accent)]/14">
            Established 1996 · New Delhi
          </p>
          <h1 className="mt-5 font-heading text-3xl leading-[1.08] font-semibold text-white sm:text-4xl">
            Redefining Smiles with
            <span className="block text-[var(--color-accent)]">
              Precision &amp; Care
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7">
            {homePageContent.description}
          </p>
          <div className="mt-8 flex max-w-xs flex-col gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            <Link
              href="tel:+918595389394"
              className="inline-flex items-center justify-center gap-2 border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Book an Appointment
            </Link>
            <Link
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `Dr. Raina's Dental Care & Implants ${homePageContent.addressLines.join(" ")}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/70 bg-white/15 px-4 py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition hover:border-white hover:bg-white/25 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Locate Us
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop hero image (visible from md and above) */}
      <div className="relative hidden w-full md:block">
        <Image
          src="/Images/CenterImages/heromain2.jpg"
          alt="Dr. Raina's Dental Care & Implants clinic"
          width={6688}
          height={3220}
          priority
          quality={100}
          sizes="100vw"
          className="block h-auto w-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,22,0)_0%,rgba(10,14,22,0.25)_55%,rgba(10,14,22,0.7)_100%)]" />
      </div>

      {/* Desktop content overlay (visible from md and above) */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto hidden w-full max-w-5xl flex-col items-center px-4 pb-28 text-center sm:pb-32 md:flex md:px-6 md:pb-48 lg:pb-52">
        <p className="inline-flex items-center rounded-full border border-[var(--color-accent-border)]/45 bg-[var(--color-accent)]/8 px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-[var(--color-accent-soft)] uppercase backdrop-blur-sm transition hover:border-[var(--color-accent-border)]/70 hover:bg-[var(--color-accent)]/14">
          Established 1996 · New Delhi
        </p>
        <h1 className="mt-5 font-heading text-3xl leading-[1.08] font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Redefining Smiles with
          <span className="block text-[var(--color-accent)]">
            Precision &amp; Care
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
          {homePageContent.description}
        </p>
        <div className="mt-8 flex max-w-xs flex-col gap-2.5 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <Link
            href="tel:+918595389394"
            className="inline-flex items-center justify-center gap-2 border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white sm:px-7 sm:py-3.5 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Book an Appointment
          </Link>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `Dr. Raina's Dental Care & Implants ${homePageContent.addressLines.join(" ")}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2  border border-white/70 bg-white/15 px-4 py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition hover:border-white hover:bg-white/25 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Locate Us
          </Link>
        </div>
      </div>
    </section>
  );
}
