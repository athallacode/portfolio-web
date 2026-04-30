"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:nauvalysry12@gmail.com?subject=Collaboration Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormState("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState("idle"), 3000);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 opacity-80">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white inter-var">Let's Create Together</h2>
            <div className="w-20 h-1 bg-primary mt-6 rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info Card */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex flex-col gap-8">
              <div className="space-y-6">
                {[
                  { label: "Email", value: "nauvalysry12@gmail.com", icon: Mail, color: "text-blue-400" },
                  { label: "LinkedIn", value: "Nauval Yusriya Athalla", icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>, color: "text-blue-600" },
                  { label: "Instagram", value: "@nflathalla", icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, color: "text-pink-500" },
                ].map((item) => (
                  <div key={item.label} className="group p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300 flex items-center gap-6 interactive">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold text-foreground/40 tracking-widest uppercase">{item.label}</p>
                      <p className="text-lg font-bold tracking-tight text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl">
                <h4 className="font-bold mb-2 text-white">Collaboration Ready</h4>
                <p className="text-sm text-foreground/50 leading-relaxed font-mono italic">
                   "Building intelligent futures, one line of code at a time."
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Card */}
          <ScrollReveal direction="right" delay={0.4}>
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 flex flex-col gap-6 relative overflow-hidden">
               <div className="space-y-2">
                 <label className="text-[10px] font-mono font-bold text-foreground/40 uppercase ml-2 tracking-widest text-white">Name</label>
                 <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 transition-all outline-none text-white placeholder-white/20"
                 />
               </div>
               
               <div className="space-y-2">
                 <label className="text-[10px] font-mono font-bold text-foreground/40 uppercase ml-2 tracking-widest text-white">Email</label>
                 <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 transition-all outline-none text-white placeholder-white/20"
                 />
               </div>
               
               <div className="space-y-2">
                 <label className="text-[10px] font-mono font-bold text-foreground/40 uppercase ml-2 tracking-widest text-white">Message</label>
                 <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we collaborate?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/5 rounded-2xl focus:border-primary/50 transition-all outline-none resize-none text-white placeholder-white/20"
                 />
               </div>
               
               <button 
                type="submit"
                disabled={formState !== "idle"}
                className="w-full py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 mt-4"
               >
                 {formState === "idle" && (
                   <>
                     <Send className="w-5 h-5" />
                     Send Message
                   </>
                 )}
                 {formState === "loading" && (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                 )}
                 {formState === "success" && (
                   <>
                     <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                     Message Sent!
                   </>
                 )}
               </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
