import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const leftColRef   = useRef(null);
  const rightColRef  = useRef(null);
  const { isDark }   = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power1.out",
          scrollTrigger: { trigger: leftColRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power1.out",
          scrollTrigger: { trigger: rightColRef.current, start: "top 82%", toggleActions: "play none none none" }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const sectionBg  = "var(--bg-main)";
  const altBg      = "var(--bg-secondary)";
  const titleColor = "var(--text-title)";
  const bodyColor  = "var(--text-body)";
  const borderClr  = "var(--border-color)";

  const credentials = [
    "80G Tax Benefits Available",
    "12A Non-Profit Registration",
    "ISO 9001:2015 Quality Standards",
    "Empowering Local Communities"
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: sectionBg, borderTop: `1px solid ${borderClr}` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Column — editorial text */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col text-left">

          <span className="section-eyebrow mb-4" style={{ color: "var(--grass)" }}>
            Who We Are
          </span>

          <h2
            className="mb-6 tracking-tight leading-tight"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: titleColor
            }}
          >
            Fostering Change Through{" "}
            <em style={{ color: "var(--grass)", fontStyle: "italic" }}>Compassion</em>{" "}
            &amp; Environmental Action
          </h2>

          <p
            className="mb-5 leading-relaxed"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: bodyColor }}
          >
            Founded on September 23, 2020, in Bilaspur, Chhattisgarh, by Mr. Govind Shukla,
            the <strong style={{ color: titleColor }}>InAmigos Foundation</strong> is a
            Section 8 registered non-profit organization. We believe that true growth
            occurs when the most vulnerable members of society and our natural ecosystem are empowered.
          </p>
          <p
            className="mb-10 leading-relaxed"
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: bodyColor }}
          >
            Through structured community programmes, we target educational inequalities,
            support stray animals, advance environmental reforestation, and build capacity
            for women. Our internship platform enables youth to cultivate professional
            skills while driving deep social change.
          </p>

          {/* Credentials checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {credentials.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "var(--grass)" }} />
                <span
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: bodyColor
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — editorial image + pull-quote overlay */}
        <div ref={rightColRef} className="lg:col-span-6 flex flex-col gap-6">

          {/* Main editorial photograph */}
          <div className="editorial-figure rounded-sm overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://www.inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg"
              alt="InAmigos Foundation volunteers at Bachpanshala education session"
              className="w-full h-full object-cover"
              style={{ filter: isDark ? "brightness(0.85)" : "none" }}
            />
            {/* Pull-quote overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                background: `linear-gradient(to top, rgba(15,23,42,0.92) 60%, transparent)`,
              }}
            >
              <blockquote
                className="pull-quote text-sm"
                style={{ borderLeftColor: "var(--sun)", color: "#F8FAFC" }}
              >
                "Service to mankind and nature is the highest form of duty." — InAmigos ethos
              </blockquote>
            </div>
          </div>

          {/* Mission + Vision — two stacked editorial panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div
              className="p-5 rounded-sm"
              style={{ backgroundColor: altBg, borderLeft: "3px solid var(--sun)" }}
            >
              <h3
                className="text-sm font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: titleColor, letterSpacing: "0.08em" }}
              >
                Our Mission
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: bodyColor }}
              >
                To create sustainable impact by addressing basic human needs, nurturing
                stray animals, advancing reforestation, and facilitating skill acquisition
                for underprivileged women and youth.
              </p>
            </div>

            <div
              className="p-5 rounded-sm"
              style={{ backgroundColor: altBg, borderLeft: "3px solid var(--grass)" }}
            >
              <h3
                className="text-sm font-bold mb-2 uppercase tracking-wider"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: titleColor, letterSpacing: "0.08em" }}
              >
                Our Vision
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ fontFamily: "'Source Sans 3', sans-serif", color: bodyColor }}
              >
                An inclusive world where compassion overrides indifference — quality
                education reaches every child, nature is conserved, and youth become
                skilled agents of change.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
