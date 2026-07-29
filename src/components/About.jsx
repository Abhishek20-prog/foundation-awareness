import React, { useEffect, useRef } from "react";
import { Target, Compass, Award, Shield, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in left column content
      gsap.fromTo(
        leftColRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Fade & scale in right column cards
      gsap.fromTo(
        rightColRef.current.children,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className={`relative py-24 sm:py-32 px-6 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#070a13]" : "bg-slate-50"
      }`}
    >
      {/* Background glow orb */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full glow-orb-emerald opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Column - Text Details */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col text-left">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            Who We Are
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Fostering Change <br className="hidden sm:inline" />
            Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">Compassion</span> & Action
          </h2>
          <p className={`font-medium text-base mb-6 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Founded on September 23, 2020, in Bilaspur, Chhattisgarh, by Mr. Govind Shukla, the <strong className={isDark ? "text-slate-200" : "text-slate-800"}>InAmigos Foundation</strong> is a Section 8 registered non-profit organization. We believe that true growth occurs when the most vulnerable members of society are empowered.
          </p>
          <p className={`font-medium text-base mb-8 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Through structured community programs, we target educational inequalities, support stray animals, support environmental reforestation, and build capacity for women. Our extensive internship platform enables youth to cultivate professional skills while driving deep social change.
          </p>

          {/* Quick Checkpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className={`font-semibold text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>80G Tax Benefits Available</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className={`font-semibold text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>12A Non-Profit Registration</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className={`font-semibold text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>ISO 9001:2015 Quality standards</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className={`font-semibold text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>Empowering Local Communities</span>
            </div>
          </div>
        </div>

        {/* Right Column - Cards Deck */}
        <div ref={rightColRef} className="lg:col-span-6 grid grid-cols-1 gap-6">
          
          {/* Mission Card */}
          <div className={`p-6 rounded-3xl backdrop-blur-md transition-all duration-300 flex gap-5 text-left ${
            isDark
              ? "bg-slate-900/40 border border-white/5 hover:border-emerald-500/30"
              : "bg-white border border-slate-200/80 shadow-md hover:border-emerald-500/40 shadow-slate-200/50"
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <h3 className={`text-lg font-bold mb-2 tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>Our Mission</h3>
              <p className={`text-sm leading-relaxed font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                To create a positive and sustainable impact on society by addressing basic human needs, nurturing stray animals, advancing local reforestation, and facilitating skill acquisition for underprivileged women and student groups.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`p-6 rounded-3xl backdrop-blur-md transition-all duration-300 flex gap-5 text-left ${
            isDark
              ? "bg-slate-900/40 border border-white/5 hover:border-blue-500/30"
              : "bg-white border border-slate-200/80 shadow-md hover:border-blue-500/40 shadow-slate-200/50"
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex flex-col">
              <h3 className={`text-lg font-bold mb-2 tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>Our Vision</h3>
              <p className={`text-sm leading-relaxed font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                To build an inclusive world where compassion overrides indifference; where quality education reaches every child, nature is conserved, stray animals coexist peacefully, and youth are skilled agents of change.
              </p>
            </div>
          </div>

          {/* Pillars Card */}
          <div className={`p-6 rounded-3xl backdrop-blur-md transition-all duration-300 flex gap-5 text-left ${
            isDark
              ? "bg-slate-900/40 border border-white/5 hover:border-indigo-500/30"
              : "bg-white border border-slate-200/80 shadow-md hover:border-indigo-500/40 shadow-slate-200/50"
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-indigo-500" />
            </div>
            <div className="flex flex-col">
              <h3 className={`text-lg font-bold mb-2 tracking-wide ${isDark ? "text-white" : "text-slate-900"}`}>Our Core Values</h3>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <span className={`text-xs font-semibold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <Shield className="w-3.5 h-3.5 text-indigo-500" /> Integrity
                </span>
                <span className={`text-xs font-semibold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <Shield className="w-3.5 h-3.5 text-indigo-500" /> Compassion
                </span>
                <span className={`text-xs font-semibold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <Shield className="w-3.5 h-3.5 text-indigo-500" /> Accountability
                </span>
                <span className={`text-xs font-semibold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <Shield className="w-3.5 h-3.5 text-indigo-500" /> Empowerment
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
