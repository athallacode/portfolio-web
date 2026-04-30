"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  staggerDelay?: number;
}

export default function AnimatedText({
  text,
  className,
  tag: Tag = "div",
  staggerDelay = 0.04
}: AnimatedTextProps) {

  // Split text into words, keeping spaces
  const words = text.split(" ").map(word => `${word}\u00A0`);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      className={className}
    >
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span variants={child} key={index} className="inline-block relative">
            {/* Highlight specific words in "Nauval Athalla" */}
            {word.includes('Nauval') ? (
              <span className="text-gradient font-bold">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
