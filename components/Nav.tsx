"use client";

import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Nav(): ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-15 h-[60px] flex items-center justify-between"
        style={{
          background: scrolled ? "rgba(242,235,229,0.94)" : "transparent",
          borderBottom: scrolled ? "0.5px solid rgba(43,38,45,0.08)" : "0.5px solid transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          paddingLeft: "clamp(24px, 5vw, 60px)",
          paddingRight: "clamp(24px, 5vw, 60px)",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <span
          className="font-cormorant text-[22px] font-medium tracking-[0.02em] cursor-pointer"
          style={{ color: "var(--ink)" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Finna
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-9 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-[11px] font-normal tracking-[0.1em] uppercase font-inter bg-transparent border-none cursor-pointer transition-colors duration-200"
                style={{ color: "var(--ink-light)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--dusk)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--ink-light)")}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="hidden md:block text-[11px] font-normal tracking-button uppercase font-inter px-5 py-[9px] rounded-[2px] transition-colors duration-200 cursor-pointer border-none"
          style={{ background: "var(--ink)", color: "var(--bone)" }}
          onClick={() => scrollTo("#contact")}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--dusk)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--ink)")}
        >
          {"Let's Talk"}
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X size={20} color="var(--ink)" strokeWidth={1.5} />
          ) : (
            <Menu size={20} color="var(--ink)" strokeWidth={1.5} />
          )}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ background: "var(--bone)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-cormorant text-left text-[40px] font-light bg-transparent border-none cursor-pointer p-0"
                  style={{ color: "var(--ink)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="font-cormorant text-left text-[40px] font-light bg-transparent border-none cursor-pointer p-0"
                style={{ color: "var(--dusk)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {"Let's Talk"}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}