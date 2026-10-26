import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Schibsted_Grotesk } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const brandFont = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aig-global-services.vercel.app"),
  title: {
    default: "AIG Global Services | One World. Complete Solutions.",
    template: "%s | AIG Global Services",
  },
  description:
    "Gadgets, homes, autos, exchange, solar installation and industrial machines. Innovative and reliable solutions from AIG Global Services.",
  openGraph: {
    type: "website",
    siteName: "AIG Global Services",
    locale: "en_NG",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AIG Global Services – One World. Complete Solutions.",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${brandFont.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}