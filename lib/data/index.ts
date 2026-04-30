export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  aspectRatio: "video" | "square";
  link?: string; // Added
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  problem: string;
  impact: string;
  categories: string[];
  link?: string; // Added
}

export interface Expertise {
  title: string;
  skills: string[];
}

export interface Leadership {
  title: string;
  category: string;
  description: string;
  points: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  metrics?: { value: string; label: string }[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  honors?: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Strategy", href: "#strategy" },
  { label: "Career", href: "#career" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "balancee",
    title: "Balanceè",
    category: "Fintech • Mobility",
    description:
      "A unified ecosystem for vehicle services and fuel transactions, scaling from a web tool to a multi-platform fintech engine.",
    image: "/images/balancee.webp",
    tags: ["Fintech Systems", "Scalable Architecture", "AI Chatbots"],
    aspectRatio: "video",
    link: "https://business.balancee.app/",
  },
  {
    id: "urbangrip",
    title: "UrbanGrip",
    category: "IoT • Hardware Integration",
    description:
      "Developed an IoT-enabled smart backpack featuring biometric locking, GPS tracking, and integrated power systems.",
    image: "/images/urban-grip.webp",
    tags: ["IoT Systems", "Product Strategy", "Hardware-Software Integration"],
    aspectRatio: "video",
  },
  {
    id: "helpaa",
    title: "Helpaa",
    category: "AI • Marketplace",
    description:
      "A skills-based job marketplace utilizing AI-driven tools for automated job description generation and summarization.",
    image: "/images/heppa.webp",
    tags: ["AI Integration", "Marketplace Systems", "UX Strategy"],
    aspectRatio: "square",
  },
  {
    id: "afribite",
    title: "Afribite",
    category: "Logistics • FoodTech",
    description:
      "Niche food delivery platform connecting users to authentic African dishes, focusing on vendor onboarding and logistics.",
    image: "/images/affribite.webp",
    tags: ["Market Analysis", "Logistics", "Product Thinking"],
    aspectRatio: "video",
  },
  {
    id: "ladylog",
    title: "Lady Log",
    category: "HealthTech • Wellness",
    description:
      "User-centered health platform supporting women trying to conceive through cycle tracking and fertility insights.",
    image: "/images/lady-log.webp",
    tags: ["HealthTech Research", "UX Design", "User Journey Mapping"],
    aspectRatio: "video",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "balancee",
    title: "Balanceè",
    subtitle: "Fintech & Mobility Ecosystem",
    description:
      "Scaling a fragmented web platform into a unified multi-product ecosystem processing high-volume transactions.",
    image: "/images/balancee-1.webp",
    problem:
      "Managing fragmented systems for vehicle services and fuel delivery led to manual verification bottlenecks and potential revenue leakage.",
    impact:
      "Led transition to a multi-product ecosystem achieving 1,000+ downloads and scaling transactions to over ₦100M.",
    categories: ["Fintech", "SaaS", "Mobility"],
  },
];

export const expertise: Expertise[] = [
  {
    title: "Product Management",
    skills: [
      "Product Lifecycle",
      "Roadmapping",
      "PRD Writing",
      "Feature Prioritization",
    ],
  },
  {
    title: "Technical & Systems",
    skills: [
      "System Design",
      "API Thinking",
      "IoT/Hardware Integration",
      "Data Analytics (SQL)",
    ],
  },
  {
    title: "Business & UX",
    skills: [
      "GTM Planning",
      "Monetization Strategy",
      "User Research",
      "Usability Thinking",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Balanceè",
    role: "Product Manager",
    period: "Sept 2024 – Present",
    achievements: [
      "Led transition from web-only to multi-product ecosystem (Mobile, SaaS, Fintech).",
      "Introduced AI chatbot for quotation analysis and car service insights.",
      "Unified fragmented systems serving businesses, staff, and customers.",
    ],
    metrics: [
      { value: "1,000+", label: "App Downloads" },
      { value: "₦100M+", label: "Processed Volume" },
    ],
  },
  {
    company: "UrbanGrip",
    role: "Product Manager",
    period: "July 2024 – April 2025",
    achievements: [
      "Led end-to-end development of IoT-enabled smart backpack from concept to prototype.",
      "Managed biometric lock, GPS tracking, and power integration features.",
      "Collaborated with industrial and textile designers for product structure.",
    ],
  },
  {
    company: "Helpaa",
    role: "Product Manager",
    period: "2026 – Present",
    achievements: [
      "Co-building a skills-based marketplace with automated job description generation.",
      "Proposed AI-driven post summarization to reduce application friction.",
      "Designed unified product flows for both job seekers and employers.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Obafemi Awolowo University",
    degree: "B.Sc. International Relations",
    period: "2019 – 2024",
    honors: "Best Graduating Student in Nigerian Foreign Policy I & II",
  },
  {
    school: "HerTechTrail Foundation",
    degree: "Product Management (Pro & Starter)",
    period: "2023 – 2025",
  },
];

// Update the stats to include your 70+ deployments
export const stats: Stat[] = [
  { value: "₦100M+", label: "Processed Transactions" },
  { value: "1,000+", label: "App Downloads" },
  { value: "70+", label: "Student Elections Deployed" },
];

export const leadership: Leadership[] = [
  {
    title: "Julianah Folake Foundation (JFF)",
    category: "Founder & Lead • 2024 – Present",
    description:
      "Driving high-impact interventions to improve educational access for underserved children through independent funding and execution.",
    points: [
      "Directly funded education for 7 children to ensure academic continuity.",
      "Led transportation outreach programs to remove physical barriers to school attendance.",
      "Built and managed initiative operations from strategic planning to field execution.",
    ],
  },
  {
    title: "Evavote (E-Voting System)",
    category: "Product Manager Intern • 2022 – 2024",
    description:
      "Led the coordination of a secure digital voting platform deployed for transparent university elections.",
    points: [
      "Successfully deployed across 70+ student elections, including postgraduate levels.",
      "Managed live beta testing phase to ensure system reliability and fraud prevention.",
      "Integrated unique ID verification using verified student email systems.",
    ],
  },
  {
    title: "5.0 Student Committee",
    category: "Planning Committee Member • 2023",
    description:
      "Coordinated large-scale career development events for the student body.",
    points: [
      "Managed physical and virtual sessions for over 1,000+ attendees.",
      "Collaborated on speaker sessions and logistics for post-university pathway guidance.",
    ],
  },
];
