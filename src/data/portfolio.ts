/**
 * All site content lives here. Edit this file to update the portfolio.
 * Components only read from these exports, so you never need to touch them.
 */

export type Profile = {
  /** Full legal name, used in metadata and the footer. */
  fullName: string;
  /** Short name shown in the header. */
  displayName: string;
  location: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  /** Path under /public. */
  photo: string;
  /**
   * Optional second photo under /public, swapped in when dark mode is on.
   * Leave it out to use `photo` in both themes.
   */
  photoDark?: string;
  photoAlt: string;
  /** Path under /public to the downloadable resume PDF. */
  resume: string;
};

export type TechGroup = {
  group: string;
  items: string[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
};

export type Highlight = {
  title: string;
  org: string;
  date: string;
  kind: "leadership" | "certificate";
  /**
   * Path to an image under /public/certificates/. When set, the card becomes
   * clickable and the image is shown in a modal.
   */
  image?: string;
  /**
   * Path to a PDF under /public/certificates/. When set, the modal shows a
   * "View original" button that opens the PDF in a new tab.
   */
  pdf?: string;
  /** One or two lines of context shown under the image in the modal. */
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  org?: string;
  /** One line shown on the card. */
  summary: string;
  /** Bullet points shown in the modal. */
  details: string[];
  tags: string[];
  link?: string;
};

export type GalleryImage = {
  /** Path under /public. */
  src: string;
  alt: string;
};

export const siteMeta = {
  /** Set NEXT_PUBLIC_SITE_URL in Vercel to override this. */
  url: "https://kylepanganiban.vercel.app",
  title: "Kyle Panganiban | Full-Stack Developer & Automation Engineer",
  description:
    "Portfolio of Kyle Panganiban, a Computer Science student from Cavite, Philippines who builds full-stack web apps, automation pipelines, and AI-assisted systems.",
  keywords: [
    "Kyle Panganiban",
    "Full-Stack Developer",
    "Automation Engineer",
    "Next.js",
    "Google Apps Script",
    "Cavite",
    "Philippines",
  ],
};

export const profile: Profile = {
  fullName: "Kyle Cedric R. Panganiban",
  displayName: "Kyle Panganiban",
  location: "Cavite, Philippines",
  title: "Full-Stack Developer & Automation Engineer",
  email: "kylecedricpanganiban@gmail.com",
  linkedin: "https://www.linkedin.com/in/kyle-panganiban/",
  github: "https://github.com/ellykk",
  photo: "/profile.jpg",
  photoDark: "/profile-dark.jpg",
  photoAlt: "Portrait of Kyle Panganiban",
  resume: "/resume.pdf",
};

export const about: string[] = [
  "I am a BS Computer Science student at De La Salle University Dasmariñas and a consistent Dean's Lister with a 3.50 GPA. I like taking ideas from a rough sketch to something people can actually use.",
  "Most of my work sits between full-stack web apps, business process automation, and AI-assisted systems. I enjoy finding the slow, repetitive parts of a workflow and quietly making them disappear.",
  "Outside of class, I serve as Director of the Technical Committee at the DLSUD Computer Science Program Council, where I lead the tech behind our live-streamed events.",
];

export const techStack: TechGroup[] = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    group: "Web & Backend",
    items: ["Next.js", "Hono", "Drizzle ORM", "Tailwind CSS", "Supabase", "Redis"],
  },
  {
    group: "Automation & Data",
    items: [
      "Google Apps Script",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "REST APIs",
      "OAuth2",
    ],
  },
  {
    group: "Tools & DevOps",
    items: ["Git", "GitHub", "Turborepo", "Bun", "Vercel", "Husky", "Figma"],
  },
];

export const currentFocus = {
  text: "Right now I am sharpening my skills in shipping production-ready web apps, building automation that saves teams real hours, and designing AI systems with sensible cost controls.",
  tags: [
    "Full-Stack Development",
    "Process Automation",
    "AI Systems",
    "Live Event Tech",
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Solutions Development Intern",
    org: "Eskwelabs",
    period: "2026",
  },
  {
    role: "Business Process Automation Intern",
    org: "Globe Telecom",
    period: "June 2026 – September 2026",
  },
  {
    role: "Director, Technical Committee",
    org: "DLSUD Computer Science Program Council",
    period: "Nov 2025 – 2027",
  },
  {
    role: "BS Computer Science",
    org: "De La Salle University Dasmariñas",
    period: "2023 – 2027",
  },
];

export const highlights: Highlight[] = [
  {
    title: 'Co-presenter, "AI Can Write the Code. Can It Design It?" webinar',
    org: "Eskwelabs",
    date: "2026",
    kind: "leadership",
    image: "/certificates/eskwelabs-webinar.jpg",
    description:
      "Co-presented a public webinar on where AI-generated code stops and human design judgment has to take over.",
  },
  {
    title: "Tech Team Lead, Back to BasiCS & AI Conference 2026",
    org: "DLSUD",
    date: "2026",
    kind: "leadership",
    image: "/certificates/back-to-basics-2026.jpg",
    description:
      "Led the technical team behind the conference: live stream, audio, and on-stage playback across the full program.",
  },
  {
    title: "Fundamentals of Git & GitHub",
    org: "DOST",
    date: "Nov 2025",
    kind: "certificate",
    image: "/certificates/dost-git-github.jpg",
    pdf: "/certificates/dost-git-github.pdf",
    description:
      "DOST training on version control fundamentals, branching, and collaborative workflows on GitHub.",
  },
  {
    title: "JavaScript Essentials 1",
    org: "Cisco",
    date: "May 2025",
    kind: "certificate",
    image: "/certificates/cisco-javascript-essentials-1.jpg",
    pdf: "/certificates/cisco-javascript-essentials-1.pdf",
    description:
      "Cisco Networking Academy course covering core JavaScript syntax, data types, functions, and DOM basics.",
  },
  {
    title: "TOEIC English Proficiency",
    org: "DLSUD",
    date: "Mar 2026",
    kind: "certificate",
    image: "/certificates/toeic.jpg",
    pdf: "/certificates/toeic.pdf",
    description:
      "Test of English for International Communication, taken through De La Salle University Dasmariñas.",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-advisor-platform",
    title: "AI Advisor Platform",
    org: "Eskwelabs",
    summary:
      "Cost-governed AI mentoring platform serving around 100 users across 3 advisors.",
    details: [
      "Built a prompt pipeline that pulls advisor instructions straight from Google Docs, so non-engineers can tune behavior without a deploy.",
      "Added Redis caching to cut repeated model calls and keep response times snappy.",
      "Implemented per-user spend caps so usage stays predictable and within budget.",
    ],
    tags: ["Next.js", "Hono", "Supabase", "Redis"],
  },
  {
    slug: "fellowship-alumni-network",
    title: "Fellowship Alumni Network",
    org: "Eskwelabs",
    summary:
      "Platform connecting fellowship alumni with mentors and peers.",
    details: [
      "Wrote the product requirements document that framed the scope and user flows.",
      "Supported feature development across the Next.js front end and the Drizzle-backed data layer.",
    ],
    tags: ["Next.js", "TypeScript", "Drizzle"],
  },
  {
    slug: "executive-reporting-automation",
    title: "Executive Reporting Automation",
    org: "Globe Telecom",
    summary:
      "Apps Script pipeline that turns spreadsheet exports into executive-ready Google Slides.",
    details: [
      "Replaced a manual weekly process that took about 6 hours with a run that finishes in roughly 4 minutes.",
      "Generates charts, tables, and commentary slides directly from the source spreadsheets.",
    ],
    tags: ["Google Apps Script", "Google Slides"],
  },
  {
    slug: "utility-billing-verification",
    title: "Utility Billing Verification",
    org: "Globe Telecom",
    summary:
      "AI-powered data extraction for more than 20,000 auto-debit accounts.",
    details: [
      "Automated extraction and validation of billing data that was previously reviewed by hand.",
      "Saves the team around 40 hours of manual review every week.",
    ],
    tags: ["Apps Script", "AI", "Automation"],
  },
  {
    slug: "spontrip",
    title: "Spontrip",
    summary: "Mood-based place recommendation web app.",
    details: [
      "Suggests places to visit based on how you are feeling, using a lightweight machine learning model.",
      "Built as a way to learn end-to-end model training and serving.",
    ],
    tags: ["Python", "ML"],
  },
  {
    slug: "dishcovery",
    title: "Dishcovery",
    summary:
      "Recipe finder web app using a public API with filtering and favorites.",
    details: [
      "Search and filter recipes by ingredients and dietary preferences.",
      "Save favorites locally so they persist between visits.",
    ],
    tags: ["JavaScript", "REST API"],
  },
];

export const gallery: GalleryImage[] = [
  {
    src: "/gallery/1.jpg",
    alt: "Awardees holding certificates and medals at the CICS Code of Excellence Awards.",
  },
  {
    src: "/gallery/2.jpg",
    alt: "CICS men's volleyball team poster for Animo Cup 2026.",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Volunteers at the SpeciFi specialization fair booth.",
  },
  {
    src: "/gallery/4.jpg",
    alt: "Tech team working on laptops at the International Conference on Artificial Intelligence.",
  },
  {
    src: "/gallery/5.jpg",
    alt: "CSPC officers at the Panimola freshman orientation booth.",
  },
  {
    src: "/gallery/6.jpg",
    alt: "Team photo with shirts and caps at the Globe AIC Make Time for PLAI event.",
  },
];
