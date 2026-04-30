"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { subject: "Machine Learning", A: 140, fullMark: 150 },
  { subject: "Computer Vision", A: 125, fullMark: 150 },
  { subject: "Time Series", A: 110, fullMark: 150 },
  { subject: "Data Engineering", A: 135, fullMark: 150 },
  { subject: "Cloud Storage", A: 100, fullMark: 150 },
  { subject: "Data Viz", A: 120, fullMark: 150 },
];

export default function SkillsRadarChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full aspect-square max-w-[500px] mx-auto relative group"
    >
      {/* Decorative Glow Background */}
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
      
      <div className="relative glass rounded-[2.5rem] border border-white/10 p-4 w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#ffffff10" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#ffffff40", fontSize: 10, fontWeight: "bold" }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Expertise"
              dataKey="A"
              stroke="var(--primary)"
              fill="var(--primary)"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
        
        {/* Overlay Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.3em] mb-1">Matrix</span>
          <div className="w-12 h-px bg-primary/30" />
        </div>
      </div>
    </motion.div>
  );
}
