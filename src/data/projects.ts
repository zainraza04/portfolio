export type ProjectType = "Frontend" | "Full Stack" | "Backend";

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  type: ProjectType;
}

export const projects: Project[] = [
  {
    id: "yupup-vendor-portal",
    title: "YupUp Business App",
    description:
      "The vendor-facing dashboard for a commission-based service marketplace, where businesses manage orders, appointments, ad promotions, payments, and real-time customer messaging. I built the production React frontend with a Redux Toolkit architecture spanning 12+ feature slices, JWT auth with silent token refresh, and Socket.io presence tracking.",
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
  },
  {
    id: "neblo-ai",
    title: "Neblo AI",
    description:
      "A large-scale transportation management SPA connecting brokers and carriers with 45+ views spanning load management, a real-time load board, live GPS tracking, AI-powered dispatch, broadcast messaging, and Stripe billing. I built the entire frontend with 26 Redux Toolkit slices, custom WebSocket hooks, and Vite-optimized code splitting across a 430+ file codebase.",
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
  },
  {
    id: "dignifyx-admin-hub",
    title: "DignifyX Admin Hub",
    description:
      "A multi-tenant administrative web application where platform operators and customer organizations manage users, teams, learning content, access, and reports. I led frontend development with RTK Query for REST data fetching, Zod-validated forms, reusable data tables, and role-based portals for owner, org admin, team leader, and adviser personas.",
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
  },
  {
    id: "ai-and-u",
    title: "AI & U (SellersGPT)",
    description:
      "A consumer-facing directory helping sellers discover, compare, and review AI tools, software, and marketplaces. I led the Next.js 15 App Router implementation with locale-aware SSR, middleware-driven i18n across 50+ routes, token-based user dashboards, and a full admin workspace for content moderation and analytics.",
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
      "A creator-focused Next.js application helping podcasters discover, curate, and showcase YouTube episodes on their own sites. I delivered authenticated dashboards, guided onboarding, membership-gated features, Stripe billing, and a customizable embed widget with live preview and theme configuration.",
    features: [
      "Multi-step onboarding with YouTube episode search and confidence filtering",
      "Membership tiers controlling video limits, AI-verified results, and widget embedding",
      "Widget builder with live preview, theme/layout/color controls, and embed snippets",
      "Stripe plan selection, checkout redirect, billing portal, and coupon redemption",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Ant Design",
    ],
    type: "Full Stack",
  },
  {
    id: "realfinder",
    title: "RealFinder",
    description:
      "A production property marketplace as a single Next.js application serving SEO-first public discovery and three authenticated portals for brokers, owners, and admins. I led frontend implementation across server-rendered marketing pages and complex dashboard workflows including listing creation, verification, moderation, and map-aware broker discovery.",
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
  },
];

export const projectFilters: Array<ProjectType | "All"> = [
  "All",
  "Frontend",
  "Full Stack",
  "Backend",
];
