export type IndustryData = {
  slug: string;
  title: string;
  icon: string;
  metaTitle: string;
  metaDesc: string;
  heroHeadline: string;
  heroSubheadline: string;
  challenges: string[];
  solutions: string[];
  keyServices: string[];
};

export const industries: Record<string, IndustryData> = {
  "physician-practices": {
    slug: "physician-practices",
    title: "Physician Practices",
    icon: "👨‍⚕️",
    metaTitle: "Medical Billing for Physician Practices | [Company Name]",
    metaDesc: "Specialty-specific medical billing and RCM services for solo and group physician practices across all specialties.",
    heroHeadline: "Billing & RCM Built for Physician Practices",
    heroSubheadline: "From solo providers to multi-location groups, we deliver specialty-specific billing expertise that improves collections, reduces denials, and frees you to focus on patient care.",
    challenges: [
      "E/M coding complexity across specialties",
      "Multi-payer contracts with varying rules",
      "Staffing constraints and turnover",
      "Chronic care management billing nuances",
    ],
    solutions: [
      "Specialty-specific certified coding teams",
      "Dedicated account manager per practice",
      "Real-time KPI dashboards for owners and administrators",
      "Payer contract analysis and rate benchmarking",
    ],
    keyServices: ["Medical Billing", "Medical Coding", "Eligibility Verification", "Revenue Cycle Management"],
  },
  hospitals: {
    slug: "hospitals",
    title: "Hospitals & Health Systems",
    icon: "🏥",
    metaTitle: "Medical Billing for Hospitals & Health Systems | [Company Name]",
    metaDesc: "Enterprise-grade revenue cycle management for hospitals, health systems, and multi-location networks.",
    heroHeadline: "Enterprise RCM for Hospitals & Health Systems",
    heroSubheadline: "UB-04, DRG, charge master complexity — we handle it all. Scale your revenue cycle without scaling your headcount.",
    challenges: [
      "Complex UB-04 and DRG coding requirements",
      "Charge master maintenance and audits",
      "Revenue code accuracy across departments",
      "Multi-location consolidation of RCM operations",
    ],
    solutions: [
      "Hospital-experienced coding teams (CCS, RHIA)",
      "Charge master review and optimization",
      "Enterprise reporting across all locations",
      "Inpatient and outpatient billing under one roof",
    ],
    keyServices: ["Medical Billing", "Medical Coding", "Revenue Cycle Management", "AR Recovery"],
  },
  clinics: {
    slug: "clinics",
    title: "Clinics",
    icon: "🏛️",
    metaTitle: "Medical Billing for Clinics & Multi-Location Practices | [Company Name]",
    metaDesc: "Streamlined billing and RCM services for clinics, urgent care, and multi-location healthcare practices.",
    heroHeadline: "Billing & RCM for Multi-Location Clinics",
    heroSubheadline: "Consolidate your revenue cycle operations across every clinic location with consistent processes and centralized reporting.",
    challenges: [
      "Inconsistent billing processes across locations",
      "High patient volumes and quick turnaround needs",
      "Front-desk staffing churn",
      "Coordination of benefits across diverse payer mix",
    ],
    solutions: [
      "Centralized billing operations for all locations",
      "Same-day eligibility verification at scale",
      "Standardized charge capture workflows",
      "Multi-location performance benchmarking",
    ],
    keyServices: ["Medical Billing", "Eligibility Verification", "Charge Entry", "Virtual Medical Assistants"],
  },
  telehealth: {
    slug: "telehealth",
    title: "Telehealth Providers",
    icon: "💻",
    metaTitle: "Medical Billing for Telehealth & Virtual Care | [Company Name]",
    metaDesc: "Specialized billing services for telehealth providers, including multi-state credentialing and virtual care coding.",
    heroHeadline: "Telehealth Billing That Scales With You",
    heroSubheadline: "From state-by-state coding rules to multi-state credentialing, we handle the unique complexities of virtual care so you can focus on patient outcomes.",
    challenges: [
      "State-by-state telehealth billing rules",
      "Place of service code selection",
      "Multi-state provider credentialing",
      "Audio-only vs. video-visit coding distinctions",
    ],
    solutions: [
      "Dedicated telehealth billing team",
      "Multi-state credentialing in parallel",
      "Real-time eligibility checks at scale",
      "State-specific billing protocols",
    ],
    keyServices: ["Medical Billing", "Provider Credentialing", "Eligibility Verification", "Prior Authorization"],
  },
  "behavioral-health": {
    slug: "behavioral-health",
    title: "Behavioral Health",
    icon: "🧠",
    metaTitle: "Medical Billing for Behavioral Health & Psychiatry | [Company Name]",
    metaDesc: "Specialized behavioral health and psychiatric billing services with mental health parity compliance expertise.",
    heroHeadline: "Behavioral Health Billing Done Right",
    heroSubheadline: "Mental health parity compliance, H&B codes, telehealth rules, substance use disorder coding — our team is trained for the unique complexity of behavioral health billing.",
    challenges: [
      "Mental health parity compliance requirements",
      "Complex H&B code billing rules",
      "Substance use disorder confidentiality (42 CFR Part 2)",
      "High prior authorization volume for medications",
    ],
    solutions: [
      "Dedicated behavioral health coding specialists",
      "Telehealth and audio-only behavioral health billing",
      "Prior authorization management for psychiatric medications",
      "Parity compliance monitoring",
    ],
    keyServices: ["Medical Billing", "Medical Coding", "Prior Authorization", "Provider Credentialing"],
  },
  dental: {
    slug: "dental",
    title: "Dental",
    icon: "🦷",
    metaTitle: "Dental Billing & Insurance Verification | [Company Name]",
    metaDesc: "Dental billing services including insurance verification, claims submission, and aged AR recovery for dental practices.",
    heroHeadline: "Dental Billing Built for Modern Practices",
    heroSubheadline: "From insurance verification to claims follow-up, we handle the unique billing requirements of general dentistry, specialty dentistry, and DSOs.",
    challenges: [
      "Complex dental insurance verification",
      "Frequency limitation tracking per code",
      "PPO fee schedule management",
      "Coordination of medical-dental cross-coding",
    ],
    solutions: [
      "Dental-experienced billing specialists",
      "Insurance verification before every visit",
      "PPO and indemnity claim management",
      "Aged AR recovery for unpaid claims",
    ],
    keyServices: ["Medical Billing", "Eligibility Verification", "AR Recovery", "Charge Entry"],
  },
  "urgent-care": {
    slug: "urgent-care",
    title: "Urgent Care Centers",
    icon: "🚑",
    metaTitle: "Medical Billing for Urgent Care Centers | [Company Name]",
    metaDesc: "Fast, accurate billing services for urgent care centers including E/M coding, occupational health, and workers comp.",
    heroHeadline: "Urgent Care Billing at Urgent Speed",
    heroSubheadline: "High-volume, quick-turn billing for urgent care centers — including workers compensation, occupational health, and self-pay management.",
    challenges: [
      "High patient volume with rapid turnover",
      "E/M level selection accuracy",
      "Workers compensation billing complexity",
      "High self-pay percentage and collections",
    ],
    solutions: [
      "Same-day charge entry and claim submission",
      "Workers comp and occupational health expertise",
      "Patient payment plans and collections",
      "Multi-location billing consolidation",
    ],
    keyServices: ["Medical Billing", "Eligibility Verification", "Charge Entry", "Revenue Cycle Management"],
  },
  "ambulatory-surgery": {
    slug: "ambulatory-surgery",
    title: "Ambulatory Surgery Centers",
    icon: "🔪",
    metaTitle: "Medical Billing for Ambulatory Surgery Centers | [Company Name]",
    metaDesc: "Specialized ASC billing including implant billing, multiple procedure reductions, and surgical coding expertise.",
    heroHeadline: "ASC Billing Built for Surgical Precision",
    heroSubheadline: "ASC fee schedule expertise, implant billing, multiple procedure reductions, and surgical coding by certified specialists — we know ASC revenue cycle inside and out.",
    challenges: [
      "ASC fee schedule and rate complexity",
      "Implant and DME billing alongside surgical codes",
      "Multiple procedure reduction rules",
      "Payer-specific prior authorization for procedures",
    ],
    solutions: [
      "Surgical coding by certified specialists",
      "Implant and DME billing management",
      "Prior auth coordination with surgery scheduling",
      "ASC-specific KPI reporting",
    ],
    keyServices: ["Medical Billing", "Medical Coding", "Prior Authorization", "Provider Credentialing"],
  },
};