"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Ticker from "@/components/ui/Ticker";
import { services } from "@/lib/data";

export default function Services(): ReactElement {
  return (
    <section
      id="services"
      className="bg-cream"
      style={{
        padding: "90px clamp(24px, 5vw, 60px)",
      }}
    >
      <SectionLabel>Services</SectionLabel>

      {/* Animated ticker — the signature element */}
      <Ticker />

      {/* Services grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{
          background: "rgba(43,38,45,0.08)",
          border: "0.5px solid rgba(43,38,45,0.08)",
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            className="bg-cream p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              className="text-[11px] font-light tracking-[0.08em] font-inter mb-4"
              style={{ color: "var(--mauve)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3
              className="font-cormorant text-[21px] font-medium mb-3 leading-tight"
              style={{ color: "var(--ink)" }}
            >
              {service.title}
            </h3>
            <p
              className="font-inter text-[13px] font-light leading-[1.72]"
              style={{ color: "var(--ink-muted)" }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}