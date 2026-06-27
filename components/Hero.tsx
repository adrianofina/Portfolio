"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const headlineWords = ["Building", "systems", "that", "help", "businesses", "grow."];

export default function Hero(): ReactElement {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-20 overflow-hidden"
      style={{
        paddingLeft: "clamp(24px, 5vw, 60px)",
        paddingRight: "clamp(24px, 5vw, 60px)",
        paddingTop: "60px",
      }}
    >
      {/* Top rule — draws left to right on load */}
      <motion.div
        className="absolute top-[60px] left-0 h-px"
        style={{ background: "rgba(43,38,45,0.1)" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Eyebrow */}
      <motion.div
        className="flex items-center gap-3.5 mb-10"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-9 h-px flex-shrink-0" style={{ background: "var(--dusk)" }} />
        <span
          className="text-[11px] font-normal tracking-eyebrow uppercase font-inter"
          style={{ color: "var(--dusk)" }}
        >
          Systems Builder
        </span>
      </motion.div>

      {/* Headline — staggered word reveal */}
      <h1
        className="font-cormorant font-light mb-8 max-w-5xl"
        style={{
          fontSize: "clamp(46px, 7.5vw, 88px)",
          lineHeight: "1.03",
          letterSpacing: "-0.015em",
          color: "var(--ink)",
        }}
      >
        {headlineWords.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.22em] last:mr-0"
            style={{
              color: word === "grow." ? "var(--rose)" : "var(--ink)",
              fontStyle: word === "grow." ? "italic" : "normal",
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6 + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Sub + CTA row */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="font-inter text-[16px] font-light leading-[1.78] max-w-[520px]"
          style={{ color: "var(--ink-light)" }}
        >
          From internal operations and business management platforms to automation
          tools and customer-facing applications, I design software around
          real-world business needs.
        </p>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={scrollToWork}
            className="text-[11px] font-normal tracking-button uppercase font-inter px-8 py-4 rounded-[2px] border-none cursor-pointer transition-colors duration-200"
            style={{ background: "var(--ink)", color: "var(--bone)" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--dusk)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--ink)")}
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="text-[11px] font-normal tracking-button uppercase font-inter px-8 py-4 rounded-[2px] cursor-pointer transition-all duration-200 bg-transparent"
            style={{
              border: "0.5px solid rgba(43,38,45,0.3)",
              color: "var(--ink)",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "var(--dusk)";
              el.style.color = "var(--dusk)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(43,38,45,0.3)";
              el.style.color = "var(--ink)";
            }}
          >
            {"Let's Talk"}
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-[clamp(24px,5vw,60px)] flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <span
          className="text-[10px] font-normal tracking-[0.12em] uppercase font-inter"
          style={{ color: "var(--ink-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} color="var(--ink-muted)" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ background: "rgba(43,38,45,0.1)" }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.4, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}