import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { ClientShell } from "@/components/layout/ClientShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zainraza.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zain Raza — Full Stack Engineer",
    template: "%s | Zain Raza",
  },
  description:
    "Full Stack Engineer specializing in React, Next.js, NestJS, and PostgreSQL. Building scalable web applications with clean code and modern architecture.",
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
    title: "Zain Raza — Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in React, Next.js, NestJS, and PostgreSQL.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Raza — Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in React, Next.js, NestJS, and PostgreSQL.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
