"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    title: "Business First",
    body: "I start with how your business operates — then design technology that fits that reality, not the other way around.",
  },
  {
    title: "Systems Thinking",
    body: "Every component exists within a larger structure. I design for the whole, not just the part in front of me.",
  },
  {
    title: "Built to Last",
    body: "Platforms that scale, adapt, and grow with your organization — not ones that need rebuilding in 18 months.",
  },
  {
    title: "Purposeful Technology",
    body: "I build because the problem is real. Not to demonstrate capability, but to deliver value.",
  },
];

export default function WhyIBuild(): ReactElement {
  return (
    <section
      className="bg-cream"
      style={{
        padding: "90px clamp(24px, 5vw, 60px)",
      }}
    >
      <SectionLabel>Why I Build</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — narrative */}
        <div
          className="lg:pr-20 lg:border-r"
          style={{ borderColor: "rgba(43,38,45,0.1)" }}
        >
          <motion.h2
            className="font-cormorant font-light mb-7"
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: "1.12",
              color: "var(--ink)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Systems thinking
            <br />
            applied to{" "}
            <em
              className="font-cormorant"
              style={{ fontStyle: "italic", color: "var(--rose)" }}
            >
              real problems.
            </em>
          </motion.h2>

          <motion.div
            className="font-inter text-[15px] font-light leading-[1.9]"
            style={{ color: "var(--ink-light)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Most technology problems are business problems in disguise. A slow
              checkout flow is not a frontend issue — it is a revenue problem. A
              messy internal dashboard is not a UI problem — it is an operational
              bottleneck that costs hours every week.
            </p>
            <p className="mt-5">
              I learned to build software the way most people learn a language: by
              needing to say something. Every project started with a problem I
              watched someone struggle with, a process that was fragile, or an
              opportunity being left on the table.
            </p>
            <p className="mt-5">
              What drives me is the moment a system clicks — when the right
              structure makes a business run more clearly, serve customers better,
              and grow with less friction. That is the work I want to do.
            </p>
          </motion.div>
        </div>

        {/* Right — pillars */}
        <div className="lg:pl-20 flex flex-col justify-center gap-8 mt-12 lg:mt-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="pl-5"
              style={{ borderLeft: "2px solid var(--mauve)" }}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3
                className="font-cormorant text-[19px] font-medium mb-1.5"
                style={{ color: "var(--ink)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="font-inter text-[13px] font-light leading-[1.72]"
                style={{ color: "var(--ink-muted)" }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}