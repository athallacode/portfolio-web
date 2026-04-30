"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "INITIALIZING NEURAL_LINK...",
  "CONNECTING TO GCP_PROD_01...",
  "LOADING DATA_PIPELINES (SPARK/AIRBYTE)...",
  "ARCHITECTING SCALABLE SOLUTIONS...",
  "NAUVAL_Y_ATHALLA: ACCESS_GRANTED"
];

export default function SystemLoader({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= bootLines.length - 1) {
          clearInterval(lineInterval);
          setTimeout(onComplete, 800); // Final delay before transition
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1, ease: [0.7, 0, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Matrix/Data Stream effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(99,102,241,0.2)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline" />
      </div>

      <div className="max-w-md w-full space-y-12 relative">
        {/* Terminal Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
          </div>
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">System_v2.0.26</span>
        </div>

        {/* Lines */}
        <div className="space-y-3 min-h-[140px]">
          {bootLines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: i <= currentLine ? 1 : 0,
                x: i <= currentLine ? 0 : -10
              }}
              className="flex items-center gap-4"
            >
              <span className={i === currentLine ? "text-primary" : "text-white/20"}>
                {i <= currentLine ? ">" : " "}
              </span>
              <span className={cn(
                "font-mono text-xs tracking-wider",
                i === currentLine ? "text-white" : "text-white/20",
                i === bootLines.length - 1 && "text-primary font-bold"
              )}>
                {line}
              </span>
              {i === currentLine && (
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-1.5 h-4 bg-primary"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-mono text-white/40 tracking-widest">LOADING_SEQUENCES</span>
            <span className="text-xl font-mono text-primary font-bold">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </motion.div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
