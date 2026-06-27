"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";

interface SectionLabelProps {
  children: string;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps): ReactElement {
  return (
    <motion.div
      className="flex items-center gap-3.5 mb-12"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="h-px w-7 flex-shrink-0"
        style={{ background: light ? "rgba(192,169,189,0.7)" : "var(--dusk)" }}
      />
      <span
        className="text-[11px] font-normal tracking-eyebrow uppercase font-inter"
        style={{ color: light ? "var(--mauve)" : "var(--dusk)" }}
      >
        {children}
      </span>
    </motion.div>
  );
}