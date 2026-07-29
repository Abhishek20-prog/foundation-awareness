import React, { useEffect, useRef } from "react";
import { statistics } from "../data/ngoData";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

/* ── Project stamp labels with Nature Palette elements ── */
const statMeta = {
  "stat-meals":    { project: "SEVA",     accentVar: "var(--sun)"   }, /* Sun / Food */
  "stat-saplings": { project: "PRAKRITI", accentVar: "var(--grass)" }, /* Grass / Environment */
  "stat-interns":  { project: "VIKAS",    accentVar: "var(--sky)"   }, /* Sky / Youth */
  "stat-women":    { project: "UDAAN",    accentVar: "var(--water)" }, /* Water / Empowerment */
  "stat-animals":  { project: "JEEV",     accentVar: "var(--soil)"  }, /* Soil / Animals */
};

/* ── Animated field number with overflow protection ── */
function FieldNumber({ value, suffix, isDark }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el  = numRef.current;
    const obj = { val: 0 };

    const anim = gsap.to(obj, {
      val: value,
      duration: 2.0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        if (el) el.textContent = Math.floor(obj.val).toLocaleString("en-IN") + suffix;
      }
    });

    return () => anim.kill();
  }, [value, suffix]);

  return (
    <span
      ref={numRef}
      className="field-number shrink-0"
      style={{ color: "var(--text-title)" }}
    >
      0
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

  const sectionBg  = "var(--bg-main)";
  const altBg      = "var(--bg-secondary)";
  const titleColor = "var(--text-title)";
  const bodyColor  = "var(--text-body)";
  const mutedColor = "var(--text-muted)";
  const borderClr  = "var(--border-color)";

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: sectionBg, borderTop: `1px solid ${borderClr}` }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header — two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-6">
            <span className="section-eyebrow mb-4 block" style={{ color: "var(--grass)" }}>
              Measured Impact
            </span>
            <h2
              className="tracking-tight leading-tight"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
                color: titleColor
              }}
            >
              Numbers That Belong
              <br />
              <em style={{ color: "var(--sun)", fontStyle: "italic" }}>
                To Real Communities.
              </em>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: bodyColor, lineHeight: 1.7 }}>
              Every figure listed here represents grassroots initiatives coordinated by
              InAmigos Foundation — from meals shared in hardship to ecological plantations,
              stray animal welfare, and youth empowerment programmes.
            </p>
          </div>
        </div>

        {/* ── The Field Numbers — broadsheet treatment with zero overflow ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0"
          style={{ borderTop: `1px solid ${borderClr}` }}
        >
          {statistics.map((stat, idx) => {
            const meta   = statMeta[stat.id] || { project: "", accentVar: "var(--sun)" };

            return (
              <div
                key={stat.id}
                className="flex flex-col py-8 px-4 lg:px-5 min-w-0 transition-colors duration-200"
                style={{
                  borderBottom: `1px solid ${borderClr}`,
                  borderRight: idx < statistics.length - 1 ? `1px solid ${borderClr}` : "none"
                }}
              >
                {/* Project stamp */}
                <span
                  className="stamp-label mb-2 block"
                  style={{ color: meta.accentVar }}
                >
                  {meta.project}
                </span>

                {/* The field number wrapper */}
                <div className="min-w-0 overflow-hidden mb-2">
                  <FieldNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isDark={isDark}
                  />
                </div>

                {/* Thin rule */}
                <div
                  className="my-2"
                  style={{ height: "1px", backgroundColor: borderClr, width: "2rem" }}
                />

                {/* Label */}
                <h3
                  className="truncate max-w-full"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: titleColor,
                    marginBottom: "0.35rem"
                  }}
                >
                  {stat.label}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.8rem",
                    color: mutedColor,
                    lineHeight: 1.55
                  }}
                >
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Assurance strip */}
        <div
          className="mt-12 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{
            backgroundColor: altBg,
            border: `1px solid ${borderClr}`,
            borderRadius: "4px"
          }}
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "var(--grass)" }} />
            <div>
              <span
                className="block font-bold"
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.875rem", color: titleColor }}
              >
                Audited &amp; CSR-1 Compliant
              </span>
              <span
                style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.75rem", color: bodyColor }}
              >
                Transparency audits ensure every rupee is spent directly on social &amp; environmental projects.
              </span>
            </div>
          </div>
          <span
            className="px-4 py-1.5 font-bold uppercase tracking-widest whitespace-nowrap"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.625rem",
              color: "var(--grass)",
              border: "1px solid rgba(21,128,61,0.25)",
              borderRadius: "2px"
            }}
          >
            Section 8 Non-Profit
          </span>
        </div>

      </div>
    </section>
  );
}
