export const site = {
  brand: "Techordia",
  phone: "877-925-4785",
  email: "support@techordia.com",
  address: "887 Island Drive, Suite C, Alameda, CA 94502",
  tagline: "Managed IT services, cybersecurity, and compliance for Bay Area business.",
  description:
    "Techordia provides managed IT support, cybersecurity, Microsoft 365, cloud, backup, network, and project services from Alameda for Bay Area businesses.",
  logo: "assets/techordia-logo-official.png"
};

const serviceComponents = [
  ["IT Help Desk & User Support", "Responsive support for users, devices, applications, access, and everyday IT issues."],
  ["Monitoring & Preventative Maintenance", "Patch management, endpoint health, alerts, remediation, lifecycle planning, and reporting."],
  ["Cybersecurity & Threat Management", "Identity controls, endpoint protection, MFA, email security, risk reduction, and response support."],
  ["Microsoft 365 & Cloud Management", "Licensing, mailboxes, Teams, SharePoint, OneDrive, permissions, security, and collaboration."],
  ["Data Backup & Business Continuity", "Backup checks, recovery planning, continuity documentation, and practical restore readiness."],
  ["Network & Infrastructure Optimization", "Firewall, Wi-Fi, VPN, switching, routing, server, and cloud infrastructure support."],
  ["Compliance & Risk Management", "Security reviews, policy support, evidence readiness, access control, and audit preparation."],
  ["IT Strategy & Consulting", "Roadmaps, budgeting, lifecycle planning, vendor coordination, and technology alignment."]
];

const commonFaqs = [
  ["How quickly can Techordia get started?", "We start with a discovery call, review the environment, then build a practical onboarding plan based on risk, urgency, users, devices, and cloud systems."],
  ["How do users request support?", "Support can route through email, phone, remote sessions, ticketing, and escalation paths that fit the client."],
  ["Can Techordia work with internal IT?", "Yes. Co-managed support can add help desk capacity, project support, documentation, monitoring, security work, and specialist backup."],
  ["What areas does Techordia serve?", "Techordia is based in Alameda and supports Bay Area businesses plus remote and hybrid teams beyond California."]
];

const serviceCards = [
  {
    title: "Fully Managed IT Services",
    path: "services/fully-managed-it-services/",
    summary: "End-to-end IT ownership for users, devices, networks, cloud, vendors, security, and continuity.",
    cta: "Get Fully Managed IT"
  },
  {
    title: "Compliance Kickstarter Program",
    path: "services/compliance-kickstarter-program/",
    summary: "A focused readiness sprint for businesses preparing security controls, documentation, and audit evidence.",
    cta: "Start Compliance Readiness"
  },
  {
    title: "Co-Managed IT Services",
    path: "services/co-managed-it-services/",
    summary: "Capacity, tooling, and specialist support for internal IT teams that need a trusted MSP partner.",
    cta: "Get Co-Managed Support"
  },
  {
    title: "Short-Term IT Projects",
    path: "services/short-term-it-projects/",
    summary: "Planned execution for migrations, office moves, network upgrades, endpoint refreshes, and system rollouts.",
    cta: "Plan an IT Project"
  },
  {
    title: "Cybersecurity & Compliance",
    path: "services/cybersecurity-compliance/",
    summary: "Security controls, identity hardening, endpoint protection, backup readiness, risk reviews, and reporting.",
    cta: "Improve Security"
  }
];

const industryCards = [
  ["Artificial Intelligence", "services/ai-it-services/", "Secure collaboration, device control, access, cloud operations, and fast-moving technical teams."],
  ["Biotech and Health", "services/biotech-and-health-it-services/", "Security-first IT support for regulated workflows, sensitive data, and research operations."],
  ["Aerospace", "services/aerospace-it-services/", "Reliable infrastructure, access control, vendor coordination, and project support for precision teams."],
  ["Fintech & Crypto", "services/fintech-and-crypto-it-services/", "Security, identity, audit readiness, endpoint controls, and resilient cloud operations."],
  ["SaaS", "services/saas-it-services/", "Scalable IT operations for onboarding, offboarding, cloud collaboration, endpoint security, and growth."],
  ["Defense Tech", "services/defense-tech-it-services/", "Practical security operations, device management, documentation, and compliance preparation."]
];

const aboutCards = [
  ["Testimonials", "about/reviews/", "Client-style proof points and service outcomes without using private client names."],
  ["Clients and Partners", "about/clients-partners/", "The types of Bay Area organizations Techordia is built to support."],
  ["The Techordia Story", "about/story/", "A practical MSP built around responsive service, clear ownership, and security-minded operations."],
  ["Careers", "about/jobs/", "A team environment for people who like solving real client problems."],
  ["Team", "about/team/", "Founder Wilson Lee and a service model built around practical technical ownership."],
  ["Employee Stories", "about/employee-stories/", "How Techordia operators approach support, projects, security, and client trust."]
];

const resourceCards = [
  ["IT Case Studies & White Papers", "it-case-studies-white-papers/", "Original Techordia resource placeholders for security, migration, cloud, and support playbooks."],
  ["Blog", "blogs/", "Short operational guidance for Bay Area teams evaluating managed IT and security."],
  ["FAQs", "faqs/", "Common questions about Techordia services, contracts, pricing, support, and onboarding."],
  ["Free IT Resources", "resources/free-it-resources/", "Checklists and planning guides for MSP readiness, Microsoft 365, backup, and security."]
];

const locationCards = [
  ["San Francisco", "managed-it-services/locations/san-francisco/", "Managed IT and cybersecurity support for San Francisco businesses."],
  ["Bay Area", "managed-it-services/locations/bay-area/", "Local support for Alameda, Oakland, San Francisco, San Jose, and distributed teams."],
  ["San Jose", "managed-it-services/locations/san-jose/", "Operational IT support for South Bay teams and growth-stage businesses."]
];

const policyCards = [
  ["Terms of Service", "terms-of-service/", "Plain-language placeholders for future Techordia service terms."],
  ["Privacy Policy", "privacy-policy/", "A privacy page placeholder for website, contact, and service inquiry handling."],
  ["Disclosure", "disclosure/", "A disclosure page placeholder for site, security, and service information."],
  ["Trust and Security", "trust-and-security/", "A trust page for security practices, support controls, and client-safe commitments."]
];

export const navGroups = [
  { label: "Services", items: serviceCards.map(({ title, path }) => ({ title, path })) },
  { label: "Industries", items: industryCards.map(([title, path]) => ({ title, path })) },
  { label: "About", items: aboutCards.map(([title, path]) => ({ title, path })) },
  { label: "Resources", items: resourceCards.map(([title, path]) => ({ title, path })) }
];

export const footerGroups = [
  { label: "About Us", items: aboutCards.map(([title, path]) => ({ title, path })) },
  { label: "Services", items: serviceCards.map(({ title, path }) => ({ title, path })) },
  { label: "Industries", items: industryCards.map(([title, path]) => ({ title, path })) },
  { label: "Resources", items: [...resourceCards.map(([title, path]) => ({ title, path })), { title: "Existing Clients", path: "existing-clients/" }, { title: "Contact Us", path: "contact/" }] },
  { label: "Locations", items: locationCards.map(([title, path]) => ({ title, path })) }
];

export const homePage = {
  path: "",
  title: "Techordia | Managed IT Services, IT Support, IT Consulting",
  description: site.description,
  hero: {
    eyebrow: "Bay Area managed IT",
    title: "Managed IT, Security, and Cloud Support for Bay Area Teams.",
    text: "Get quality service from a local MSP your team can trust. Techordia supports Bay Area businesses with responsive help desk, secure cloud operations, and practical IT ownership.",
    primary: "Book Free Consultation",
    secondary: "See Our Services"
  },
  sections: {
    trustTitle: "Trusted by Bay Area teams that need IT to work.",
    serviceTitle: "Our IT Service Packages",
    whyTitle: "Why Businesses Choose Techordia",
    why: [
      ["Clear MSP Pricing", "Clear service scopes, practical rates, and no mystery around what your MSP is doing."],
      ["Predictable Support", "Structured onboarding, recurring maintenance, and clear escalation paths for your users."],
      ["Flexible Capacity", "Fully managed, co-managed, project-based, and security-focused support as your needs change."],
      ["Familiar Local Team", "A local team that learns your environment and keeps documentation tied to real operations."]
    ],
    testimonials: [
      ["Responsive, practical support", "Techordia helped stabilize support paths, cloud administration, and endpoint operations for a distributed team."],
      ["Security without theater", "The team focused on identity, access, backup, and documentation controls that made daily operations safer."],
      ["Clear ownership", "Projects moved faster because vendor coordination, device work, and Microsoft 365 tasks had a single accountable partner."]
    ]
  }
};

const baseServicePages = [
  {
    path: "services/fully-managed-it-services/",
    title: "Fully Managed IT Services | Techordia",
    h1: "Fully Managed IT Services",
    kicker: "Complete day-to-day ownership of your users, devices, networks, security, and support.",
    intro:
      "Techordia provides fully managed IT services for businesses that need dependable support without building a full internal IT department. We take ownership of users, devices, Microsoft 365, networks, security controls, vendors, and continuity planning.",
    packageTitle: "Fully Managed Services Package Details",
    components: serviceComponents,
    benefitsTitle: "IT Support Built for Bay Area Businesses",
    benefits: [
      ["Local and remote support", "Support for Alameda, Oakland, San Francisco, San Jose, and remote teams beyond the Bay Area."],
      ["Security included", "MFA, endpoint protection, access management, email safety, and practical backup readiness are built into operations."],
      ["Operational documentation", "We keep support notes, device records, access paths, and vendor details organized so work is repeatable."],
      ["Monthly improvement rhythm", "Monitoring, maintenance, reporting, lifecycle planning, and client check-ins keep the environment moving forward."]
    ],
    faqs: commonFaqs
  },
  {
    path: "services/compliance-kickstarter-program/",
    title: "Compliance Kickstarter Program | Techordia",
    h1: "Compliance Kickstarter Program",
    kicker: "A focused readiness sprint for teams preparing security controls, documentation, and evidence.",
    intro:
      "Techordia helps teams organize the IT side of compliance readiness: identities, endpoints, policies, backup, access control, evidence, and practical remediation.",
    packageTitle: "Compliance Readiness Package Details",
    components: [
      ["Readiness Roadmap", "Prioritize the controls, documentation, and remediation work needed for the next milestone."],
      ["Identity & Access Review", "Review MFA, administrative access, user lifecycle, groups, shared mailboxes, and cloud permissions."],
      ["Endpoint Security Baseline", "Assess device inventory, encryption, RMM coverage, endpoint protection, and patch posture."],
      ["Policy & Evidence Support", "Prepare operational evidence and security policy placeholders for review."],
      ["Backup & Recovery Review", "Check backup coverage, recovery expectations, and business continuity documentation."],
      ["Security Awareness", "Help define practical user training and phishing-resistant workflows."]
    ],
    benefitsTitle: "Designed for audit pressure without panic",
    benefits: [
      ["Clear priorities", "Know which IT gaps matter now and which can be sequenced later."],
      ["Evidence discipline", "Turn recurring IT operations into records that can support an audit or customer review."],
      ["Practical controls", "Focus on controls that improve security and support daily business operations."],
      ["MSP execution", "Use Techordia to help close gaps instead of only producing a report."]
    ],
    faqs: commonFaqs
  },
  {
    path: "services/co-managed-it-services/",
    title: "Co-Managed IT Services | Techordia",
    h1: "Co-Managed IT Services",
    kicker: "Collaborative IT management for internal teams that need capacity, tools, or specialist backup.",
    intro:
      "Techordia works alongside internal IT teams to provide overflow support, project execution, monitoring, documentation, Microsoft 365 administration, and security operations.",
    packageTitle: "Co-Managed Services Package Details",
    components: [
      ["Help Desk & Overflow Support", "Add capacity when your internal team is overloaded or needs escalation coverage."],
      ["Collaborative IT Management", "Define ownership boundaries so Techordia and internal IT operate from the same plan."],
      ["Monitoring & Maintenance", "Use RMM, alerts, patching, endpoint health, and recurring maintenance to reduce noise."],
      ["Security Operations", "Identity, endpoint, email, backup, and administrative controls supported by an MSP team."],
      ["Strategic Planning", "Roadmaps, lifecycle plans, documentation, and vendor support for leadership decisions."],
      ["Project Support", "Execute migrations, endpoint rollouts, network changes, and platform improvements."]
    ],
    benefitsTitle: "Benefits of Co-Managed IT Services",
    benefits: [
      ["More capacity", "Take pressure off internal IT without replacing the team."],
      ["Specialist access", "Bring in MSP experience across Microsoft 365, endpoint tools, networks, backup, and security."],
      ["Cleaner escalation", "Document ownership so users and technical teams know where work goes."],
      ["Flexible coverage", "Scale up for projects, peak work, onboarding, or recurring maintenance."]
    ],
    faqs: commonFaqs
  },
  {
    path: "services/short-term-it-projects/",
    title: "Short-Term IT Projects | Techordia",
    h1: "Short-Term IT Projects",
    kicker: "One-time IT execution for migrations, moves, upgrades, refreshes, and security improvements.",
    intro:
      "Techordia plans and executes focused IT projects with clear scope, coordination, testing, training, and post-project support.",
    packageTitle: "Short-Term Project Package Details",
    components: [
      ["Project Scoping", "Define goals, constraints, owners, timeline, prerequisites, and success criteria."],
      ["Microsoft 365 Changes", "Tenant, mailbox, SharePoint, Teams, OneDrive, licensing, and permission work."],
      ["Endpoint Refreshes", "New workstation setup, RMM coverage, remote support, security baseline, and user cutover."],
      ["Network Upgrades", "Firewall, Wi-Fi, VPN, switching, rack cleanup, and vendor coordination."],
      ["Office Moves", "Connectivity, workstations, printers, conference rooms, and go-live support."],
      ["Post-Project Support", "Documentation, handoff, remediation, and stabilization after launch."]
    ],
    benefitsTitle: "Project execution without derailing daily support",
    benefits: [
      ["Defined scope", "Know what is included, what is blocked, and what must happen before go-live."],
      ["Operational handoff", "Project work becomes usable documentation instead of tribal knowledge."],
      ["User-ready delivery", "Testing and support planning reduce disruption at cutover."],
      ["Vendor coordination", "Techordia can coordinate carriers, software vendors, hardware partners, and support teams."]
    ],
    faqs: commonFaqs
  },
  {
    path: "services/cybersecurity-compliance/",
    title: "Cybersecurity and Compliance | Techordia",
    h1: "Cybersecurity & Compliance",
    kicker: "Security controls, risk management, and compliance support built into daily IT operations.",
    intro:
      "Techordia helps businesses improve their security posture through identity controls, endpoint protection, email safety, backup readiness, risk reviews, and operational documentation.",
    packageTitle: "Cybersecurity and Compliance Package Details",
    components: [
      ["Identity Security", "MFA, administrative access, group membership, lifecycle reviews, and access documentation."],
      ["Endpoint Protection", "Device inventory, patching, endpoint security, encryption, RMM coverage, and remediation."],
      ["Email & Collaboration Safety", "Microsoft 365 security settings, mailbox controls, phishing risk, and permission reviews."],
      ["Backup & Continuity", "Backup coverage, restore readiness, and continuity documentation."],
      ["Risk Reviews", "Practical findings, remediation plans, and recurring improvement tracking."],
      ["Compliance Support", "Evidence readiness, policy support, and control implementation guidance."]
    ],
    benefitsTitle: "Security that improves operations",
    benefits: [
      ["Reduce avoidable risk", "Focus on controls that protect users, devices, email, cloud data, and administrative access."],
      ["Prepare for reviews", "Organize the evidence and documentation clients, auditors, or insurers ask for."],
      ["Keep it maintainable", "Security controls are managed in the same support rhythm as the rest of IT."],
      ["Make ownership clear", "Know who handles alerts, remediation, access requests, backup checks, and vendor escalations."]
    ],
    faqs: commonFaqs
  }
];

const industryPages = industryCards.map(([title, path, summary]) => ({
  path,
  title: `${title} IT Services | Techordia`,
  h1: `${title} IT Services`,
  kicker: summary,
  intro:
    "Techordia supports teams that need secure, responsive IT operations without slowing down the work. We adapt the support model around your users, devices, cloud tools, vendors, risk profile, and growth stage.",
  packageTitle: `${title} IT Support Details`,
  components: [
    ["User and Device Support", "Fast support for onboarding, offboarding, access, laptops, applications, and remote work."],
    ["Cloud Collaboration", "Microsoft 365, Teams, SharePoint, OneDrive, permissions, licensing, and collaboration controls."],
    ["Security Baseline", "MFA, endpoint protection, patching, backup, email safety, and administrative access reviews."],
    ["Vendor Coordination", "Coordinate software, hardware, ISP, carrier, SaaS, and specialty vendor escalations."],
    ["Documentation", "Keep workflows, devices, access paths, and support notes clear enough to operate from."],
    ["Roadmap Planning", "Plan lifecycle, budget, security, and project work around the pace of the business."]
  ],
  benefitsTitle: `Managed IT for ${title} teams`,
  benefits: [
    ["Flexible support", "Fully managed, co-managed, or project-based help depending on team maturity."],
    ["Security-minded operations", "Protect cloud identities, devices, data, and vendor access as the business grows."],
    ["Bay Area presence", "Local Alameda-based support with remote reach for hybrid teams."],
    ["Practical reporting", "Clear updates on support activity, risk, maintenance, and next steps."]
  ],
  faqs: commonFaqs
}));

const standardPages = [
  {
    path: "services/",
    title: "IT Services | Techordia",
    h1: "IT Service Packages",
    kicker: "Flexible support packages for managed IT, compliance, co-managed support, short-term projects, and cybersecurity.",
    intro: "Choose the service model that fits how your team operates today and where it is going next.",
    cards: serviceCards
  },
  {
    path: "about/story/",
    title: "The Techordia Story | Techordia",
    h1: "The Techordia Story",
    kicker: "A Bay Area MSP built around practical ownership, responsive support, and security-minded operations.",
    intro: "Founder Wilson Lee built Techordia around a simple belief: IT should make business easier, not harder. The service model is direct, operational, and focused on trust.",
    cards: [
      { title: "Local roots", path: "contact/", summary: "Techordia is based in Alameda and serves the Bay Area and beyond." },
      { title: "Operational focus", path: "services/fully-managed-it-services/", summary: "Support, documentation, security, and project work are handled as one system." },
      { title: "Security built in", path: "services/cybersecurity-compliance/", summary: "Identity, devices, backup, and cloud controls are part of daily IT operations." }
    ]
  },
  {
    path: "about/team/",
    title: "Team | Techordia",
    h1: "The Techordia Team",
    kicker: "Client support led by founder Wilson Lee and a practical MSP service model.",
    intro: "Use this page for team profiles as real photos and bios are approved. For now, it shows placeholders and the service roles clients expect.",
    people: [
      ["Wilson Lee", "Founder", "Responsive support, practical security, and technology operations clients can trust."],
      ["Service Desk", "Client Support", "Daily user support, ticket coordination, remote sessions, and documentation."],
      ["Project Team", "Infrastructure and Cloud", "Migrations, endpoint rollouts, Microsoft 365, network, and security projects."]
    ]
  },
  {
    path: "about/clients-partners/",
    title: "Clients and Partners | Techordia",
    h1: "Clients and Partners",
    kicker: "Techordia supports organizations that need responsive IT ownership without exposing private client names.",
    intro: "This page is structured like a client proof page while keeping client names private until approved for marketing.",
    cards: [
      { title: "Housing and public-sector-adjacent teams", path: "services/fully-managed-it-services/", summary: "Support for users, devices, cloud, phones, access, and documentation." },
      { title: "Professional services", path: "services/co-managed-it-services/", summary: "Reliable support, Microsoft 365 administration, and security-minded operations." },
      { title: "Growth-stage companies", path: "services/saas-it-services/", summary: "Scalable endpoint, onboarding, cloud, and vendor operations." }
    ]
  },
  {
    path: "about/reviews/",
    title: "Testimonials | Techordia",
    h1: "Testimonials",
    kicker: "Representative service outcomes for Techordia-style MSP work.",
    intro: "Replace these placeholders with approved client quotes when available.",
    testimonials: homePage.sections.testimonials
  },
  {
    path: "about/jobs/",
    title: "Careers | Techordia",
    h1: "Careers",
    kicker: "Help Bay Area teams solve real IT problems with practical service and clear ownership.",
    intro: "This placeholder careers page keeps the hiring area ready while role details are finalized.",
    cards: [
      { title: "Support Specialist", path: "contact/", summary: "Remote and onsite support, ticket ownership, documentation, and user communication." },
      { title: "Systems Engineer", path: "contact/", summary: "Microsoft 365, endpoint tools, networking, backup, security, and project execution." },
      { title: "Client Success", path: "contact/", summary: "Service reviews, documentation quality, client communication, and operational follow-through." }
    ]
  },
  {
    path: "about/employee-stories/",
    title: "Employee Stories | Techordia",
    h1: "Employee Stories",
    kicker: "How Techordia approaches support, projects, security, and client trust.",
    intro: "Use this page for future team stories. The current content explains the operator mindset behind the service.",
    cards: [
      { title: "Support with context", path: "services/fully-managed-it-services/", summary: "Good support is faster when the MSP knows the environment and documents the fix." },
      { title: "Projects with handoff", path: "services/short-term-it-projects/", summary: "Project work should leave the client easier to support afterward." },
      { title: "Security as habit", path: "services/cybersecurity-compliance/", summary: "Security is strongest when it is built into normal operations." }
    ]
  },
  {
    path: "it-case-studies-white-papers/",
    title: "IT Case Studies and White Papers | Techordia",
    h1: "IT Case Studies & White Papers",
    kicker: "Editable placeholders for Techordia resources, playbooks, and client-safe case studies.",
    intro: "This page is ready for future resources on Microsoft 365 migrations, security baselines, endpoint operations, backup readiness, and MSP onboarding.",
    cards: [
      { title: "Microsoft 365 migration readiness", path: "resources/free-it-resources/", summary: "A planning framework for mailboxes, files, permissions, identities, and cutover support." },
      { title: "Security baseline checklist", path: "services/cybersecurity-compliance/", summary: "Identity, endpoint, backup, email, and administrative control priorities." },
      { title: "Managed IT onboarding guide", path: "services/fully-managed-it-services/", summary: "What to collect before bringing a new MSP into the environment." }
    ]
  },
  {
    path: "blogs/",
    title: "Blog | Techordia",
    h1: "Blog",
    kicker: "Practical IT operations guidance for Bay Area businesses.",
    intro: "Use this page for short posts about managed IT, cybersecurity, Microsoft 365, cloud, backup, and user support.",
    cards: [
      { title: "What to expect from a local MSP", path: "services/fully-managed-it-services/", summary: "Support paths, onboarding, documentation, security, reporting, and recurring maintenance." },
      { title: "When co-managed IT makes sense", path: "services/co-managed-it-services/", summary: "How internal IT teams use an MSP for capacity, tooling, and specialist support." },
      { title: "Security controls that matter first", path: "services/cybersecurity-compliance/", summary: "MFA, device coverage, patching, backup, access reviews, and email safety." }
    ]
  },
  {
    path: "resources/free-it-resources/",
    title: "Free IT Resources | Techordia",
    h1: "Free IT Resources",
    kicker: "Checklists and planning guides for IT decision makers.",
    intro: "Downloadable assets can be added here later. For now, these are editable resource cards.",
    cards: [
      { title: "MSP readiness checklist", path: "services/fully-managed-it-services/", summary: "Users, devices, vendors, cloud tools, access paths, and support expectations." },
      { title: "Microsoft 365 security checklist", path: "services/cybersecurity-compliance/", summary: "MFA, admin accounts, mailbox controls, SharePoint permissions, and device security." },
      { title: "Project cutover checklist", path: "services/short-term-it-projects/", summary: "Scope, prerequisites, users, rollback, testing, documentation, and support coverage." }
    ]
  },
  {
    path: "faqs/",
    title: "FAQs | Techordia",
    h1: "Frequently Asked Questions",
    kicker: "Find answers about Techordia services, support, contracts, pricing, and scalability.",
    intro: "Browse common questions about how Techordia works with managed and co-managed clients.",
    faqGroups: [
      ["General Questions", commonFaqs],
      ["Services", [
        ["What services are included?", "Managed IT can include help desk, monitoring, patching, Microsoft 365, network support, backup, vendor coordination, security controls, and project work."],
        ["Do you provide onsite support?", "Yes. Techordia is based in Alameda and can support local Bay Area work where onsite help is needed."],
        ["Do you support Microsoft 365?", "Yes. Microsoft 365 administration, Exchange, Teams, SharePoint, OneDrive, licensing, security, and permissions are common Techordia work."]
      ]],
      ["Contract and Pricing", [
        ["How are services priced?", "Pricing depends on users, devices, tools, risk, scope, and service model. The consultation is used to define the right package."],
        ["Do you offer project-only work?", "Yes. Short-term IT projects can be scoped independently from recurring managed services."],
        ["Can services scale?", "Yes. Techordia can support fully managed, co-managed, project, and cybersecurity-focused engagements."]
      ]]
    ]
  },
  {
    path: "existing-clients/",
    title: "Existing Clients | Techordia",
    h1: "Existing Clients",
    kicker: "Support paths for current Techordia clients.",
    intro: "For new support requests, email support@techordia.com or call 877-925-4785. This page can later link to ticketing, remote support, and client resources.",
    cards: [
      { title: "Email Support", path: "mailto:support@techordia.com", summary: "Send user issues, access requests, and service questions to support@techordia.com." },
      { title: "Call Support", path: "tel:+18779254785", summary: "Call 877-925-4785 for urgent support or escalation." },
      { title: "Remote Support", path: "contact/", summary: "Remote session links and client-specific instructions can be added here." }
    ]
  },
  {
    path: "contact/",
    title: "Contact Techordia | Managed IT Services",
    h1: "IT That Works As Hard As You Do.",
    kicker: "Whether you are exploring options or ready to take action, Techordia is ready to help.",
    intro: "No pushy sales pitch. Start with a practical conversation about users, devices, cloud systems, security risk, and the support outcomes you need.",
    contact: true
  },
  {
    path: "contact-us/",
    title: "Contact Techordia | Managed IT Services",
    h1: "IT That Works As Hard As You Do.",
    kicker: "Whether you are exploring options or ready to take action, Techordia is ready to help.",
    intro: "No pushy sales pitch. Start with a practical conversation about users, devices, cloud systems, security risk, and the support outcomes you need.",
    contact: true
  },
  ...policyCards.map(([title, path, summary]) => ({
    path,
    title: `${title} | Techordia`,
    h1: title,
    kicker: summary,
    intro: "This page is an editable placeholder and should be reviewed before using it as formal legal, privacy, or security policy content.",
    cards: [
      { title: "Current status", path: "contact/", summary: "Placeholder content is present so the page exists in the site structure." },
      { title: "Review needed", path: "contact/", summary: "Replace with approved Techordia language before relying on it for policy or legal use." },
      { title: "Contact Techordia", path: "contact/", summary: "For questions, contact Techordia directly at support@techordia.com or 877-925-4785." }
    ]
  })),
  ...locationCards.map(([title, path, summary]) => ({
    path,
    title: `Managed IT Services in ${title} | Techordia`,
    h1: `Managed IT Services in ${title}`,
    kicker: summary,
    intro: "Techordia provides responsive managed IT, cybersecurity, Microsoft 365, cloud, network, backup, and project support for local and distributed teams.",
    cards: serviceCards
  }))
];

export const allPages = [
  homePage,
  ...baseServicePages,
  ...industryPages,
  ...standardPages
];

export { serviceCards, industryCards, aboutCards, resourceCards, locationCards, policyCards, serviceComponents, commonFaqs };
