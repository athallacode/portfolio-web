"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If not a hash link or we are not on home page, let it navigate normally
    if (!href.startsWith("#") && window.location.pathname !== "/") {
      return;
    }

    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.querySelector(href);
      if (element) {
        // Find navbar height for offset
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        scrolled ? "py-3 bg-background/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight z-50 interactive flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          Nauval<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-white transition-colors interactive"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cv-telkom.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 interactive flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="/cv-telkom.pdf"
            className="p-2 bg-primary text-white rounded-full interactive"
            title="Download CV"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
          <button
            className="z-50 p-2 interactive"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={cn("w-full h-0.5 bg-white transition-all duration-300 origin-left", mobileMenuOpen && "rotate-45 translate-x-[2px] translate-y-[-2px]")} />
              <span className={cn("w-full h-0.5 bg-white transition-all duration-300", mobileMenuOpen && "opacity-0")} />
              <span className={cn("w-full h-0.5 bg-white transition-all duration-300 origin-left", mobileMenuOpen && "-rotate-45 translate-x-[2px] translate-y-[2px]")} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-background/95 border-b border-white/10 md:hidden overflow-hidden transition-all duration-500 ease-[0.16,1,0.3,1]",
          mobileMenuOpen ? "max-h-[500px] py-6" : "max-h-0 py-0"
        )}>
          <ul className="flex flex-col px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/5">
              <a
                href="/cv-telkom.pdf"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
