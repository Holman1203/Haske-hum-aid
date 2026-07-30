import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, Poppins } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/context/site-context";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickExitOverlay } from "@/components/QuickExitOverlay";
import { DonateModal } from "@/components/DonateModal";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haske Humanitarian Aid Initiative — Bringing light to communities in crisis",
  description:
    "Haske Humanitarian Aid Initiative (HHAI) is a woman-led, youth-driven Nigerian NGO working to end gender-based violence and support displaced and vulnerable communities across Northern Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable} ${poppins.variable}`}>
      <body>
        <SiteProvider>
          <QuickExitOverlay />
          <Banner />
          <Header />
          <main style={{ minHeight: "50vh" }}>{children}</main>
          <Footer />
          <DonateModal />
        </SiteProvider>
      </body>
    </html>
  );
}
