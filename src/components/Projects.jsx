import React, { useEffect, useRef } from "react";
import { Utensils, BookOpen, Heart, Smile, Leaf, Award, ArrowUpRight } from "lucide-react";
import { projects } from "../data/ngoData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Utensils, BookOpen, Heart, Smile, Leaf, Award
};

/* Each initiative mapped to a Nature Element accent */
const projectAccents = {
  seva:         { border: "var(--sun)",   text: "var(--sun)",   bg: "rgba(217,119,6,0.1)"   }, /* Sun / Food */
  bachpanshala: { border: "var(--sky)",   text: "var(--sky)",   bg: "rgba(2,132,199,0.1)"   }, /* Sky / Education */
  jeev:         { border: "var(--soil)",  text: "var(--soil)",  bg: "rgba(107,62,38,0.1)"   }, /* Soil / Animals */
  udaan:        { border: "var(--water)", text: "var(--water)", bg: "rgba(13,148,136,0.1)"  }, /* Water / Empowerment */
  prakriti:     { border: "var(--grass)", text: "var(--grass)", bg: "rgba(21,128,61,0.1)"   }, /* Grass / Environment */
  vikas:        { border: "var(--sun)",   text: "var(--sun)",   bg: "rgba(217,119,6,0.1)"   }, /* Sun / Skill Development */
};

export default function Projects() {
  const sectionRef = useRef(null);
  const gridRef    = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power1.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const sectionBg  = "var(--bg-secondary)";
  const titleColor = "var(--text-title)";
  const bodyColor  = "var(--text-body)";
  const mutedColor = "var(--text-muted)";
  const borderClr  = "var(--border-color)";
  const cardBg     = "var(--bg-card)";
  const cardBdr    = "var(--border-color)";

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: sectionBg, borderTop: `1px solid ${borderClr}` }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="section-eyebrow mb-4 block" style={{ color: "var(--grass)" }}>
            Core Welfare Initiatives
          </span>
          <h2
            className="mb-4 tracking-tight leading-tight"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              color: titleColor
            }}
          >
            Six Programmes.<br />
            <em style={{ color: "var(--sun)", fontStyle: "italic" }}>One Harmonious Purpose.</em>
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: bodyColor, lineHeight: 1.6 }}>
            InAmigos Foundation runs six distinct projects delivering compassionate service,
            environmental preservation, animal rescue, and youth capacity building across Chhattisgarh.
          </p>
        </div>

        {/* Project grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Award;
            const accent = projectAccents[project.id] || { border: "var(--grass)", text: "var(--grass)", bg: "rgba(21,128,61,0.1)" };

            return (
              <div
                key={project.id}
                className="group relative overflow-hidden flex flex-col text-left transition-all duration-300"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBdr}`,
                  borderRadius: "4px",
                  boxShadow: "var(--shadow-custom)"
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                  style={{ backgroundColor: accent.border }}
                />

                {/* Card body */}
                <div className="pl-6 pr-5 pt-6 pb-5 flex flex-col flex-1">

                  {/* Icon + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: accent.bg }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: accent.text }} />
                    </div>
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-1"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: mutedColor,
                        border: `1px solid ${cardBdr}`,
                        borderRadius: "2px"
                      }}
                    >
                      Flagship
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-1 transition-colors duration-200"
                    style={{
                      fontFamily: "'Lora', Georgia, serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: titleColor,
                      lineHeight: 1.2
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-3 font-semibold uppercase"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      color: accent.text
                    }}
                  >
                    {project.subtitle}
                  </p>
                  <p
                    className="leading-relaxed flex-1"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.875rem",
                      color: bodyColor,
                      lineHeight: 1.65
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Bottom: impact stat */}
                  <div
                    className="mt-5 pt-4 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${cardBdr}` }}
                  >
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: bodyColor,
                        lineHeight: 1.4
                      }}
                    >
                      {project.impact}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: accent.text }}
                    />
                  </div>
                </div>

                {/* Hover reveal — objective panel */}
                <div
                  className="project-card-details absolute inset-x-0 bottom-0 px-6 py-5 flex flex-col gap-2"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderTop: `2px solid ${accent.border}`
                  }}
                >
                  <span
                    className="font-bold uppercase"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      color: accent.text
                    }}
                  >
                    Objective
                  </span>
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: bodyColor,
                      lineHeight: 1.55
                    }}
                  >
                    {project.objective}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
