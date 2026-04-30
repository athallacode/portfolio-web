"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HolographicProfile() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center select-none touch-none">
      
      {/* Soft Ambient Glow Behind Photo */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[280px] h-[380px] bg-primary/30 blur-[80px] rounded-[3rem] -z-10"
      />

      {/* Main Floating Photo Container */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-[280px] h-[380px] rounded-[2.5rem] p-2 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
      >
        {/* Inner Photo Wrapper */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0a0c12]">
          <Image
            src="/images/profile.png"
            alt="Nauval Yusriya Athalla"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
          
          {/* Subtle Inner Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

    </div>
  );
}
