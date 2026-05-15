import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ExitIntentPopup from "@/components/sections/ExitIntentPopup";

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
    "medical billing services, revenue cycle management services, medical billing company, outsource medical billing, medical billing outsourcing, medical coding services, denial management services, HIPAA compliant billing company, provider credentialing services, prior authorization services",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "[Company Name]",
  url: "https://www.companyname.com",
  logo: "https://www.companyname.com/logo.png",
  description:
    "HIPAA-compliant medical billing, revenue cycle management, and coding services for healthcare providers nationwide.",
  telephone: "[PHONE]",
  email: "info@[domain].com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Street Address]",
    addressLocality: "[City]",
    addressRegion: "[State]",
    postalCode: "[ZIP]",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://linkedin.com/company/[companyname]",
    "https://twitter.com/[CompanyHandle]",
    "https://facebook.com/CompanyName",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Medical Billing",
    "Revenue Cycle Management",
    "Medical Coding",
    "Denial Management",
    "Provider Credentialing",
    "Prior Authorization",
    "Eligibility Verification",
    "AR Recovery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}