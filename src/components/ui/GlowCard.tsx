"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltEnabled?: boolean;
}

export default function GlowCard({ 
  children, 
  className,
  glowColor = "rgba(99, 102, 241, 0.5)", // default primary color
  tiltEnabled = true
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  // Use MotionValues to bypass React state re-renders for heavy components (images)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse tracking slightly
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to center smoothly when leaving
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    }
  };

  // Convert rgba to transparent for gradient
  const transparentColor = glowColor.replace(/[\d.]+\)$/g, '0)');
  const background = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, ${glowColor} 0%, ${transparentColor} 60%)`;

  // Tilt effects (bypasses React state)
  const maxRotate = 5;
  const rotateX = useTransform(springY, y => {
    if (!tiltEnabled || !isHovered || !cardRef.current) return 0;
    const height = cardRef.current.getBoundingClientRect().height;
    return ((y / height) - 0.5) * -maxRotate;
  });
  const rotateY = useTransform(springX, x => {
    if (!tiltEnabled || !isHovered || !cardRef.current) return 0;
    const width = cardRef.current.getBoundingClientRect().width;
    return ((x / width) - 0.5) * maxRotate;
  });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: tiltEnabled && isHovered ? rotateX : 0,
        rotateY: tiltEnabled && isHovered ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      animate={{ scale: isHovered && tiltEnabled ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl glass-dark overflow-hidden will-change-transform transition-all duration-300",
        className
      )}
    >
      {/* Interactive Glow Effect */}
      <motion.div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background,
          opacity: isHovered && isDesktop ? 1 : 0,
        }}
      />
      
      {/* Content wrapper to stay above glow */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
