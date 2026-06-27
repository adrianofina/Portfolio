"use client";

import type { ReactElement } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Calendar, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@finna.dev",
    href: "mailto:hello@finna.dev",
  },
  {
    icon: Calendar,
    label: "Schedule a call",
    value: "Book a 30-minute intro",
    href: "#",
  },
];

export default function Contact(): ReactElement {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", organization: "", message: "" });
    }, 3500);
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--ink)",
        padding: "90px clamp(24px, 5vw, 60px)",
        color: "var(--bone)",
      }}
    >
      <SectionLabel light>Contact</SectionLabel>

      <motion.h2
        className="font-cormorant font-light mb-12 max-w-2xl"
        style={{
          fontSize: "clamp(38px, 5.5vw, 68px)",
          lineHeight: "1.06",
          color: "var(--bone)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {"Let's build something "}
        <em style={{ fontStyle: "italic", color: "var(--mauve)" }}>
          that matters.
        </em>
      </motion.h2>

      {/* Contact channels */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-px mb-12"
        style={{
          background: "rgba(242,235,229,0.1)",
          border: "0.5px solid rgba(242,235,229,0.1)",
        }}
      >
        {channels.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <motion.a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="no-underline flex flex-col p-7 transition-colors duration-200 cursor-pointer"
              style={{ background: "rgba(242,235,229,0.04)", color: "inherit" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(242,235,229,0.1)" }}
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                color="var(--mauve)"
                className="mb-3.5"
              />
              <span
                className="font-inter text-[11px] tracking-[0.1em] uppercase font-normal mb-1.5"
                style={{ color: "rgba(242,235,229,0.4)" }}
              >
                {channel.label}
              </span>
              <span
                className="font-cormorant text-[19px] font-normal"
                style={{ color: "var(--bone)" }}
              >
                {channel.value}
              </span>
            </motion.a>
          );
        })}
      </div>

      {/* Contact form */}
      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="font-inter text-[14px] font-light py-3.5 px-4 rounded-[2px] outline-none transition-colors duration-200"
          style={{
            background: "rgba(242,235,229,0.06)",
            border: "0.5px solid rgba(242,235,229,0.18)",
            color: "var(--bone)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--mauve)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(242,235,229,0.18)")}
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          className="font-inter text-[14px] font-light py-3.5 px-4 rounded-[2px] outline-none transition-colors duration-200"
          style={{
            background: "rgba(242,235,229,0.06)",
            border: "0.5px solid rgba(242,235,229,0.18)",
            color: "var(--bone)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--mauve)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(242,235,229,0.18)")}
        />
        <input
          type="text"
          name="organization"
          value={formState.organization}
          onChange={handleChange}
          placeholder="Your organization or project"
          className="font-inter text-[14px] font-light py-3.5 px-4 rounded-[2px] outline-none transition-colors duration-200 sm:col-span-2"
          style={{
            background: "rgba(242,235,229,0.06)",
            border: "0.5px solid rgba(242,235,229,0.18)",
            color: "var(--bone)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--mauve)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(242,235,229,0.18)")}
        />
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell me about what you're building or the problem you're trying to solve."
          rows={5}
          className="font-inter text-[14px] font-light py-3.5 px-4 rounded-[2px] outline-none transition-colors duration-200 sm:col-span-2 resize-none"
          style={{
            background: "rgba(242,235,229,0.06)",
            border: "0.5px solid rgba(242,235,229,0.18)",
            color: "var(--bone)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "var(--mauve)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(242,235,229,0.18)")}
        />
        <div className="sm:col-span-2 flex justify-end">
          <motion.button
            type="submit"
            className="flex items-center gap-2.5 font-inter text-[11px] font-normal tracking-button uppercase py-4 px-8 rounded-[2px] border-none cursor-pointer transition-colors duration-200"
            style={{
              background: submitted ? "var(--sage)" : "var(--bone)",
              color: "var(--ink)",
            }}
            whileHover={{ backgroundColor: submitted ? "var(--sage)" : "var(--mauve)" }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? "Message Sent" : "Send Message"}
            {!submitted && <ArrowRight size={13} strokeWidth={1.5} />}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}