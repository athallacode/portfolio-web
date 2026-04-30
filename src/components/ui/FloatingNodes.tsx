"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Binary, Code2, Sparkles, Brain } from "lucide-react";
import { useState, useEffect } from "react";

const icons = [
  { Icon: Cpu, color: "text-blue-500/20", size: 40, x: "10%", y: "20%", delay: 0 },
  { Icon: Database, color: "text-purple-500/20", size: 30, x: "85%", y: "15%", delay: 1 },
  { Icon: Binary, color: "text-indigo-500/20", size: 35, x: "75%", y: "70%", delay: 2 },
  { Icon: Code2, color: "text-blue-400/20", size: 45, x: "15%", y: "75%", delay: 0.5 },
  { Icon: Brain, color: "text-violet-500/20", size: 32, x: "50%", y: "10%", delay: 1.5 },
  { Icon: Sparkles, color: "text-cyan-500/20", size: 24, x: "40%", y: "85%", delay: 3 },
];

export default function FloatingNodes() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 15, -15, 0],
            y: [0, -20, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: item.delay },
            scale: { duration: 1, delay: item.delay },
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${item.color}`}
          style={{ left: item.x, top: item.y }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
        </motion.div>
      ))}
      
      {isMounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
