export interface CaseStudyMetadataItem {
  label: string;
  value: string;
}

export interface CaseStudySubsection {
  title: string;
  paragraphs: string[];
  points?: string[];
  conclusion?: string[];
}

export interface CaseStudyPrinciple {
  title: string;
  description: string;
}

export interface CaseStudyBreakdown {
  title: string;
  points: string[];
}

export interface CaseStudy {
  slug: string;
  projectId: string;
  title: string;
  tagline: string;
  metadata: CaseStudyMetadataItem[];
  seo: {
    title: string;
    description: string;
  };
  overview: string[];
  overviewPoints?: string[];
  overviewConclusion?: string[];
  challenge: {
    paragraphs: string[];
    points?: string[];
    breakdown?: CaseStudyBreakdown[];
    afterBreakdown?: string[];
    finalPoints?: string[];
    conclusion: string[];
  };
  role: string[];
  work: CaseStudySubsection[];
  engineeringChallenge: {
    title: string;
    paragraphs: string[];
    points?: string[];
    afterPoints?: string[];
    breakdown?: CaseStudyBreakdown[];
    conclusion?: string[];
  };
  approach: {
    introduction?: string;
    principles: CaseStudyPrinciple[];
  };
  impact: string[];
  technology: string[];
  demonstrates: string[];
  confidentialityNote: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "neblo-ai",
    projectId: "neblo-ai",
    title: "Neblo AI",
    tagline:
      "Building production interfaces for an AI-native freight operations platform",
    metadata: [
      { label: "Industry", value: "Logistics / Freight Tech" },
      { label: "Product Type", value: "B2B SaaS" },
      { label: "Role", value: "Frontend Engineer" },
      {
        label: "Focus",
        value:
          "Product Engineering · Frontend Architecture · Real-Time Workflows · Maps",
      },
    ],
    seo: {
      title: "Neblo AI Case Study",
      description:
        "A frontend engineering case study covering production SaaS architecture, real-time freight workflows, interactive mapping, and scalable React development.",
    },
    overview: [
      "Neblo is an AI-native freight operations platform designed to reduce the manual work involved in moving freight.",
      "The platform brings freight workflows such as load coordination, carrier operations, communication, capacity management, and tracking into a centralized operational environment.",
      "I worked on the production frontend, building and improving workflows used across a complex, role-driven logistics product.",
      "My focus was not simply creating screens — it was making operationally dense workflows understandable, responsive, and maintainable as the product continued to grow.",
    ],
    challenge: {
      paragraphs: [
        "Freight operations involve a large amount of constantly changing information.",
        "Dispatchers, brokers, carriers, and operations teams need to work with loads, vehicles, locations, conversations, statuses, and other operational data without losing context.",
        "That creates several frontend challenges:",
      ],
      points: [
        "Presenting large amounts of operational information without overwhelming users",
        "Supporting different workflows and permissions across multiple user roles",
        "Displaying geographic and vehicle data efficiently",
        "Keeping the interface responsive as live data changes",
        "Maintaining consistency across a growing React codebase",
        "Integrating new functionality into an existing production product without disrupting established workflows",
      ],
      conclusion: [
        "The frontend therefore had to function less like a traditional website and more like an operational workspace.",
      ],
    },
    role: [
      "I worked primarily on frontend architecture and product development using React and TypeScript.",
      "My responsibilities included building new product functionality, extending existing workflows, integrating backend APIs, working with shared application state, implementing interactive geographic experiences, and improving existing parts of a large production codebase.",
      "A significant part of the work involved understanding existing architecture before changing it — allowing new functionality to fit naturally into the product rather than introducing isolated implementations.",
    ],
    work: [
      {
        title: "Operational Workflows",
        paragraphs: [
          "Built and extended interfaces around freight operations including loads, transportation workflows, statuses, and role-specific product experiences.",
          "The goal was to keep complex operational information accessible while allowing users to move quickly between related workflows.",
        ],
      },
      {
        title: "Interactive Mapping",
        paragraphs: [
          "Worked with Mapbox GL to build geographic interfaces for transportation and vehicle-related data.",
          "When large numbers of geographic points needed to be displayed, clustering techniques were used to keep the map useful and responsive rather than rendering every location independently.",
        ],
      },
      {
        title: "Multi-Role Product Experience",
        paragraphs: [
          "Contributed to a platform serving multiple operational roles.",
          "Different users required different capabilities, information, and actions, so frontend behavior had to respect both permissions and the workflow appropriate to each role.",
        ],
      },
      {
        title: "Real-Time Product Experiences",
        paragraphs: [
          "Worked on interfaces where application data could change while the user remained on the page.",
          "The UI needed to respond predictably to new operational information without forcing users to constantly reload or lose their current context.",
        ],
      },
      {
        title: "Large React Codebase",
        paragraphs: [
          "Worked within an established production React application rather than building in isolation.",
          "Reusable components, predictable state management, and consistency with existing patterns were important because features often interacted with multiple parts of the system.",
        ],
      },
    ],
    engineeringChallenge: {
      title: "Rendering geographic operational data at scale",
      paragraphs: [
        "Transportation products naturally generate a large amount of geographic information.",
        "Displaying every location directly on a map can quickly create both visual noise and unnecessary rendering work.",
        "I worked with Mapbox GL and geographic clustering to group nearby points intelligently depending on the current zoom level.",
        "Instead of presenting users with an unusable wall of markers, the interface could progressively reveal more detail as they explored an area.",
        "This improved both usability and frontend performance while preserving access to the underlying operational information.",
      ],
    },
    approach: {
      introduction: "Several principles guided the work:",
      principles: [
        {
          title: "Reuse before duplication",
          description:
            "Existing components and product patterns were extended where appropriate instead of creating a new implementation for every feature.",
        },
        {
          title: "Centralized application state where it mattered",
          description:
            "Redux Toolkit helped coordinate shared state across workflows that needed to remain synchronized.",
        },
        {
          title: "Separate complex UI concerns",
          description:
            "Mapping, operational workflows, communication, and shared application state were kept conceptually separated so individual features remained easier to reason about.",
        },
        {
          title: "Respect the existing product",
          description:
            "Because this was an active production application, improvements had to work within existing user workflows rather than assuming the product could simply be rewritten.",
        },
        {
          title: "Performance as part of UX",
          description:
            "For data-heavy interfaces such as maps and operational dashboards, rendering strategy was treated as part of the user experience rather than an afterthought.",
        },
      ],
    },
    impact: [
      "The work contributed to a centralized operational experience where freight teams could work with complex transportation data and workflows without moving between disconnected interfaces.",
      "From an engineering perspective, the challenge was balancing three things simultaneously:",
      "complex business workflows, real-time information, and long-term frontend maintainability.",
      "That experience strengthened my ability to work on mature SaaS products where understanding the domain and existing architecture is just as important as writing new code.",
    ],
    technology: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Mapbox GL",
      "REST APIs",
      "Real-Time Integrations",
    ],
    demonstrates: [
      "Building inside a large production SaaS application",
      "Translating complex business workflows into usable interfaces",
      "Working with real-time and geographic data",
      "Designing role-aware product experiences",
      "Performance-conscious React development",
      "Extending existing architecture without unnecessary rewrites",
      "Collaborating around a rapidly evolving product",
    ],
    confidentialityNote:
      "Some implementation details have been intentionally generalized to respect project confidentiality.",
  },
  {
    slug: "yupup",
    projectId: "yupup-vendor-portal",
    title: "YupUp",
    tagline:
      "Evolving a consumer marketplace into a faster, more SEO-friendly Next.js product",
    metadata: [
      { label: "Industry", value: "Local Commerce / Marketplace" },
      { label: "Product Type", value: "Consumer Web Platform" },
      { label: "Role", value: "Frontend Engineer" },
      {
        label: "Focus",
        value: "Next.js · SSR · Payments · Location Experiences · Product Performance",
      },
    ],
    seo: {
      title: "YupUp Case Study",
      description:
        "A frontend engineering case study covering Next.js server rendering, marketplace SEO, payments, authentication, and location-aware customer experiences.",
    },
    overview: [
      "YupUp is a consumer platform built around discovering local businesses, deals, services, events, and other city-level experiences.",
      "I worked on the customer-facing web application during a period where the product included marketplace-style discovery, service purchasing, payments, location-aware experiences, reviews, appointments, and authenticated customer workflows.",
      "A major part of my work involved improving how the application was structured in Next.js, particularly around rendering strategy, SEO, authentication, payments, and the boundary between server-rendered and interactive client-side experiences.",
    ],
    challenge: {
      paragraphs: [
        "Consumer marketplaces have a different set of engineering pressures from internal SaaS products.",
        "The product needed to provide a fast and intuitive experience while handling:",
      ],
      points: [
        "Public pages that needed strong SEO",
        "Authenticated customer workflows",
        "Location-aware content and discovery",
        "Payments and checkout",
        "Guest and logged-in user behavior",
        "Dynamic service and business data",
        "Reviews and customer interactions",
        "Mobile browser compatibility",
        "Rich media and interactive UI",
      ],
      conclusion: [
        "Some parts of the application initially relied too heavily on client-side rendering.",
        "That worked functionally, but it was not always the best fit for public-facing pages where SEO, initial loading, and discoverability mattered.",
      ],
    },
    role: [
      "I worked primarily on the frontend using Next.js, React, and TypeScript.",
      "My responsibilities included building customer-facing product features, integrating backend APIs, improving rendering architecture, working with authentication and user sessions, integrating Stripe payment flows, handling geolocation and Google Places, and improving production behavior across browsers and devices.",
      "One of the more important architectural shifts involved moving appropriate public-facing experiences toward server rendering while keeping interactive functionality inside focused client components.",
    ],
    work: [
      {
        title: "Server Rendering & SEO",
        paragraphs: [
          "Worked on migrating important public-facing experiences from heavily client-rendered implementations toward server-rendered Next.js pages.",
          "Pages that primarily displayed data could be rendered on the server, while interactive portions were isolated into client components.",
          "This improved the separation between:",
        ],
        points: [
          "content that should be available immediately to users and search engines",
          "and functionality that genuinely required browser-side JavaScript",
        ],
        conclusion: [
          "I also worked with metadata, canonical URLs, sitemap configuration, robots rules, and structured public-page behavior.",
        ],
      },
      {
        title: "Local Discovery & Geolocation",
        paragraphs: [
          "Built location-aware experiences using browser geolocation and location services.",
          "The application could determine a user's approximate area and use that information to surface relevant content.",
          "I also worked with Google Places Autocomplete, allowing users to manually choose or refine their location instead of relying entirely on automatic detection.",
          "Location logic had to work alongside product state, navigation, and API requests without making the browsing experience feel unpredictable.",
        ],
      },
      {
        title: "Payments & Checkout",
        paragraphs: [
          "Worked with Stripe to support customer payment flows.",
          "This included traditional payment experiences as well as Stripe's Payment Request capabilities for supported wallets and browsers.",
          "Payment integrations required careful handling of:",
        ],
        points: [
          "dynamically changing totals",
          "Stripe Elements lifecycle",
          "payment availability by browser/device",
          "checkout state",
          "and the relationship between frontend state and backend orders",
        ],
      },
      {
        title: "Guest & Authenticated Customer Flows",
        paragraphs: [
          "The application supported both visitors and authenticated customers.",
          "I worked on flows where guest state could exist locally while logged-in users relied on server-side account data.",
          "One example was cart behavior:",
        ],
        points: [
          "guest users could maintain cart state before authentication",
          "authenticated users could work with cart data stored through backend APIs",
        ],
        conclusion: [
          "This required keeping the transition between anonymous and logged-in usage understandable and reliable.",
        ],
      },
      {
        title: "Authentication",
        paragraphs: [
          "Worked with token-based authentication using access and refresh tokens.",
          "The application included protected and public areas, automatic authorization headers, refresh behavior, and route-level navigation depending on authentication state.",
          "A key consideration in Next.js was ensuring that browser-side authentication state and server-side route handling did not disagree about whether a user was logged in.",
        ],
      },
      {
        title: "Reviews, Appointments & Customer Workflows",
        paragraphs: [
          "Built and maintained customer-facing functionality around service details, reviews, appointments, order information, and other interactive marketplace flows.",
          "These features had to integrate into a consistent user journey rather than behaving as isolated pages.",
        ],
      },
    ],
    engineeringChallenge: {
      title: "Deciding what belongs on the server and what belongs in the browser",
      paragraphs: [
        "One of the most important architectural lessons from the project was that simply using Next.js does not automatically create a server-rendered application.",
        "Some public pages initially depended heavily on client-side fetching and rendering.",
        "That created unnecessary tradeoffs for pages whose primary purpose was displaying content.",
        "I worked on restructuring these areas so that data-heavy public pages could be rendered on the server while interactivity remained inside smaller client-side components.",
        "Conceptually, the architecture moved toward:",
      ],
      breakdown: [
        {
          title: "Server Component",
          points: [
            "Fetch initial data",
            "Render indexable content",
            "Generate metadata",
            "Deliver useful HTML immediately",
          ],
        },
        {
          title: "Client Component",
          points: [
            "Handle interactions",
            "Update local state",
            "Respond to clicks",
            "Use browser APIs",
            "Manage highly dynamic UI",
          ],
        },
      ],
      conclusion: [
        "This separation produced a cleaner rendering model and made the application better suited to its public marketplace use case.",
      ],
    },
    approach: {
      principles: [
        {
          title: "Server first for public content",
          description:
            "Where a page primarily existed to present content, I preferred server rendering rather than turning the entire experience into a client application.",
        },
        {
          title: "Client JavaScript where interaction required it",
          description:
            "Geolocation, payment UI, forms, modals, local state, and browser-specific functionality stayed inside client components.",
        },
        {
          title: "Treat SEO as architecture",
          description:
            "SEO was not handled only through meta tags. Rendering strategy, canonical URLs, robots configuration, sitemap structure, page accessibility, and discoverable HTML all formed part of the implementation.",
        },
        {
          title: "Design for both anonymous and authenticated usage",
          description:
            "Customer products often cannot assume the user is logged in. Guest behavior and authenticated behavior were therefore treated as separate but connected product states.",
        },
        {
          title: "Debug across real browser environments",
          description:
            "Features such as video playback, wallet payments, geolocation, and browser storage can behave differently across desktop Chrome, Safari, and iOS. Production debugging therefore included browser-specific behavior rather than assuming that something working locally was sufficient.",
        },
      ],
    },
    impact: [
      "My work helped strengthen the application as a production consumer platform by improving both its customer-facing functionality and its underlying frontend architecture.",
      "The project gave me hands-on experience across several concerns that frequently intersect in modern consumer products:",
      "SEO, rendering architecture, payments, authentication, location data, responsive UX, and production browser behavior.",
      "More importantly, it reinforced that frontend architecture should follow the needs of the product rather than applying the same rendering strategy to every page.",
    ],
    technology: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Stripe",
      "Google Places",
      "REST APIs",
      "React Hook Form",
      "Tailwind CSS",
    ],
    demonstrates: [
      "Building production consumer-facing web products",
      "Next.js server/client architecture",
      "Migrating public experiences toward SSR",
      "SEO-conscious frontend engineering",
      "Stripe payment integration",
      "Authentication and session flows",
      "Guest vs authenticated product behavior",
      "Geolocation and location search",
      "Mobile and Safari production debugging",
      "Working across complete customer journeys rather than isolated components",
    ],
    confidentialityNote:
      "Some product details and implementation specifics have been generalized to respect project confidentiality and reflect the product during the period in which I worked on it.",
  },
  {
    slug: "dignifyx",
    projectId: "dignifyx-admin-hub",
    title: "DignifyX",
    tagline:
      "Building production workflows for an AI-assisted advisor development platform",
    metadata: [
      { label: "Industry", value: "FinTech / Professional Development" },
      { label: "Product Type", value: "AI-Assisted SaaS Platform" },
      { label: "Role", value: "Frontend Engineer" },
      {
        label: "Focus",
        value:
          "Product Engineering · Admin Workflows · Learning Content · State Management · Production Reliability",
      },
    ],
    seo: {
      title: "DignifyX Case Study",
      description:
        "A frontend engineering case study covering production admin workflows, RTK Query state management, learning content, authentication, and release reliability.",
    },
    overview: [
      "DignifyX is a digital development platform designed to help financial advisors, trainers, and agency leaders improve professional performance through reflective practice, structured goals, learning content, team insights, and AI-assisted coaching.",
      "The product combines human development workflows with AI-generated insights rather than treating AI as a standalone chatbot.",
      "I worked on the production web application, primarily across admin and operational functionality used to manage users, learning content, platform data, and other core product workflows.",
      "My work also involved improving frontend state behavior, API integration, authentication flows, production deployment behavior, and the reliability of an existing React application.",
    ],
    challenge: {
      paragraphs: [
        "Products that combine learning, coaching, analytics, and AI often accumulate several different workflows inside the same application.",
        "Administrators need to manage content and users.",
        "Advisors need structured development experiences.",
        "Team leaders need visibility into progress and performance.",
        "At the same time, the application has to remain predictable as data changes across multiple screens.",
        "That creates several frontend challenges:",
      ],
      points: [
        "Managing complex application state without showing stale data",
        "Building administrative workflows around users and content",
        "Supporting rich learning content across web and mobile experiences",
        "Keeping authentication and API behavior consistent",
        "Handling frequent product updates without disrupting active users",
        "Extending an existing React application while preserving established behavior",
      ],
      conclusion: [
        "The work required more than building isolated UI components. It required understanding how changes affected the product as a whole.",
      ],
    },
    role: [
      "I worked primarily on the web application using React, TypeScript, Redux Toolkit, and RTK Query.",
      "My responsibilities included building and maintaining admin functionality, integrating backend APIs, improving data-fetching and caching behavior, working with authentication state, supporting course and content workflows, and resolving production issues across the application.",
      "A significant part of the role involved improving an established codebase rather than starting from scratch.",
      "That meant understanding existing architectural decisions, identifying where frontend behavior was causing operational problems, and making targeted changes without unnecessarily rewriting working functionality.",
    ],
    work: [
      {
        title: "Admin & Operational Workflows",
        paragraphs: [
          "Built and maintained functionality used by administrators to manage key areas of the platform.",
          "This included workflows around users, content, dashboard information, and other operational data.",
          "Admin interfaces need to prioritize clarity and reliability because mistakes can affect the wider product rather than only the current user's experience.",
        ],
      },
      {
        title: "Learning & Rich Content",
        paragraphs: [
          "Worked on course and learning-content workflows where administrators could create formatted content using a rich text editor.",
          "That content was stored as HTML and consumed by the product across different client experiences.",
          "This introduced practical concerns around:",
        ],
        points: [
          "rich text formatting",
          "consistent rendering",
          "theme compatibility",
          "content portability",
          "and avoiding presentation decisions that break when the same content is displayed in another environment",
        ],
        conclusion: [
          "The work reinforced the importance of treating stored content as reusable product data rather than simply copying the appearance of the admin editor.",
        ],
      },
      {
        title: "API Integration & State Management",
        paragraphs: [
          "Worked extensively with RTK Query for backend communication and server-state management.",
          "One recurring challenge in admin applications is deciding when cached data is useful and when it becomes misleading.",
          "For example, if an administrator updates information or logs into a different account, previously cached responses should not continue to appear as though they belong to the current application state.",
          "I worked on improving cache lifecycle, invalidation, logout behavior, and refetch strategies so that the UI stayed aligned with backend state.",
        ],
      },
      {
        title: "Authentication & Session Behavior",
        paragraphs: [
          "Worked with token-based authentication and persisted frontend session state.",
          "The application needed to correctly clear user-specific state during logout and avoid accidentally reusing API data from a previous session.",
          "This required coordinating:",
        ],
        points: [
          "persisted user information",
          "Redux state",
          "API cache",
          "authorization headers",
          "and navigation behavior",
        ],
        conclusion: [
          "The goal was to make session transitions predictable rather than relying on full browser reloads to restore correctness.",
        ],
      },
      {
        title: "Production Deployment Behavior",
        paragraphs: [
          "Worked on issues that appear when a web application remains open while new frontend versions are deployed.",
          "Modern browser caching can result in users continuing to run an older application shell even after a new release is available.",
          "I worked on approaches for controlling caching behavior and improving the deployment experience so active users could be informed when a newer version of the application was available.",
          "This is the kind of problem that rarely appears during initial development but becomes increasingly important in a real production product.",
        ],
      },
    ],
    engineeringChallenge: {
      title: "Preventing stale data in a cached admin application",
      paragraphs: [
        "Caching improves performance, but in an administrative product incorrect cached data can be more damaging than an extra API request.",
        "One issue involved screens continuing to display previous query results even after underlying data had changed or the authenticated user had changed.",
        "Rather than disabling caching entirely, I worked with the application's RTK Query configuration to better define when data should:",
      ],
      points: [
        "remain cached",
        "be invalidated",
        "refetch on relevant events",
        "or be cleared completely during logout",
      ],
      afterPoints: [
        "This required distinguishing between two different categories of state:",
      ],
      breakdown: [
        {
          title: "Client state",
          points: [
            "authentication information",
            "UI selections",
            "local application behavior",
          ],
        },
        {
          title: "Server state",
          points: [
            "users",
            "dashboard values",
            "course data",
            "operational API responses",
          ],
        },
      ],
      conclusion: [
        "Treating those as separate concerns produced more predictable behavior than trying to manage everything as generic Redux state.",
      ],
    },
    approach: {
      principles: [
        {
          title: "Fix the lifecycle, not only the symptom",
          description:
            "When stale data appeared, forcing a page reload would have hidden the issue. The better solution was understanding when cached queries were created, retained, invalidated, and reused.",
        },
        {
          title: "Respect existing architecture",
          description:
            "The application was already in production. Changes were made incrementally, using existing Redux and RTK Query patterns rather than introducing a second state-management approach.",
        },
        {
          title: "Treat admin UX as product UX",
          description:
            "Admin products are often treated as secondary interfaces. In practice, reliability, validation, loading states, error handling, and clear feedback are especially important because administrators can affect many users at once.",
        },
        {
          title: "Design content for multiple consumers",
          description:
            "Rich content created in one application may be rendered somewhere completely different. Stored content therefore needs to remain flexible rather than embedding assumptions about one theme or one frontend.",
        },
        {
          title: "Consider deployment part of frontend engineering",
          description:
            "A feature is not finished simply because it works locally. Browser caching, production assets, authentication persistence, active sessions, and release transitions all affect the actual user experience.",
        },
      ],
    },
    impact: [
      "My work contributed to making the DignifyX web application easier to operate and more predictable as an evolving production product.",
      "The project gave me practical experience across concerns that frequently emerge once a SaaS application moves beyond its initial implementation:",
      "admin operations, server-state caching, authentication lifecycle, reusable content, API integration, and production release behavior.",
      "It also strengthened my experience working inside an existing codebase where the goal is not to rewrite everything, but to understand the system well enough to improve it safely.",
    ],
    technology: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
      "Rich Text / HTML Content",
      "Nginx",
    ],
    demonstrates: [
      "Working inside an existing production React application",
      "Building and maintaining admin workflows",
      "Redux Toolkit and RTK Query architecture",
      "Server-state caching and invalidation",
      "Authentication and logout lifecycle",
      "Rich-content management",
      "Cross-client content considerations",
      "Production deployment and browser caching issues",
      "Debugging behavior that only appears in real-world usage",
      "Improving mature products without unnecessary rewrites",
    ],
    confidentialityNote:
      "Some product and implementation details have been generalized to respect project confidentiality.",
  },
  {
    slug: "realfinder",
    projectId: "realfinder",
    title: "RealFinder",
    tagline:
      "Building the web architecture for a global real estate marketplace and analytics platform",
    metadata: [
      { label: "Industry", value: "Real Estate / Marketplace" },
      { label: "Product Type", value: "Multi-Portal Web Platform" },
      { label: "Role", value: "Frontend / Full-Stack Product Engineer" },
      {
        label: "Focus",
        value:
          "Next.js Architecture · SSR/ISR · Multi-Role Portals · SEO · Maps · Analytics",
      },
    ],
    seo: {
      title: "RealFinder Case Study",
      description:
        "A product engineering case study covering multi-portal Next.js architecture, SSR and ISR, real estate SEO, role-based access, maps, and analytics.",
    },
    overview: [
      "RealFinder is an upcoming global real estate marketplace and property analytics platform designed to reduce fragmentation across the traditional property market.",
      "The platform aims to create a more standardized distribution layer for real estate, with concepts such as permanent digital property identities, broader broker distribution, and unified integration between listing systems and CRM providers.",
      "I worked on the web platform across both public and authenticated product areas, helping structure a single application that serves several distinct audiences:",
    ],
    overviewPoints: [
      "public visitors",
      "members",
      "brokers",
      "property owners",
      "and administrators",
    ],
    overviewConclusion: [
      "The challenge was not just building pages. It was creating a frontend architecture that could support very different workflows while still behaving like one coherent product.",
    ],
    challenge: {
      paragraphs: [
        "Real estate platforms often combine two very different types of applications.",
      ],
      breakdown: [
        {
          title: "The public side needs:",
          points: [
            "search visibility",
            "fast page delivery",
            "structured property content",
            "geographic discovery",
            "and strong SEO",
          ],
        },
        {
          title: "The authenticated side needs:",
          points: [
            "dashboards",
            "role-based workflows",
            "account state",
            "analytics",
            "data management",
            "and highly interactive interfaces",
          ],
        },
      ],
      afterBreakdown: [
        "Trying to treat both sides the same way can create unnecessary complexity.",
        "The architecture therefore had to support:",
      ],
      finalPoints: [
        "server-rendered public experiences",
        "interactive client-side dashboards",
        "multiple authenticated roles",
        "secure route protection",
        "property and geographic discovery",
        "SEO-sensitive landing pages",
        "analytics and operational workflows",
        "and shared application infrastructure across all portals",
      ],
      conclusion: [],
    },
    role: [
      "I worked across the frontend architecture and product implementation using Next.js, React, TypeScript, Redux Toolkit, and REST APIs.",
      "My responsibilities included structuring public and authenticated application areas, integrating APIs, implementing role-aware navigation and access control, improving rendering strategy, building property discovery flows, working with maps and geocoding, and supporting dashboard experiences for different user types.",
      "A major part of the work involved deciding which parts of the application should be server-rendered and which should remain client-driven.",
      "That decision had a direct impact on SEO, performance, maintainability, and user experience.",
    ],
    work: [
      {
        title: "Public Marketplace",
        paragraphs: [
          "Built and structured public-facing pages for property discovery and property details.",
          "These pages needed to be accessible to both users and search engines, so they were designed around server rendering rather than relying entirely on client-side fetching.",
          "The public product included experiences such as:",
        ],
        points: [
          "property browsing",
          "property detail pages",
          "geographic landing pages",
          "public marketing content",
          "and search-oriented discovery flows",
        ],
      },
      {
        title: "SSR, ISR & Rendering Strategy",
        paragraphs: [
          "Worked on defining the rendering model for the public experience.",
          "Different pages had different freshness and performance requirements.",
          "For example:",
        ],
        points: [
          "some pages could benefit from incremental static regeneration",
          "some needed fresh server-side data",
          "and highly interactive dashboards were better handled as client-driven application areas",
        ],
        conclusion: [
          "The goal was not to force one rendering strategy everywhere, but to choose the most appropriate model for each part of the product.",
        ],
      },
      {
        title: "SEO Architecture",
        paragraphs: [
          "Worked on SEO-related implementation across public pages, including:",
        ],
        points: [
          "dynamic metadata",
          "canonical URLs",
          "structured data",
          "robots configuration",
          "sitemap behavior",
          "and indexable server-rendered content",
        ],
        conclusion: [
          "For property pages in particular, SEO was treated as part of the page architecture rather than something added after development.",
        ],
      },
      {
        title: "Multi-Portal Product Structure",
        paragraphs: [
          "The application supported several distinct user types within the same repository.",
          "These included:",
        ],
        points: ["members", "brokers", "owners", "and administrators"],
        conclusion: [
          "Each portal had different navigation, permissions, workflows, and product requirements.",
          "I worked on keeping these experiences separated at the product level while still reusing shared application infrastructure where appropriate.",
        ],
      },
      {
        title: "Authentication & Role-Based Access",
        paragraphs: [
          "Worked on authentication flows using external identity providers and backend-issued application tokens.",
          "Authenticated users needed to be routed into the correct portal based on their role.",
          "Role protection was enforced at the routing layer so users could not simply navigate into another portal by changing the URL.",
          "This included handling:",
        ],
        points: [
          "authentication state",
          "token refresh",
          "role verification",
          "protected routes",
          "and portal-specific navigation",
        ],
      },
      {
        title: "Property Discovery & Geographic Experiences",
        paragraphs: [
          "Worked with geolocation, address data, and mapping-related workflows used for property discovery.",
          "The platform needed to support both user-driven search and geographic exploration.",
          "This involved integrating geocoding services and handling location data in ways that could support property browsing without making the rest of the application dependent on map-specific logic.",
        ],
      },
      {
        title: "Dashboards & Analytics",
        paragraphs: [
          "Built and supported dashboard experiences for authenticated roles.",
          "These interfaces included operational and analytical data that needed to be presented clearly without overloading users.",
          "The dashboard side of the product was intentionally more client-driven than the public marketplace because interaction and authenticated state mattered more than search indexing.",
        ],
      },
    ],
    engineeringChallenge: {
      title:
        "Supporting public SEO pages and authenticated dashboards in one application",
      paragraphs: [
        "One of the largest architectural challenges was that RealFinder was effectively several different applications living inside one Next.js project.",
        "The public marketplace needed strong server rendering and SEO.",
        "The broker, owner, member, and admin portals behaved more like authenticated web applications.",
        "Using the same rendering strategy everywhere would have created tradeoffs on both sides.",
        "The solution was to treat rendering as a product-level concern.",
        "Conceptually:",
      ],
      breakdown: [
        {
          title: "Public pages",
          points: [
            "server-rendered or incrementally regenerated",
            "metadata generated on the server",
            "structured data included where appropriate",
            "indexable HTML delivered immediately",
          ],
        },
        {
          title: "Authenticated portals",
          points: [
            "client-oriented layouts",
            "role-aware navigation",
            "protected routes",
            "interactive dashboards",
            "API-driven application state",
          ],
        },
      ],
      conclusion: [
        "This separation allowed the public platform to remain search-friendly while authenticated areas could prioritize responsiveness and interactivity.",
      ],
    },
    approach: {
      principles: [
        {
          title: "Server rendering where discoverability matters",
          description:
            "Public property and discovery pages were treated as content surfaces, so server rendering was the default where it improved SEO and initial delivery.",
        },
        {
          title: "Client-side application patterns where interaction matters",
          description:
            "Dashboards and authenticated workflows remained client-driven when they depended heavily on user state and frequent interaction.",
        },
        {
          title: "Role boundaries at the routing level",
          description:
            "Portal separation was enforced by the application architecture rather than relying only on hidden navigation links.",
        },
        {
          title: "Shared infrastructure without mixing product concerns",
          description:
            "Common services, state, utilities, and API layers could be reused, while each portal retained its own product logic and user experience.",
        },
        {
          title: "SEO as part of system design",
          description:
            "Metadata, structured data, canonical behavior, rendering strategy, and route structure were considered together rather than treated as separate tasks.",
        },
        {
          title: "Avoid unnecessary client rendering",
          description:
            "Public pages were progressively moved away from overly client-heavy implementations when server rendering was a better fit.",
        },
      ],
    },
    impact: [
      "My work helped shape a platform that could support both a public real estate marketplace and multiple authenticated portals without requiring separate applications for each user type.",
      "The project brought together several engineering concerns that often become difficult when handled independently:",
      "SEO, server rendering, authentication, role-based access, maps, analytics, and multi-portal application architecture.",
      "It also reinforced an important product-engineering principle:",
      "the best frontend architecture is rarely one rendering strategy or one application pattern applied everywhere.",
      "Different parts of the product should be optimized for the users, constraints, and goals they actually serve.",
    ],
    technology: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
      "Firebase Authentication",
      "JWT",
      "Map / Geocoding APIs",
      "Analytics Charts",
    ],
    demonstrates: [
      "Architecting a multi-portal Next.js application",
      "Server rendering and ISR for public marketplace pages",
      "SEO-focused application architecture",
      "Dynamic metadata and structured data",
      "Role-based authentication and route protection",
      "Public and authenticated experiences in one codebase",
      "Geographic property discovery",
      "Dashboard and analytics development",
      "Working with complex application boundaries",
      "Choosing rendering strategies based on product needs rather than convention",
    ],
    confidentialityNote:
      "Some product and implementation details have been generalized to respect project confidentiality and the pre-release nature of the platform.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((caseStudy) => caseStudy.slug);
}
