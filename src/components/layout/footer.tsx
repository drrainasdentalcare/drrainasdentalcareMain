import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";
import { BackToTopButton } from "@/components/layout/back-to-top-button";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Know Your Doctor", href: "/know-your-doctor" },
  { label: "Online Consultation", href: "/online-consultation" },
  { label: "Services", href: "/#services" },
  { label: "Contact Us", href: "/contact-us" },
];

const scheduleRows = [
  { label: "Mon - Sat", value: "9:00 AM - 1:00 PM" },
  { label: "Evening", value: "5:00 PM - 8:00 PM" },
  { label: "Sunday", value: "Closed" },
];

const phoneNumbers = [
  "011 - 41017000",
  "011 - 35708139",
  "+91 8595389394",
  "+91 9810167454",
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation & Refund", href: "/cancellation-and-refund-policy" },
];

export function Footer() {
  const emailLink = homePageContent.socialLinks.find((item) =>
    item.href.startsWith("mailto:"),
  );
  const facebookLink = homePageContent.socialLinks.find(
    (item) => item.label.toLowerCase() === "facebook",
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-white/10 bg-[#050506] text-white"
      style={dentalThemeVars}
    >
      <div className="w-full px-4 py-10 md:px-8 lg:px-10 lg:py-14">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 border-b border-white/10 pb-8 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-10 lg:pb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/Images/Logo/logo-footer.png"
                alt="Dr Raina logo"
                width={96}
                height={96}
                className="h-16 w-16 rounded-xl object-cover sm:h-[72px] sm:w-[72px]"
              />
              <span className="flex w-[200px] flex-col leading-[0.85] sm:w-[220px]">
                <span
                  className="text-[2.1rem] tracking-tight text-[var(--color-logo-orange)] sm:text-[2.4rem]"
                  style={{
                    fontFamily: '"Brush Script EF", "Brush Script MT", cursive',
                    fontWeight: 500,
                  }}
                >
                  Dr Raina’s
                </span>
                <span className="text-[0.78rem] font-bold tracking-tight text-white sm:text-[0.85rem]">
                  Dental Care &amp; Implants
                </span>
              </span>
            </Link>
            <div className="mt-4 max-w-sm space-y-3 text-justify text-sm leading-6 text-white/70">
              <p>
                Trusted dental center in Rajouri Garden, New Delhi for over
                three decades, from routine check‑ups to implants, root canals,
                orthodontics and cosmetic dentistry.
              </p>
              <p>
                Equipped with modern dental technology, strict sterilization
                protocols, and internationally aligned infection‑control
                standards. Led by experienced dental surgeons who combine
                precision with compassionate care. A beacon of patient‑centered
                excellence in West Delhi.
              </p>
            </div>
            <div className="mt-4 flex items-start gap-2.5 text-sm leading-6 text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>
                91-A, MIG Flats, Rajouri Garden,
                <br />
                New Delhi - 110027
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              Navigation
            </h4>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/80">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-[var(--color-accent)]"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] transition group-hover:scale-125"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              Center Schedule
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {scheduleRows.map((row) => (
                <li key={row.label} className="flex items-start gap-2.5">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                  <div className="flex flex-col leading-5">
                    <span className="font-medium text-white">{row.label}</span>
                    <span className="text-white/70">{row.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              Connect
            </h4>

            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
              <Phone className="h-4 w-4 text-[var(--color-accent)]" />
              Call Now
            </div>
            <ul className="mt-2 grid gap-1.5 text-sm text-white/80">
              {phoneNumbers.map((phone) => (
                <li key={phone}>
                  <Link
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="transition hover:text-[var(--color-accent)]"
                  >
                    {phone}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 hidden items-center gap-2 md:flex">
              {emailLink ? (
                <Link
                  href={emailLink.href}
                  aria-label="Email us"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              ) : null}
              {facebookLink ? (
                <Link
                  href={facebookLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden
                  >
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9c0-.9.3-1.5 1.6-1.5h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8V14h2.6v8h2.9Z" />
                  </svg>
                </Link>
              ) : null}
              <Link
                href="https://wa.me/918595389394"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden
                >
                  <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.2.3 11.7c0 2 .5 4 1.5 5.7L0 24l6.8-1.8a11.7 11.7 0 0 0 5.3 1.3h0c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6-3.3-8.3Zm-8.4 18c-1.7 0-3.3-.4-4.8-1.2l-.3-.2-4 .9 1-3.9-.2-.3a9.5 9.5 0 1 1 8.3 4.7Zm5.2-7.1c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.5.1-1.4-.7-2.5-1.6-3.5-2.9-.2-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.1.1-.3 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3Z" />
                </svg>
              </Link>
            </div>

            <Link
              href="/contact-us"
              className="mt-5 hidden items-center gap-2 border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white md:inline-flex"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Socials (mobile only) */}
          <div className="col-span-1 md:hidden">
            <h4 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              Socials
            </h4>
            <div className="mt-4 flex items-center gap-2">
              {emailLink ? (
                <Link
                  href={emailLink.href}
                  aria-label="Email us"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </Link>
              ) : null}
              {facebookLink ? (
                <Link
                  href={facebookLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden
                  >
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9c0-.9.3-1.5 1.6-1.5h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8V14h2.6v8h2.9Z" />
                  </svg>
                </Link>
              ) : null}
              <Link
                href="https://wa.me/918595389394"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden
                >
                  <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.2.3 11.7c0 2 .5 4 1.5 5.7L0 24l6.8-1.8a11.7 11.7 0 0 0 5.3 1.3h0c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6-3.3-8.3Zm-8.4 18c-1.7 0-3.3-.4-4.8-1.2l-.3-.2-4 .9 1-3.9-.2-.3a9.5 9.5 0 1 1 8.3 4.7Zm5.2-7.1c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1l-.9 1.1c-.2.2-.3.2-.5.1-1.4-.7-2.5-1.6-3.5-2.9-.2-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.1.1-.3 0-.5 0-.1-.6-1.5-.9-2.1-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-7 flex flex-col items-center gap-4 text-center text-[11px] text-white/60 md:mt-6 md:flex-row md:items-center md:justify-between md:gap-3 md:text-left">
          <p className="order-2 md:order-1">
            © {currentYear} {homePageContent.clinicName}. All rights reserved.
          </p>

          <ul className="order-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:order-2 md:justify-start">
            {policyLinks.map((policy) => (
              <li key={policy.href}>
                <Link
                  href={policy.href}
                  className="transition hover:text-[var(--color-accent)]"
                >
                  {policy.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="https://www.instagram.com/sshashank_singh_?igsh=MTFqbWdzeGdkeDR0dg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group order-3 inline-flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/80 transition hover:border-[var(--color-accent-border)] hover:bg-[var(--color-accent)]/10"
          >
            <span>Website designed by</span>
            <span className="font-semibold text-white transition group-hover:text-[var(--color-accent)]">
              Shashank Singh
            </span>
          </Link>
        </div>
      </div>

      <BackToTopButton />
    </footer>
  );
}
