"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { trackClarityClick } from "@/lib/clarity";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

const clinicAddress = "91-A, MIG Flats, Rajouri Garden, New Delhi - 110027";
const phoneNumbers = ["011 - 41017000", "011 - 35708139", "+91 8595389394", "+91 9810167454"];
const whatsappNumber = "+91 8595389394";
const emailAddress = "drrainasdentalcareandimplants@gmail.com";

const mapsQuery = encodeURIComponent("Dr. Kapil Raina Dental Care and Implant, Rajouri Garden, New Delhi");
const mapEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function ContactUsPage() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setIsEmailCopied(true);
      trackClarityClick("copy_email_click", "contact_page");
      window.setTimeout(() => setIsEmailCopied(false), 1800);
    } catch {
      setIsEmailCopied(false);
    }
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)]" style={dentalThemeVars}>
        <section className="w-full border-y border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-10 md:px-8 md:py-14 lg:px-10">
          <div className="w-full">
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
              Let&apos;s Connect
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Contact Us
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-body)] md:text-base">
              Reach out for appointments, treatment queries, and consultation support. Our team is here to
              help you with prompt guidance and care.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-7">
                <div className="space-y-6">
                  <div>
                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                      <Phone className="h-4 w-4" />
                      Call Us
                    </p>
                    <div className="mt-3 space-y-2">
                      {phoneNumbers.map((phone) => (
                        <p key={phone}>
                          <TrackedLink
                            href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                            clarityEvent="phone_click"
                            clarityLocation="contact_page"
                            className="text-sm font-medium text-[var(--color-body)] transition hover:text-[var(--color-accent)] md:text-base"
                          >
                            {phone}
                          </TrackedLink>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-[var(--color-border-soft)]" />

                  <div>
                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                      <Mail className="h-4 w-4" />
                      Email
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <TrackedLink
                        href={`mailto:${emailAddress}`}
                        clarityEvent="email_click"
                        clarityLocation="contact_page"
                        className="text-sm font-medium break-all text-[var(--color-body)] transition hover:text-[var(--color-accent)] md:text-base"
                      >
                        {emailAddress}
                      </TrackedLink>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label="Copy email"
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-border)] bg-white text-[var(--color-accent)] transition hover:bg-[var(--color-accent-soft)]"
                      >
                        {isEmailCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-7">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <MapPin className="h-4 w-4" />
                  Address
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)] md:text-base">{clinicAddress}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <TrackedLink
                    href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    clarityEvent="whatsapp_click"
                    clarityLocation="contact_page"
                    className="inline-flex items-center gap-2 border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </TrackedLink>
                  <TrackedLink
                    href={mapsOpenUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    clarityEvent="maps_click"
                    clarityLocation="contact_page"
                    className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-white px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-heading)] uppercase transition hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)]"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Maps
                  </TrackedLink>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="w-full bg-[var(--color-surface)]">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-4 py-4 md:px-8 lg:px-10">
            <h2 className="font-heading text-xl font-semibold text-[var(--color-heading)] md:text-2xl">
              Find Us on Google Maps
            </h2>
            <TrackedLink
              href={mapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              clarityEvent="maps_click"
              clarityLocation="contact_page"
              className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-[var(--color-heading)] uppercase transition hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)]"
            >
              <MapPin className="h-4 w-4" />
              Open Map
            </TrackedLink>
          </div>
          <iframe
            title="Dr Kapil Raina Dental Care and Implant location map"
            src={mapEmbedUrl}
            className="h-[430px] w-full md:h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
