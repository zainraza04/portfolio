export type ProjectType = "Frontend" | "Full Stack" | "Backend";

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  features: string[];
  techStack: string[];
  type: ProjectType;
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: "yupup-vendor-portal",
    title: "YupUp Business App",
    description:
      "A vendor workspace for a service marketplace, helping businesses manage orders, appointments, promotions, payments, and customer conversations in one place.",
    role: "Frontend Development · Product Delivery",
    features: [
      "Real-time analytics dashboard with revenue, sales, customer, and appointment metrics",
      "Stripe Connect onboarding and payment method management",
      "Real-time messaging with Socket.io presence and Firebase push notifications",
      "Order and appointment management with multi-location Google Maps profiles",
    ],
    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Socket.io",
      "Stripe",
    ],
    type: "Frontend",
    caseStudySlug: "yupup",
  },
  {
    id: "neblo-ai",
    title: "Neblo AI",
    description:
      "A transportation management platform connecting brokers and carriers through load management, live tracking, dispatch workflows, messaging, and billing.",
    role: "Frontend Architecture · Product Development",
    features: [
      "Load board and marketplace with DAT integration and recent search persistence",
      "Live vehicle tracking on Mapbox GL maps with Supercluster geographic clustering",
      "AI dispatcher inbox for load matching and dispatch review workflows",
      "Role-based multi-tenancy with 10+ roles and company-context switching",
    ],
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Mapbox GL",
      "WebSockets",
    ],
    type: "Frontend",
    caseStudySlug: "neblo-ai",
  },
  {
    id: "dignifyx-admin-hub",
    title: "DignifyX Admin Hub",
    description:
      "A multi-tenant administration platform where operators and customer organizations manage users, teams, learning content, access, and reporting.",
    role: "Frontend Lead · UI Architecture",
    features: [
      "Role-based portals with protected nested routes for four distinct personas",
      "Bulk user and access workflows with outcome feedback modals",
      "Operational reports with filters, breadcrumbs, and drill-down navigation",
      "Learning module with TinyMCE course authoring and code-split lazy routes",
    ],
    techStack: [
      "React",
      "Vite",
      "RTK Query",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
    ],
    type: "Frontend",
    caseStudySlug: "dignifyx",
  },
  {
    id: "ai-and-u",
    title: "AI & U (SellersGPT)",
    description:
      "A consumer product that helps sellers discover, compare, save, and review AI tools, software, and marketplaces across localized experiences.",
    role: "Full-Stack Development · Frontend Architecture",
    features: [
      "Locale-aware product catalog with reviews, pricing, and alternatives",
      "Editorial hubs: Editor's Choice, Just Launched, Most Saved, and marketplace views",
      "User dashboard for favorites, product submissions, and account settings",
      "Admin workspace for products, reviews, moderation, traffic charts, and language management",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    type: "Full Stack",
  },
  {
    id: "podfolio",
    title: "Podfolio",
    description:
      "A creator platform that helps podcasters discover, curate, and showcase YouTube episodes on their own websites through customizable embeds.",
    role: "Full-Stack Product Development",
    features: [
      "Multi-step onboarding with YouTube episode search and confidence filtering",
      "Membership tiers controlling video limits, AI-verified results, and widget embedding",
      "Widget builder with live preview, theme/layout/color controls, and embed snippets",
      "Stripe plan selection, checkout redirect, billing portal, and coupon redemption",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Ant Design"],
    type: "Full Stack",
  },
  {
    id: "realfinder",
    title: "RealFinder",
    description:
      "A multi-role property marketplace serving customers, brokers, owners, and administrators with property discovery, dashboards, and verification workflows.",
    role: "Frontend Lead · Product Development",
    features: [
      "Server-rendered browse, property, housebook, and geo landing pages with structured data",
      "Role-separated broker, owner, and admin dashboards with edge JWT role gating",
      "Multi-step listing creation and ownership-claim flows with form validation",
      "Admin verification center, listing moderation, RBAC guards, and geo analytics charts",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Firebase Auth",
    ],
    type: "Full Stack",
    caseStudySlug: "realfinder",
  },
  {
    id: "xply-tech",
    title: "Xply-Tech",
    description:
      "A production marketing platform for a software company, designed to communicate its expertise, support hiring, and convert qualified service inquiries.",
    role: "Frontend Development · Figma-to-Launch Delivery",
    features: [
      "Server-rendered marketing and nine /services/[slug] pages with per-route metadata, JSON-LD, and dynamic sitemap",
      "Contact funnel with Cloudflare Turnstile verification, honeypot filtering, and Nodemailer SMTP delivery",
      "Google Analytics 4 with CTA, outbound link, and generate_lead event tracking in production only",
      "Data-driven service page architecture with scroll-spy tabs, Framer Motion reveals, and Figma-mapped brand tokens",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "GA4",
    ],
    type: "Full Stack",
  },
];

export const projectFilters: Array<ProjectType | "All"> = [
  "All",
  "Frontend",
  "Full Stack",
];
