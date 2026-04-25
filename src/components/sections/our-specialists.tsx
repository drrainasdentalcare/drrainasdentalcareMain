"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { dentalThemeVars } from "@/constants/theme";

const specialists = [
  {
    name: "Dr. Kapil Raina",
    role: "Founder, Chief Dentist & Implantologist",
    image: "/Images/Ourspecialist/kapil.png",
  },
  {
    name: "Dr. Pooja Khanna",
    role: "Consultant Orthodontist",
    image: "/Images/Ourspecialist/pooja.png",
  },
  {
    name: "Dr. Sanjeev Kumar",
    role: "Consultant Oral Surgeon",
    image: "/Images/Ourspecialist/sanjeev.png",
  },
  {
    name: "Dr. Kamakshi Raina",
    role: "Consultant Oral and Maxillofacial Radiologist and Oral Medicine Specialist",
    image: "/Images/Ourspecialist/kamakshi.png",
  },
] as const;

export function OurSpecialistsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-specialists"
      className="w-full scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <p className="group text-sm font-semibold tracking-[0.16em] uppercase">
          <span className="relative block h-6 overflow-hidden">
            <span className="block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              Our Specialists
            </span>
            <span className="absolute inset-x-0 top-6 block text-[var(--color-accent-hover)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              Our Specialists
            </span>
          </span>
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          Meet the Experts Behind Your Smile
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-body)] md:text-base">
          A team of experienced dental professionals dedicated to your care.
        </p>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-4">
          {specialists.map((doctor, index) => (
            <article
              key={doctor.name}
              className={`group overflow-hidden rounded-2xl border border-[var(--color-accent-border)]/65 bg-[var(--color-surface)] shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-border)] hover:shadow-[0_16px_30px_rgba(15,23,42,0.14)] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-[var(--color-heading)]">
                  {doctor.name}
                </h3>
                <span className="mt-2 block h-0.5 w-12 bg-[var(--color-accent)]" />
                <p className="mt-1 min-h-[3.1rem] text-sm leading-6 text-[var(--color-body)]">{doctor.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
