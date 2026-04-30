"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSpotlightProps {
  children?: React.ReactNode;
  className?: string;
  gradientColor?: string;
}

export default function HeroSpotlight({
  children,
  className,
  gradientColor = "rgba(99, 102, 241, 0.15)",
}: HeroSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={cn("relative group/spotlight overflow-hidden", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, ${gradientColor}, transparent 80%)`,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
