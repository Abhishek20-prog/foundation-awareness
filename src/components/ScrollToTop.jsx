import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useTheme } from "../context/ThemeContext";

export default function ScrollToTop() {
  const { scrollY, scrollPercent } = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(scrollY > 400);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Circular progress calculations
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center text-emerald-500 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none ${
        isDark
          ? "bg-[#0b0f19] border border-white/10"
          : "bg-white border border-slate-200 shadow-slate-400/30"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll back to top of page"
    >
      {/* SVG Circular Progress */}
      <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="transparent"
          stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}
          strokeWidth="3"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-emerald-500 transition-all duration-100"
        />
      </svg>

      {/* Arrow Icon */}
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
