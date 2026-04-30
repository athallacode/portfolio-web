"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function LanyardIDCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for the raw drag position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs that follow the drag values for the lanyard string
  const springConfig = { damping: 20, stiffness: 200, mass: 1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // SVG Path calculation
  const path = useTransform([springX, springY], ([curX, curY]) => {
    const anchorX = 200; 
    const anchorY = 0;
    // The card hangs starting at Y=20
    const cardTopCenterX = 200 + (curX as number);
    const cardTopCenterY = 20 + (curY as number); 

    const cpX = anchorX + ((curX as number) * 0.2);
    const cpY = (anchorY + cardTopCenterY) / 2;

    return `M ${anchorX} ${anchorY} Q ${cpX} ${cpY} ${cardTopCenterX} ${cardTopCenterY}`;
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-[400px] h-[650px] flex justify-center items-start select-none touch-none overflow-visible"
    >
      {/* The Lanyard String */}
      <svg 
        className="absolute inset-0 pointer-events-none z-0 overflow-visible"
        width="100%" 
        height="100%"
      >
        <defs>
          <linearGradient id="lanyardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          stroke="url(#lanyardGradient)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={200} cy={0} r={5} fill="#333" />
      </svg>

      {/* The ID Card */}
      <motion.div
        style={{ x, y }}
        drag
        // Drag constraints at 0,0 with high elasticity creates the snap-back effect
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        whileDrag={{ cursor: "grabbing", scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className="absolute top-[20px] left-1/2 -translate-x-1/2 z-10 w-[260px] aspect-[3/4.5] cursor-grab active:cursor-grabbing touch-none select-none"
      >
        <div className="absolute inset-0 glass-dark border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden p-2">
          <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative border border-white/10">
            <img 
              src="/images/profile.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            {/* Real reflections overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/30 pointer-events-none" />
          </div>
          
          {/* Lanyard connection hole visual */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-black/60 rounded-full border border-white/5" />
        </div>

        {/* Dynamic Shadow */}
        <motion.div 
          style={{
            x: useTransform(x, [-100, 100], [30, -30]),
            y: useTransform(y, [-100, 100], [30, -30]),
            opacity: useTransform(y, [0, 300], [0.4, 0.1]),
            scale: useTransform(y, [0, 300], [1, 0.9])
          }}
          className="absolute inset-6 bg-black/80 blur-[40px] -z-10 rounded-[3rem]" 
        />
      </motion.div>
    </div>
  );
}
