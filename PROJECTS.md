# YupUp Business App

# One-Line Summary

A vendor-facing dashboard for a commission-based service marketplace, enabling businesses to manage orders, appointments, ads, payments, and real-time messaging.

# Portfolio Description

YupUp Business App is the vendor portal for a service marketplace connecting local businesses with customers. I built the frontend for this production React application, delivering a feature-rich dashboard where vendors manage their entire business lifecycle — from onboarding and Stripe payment setup through order tracking, appointment scheduling, ad promotions, and real-time customer messaging.

The frontend architecture uses Redux Toolkit for centralized state across 12+ feature slices, Axios interceptors for seamless JWT authentication with automatic token refresh, and Socket.io for live user presence. I implemented a custom design system on Tailwind CSS with 15+ branded tokens layered over Ant Design components, ensuring visual consistency at scale. The app includes Google Maps integration for multi-location management, Recharts-powered analytics dashboards, Firebase Cloud Messaging for push notifications, and Stripe Elements for PCI-compliant payment collection — all within a protected, role-aware routing structure.

# Key Features

- Real-time analytics dashboard with revenue, sales, customer, and appointment metrics
- Stripe Connect onboarding and payment method management
- Real-time messaging system with Socket.io presence tracking
- Order and appointment management with status filtering and history
- Service ad creation, promotion checkout, and campaign tracking
- Multi-location business profiles with Google Maps integration
- Team member invitations and role management
- Firebase push notifications for cross-tab and background alerts

# Technologies Used

**Frontend:** React 18, React Router v6, Create React App
**State Management:** Redux Toolkit (createSlice + createAsyncThunk), React-Redux
**Styling:** Tailwind CSS 3 (custom design system), Ant Design 5, custom Satoshi font family
**APIs:** Axios with interceptors, Socket.io Client, Google Maps API, Mapbox Search
**Auth:** JWT with refresh token rotation, Firebase Cloud Messaging
**Other:** Stripe React SDK, Recharts, DOMPurify, React Image Crop, Jest + React Testing Library

# Engineering Highlights

- Designed a scalable Redux architecture with 12 domain slices and async thunks, cleanly separating API, state, and presentation layers across feature-based modules.
- Built a centralized Axios instance with request/response interceptors handling automatic Bearer token injection, silent 401 token refresh, and graceful 403 session expiry redirects.
- Implemented a hybrid design system combining Tailwind CSS utility classes with Ant Design component overrides, enabling rapid UI development while maintaining brand consistency through 15+ custom design tokens.
- Integrated real-time features across two channels — Socket.io for live presence and Firebase Cloud Messaging for push notifications — managed through a unified Redux notification state.
- Structured routing with nested protected routes, feature-based code organization, and error boundary fallbacks for production resilience.

# Neblo AI

## One-Line Summary

A full-featured logistics marketplace SPA connecting brokers and carriers with real-time tracking, AI-powered dispatch, and role-based workflows.

## Portfolio Description

Neblo AI is a large-scale transportation management platform that streamlines freight operations for brokers and carriers. I built the entire frontend as a React 19 single-page application, delivering 45+ views spanning load management, a real-time load board, live GPS tracking on interactive maps, AI-powered dispatch inboxes, broadcast messaging, billing with Stripe integration, and rate negotiation workflows.

The application supports multi-tenant, role-based access for 10+ user roles across broker and carrier organizations, with company-context switching and hierarchical permissions. I implemented real-time features using custom WebSocket hooks with automatic reconnection and heartbeat monitoring, and designed the state layer with 26 Redux Toolkit slices backed by a service-per-feature API architecture. Performance was a priority — I configured route-level code splitting, lazy-loaded modals, and manual Vite chunk optimization to keep bundle sizes under control across a 430+ file codebase.

## Key Features

- **Load Board & Marketplace** — Search, filter, and book freight loads with DAT marketplace integration and recent search persistence
- **Live Location Tracking** — Real-time vehicle tracking on Mapbox GL maps with geographic clustering via Supercluster
- **AI Dispatcher Inbox** — AI-powered load matching and dispatch review workflows
- **Role-Based Multi-Tenancy** — 10+ roles across broker/carrier hierarchies with company-context switching
- **Broadcast Messaging** — Group-based load broadcasts with supergroup management
- **Billing & Payments** — Stripe-integrated subscription and payment management
- **Real-Time Notifications** — WebSocket-driven notification system with automatic reconnection and health checks
- **Spot Analytics & Rate Management** — Market rate analysis, quote requests, and negotiation tools

## Technologies Used

| Category             | Technologies                                                                        |
| -------------------- | ----------------------------------------------------------------------------------- |
| **Frontend**         | React 19, Vite 6, React Router 7, JavaScript (ES Modules)                           |
| **State Management** | Redux Toolkit, React-Redux, Redux Persist                                           |
| **Styling**          | Tailwind CSS 3, Radix UI primitives, Ant Design 5, Framer Motion, CVA, Lucide icons |
| **APIs & Real-Time** | Axios (custom interceptors), WebSockets (custom hooks), Recharts, Mapbox GL         |
| **Auth & Security**  | JWT with auto-refresh, MFA (TOTP/Email OTP), reCAPTCHA v3, RBAC                     |
| **Other**            | Stripe, PostHog analytics, DOMPurify, XLSX export, QR code generation, Day.js       |

## Engineering Highlights

- **Custom WebSocket architecture** with exponential backoff reconnection, 30s ping keepalive, and 60s zombie-connection detection — ensuring reliable real-time data across notifications and AI dispatch
- **Scalable state layer** — 26 Redux Toolkit slices each paired with a dedicated service module, creating a clean separation between UI state, async logic, and API calls
- **Performance-optimized code splitting** — route-level lazy loading via custom `createLazyComponent` wrapper, lazy modals, component preloading, and manual Vite chunk strategies (React, Redux, Mapbox, Axios, Lodash) with a 500KB warning threshold
- **Robust auth pipeline** — Axios interceptors handle token injection, automatic 401 refresh with request queuing, company-context headers, and distributed request tracing via unique request IDs
- **Multi-role layout system** — dynamic broker/carrier layout switching with protected routes, role-guarded pages, and hierarchical permission checks across 10+ user roles

# Project Name

DignifyX Admin Hub

# One-Line Summary

Multi-role React admin portal for organizations, users, teams, learning content, access, and reports on the DignifyX platform.

# Portfolio Description

I led frontend development of DignifyX Admin Hub, a multi-tenant administrative web application that lets platform operators and customer organizations manage the DignifyX ecosystem from one interface. The app serves four personas—owner, organization admin, team leader, and adviser—each with dedicated layouts, navigation, and workflows driven by role-based routing.

The client is built around Redux Toolkit Query for REST data fetching, tag-based cache invalidation, and consistent loading and error handling across many admin screens. Reusable UI patterns—a configurable data table, modal-driven create/edit flows, debounced search, and Zod-validated forms with React Hook Form—supported fast delivery of user, team, organization, access, and billing-related features.

Notable work includes bulk user and access workflows with result feedback modals, hierarchical reports with drill-down navigation, an owner dashboard backed by live API metrics, and learning management with rich course authoring via self-hosted TinyMCE. The interface uses shadcn/ui and Tailwind CSS with light/dark theming and responsive, mobile-friendly navigation.

# Key Features

- Role-based portals for owner, org admin, leader, and adviser with protected nested routes
- Organization, user, and team administration with shared detail views and pagination
- Subscription access management and bulk give-access flows with outcome modals
- Operational reports with filters, breadcrumbs, and overview-to-individual drill-down
- Owner dashboard with API-driven organization, user, and learning metrics
- Learning module: course create/edit/view with TinyMCE rich content and lazy-loaded routes
- Authentication flows: login, OTP verification, forgot/reset/set password
- Light/dark theme toggle and responsive sidebar with mobile overlay navigation

# Technologies Used

**Frontend:** React 18, Vite, React Router v6, JavaScript (JSX)

**State Management:** Redux Toolkit, RTK Query, React Context (auth)

**Styling:** Tailwind CSS, shadcn/ui (Radix UI), class-variance-authority, tailwindcss-animate, Lucide icons

**APIs:** REST via RTK Query `fetchBaseQuery`, environment-based `VITE_API_BASE_URL`

**Auth:** Bearer tokens in localStorage, refresh-token mutex in base query, AuthContext logout with cache reset

**Other:** React Hook Form, Zod, Recharts, TinyMCE, Sonner toasts, dayjs, ESLint

# Engineering Highlights

- Modular RTK Query API slices (auth, users, teams, organisations, courses, reports, payments, etc.) with centralized 401 handling and token refresh
- Global logout sequence that blocks in-flight requests, clears persisted auth, and resets Redux/RTK cache to avoid stale protected data
- Reusable `DataTable` with skeleton loading, custom renderers, and nested column support for dense admin grids
- Code-split learning routes with `React.Suspense` to defer heavier course and LMS bundles
- Custom hooks (`useReports`, `useDebounce`, `useSearch`) separating UI state from presentation components

# Project Name

AI & U (SellersGPT)

# One-Line Summary

Multilingual Next.js marketplace helping sellers discover, compare, and review AI tools, software, and marketplaces.

# Portfolio Description

AI & U is a consumer-facing directory and discovery platform for sellers evaluating digital tools. I led the frontend implementation on Next.js 15 with the App Router, delivering localized browsing across AI tools, software, apps, and marketplaces, rich product detail experiences with reviews and alternatives, editorial collections, news, and a community forum.

The interface integrates token-based authentication for user dashboards—favorites, product submissions, and account settings—and a full admin workspace for content, moderation, analytics, and multilingual operations. I prioritized SEO and performance: server-rendered pages with locale-aware metadata and structured data, middleware-driven internationalization, aggressive route prefetching, and production bundle optimizations.

The result is a fast, searchable catalog that supports global audiences and gives internal teams efficient tools to manage listings, engagement, and growth metrics—without sacrificing maintainability across a large, typed React codebase.

# Key Features

- Locale-aware catalog with product listings, categories, tags, and A–Z browse
- Product detail pages with reviews, pricing, alternatives, and authenticated interactions
- Editorial hubs: Editor’s Choice, Just Launched, Most Saved, and marketplace-type views
- News and community forum with tag-based discovery
- User dashboard: favorites, my products, email subscriptions, and account settings
- Admin dashboard: products, reviews, moderation, traffic charts, news, teams, and language management
- Auth flows: login, signup, email verification, password reset, and subscription management

# Technologies Used

**Frontend:** Next.js 15, React 18, TypeScript, App Router

**State Management:** Redux Toolkit, TanStack React Query

**Styling:** Tailwind CSS, shadcn/ui (Radix UI), class-variance-authority

**APIs:** Axios (REST), server-side fetch utilities with locale headers, Next.js rewrites

**Auth:** React Context (`AuthProvider`), token storage, protected dashboard routes

**Other:** React Hook Form, Zod, Chart.js, Google Tag Manager, Lucide icons

# Engineering Highlights

- Built App Router architecture with 50+ locale-scoped routes, splitting server components (SSR, `generateMetadata`, JSON-LD) from client islands for interactivity
- Implemented i18n middleware with dynamic active-language fetching, cookie/Accept-Language detection, and `Accept-Language` propagation to APIs
- Tuned performance via React Query defaults, route prefetch hooks, lazy-loaded UI, webpack chunk splitting, and `optimizePackageImports` for Radix and Lucide
- Shipped SEO patterns: per-locale Open Graph/Twitter metadata, canonical URLs, and structured data on high-traffic templates
- Established scalable UI patterns with shadcn components, namespaced translation modules, and centralized error handling for API forms

# Project Name

Podfolio

# One-Line Summary

Next.js podcast management app with episode curation, membership gating, Stripe billing, and an embeddable, themeable website widget.

# Portfolio Description

Podfolio is a creator-focused web application that helps podcasters discover, curate, and showcase YouTube episodes on their own sites. I led the frontend implementation in Next.js 15 with React 19 and TypeScript, delivering authenticated dashboards, guided onboarding, and a public embed experience creators can drop into any website.

The product centers on a clear creator workflow: sign up, build a profile, search and select episodes with confidence-based filtering, and manage saved content from a sidebar-driven dashboard. Membership tiers control privileges such as video limits, AI-verified results, and widget embedding. I integrated Supabase Auth and client queries with Axios calls to edge functions for search, billing, and widget data, plus global route guards that redirect unauthenticated or non-subscribed users appropriately.

A standout deliverable is the customizable embed widget—configured in-app with theme, layout, colors, and Google Fonts—previewed live and distributed via generated embed code and a lightweight `widget.js` iframe loader. Forms across auth, profile, and widget setup use Formik and Yup with Ant Design and Tailwind for a consistent, accessible UI.

# Key Features

- Full authentication UX: login, signup, forgot password, and reset password with validated forms
- Protected App Router areas with membership checks before dashboard and profile access
- Multi-step onboarding: profile creation, YouTube episode search, and saved selection review
- Episode search modal with confidence filtering and plan-based video limits
- Dashboard with aggregated episode statistics and saved video management
- Widget builder: live preview, theme/layout/color/font controls, and copy-ready embed snippets
- Stripe plan selection, checkout redirect, billing portal, and coupon redemption flows

# Technologies Used

**Frontend:** Next.js 15 (App Router), React 19, TypeScript, Ant Design 5, Tailwind CSS, next/image, next/font (Geist)

**State Management:** React Context (`AuthProvider`, `UserProvider`, `ProgressProvider`)

**Styling:** Tailwind CSS, Ant Design reset/styles, Framer Motion (list and selection animations)

**APIs:** Axios (interceptors, Supabase base URL), Supabase JS client (`auth`, `from` queries), Supabase Edge Functions (`podcast-search`, `get-widget-videos`, Stripe, coupon endpoints)

**Auth:** Supabase Auth, JWT in `localStorage`, route-level guards, 401 redirect handling

**Other:** Formik, Yup, react-toastify, Google Fonts integration for widgets, static `widget.js` embed loader

# Engineering Highlights

- Centralized route utilities (`isProtectedRoute` / `isPublicRoute`) paired with `AuthProvider` and `UserProvider` for consistent access control and membership gating
- Axios request/response interceptors attach bearer tokens and handle session expiry with redirect to login
- Custom `AntdReact19Provider` using Ant Design’s `unstableSetRender` for React 19 compatibility without UI regressions
- Server-rendered public widget route with URL-driven config, dynamic color mixing, and optional Google Font stylesheets
- Typed domain models and Yup validation schemas shared across forms, APIs, and privilege checks for maintainable feature flags

# Project Name

RealFinder

# One-Line Summary

Multi-portal property platform frontend: SEO-first public discovery, role-based dashboards for brokers, owners, and admins.

# Portfolio Description

RealFinder is a production property marketplace delivered as a single Next.js application serving public discovery and three authenticated portals—brokers, owners, and internal admins. I led frontend implementation across marketing pages and dashboard experiences, integrating a REST API while keeping listing browse, property detail, housebooks, and location landing pages server-rendered for crawlability and fast first paint.

The public experience combines SSR and incremental revalidation with client islands for search, favorites, pagination, and browsing history. Dashboards use edge JWT role gating, centralized Axios services, and Redux Toolkit for broker listings, owner property workflows, and admin analytics. Notable product surfaces include multi-step owner listing creation, broker video stories, verification and moderation consoles with country-scoped RBAC, secure data rooms, and Real Brokers discovery with map-aware UI.

The result is a maintainable, TypeScript-first codebase that balances SEO, performance, and complex authenticated workflows without splitting into separate apps.

# Key Features

- Server-rendered home, browse, property, housebook, and geo landing pages with dynamic metadata and structured data
- Role-separated dashboards for brokers (listings, leads, stories, rankings), owners (claims, DIY listings, data rooms), and admins (verification, moderation, importer, geo analytics)
- Firebase-backed member and broker sign-in with backend JWT sessions and edge silent token refresh
- Multi-step listing creation and ownership-claim flows with react-hook-form and reusable step components
- Public favorites, saved listings, browsing history, and Real Brokers search with list/map interaction
- Admin verification center, listing moderation, RBAC permission guards, and AmCharts-powered geo performance views
- Broker push notifications via Pusher Beams and in-app notification contexts
- Dynamic sitemap generation for core and country-scoped marketing routes

# Technologies Used

**Frontend:** Next.js 16 (App Router), React 19, TypeScript, Next.js Image

**State Management:** Redux Toolkit, React Redux (targeted slices for listings, owner listings, admin analytics/geo)

**Styling:** Tailwind CSS v4

**APIs:** Axios (interceptors, server fetch adapter), centralized `src/services/*` modules, Next.js Route Handlers (e.g. geocoding proxy)

**Auth:** Firebase Authentication, JWT cookies/localStorage session, edge `proxy.ts` role routing

**Other:** react-hook-form, Algolia (global search integration), @amcharts/amcharts5, Pusher Beams, Google reCAPTCHA, react-toastify, lucide-react

# Engineering Highlights

- Split rendering strategy: Server Components and ISR on `(marketing)` routes; client dashboards gated at the edge before HTML reaches protected shells
- SEO system with `generateMetadata`, JSON-LD helpers, conditional noindex, and a revalidated dynamic sitemap aligned to country landing slugs
- Thin server `src/lib/*` fetch layer for public SSR plus a single Axios client for authenticated CSR, reducing duplicate API logic
- Scoped global state—Redux limited to dashboard-heavy domains; React Context for favorites, browsing history, and notifications
- Production-oriented Next config (`output: "standalone"`) and dynamic chart imports to keep initial bundles lean on admin analytics pages

# Project Name

Xply-Tech

# One-Line Summary

SEO-first IT agency website: Figma-faithful marketing pages, nine service detail routes, careers funnel, and a production contact pipeline with analytics and bot protection.

# Portfolio Description

Xply-Tech is a production marketing site for an IT and software development company, built as a single Next.js application with fully server-rendered pages for crawlability and fast first paint. I led frontend implementation from Figma through launch—homepage, about, nine expertise landing pages, careers (including opportunities and profile submission), and contact—while keeping copy, metadata, and structured data centralized in a typed data/ layer instead of hardcoded components.

The public experience is Server Component–first: marketing sections ship as HTML with small client islands only where needed—contact form submission, scroll-spy service tabs, mobile navigation, Framer Motion reveals, and CTA/outbound link tracking. Service pages use generateStaticParams and modular section composition (hero, toolkit grids, industries, consulting approach, feature tabs) so each of nine offerings scales from the same architecture. The contact funnel posts to a Next.js Route Handler with Cloudflare Turnstile verification, honeypot spam filtering, field validation, and Nodemailer SMTP delivery, then fires a generate_lead Google Analytics event on success.

Deployed on Vercel with environment-driven integrations (GA4, Turnstile, SMTP), the result is a maintainable, TypeScript-strict codebase that balances SEO, Core Web Vitals, accessibility, and lead capture without unnecessary client-side JavaScript.

# Key Features

- Server-rendered home, about, contact, careers, and nine /services/[slug] pages with per-route generateMetadata, canonical URLs, Open Graph/Twitter cards, and page-specific OG images
- JSON-LD structured data via reusable helpers: Organization, WebSite, Service, ItemList, BreadcrumbList, and LocalBusiness schemas injected per page
- Dynamic sitemap.ts and robots.ts covering core routes and all implemented service slugs
- Google Analytics 4 via @next/third-parties/google, loaded in production only with custom events for CTA clicks, outbound links, and contact form leads (generate_lead)
- Cloudflare Turnstile captcha on the contact form with server-side token verification, plus honeypot and strict payload validation on /api/contact
- SMTP lead delivery through Nodemailer with HTML/text templates and replyTo set to the submitter
- Data-driven content architecture: all copy and service page configs live in src/data/* with shared cards (ServiceCard, TechnologyIconCard) and mandatory SectionHeader patterns
- Careers experience with hiring approach, work environment, open opportunities, and submit-profile flow
- Interactive service detail UX: scroll-spy feature tabs, toolkit/industry grids, and staggered Framer Motion animations with useReducedMotion support
- Responsive layout system: mobile-first grids, sticky header with expertise dropdown, accessible skip link, semantic landmarks, and next/image throughout
- Brand design system mapped from Figma to CSS tokens (brand-*), mesh gradients, gradient text/borders, Manrope + Montserrat via next/font/google

# Technologies Used

**Frontend:** Next.js 16 (App Router), React 19, TypeScript (strict), Next.js Image, Lucide React

**Styling:** Tailwind CSS v4, shadcn/ui primitives, custom brand-* design tokens in globals.css

**Animations:** Framer Motion (centralized variants in lib/animations.ts; FadeIn, StaggerContainer client wrappers)

**SEO:** Next.js Metadata API, lib/schema.ts JSON-LD builders, sitemap.ts, robots.ts, per-page OG assets

**Analytics:** Google Analytics 4 (@next/third-parties/google), AnalyticsLink wrapper for CTA/outbound event tracking, trackLead on successful form submit

**Forms & Security:** Cloudflare Turnstile (@marsidev/react-turnstile), server verification in lib/turnstile.ts, honeypot field, field-length and option whitelist validation

**Backend / APIs:** Next.js Route Handlers (/api/contact), Nodemailer (SMTP), environment-based config for production secrets

**Deployment:** Vercel (Next.js-native hosting, env vars for GA, Turnstile, and SMTP)

**Other:** @base-ui/react dropdowns, modular section/card component library, Figma-to-web responsive implementation patterns

# Engineering Highlights

- Server-first rendering strategy: pages and marketing sections stay Server Components; "use client" limited to forms, nav, tabs, animations, and analytics links—content remains in the initial HTML for SEO
- Consistent SEO system: metadata template in root layout, generateMetadata on dynamic service routes, JSON-LD injected in page JSX (not layout), and sitemap aligned to getImplementedServiceSlugs()
- Thin integration layers: lib/analytics.ts for GA events, lib/turnstile.ts for captcha verification, lib/mail.ts for SMTP—Route Handler orchestrates validation → captcha → email
- Production-safe analytics: GA loads only when NODE_ENV === "production" and NEXT_PUBLIC_GA_MEASUREMENT_ID is set; no tracking noise in development
- Content scalability: nine service pages share one [slug] template and typed ServicePageData; adding a service is data + static params, not a new page shell
- Performance-oriented UX: next/font with display: swap, priority images above the fold, animation wrappers isolated to keep parent sections as server components, reduced-motion fallbacks
- Accessible, semantic HTML: single <h1> per page, SectionHeader for section headings, aria-label on sections, skip-to-content link, and form states with role="alert" / role="status"
