import Image from "next/image";
import Link from "next/link";
import { IndianRupee, MessageCircle, QrCode, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { dentalThemeVars } from "@/constants/theme";
import { getOnlineConsultationPage } from "@/src/sanity/queries/online-consultation";

export default async function OnlineConsultationPage() {
  const cmsData = await getOnlineConsultationPage();
  const consultationPhone = cmsData?.phone || "+91 8595389394";
  const consultationFee = cmsData?.consultationFee || "Rs.2000/-";
  const qrImageSrc =
    cmsData?.qrImage?.asset?.url || "/Images/OnlineConsultation/qr.jpg";
  const qrImageAlt =
    cmsData?.qrImage?.alt || "QR code to pay for online consultation";
  const whatsappLink = `https://wa.me/${consultationPhone.replace(/[^\d]/g, "")}`;

  return (
    <>
      <TopBar />
      <Navbar />
      <main
        className="flex-1 bg-[var(--color-bg)] py-12 md:py-16"
        style={dentalThemeVars}
      >
        <section className="mx-auto w-full max-w-6xl px-4 md:px-8 lg:px-10">
          <div className="grid items-stretch gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:gap-8 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
                <QrCode className="h-4 w-4" />
                {cmsData?.badge || "Remote Care"}
              </p>
              <h1 className="mt-3 font-heading text-3xl font-semibold text-[var(--color-heading)] md:text-4xl">
                {cmsData?.title || "Online Consultation"}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-body)] md:text-base">
                {cmsData?.description ||
                  "Scan the QR code to pay for the Online Consultation service by our team."}
              </p>

              <div className="mt-6 space-y-4 rounded-2xl border border-[var(--color-accent-border)] bg-[var(--color-accent-soft)]/40 p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15">
                    <IndianRupee className="h-4 w-4 text-[var(--color-accent)]" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-[var(--color-muted)] uppercase">
                      {cmsData?.consultationFeeLabel ||
                        "Online Consultation Fee"}
                    </p>
                    <p className="mt-1 font-heading text-2xl font-semibold text-[var(--color-heading)]">
                      {consultationFee}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15">
                    <MessageCircle className="h-4 w-4 text-[var(--color-accent)]" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-[var(--color-muted)] uppercase">
                      {cmsData?.afterPaymentLabel || "After Payment"}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-body)] md:text-base">
                      Kindly connect with us on WhatsApp and share your payment
                      proof to confirm your online consultation.
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-[var(--color-heading)] md:text-base">
                      Call / WhatsApp:{" "}
                      <span className="text-emerald-700">
                        {consultationPhone}
                      </span>
                    </p>
                    <div className="mt-3">
                      <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-[#25d366]/30 bg-[#25d366]/10 px-5 py-3 text-sm font-semibold text-[#128c7e] transition hover:bg-[#25d366]/20"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 inline-flex items-center gap-2 text-xs text-[var(--color-muted)] md:text-sm">
                <ShieldCheck className="h-4 w-4 text-[var(--color-accent)]" />
                {cmsData?.note ||
                  "Please share your payment confirmation when you call."}
              </p>
            </div>

            <aside className="flex h-full flex-col justify-center rounded-2xl border border-[var(--color-border-soft)] bg-white p-5 md:p-6">
              <div className="mx-auto w-full max-w-[360px]">
                <p className="mb-3 text-center text-xs font-semibold tracking-[0.12em] text-[var(--color-muted)] uppercase">
                  {cmsData?.qrLabel || "Scan & Pay"}
                </p>
                <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)] bg-white p-3 shadow-[0_10px_26px_rgba(15,23,42,0.08)]">
                  <Image
                    src={qrImageSrc}
                    alt={qrImageAlt}
                    width={900}
                    height={900}
                    className="h-auto w-full rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
