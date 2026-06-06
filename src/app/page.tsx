import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function HomePage() {
  const blogPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills skillGroups={skillGroups} />
        <SectionDivider />
        <Experience experience={experience} />
        <SectionDivider />
        <Projects projects={projects} />
        <SectionDivider />
        <Blog posts={blogPosts} />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
