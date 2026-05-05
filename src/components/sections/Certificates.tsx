"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "@/components/ui/Portal";
import { ArrowRight } from "lucide-react";

export default function Certificates() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const closeModal = () => setSelectedItem(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);

  const { certificates } = portfolioData;

  if (!certificates || certificates.length === 0) return null;

  return (
    <>
      <section id="certificates" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10 -translate-x-1/3 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 opacity-80">Credentials</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white inter-var">Certificates & Licenses</h2>
              <div className="w-20 h-1 bg-blue-500 mt-6 rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((item, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <div onClick={() => setSelectedItem(item)} className="cursor-pointer h-full">
                  <GlowCard glowColor="rgba(59, 130, 246, 0.4)" className="h-full flex flex-col group relative z-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col justify-center bg-[var(--card)] rounded-b-2xl border-x border-b border-white/5">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors flex items-center justify-between text-white inter-var">
                        {item.title}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </h3>
                      <p className="text-foreground/70 text-sm inter-var">{item.organization}</p>
                      {item.date && (
                        <p className="text-foreground/50 text-xs mt-2 font-mono">{item.date}</p>
                      )}
                    </div>
                  </GlowCard>
                </div>
              </ScrollReveal>
            ))}
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
                className="relative w-full max-w-4xl bg-[#11141a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                {/* Image Section */}
                <div className="relative w-full h-[50vh] md:h-[60vh] bg-[#0c0e12] overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-contain z-10"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 overflow-y-auto shrink-0 bg-[#11141a]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight text-white inter-var">{selectedItem.title}</h2>
                    {selectedItem.date && (
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-500/30">
                        {selectedItem.date}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-base inter-var">
                    {selectedItem.organization}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
