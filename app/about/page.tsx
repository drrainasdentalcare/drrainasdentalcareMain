import Image from "next/image";
import { Award, CheckCircle2, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)] py-8 md:py-12" style={dentalThemeVars}>
        <section className="mx-auto w-full max-w-[1700px] px-3 sm:px-4 md:px-6">
          <div className="grid gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 md:p-6 lg:p-8">
            <div className="grid items-center gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
                  <Sparkles className="h-4 w-4" />
                  About Us
                </p>
                <h1 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                  Dr. Raina&apos;s Dental Care &amp; Implants
                </h1>
                <p className="mt-3 text-sm font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  Serving Since 1996 · Rajouri Garden, New Delhi
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--color-body)] text-justify">
                  Established in 1996, Dr. Raina&apos;s Dental Care &amp; Implants is among the leading dental care
                  clinics in New Delhi. Led by Dr. Kapil Raina, the center provides premium and comprehensive dental
                  care backed by decades of clinical excellence and patient trust.
                </p>
              </div>

              <article className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white">
                <Image
                  src="/Images/AboutUs/centerfront(landscape).jpg"
                  alt="Dr. Raina's Dental Care & Implants clinic front view"
                  width={2400}
                  height={1300}
                  className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                  priority
                />
              </article>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">Started</p>
                <p className="mt-2 font-heading text-3xl font-semibold text-[var(--color-heading)]">1996</p>
              </article>
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">Experience</p>
                <p className="mt-2 font-heading text-3xl font-semibold text-[var(--color-heading)]">35+ Years</p>
              </article>
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">Focus</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">
                  Implants, crowns/bridges, pain-minimized care, and high safety standards.
                </p>
              </article>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
              <article className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white">
                <Image
                  src="/Images/AboutUs/kapilsir(portrait).jpg"
                  alt="Dr. Kapil Raina portrait"
                  width={1500}
                  height={2200}
                  className="h-[360px] w-full object-contain object-top lg:h-[470px]"
                />
              </article>

              <div className="grid gap-5">
                <article className="rounded-2xl border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]/45 p-5">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                    <Stethoscope className="h-4 w-4" />
                    What Sets Us Apart
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--color-body)]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      Premium dental solutions with patient-first consultation.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      Specialized care in implants, crowns, bridges, and restorative dentistry.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      Focus on pain-minimized treatment, hygiene, and long-term oral health.
                    </li>
                  </ul>
                </article>

                <div className="grid gap-5 md:grid-cols-2">
                  <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                      <ShieldCheck className="h-4 w-4" />
                      Our Care Philosophy
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-body)] text-justify">
                      We combine state-of-the-art equipment, latest techniques, and transparent treatment planning so
                      every patient receives safe, personalized, and responsible care.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                      <Award className="h-4 w-4" />
                      Reputation & Clinical Strength
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-body)] text-justify">
                      Dr. Kapil Raina has been recognized by the Indian Dental Association for dental education and
                      clinical excellence, reflecting the clinic&apos;s long-standing patient trust.
                    </p>
                  </article>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white">
                <Image
                  src="/Images/AboutUs/team(landscape).jpg"
                  alt="Dr. Raina's Dental Care & Implants team"
                  width={2400}
                  height={1400}
                  className="h-[260px] w-full object-cover object-[center_36%] sm:h-[320px] lg:h-[380px]"
                />
              </article>

              <article className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white">
                <Image
                  src="/Images/AboutUs/interior(landscape).jpg"
                  alt="Interior view of Dr. Raina's Dental Care & Implants"
                  width={2400}
                  height={1400}
                  className="h-[260px] w-full object-cover object-center sm:h-[320px] lg:h-[380px]"
                />
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
