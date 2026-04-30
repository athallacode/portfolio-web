"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({ 
  children, 
  className, 
  delay = 0,
  direction = "up"
}: ScrollRevealProps) {
  
  const getVariant = () => {
    switch(direction) {
      case "left": return slideInLeft;
      case "right": return slideInRight;
      case "up":
      default: return fadeInUp;
    }
  };
  
  const variant = getVariant();
  // Adjust delay if provided
  const customVariant = delay 
    ? { 
        ...variant, 
        visible: { 
          ...variant.visible, 
          transition: { ...variant.visible.transition, delay } 
        } 
      }
    : variant;

  return (
    <motion.div
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
