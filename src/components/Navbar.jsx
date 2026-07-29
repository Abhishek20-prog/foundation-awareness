import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Impact",   href: "#impact" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Contact",  href: "#contact" }
];

export default function Navbar() {
  const { isScrolled, scrollPercent } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark } = useTheme();

  /* Track active section on scroll */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar — Sky Blue */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[55] transition-all duration-100 pointer-events-none"
        style={{ width: `${scrollPercent}%`, backgroundColor: "var(--sky)" }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
          isScrolled
            ? "py-3 backdrop-blur-md border-b shadow-sm"
            : "py-5 bg-transparent"
        }`}
        style={{
          backgroundColor: isScrolled ? (isDark ? "rgba(15,23,42,0.92)" : "rgba(244,248,244,0.95)") : "transparent",
          borderColor: isScrolled ? "var(--border-color)" : "transparent"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 transition-all duration-300 group-hover:opacity-85"
              style={{ borderColor: "rgba(21,128,61,0.3)" }}>
              <img
                src="https://www.inamigosfoundation.org.in/public/storage/settings/1744214680.jpg"
                alt="InAmigos Foundation Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-[1.05rem] tracking-wide transition-colors"
                style={{ fontFamily: "'Lora', serif", color: "var(--text-title)" }}
              >
                InAmigos
              </span>
              <span
                className="text-[9px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                Foundation
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none ${
                    isActive ? "earth-underline" : ""
                  }`}
                  style={{
                    color: isActive ? "var(--grass)" : "var(--text-body)"
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right: Theme Toggle + Join Us CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white rounded transition-all duration-200 hover:opacity-85 focus:outline-none"
              style={{ backgroundColor: "var(--grass)" }}
            >
              Join Us
            </a>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded transition-colors focus:outline-none"
              style={{ color: "var(--text-title)" }}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed inset-x-0 top-[60px] transition-all duration-300 border-b backdrop-blur-md ${
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible pointer-events-none"
          }`}
          style={{
            backgroundColor: isDark ? "rgba(15,23,42,0.97)" : "rgba(244,248,244,0.97)",
            borderColor: "var(--border-color)"
          }}
        >
          <div className="px-6 py-7 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                  className="px-4 py-3 text-base font-semibold rounded transition-colors"
                  style={{
                    color: isActive ? "var(--grass)" : "var(--text-body)",
                    borderLeft: isActive ? "2px solid var(--grass)" : "none",
                    paddingLeft: isActive ? "14px" : "16px"
                  }}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="block w-full py-3.5 text-center text-white text-sm font-bold uppercase tracking-widest rounded transition-opacity hover:opacity-85"
                style={{ backgroundColor: "var(--grass)" }}
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
