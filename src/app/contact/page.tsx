import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact [Company Name] | Medical Billing Consultation | USA",
  description:
    "Contact [Company Name] to schedule a free revenue cycle consultation or billing audit. Reach our team by phone, email, or fill out our inquiry form.",
  keywords:
    "contact medical billing company, RCM consultation, medical billing inquiry, billing company contact",
};

export default function ContactPage() {
  return <ContactContent />;
}