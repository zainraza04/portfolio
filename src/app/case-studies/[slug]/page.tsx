import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/data/case-studies";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  const canonical = `/case-studies/${caseStudy.slug}`;

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description,
    alternates: { canonical },
    openGraph: {
      title: `${caseStudy.seo.title} | Zain Raza`,
      description: caseStudy.seo.description,
      type: "article",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.seo.title} | Zain Raza`,
      description: caseStudy.seo.description,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <CaseStudyLayout caseStudy={caseStudy} />
      <Footer />
    </>
  );
}
