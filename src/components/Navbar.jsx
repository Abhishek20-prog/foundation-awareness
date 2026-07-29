import React, { useState, useEffect } from "react";
import { Menu, X, HeartHandshake, ShieldCheck } from "lucide-react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const { isScrolled, scrollPercent } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section covers center
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500 z-55 transition-all duration-100"
        style={{ width: `${scrollPercent}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#070a13]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Original Circular logo */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/10">
              <img
                src="https://www.inamigosfoundation.org.in/public/storage/settings/1744214680.jpg"
                alt="InAmigos Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-wider leading-tight group-hover:text-emerald-400 transition-colors">
                InAmigos
              </span>
              <span className="text-white/60 font-semibold text-[10px] tracking-widest uppercase">
                Foundation
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white overflow-hidden group focus:outline-none"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500 to-blue-600 transition-all duration-300 group-hover:opacity-90" />
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="relative flex items-center gap-1.5">
                Join Us <HeartHandshake className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu Drawer */}
        <div
          className={`md:hidden fixed inset-x-0 top-[65px] bg-[#070a13]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out shadow-2xl ${
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href.slice(1))}
                  className={`px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <hr className="border-white/5 my-2" />
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-center text-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Join Us <HeartHandshake className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
