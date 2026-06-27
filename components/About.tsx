"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutAttributes } from "@/lib/data";

export default function About(): ReactElement {
  return (
    <section
      id="about"
      style={{
        padding: "90px clamp(24px, 5vw, 60px)",
        background: "var(--bone)",
      }}
    >
      <SectionLabel>About</SectionLabel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24">
        {/* Left — narrative */}
        <div>
          <motion.h2
            className="font-cormorant font-light mb-7"
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: "1.12",
              color: "var(--ink)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            A builder who thinks
            <br />
            like a{" "}
            <em style={{ fontStyle: "italic", color: "var(--rose)" }}>
              business owner.
            </em>
          </motion.h2>

          <motion.div
            className="font-inter text-[15px] font-light leading-[1.9]"
            style={{ color: "var(--ink-light)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I am Finna — a systems builder working at the intersection of
              business operations and software development. I do not just write
              code; I study how organizations function, where they lose momentum,
              and how the right technology removes those constraints.
            </p>
            <p className="mt-5">
              My work spans internal business platforms, customer-facing
              applications, automation systems, and digital products. The common
              thread is always the same: understand the problem at an
              organizational level, then build a solution that fits the people who
              will actually use it.
            </p>
            <p className="mt-5">
              I am based in Tanzania and work with businesses and organizations
              ready to use technology as a genuine competitive advantage — not
              just a modernization checkbox.
            </p>
          </motion.div>
        </div>

        {/* Right — attribute table */}
        <motion.div
          className="flex flex-col mt-12 lg:mt-0 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {aboutAttributes.map((attr, i) => (
            <motion.div
              key={attr.label}
              className="flex justify-between items-baseline gap-4 py-[18px]"
              style={{
                borderTop: i === 0 ? "0.5px solid rgba(43,38,45,0.1)" : "none",
                borderBottom: "0.5px solid rgba(43,38,45,0.1)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
            >
              <span
                className="font-inter text-[11px] font-normal tracking-[0.1em] uppercase whitespace-nowrap"
                style={{ color: "var(--ink-muted)" }}
              >
                {attr.label}
              </span>
              <span
                className="font-cormorant text-[16px] font-normal text-right"
                style={{ color: "var(--ink)" }}
              >
                {attr.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}