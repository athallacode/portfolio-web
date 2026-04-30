"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import ScrollReveal from "../ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16 px-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 opacity-80">My Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white inter-var">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "right" : "left"}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 md:-translate-x-1/2 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                    {exp.image && (
                      <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/5">
                        <Image
                          src={exp.image}
                          alt={exp.role}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>
                    )}
                    <span className="text-xs font-mono text-primary font-bold tracking-widest mb-2 block uppercase">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1 tracking-tight text-white">{exp.role}</h3>
                    <p className="text-foreground/60 font-medium mb-4">{exp.company}</p>

                    <p className="text-sm text-foreground/50 leading-relaxed mb-6 inter-var">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] uppercase font-bold tracking-wider text-foreground/40 hover:border-primary/20 hover:text-primary transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block w-[45%]" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
