"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SanityGallerySection } from "@/src/sanity/types/gallery";
import { dentalThemeVars } from "@/constants/theme";

type PhotoGallerySectionProps = {
  cmsData?: SanityGallerySection | null;
};

export function PhotoGallerySection({ cmsData }: PhotoGallerySectionProps) {
  const [activeTab, setActiveTab] = useState<"clinic" | "events">("clinic");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const cmsClinicImages = useMemo(
    () =>
      (cmsData?.clinicImages ?? [])
        .map((item) => ({
          src: item.asset?.url ?? item.image?.asset?.url ?? "",
          alt: item.alt ?? "Clinic Gallery image",
          description:
            item.description ?? "A glimpse of our clinic environment, infrastructure, and patient-focused spaces.",
        }))
        .filter((item) => Boolean(item.src)),
    [cmsData?.clinicImages],
  );

  const cmsEventImages = useMemo(
    () =>
      (cmsData?.eventImages ?? [])
        .map((item) => ({
          src: item.asset?.url ?? item.image?.asset?.url ?? "",
          alt: item.alt ?? "Event and achievement image",
          description:
            item.description ?? "A highlight from our journey, milestones, and meaningful moments.",
        }))
        .filter((item) => Boolean(item.src)),
    [cmsData?.eventImages],
  );

  const activeImages = useMemo(
    () => (activeTab === "clinic" ? cmsClinicImages : cmsEventImages),
    [activeTab, cmsClinicImages, cmsEventImages],
  );

  const isModalOpen = selectedIndex !== null;
  const selectedImage = selectedIndex !== null ? activeImages[selectedIndex] : null;

  const closeModal = () => setSelectedIndex(null);
  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + activeImages.length) % activeImages.length);
  }, [selectedIndex, activeImages.length]);
  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % activeImages.length);
  }, [selectedIndex, activeImages.length]);

  const scrollByCards = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = Math.round(scrollRef.current.clientWidth * 0.82);
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen, showPrev, showNext]);

  return (
    <section
      id="photo-gallery"
      className="w-full scroll-mt-24 border-t border-[var(--color-border)] bg-[#050506] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <p className="group text-sm font-semibold tracking-[0.16em] uppercase">
          <span className="relative block h-6 overflow-hidden">
            <span className="block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              {cmsData?.label || "Gallery"}
            </span>
            <span className="absolute inset-x-0 top-6 block text-[var(--color-accent-hover)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              {cmsData?.label || "Gallery"}
            </span>
          </span>
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-white md:text-4xl">
          {cmsData?.title?.includes("Moments That Matter") ? (
            <>
              {cmsData.title.replace("Moments That Matter", "")}
              <span className="text-[var(--color-accent)]">Moments That Matter</span>
            </>
          ) : (
            <>
              Inside Our Clinic &{" "}
              <span className="text-[var(--color-accent)]">Moments That Matter</span>
            </>
          )}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-deep-text)] md:text-base">
          {cmsData?.subtitle || "Explore our facilities and highlights from our journey."}
        </p>

        <div className="mt-7 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-1 rounded-xl border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => {
                setActiveTab("clinic");
                setSelectedIndex(null);
              }}
              className={`rounded-lg px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "clinic"
                  ? "bg-white text-[#1a1c21] shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
                  : "text-[var(--color-deep-text)] hover:bg-white/10 hover:text-white"
              }`}
            >
              {cmsData?.clinicTabLabel || "Center Gallery"}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("events");
                setSelectedIndex(null);
              }}
              className={`rounded-lg px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "events"
                  ? "bg-white text-[#1a1c21] shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
                  : "text-[var(--color-deep-text)] hover:bg-white/10 hover:text-white"
              }`}
            >
              {cmsData?.eventTabLabel || "Events & Achievements"}
            </button>
          </div>

          <div />
        </div>

        <div className="relative mt-8 md:mt-10">
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-[0_12px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[var(--color-accent)] hover:bg-black/45 hover:text-[var(--color-accent)] md:inline-flex"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="absolute right-0 top-1/2 z-10 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-[0_12px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-[var(--color-accent)] hover:bg-black/45 hover:text-[var(--color-accent)] md:inline-flex"
            aria-label="Scroll gallery right"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {activeImages.length ? (
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-5"
            >
              {activeImages.map((image, index) => (
                <button
                  key={`${activeTab}-${image.src}`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group relative h-[44vh] min-h-[280px] w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/20 bg-black/20 sm:w-[440px] lg:w-[500px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 440px, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute right-3 bottom-3 inline-flex h-8 w-8 items-center justify-center bg-white/90 text-[var(--color-heading)] opacity-0 transition group-hover:opacity-100">
                    <Eye className="h-4 w-4" />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-white/25 bg-white/5 px-5 py-8 text-sm text-[var(--color-deep-text)]">
              No images found in Sanity for this tab yet. Add and publish images in Studio.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--color-heading)] transition hover:bg-white"
            aria-label="Close gallery image"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-heading)] transition hover:bg-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-heading)] transition hover:bg-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-xl bg-[#111318] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <div className="relative h-[48vh] w-full sm:h-[56vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain bg-black"
                sizes="90vw"
              />
            </div>
            <div className="px-4 py-2.5 sm:px-5 sm:py-3">
              <p className="text-sm leading-6 text-[var(--color-deep-text)] sm:text-base">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
