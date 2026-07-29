import React from "react";
import { ShieldCheck } from "lucide-react";
import { certifications } from "../data/ngoData";
import { useTheme } from "../context/ThemeContext";

export default function Credentials() {
  const { isDark } = useTheme();
  const tickerItems = [...certifications, ...certifications, ...certifications];

  const sectionBg  = "var(--bg-secondary)";
  const borderY    = "var(--border-color)";
  const fadeSrc    = "var(--bg-main)";
  const badgeBg    = "var(--bg-card)";
  const badgeBdr   = "var(--border-color)";
  const nameColor  = "var(--text-title)";
  const descColor  = "var(--text-muted)";

  return (
    <section
      className="relative py-6 overflow-hidden"
      style={{
        backgroundColor: sectionBg,
        borderTop: `1px solid ${borderY}`,
        borderBottom: `1px solid ${borderY}`
      }}
    >
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeSrc}, transparent)` }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeSrc}, transparent)` }} />

      {/* Eyebrow label */}
      <div className="mb-4 flex items-center justify-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--grass)" }} />
        <span className="section-eyebrow" style={{ color: "var(--grass)" }}>
          Verified Non-Profit Certifications
        </span>
      </div>

      {/* Ticker */}
      <div className="flex overflow-hidden">
        <div className="animate-ticker-left flex items-center gap-6 py-1">
          {tickerItems.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-sm border cursor-default shrink-0"
              style={{ backgroundColor: badgeBg, borderColor: badgeBdr }}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: "var(--sun)" }} />
              <div className="flex flex-col">
                <span
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: nameColor }}
                >
                  {cert.name}
                </span>
                <span
                  className="text-[10px] font-medium max-w-[200px] truncate"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: descColor }}
                >
                  {cert.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
