import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Medical Billing Careers | Join [Company Name] | Healthcare RCM Jobs",
  description:
    "Join the [Company Name] team. We're hiring certified billers, coders, RCM specialists, and healthcare BPO professionals. Remote and hybrid positions available.",
  keywords:
    "medical billing jobs, RCM jobs, healthcare billing careers, medical coder jobs, remote billing jobs",
};

export default function CareersPage() {
  return <CareersContent />;
}