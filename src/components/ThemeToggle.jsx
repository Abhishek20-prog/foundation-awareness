import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-between p-1 w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${
        isDark
          ? "bg-slate-800/90 border border-slate-700/60 shadow-inner"
          : "bg-amber-100/90 border border-amber-200 shadow-inner"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      {/* Sliding Pill Indicator */}
      <span
        className={`absolute w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-spring flex items-center justify-center ${
          isDark
            ? "translate-x-8 bg-slate-900 text-amber-400 border border-amber-400/30"
            : "translate-x-0 bg-white text-amber-500 border border-amber-200"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 fill-current text-teal-300" />
        ) : (
          <Sun className="w-3.5 h-3.5 fill-current text-amber-500" />
        )}
      </span>

      {/* Sun Icon (Left Side) */}
      <span className={`z-10 ml-1.5 transition-opacity duration-200 ${isDark ? "opacity-40 text-slate-400" : "opacity-0"}`}>
        <Sun className="w-3.5 h-3.5 text-amber-400" />
      </span>

      {/* Moon Icon (Right Side) */}
      <span className={`z-10 mr-1.5 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-40 text-slate-500"}`}>
        <Moon className="w-3.5 h-3.5 text-slate-600" />
      </span>
    </button>
  );
}
