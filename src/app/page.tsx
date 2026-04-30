"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SystemLoader from "@/components/ui/SystemLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
    }
    setHasChecked(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  };

  // Prevent any rendering until we've checked the session
  if (!hasChecked) return <div className="min-h-screen bg-background" />;

  return (
    <main className="relative flex flex-col min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <SystemLoader key="loader" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={isLoading ? { opacity: 0, scale: 0.95, filter: "blur(10px)" } : false}
        animate={{ 
          opacity: 1, 
          scale: 1,
          filter: "blur(0px)"
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: isLoading ? 0.1 : 0
        }}
        className="flex flex-col"
      >
        <Hero />
        <div className="relative z-20 bg-background">
          <About />
          <Skills />
          <Achievements />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </motion.div>
    </main>
  );
}
