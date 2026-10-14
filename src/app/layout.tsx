import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { ClientShell } from "@/components/layout/ClientShell";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
  preload: false,
});

const siteUrl = siteConfig.siteUrl;
const title = "Zain Raza — Full-Stack Developer | Next.js, React & NestJS";
const description =
  "Full-Stack Developer building production-ready SaaS products, web applications, dashboards, and backend systems using Next.js, React, NestJS, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Zain Raza",
  },
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Zain Raza",
  ],
  authors: [{ name: "Zain Raza" }],
  creator: "Zain Raza",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Zain Raza Portfolio",
    title,
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteUrl,
  email: siteConfig.email,
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Node.js",
    "Full-Stack Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full bg-bg-primary text-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
