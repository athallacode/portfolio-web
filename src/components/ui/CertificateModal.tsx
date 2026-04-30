"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Portal from "@/components/ui/Portal";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    issuer: string;
    date: string;
    category: string;
    description: string;
    image: string;
    downloadUrl: string;
    skills: string[];
  } | null;
}

export default function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#15181e] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Left: Image Section */}
              <div className="w-full md:w-[55%] relative h-[250px] md:h-auto bg-black/40 flex items-center justify-center p-4">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner border border-white/5">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg inter-var">
                    {certificate.category}
                  </span>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="w-full md:w-[45%] p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-mono text-sm inter-var">{certificate.issuer}</span>
                    <button 
                      onClick={onClose}
                      className="p-2 hover:bg-white/5 rounded-full transition-colors text-foreground/40 hover:text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight inter-var">{certificate.title}</h2>
                  <div className="flex items-center gap-2 text-foreground/50 text-sm mb-6 pb-6 border-b border-white/5 inter-var">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    Issued on {certificate.date}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-3 inter-var">
                    Certification Description
                  </h3>
                  <p className="text-foreground/70 leading-relaxed inter-var text-sm">
                    {certificate.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-3 inter-var">
                    Validated Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono font-bold text-foreground/60 border border-white/10 inter-var">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={certificate.downloadUrl}
                    download
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20 inter-var text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download
                  </a>
                  <button 
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all inter-var text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
