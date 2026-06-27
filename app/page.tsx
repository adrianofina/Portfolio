import type { ReactElement } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyIBuild from "@/components/WhyIBuild";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage(): ReactElement {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Hairline divider between sections on bone bg */}
        <div
          className="mx-[clamp(24px,5vw,60px)] h-px"
          style={{ background: "rgba(43,38,45,0.1)" }}
        />
        <WhyIBuild />
        <div
          className="mx-[clamp(24px,5vw,60px)] h-px"
          style={{ background: "rgba(43,38,45,0.1)" }}
        />
        <Projects />
        <div
          className="mx-[clamp(24px,5vw,60px)] h-px"
          style={{ background: "rgba(43,38,45,0.1)" }}
        />
        <Services />
        <div
          className="mx-[clamp(24px,5vw,60px)] h-px"
          style={{ background: "rgba(43,38,45,0.1)" }}
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}