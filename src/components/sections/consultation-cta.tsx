"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, MapPin, MessageCircle, Phone } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { trackClarityClick } from "@/lib/clarity";
import { dentalThemeVars } from "@/constants/theme";

const primaryPhoneNumber = "+91 8595389394";
const whatsappPhoneNumber = "918595389394";
const mapsQuery = "Dr. Raina's Dental Care and Implants, Rajouri Garden, New Delhi";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export function ConsultationCtaSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    const address = "91-A, MIG Flats, Rajouri Garden, New Delhi - 110027";
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      trackClarityClick("copy_address_click", "consultation_cta");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      className="w-full border-t border-[var(--color-border)] bg-[linear-gradient(180deg,#fff8f6_0%,#fff_100%)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-3xl border border-[var(--color-accent-border)] bg-[linear-gradient(135deg,rgba(252,94,59,0.12),rgba(252,94,59,0.03))] p-7 md:p-9">
            <p className="text-sm font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
              Book Consultation
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl leading-tight font-semibold text-[var(--color-heading)] md:text-4xl">
              Ready to Start Your Smile Transformation?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--color-body)] md:text-base">
              Get expert guidance from our experienced team. Choose your preferred way to connect
              and secure your appointment in minutes.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <TrackedLink
                href={`https://wa.me/${whatsappPhoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                clarityEvent="whatsapp_click"
                clarityLocation="consultation_cta"
                className="inline-flex items-center gap-2 border border-[#25d366]/30 bg-[#25d366]/10 px-5 py-3 text-sm font-semibold text-[#128c7e] transition hover:bg-[#25d366]/20"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Now
              </TrackedLink>
              <TrackedLink
                href={`tel:${primaryPhoneNumber.replace(/[^\d+]/g, "")}`}
                clarityEvent="phone_click"
                clarityLocation="consultation_cta"
                className="inline-flex items-center gap-2 border border-[var(--color-accent-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Phone className="h-4 w-4" />
                Call {primaryPhoneNumber}
              </TrackedLink>
            </div>

            <div className="mt-5 flex items-start gap-2 text-sm text-[var(--color-muted)]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
              <span>91-A, MIG Flats, Rajouri Garden, New Delhi - 110027</span>
              <button
                type="button"
                onClick={copyAddress}
                aria-label="Copy address"
                className="ml-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-white text-[var(--color-accent)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
                title={copied ? "Address copied" : "Copy address"}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>

            <TrackedLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              clarityEvent="maps_click"
              clarityLocation="consultation_cta"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-hover)]"
            >
              Open in Google Maps
              <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </article>

          <article className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-white">
            <div className="border-b border-[var(--color-border-soft)] px-5 py-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-muted)] uppercase">
                Center Location
              </p>
            </div>
            <iframe
              title="Dr. Raina's Dental Care and Implants location map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full md:h-[340px]"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
