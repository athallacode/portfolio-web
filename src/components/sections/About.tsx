"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import GlowCard from "@/components/ui/GlowCard";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <section id="about" ref={containerRef} className="relative bg-background pt-20">
      {/* Sticky Heading: Apple "Inilah Pro" Style */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.h2 
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [0, 1, 1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [0.8, 1, 1, 1.2]),
          }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white text-center px-6"
        >
          Data Driven.
        </motion.h2>
        
        <motion.h2 
          style={{
            opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]),
            scale: useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0.8, 1, 1, 1.2]),
          }}
          className="absolute text-5xl md:text-8xl font-bold tracking-tighter text-white text-center px-6"
        >
          Intelligence Engineered.
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 pb-32">
        {/* Spacer for sticky animation to complete before content appears */}
        <div className="h-[120vh]" />

        {/* Intro Text Section */}
        <div className="h-[60vh] flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-medium text-foreground/70 max-w-4xl leading-tight tracking-tight"
          >
            Beyond building high-performance systems, I am deeply committed to using technology as a force for <span className="text-white">positive social change</span>. My journey is driven by a curiosity for complex data patterns.
          </motion.p>
        </div>

        {/* Bento Grid: Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
          {/* Card 1: NLP & AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowCard className="h-[400px] rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden bg-white/5 border-white/10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46L2.34 15.71a1 1 0 0 0 1.95.46l4.71-11.67a.5.5 0 0 1 .96.18V19a1 1 0 0 0 2 0V13h2v6a1 1 0 0 0 2 0V4.5a2.5 2.5 0 0 0-4.96-.46Z"></path><path d="M14 8h7"></path><path d="M14 12h7"></path></svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">NLP & AI</h3>
                <p className="text-lg text-foreground/50 max-w-xs">Building systems that understand and generate human language with precision.</p>
              </div>
              {/* Abstract decorative element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] group-hover:bg-primary/40 transition-all duration-700" />
            </GlowCard>
          </motion.div>

          {/* Card 2: Data Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlowCard className="h-[400px] rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden bg-white/5 border-white/10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Data Analysis</h3>
                <p className="text-lg text-foreground/50 max-w-xs">Architecting data-driven solutions to solve complex business problems.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[80px] group-hover:bg-purple-500/40 transition-all duration-700" />
            </GlowCard>
          </motion.div>

          {/* Card 3: Data Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowCard className="h-[400px] rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden bg-white/5 border-white/10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Data Engineering</h3>
                <p className="text-lg text-foreground/50 max-w-xs">Designing robust pipelines and scalable cloud architectures for modern data.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] group-hover:bg-blue-500/40 transition-all duration-700" />
            </GlowCard>
          </motion.div>

          {/* Card 4: ML Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlowCard className="h-[400px] rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden bg-white/5 border-white/10">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path></svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">ML Engineering</h3>
                <p className="text-lg text-foreground/50 max-w-xs">Deploying production-ready models and optimizing automated workflows.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[80px] group-hover:bg-emerald-500/40 transition-all duration-700" />
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
