"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects(): ReactElement {
  return (
    <section
      id="work"
      style={{
        padding: "90px clamp(24px, 5vw, 60px)",
        background: "var(--bone)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <motion.h2
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(30px, 3.8vw, 48px)",
              lineHeight: "1.12",
              color: "var(--ink)",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Projects that
            <br />
            solve real problems.
          </motion.h2>
        </div>
      </div>

      {/* Grid — 1px gap creates hairline dividers */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{ background: "rgba(43,38,45,0.1)", border: "0.5px solid rgba(43,38,45,0.1)" }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            tag={project.tag}
            category={project.category}
            title={project.title}
            description={project.description}
            href={project.href}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}