import Image from "next/image";
import { Award, BriefcaseBusiness, GraduationCap, Globe, ShieldCheck, Stethoscope } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";

const currentRoles = [
  "Founder Director & CEO, Dr Raina's Dental Care & Implants, New Delhi",
  "Director, ScanXperts (Delhi & Kochi)",
  "Head (India Coordination), International Service-Learning Program, School of Dentistry, University of Florida, USA",
  "Advisor, OPMD-Hub, LHMC, Ministry of Health & Family Welfare, Govt. of India",
  "Founder Secretary General, Delhi Kolkata Dental Forum",
  "President, IDA West Delhi Branch",
];

const pastRoles = [
  "Honorary Dental Specialist to the Governor of A. P.",
  "Specialist Consultant to ITBP and SSB (Ministry of Home Affairs, Govt. of India)",
  "Member, MHDC and Dentistry Sectional Committee, Bureau of Indian Standards (BIS), Govt. of India",
  "Director, Apollo Dental, Ramesh Nagar, New Delhi",
  "Member Advisory Board, Medical Tourism India News",
  "National Coordinator, UDAAN, IDA Head Office",
  "Honorary Consultant to leading schools in Delhi NCR and media platforms",
  "Coordinator of the International Service-Learning Program for Indiana University, USA",
  "Vice President, Honorary Jt. Secretary, and Honorary Secretary, IDA West Delhi",
  "Chairman CDH & Joint Secretary, IDA Delhi State",
];

export default function KnowYourDoctorPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 bg-[var(--color-bg)] py-10 md:py-14" style={dentalThemeVars}>
        <section className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:p-8 lg:p-10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
              <Stethoscope className="h-4 w-4" />
              Know Your Doctor
            </p>

            <h1 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
              Dr. Kapil K Raina
            </h1>

            <div className="mt-7 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-9">
              <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white">
                <Image
                  src="/Images/Knowyourdoctor/center-gallery-14.jpg"
                  alt="Dr. Kapil K. Raina"
                  width={1600}
                  height={2000}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>

              <div className="space-y-4">
                <p className="text-base leading-7 text-[var(--color-body)] text-justify">
                  Dr. Kapil K. Raina is a distinguished dental practitioner, educator, and global healthcare
                  advocate with over three decades of clinical experience and institutional impact.
                </p>
                <p className="text-base leading-7 text-[var(--color-body)] text-justify">
                  A graduate of Dr R Ahmed Dental College, Kolkata (1988), he holds an MD from IBAM and a Certificate
                  in Oral Implantology (CCD, Tixos - Italy). Since 1990, he has led clinical practice through Dr
                  Raina&apos;s Dental Care &amp; Implants in West Delhi while simultaneously spearheading dental
                  innovation, education, guidance, and mentorship across India and abroad.
                </p>
                <div className="rounded-2xl border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]/40 p-4 md:p-5">
                  <p className="text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                    Core Focus
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-body)]">
                    Clinical excellence, ethical dentistry, institutional leadership, public health advocacy,
                    antimicrobial stewardship, and global collaborative learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Dr. Raina currently serves as:
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--color-body)]">
                  {currentRoles.map((role) => (
                    <li key={role} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <Award className="h-4 w-4" />
                  Formerly, Dr. Raina has held numerous prestigious roles, including:
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--color-body)]">
                  {pastRoles.map((role) => (
                    <li key={role} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <Globe className="h-4 w-4" />
                  Global Influence & Advocacy
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)] text-justify">
                  Dr. Raina has the unique distinction of chairing the session on &ldquo;Business of Tomorrow -
                  Healthcare&rdquo; at the Global Indian Business Meet (GIBM-2012), held at the Marriott Marquis, Times
                  Square, New York, sharing the
                  stage with global dignitaries. In 2013, he was honored as one of the Leading Health Professionals of
                  the World by the International Biographical Centre, Cambridge, England.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <ShieldCheck className="h-4 w-4" />
                  Dental Public Health & Military Contributions
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)] text-justify">
                  He played a crucial role in advancing dental care systems within India&apos;s paramilitary forces
                  (ITBP and SSB), leading initiatives for quality dental care, infrastructure upgrades, and even
                  proposing the creation of a dedicated dental cadre, an idea that was formally sanctioned. His
                  exemplary services have been recognized by the CMO and Director Medical of SSB and ITBP, including
                  commendation for conducting a pioneering
                  workshop on High Altitude Dental Care in Leh, Ladakh.
                </p>
              </article>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <GraduationCap className="h-4 w-4" />
                  Education, AMS & Community Outreach
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)] text-justify">
                  As a passionate educator and speaker, Dr. Raina has led numerous Continuing Dental Education programs
                  focused on Antimicrobial Stewardship (AMS), Dental Practice Startups, and many other key topics. He
                  has published extensively in dental journals and driven awareness campaigns among schoolchildren in
                  West Delhi. During COVID-19, he was instrumental in developing &ldquo;Covid Guidelines: The New
                  Normal&rdquo; for dental professionals, demonstrating his commitment to responsible healthcare delivery.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  <Award className="h-4 w-4" />
                  Recognition & Legacy
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)] text-justify">
                  His accolades from the Indian Dental Association include multiple local, state, and national-level
                  awards. Notably, he is the only person to have received the &ldquo;Best Local Branch Secretary Pan
                  India&rdquo; award twice consecutively, an unprecedented feat in IDA&apos;s history. He has also been
                  recognized as Best State Branch CDH Chairman Pan India, among other distinctions.
                </p>
              </article>
            </div>

            <div className="mt-7 rounded-2xl border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]/50 p-5 md:p-6">
              <p className="text-sm leading-7 text-[var(--color-body)] text-justify">
                With a career that blends clinical excellence, academic leadership, ethical advocacy, and global
                engagement, Dr. Kapil K. Raina continues to inspire peers and shape the future of dentistry across
                generations.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
