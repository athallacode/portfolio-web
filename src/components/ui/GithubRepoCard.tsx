"use client";

import { motion } from "framer-motion";
import { GithubRepo } from "@/lib/github";
import GlowCard from "@/components/ui/GlowCard";

interface GithubRepoCardProps {
  repo: GithubRepo;
  index: number;
}

export default function GithubRepoCard({ repo, index }: GithubRepoCardProps) {
  // Format the date
  const updatedAt = new Date(repo.updated_at).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <a 
        href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full group"
      >
        <GlowCard className="h-full p-6 flex flex-col interactive">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              {repo.language && (
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-foreground/40 px-2 py-0.5 border border-white/5 bg-white/5 rounded">
                  {repo.language}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3 text-foreground/40">
              <div className="flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span className="text-xs">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><path d="M5 19l1.1-6.1C6.6 10.1 9.1 8 12 8s5.4 2.1 5.9 4.9L19 19"></path></svg>
                <span className="text-xs">{repo.forks_count}</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {repo.name}
          </h3>
          
          <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-1 line-clamp-2">
            {repo.description || "No description provided for this repository."}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            <span className="text-[10px] text-foreground/30 font-mono">
              Updated {updatedAt}
            </span>
            <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              View Code
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </span>
          </div>
        </GlowCard>
      </a>
    </motion.div>
  );
}
