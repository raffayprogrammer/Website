/* Section 7.2 — Industries Served full table (16 rows per spec).
   Maps each specialty to its unique billing challenges and recommended services. */
export type SpecialtyRow = {
  industry: string;
  challenges: string;
  services: string;
  /** Optional link to an individual industry page if one exists. */
  href?: string;
};

export const specialtyTable: SpecialtyRow[] = [
  { industry: "Primary Care & Family Medicine",   challenges: "E/M coding complexity, chronic care management billing, preventive care coding",     services: "Billing, Coding, Eligibility, RCM",            href: "/industries/physician-practices" },
  { industry: "Internal Medicine",                challenges: "Multi-system complexity, hospitalist billing, inpatient coding",                       services: "Billing, Coding, AR, Credentialing",           href: "/industries/physician-practices" },
  { industry: "Cardiology",                       challenges: "High-complexity procedures, catheterization lab, device billing",                      services: "Billing, Coding, Prior Auth, Denial Mgmt" },
  { industry: "Orthopedics & Sports Medicine",    challenges: "Surgical coding, global period management, DME billing",                              services: "Billing, Coding, Auth, AR" },
  { industry: "Behavioral Health & Psychiatry",   challenges: "H&B codes, telehealth billing, parity compliance",                                     services: "Billing, Coding, Credentialing, RCM",          href: "/industries/behavioral-health" },
  { industry: "Telehealth / Virtual Care",        challenges: "State-by-state billing rules, place of service codes, audio-only billing",            services: "Billing, Credentialing, Eligibility, Auth",    href: "/industries/telehealth" },
  { industry: "Urgent Care",                      challenges: "High volume, E/M coding, workplace injury billing",                                    services: "Billing, Coding, Eligibility, RCM",            href: "/industries/urgent-care" },
  { industry: "Radiology & Imaging",              challenges: "Technical vs. professional component, modality-specific codes",                       services: "Billing, Coding, Prior Auth" },
  { industry: "Physical Therapy & Rehabilitation",challenges: "Timed vs. untimed codes, functional limitation coding, cap exceptions",               services: "Billing, Auth, AR, Coding" },
  { industry: "Dermatology",                      challenges: "Destruction procedures, excision coding, cosmetic vs. medical",                       services: "Billing, Coding, Prior Auth" },
  { industry: "Gastroenterology",                 challenges: "Endoscopy coding, colonoscopy rules, anesthesia co-billing",                          services: "Billing, Coding, Auth, AR" },
  { industry: "OB/GYN",                           challenges: "Obstetric global periods, maternity bundling, gynecological procedures",              services: "Billing, Coding, RCM" },
  { industry: "Neurology",                        challenges: "Neurophysiology, EEG/EMG, headache management coding",                                services: "Billing, Coding, Prior Auth" },
  { industry: "Ambulatory Surgery Centers (ASC)", challenges: "ASC fee schedule, implant billing, multiple procedure reductions",                    services: "Billing, Coding, Credentialing, RCM",          href: "/industries/ambulatory-surgery" },
  { industry: "Hospitals & Health Systems",       challenges: "UB-04, DRG, revenue codes, charge master review",                                     services: "Billing, Coding, RCM, AR",                     href: "/industries/hospitals" },
  { industry: "FQHCs & Community Health Centers", challenges: "FQHC all-inclusive rate, grant-funded services, sliding fee scale",                   services: "Billing, RCM, Credentialing" },
];
