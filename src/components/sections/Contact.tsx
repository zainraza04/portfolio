import { ContactForm } from "@/components/sections/ContactForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { socialLinks as socialUrls } from "@/data/social";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const contactInfo = [
  { icon: Mail, label: "Email", value: "cs.zainraza@gmail.com" },
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
  { icon: Clock, label: "Availability", value: "Open to Remote" },
];

const socialLinks = [
  { icon: FaGithub, href: socialUrls.github, label: "GitHub" },
  { icon: FaLinkedin, href: socialUrls.linkedin, label: "LinkedIn" },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <p className="mb-3 font-mono text-sm text-accent-primary">
            {"// get_in_touch"}
          </p>
          <h2 className="mb-12 text-3xl text-text-primary sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
        </RevealOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll delay={0.1}>
            <div className="space-y-6 text-text-secondary">
              <p>
                I&apos;m open to full-time roles, freelance engagements, and interesting
                project collaborations. If you have an opportunity or just want to
                connect, I&apos;d love to hear from you.
              </p>

              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-accent-primary" />
                    <div>
                      <p className="font-mono text-xs text-text-muted">{label}</p>
                      <p className="text-sm text-text-primary">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 pt-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center border border-border text-text-secondary transition-all duration-300",
                      "hover:border-accent-primary hover:text-accent-secondary hover:shadow-[0_0_16px_color-mix(in_srgb,var(--accent-glow)_35%,transparent)]",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="border border-border bg-bg-secondary p-6 sm:p-8">
              <div className="mb-6 border-b border-border pb-4 font-mono text-xs text-text-muted">
                contact.form — terminal input
              </div>
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
