"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  className?: string;
}

export default function MeshGradient({ className }: MeshGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const blobs = Array.from(containerRef.current.querySelectorAll('.blob')) as HTMLElement[];
    let animationFrameId: number;

    // Parallax effect on mouse move specifically for the blobs
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
          const speed = (index + 1) * 20;
          const xOffset = (x - 0.5) * speed;
          const yOffset = (y - 0.5) * speed;

          blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none opacity-60",
        className
      )}
    >
      {/* Orb 1: Primary blue/indigo */}
      <div
        className="blob absolute -top-40 -left-40 w-96 h-96 mix-blend-screen animate-pulse-slow will-change-transform"
        style={{ background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0) 70%)" }}
      ></div>

      {/* Orb 2: Purple/Pink */}
      <div
        className="blob absolute top-20 -right-20 w-[30rem] h-[30rem] mix-blend-screen animate-pulse-slow will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0) 70%)",
          animationDelay: "1s"
        }}
      ></div>

      {/* Orb 3: Bottom accent */}
      <div
        className="blob absolute -bottom-40 left-1/3 w-[25rem] h-[25rem] mix-blend-screen animate-pulse-slow will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, rgba(79, 70, 229, 0) 70%)",
          animationDelay: "2s"
        }}
      ></div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
}
