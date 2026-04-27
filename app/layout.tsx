import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drrainadentalcare.com";
const siteName = "Dr. Raina Dental Care & Implants";
const defaultTitle = "Best Dental Clinic in India | Dentist in Rajouri Garden, New Delhi";
const defaultDescription =
  "Dr. Raina Dental Care & Implants is a trusted dental clinic in India, based in Rajouri Garden, New Delhi, for implants, crowns, bridges, and preventive dental care.";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "best dental clinic in India",
    "best dentist in India",
    "dentist in Rajouri Garden",
    "dental clinic in New Delhi",
    "best dental clinic in Delhi",
    "dental implants in Delhi",
    "crowns and bridges",
    "cosmetic dentistry Delhi",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        inter.variable,
        playfair.variable,
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
