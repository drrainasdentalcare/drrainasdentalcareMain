import { ArrowUpRight, MessageSquareText, PenLine, ShieldCheck, Star } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { dentalThemeVars } from "@/constants/theme";

const googlePlaceRef = "0x390d036ceaffffff:0xbf1fe42ce7e18992";
const googleSearchBase =
  "https://www.google.com/search?q=Dr.+Raina%27s+Dental+Care+%26+Implants";
const readReviewsUrl = `${googleSearchBase}#lrd=${googlePlaceRef},1,,,,`;
const writeReviewUrl = `${googleSearchBase}#lrd=${googlePlaceRef},3,,,,`;

const highlights = [
  { icon: ShieldCheck, label: "Real patients", text: "Reviews posted directly on Google" },
  { icon: MessageSquareText, label: "Unfiltered", text: "Read every experience, good or bad" },
  { icon: Star, label: "Since 1996", text: "Three decades of smiles in West Delhi" },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} role="img">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.2-.9 2.2-1.9 2.9l3.1 2.4c1.8-1.6 2.8-4 2.8-6.8 0-.7-.1-1.5-.2-2.2H12z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.6 0 4.8-.9 6.4-2.5l-3.1-2.4c-.9.6-2 1-3.3 1-2.5 0-4.7-1.7-5.5-4H3.3v2.5C4.9 19.8 8.2 22 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.5 14.1c-.2-.6-.3-1.3-.3-2.1s.1-1.4.3-2.1V7.4H3.3C2.5 9 2 10.4 2 12s.5 3 1.3 4.6l3.2-2.5z"
      />
      <path
        fill="#4285F4"
        d="M12 5.9c1.4 0 2.7.5 3.7 1.4l2.8-2.8C16.8 2.9 14.6 2 12 2 8.2 2 4.9 4.2 3.3 7.4l3.2 2.5c.8-2.3 3-4 5.5-4z"
      />
    </svg>
  );
}

export function GoogleReviewsSection() {
  return (
    <section
      className="w-full border-t border-[var(--color-border)] bg-[linear-gradient(180deg,#fbfbfc_0%,#f4f6f9_100%)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-white">
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12 lg:p-12">
            <div>
              <p className="group text-sm font-semibold tracking-[0.16em] uppercase">
                <span className="relative block h-6 overflow-hidden">
                  <span className="block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
                    Patient Reviews
                  </span>
                  <span className="absolute inset-x-0 top-6 block text-[var(--color-accent-hover)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
                    Patient Reviews
                  </span>
                </span>
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                Trusted by Smiles{" "}
                <span className="text-[var(--color-accent)]">Across Generations</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-body)] md:text-base md:leading-7">
                Don&apos;t just take our word for it. See what our patients say about their
                treatment experience on Google, and share your own once you&apos;ve visited us.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedLink
                  href={readReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  clarityEvent="google_reviews_click"
                  clarityLocation="reviews_section"
                  className="inline-flex items-center justify-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-[var(--color-accent-hover)] sm:text-sm"
                >
                  <GoogleIcon className="h-4 w-4 rounded-full bg-white p-0.5" />
                  Read Google Reviews
                  <ArrowUpRight className="h-4 w-4" />
                </TrackedLink>
                <TrackedLink
                  href={writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  clarityEvent="write_review_click"
                  clarityLocation="reviews_section"
                  className="inline-flex items-center justify-center gap-2 border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-6 py-3 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:border-[var(--color-accent)] sm:text-sm"
                >
                  <PenLine className="h-4 w-4" />
                  Write a Review
                </TrackedLink>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-soft)] bg-[linear-gradient(135deg,rgba(252,94,59,0.08),rgba(252,94,59,0.02))] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
                  <GoogleIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold text-[var(--color-heading)]">
                    Google Reviews
                  </p>
                  <div className="mt-1 inline-flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {highlights.map(({ icon: Icon, label, text }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/12">
                      <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-heading)]">{label}</p>
                      <p className="text-sm text-[var(--color-body)]">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
