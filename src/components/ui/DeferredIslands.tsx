"use client";

import dynamic from "next/dynamic";
import { LazyMount } from "@/components/ui/LazyMount";
import type { Project } from "@/data/projects";

const ProjectsFilter = dynamic(
  () =>
    import("@/components/sections/ProjectsFilter").then(
      (mod) => mod.ProjectsFilter,
    ),
  { ssr: false },
);

const ContactForm = dynamic(
  () =>
    import("@/components/sections/ContactForm").then((mod) => mod.ContactForm),
  { ssr: false },
);

const AboutTerminal = dynamic(
  () =>
    import("@/components/sections/AboutTerminal").then(
      (mod) => mod.AboutTerminal,
    ),
  { ssr: false },
);

export function DeferredProjectsFilter({ projects }: { projects: Project[] }) {
  return (
    <LazyMount minHeight="28rem" rootMargin="100px 0px">
      <ProjectsFilter projects={projects} />
    </LazyMount>
  );
}

export function DeferredContactForm() {
  return (
    <LazyMount minHeight="22rem" rootMargin="100px 0px">
      <ContactForm />
    </LazyMount>
  );
}

export function DeferredAboutTerminal() {
  return (
    <LazyMount minHeight="16rem" rootMargin="100px 0px">
      <AboutTerminal />
    </LazyMount>
  );
}
