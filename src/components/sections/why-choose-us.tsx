import {
  Award,
  Cpu,
  ShieldCheck,
  Smile,
  Stethoscope,
  Users,
} from "lucide-react";
import { dentalThemeVars } from "@/constants/theme";

const trustPoints = [
  {
    title: "30+ Years of Trusted Dental Care",
    description:
      "Delivering high-quality dental treatments since 1996, with thousands of satisfied patients.",
    icon: Award,
  },
  {
    title: "Advanced Technology & Modern Techniques",
    description:
      "We use state-of-the-art equipment and the latest dental procedures to ensure precise and comfortable treatment.",
    icon: Cpu,
  },
  {
    title: "Comfortable & Pain-Free Experience",
    description:
      "Our focus is on minimizing discomfort and making every visit stress-free for our patients.",
    icon: Smile,
  },
  {
    title: "Strict Hygiene & Safety Standards",
    description:
      "We follow rigorous sterilization and hygiene protocols to ensure a safe clinical environment.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced & Specialized Team",
    description:
      "A team of highly qualified dentists and specialists dedicated to providing the best care.",
    icon: Stethoscope,
  },
  {
    title: "Personalized Patient Care",
    description:
      "Every treatment plan is tailored to your specific needs, ensuring the best possible outcomes.",
    icon: Users,
  },
] as const;

export function WhyChooseUsSection() {
  return (
    <section
      className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-14 md:py-20"
      style={dentalThemeVars}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
        <p className="group text-sm font-semibold tracking-[0.16em] uppercase">
          <span className="relative block h-6 overflow-hidden">
            <span className="block text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              Why Choose Us
            </span>
            <span className="absolute inset-x-0 top-6 block text-[var(--color-accent-hover)] transition-transform duration-300 ease-out group-hover:-translate-y-6">
              Why Choose Us
            </span>
          </span>
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
          Why Patients Trust Us With{" "}
          <span className="text-[var(--color-accent)]">Their Smile</span>
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-body)] md:text-base">
          We blend decades of clinical experience with modern dentistry and compassionate care so
          every patient feels confident, safe, and genuinely looked after.
        </p>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="group rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-bg)] p-6 shadow-[0_8px_22px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-border)] hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(145deg,rgba(252,94,59,0.18),rgba(252,94,59,0.08))]">
                  <Icon className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="mt-4 font-heading text-xl leading-tight font-semibold text-[var(--color-heading)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-body)]">{point.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
