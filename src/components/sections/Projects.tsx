"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

import Image from "next/image";

const colorMap: Record<string, string> = {
  purple: "from-purple-600 to-indigo-700",
  blue: "from-blue-600 to-cyan-600",
  green: "from-emerald-600 to-teal-600",
  orange: "from-orange-500 to-red-600",
  pink: "from-pink-500 to-rose-600",
};

const iconMap: Record<string, string> = {
  purple: "🧠",
  blue: "🤖",
  green: "🌱",
  orange: "🔥",
  pink: "💝",
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"featured" | "github">("featured");

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 opacity-80 inter-var">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight inter-var">Technical Works</h2>
            <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("featured")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 interactive inter-var",
                activeTab === "featured"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-foreground/60 hover:text-white"
              )}
            >
              Featured Projects
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 interactive inter-var",
                activeTab === "github"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-foreground/60 hover:text-white"
              )}
            >
              GitHub
            </button>
          </div>
        </div>

        {activeTab === "featured" ? (
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {portfolioData.projects.map((project, index) => {
              const colSpan =
                project.size === "large" ? "md:col-span-6 lg:col-span-12" :
                  project.size === "medium" ? "md:col-span-3 lg:col-span-6" :
                    "md:col-span-3 lg:col-span-4";

              const isHorizontal = project.size === "large";
              const gradientClass = colorMap[project.color] || "from-purple-600 to-indigo-700";
              const icon = iconMap[project.color] || "💻";

              return (
                <ScrollReveal
                  key={project.slug}
                  className={cn("h-full", colSpan)}
                  delay={0.1 * (index % 3)}
                >
                  <Link href={`/projects/${project.slug}`} className="block h-full">
                    <GlowCard className="h-full group interactive overflow-hidden">
                      <div className={cn(
                        "flex flex-col h-full",
                        isHorizontal ? "lg:flex-row" : "flex-col"
                      )}>
                        {/* Image Section */}
                        <div className={cn(
                          "relative overflow-hidden shrink-0 flex items-center justify-center bg-[#0c0e12]",
                          isHorizontal
                            ? "lg:w-[50%] h-64 lg:h-auto rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
                            : "w-full h-52 rounded-t-2xl"
                        )}>
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className={cn("absolute inset-0 bg-gradient-to-br", gradientClass, "opacity-20")}></div>
                          )}

                          {/* Fallback Icon if image fails or for styling */}
                          {!project.image && (
                            <span className={cn(
                              "opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 z-10",
                              isHorizontal ? "text-8xl" : "text-6xl"
                            )}>
                              {icon}
                            </span>
                          )}

                          {/* Interactive overlay on hover */}
                          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1] text-sm inter-var">
                              View Project Details
                            </span>
                          </div>
                        </div>

                        {/* Content container */}
                        <div className={cn(
                          "p-6 flex flex-col flex-1 relative",
                          isHorizontal ? "lg:p-8 lg:justify-center" : ""
                        )}>
                          {/* Badges */}
                          {(project as any).badges && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {((project as any).badges as string[]).map((badge, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-[9px] font-bold uppercase tracking-widest text-primary"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded bg-white/5 border border-white/10 text-foreground/70">
                              {project.category}
                            </span>
                          </div>

                          <h3 className={cn(
                            "font-bold mb-2 transition-colors leading-tight",
                            isHorizontal ? "text-2xl lg:text-3xl" : "text-lg md:text-xl",
                          )}>
                            {project.title}
                          </h3>

                          <p className={cn(
                            "text-foreground/60 leading-relaxed mb-4 flex-1",
                            isHorizontal ? "text-base max-w-xl" : "text-sm",
                            !isHorizontal && "line-clamp-2"
                          )}>
                            {project.description}
                          </p>

                          {/* Tech stack tags */}
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t, i) => (
                              <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-[11px] text-foreground/60">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <ScrollReveal>
              <a href="https://github.com/athallacode" target="_blank" rel="noreferrer" className="block h-full group">
                <GlowCard className="h-full p-10 flex flex-col items-center text-center interactive bg-white/5 border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">@athallacode</h3>
                  <p className="text-foreground/60 text-lg">Primary GitHub Profile</p>
                  
                  <div className="mt-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium group-hover:bg-white/10 transition-colors">
                    View Profile ↗
                  </div>
                </GlowCard>
              </a>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <a href="https://github.com/nauvalathalla" target="_blank" rel="noreferrer" className="block h-full group">
                <GlowCard className="h-full p-10 flex flex-col items-center text-center interactive bg-white/5 border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">@nauvalathalla</h3>
                  <p className="text-foreground/60 text-lg">Secondary GitHub Profile</p>
                  
                  <div className="mt-8 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium group-hover:bg-white/10 transition-colors">
                    View Profile ↗
                  </div>
                </GlowCard>
              </a>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
