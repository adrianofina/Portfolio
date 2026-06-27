"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  tag: string;
  category: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function ProjectCard({
  tag,
  category,
  title,
  description,
  href,
  index,
}: ProjectCardProps): ReactElement {
  return (
    <motion.a
      href={href}
      className="group relative bg-bone p-10 flex flex-col overflow-hidden cursor-pointer no-underline"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ backgroundColor: "#EDE5DE" }}
    >
      {/* Left border reveal on hover */}
      <motion.div
        className="absolute top-0 left-0 w-[3px] bg-dusk"
        initial={{ height: "0%" }}
        whileHover={{ height: "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Tag */}
      <div className="flex items-center gap-2 mb-6">
        <span
          className="text-[10px] font-normal tracking-[0.1em] uppercase font-inter px-2.5 py-1 rounded-[1px]"
          style={{
            color: "var(--dusk)",
            background: "rgba(100,114,149,0.1)",
          }}
        >
          {tag}
        </span>
        <span
          className="text-[10px] font-normal tracking-[0.1em] uppercase font-inter"
          style={{ color: "var(--ink-muted)" }}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-cormorant text-[28px] font-medium leading-tight mb-3.5"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-[13px] font-light leading-[1.8] mb-8 flex-1"
        style={{ color: "var(--ink-light)" }}
      >
        {description}
      </p>

      {/* Link */}
      <div
        className="flex items-center gap-2 text-[11px] font-normal tracking-button uppercase font-inter"
        style={{ color: "var(--dusk)" }}
      >
        <span>View {tag}</span>
        <motion.span
          className="flex items-center"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={14} strokeWidth={1.5} />
        </motion.span>
      </div>
    </motion.a>
  );
}