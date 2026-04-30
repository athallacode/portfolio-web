"use client";

import { Layout, Server, Database, Cpu, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ScrollReveal from "../ui/ScrollReveal";
import SkillsRadarChart from "../ui/SkillsRadarChart";

const IconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Cpu,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 opacity-80">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white inter-var">Technical Proficiency</h2>
            <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Radar Chart Area */}
          <div className="relative order-2 lg:order-1">
            <div className="space-y-8 mb-12">
              <ScrollReveal direction="left">
                <h3 className="text-2xl font-bold text-white mb-4">Expertise Matrix</h3>
                <p className="text-foreground/60 leading-relaxed inter-var max-w-md">
                  Visualizing the intersection of theoretical mastery and practical engineering implementation across the software lifecycle.
                </p>
              </ScrollReveal>
            </div>

            <SkillsRadarChart />
          </div>

          {/* Right Side: Skill Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {skills.map((category: any, index: number) => {
              const Icon = IconMap[category.icon] || Layout;
              return (
                <ScrollReveal key={category.category} delay={index * 0.1}>
                  <div className="group relative p-8 rounded-3xl glass hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                    <div
                      className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 opacity-20 group-hover:opacity-100 rounded-b-3xl"
                      style={{ backgroundColor: category.color }}
                    />

                    <div className="flex flex-col gap-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary/10 transition-colors"
                      >
                        <Icon className="w-6 h-6" style={{ color: category.color }} />
                      </div>

                      <h3 className="text-xl font-bold text-white">{category.category}</h3>

                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill: string) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-medium text-foreground/60 transition-all duration-300 group-hover:border-primary/20 group-hover:text-foreground hover:bg-white/10 inter-var"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
