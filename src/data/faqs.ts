export type Faq = { q: string; a: string };

export const faqsByCategory: Record<string, Faq[]> = {
  "Pricing & Contracts": [
    {
      q: "How much does medical billing outsourcing cost?",
      a: "Our pricing is performance-based, typically ranging from 2%–8% of net monthly collections depending on specialty, claim volume, and services included. We also offer per-claim and flat-rate models. All pricing is discussed after a free audit. There are no setup fees, hidden charges, or surprise invoices.",
    },
    {
      q: "Are there long-term contracts?",
      a: "We offer flexible, month-to-month agreements for most clients. We earn your business through results — not contract lock-ins. Enterprise and hospital clients may have custom agreement structures.",
    },
    {
      q: "What is included in the monthly fee?",
      a: "Claim preparation and submission, payment posting, denial management and appeals, patient billing, AR follow-up, a dedicated account manager, real-time reporting dashboard, EHR integration maintenance, and monthly performance reviews. We do not charge extra for these core services.",
    },
    {
      q: "Is there a setup fee?",
      a: "No. We do not charge implementation or setup fees. Our investment in onboarding you is part of our commitment to a long-term partnership.",
    },
  ],
  "Billing Process & Turnaround": [
    {
      q: "How quickly do you submit claims?",
      a: "We submit clean claims within 24–48 hours of receiving encounter documentation, depending on your specialty and documentation complexity.",
    },
    {
      q: "What is your first-pass acceptance rate?",
      a: "Our average first-pass clean claim rate is 95%+. The industry average is approximately 85%. A higher clean claim rate means faster payments and fewer denials.",
    },
    {
      q: "How long does it take to see results after switching?",
      a: "Most clients see measurable improvements in denial rate and collection rate within the first 30–60 days. Significant AR improvement is typically visible within 90 days.",
    },
    {
      q: "What happens to my existing unpaid claims when I switch?",
      a: "We conduct a full AR takeover analysis and pursue all active, billable claims — including aged receivables from prior to our engagement, subject to timely filing limits.",
    },
    {
      q: "How do I know what you're working on?",
      a: "Our real-time client dashboard gives you 24/7 visibility into claims status, payments, denials, AR aging, and performance KPIs. You never have to wonder what's happening with your revenue.",
    },
  ],
  "HIPAA & Data Security": [
    {
      q: "Are you HIPAA compliant?",
      a: "Yes, completely. HIPAA compliance is built into every system, workflow, and employee practice. We sign a BAA with every client before exchanging any PHI, and we maintain annual HIPAA training, risk assessments, and third-party security audits.",
    },
    {
      q: "How is patient data protected?",
      a: "Patient data is protected with 256-bit AES encryption at rest and in transit, multi-factor authentication, role-based access controls, and complete audit trail logging. Our infrastructure is SOC 2 Type II compliant.",
    },
    {
      q: "Do you sign a Business Associate Agreement (BAA)?",
      a: "Yes. A signed BAA is a required first step before we access any of your patient data or begin billing operations. No exceptions.",
    },
    {
      q: "What happens if there is a data breach?",
      a: "We have a documented incident response plan compliant with HIPAA Breach Notification Rule requirements. We notify affected parties within 72 hours of discovery and provide full breach documentation and remediation support.",
    },
  ],
  "Integrations & Technology": [
    {
      q: "Do you work with my EHR system?",
      a: "We integrate with 50+ EHR and practice management systems including Epic, Cerner, Athenahealth, eClinicalWorks, Kareo, DrChrono, NextGen, Practice Fusion, Meditech, and many others. If you use a system not on our list, contact us — we can likely accommodate it.",
    },
    {
      q: "Will switching billing companies disrupt my current workflow?",
      a: "No. Our onboarding process is designed to be transparent and non-disruptive. Most practices are fully transitioned within 5–7 business days with no gaps in claims submission.",
    },
    {
      q: "Do you have a client portal or dashboard?",
      a: "Yes. Every client receives access to our real-time analytics dashboard with claims tracking, AR aging, denial trends, collection rates, and financial performance metrics — accessible 24/7 from any device.",
    },
  ],
  "Denial Management & AR": [
    {
      q: "What is your denial rate?",
      a: "Our clients typically maintain denial rates under 5%. The national industry average is 10–15%. Our proactive claim scrubbing, real-time eligibility checks, and specialty-specific coding reduce denials before they occur.",
    },
    {
      q: "Do you manage claim appeals?",
      a: "Yes. Denial management and appeals are included in our standard service. We prepare and submit specialty-specific appeal letters, track appeal status, and escalate to peer-to-peer reviews when necessary.",
    },
    {
      q: "Do you handle aged AR / legacy billing?",
      a: "Yes. We accept AR recovery engagements for aged receivables. We analyze your AR aging, prioritize by collectibility and timely filing deadlines, and systematically work through all recoverable balances.",
    },
  ],
  "Specialties & Industries": [
    {
      q: "What specialties do you support?",
      a: "We support 30+ medical specialties including primary care, cardiology, orthopedics, behavioral health, telehealth, dermatology, gastroenterology, neurology, OB/GYN, pediatrics, radiology, physical therapy, urgent care, ambulatory surgery centers, hospitals, and FQHCs.",
    },
    {
      q: "Do you have experience with behavioral health billing?",
      a: "Yes. Behavioral health billing requires expertise in mental health parity compliance, H&B code usage, telehealth billing rules, and substance use disorder coding. We have a dedicated behavioral health billing team.",
    },
    {
      q: "Can you handle telehealth billing?",
      a: "Absolutely. We specialize in telehealth billing including place of service code selection, audio-only billing, state-specific telehealth coverage rules, and interstate compact credentialing.",
    },
  ],
  Coding: [
    {
      q: "Are your coders certified?",
      a: "Yes. All our coders hold current certifications from AAPC (CPC, COC, CIC, CRC) or AHIMA (CCS, RHIA, RHIT). We also require specialty-specific coding credentials for complex areas.",
    },
    {
      q: "How do you ensure coding accuracy?",
      a: "We use a dual-coding QA process for complex cases, regular internal coding audits, continuous education on code updates, and a feedback loop to coding staff. Our coding accuracy rate averages 98.5%+.",
    },
    {
      q: "Do you handle ICD-10-CM, CPT, and HCPCS coding?",
      a: "Yes. We handle all code sets including ICD-10-CM (diagnosis), CPT (procedure), HCPCS Level II (supplies, drugs, DME), modifiers, and risk adjustment (HCC) coding for value-based care programs.",
    },
  ],
  Credentialing: [
    {
      q: "How long does provider credentialing take?",
      a: "Timelines vary by payer: Medicare typically 45–60 days, commercial payers 60–90 days. We actively follow up to minimize delays and provide status updates throughout the process.",
    },
    {
      q: "Do you credential with all insurance companies?",
      a: "We credential with Medicare, Medicaid, all major commercial payers (BCBS, UHC, Aetna, Cigna, Humana), and specialty payers. We can also assist with TRICARE and workers' compensation enrollment.",
    },
  ],
  "Reporting & Communication": [
    {
      q: "How often do I receive performance reports?",
      a: "You receive real-time dashboard access 24/7. In addition, your dedicated account manager provides a formal monthly performance review call with detailed KPI analysis and recommendations.",
    },
    {
      q: "Who is my primary contact?",
      a: "Every client is assigned a named, dedicated account manager who is your direct point of contact for all questions, escalations, and strategy discussions.",
    },
    {
      q: "What is your response time for questions or issues?",
      a: "We commit to responding to all client inquiries within 2 business hours during standard business hours. Urgent matters have an escalation path to senior management.",
    },
    {
      q: "Do you provide year-end reports for tax and audit purposes?",
      a: "Yes. We provide comprehensive year-end billing summaries, payer-specific collection reports, and audit-ready documentation upon request.",
    },
    {
      q: "Can I switch back to in-house billing if needed?",
      a: "Yes. We provide a complete data export and transition support package if you ever decide to change your billing model. Your data is always yours.",
    },
  ],
};