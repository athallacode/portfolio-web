"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import MeshGradient from "@/components/ui/MeshGradient";
import HolographicProfile from "@/components/ui/HolographicProfile";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { about } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for subtle parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) / 120);
      y.set((e.clientY - centerY) / 120);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-background flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-background z-0" />
      <MeshGradient className="opacity-30 z-0" />

      <div className="relative z-20 w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto gap-12 lg:gap-8 pt-10 lg:pt-0">
        
        {/* Text Content (Left on Desktop) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 z-10 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-medium tracking-widest text-white/60 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-xl">
              INNOVATION & ENGINEERING
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 pointer-events-auto"
          >
            <AnimatedText
              text={about.name}
              className="text-4xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[1.1] block text-white"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl font-medium text-white/50 tracking-wide mb-10 max-w-xl mx-auto lg:mx-0 pointer-events-auto leading-relaxed"
          >
            {about.role}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pointer-events-auto w-full lg:w-auto"
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-sm tracking-tight transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium text-sm tracking-tight transition-all flex items-center justify-center gap-2 active:scale-95 backdrop-blur-md w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Holographic Profile (Right on Desktop) */}
        <motion.div
          style={{
            x: mouseXSpring,
            y: mouseYSpring
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 scale-[0.8] md:scale-[0.9] lg:scale-[1] pointer-events-auto mb-10 lg:mb-0"
        >
          <HolographicProfile />
        </motion.div>
      </div>
    </section>
  );
}
