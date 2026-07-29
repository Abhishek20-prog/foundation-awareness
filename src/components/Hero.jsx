import React, { useEffect, useRef } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import gsap from "gsap";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const heroRef    = useRef(null);
  const titleRef   = useRef(null);
  const eyebrowRef = useRef(null);
  const descRef    = useRef(null);
  const btnsRef    = useRef(null);
  const stripRef   = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [eyebrowRef.current, titleRef.current, descRef.current, btnsRef.current, stripRef.current],
        { opacity: 0, y: 28 }
      );

      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 0.15 })
        .to(titleRef.current,   { opacity: 1, y: 0, duration: 1.0 }, "-=0.5")
        .to(descRef.current,    { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(btnsRef.current,    { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(stripRef.current,   { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 72, behavior: "smooth" });
  };

  /* Nature theme variables */
  const heroBg     = "var(--bg-main)";
  const eyebrow    = "var(--grass)";
  const titleColor = "var(--text-title)";
  const bodyColor  = "var(--text-body)";
  const stripBg    = isDark ? "rgba(30,41,59,0.7)"  : "rgba(230,239,232,0.85)";
  const stripBdr   = "var(--border-color)";
  const dividerBg  = "var(--bg-main)";

  const stats = [
    { value: "50,000+", label: "Meals Distributed",  project: "SEVA",     color: "var(--sun)" },
    { value: "20,000+", label: "Saplings Planted",   project: "Prakriti", color: "var(--grass)" },
    { value: "30,000+", label: "Interns Trained",    project: "VIKAS",    color: "var(--sky)" },
    { value: "900+",    label: "Women Empowered",    project: "UDAAN",    color: "var(--water)" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-0 overflow-hidden"
      style={{ backgroundColor: heroBg }}
    >
      {/* Subtle texture overlay — natural atmosphere grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      />

      {/* Content wrapper */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center z-10 w-full">

        {/* Eyebrow label */}
        <div ref={eyebrowRef} className="flex items-center gap-3 mb-6">
          <span className="field-rule" style={{ width: "2.5rem", backgroundColor: eyebrow }} />
          <span className="section-eyebrow" style={{ color: eyebrow }}>
            Section 8 Registered Non-Profit · Bilaspur, Chhattisgarh
          </span>
          <span className="field-rule" style={{ width: "2.5rem", backgroundColor: eyebrow }} />
        </div>

        {/* Editorial Headline */}
        <h1
          ref={titleRef}
          className="mb-6 tracking-tight"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.12,
            color: titleColor,
            maxWidth: "820px"
          }}
        >
          Serving Communities.{" "}
          <em style={{ color: "var(--grass)", fontStyle: "italic" }}>Restoring Nature &amp; Life.</em>
          <br />
          One Act at a Time.
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="mb-10 leading-relaxed"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem",
            color: bodyColor,
            maxWidth: "560px"
          }}
        >
          InAmigos Foundation — founded in 2020 — runs food drives, free education,
          women's skill programmes, and environmental plantations across India.
        </p>

        {/* CTA Buttons */}
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => handleScrollTo("projects")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white rounded transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--grass)", fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.04em" }}
          >
            Our Initiatives
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded transition-all hover:opacity-80"
            style={{
              border: "1px solid var(--border-color)",
              backgroundColor: "transparent",
              color: titleColor,
              fontFamily: "'Source Sans 3', sans-serif"
            }}
          >
            Volunteer with Us
            <HeartHandshake className="w-4 h-4" style={{ color: "var(--grass)" }} />
          </button>
        </div>

        {/* Editorial Stat Strip — compact grid with clean sizing */}
        <div
          ref={stripRef}
          className="w-full max-w-4xl"
          style={{
            borderTop: `1px solid ${stripBdr}`,
            paddingTop: "1.5rem"
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.project}
                className="flex flex-col items-center px-2 py-3 min-w-0"
                style={{
                  borderRight: i < stats.length - 1 ? `1px solid ${stripBdr}` : "none"
                }}
              >
                <span
                  className="font-bold leading-tight mb-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(1.25rem, 2.2vw, 1.85rem)",
                    color: titleColor
                  }}
                >
                  {s.value}
                </span>
                <span className="stamp-label mb-0.5" style={{ color: s.color }}>
                  {s.project}
                </span>
                <span
                  className="text-center truncate max-w-full"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: bodyColor,
                    letterSpacing: "0.02em"
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${dividerBg}, transparent)` }}
      />
    </section>
  );
}
