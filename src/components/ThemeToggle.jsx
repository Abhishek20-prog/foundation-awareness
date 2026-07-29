import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-between p-1 w-14 h-7 rounded-sm transition-colors duration-300 focus:outline-none ${className}`}
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-color)"
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      {/* Sliding pill */}
      <span
        className={`absolute w-5 h-5 rounded-sm shadow transform transition-transform duration-300 flex items-center justify-center ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
        style={{
          backgroundColor: isDark ? "var(--sun)" : "var(--grass)",
        }}
      >
        {isDark
          ? <Moon className="w-3 h-3 text-slate-950" />
          : <Sun className="w-3 h-3 text-white" />
        }
      </span>

      {/* Background icons */}
      <span className={`z-10 ml-1 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-40"}`}>
        <Sun className="w-3 h-3" style={{ color: "var(--sun)" }} />
      </span>
      <span className={`z-10 mr-1 transition-opacity duration-200 ${isDark ? "opacity-40" : "opacity-0"}`}>
        <Moon className="w-3 h-3" style={{ color: "var(--sky)" }} />
      </span>
    </button>
  );
}
