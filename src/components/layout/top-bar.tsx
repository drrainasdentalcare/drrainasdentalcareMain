import { Mail, MapPin, Phone } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { dentalThemeVars } from "@/constants/theme";
import { homePageContent } from "@/features/home/data";

export function TopBar() {
  const compactAddress = homePageContent.addressLines.join(" ");
  const topBarPhones = homePageContent.phoneNumbers.slice(0, 2);
  const mapsQuery = encodeURIComponent(`Dr. Raina ${compactAddress}`);

  return (
    <div className="hidden w-full bg-[#1f232a] text-white lg:block" style={dentalThemeVars}>
      <div className="flex w-full flex-col gap-2 px-4 py-2 text-xs sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--color-deep-text)]">
          <TrackedLink
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            clarityEvent="maps_click"
            clarityLocation="top_bar"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--color-accent)]"
          >
            <MapPin className="h-3.5 w-3.5" />
            {compactAddress}
          </TrackedLink>
          {topBarPhones.map((phone) => (
            <TrackedLink
              key={phone}
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              clarityEvent="phone_click"
              clarityLocation="top_bar"
              className="inline-flex items-center gap-1.5 transition hover:text-[var(--color-accent)]"
            >
              <Phone className="h-3.5 w-3.5" />
              {phone}
            </TrackedLink>
          ))}
        </div>
        <div className="flex flex-col items-start gap-1 text-[var(--color-deep-text)] lg:items-end">
          <div className="flex items-center gap-3">
          {homePageContent.socialLinks.map((social) => (
            <TrackedLink
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              clarityEvent={
                social.label === "Mail"
                  ? "email_click"
                  : social.label.toLowerCase() === "facebook"
                    ? "facebook_click"
                    : "social_click"
              }
              clarityLocation="top_bar"
              className="inline-flex items-center gap-1.5 text-[var(--color-deep-text)] transition hover:text-[var(--color-accent)]"
            >
              {social.label === "Mail" ? (
                <Mail className="h-4 w-4" />
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9c0-.9.3-1.5 1.6-1.5h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8V14h2.6v8h2.9Z" />
                </svg>
              )}
              <span className="text-[11px]">{social.label}</span>
            </TrackedLink>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
