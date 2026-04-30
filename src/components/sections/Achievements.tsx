"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "@/components/ui/Portal";
import { Calendar, ArrowRight, Trophy } from "lucide-react";

export default function Achievements() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // function to close modal
  const closeModal = () => setSelectedItem(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);

  const { featured, compact } = portfolioData.achievements;

  return (
    <>
      <section id="achievements" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4 opacity-80">Honors</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white inter-var">Competitions & Awards</h2>
              <div className="w-20 h-1 bg-amber-500 mt-6 rounded-full"></div>
            </div>
          </ScrollReveal>

          {/* Featured Hero Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {featured.map((item, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div onClick={() => setSelectedItem(item)} className="cursor-pointer h-full">
                  <GlowCard glowColor="rgba(245, 158, 11, 0.4)" className="h-full flex flex-col group relative z-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                      {/* Year badge */}
                      <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-xs font-bold tracking-wider rounded-full border border-white/10">
                        🏆 {item.year}
                      </div>
                      
                      {/* Photo */}
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-[var(--card)] rounded-b-2xl border-x border-b border-white/5">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors flex items-center justify-between text-white inter-var">
                        {item.title}
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-sm line-clamp-2 inter-var">{item.description}</p>
                    </div>
                  </GlowCard>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Compact Achievements / Timeline */}
          <div className="relative max-w-4xl mx-auto pt-10">
            {/* Vertical Line */}
            <div className="absolute left-[36px] md:left-1/2 top-10 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {compact.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <ScrollReveal 
                    key={index} 
                    delay={0.1 * index}
                    direction={isEven ? "left" : "right"}
                  >
                    <div className={cn(
                      "relative flex flex-col md:flex-row items-center gap-6 md:gap-0",
                      isEven ? "md:flex-row-reverse" : ""
                    )}>
                      
                      {/* Timeline Node */}
                      <div className="absolute left-[30px] md:left-1/2 top-1/2 w-3 h-3 rounded-full border-2 border-amber-500 bg-background md:-translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"></div>

                      {/* Content */}
                      <div className={cn(
                        "w-full md:w-1/2 pl-20 md:pl-0",
                        isEven ? "md:pr-14" : "md:pl-14"
                      )}>
                        <div 
                           onClick={() => setSelectedItem(item)}
                           className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all flex items-center gap-4 group cursor-pointer shadow-sm hover:shadow-md"
                        >
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 group-hover:scale-110 transition-transform bg-white/5 border border-white/10 flex items-center justify-center">
                            {item.image ? (
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            ) : (
                              <span className="text-2xl">{item.icon}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className={cn("font-bold text-base mb-1 leading-tight transition-colors group-hover:text-amber-400 flex items-center justify-between text-white inter-var")}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-foreground/60 line-clamp-2 inter-var">{item.description}</p>
                          </div>
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

      <Portal>
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-[#11141a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                {/* Left Side: Image Section */}
                <div className="relative w-full md:w-[50%] h-[300px] md:h-auto shrink-0 bg-[#0c0e12] overflow-hidden border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center p-4">
                  {selectedItem.image ? (
                    <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                      <Image 
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        fill
                        className="object-contain z-10"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <span className="text-7xl">{selectedItem.icon}</span>
                    </div>
                  )}
                </div>

                {/* Right Side: Content Section */}
                <div className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {selectedItem.year && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full border border-primary/30 shadow-lg shadow-primary/10 inter-var">
                        🏆 {selectedItem.year}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl md:text-[2.5rem] font-bold mb-4 leading-tight text-white inter-var">{selectedItem.title}</h2>
                  <div className="w-16 h-1.5 bg-primary rounded-full mb-8"></div>
                  
                  <p className="text-foreground/80 leading-relaxed text-base mb-10 inter-var">
                    {selectedItem.description}
                  </p>
                  
                  {/* Extended Details */}
                  {selectedItem.extendedDetails && (
                    <div className="space-y-8 pt-8 border-t border-white/10 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {selectedItem.extendedDetails.role && (
                          <div>
                            <h4 className="text-[10px] font-mono text-primary/80 mb-2 uppercase tracking-[0.2em]">Role</h4>
                            <p className="text-white font-medium inter-var">{selectedItem.extendedDetails.role}</p>
                          </div>
                        )}
                        {selectedItem.extendedDetails.teamSize && (
                          <div>
                            <h4 className="text-[10px] font-mono text-primary/80 mb-2 uppercase tracking-[0.2em]">Team Size</h4>
                            <p className="text-white font-medium inter-var">{selectedItem.extendedDetails.teamSize}</p>
                          </div>
                        )}
                      </div>
                      
                      {selectedItem.extendedDetails.technologies && selectedItem.extendedDetails.technologies.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-mono text-primary/80 mb-3 uppercase tracking-[0.2em]">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.extendedDetails.technologies.map((tech: string, i: number) => (
                              <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-foreground/80 border border-white/10 inter-var transition-colors hover:border-primary/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.extendedDetails.highlights && selectedItem.extendedDetails.highlights.length > 0 && (
                        <div>
                          <h4 className="text-[10px] font-mono text-primary/80 mb-4 uppercase tracking-[0.2em]">Key Highlights</h4>
                          <ul className="space-y-3">
                            {selectedItem.extendedDetails.highlights.map((highlight: string, i: number) => (
                              <li key={i} className="flex gap-4 text-sm text-foreground/70 leading-relaxed group">
                                <span className="text-primary shrink-0 mt-1 transition-transform group-hover:scale-125">✦</span>
                                <span className="inter-var">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
