"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { tickerItems } from "@/lib/data";

export default function Ticker(): ReactElement {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      className="overflow-hidden border-y py-[18px] mb-16"
      style={{ borderColor: "rgba(43,38,45,0.1)" }}
      aria-hidden="true"
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 32,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-10 whitespace-nowrap">
            <span
              className="font-cormorant text-[22px] font-normal tracking-wide"
              style={{ color: "var(--ink)" }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--rose)" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}