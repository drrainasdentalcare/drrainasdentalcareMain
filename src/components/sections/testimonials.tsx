"use client";

import Link from "next/link";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { dentalThemeVars } from "@/constants/theme";
import type { SanityTestimonialsSection } from "@/src/sanity/types/testimonials";

type TestimonialsSectionProps = {
  cmsData?: SanityTestimonialsSection | null;
};

export function TestimonialsSection({ cmsData }: TestimonialsSectionProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const testimonials =
    cmsData?.items?.filter((item) => item.name && item.review && item.rating) ??
    [];

  const googleReviewsUrl =
    cmsData?.googleReviewsUrl ||
    "https://www.google.com/maps/search/?api=1&query=Dr.%20Raina%27s%20Dental%20Care%20and%20Implants";

  const scrollTestimonials = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = slider.clientWidth / 3;
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full border-t border-[var(--color-border)] bg-[linear-gradient(180deg,#fbfbfc_0%,#f4f6f9_100%)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <p className="text-sm font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
          {cmsData?.label || "Testimonials"}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          {cmsData?.title || "Trusted by Smiles Across Generations"}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-body)] md:text-base">
          {cmsData?.subtitle ||
            "Honest feedback from patients who trusted us with their treatment journey and smile care."}
        </p>

        <div className="mt-8 md:mt-10">
          {testimonials.length ? (
            <div className="relative">
              <div className="mb-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => scrollTestimonials("left")}
                  aria-label="Scroll testimonials left"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-soft)] bg-white text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollTestimonials("right")}
                  aria-label="Scroll testimonials right"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-soft)] bg-white text-[var(--color-heading)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>
              <div
                ref={sliderRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-5 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {testimonials.map((item) => (
                  <article
                    key={item.name}
                    className="w-[88%] shrink-0 snap-start rounded-2xl border border-[var(--color-border-soft)] bg-white p-6 transition duration-300 sm:w-[60%] md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                  >
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
                      <Quote className="h-4.5 w-4.5 text-[var(--color-accent)]" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">
                      {item.review}
                    </p>
                    <div className="mt-5 border-t border-[var(--color-border-soft)] pt-4">
                      <p className="font-heading text-lg font-semibold text-[var(--color-heading)]">
                        {item.name}
                      </p>
                      {item.treatment ? (
                        <p className="mt-1 text-xs font-semibold tracking-[0.08em] text-[var(--color-muted)] uppercase">
                          {item.treatment}
                        </p>
                      ) : null}
                      <div className="mt-3 inline-flex items-center gap-1">
                        {Array.from({ length: Number(item.rating) }).map(
                          (_, index) => (
                            <Star
                              key={`${item.name}-${index}`}
                              className="h-4 w-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
                            />
                          ),
                        )}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[var(--color-muted)]">
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          role="img"
                        >
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
                        <span>Google Review</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--color-border-soft)] bg-white/70 px-5 py-8 text-sm text-[var(--color-body)]">
              No testimonials found in CMS yet. Add and publish testimonials in
              Sanity Studio.
            </div>
          )}
        </div>

        <div className="mt-8 md:mt-10">
          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" role="img">
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
            View Google Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
