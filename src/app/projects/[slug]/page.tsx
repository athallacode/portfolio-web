import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

// This generates static paths at build time
export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = portfolioData.projects.findIndex(p => p.slug === slug);
  const project = portfolioData.projects[projectIndex];

  if (!project) return notFound();

  const prevProject = projectIndex > 0 ? portfolioData.projects[projectIndex - 1] : portfolioData.projects[portfolioData.projects.length - 1];
  const nextProject = projectIndex < portfolioData.projects.length - 1 ? portfolioData.projects[projectIndex + 1] : portfolioData.projects[0];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <ScrollReveal>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-foreground/60 hover:text-white transition-colors mb-12 interactive">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Projects
          </Link>
        </ScrollReveal>

        {/* Hero Section */}
        <ScrollReveal delay={0.1}>
          <div className="w-full aspect-[21/9] md:aspect-[2.5/1] relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-12 group">
            <div className="absolute inset-0 bg-background/20 z-10"></div>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded bg-white/5 border border-white/10 text-foreground/70">
                {project.category}
              </span>
              <span className="text-sm font-medium text-foreground/50">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed font-light max-w-3xl">
              {project.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full h-[1px] bg-white/10 mb-16"></div>

        {/* Case Study Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-24">
          <div className="col-span-1 md:col-span-8 flex flex-col gap-16">
            {/* Problem */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">🔍</span> The Problem
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">💡</span> The Solution
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">⚡</span> Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Impact */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">🏆</span> Impact
                </h2>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  <p className="text-lg font-medium leading-relaxed relative z-10 text-white/90">
                    "{project.impact}"
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-span-1 md:col-span-4 flex flex-col gap-10">
            {/* Tech Stack */}
            <ScrollReveal>
              <div className="p-6 rounded-2xl bg-card border border-white/5">
                <h3 className="text-sm font-mono tracking-widest uppercase text-foreground/50 mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Links */}
            <ScrollReveal>
              <div className="flex flex-col gap-3">
                <a href={project.links.demo} className="w-full py-4 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98] interactive group">
                  View Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
                <a href={project.links.github} className="w-full py-4 bg-white/5 text-white border border-white/10 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-[0.98] interactive">
                  View Source Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-16"></div>

        {/* Next / Prev Project Navigation */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href={`/projects/${prevProject.slug}`} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col items-start interactive">
              <span className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Previous Project
              </span>
              <span className="text-xl font-bold">{prevProject.title}</span>
            </Link>

            <Link href={`/projects/${nextProject.slug}`} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group flex flex-col items-end text-right interactive">
              <span className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-3 flex items-center gap-2">
                Next Project
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
              <span className="text-xl font-bold">{nextProject.title}</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
