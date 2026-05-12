import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "[Company Name] | Medical Billing & Revenue Cycle Management",
  description:
    "Maximize your practice revenue with expert medical billing, RCM, and denial management. HIPAA-compliant. 98%+ collection rate. Trusted by 500+ providers nationwide.",
  keywords:
    "medical billing company, revenue cycle management services, healthcare RCM, HIPAA compliant billing, denial management",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}