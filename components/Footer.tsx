"use client";

import type { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-center gap-3 px-6 sm:px-15 py-6"
      style={{
        background: "var(--ink)",
        borderTop: "0.5px solid rgba(242,235,229,0.08)",
        paddingLeft: "clamp(24px, 5vw, 60px)",
        paddingRight: "clamp(24px, 5vw, 60px)",
      }}
    >
      <span
        className="font-cormorant text-[16px] font-normal tracking-[0.02em]"
        style={{ color: "rgba(242,235,229,0.35)" }}
      >
        Finna — Systems Builder
      </span>
      <span
        className="font-inter text-[11px] font-normal tracking-[0.06em]"
        style={{ color: "rgba(242,235,229,0.2)" }}
      >
        2025 · Tanzania, East Africa
      </span>
    </footer>
  );
}