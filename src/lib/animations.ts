export const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)", scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const pageTransition = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.98 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)", 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  },
  exit: { 
    opacity: 0, 
    filter: "blur(12px)", 
    scale: 1.02, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  }
};
